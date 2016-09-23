<?php
/* Web Intersect Social Network Template System and CMS v1.34
 * Copyright (c) 2011 Adam Khoury
 * Licensed under the GNU General Public License version 3.0 (GPLv3)
 * http://www.webintersect.com/license.php
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  
 * See the GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Date: February 9, 2010
 *------------------------------------------------------------------------------------------------*/
session_start();
include_once "../forum/scripts/connect_to_mysql.php"; // Connect to the database
// Check the HTTP_REFERER for light level security
$ref = parse_url($_SERVER['HTTP_REFERER']); 
$host = $ref["host"];

// Be sure the user session vars are all set
if (!isset($_SESSION['id']) || !isset($_SESSION['username']) || !isset($_SESSION['useremail']) || !isset($_SESSION['userpass'])) {
	echo "Your session has timed out weenis.";
	exit(); // This you will want to handle more smoothly
}
// Be sure all form variables are present to proceed
if (!isset($_POST['post_type']) || !isset($_POST['post_body']) || !isset($_POST['fsID']) || !isset($_POST['fsTitle']) || !isset($_POST['uid']) || !isset($_POST['upass'])) {
	echo "Important variables from the form are missing weenis";
	exit();
}
// Filter all of the common variables
$post_type = $_POST['post_type']; 
$post_body = $_POST['post_body'];
$post_body = nl2br(htmlspecialchars($post_body));
$post_body = mysql_real_escape_string($post_body);
$forum_section_id = preg_replace('#[^0-9]#i', '', $_POST['fsID']); 
$forum_section_title = preg_replace('#[^A-Za-z 0-9]#i', '', $_POST['fsTitle']); 
$member_id = preg_replace('#[^0-9]#i', '', $_POST['uid']); 
$post_author = preg_replace('#[^A-Za-z0-9]#i', '', $_SESSION['username']); 
$member_password = mysql_real_escape_string($_POST['upass']);
// Be sure the posted variables match the user's session variables
if ($_SESSION['id'] != $member_id || $_SESSION['userpass'] != $member_password) {
	echo "Your id and/or password is a mismatch weenis";
	exit();
}
// Check the database to be sure that their ID, password, and email session variables all match in the database
$u_id = $member_id;
$u_name = mysql_real_escape_string($_SESSION['username']);
$u_email = mysql_real_escape_string($_SESSION['useremail']);
$u_pass = mysql_real_escape_string($_SESSION['userpass']);
$sql = mysql_query("SELECT * FROM myMembers WHERE id='$u_id' AND username='$u_name' AND email='$u_email' AND password='$u_pass'");
$numRows = mysql_num_rows($sql);
if ($numRows < 1) {
	    echo "ERROR: You do not exist in the system weenis";
	    exit();
}
// Check the database to be sure that this forum section exists
$sql = mysql_query("SELECT * FROM forum_sections WHERE id='$forum_section_id' AND title='$forum_section_title'");
$numRows = mysql_num_rows($sql);
if ($numRows < 1) {
	    echo "ERROR: That forum section deos not exist weenis";
	    exit();
}
// Prevent this member from posting more than 30 times in one day
$sql = mysql_query("SELECT id FROM forum_posts WHERE post_author_id='$member_id' AND DATE(date_time) = DATE(NOW()) LIMIT 32");
$numRows = mysql_num_rows($sql);
if ($numRows > 30) {
	echo "ERROR: You can post only 30 times per day. Your maximum has been reached.";
    exit();
}
// Add this post to the database now. The query depends on the "post_type" value
// Only if the post_type is "a" ///////////////////////////////////////////////////////////////////////////////////
if ($post_type == "a") {
	$post_title = preg_replace('#[^A-za-z0-9 ?!.,]#i', '', $_POST['post_title']);	
	if ($post_title == "") { echo "The Topic Title is missing weenis"; exit(); }
	if (strlen($post_title) < 10) { echo "Your Topic Title is less than 10 characters weenis"; exit(); }
	$sql = mysql_query("INSERT INTO forum_posts (post_author, post_author_id, date_time, type, section_title, section_id, thread_title, post_body) 
     VALUES('$post_author','$member_id',now(),'a','$forum_section_title','$forum_section_id','$post_title','$post_body')") or die (mysql_error());
	$this_id = mysql_insert_id();
	//$sql = mysql_query("UPDATE forum_posts SET otid='$this_id' WHERE id='$this_id'"); 
	header("location: view_thread.php?id=$this_id"); 
    exit();
}
// Only if the post_type is "b" ////////////////////////////////////////////////////////////////////////////////////
if ($post_type == "b") {
	$this_id = preg_replace('#[^0-9]#i', '', $_POST['tid']);
	if ($this_id == "") { echo "The thread ID is missing weenis"; exit(); }
	$sql = mysql_query("INSERT INTO forum_posts (post_author, post_author_id, otid, date_time, type, post_body) VALUES('$post_author','$member_id','$this_id',now(),'b','$post_body')") or die (mysql_error());
	$post_body = stripslashes($post_body);
	echo $post_body;
	// YOU CAN CHOOSE TO EMAIL ALERT ALL OF THE PEOPLE THAT ARE PART OF THIS THREAD
	// AT THIS POINT. (JUST BE SURE YOU DO NOT EMAIL THE PERSON WHO JUST LEFT THE RESPONSE)
}
?>
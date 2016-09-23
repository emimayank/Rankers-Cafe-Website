<?php 
 // Connects to Our Database 
 //mysql_connect("your.hostaddress.com", "username", "password") or die(mysql_error()); 
 mysql_connect("localhost", "root", "monkey123") or die(mysql_error()); 
 mysql_select_db("student_database") or die(mysql_error()); 
 ?> 
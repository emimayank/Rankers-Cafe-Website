<?php
// Start_session, check if user is logged in or not, and connect to the database all in one included file
include_once("checkuserlog.php");
?>
<?php
$from = ""; // Initialize the email from variable
// This code runs only if the username is posted
if (isset ($_POST['username'])){
	 
	 $username = preg_replace('#[^A-Za-z0-9]#i', '', $_POST['username']); // filter everything but letters and numbers
	 $gender = preg_replace('#[^a-z]#i', '', $_POST['gender']); // filter everything but lowercase letters
	 $b_m = preg_replace('#[^0-9]#i', '', $_POST['birth_month']); // filter everything but numbers
     $b_d = preg_replace('#[^0-9]#i', '', $_POST['birth_day']); // filter everything but numbers
	 $b_y = preg_replace('#[^0-9]#i', '', $_POST['birth_year']); // filter everything but numbers
     $email1 = $_POST['email1'];
     $email2 = $_POST['email2'];
     $pass1 = $_POST['pass1'];
     $pass2 = $_POST['pass2'];
	 
     $humancheck = $_POST['humancheck'];

     $email1 = stripslashes($email1); 
     $pass1 = stripslashes($pass1); 
     $email2 = stripslashes($email2);
     $pass2 = stripslashes($pass2); 
	 
     $email1 = strip_tags($email1);
     $pass1 = strip_tags($pass1);
     $email2 = strip_tags($email2);
     $pass2 = strip_tags($pass2);

     // Connect to database
     include_once "connect_to_mysql.php";
     $emailCHecker = mysql_real_escape_string($email1);
	 $emailCHecker = str_replace("`", "", $emailCHecker);
	 // Database duplicate username check setup for use below in the error handling if else conditionals
	 $sql_uname_check = mysql_query("SELECT username FROM mymembers WHERE username='$username'"); 
     $uname_check = mysql_num_rows($sql_uname_check);
     // Database duplicate e-mail check setup for use below in the error handling if else conditionals
     $sql_email_check = mysql_query("SELECT email FROM mymembers WHERE email='$emailCHecker'");
     $email_check = mysql_num_rows($sql_email_check);

     // Error handling for missing data
     if ((!$username) || (!$gender) || (!$b_m) || (!$b_d) || (!$b_y) || (!$email1) || (!$email2) || (!$pass1) || (!$pass2)) { 

     $errorMsg = 'ERROR: You did not submit the following required information:<br /><br />';
  
     if(!$username){ 
       $errorMsg .= ' * User Name<br />';
     } 
     if(!$gender){ 
       $errorMsg .= ' * Gender: Confirm your sex.<br />';
     } 	
	 if(!$b_m){ 
       $errorMsg .= ' * Birth Month<br />';      
     }
	 if(!$b_d){ 
       $errorMsg .= ' * Birth Day<br />';        
     } 
	 if(!$b_y){ 
       $errorMsg .= ' * Birth year<br />';        
     } 		
	 if(!$email1){ 
       $errorMsg .= ' * Email Address<br />';      
     }
	 if(!$email2){ 
       $errorMsg .= ' * Confirm Email Address<br />';        
     } 	
	 if(!$pass1){ 
       $errorMsg .= ' * Login Password<br />';      
     }
	 if(!$pass2){ 
       $errorMsg .= ' * Confirm Login Password<br />';        
     } 	
	
     } else if ($email1 != $email2) {
              $errorMsg = 'ERROR: Your Email fields below do not match<br />';
     } else if ($pass1 != $pass2) {
              $errorMsg = 'ERROR: Your Password fields below do not match<br />';
     } else if ($humancheck != "") {
              $errorMsg = 'ERROR: The Human Check field must be cleared to be sure you are human<br />';		 
     } else if (strlen($username) < 4) {
	           $errorMsg = "<u>ERROR:</u><br />Your User Name is too short. 4 - 20 characters please.<br />"; 
     } else if (strlen($username) > 20) {
	           $errorMsg = "<u>ERROR:</u><br />Your User Name is too long. 4 - 20 characters please.<br />"; 
     } else if ($uname_check > 0){ 
              $errorMsg = "<u>ERROR:</u><br />Your User Name is already in use inside of our system. Please try another.<br />"; 
     } else if ($email_check > 0){ 
              $errorMsg = "<u>ERROR:</u><br />Your Email address is already in use inside of our system. Please use another.<br />"; 
     } else { // Error handling is ended, process the data and add member to database
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
     $email1 = mysql_real_escape_string($email1);
     $pass1 = mysql_real_escape_string($pass1);
	 
     // Add MD5 Hash to the password variable
     $db_password = md5($pass1); 
	 
	 // Convert Birthday to a DATE field type format(YYYY-MM-DD) out of the month, day, and year supplied 
	 $full_birthday = "$b_y-$b_m-$b_d";

     // GET USER IP ADDRESS
     $ipaddress = getenv('REMOTE_ADDR');

     // Add user info into the database table for the main site table
     $sql = mysql_query("INSERT INTO mymembers (username, gender, birthday, email, password, ipaddress, sign_up_date) 
     VALUES('$username','$gender','$full_birthday','$email1','$db_password', '$ipaddress', now())")  
     or die (mysql_error());
 
     $id = mysql_insert_id();
	 
	 // Create directory(folder) to hold each user's files(pics, MP3s, etc.)		
     //mkdir("members/$id", 0755);	

    //!!!!!!!!!!!!!!!!!!!!!!!!!    Email User the activation link    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $to = "$email1";
										 
    $from = $dyn_www; // $adminEmail is established in [ scripts/connect_to_mysql.php ]
    $subject = 'Complete Your ' . $dyn_www . ' Registration';
    //Begin HTML Email Message
    $message = "Hi $username,

   Complete this step to activate your login identity at $dyn_www

   Click the line below to activate when ready

   http://$dyn_www/wi/activation.php?id=$id&sequence=$db_password
   If the URL above is not an active link, please copy and paste it into your browser address bar

   Login after successful activation using your:  
   E-mail Address: $email1 
   Password: $pass1

   See you on the site!";
   //end of message
	$headers  = "From: $from\r\n";
    $headers .= "Content-type: text\r\n";

    mail($to, $subject, $message, $headers);
	
   $msgToUser = "<h2>One Last Step - Activate through Email</h2><h4>$username, there is one last step to verify your email identity:</h4><br />
   In a moment you will be sent an Activation link to your email address.<br /><br />
   <br />
   <strong><font color=\"#990000\">VERY IMPORTANT:</font></strong> 
   If you check your email with your host providers default email application, there may be issues with seeing the email contents.  If this happens to you and you cannot read the message to activate, download the file and open using a text editor.<br /><br />
   ";
   
   include_once 'msgToUser.php'; 
   exit();

   } // Close else after duplication checks

} else { // if the form is not posted with variables, place default empty variables so no warnings or errors show
	  
	  $errorMsg = "";
      $username = "";
	  $gender = "";
	  $b_m = "";
	  $b_d = "";
	  $b_y = "";
	  $email1 = "";
	  $email2 = "";
	  $pass1 = "";
	  $pass2 = "";
}

?>
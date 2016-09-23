<?php

include_once("checkuserlog.php");
$outputForUser = "";
if (isset($_POST['email']) && $_POST['email'] != "") {

       $email = $_POST['email'];
       $email   = strip_tags($email);
	   $email= str_replace("`", "", $email);
	   $email = mysql_real_escape_string($email);
       $sql = mysql_query("SELECT * FROM mymembers WHERE email='$email' AND email_activated='1'"); 
       $emailcheck = mysql_num_rows($sql);
       if ($emailcheck == 0){
       
              $outputForUser = '<font color="#FF0000">There is no account with that info<br />
                                                                                     in our records, please try again.';

       } else {
				 
				$emailcut = substr($email, 0, 4); // Takes first four characters from the user email address
				$randNum = rand(); 
                $tempPass = "$emailcut$randNum"; 
				$hashTempPass = md5($tempPass);

                @mysql_query("UPDATE mymembers SET password='$hashTempPass' where email='$email'") or die("cannot set your new password");

                $headers ="From: admin@rankerscafe.com\n"; // $adminEmail is established in [ scripts/connect_to_mysql.php ]
                $headers .= "MIME-Version: 1.0\n";
                $headers .= "Content-type: text/html; charset=iso-8859-1 \n";
                $subject ="Login Password Generated";

                $body="<div align=center><br>----------------------------- New Login Password --------------------------------<br><br><br>
                Your New Password for our site is: <font color=\"#006600\"><u>$tempPass</u></font><br><br />
				</div>";

				if(mail($email,$subject,$body,$headers)) {

								$outputForUser = "<font color=\"#006600\"><strong>Your New Login password has been emailed to you.</strong></font>";
				} else {
							   
								$outputForUser = '<font color="#FF0000">Password Not Sent.<br /><br />
                                                                                               Please Contact Us...</font>';
				}
				
     }

} else {
 
   $outputForUser = 'Enter your email address into the field below.';

}
////////////////////////////////////////////////////////////////////
?>

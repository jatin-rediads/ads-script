<?php

  $db_host = 'localhost';
  $db_user = 'adsinnov_pixel';
  $db_password = 'lO7sDAeHY4_B';
  $db_db = 'adsinnov_pixel';
  $db_port = 8889;

  $mysqli = new mysqli(
    $db_host,
    $db_user,
    $db_password,
    $db_db
  );

  if ($mysqli->connect_error) {
    echo 'Errno: '.$mysqli->connect_errno;
    echo '<br>';
    echo 'Error: '.$mysqli->connect_error;
    exit();
  }

  echo 'Success: A proper connection to MySQL was made.';
  echo '<br>';
  echo 'Host information: '.$mysqli->host_info;
  echo '<br>';
  echo 'Protocol version: '.$mysqli->protocol_version;


//get the url parameter from URL
$userid = $_GET['userid'];
$domain = $_GET['url'];
$event = $_GET['event'];
$timestamp = $_GET['timestamp'];
$custom_event = $_GET['ed'];
$pixel_version = $_GET['pixel_version'];
$location_url = $_GET['location_url'];
$referrer_url = $_GET['referrer_url'];
$encoding = $_GET['encoding'];
$screen_resolution = $_GET['screen_resolution'];
$viewport = $_GET['viewport'];
$color_depth = $_GET['color_depth'];
$title = $_GET['title'];
$browser = $_GET['browser'];
$mobile = $_GET['mobile'];
$useragent = $_GET['useragent'];
$timezone = $_GET['timezone'];
$metacontent = $_GET['metacontent'];
$metakeywords = $_GET['metakeywords'];
$country = $_GET['country'];
$city = $_GET['city'];
$region = $_GET['region'];
$isp = $_GET['isp'];
$ip = $_GET['ip'];
$gi = $_GET['gi'];
$utm_source = $_GET['utm_source'];
$utm_medium = $_GET['utm_medium'];
$utm_campaign = $_GET['utm_campaign'];
$utm_term = $_GET['utm_term'];
$utm_content = $_GET['utm_content'];

//insert data into database
$fetchuid = "select ID from `pixel` where userid='$userid'";
$result = $mysqli -> query($fetchuid);

if ($result->num_rows <= 0) {
    $insert_sql = "insert into `pixel`( `userid`, `domain`, `event`, `custom_event`, `version`, `location`, `referrer_location`, `timestamp_ms`, `encoding`, `screen_resolution`, `viewport`, `colordepth`, `title`, `browser`, `mobile_device`, `user_agent`, `timezone`,`meta_description`,`meta_keyword`,`country`,`city`,`region`,`isp`,`isp_type`,`ip`, `utm_source`, `utm_medium`, `utm_term`, `utm_campaign`, `utm_content`) values ('".$userid."','".$domain."','".$event."','".$custom_event."','".$pixel_version."','".$location_url."','".$referrer_url."','".$timestamp."','".$encoding."','".$screen_resolution."','".$viewport."','".$color_depth."','".$title."','".$browser."','".$mobile."','".$useragent."','".$timezone."','".$metacontent."','".$metakeywords."','".$country."','".$city."','".$region."','".$isp."','".$ip."','".$gi."','".$utm_source."','".$utm_medium."','".$utm_term."','".$utm_campaign."','".$utm_content."')";
    echo $insert_sql;
    $mysqli -> query($insert_sql);
}

  $mysqli->close();
?>
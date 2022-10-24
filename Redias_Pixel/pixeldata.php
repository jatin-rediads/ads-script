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

  $mysqli->close();


$fetchuid = "select id from `pixel` where userid='".$_request['userid']."'";
$result = $mysqli -> query($fetchuid);

if ($result->num_rows <= 0) {
    $insert_sql = "insert into `pixel`( `userid`, `domain`, `event`, `custom_event`, `version`, `location`, `referrer_location`, `timestamp_ms`, `encoding`, `screen_resolution`, `viewport`, `colordepth`, `title`, `browser`, `mobile_device`, `user_agent`, `timezone`,`meta_description`,`meta_keyword`,`country`,`city`,`region`,`isp`,`isp_type`,`ip`, `utm_source`, `utm_medium`, `utm_term`, `utm_campaign`, `utm_content`) values ('".$_request['userid']."','".$_request['url']."','".$_request['event']."','".$_request['ed']."','".$_request['pixel_version']."','".$_request['location_url']."','".$_request['referrer_url']."','".$_request['timestamp']."','".$_request['encoding']."','".$_request['screen_resolution']."','".$_request['viewport']."','".$_request['color_depth:']."','".$_request['title']."','".$_request['browser']."','".$_request['mobile']."','".$_request['useragent']."','".$_request['timezone']."','".$_request['metacontent']."','".$_request['metakeywords']."','".$_request['country']."','".$_request['city']."','".$_request['region']."','".$_request['isp']."','".$_request['ip']."','".$_request['gi']."','".$_request['utm_source']."','".$_request['utm_medium']."','".$_request['utm_term']."','".$_request['utm_campaign']."','".$_request['utm_content']."')";
    $mysqli -> query($insert_sql);
}

// if($_request['ev'] != "pageload" && $_request['ev'] != "pageclose"){
//     $insert_sql_meta = "insert into `pixel`( `userid`, `location`, `meta_key`, `meta_value`) values ('".$_request['userid']."','".$_request['url']."','".$_request['event']."','".$_request['ed']."')";
//     $mysqli -> query($insert_sql_meta);
// }

?>
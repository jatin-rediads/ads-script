<?php

$fetchuid = "SELECT id FROM `chitarkatha` WHERE chitarkatha_uid='".$_REQUEST['uid']."'";
$result = $mysqli -> query($fetchuid);

if ($result->num_rows <= 0) {
    $insert_sql = "INSERT INTO `chitarkatha`( `chitarkatha_uid`, `domain`, `event`, `custom_event`, `version`, `location`, `referrer_location`, `timestamp_ms`, `encoding`, `screen_resolution`, `viewport`, `colordepth`, `title`, `browser`, `mobile_device`, `user_agent`, `timezone`,`meta_description`,`meta_keyword`,`country`,`city`,`region`,`isp`,`isp_type`,`ip`, `utm_source`, `utm_medium`, `utm_term`, `utm_campaign`, `utm_content`) VALUES ('".$_REQUEST['uid']."','".$_REQUEST['id']."','".$_REQUEST['ev']."','".$_REQUEST['ed']."','".$_REQUEST['v']."','".$_REQUEST['dl']."','".$_REQUEST['rl']."','".$_REQUEST['ts']."','".$_REQUEST['de']."','".$_REQUEST['sr']."','".$_REQUEST['vp']."','".$_REQUEST['cd']."','".$_REQUEST['dt']."','".$_REQUEST['bn']."','".$_REQUEST['md']."','".$_REQUEST['ua']."','".$_REQUEST['tz']."','".$_REQUEST['tt']."','".$_REQUEST['mk']."','".$_REQUEST['gy']."','".$_REQUEST['cy']."','".$_REQUEST['rn']."','".$_REQUEST['isp']."','".$_REQUEST['ipt']."','".$_REQUEST['gi']."','".$_REQUEST['utm_source']."','".$_REQUEST['utm_medium']."','".$_REQUEST['utm_term']."','".$_REQUEST['utm_campaign']."','".$_REQUEST['utm_content']."')";
    $mysqli -> query($insert_sql);
}

if($_REQUEST['ev'] != "pageload" && $_REQUEST['ev'] != "pageclose"){
    $insert_sql_meta = "INSERT INTO `chitarkatha_meta`( `chitarkatha_uid`, `location`, `meta_key`, `meta_value`) VALUES ('".$_REQUEST['uid']."','".$_REQUEST['dl']."','".$_REQUEST['ev']."','".$_REQUEST['ed']."')";
    $mysqli -> query($insert_sql_meta);
}

?>
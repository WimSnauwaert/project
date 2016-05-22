<?php 
$id= $_POST['id'];
$klikschade= intval($_POST['klikschade']);
$gold = intval($_POST['gold']);
$herosouls = intval($_POST['herosouls']);
$diamonds = intval($_POST['diamonds']);
$behaaldlevel = intval($_POST['behaaldlevel']);
$level = intval($_POST['level']);
$kliklevel = intval($_POST['kliklevel']);
$hero0 = intval($_POST['hero0']);
$hero1 = intval($_POST['hero1']);
$hero2 = intval($_POST['hero2']);
$hero3 = intval($_POST['hero3']);
$hero4 = intval($_POST['hero4']);
$hero5 = intval($_POST['hero5']);
$hero6 = intval($_POST['hero6']);
$hero7 = intval($_POST['hero7']);
$hero8 = intval($_POST['hero8']);
$hero9 = intval($_POST['hero9']);
$hero10 = intval($_POST['hero10']);
$goldpotion = intval($_POST['goldpotion']);
$diamondpotion = intval($_POST['diamondpotion']);
$damagesword = intval($_POST['damagesword']);
$clicksword = intval($_POST['clicksword']);
$getherosouls = intval($_POST['getherosouls']);
$ancient1 = intval($_POST['ancient1']);
$ancient2 = intval($_POST['ancient2']);
$statstotalkliks = intval($_POST['statstotalkliks']);
$statsmonsterskills = intval($_POST['statsmonsterskills']);
$statsbosskills = intval($_POST['statsbosskills']);
$statsascensions = intval($_POST['statsascensions']);
$statshighestlvl = intval($_POST['statshighestlvl']);   
  
    $myFile = "../JSON/test.json";
    $base;
   $replacements= array(); // create empty array

  try
  {
      
      //Get data from existing json file
	   $jsondata = file_get_contents($myFile);

	   // converts json data into array
	   $arr_data = json_decode($jsondata, true);
      
      $arr_data["USERS"][$id]['klikschade'] = $klikschade;
      $arr_data["USERS"][$id]['gold'] = $gold;
      $arr_data["USERS"][$id]['herosouls'] = $herosouls;
      $arr_data["USERS"][$id]['diamonds'] = $diamonds;
      $arr_data["USERS"][$id]['behaaldlvl'] = $behaaldlevel;
      $arr_data["USERS"][$id]['lvl'] = $level;
      $arr_data["USERS"][$id]['kliklevel'] = $kliklevel;
      $arr_data["USERS"][$id]['hero0lvl'] = $hero0;
      $arr_data["USERS"][$id]['hero1lvl'] = $hero1;
      $arr_data["USERS"][$id]['hero2lvl'] = $hero2;
      $arr_data["USERS"][$id]['hero3lvl'] = $hero3;
      $arr_data["USERS"][$id]['hero4lvl'] = $hero4;
      $arr_data["USERS"][$id]['hero5lvl'] = $hero5;
      $arr_data["USERS"][$id]['hero6lvl'] = $hero6;
      $arr_data["USERS"][$id]['hero7lvl'] = $hero7;
      $arr_data["USERS"][$id]['hero8lvl'] = $hero8;
      $arr_data["USERS"][$id]['hero9lvl'] = $hero9;
      $arr_data["USERS"][$id]['hero10lvl'] = $hero10;
      $arr_data["USERS"][$id]['goldpotion'] = $goldpotion;
      $arr_data["USERS"][$id]['diamondpotion'] = $diamondpotion;
      $arr_data["USERS"][$id]['damagesword'] = $damagesword;
      $arr_data["USERS"][$id]['clicksword'] = $clicksword;
      $arr_data["USERS"][$id]['getherosouls'] = $getherosouls;
      $arr_data["USERS"][$id]['ancient1'] = $ancient1;
      $arr_data["USERS"][$id]['ancient2'] = $ancient2;
      
      $arr_data["USERS"][$id]['statstotalkliks'] = $statstotalkliks;
      $arr_data["USERS"][$id]['statsmonsterskills'] = $statsmonsterskills;
      $arr_data["USERS"][$id]['statsbosskills'] = $statsbosskills;
      $arr_data["USERS"][$id]['statsascensions'] = $statsascensions;
      $arr_data["USERS"][$id]['statshighestlvl'] = $statshighestlvl;

echo '<pre>' . print_r($arr_data, true) . '</pre>';
      
      
       //Convert updated array to JSON
	   $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
	   
	   //write json data into data.json file
	   if(file_put_contents($myFile, $jsondata)) {
	        echo "Data successfully saved";
	    }
	   else{ 
	        echo "error";
       }

  }
   catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
   }

 ?>

<?php
   	
   $myFile = "../JSON/test.json";
   $arr_data = array(); // create empty array
    $ok = true;

  try
  {
      
      //Get data from existing json file
	   $jsondata = file_get_contents($myFile);

	   // converts json data into array
	   $arr_data = json_decode($jsondata, true);
      
	   // Aantal elementen van de array bepalen
      $tellen = count($arr_data["USERS"]);
      
      //Get form data
	  $formdata = array(
            'id'=> $tellen,
            'user'=> $_POST['userR'],
            'pass'=> $_POST['passR'],
            'klikschade'=> 1,
            'gold'=> 0,
            'herosouls'=> 0,
            'diamonds'=> 0,
            'behaaldlvl'=> 1,
            'lvl'=> 1,
            'kliklevel'=> 1,
            'hero0lvl'=> 0,
            'hero1lvl'=> 0,
            'hero2lvl'=> 0,
            'hero3lvl'=> 0,
            'hero4lvl'=> 0,
            'hero5lvl'=> 0,
            'hero6lvl'=> 0,
            'hero7lvl'=> 0,
            'hero8lvl'=> 0,
            'hero9lvl'=> 0,
            'hero10lvl'=> 0,
            'goldpotion'=> 0,
            'diamondpotion'=> 0,
            'damagesword'=> 0,
            'clicksword'=> 0,
            'getherosouls'=> 0,
            'ancient1'=> 0,
            'ancient2'=> 0,
            'statstotalkliks'=> 0,
            'statsmonsterskills'=> 0,
            'statsbosskills'=> 0,
            'statsascensions'=> 0,
            'statshighestlvl'=> 0,
            'getherosouls'=> 0
	   );
      
      /*
      $formdata = array(
           'id'=> 0,
	       'user'=> "persoon1",
	       'pass'=> "paswoord",
           'klikschade'=> 1,
           'gold'=> 0,
           'herosouls'=> 0,
           'diamonds'=> 0,
           'behaaldlvl'=> 1,
           'lvl'=> 1,
           'hero0lvl'=> 0,
            'hero1lvl'=> 0,
            'hero2lvl'=> 0,
            'hero3lvl'=> 0,
            'hero4lvl'=> 0,
            'hero5lvl'=> 0,
            'hero6lvl'=> 0,
            'hero7lvl'=> 0,
            'hero8lvl'=> 0,
            'hero9lvl'=> 0,
            'hero10lvl'=> 0
	   );*/
      
      for($i=0;$i < $tellen;$i++)
      {
          $nieuweNaam = $formdata["user"];
          $bestaandeNaam = $arr_data["USERS"][$i]["user"];
          
          echo "$nieuweNaam, $bestaandeNaam<br/>";
            if($nieuweNaam == $bestaandeNaam)
            {
                $ok = false;
            }
        }
      
      if($ok == true){
      // kijken hoe het JSON bestand in elkaar zit
      //echo '<pre>' . print_r($arr_data, true) . '</pre>';
      
	   // Push user data to array
	   array_push($arr_data["USERS"],$formdata);
      

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

   }
   catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
   }

?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Project MI2</title>
    <link rel="stylesheet" type="text/css" href="../JS/jquery.mobile-1.4.5.css"/>
    <link rel="stylesheet" type="text/css" href="../CSS/style.css">
    <script type="text/javascript" src="../JS/jquery-1.12.1.js"></script>
    <script type="text/javascript" src="../JS/jquery.mobile-1.4.5.js"></script>
</head>

<body>
    
    <div data-role="page" id="inloggen">
        
        <div data-role="header">
            <h2>SUCCESS!</h2>
        </div>
        
        <div data-role="content">
            <p>U bent succesvol geregistreerd voor het spel. Klik op inloggen om verder te gaan.</p>
            <a href="../Game.html" data-role="button" id="speel">INLOGGEN</a>
        </div>
        
        <div data-role="footer">
            
        </div>
        
    </div>
    
    <script src="../JS/GameCodev2.js" type="text/javascript"></script>
</body>
</html>

 <?php  
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  $connect = mysqli_connect("localhost", "root", "", "user");  
 $data = json_decode(file_get_contents("php://input"));  
	
 if(count($data) > 0)  {

        $name = mysqli_real_escape_string($connect, $data->name);  
	 $prix = mysqli_real_escape_string($connect, $data->prix);      
      $query = "INSERT INTO chariot (name, prix) VALUES ('{$name}', '{$prix}')";  
      if(mysqli_query($connect, $query))  
      {  
           echo "Data Inserted...";  
	
      } else{
	echo 'Error' ;
} 
  }    
   
 ?> 
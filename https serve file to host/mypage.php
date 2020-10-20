<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$conn = new mysqli('localhost','root','','user');
$sql = "SELECT description,image,name,prix,quantite FROM userdata";
$result = $conn->query($sql);
$nom = array();
$description = array();
$prix = array();
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
$array[] = $row;
	

}
} else {
echo "0 results";
}
$myJSON = json_encode($array);
echo $myJSON;


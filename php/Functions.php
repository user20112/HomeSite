<?php
function ConnectToDataBase()
{
	$dsn = 'mysql:host=localhost;port=3306;dbname=MainDataBase'; 
	$user = 'root';
	$password = 'Anorak!2'; 
	$handle = new PDO($dsn, $user, $password); 
	$handle->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
	return $handle; 
}
function AddCard($Time,$Cert,$Account,$Balance)
{
	$conn; 
	try{
		$conn = ConnectToDataBase(); 
	}catch(PDOException $ex){
		return "open error: " . mysqli_connect_error() ;
	}
	$sql = "insert GiftCardTable values ('".$Time."','".$Cert."','".$Account."','".$Balance."');";
	$proc_get_authors = $conn->prepare($sql);
	
	try{

		$rs = $proc_get_authors->execute();
	}catch(PDOException $ex){
		$conn = null; 
		return "Bad sql";
	}

	$rows = array(); 
	$conn = null; 
}

function AddProjIdea($Title,$Desc,$ID)
{
	$conn; 
	try{
		$conn = ConnectToDataBase(); 
	}catch(PDOException $ex){
		return "open error: " . mysqli_connect_error() ;
	}
	$sql = "insert NewProjectBoard values ('".$Title."','".$Desc."','".$ID."');";
	$proc_get_authors = $conn->prepare($sql);
	
	try{

		$rs = $proc_get_authors->execute();
	}catch(PDOException $ex){
		$conn = null; 
		return "Bad sql";
	}

	$rows = array(); 
	$conn = null; 
}

function AddMessage($Name,$Message,$Time,$ID)
{
	$conn; 
	try{
		$conn = ConnectToDataBase(); 
	}catch(PDOException $ex){
		return "open error: " . mysqli_connect_error() ;
	}
	$sql = "insert MessageBoard values ('".$Message."','".$Time."','".$Name."','".$ID."');";
	$proc_get_authors = $conn->prepare($sql);
	
	try{

		$rs = $proc_get_authors->execute();
	}catch(PDOException $ex){
		$conn = null; 
		return "Bad sql";
	}

	$rows = array(); 
	$conn = null;
}


function EditSchedule($Task,$Hour,$Day)
{
	$conn; 
	try{
		$conn = ConnectToDataBase(); 
	}catch(PDOException $ex){
		return "open error: " . mysqli_connect_error() ;
	}
	$sql = "Update Schedule Set Task='".$Task."' where Hour='".$Hour."'and day='".$Day."';";
	$proc_get_authors = $conn->prepare($sql);
	
	try{

		$rs = $proc_get_authors->execute();
	}catch(PDOException $ex){
		$conn = null; 
		return "Bad sql";
	}

	$rows = array(); 

	while($row = $proc_get_authors->fetch(PDO::FETCH_ASSOC)){
		$rows[] = $row; 
	}

	$retVal = json_encode($rows); 
	$conn = null; 

	return $retVal; 

}
function GetID()
{
	$conn; 
	try{
		$conn = ConnectToDataBase(); 
	}catch(PDOException $ex){
		return "open error: " . mysqli_connect_error() ;
	}
	$sql = 'select MessageID,max(MessageID) From MessageBoard;';
	$proc_get_authors = $conn->prepare($sql);
	
	try{

		$rs = $proc_get_authors->execute();
	}catch(PDOException $ex){
		$conn = null;
		return "Bad sql";
	}


	$rows = array(); 

	while($row = $proc_get_authors->fetch(PDO::FETCH_ASSOC)){
		$rows[] = $row; 
	}

	$retVal = json_encode($rows); 
	$conn = null;  

	return $retVal; 
}

function get_schedule()
{
	$conn; 
	try{
		$conn = ConnectToDataBase(); 
	}catch(PDOException $ex){
		return "open error: " . mysqli_connect_error() ;
	}
	$sql = 'SELECT * FROM Schedule order by Length(Hour),Hour,Length(Day),Day;';
	$proc_get_authors = $conn->prepare($sql);
	
	try{

		$rs = $proc_get_authors->execute(); 
	}catch(PDOException $ex){
		$conn = null;  
		return "Bad sql";
	}

	$rows = array(); 

	while($row = $proc_get_authors->fetch(PDO::FETCH_ASSOC)){
		$rows[] = $row; 
	}

	$retVal = json_encode($rows); 
	$conn = null; 

	return $retVal; 

}

function get_all_messages()
{
	$conn; 

	try{

		$conn = ConnectToDataBase(); 

	}catch(PDOException $ex){
		return "open error: " . mysqli_connect_error() ; 
	}


	$sql = 'SELECT * FROM MessageBoard ORDER BY LENGTH(MessageID) Desc, MessageID Desc LIMIT 10;';  

	$proc_get_authors = $conn->prepare($sql);
	
	try{

		$rs = $proc_get_authors->execute(); 
	}catch(PDOException $ex){
		$conn = null; 
		return "Bad sql";
	}

	$rows = array(); 

	while($row = $proc_get_authors->fetch(PDO::FETCH_ASSOC)){
		$rows[] = $row; 
	}

	$retVal = json_encode($rows); 
	$conn = null; 

	return $retVal; 

}
function GetList()
{
	$conn; 

	try{

		$conn = ConnectToDataBase(); 

	}catch(PDOException $ex){
		return "open error: " . mysqli_connect_error() ; 
	}


	$sql = 'SELECT * FROM NewProjectBoard ORDER BY LENGTH(ProjectID), ProjectID;'; 

	$proc_get_authors = $conn->prepare($sql);
	
	try{

		$rs = $proc_get_authors->execute(); 
	}catch(PDOException $ex){
		$conn = null;
		return "Bad sql";
	}

	$rows = array(); 

	while($row = $proc_get_authors->fetch(PDO::FETCH_ASSOC)){
		$rows[] = $row; 
	}

	$retVal = json_encode($rows); 
	$conn = null; 

	return $retVal; 

}
function get_all_projects()
{
	$conn; 

	try{

		$conn = ConnectToDataBase(); 

	}catch(PDOException $ex){
		return "open error: " . mysqli_connect_error() ; 
	}


	$sql = 'SELECT * FROM ProjectBoard ORDER BY LENGTH(ProjectID), ProjectID;'; 

	$proc_get_authors = $conn->prepare($sql);
	
	try{
		$rs = $proc_get_authors->execute(); 
	}catch(PDOException $ex){
		$conn = null; 
		return "Bad sql";
	}

	$rows = array(); 

	while($row = $proc_get_authors->fetch(PDO::FETCH_ASSOC)){
		$rows[] = $row; 
	}

	$retVal = json_encode($rows); 
	$conn = null;  

	return $retVal; 

}
function get_all_units()
{
	$conn; 

	try{

		$conn = ConnectToDataBase(); 

	}catch(PDOException $ex){
		return "open error: " . mysqli_connect_error() ; 
	}


	$sql = 'SELECT * FROM Units ORDER BY LENGTH(UnitID), UnitID;'; 

	$proc_get_authors = $conn->prepare($sql);
	
	try{
		$rs = $proc_get_authors->execute(); 
	}catch(PDOException $ex){
		$conn = null; 
		return "Bad sql";
	}

	$rows = array(); 

	while($row = $proc_get_authors->fetch(PDO::FETCH_ASSOC)){
		$rows[] = $row; 
	}

	$retVal = json_encode($rows); 
	$conn = null;  

	return $retVal; 

}
function get_all_structures()
{
	$conn; 

	try{

		$conn = ConnectToDataBase(); 

	}catch(PDOException $ex){
		return "open error: " . mysqli_connect_error() ; 
	}


	$sql = 'SELECT * FROM Structures ORDER BY LENGTH(StructureID), StructureID;'; 

	$proc_get_authors = $conn->prepare($sql);
	
	try{
		$rs = $proc_get_authors->execute(); 
	}catch(PDOException $ex){
		$conn = null; 
		return "Bad sql";
	}

	$rows = array(); 

	while($row = $proc_get_authors->fetch(PDO::FETCH_ASSOC)){
		$rows[] = $row; 
	}

	$retVal = json_encode($rows); 
	$conn = null;  

	return $retVal; 

}
function get_all_upgrades()
{
	$conn; 

	try{

		$conn = ConnectToDataBase(); 

	}catch(PDOException $ex){
		return "open error: " . mysqli_connect_error() ; 
	}


	$sql = 'SELECT * FROM Upgrades ORDER BY LENGTH(UpgradeID), UpgradeID;'; 

	$proc_get_authors = $conn->prepare($sql);
	
	try{
		$rs = $proc_get_authors->execute(); 
	}catch(PDOException $ex){
		$conn = null; 
		return "Bad sql";
	}

	$rows = array(); 

	while($row = $proc_get_authors->fetch(PDO::FETCH_ASSOC)){
		$rows[] = $row; 
	}

	$retVal = json_encode($rows); 
	$conn = null;  

	return $retVal; 

}
function get_all_plans()
{
	$conn; 

	try{

		$conn = ConnectToDataBase(); 

	}catch(PDOException $ex){
		return "open error: " . mysqli_connect_error() ; 
	}


	$sql = 'SELECT * FROM Plans ORDER BY LENGTH(PlanID), PlanID;'; 

	$proc_get_authors = $conn->prepare($sql);
	
	try{
		$rs = $proc_get_authors->execute(); 
	}catch(PDOException $ex){
		$conn = null; 
		return "Bad sql";
	}

	$rows = array(); 

	while($row = $proc_get_authors->fetch(PDO::FETCH_ASSOC)){
		$rows[] = $row; 
	}

	$retVal = json_encode($rows); 
	$conn = null;  

	return $retVal; 

}
function GetallGiftCards()
{
	$conn; 

	try{

		$conn = ConnectToDataBase(); 

	}catch(PDOException $ex){
		return "open error: " . mysqli_connect_error() ; 
	}


	$sql = 'SELECT * FROM GiftCardTable ORDER BY LENGTH(Balance), Balance;'; 

	$proc_get_authors = $conn->prepare($sql);
	
	try{
		$rs = $proc_get_authors->execute(); 
	}catch(PDOException $ex){
		$conn = null; 
		return "Bad sql";
	}

	$rows = array(); 

	while($row = $proc_get_authors->fetch(PDO::FETCH_ASSOC)){
		$rows[] = $row; 
	}

	$retVal = json_encode($rows); 
	$conn = null;  

	return $retVal; 

}
?> 
<?php
ini_set('display_errors',1); 
 error_reporting(E_ALL);
include 'Functions.php'; 
$result = "UNDEFINED"; 
if($_SERVER['REQUEST_METHOD'] == 'POST')
{
	$req = $_POST['request']; 
	switch($req)
	{
	case "Test":
		$result = "Test"; 
		break;
		
	case "GetSchedule":
		$result = get_schedule(); 
		break;
	case "GetCards":
		$result = GetallGiftCards(); 
		break;
	case "GetList":
		$result = GetList(); 
		break;
	case "AddProjIdea":
		$result = AddProjIdea($_POST['Title'],$_POST['Desc'],$_POST['ID']); 
		break;
	case "AddCard":
		$result = AddCard($_POST['TimeOfSale'],$_POST['CERT'],$_POST['Account'],$_POST['Balance']);
		break;
	case "EditSchedule":
		$result = EditSchedule($_POST['Task'],$_POST['Hour'],$_POST['Day']); 
		break;	
	case "GetProjects":
		$result = get_all_projects(); 
		break;	
	case "GetUnits":
		$result = get_all_units(); 
		break;	
	case "GetStructures":
		$result = get_all_structures(); 
		break;
	case "GetUpgrades":
		$result = get_all_upgrades(); 
		break;
	case "GetPlans":
		$result = get_all_plans(); 
		break;
	case "AddMessage":
		AddMessage($_POST['DisplayName'],$_POST['Message'],date('H:i'),$_POST['ID']);
		$result = get_all_messages(); 
		break;
	case "GetID":
		$result = GetID();
		break;
	case "GetMessages":
		$result = get_all_messages(); 
		break;
	echo $result;
	
	default: 
		$result = "unknown request: " . $req; 
	}// end switch on request

}

echo $result; 

?>

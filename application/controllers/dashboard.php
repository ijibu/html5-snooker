<?php

if (!defined('BASEPATH'))
	exit('No direct script access allowed');

class Dashboard extends MY_Controller {

	public function __construct() 
	{
		parent::__construct();
	}
	
	public function index() 
	{
		if ($_GET['info'] == 'true') {
			$cacheFile = 'data/join.php';
			$data = array();
			if (file_exists($cacheFile)) {
				include $cacheFile;
			}
			
			if (isset($data['name']) && $data['name'] == $_SESSION['user_name']) {
				//用户收到了游戏邀请
				$ret = array(
					"nicks" => array("5204505f34f714.00821883" => array("nick" => $data['name'],"playing" => true)),
					"invited" => array(
						"nick" => $data['name'],
						"data" => array(
							"server" => $data['server'],
							"gamemode" => "snooker",
							"shottime" => "0",
							"password" => 0,
							"frames" => "1",
							"host_lang" => "zh",
							"client_lang" => null
						),
					),
				);
			} else {
				$ret = array(
					"nicks" => array("5204505f34f714.00821883" => array("nick" => "ijibu","playing" => true)),
					"invited" => false
				);
			}
		
		} else {
			if (isset($_GET['nick'])) {
				$_SESSION['user_name'] = $_GET['nick'];
			}
		    $ret = array("status" => ok); 
		}
		
		echo json_encode($ret);exit;

	}
}
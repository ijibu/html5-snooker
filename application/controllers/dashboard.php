<?php

if (!defined('BASEPATH'))
	exit('No direct script access allowed');

class Dashboard extends MY_Controller {

	public function __construct() 
	{
		parent::__construct();
		$this->load->model('user_model');
	}
	
	public function index() 
	{
		if (isset($_GET['info']) == 'true') {
			$this->load->model('server_model');
			$data = $this->server_model->getJoinServerByName($_SESSION['user_name']);

			if (isset($data['name'])) {
				//用户收到了游戏邀请
				$ret = array(
					"nicks" => array("{$data['server']}}" => array("nick" => $data['name'],"playing" => true)),
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
			} else {		//获取在线的玩家
				$onlinePlayers = $this->getOnlinePlayers();
				$nicks = array();
				foreach ($onlinePlayers as $value) {
					# code...
					$nicks[mt_rand(10000, 99999)] = $value;
				}

				$ret = array(
					"nicks" => $nicks,
					"invited" => false
				);
				// $ret = array(
				// 	"nicks" => array(
				// 		"5204505f34f714.00821883" => array("nick" => "ijibu","playing" => true),
				// 		"5204505f34f714.00821881" => array("nick" => "ijibu1","playing" => true)
				// 	),
				// 	"invited" => false
				// );
			}
		
		} else {
			if (isset($_GET['nick'])) {			//新用户上线，加入在在线用户中。
				$_SESSION['user_name'] = $_GET['nick'];
				$this->user_model->addUser(array('nick' => $_GET['nick']));
			}
		    $ret = array("status" => 'ok'); 
		}
		
		echo json_encode($ret);exit;

	}

	/**
	 * 获取在线的用户
	 */
	private function getOnlinePlayers()
	{
		$data = $this->user_model->getUsers();
		$onlinePlayers = array();
		foreach ($data as $key => $value) {
			if ($value['nick'] != $_SESSION['user_name']) {
				$onlinePlayers[] = $value;
			}
		}

		return $onlinePlayers;
	}
}
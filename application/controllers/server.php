<?php

if (!defined('BASEPATH'))
	exit('No direct script access allowed');

class Server extends MY_Controller {

	public function __construct() 
	{
		parent::__construct();
		$this->load->model('server_model');
		$this->load->model('user_model');
	}
	
	public function index() 
	{
		$ret = array();
		if ($_GET['query'] == 'servers') {		//获取在线服务器
			$servers = $this->server_model->getServers();
			$users = $this->user_model->getUsers();
			
		    $ret = array(
		       "count" => array("players" => count($users),"servers" => count($servers)),
		       "servers" => $servers,
		    );
		
		} else if ($_GET['query'] == 'host'){		//添加服务器
			//?_=1376098606416&query=host&server_name=Snooker+room&name=ijibu1&gamemode=snooker&shottime=0&password=&lang=en-us&frames=1
			$id = $this->server_model->addServer($_GET);
			
		    $ret = array("server" => array("id" => $id));
		    
		} else if($_GET['query'] == 'join') {       //加入游戏，js端由network.ajax("join"  触发。接收加入游戏。
			$serverId 	= $this->input->get('id');
			$name 		= $this->input->get('name');
			$password	= $this->input->get('password');
			$lang		= $this->input->get('lang');
			
			//根据$serverId获取服务器信息，验证状态，验证密码。
			$server = $this->server_model->getServerById($serverId);
			$data = array('name' => $server['host_player'], 'server' => $serverId);
			
			$this->server_model->joinServer($data);
		    $ret = array( "server" => array("id" => $serverId));

		} else if($_GET['query'] == 'send') {
			$event = $_GET['event'];
			switch ($event) {
				case 'shoot':		//发送击球数据
					//http://websnooker.com/server.php?_=1376213439083&query=send&id=ee4ac6-6fed35-b1b797&event=shoot&x=0.5983686974836924&y=-0.00690075780659701&player=b1b797&hash=6fb201996ce54dadb40052d18439f36a
					//{"status":1,"sent":1}
					$X = $_GET['x'];
					$Y = $_GET['y'];
					$player = $_GET['player'];
					$hash = $_GET['hash'];
					$time = $_GET['_'];
					$data = var_export($_GET, true);
					file_put_contents('data/send.php', "<?php \$sends = $data;");
					
					break;
				case 'start':		//开始击球
					//http://websnooker.com/server.php?_=1376214115649&query=send&id=ee4ac6-6fed35-b1b797&event=start
					//{"status":1,"sent":1}
					break;
				case 'replay':		//重新击球
					//http://websnooker.com/server.php?_=1376214236612&query=send&id=ee4ac6-547476-a104da&event=replay&turn=b1b797
					//{"status":1,"sent":1}	
					break;
				case 'disconnect':		//断开连接
					//http://www.websnooker.com/server.php?query=send&id=undefined&event=disconnect
					//{"error":1,"message":"5"}	
					break;
				default:
					;
				break;
			}
			
		} else if($_GET['query'] == 'receive') {
			//http://websnooker.com/server.php?_=1376213658198&query=receive&id=ee4ac6-6fed35-b1b797&last_ack=1376213527
			$serverId = $_GET['id']; 
			$time = substr($_GET['_'], 0, 10);
			$data = $this->server_model->getJoinServerByName($_SESSION['user_name']);
			$server = $this->server_model->getServerById($serverId);
			$clientUser = $this->user_model->getUserByName($_SESSION['user_name']);
			
			if (!isset($data['name'])) {
				$event = 'init';
				//$_SESSION['init'] = true;
				$ret = array(
					"status" => 1, "received" => 1, "sent" => 1, "ack" => "1375954421",
					'packets' => array(
						0 => array(
							"time" => $time + 1000,
							'data' => array(
								'client' => $clientUser['nick'],
								'client_id' => $clientUser['user_id'],
								'turn' => $event == 'init' ? $clientUser['user_id'] : null,
								"gamemode" => $server['gamemode'],
								"shottime" => "0",
								"password" => 0,
								"frames" => "1",
								"host_lang" => "zh",
								"client_lang" => "zh",
								"event" => $event,
								"x" => "0.5622127497947318",
								"y" => "-0.15236583786410068",
								"player" => "52685f",
								"hash" => "3aab71d78143afd37916930094901368",
							)
						)
					),
					'servers' => $server
				);
			} else {
				$event = 'shoot';
				$cacheFile = 'data/send.php';
				$sends = array();
				if (file_exists($cacheFile)) {
					include $cacheFile;
				}
				
				if (isset($sends['event']) && $sends['event'] == 'shoot') {
					file_put_contents('data/send.php', "<?php \$sends = array();");
					$ret = array(
						"status" => 1, "received" => 1, "sent" => 1, "ack" => "1375954421",
						'packets' => array(
							0 => array(
								"time" => substr($sends['_'], 0, 10) + 5000,
								'data' => array(
									'client' => 'wenzi',
									'client_id' => $serverId['1'],
									'turn' => $event == 'init' ? $serverId['3'] : null,
									"gamemode" => "snooker",
									"shottime" => "0",
									"password" => 0,
									"frames" => "1",
									"host_lang" => "zh",
									"client_lang" => null,
									"event" => $event,
									"x" => "0.5622127497947318",
									"y" => "-0.15236583786410068",
									"player" => "52685f",
									"hash" => $sends['hash'],
								)
							)
						),
						'servers' => array()
					);
				} else {
					$ret = array(
						"status" => 1, "received" => 1, "sent" => 1, "ack" => "1375954421",
						'packets' => array(),'servers' => array()
					);
				}
			}
		}
		
		echo json_encode($ret);exit;
	}

	/**
	 * 获取在线的服务器
	 */
	private function getOnlineServers() 
	{

	}
}
<?php
session_name('ijibu');
session_start();
$lefttime = 24 * 3600;
session_set_cookie_params($lefttime, '/', '.' . DOMAIN);
//$ret = array("status" => 1, "received" => 1, "sent" => 1);
if ($_GET['query'] == 'server' || $_GET['query'] == 'servers') {
    // $ret = array(
    //    "count" => array("players" => 0,"servers" => 0),
    //    "servers" => array()
    // );

    $ret = array(
       "count" => array("players" => 1,"servers" => 1),
       "servers" => array(
            array(
                "server_id" => "81ee90","server_name" => "room1","host_player" => "hui","client_player" => null,
                "gamemode" => "snooker","shottime" => "0","password" => 0,"frames" => "1","host_lang" => "zh",
                "client_lang" => null
			),
			array(
                "server_id" => "81ee91",
				"server_name" => "room2",
				"host_player" => "ijibu22",
				"client_player" => null,
                "gamemode" => "snooker",
				"shottime" => "0",
				"password" => 0,
				"frames" => "1",
				"host_lang" => "zh",
                "client_lang" => null
			),
        )
    );

} else if ($_GET['query'] == 'host'){
    $ret = array(
      "server" => array(
            "id" => "324421-2c09bf-3c4bdd"
        )
    );
} else if($_GET['query'] == 'join') {       //加入游戏，js端由network.ajax("join"  触发。接收加入游戏。
	
	$data = var_export(array('name' => 'ijibu11', 'server' => "324421-2c09bf-3c4bdd"), true);
	file_put_contents('join.php', "<?php \$data = $data;");
	
    $ret = array(
      "server" => array(
           "id" => "324421-2c09bf-3c4bdd"
       )
    );
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
	$serverId = explode('-', $_GET['id']); 
	$time = substr($_GET['_'], 0, 10);
	$cacheFile = 'join.php';
	$data = array();
	if (file_exists($cacheFile)) {
		include $cacheFile;
	}
	
	if (isset($data['name']) && $data['name'] == $_SESSION['user_name'] && isset($_SESSION['init']) && $_SESSION['init'] == true) {
		$event = 'init';
		//$_SESSION['init'] = true;
	} else {
		$event = 'shoot';
	}
	//print_r($data);var_dump($_SESSION);exit;
    $ret = array(
        "status" => 1, "received" => 1, "sent" => 1, "ack" => "1375954421",
        'packets' => array(
            0 => array(
                "time" => rand($time - 1000, $time + 1000),
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
                    "hash" => "3aab71d78143afd37916930094901368",
                )
            )
        ),
        'servers' => array()
    );
}

echo json_encode($ret);exit;

/**
 * 双人游戏。
 * {"status":1,"received":1,"ack":"1375954421","packets":[{"time":"1375954421","data":{"event":"shoot","x":"0.5622127497947318","y":"-0.15236583786410068","player":"52685f","hash":"3aab71d78143afd37916930094901368"}}]}
 */

/**
 * server.php?query=server
        {"count":{"players":0,"servers":0},"servers":[]}
 */

/**
 * dashboard.php?_=1376029719612&info=true
        {"nicks":{"5204505f34f714.00821883":{"nick":"ijibu","playing":false}},"invited":false}
 */


/**
 * server.php?_=1376031488367&query=host&server_name=Snooker+room&name=ijibu&gamemode=snooker&shottime=0&password=&lang=en-us&frames=1
        {"server":{"id":"324421-2c09bf-3c4bdd"}}
 */
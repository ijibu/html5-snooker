<?php
/**
 * 服务器模型
 * 
 * @author ijibu.com@gmail.com
 */

if (!defined('BASEPATH'))
	exit('No direct script access allowed');

class Server_Model extends MY_Model 
{
	protected $table = "server";
	protected $_servers = array();
	
	public function __construct() 
	{
		parent::__construct();
		$this->setServers();
	}

	/**
	 * 保存在线的服务器
	 */
	public function saveServers()
	{
		$this->memcache->set('servers', $this->_servers);
	}

	/**
	 * 设置在线的服务器
	 */
	public function setServers()
	{
		$this->_servers = $this->memcache->get('servers');
		if (!is_array($this->_servers)) {
			$this->_servers = array();
		}
	}
	
	/**
	 * 获取在线的服务器
	 */
	public function getServers()
	{
		return $this->_servers;
	}
	
	/**
	 * 根据ID获取服务器信息
	 */
	public function getServerById($serverId)
	{
		foreach ($this->_servers as $row) {
			if ($row['server_id'] == $serverId) {
				return $row;
			}
		}
		
		return array();
	}
	
	/**
	 * 根据name获取服务器信息
	 */
	public function getServerByName($serverName)
	{
		foreach ($this->_servers as $row) {
			if ($row['server_name'] == $serverName) {
				return $row;
			}
		}
		
		return array();
	}
	
	/**
	 * 添加服务器
	 * @param array $data
	 */
	public function addServer(array $data)
	{
		//"server_id":"81ee90","server_name":"Snooker room","host_player":"harp","client_player":null,"gamemode":"snooker","shottime":"0","password":0,"frames":"1","host_lang":"zh","client_lang":null
		$this->load->model('user_model');
		$user 						= array();
		$user['nick']				= $data['name'];
		$user['playing']			= false;
		$userId 					= $this->user_model->addUser($user);
		
		$server 					= array();
		$server['server_id'] 		= $this->_generateId();
		$server['server_name'] 		= $data['server_name'];
		$server['host_player'] 		= $data['name'];
		$server['client_player'] 	= null;
		$server['gamemode'] 		= $data['gamemode'];
		$server['shottime'] 		= $data['shottime'];
		$server['password'] 		= $data['password'] ? $data['password'] : 0;
		$server['frames'] 			= $data['frames'];
		$server['host_lang'] 		= $data['lang'];
		$server['client_lang'] 		= $data['lang'];
		$server['create_time'] 		= time();
		
		array_push($this->_servers, $server);
		$this->saveServers($this->_servers);
		
		return $server['server_id'] . '-' . $userId . '-' . $this->_generateId();
	}

	/**
	 * 进入服务器
	 * @param array $data
	 */
	public function joinServer($data)
	{
		$joins = $this->memcache->get('joinServers');
		array_push($joins, $data);
		$this->memcache->set('joinServers', $joins);
	}

	/**
	 * 获取进入服务器
	 * @param array $data
	 */
	public function getJoinServer()
	{
		return $this->memcache->get('joinServers');
	}

	/**
	 * 获取进入服务器
	 * @param array $data
	 */
	public function getJoinServerByName($userName)
	{
		$joins = $this->memcache->get('joinServers');

		foreach ($joins as $row) {
			if ($row['name'] == $userName) {
				return $row;
			}
		}

		return array();
	}
}
<?php
if (!defined('BASEPATH'))
	exit('No direct script access allowed');

class User_Model extends MY_Model 
{
	protected $table = "user";
	protected $_users = array();
	
	public function __construct()
	{
		parent::__construct();
		$this->setUsers();
	}
	
	/**
	 * 保存在线的用户
	 */
	public function saveUsers()
	{
		$this->memcache->set('users', $this->_users);
	}

	/**
	 * 设置用户
	 */
	public function setUsers()
	{
		$this->_users = $this->memcache->get('users');
		if (!is_array($this->_users)) {
			$this->_users = array();
		}
	}
	
	/**
	 * 获取在线的用户
	 */
	public function getUsers()
	{
		return $this->_users;
	}
	
	/**
	 * 根据ID获取用户信息
	 */
	public function getUserById($userId)
	{
		foreach ($this->_users as $row) {
			if ($row['user_id'] == $userId) {
				return $row;
			}
		}
	
		return array();
	}
	
	/**
	 * 根据name获取用户信息
	 */
	public function getUserByName($userName)
	{
		foreach ($this->_users as $row) {
			if ($row['nick'] == $userName) {
				return $row;
			}
		}
		return array();
	}
	
	/**
	 * 添加用户
	 * @param array $data
	 */
	public function addUser(array $data)
	{
		
		$user = $this->getUserByName($data['nick']);
		if (!$user) {
			$data['user_id'] 		= $this->_generateId();
			$data['create_time'] 	= time();
			$data['playing'] 		= false;
			array_push($this->_users, $data);
			$this->saveUsers();

			return $data['user_id'];
		}
		
		return $user['user_id'];
	}
}
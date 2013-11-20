<?php

if (!defined('BASEPATH'))
	exit('No direct script access allowed');

class Example extends MY_Controller {

	public function __construct() 
	{
		parent::__construct();
		$this->load->model('user_model');
	}
	
	public function index() 
	{
		$memcache = memcache_connect('localhost', 11211);

		if ($memcache) {
			// $memcache->set("str_key", "String to store in memcached");
			// $memcache->set("num_key", 123);

			// $object = new StdClass;
			// $object->attribute = 'test';
			// $memcache->set("obj_key", $object);

			// $array = Array('assoc'=>123, 345, 567);
			// $memcache->set("arr_key", $array);

			// var_dump($memcache->get('str_key'));
			// var_dump($memcache->get('num_key'));
			// var_dump($memcache->get('arr_key'));
			// var_dump($memcache->get('obj_key'));
			$this->user_model->addUser(array('nick' => 'ijibu'));
			print_r($memcache->get('users'));
			print_r($memcache->get('servers'));
			$memcache->set("joinServers", array(0 => array('name' => 'liuhui', 'server' => 738018, 'client_user' => 'ijibu')));
			print_r($memcache->get('joinServers'));
			echo $_SESSION['user_name'];
		}
		else {
			echo "Connection to memcached failed";
		}
	}
}

<?php

if (!defined('BASEPATH'))
	exit('No direct script access allowed');

class Main extends MY_Controller {

	public function __construct() 
	{
		parent::__construct();
	}
	
	public function index() 
	{
		$id = $this->input->get('id');
		if ($id) {
			$this->load->view('index1.php');
		} else {
			$this->load->view('index.php');
		}
	}
	
	/**
	 * 查看用户名是否存在
	 */
	public function checkUserNameExist()
	{
		
	}
}
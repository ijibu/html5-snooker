<?php

/**
 * 基础控制器
 * 
 */
if (!defined('BASEPATH'))
	exit('No direct script access allowed');

class MY_Controller extends CI_Controller {

	function __construct() {
		parent::__construct();

		/**
		 * 权限验证
		 */
		$class =  $this->router->fetch_class();
		$method = $this->router->fetch_method();
	}
}
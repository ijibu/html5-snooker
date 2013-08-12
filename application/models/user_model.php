<?php
if (!defined('BASEPATH'))
	exit('No direct script access allowed');

class User_Model extends CI_Model 
{
	private $table = "";
	
	public function __construct() 
	{
		parent::__construct();
	}

}
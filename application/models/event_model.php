<?php
if (!defined('BASEPATH'))
	exit('No direct script access allowed');

class Event_Model extends MY_Model 
{
	protected $table = "event";
	protected $_events = array();
	
	public function __construct()
	{
		parent::__construct();
		$this->setEvents();
	}
	
	/**
	 * 保存在线的事件
	 */
	public function saveEvents()
	{
		$this->memcache->set('events', $this->_events);
	}

	/**
	 * 设置事件
	 */
	public function setEvents()
	{
		$this->_events = $this->memcache->get('events');
		if (!is_array($this->_events)) {
			$this->_events = array();
		}
	}
	
	/**
	 * 获取在线的事件
	 */
	public function getEvents()
	{
		return $this->_events;
	}
	
	/**
	 * 根据ID获取事件信息
	 */
	public function getEventById($eventId)
	{
		foreach ($this->_events as $row) {
			if ($row['event_id'] == $eventId) {
				return $row;
			}
		}
	
		return array();
	}
	
	/**
	 * 根据name获取事件信息
	 */
	public function getEventByName($userName)
	{
		foreach ($this->_events as $row) {
			if ($row['receive'] == $userName) {
				return $row;
			}
		}
		return array();
	}
	
	/**
	 * 添加事件
	 * @param array $data
	 */
	public function addEvent(array $data)
	{
		$data['event_id'] 		= $this->_generateId();
		$data['create_time'] 	= time();
		array_push($this->_events, $data);
		$this->saveEvents();

		return $data['event_id'];
	}
}
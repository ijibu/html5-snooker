-- phpMyAdmin SQL Dump
-- version 3.5.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 11, 2013 at 09:54 PM
-- Server version: 5.0.51b-community-nt-log
-- PHP Version: 5.4.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `html5snooker`
--

-- --------------------------------------------------------

--
-- Table structure for table `server`
--

CREATE TABLE IF NOT EXISTS `server` (
  `id` int(11) NOT NULL auto_increment,
  `server_id` char(13) NOT NULL COMMENT '服务器ID',
  `server_name` varchar(25) NOT NULL COMMENT '服务器名称',
  `host_player` varchar(25) NOT NULL COMMENT '主场玩家',
  `client_player` varchar(25) default NULL COMMENT '客场玩家',
  `gamemode` varchar(10) NOT NULL default 'snooker' COMMENT '游戏模式',
  `shottime` tinyint(4) NOT NULL default '0',
  `password` char(32) default NULL COMMENT '服务器密码',
  `frames` tinyint(1) NOT NULL default '1',
  `host_lang` char(2) NOT NULL default 'zh' COMMENT '主场语言',
  `client_lang` char(2) NOT NULL default 'zh' COMMENT '客场语言',
  `create_time` int(11) NOT NULL COMMENT '创建时间',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='服务器表' AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

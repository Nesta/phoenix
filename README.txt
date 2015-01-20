About Da Vinci
====================
Da Vinci is a Drupal 7 theme. The theme is not dependent on any 
core theme. Its very light weight for fast loading with modern look.
  Simple and clean design
  Drupal standards compliant
  Multi-level drop-down menus
  Browser selector
  sass & compass


Drupal compatibility:
=====================
This theme is compatible with Drupal 7.x.x

Developed by
============

Help and Support Us
=====================


-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Servidor: localhost:8889
-- Tiempo de generación: 03-12-2014 a las 20:08:18
-- Versión del servidor: 5.5.34
-- Versión de PHP: 5.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `davinci`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `styleguide_palette_swatch`
--

CREATE TABLE `styleguide_palette_swatch` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'The primary identifier for the swatch.',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT 'The swatch title.',
  `description` varchar(255) NOT NULL DEFAULT '' COMMENT 'The swatch description.',
  `hex` varchar(7) NOT NULL DEFAULT '0' COMMENT 'The swatch hex value.',
  `theme` varchar(64) NOT NULL DEFAULT '' COMMENT 'The theme the palette is used for.',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='Stores color palette swatch data.' AUTO_INCREMENT=32 ;

--
-- Volcado de datos para la tabla `styleguide_palette_swatch`
--

INSERT INTO `styleguide_palette_swatch` (`id`, `name`, `description`, `hex`, `theme`) VALUES
(18, '$white', 'Basic colour', '#FFFFFF', 'da_vinci'),
(19, '$gray', 'Basic colour', '#F8F8F1', 'da_vinci'),
(20, '$black', 'Basic colour', '#42312C', 'da_vinci'),
(21, '$dark-turquoise', 'Primary colour', '#68B3AF', 'da_vinci'),
(22, '$turquoise', 'Primary colour', '#87BDB1', 'da_vinci'),
(23, '$green', 'Primary colour', '#AACCB1', 'da_vinci'),
(24, '$light-green', 'Primary colour', '#C3DBB4', 'da_vinci'),
(25, '$lightest-green', 'Primary colour', '#D3E2B6', 'da_vinci'),
(26, '$dark-beige', 'Secondary colour', '#CAB595', 'da_vinci'),
(27, '$beige', 'Secondary colour', '#DBCFB7', 'da_vinci'),
(28, '$light-beige', 'Secondary colour', '#EEEADD', 'da_vinci'),
(29, '$red-error', 'Basic colour', '#A33737', 'da_vinci'),
(31, '$dark-green', 'Primary colour', '#80A18D', 'da_vinci');

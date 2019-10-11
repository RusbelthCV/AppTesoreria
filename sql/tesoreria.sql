-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-10-2019 a las 15:44:01
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tesoreria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tesorero`
--

CREATE TABLE `tesorero` (
  `_uuid` varchar(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tesorero`
--

INSERT INTO `tesorero` (`_uuid`, `name`, `password`, `createdAt`, `updatedAt`) VALUES
('dc80dbdc-129f-4643-ba4a-b048780f2417', 'Bryan', 'hola', '0000-00-00', '0000-00-00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `token`
--

CREATE TABLE `token` (
  `id` int(11) NOT NULL,
  `token` varchar(20) DEFAULT NULL,
  `idadmin` varchar(36) DEFAULT NULL,
  `nameadmin` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `token`
--

INSERT INTO `token` (`id`, `token`, `idadmin`, `nameadmin`, `createdAt`, `updatedAt`) VALUES
(1, 'n4R3vZMg053rLM1qDVik', 'dc80dbdc-129f-4643-ba4a-b048780f2417', 'Bryan', '2019-10-11 10:16:54', '2019-10-11 10:16:54'),
(2, 'BCl2XlObGRPQf2tYShQY', 'dc80dbdc-129f-4643-ba4a-b048780f2417', 'Bryan', '2019-10-11 10:25:00', '2019-10-11 10:25:00'),
(3, 'h067Wv5rbiOIfXyYfnBy', 'dc80dbdc-129f-4643-ba4a-b048780f2417', 'Bryan', '2019-10-11 10:27:16', '2019-10-11 10:27:16'),
(4, 'J7zTKZuATd1gEmDkT5DT', 'dc80dbdc-129f-4643-ba4a-b048780f2417', 'Bryan', '2019-10-11 10:27:23', '2019-10-11 10:27:23'),
(5, 'Ls94M39iMalIJ1FeHjV2', 'dc80dbdc-129f-4643-ba4a-b048780f2417', 'Bryan', '2019-10-11 10:45:48', '2019-10-11 10:45:48'),
(6, 'OJySKzDmdieLNDTBnOsO', 'dc80dbdc-129f-4643-ba4a-b048780f2417', 'Bryan', '2019-10-11 12:53:53', '2019-10-11 12:53:53');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tesorero`
--
ALTER TABLE `tesorero`
  ADD PRIMARY KEY (`_uuid`);

--
-- Indices de la tabla `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `token`
--
ALTER TABLE `token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

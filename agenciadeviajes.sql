-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 25-08-2021 a las 18:30:22
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `agenciadeviajes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `testimonios`
--

CREATE TABLE `testimonios` (
  `ID` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `correo` varchar(60) NOT NULL,
  `mensaje` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `testimonios`
--

INSERT INTO `testimonios` (`ID`, `nombre`, `correo`, `mensaje`) VALUES
(1, 'Lucía', 'luciag.lara@gmail.com', 'Las mejores vacaciones!!!'),
(2, 'sonia', 'sonia@gmail.com', 'que yuju todo'),
(3, 'uno nuevo', 'nuevo@nuevo.com', 'pufff, fatal'),
(4, 'raul', 'raul@raul.com', 'feliz');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viajes`
--

CREATE TABLE `viajes` (
  `id` bigint(20) NOT NULL,
  `titulo` varchar(60) DEFAULT NULL,
  `precio` varchar(10) DEFAULT NULL,
  `fecha_ida` date DEFAULT NULL,
  `fecha_vuelta` date DEFAULT NULL,
  `imagen` varchar(15) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `disponibles` int(11) DEFAULT NULL,
  `slug` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `viajes`
--

INSERT INTO `viajes` (`id`, `titulo`, `precio`, `fecha_ida`, `fecha_vuelta`, `imagen`, `descripcion`, `disponibles`, `slug`) VALUES
(1, 'Italia', '50000', '2021-06-24', '2021-06-30', 'roma', 'Praesent tincidunt ante at justo semper volutpat. Sed risus neque, scelerisque id dictum in, placerat non erat. ', 32, 'viaje-italia'),
(2, 'Canada', '60000', '2021-07-19', '2021-07-19', 'canada', 'Praesent tincidunt ante at justo semper volutpat. Sed risus neque, scelerisque id dictum in, placerat non erat. ', 25, 'viaje-canada'),
(3, 'Grecia', '40000', '2021-08-29', '2021-09-15', 'grecia', 'Praesent tincidunt ante at justo semper volutpat. Sed risus neque, scelerisque id dictum in, placerat non erat. ', 18, 'viaje-grecia'),
(4, 'Inglaterra', '8000', '2021-09-22', '2021-10-03', 'londres', 'Praesent tincidunt ante at justo semper volutpat. Sed risus neque, scelerisque id dictum in, placerat non erat. ', 22, 'viaje-inglaterra'),
(5, 'Rio de Janeiro', '50000', '2021-04-16', '2021-04-25', 'rio', 'Praesent tincidunt ante at justo semper volutpat. Sed risus neque, scelerisque id dictum in, placerat non erat. ', 23, 'viaje-rio-de-janeiro'),
(6, 'Francia', '75000', '2021-04-03', '2021-04-10', 'paris', 'Praesent tincidunt ante at justo semper volutpat. Sed risus neque, scelerisque id dictum in, placerat non erat. ', 14, 'viaje-francia');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `testimonios`
--
ALTER TABLE `testimonios`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `testimonios`
--
ALTER TABLE `testimonios`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

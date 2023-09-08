-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2023 at 11:30 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nipatestfullstack`
--

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `id` int(11) NOT NULL,
  `ticket_id` varchar(5) NOT NULL,
  `tittle` varchar(50) NOT NULL,
  `description` varchar(250) NOT NULL,
  `name` varchar(40) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `status` varchar(15) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `age` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`id`, `ticket_id`, `tittle`, `description`, `name`, `email`, `phone`, `status`, `created_at`, `updated_at`, `age`) VALUES
(1, '00001', 'Stretch', 'dfsfdsffd', 'Allister Bredbury', 'kjljj@gmail.com', '0899999999', 'resolved', '2023-09-06 07:37:24', '2023-09-07 19:18:56', 9),
(2, '00002', 'Two-Way', 'dfsfdsffd', 'Allister Bredbury', 'abredbury1@i2i.jp', '0899999999', 'resolved', '2023-09-06 07:37:24', '2023-09-08 07:24:35', 0),
(3, '00003', 'Children of Glory', 'dsfsfdsf', 'Jacky Bowerbank', 'jbowerbank2@businessweek.com', '0899999999', 'accepted', '2023-09-06 07:37:24', '2023-09-08 07:24:55', 35),
(4, '00004', 'Plot Against Harry, The', 'dsffdsf', 'Gawain Salliere', 'gsalliere3@smugmug.com', '0899999999', 'rejected', '2023-09-06 07:37:24', '2023-09-08 07:24:44', 0),
(5, '00005', 'Rx', 'sdfdsf', 'Danell Devaney', 'ddevaney4@photobucket.com', '0899999999', 'resolved', '2023-09-06 07:37:24', '2023-09-08 07:24:41', 0),
(6, '00006', 'Not Cool', 'sfddsf', 'Wright Ingrem', 'wingrem5@quantcast.com', '0899999999', 'rejected', '2023-09-06 07:37:24', '2023-09-08 07:22:21', 0),
(7, '00007', 'ทอดสอบ', 'ทดสอบข้อมูล', 'สมมุติ ทดสอบ', 'test@gmail.com', '0899999999', 'rejected', '2023-09-06 07:37:24', '2023-09-08 07:20:36', 25),
(8, '00008', 'ทอดสอบ2', 'ทดสอบข้อมูล2', 'สมมุติ2 ทดสอบ', 'test2@gmail.com', '0899999999', 'rejected', '2023-09-06 07:39:27', '2023-09-08 07:22:19', 25),
(9, '9', 'ทอดสอบ2', 'ทดสอบข้อมูล2', 'สมมุติ2 ทดสอบ', 'test2@gmail.com', '0899999999', 'pending', '2023-09-06 08:34:35', '2023-09-06 16:51:23', 25),
(10, '10', 'ทอดสอบ2', 'ทดสอบข้อมูล2', 'สมมุติ2 ทดสอบ', 'test2@gmail.com', '0899999999', 'pending', '2023-09-06 08:35:38', '2023-09-06 16:51:10', 25),
(11, '00011', 'ทอดสอบ2', 'ทดสอบข้อมูล2', 'สมมุติ2 ทดสอบ', 'test2@gmail.com', '0899999999', 'pending', '2023-09-07 08:25:46', '2023-09-07 19:05:49', 25),
(12, '11', 'test add by ui', 'dsfdsfs', 'test', 'test@gamil.com', '0839999999', 'pending', '2023-09-07 08:27:50', '2023-09-07 19:05:52', 39),
(13, '11', 'test add by ui', 'dsfdsfs', 'test', 'test@gamil.com', '0839999999', 'pending', '2023-09-07 08:28:37', '2023-09-07 19:05:53', 39),
(14, '11', 'test add by ui', 'dsfdsfs', 'test', 'test@gamil.com', '0839999999', 'pending', '2023-09-07 08:28:45', '2023-09-07 19:05:55', 39),
(15, '15', 'test add by ui', 'dsfdsfs', 'test', 'test@gamil.com', '0839999999', 'pending', '2023-09-07 08:28:58', '2023-09-07 19:05:57', 39),
(16, '1111', 'test add by ui', 'fgfdgd', 'test', 'test@gamil.com', '0839999999', 'pending', '2023-09-07 08:46:16', '2023-09-07 19:05:59', 39),
(17, '555', 'test add by ui', 'fgfdgd', 'test', 'test@gamil.com', '0839999999', 'pending', '2023-09-07 08:46:31', '2023-09-07 19:06:01', 39),
(18, '1111', 'test add by ui', 'dgfd', 'test', 'test@gamil.com', '0839999999', 'pending', '2023-09-07 08:53:19', '2023-09-07 19:06:03', 39),
(19, '11', 'test add by ui', 'dgdfghj', 'test', 'test@gamil.com', '0839999999', 'pending', '2023-09-07 10:05:48', '2023-09-07 19:06:05', 59);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

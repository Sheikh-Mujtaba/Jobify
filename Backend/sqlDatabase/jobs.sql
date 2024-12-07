-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2024 at 06:19 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobs`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `NAME` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `NAME`) VALUES
(2, 'Care'),
(3, 'Driving'),
(4, 'Education'),
(5, 'Hospitality'),
(1, 'IT');

-- --------------------------------------------------------

--
-- Table structure for table `vacancies`
--

CREATE TABLE `vacancies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `salary` decimal(10,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vacancies`
--

INSERT INTO `vacancies` (`id`, `title`, `description`, `category_id`, `salary`, `created_at`) VALUES
(1, 'Software Developer', 'Develop and maintain software applications.', 1, 85000.00, '2024-11-24 10:47:31'),
(2, 'Web Developer', 'Create and maintain websites.', 1, 75000.00, '2024-11-24 10:47:31'),
(3, 'Data Scientist', 'Analyze and interpret complex data.', 1, 95000.00, '2024-11-24 10:47:31'),
(4, 'IT Support Specialist', 'Provide technical assistance to users.', 1, 55000.00, '2024-11-24 10:47:31'),
(5, 'Network Engineer', 'Design and manage computer networks.', 1, 75000.00, '2024-11-24 10:47:31'),
(6, 'Cybersecurity Analyst', 'Protect systems from cyber threats.', 1, 80000.00, '2024-11-24 10:47:31'),
(7, 'Cloud Engineer', 'Manage cloud infrastructure and services.', 1, 90000.00, '2024-11-24 10:47:31'),
(8, 'Nurse', 'Provide medical care to patients.', 2, 45000.00, '2024-11-24 10:47:31'),
(9, 'Caregiver', 'Assist elderly with daily activities.', 2, 35000.00, '2024-11-24 10:47:31'),
(10, 'Social Worker', 'Support individuals and families in need.', 2, 55000.00, '2024-11-24 10:47:31'),
(11, 'Physiotherapist', 'Help patients recover mobility.', 2, 60000.00, '2024-11-24 10:47:31'),
(12, 'Mental Health Counselor', 'Provide counseling to patients dealing with mental health issues.', 2, 65000.00, '2024-11-24 10:47:31'),
(13, 'Occupational Therapist', 'Help patients improve their daily skills.', 2, 60000.00, '2024-11-24 10:47:31'),
(14, 'Dietitian', 'Advise on healthy eating and nutrition.', 2, 58000.00, '2024-11-24 10:47:31'),
(15, 'Delivery Driver', 'Deliver packages to customers.', 3, 50000.00, '2024-11-24 10:47:31'),
(16, 'Truck Driver', 'Transport goods across cities.', 3, 60000.00, '2024-11-24 10:47:31'),
(17, 'Bus Driver', 'Drive buses on scheduled routes.', 3, 55000.00, '2024-11-24 10:47:31'),
(18, 'Taxi Driver', 'Provide transportation services to customers.', 3, 40000.00, '2024-11-24 10:47:31'),
(19, 'Chauffeur', 'Drive luxury vehicles for clients.', 3, 70000.00, '2024-11-24 10:47:31'),
(20, 'Forklift Operator', 'Operate forklifts in warehouses to transport goods.', 3, 45000.00, '2024-11-24 10:47:31'),
(21, 'Heavy Equipment Operator', 'Operate construction vehicles on job sites.', 3, 65000.00, '2024-11-24 10:47:31'),
(22, 'Teacher', 'Instruct students in a specific subject area.', 4, 48000.00, '2024-11-24 10:47:31'),
(23, 'Professor', 'Teach at a university level and conduct research.', 4, 75000.00, '2024-11-24 10:47:31'),
(24, 'Special Education Teacher', 'Work with children who have special needs.', 4, 55000.00, '2024-11-24 10:47:31'),
(25, 'Teaching Assistant', 'Assist in the classroom and help students with learning.', 4, 35000.00, '2024-11-24 10:47:31'),
(26, 'Curriculum Developer', 'Create educational content and materials.', 4, 60000.00, '2024-11-24 10:47:31'),
(27, 'School Counselor', 'Provide guidance to students regarding academics and personal issues.', 4, 52000.00, '2024-11-24 10:47:31'),
(28, 'ESL Teacher', 'Teach English as a second language to non-native speakers.', 4, 45000.00, '2024-11-24 10:47:31'),
(29, 'Chef', 'Prepare and cook meals in a restaurant or hotel.', 5, 45000.00, '2024-11-24 10:47:31'),
(30, 'Waiter/Waitress', 'Serve food and beverages to customers at restaurants.', 5, 25000.00, '2024-11-24 10:47:31'),
(31, 'Hotel Manager', 'Oversee operations of a hotel or resort.', 5, 65000.00, '2024-11-24 10:47:31'),
(32, 'Bartender', 'Prepare and serve alcoholic and non-alcoholic drinks at a bar.', 5, 35000.00, '2024-11-24 10:47:31'),
(33, 'Housekeeper', 'Maintain cleanliness and order in hotel rooms.', 5, 28000.00, '2024-11-24 10:47:31'),
(34, 'Receptionist', 'Welcome and assist guests at the front desk.', 5, 30000.00, '2024-11-24 10:47:31'),
(35, 'Event Coordinator', 'Plan and coordinate events such as weddings or corporate meetings.', 5, 55000.00, '2024-11-24 10:47:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `NAME` (`NAME`);

--
-- Indexes for table `vacancies`
--
ALTER TABLE `vacancies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vacancies`
--
ALTER TABLE `vacancies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `vacancies`
--
ALTER TABLE `vacancies`
  ADD CONSTRAINT `vacancies_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

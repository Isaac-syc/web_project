-- MariaDB dump 10.19-11.2.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	11.2.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contact_messages`
--

DROP TABLE IF EXISTS `contact_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` text DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT 0,
  `is_answer` tinyint(1) DEFAULT 0,
  `conversation_id` int(11) DEFAULT NULL,
  `sender` int(11) DEFAULT NULL,
  `date_sent` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_messages`
--

LOCK TABLES `contact_messages` WRITE;
/*!40000 ALTER TABLE `contact_messages` DISABLE KEYS */;
INSERT INTO `contact_messages` VALUES
(13,'1',0,0,66,1,NULL),
(14,'2',0,0,66,1,NULL),
(15,'1',0,0,66,1,NULL),
(16,'',0,0,66,1,NULL),
(17,'21',0,0,66,1,NULL),
(18,'12',0,0,66,1,NULL),
(19,'test',0,0,66,1,NULL),
(20,'1',0,0,66,1,NULL),
(21,'12',0,0,66,1,NULL),
(22,'12312',0,0,66,1,NULL),
(23,'12',0,0,66,1,NULL),
(24,'21',0,0,66,1,NULL),
(25,'test',0,0,66,1,'2023-12-15 15:47:14'),
(26,'message to be displayed',0,0,66,1,'2023-12-15 15:48:33'),
(27,'new test',0,0,66,1,'2023-12-15 15:49:31'),
(28,'message to be displayed',0,0,66,1,'2023-12-15 15:50:01'),
(29,'12',0,0,66,1,'2023-12-15 15:52:28'),
(30,'l',0,0,66,NULL,'2023-12-15 15:57:57'),
(31,'test',0,0,66,0,'2023-12-15 15:59:02'),
(32,'tes',0,0,66,0,'2023-12-15 15:59:25'),
(33,'new test',0,0,66,0,'2023-12-15 15:59:50'),
(34,'message to be displayed',0,0,66,0,'2023-12-15 16:00:11'),
(35,'12',0,0,66,0,'2023-12-15 16:03:26'),
(36,'message to be displayed',0,0,66,0,'2023-12-15 16:03:41'),
(37,'21',0,0,66,0,'2023-12-15 16:04:43'),
(38,'message to be displayed',0,0,66,0,'2023-12-15 16:04:48'),
(39,'1212',0,0,66,0,'2023-12-15 16:05:40'),
(40,'message to be displayed',0,0,66,0,'2023-12-15 16:05:44'),
(41,'12',0,0,66,0,'2023-12-15 16:18:22'),
(42,'s',0,0,66,0,'2023-12-15 16:59:44'),
(43,'j',0,0,66,0,'2023-12-15 17:04:21'),
(44,'ss',0,0,66,0,'2023-12-15 17:05:21'),
(45,'re',0,0,66,0,'2023-12-15 17:07:51'),
(46,'sds',0,0,66,0,'2023-12-15 17:08:46'),
(47,'message to be displayed',0,0,66,0,'2023-12-15 17:09:04'),
(48,'das',0,0,66,0,'2023-12-15 17:10:15'),
(49,'message to be displayed',0,0,66,0,'2023-12-15 17:10:21'),
(50,'message to be displayed',0,0,66,0,'2023-12-15 17:13:14'),
(51,'message to be displayed',0,0,66,0,'2023-12-15 17:13:15'),
(52,'message to be displayed',0,0,66,0,'2023-12-15 17:13:15'),
(53,'11',0,0,66,0,'2023-12-15 17:15:06'),
(54,'s',0,0,66,0,'2023-12-15 17:16:56'),
(55,'w',0,0,66,0,'2023-12-15 17:17:20'),
(56,'prueba',0,0,66,0,'2023-12-15 17:18:20'),
(57,'Prueba 1',0,0,66,0,'2023-12-15 17:19:44'),
(58,'sssssssss',0,0,66,0,'2023-12-15 17:21:40'),
(59,'dsds',0,0,66,0,'2023-12-15 17:22:03'),
(60,'aa',0,0,66,0,'2023-12-15 17:23:18'),
(61,'Test',0,0,66,0,'2023-12-19 00:59:27'),
(62,'test',0,0,66,NULL,'2023-12-19 01:09:30'),
(63,'e',0,0,66,NULL,'2023-12-19 01:12:14'),
(64,'s',0,0,66,NULL,'2023-12-19 01:26:23'),
(65,'s',0,0,66,NULL,'2023-12-19 01:27:53'),
(66,'aa',0,0,NULL,NULL,'2023-12-19 01:29:55');
/*!40000 ALTER TABLE `contact_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa_usuario`
--

DROP TABLE IF EXISTS `empresa_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empresa_usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_empresa` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa_usuario`
--

LOCK TABLES `empresa_usuario` WRITE;
/*!40000 ALTER TABLE `empresa_usuario` DISABLE KEYS */;
INSERT INTO `empresa_usuario` VALUES
(5,5,46);
/*!40000 ALTER TABLE `empresa_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresas`
--

DROP TABLE IF EXISTS `empresas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empresas` (
  `id_empresa` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `nombre_comercial` varchar(100) DEFAULT NULL,
  `rfc` varchar(13) DEFAULT NULL,
  PRIMARY KEY (`id_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresas`
--

LOCK TABLES `empresas` WRITE;
/*!40000 ALTER TABLE `empresas` DISABLE KEYS */;
INSERT INTO `empresas` VALUES
(5,46,'YourCompanyName','1111111111111');
/*!40000 ALTER TABLE `empresas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `id_empresa` int(11) DEFAULT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `color` varchar(250) DEFAULT NULL,
  `size` varchar(250) DEFAULT NULL,
  `code` varchar(250) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `frecuency` int(11) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `material` varchar(50) DEFAULT NULL,
  `uploaded_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_producto`),
  KEY `id_empresa` (`id_empresa`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_empresa`) REFERENCES `empresas` (`id_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES
(1,5,'Shirt','https://m.media-amazon.com/images/I/61HneezlWgS.__AC_SY445_SX342_QL70_ML2_.jpg','Black','Code_1','SM','A regular red shirt',10.20,1,'Shirt','Cotton','2023-11-30 11:39:21'),
(2,5,'Shirt','https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/v/w/g/xl-men-slim-fit-solid-mandarin-collar-casual-shirt-mildin-original-imag6as39kddzppv-bb.jpeg?q=90','Red','Large','ABC123','A regular black shirt',19.99,1,'Clothing','Cotton','2023-11-30 11:18:16'),
(3,5,'Shirt','https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/v/w/g/xl-men-slim-fit-solid-mandarin-collar-casual-shirt-mildin-original-imag6as39kddzppv-bb.jpeg?q=90','Red','Large','ABC123','A regular black shirt',19.99,1,'Clothing','Cotton','2023-11-30 11:18:16'),
(4,5,'Shirt','https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/v/w/g/xl-men-slim-fit-solid-mandarin-collar-casual-shirt-mildin-original-imag6as39kddzppv-bb.jpeg?q=90','Red','Large','ABC123','A regular black shirt',19.99,1,'Clothing','Cotton','2023-11-30 11:18:16'),
(5,5,'Shirt','https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/v/w/g/xl-men-slim-fit-solid-mandarin-collar-casual-shirt-mildin-original-imag6as39kddzppv-bb.jpeg?q=90','Red','Large','ABC123','A regular black shirt',19.99,1,'Clothing','Cotton','2023-11-30 11:18:16'),
(6,5,'Shirt','https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/v/w/g/xl-men-slim-fit-solid-mandarin-collar-casual-shirt-mildin-original-imag6as39kddzppv-bb.jpeg?q=90','Red','Large','ABC123','A regular black shirt',19.99,1,'Clothing','Cotton','2023-11-30 11:18:16'),
(7,5,'Shirt','https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/v/w/g/xl-men-slim-fit-solid-mandarin-collar-casual-shirt-mildin-original-imag6as39kddzppv-bb.jpeg?q=90','Red','Large','ABC123','A regular black shirt',19.99,1,'Clothing','Cotton','2023-11-30 11:18:16');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `paterno` varchar(100) DEFAULT NULL,
  `materno` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(46,'mail@mail.com','$2a$10$.GIs.MmJnCqBnlLIlt3d.OdZ.SNUmqrZ4AZ7C/rfi.YUa1lmfhd2i','Cesar Ogdai','Fernandez','Clemente','961452222222');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `websites`
--

DROP TABLE IF EXISTS `websites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `websites` (
  `website_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `id_empresa` int(11) DEFAULT NULL,
  PRIMARY KEY (`website_id`),
  KEY `id_empresa` (`id_empresa`),
  CONSTRAINT `websites_ibfk_1` FOREIGN KEY (`id_empresa`) REFERENCES `empresas` (`id_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `websites`
--

LOCK TABLES `websites` WRITE;
/*!40000 ALTER TABLE `websites` DISABLE KEYS */;
INSERT INTO `websites` VALUES
(6,'YourCompanyName','\n        <html lang=\"en\">\n            <head>\n                <meta charset=\"UTF-8\" />\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n                <title>Minimalist Landing Page</title>\n                <style>\n                body { margin: 0; padding: 0; font-family: \'Arial\', sans-serif;\n                background-color: #f4f4f4; } .container { max-width: 800px; margin: 0\n                auto; text-align: center; padding: 50px 20px; } h1 { color: #333; } p {\n                color: #555; margin-top: 20px; } .cta-button { display: inline-block;\n                padding: 10px 20px; font-size: 16px; text-decoration: none; color: #fff;\n                background-color: #3498db; border-radius: 5px; transition:\n                background-color 0.3s; } .cta-button:hover { background-color: #2980b9; }\n                </style>\n            </head>\n            <body>\n                <div class=\"container\">\n                <h1>Welcome to our Website</h1>\n                <p>dasds</p>\n                <div class=\"content\">\n                <img src=\"data:image/png;base64,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\" alt=\"Uploaded Image\">\n                </div>\n                </div>\n            </body>\n            </html>',5);
/*!40000 ALTER TABLE `websites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'project'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-12 12:57:13

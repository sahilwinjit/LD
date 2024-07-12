-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: mydatabase
-- ------------------------------------------------------
-- Server version	8.0.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `birthdate` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'John Doe','newjohn@example.com','1990-01-01'),(2,'Jane Smith','newjane@example.com','1992-02-02'),(3,'Alice Johnson','alice@example.com','1985-03-03'),(4,'David Brown','david@example.com','1980-05-05'),(5,'Emma Davis','emma@example.com','1995-08-08'),(6,'Frank Miller','frank@example.com','1987-12-12'),(7,'Grace Lee','grace@example.com','1990-09-09'),(8,'Hannah White','hannah@example.com','1984-11-11'),(9,'Ivy Green','ivy@example.com','1988-06-06'),(10,'Jack Black','jack@example.com','1979-07-07'),(11,'Katie Perry','katie@example.com','1991-10-10'),(12,'Leo King','leo@example.com','1983-04-04'),(13,'Mia Hill','mia@example.com','1982-03-03'),(14,'Nina Turner','nina@example.com','1986-02-02'),(15,'Oscar Blue','oscar@example.com','1981-01-01'),(16,'Paul Red','paul@example.com','1993-05-05'),(17,'Quincy Purple','quincy@example.com','1985-09-09'),(18,'Rachel Orange','rachel@example.com','1989-12-12'),(19,'Sam Pink','updated@example.com','1994-11-11'),(20,'Tina Yellow','tina@example.com','1996-07-07'),(21,'John Doe','john@example.com','1990-01-01'),(22,'Jane Smith','jane@example.com','1992-02-02'),(23,'Alice Johnson','alice@example.com','1985-03-03'),(24,'David Brown','david@example.com','1980-05-05'),(25,'Emma Davis','emma@example.com','1995-08-08'),(26,'Frank Miller','frank@example.com','1987-12-12'),(27,'Grace Lee','grace@example.com','1990-09-09'),(28,'Hannah White','hannah@example.com','1984-11-11'),(29,'Ivy Green','ivy@example.com','1988-06-06'),(30,'Jack Black','jack@example.com','1979-07-07'),(31,'Katie Perry','katie@example.com','1991-10-10'),(32,'Leo King','leo@example.com','1983-04-04'),(33,'Mia Hill','mia@example.com','1982-03-03'),(34,'Nina Turner','nina@example.com','1986-02-02'),(35,'Oscar Blue','oscar@example.com','1981-01-01'),(36,'Paul Red','paul@example.com','1993-05-05'),(37,'Quincy Purple','quincy@example.com','1985-09-09'),(38,'Rachel Orange','rachel@example.com','1989-12-12'),(39,'Sam Pink','sam@example.com','1994-11-11'),(40,'Tina Yellow','tina@example.com','1996-07-07'),(41,'John Doe','john@example.com','1990-01-01'),(42,'Jane Smith','jane@example.com','1992-02-02'),(43,'Alice Johnson','alice@example.com','1985-03-03'),(44,'David Brown','david@example.com','1980-05-05'),(45,'Emma Davis','emma@example.com','1995-08-08'),(46,'Frank Miller','frank@example.com','1987-12-12'),(47,'Grace Lee','grace@example.com','1990-09-09'),(48,'Hannah White','hannah@example.com','1984-11-11'),(49,'Ivy Green','ivy@example.com','1988-06-06'),(50,'Jack Black','jack@example.com','1979-07-07'),(51,'Katie Perry','katie@example.com','1991-10-10'),(52,'Leo King','leo@example.com','1983-04-04'),(53,'Mia Hill','mia@example.com','1982-03-03'),(54,'Nina Turner','nina@example.com','1986-02-02'),(55,'Oscar Blue','oscar@example.com','1981-01-01'),(56,'Paul Red','paul@example.com','1993-05-05'),(57,'Quincy Purple','quincy@example.com','1985-09-09'),(58,'Rachel Orange','rachel@example.com','1989-12-12'),(59,'Sam Pink','sam@example.com','1994-11-11'),(60,'Tina Yellow','tina@example.com','1996-07-07'),(61,'David Brown','david@example.com','1980-05-05'),(62,'New Customer','newcustomer@example.com','2000-01-01');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers_copy`
--

DROP TABLE IF EXISTS `customers_copy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers_copy` (
  `id` int NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `birthdate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers_copy`
--

LOCK TABLES `customers_copy` WRITE;
/*!40000 ALTER TABLE `customers_copy` DISABLE KEYS */;
INSERT INTO `customers_copy` VALUES (1,'John Doe','john@example.com','1990-01-01'),(2,'Jane Smith','jane@example.com','1992-02-02'),(3,'Alice Johnson','alice@example.com','1985-03-03'),(4,'David Brown','david@example.com','1980-05-05'),(5,'Emma Davis','emma@example.com','1995-08-08'),(6,'Frank Miller','frank@example.com','1987-12-12'),(7,'Grace Lee','grace@example.com','1990-09-09'),(8,'Hannah White','hannah@example.com','1984-11-11'),(9,'Ivy Green','ivy@example.com','1988-06-06'),(10,'Jack Black','jack@example.com','1979-07-07'),(11,'Katie Perry','katie@example.com','1991-10-10'),(12,'Leo King','leo@example.com','1983-04-04'),(13,'Mia Hill','mia@example.com','1982-03-03'),(14,'Nina Turner','nina@example.com','1986-02-02'),(15,'Oscar Blue','oscar@example.com','1981-01-01'),(16,'Paul Red','paul@example.com','1993-05-05'),(17,'Quincy Purple','quincy@example.com','1985-09-09'),(18,'Rachel Orange','rachel@example.com','1989-12-12'),(19,'Sam Pink','sam@example.com','1994-11-11'),(20,'Tina Yellow','tina@example.com','1996-07-07'),(21,'John Doe','john@example.com','1990-01-01'),(22,'Jane Smith','jane@example.com','1992-02-02'),(23,'Alice Johnson','alice@example.com','1985-03-03'),(24,'David Brown','david@example.com','1980-05-05'),(25,'Emma Davis','emma@example.com','1995-08-08'),(26,'Frank Miller','frank@example.com','1987-12-12'),(27,'Grace Lee','grace@example.com','1990-09-09'),(28,'Hannah White','hannah@example.com','1984-11-11'),(29,'Ivy Green','ivy@example.com','1988-06-06'),(30,'Jack Black','jack@example.com','1979-07-07'),(31,'Katie Perry','katie@example.com','1991-10-10'),(32,'Leo King','leo@example.com','1983-04-04'),(33,'Mia Hill','mia@example.com','1982-03-03'),(34,'Nina Turner','nina@example.com','1986-02-02'),(35,'Oscar Blue','oscar@example.com','1981-01-01'),(36,'Paul Red','paul@example.com','1993-05-05'),(37,'Quincy Purple','quincy@example.com','1985-09-09'),(38,'Rachel Orange','rachel@example.com','1989-12-12'),(39,'Sam Pink','sam@example.com','1994-11-11'),(40,'Tina Yellow','tina@example.com','1996-07-07'),(41,'John Doe','john@example.com','1990-01-01'),(42,'Jane Smith','jane@example.com','1992-02-02'),(43,'Alice Johnson','alice@example.com','1985-03-03'),(44,'David Brown','david@example.com','1980-05-05'),(45,'Emma Davis','emma@example.com','1995-08-08'),(46,'Frank Miller','frank@example.com','1987-12-12'),(47,'Grace Lee','grace@example.com','1990-09-09'),(48,'Hannah White','hannah@example.com','1984-11-11'),(49,'Ivy Green','ivy@example.com','1988-06-06'),(50,'Jack Black','jack@example.com','1979-07-07'),(51,'Katie Perry','katie@example.com','1991-10-10'),(52,'Leo King','leo@example.com','1983-04-04'),(53,'Mia Hill','mia@example.com','1982-03-03'),(54,'Nina Turner','nina@example.com','1986-02-02'),(55,'Oscar Blue','oscar@example.com','1981-01-01'),(56,'Paul Red','paul@example.com','1993-05-05'),(57,'Quincy Purple','quincy@example.com','1985-09-09'),(58,'Rachel Orange','rachel@example.com','1989-12-12'),(59,'Sam Pink','sam@example.com','1994-11-11'),(60,'Tina Yellow','tina@example.com','1996-07-07'),(61,'David Brown','david@example.com','1980-05-05'),(62,'New Customer','newcustomer@example.com','2000-01-01');
/*!40000 ALTER TABLE `customers_copy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,'2024-01-15',150.00),(2,2,'2024-01-20',200.00),(3,3,'2024-01-25',300.00),(4,4,'2024-02-01',250.00),(5,5,'2024-02-05',400.00),(6,6,'2024-02-10',350.00),(7,7,'2024-02-15',450.00),(8,8,'2024-02-20',500.00),(9,9,'2024-03-01',550.00),(10,10,'2024-03-05',600.00),(11,11,'2024-03-10',650.00),(12,12,'2024-03-15',700.00),(13,13,'2024-03-20',750.00),(14,14,'2024-03-25',800.00),(15,15,'2024-04-01',850.00),(16,16,'2024-04-05',900.00),(17,17,'2024-04-10',950.00),(18,18,'2024-04-15',1000.00),(19,19,'2024-04-20',1050.00),(20,20,'2024-04-25',1100.00),(21,1,'2024-01-15',150.00),(22,2,'2024-01-20',200.00),(23,3,'2024-01-25',300.00),(24,4,'2024-02-01',250.00),(25,5,'2024-02-05',400.00),(26,6,'2024-02-10',350.00),(27,7,'2024-02-15',450.00),(28,8,'2024-02-20',500.00),(29,9,'2024-03-01',550.00),(30,10,'2024-03-05',600.00),(31,11,'2024-03-10',650.00),(32,12,'2024-03-15',700.00),(33,13,'2024-03-20',750.00),(34,14,'2024-03-25',800.00),(35,15,'2024-04-01',850.00),(36,16,'2024-04-05',900.00),(37,17,'2024-04-10',950.00),(38,18,'2024-04-15',1000.00),(39,19,'2024-04-20',1050.00),(40,20,'2024-04-25',1100.00),(41,1,'2024-01-15',150.00),(42,2,'2024-01-20',200.00),(43,3,'2024-01-25',300.00),(44,4,'2024-02-01',250.00),(45,5,'2024-02-05',400.00),(46,6,'2024-02-10',350.00),(47,7,'2024-02-15',450.00),(48,8,'2024-02-20',500.00),(49,9,'2024-03-01',550.00),(50,10,'2024-03-05',600.00),(51,11,'2024-03-10',650.00),(52,12,'2024-03-15',700.00),(53,13,'2024-03-20',750.00),(54,14,'2024-03-25',800.00),(55,15,'2024-04-01',850.00),(56,16,'2024-04-05',900.00),(57,17,'2024-04-10',950.00),(58,18,'2024-04-15',1000.00),(59,19,'2024-04-20',1050.00),(60,20,'2024-04-25',1100.00);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Product A',50.00),(2,'Product B',75.00),(3,'Product C',100.00),(4,'Product D',125.00),(5,'Product E',150.00),(6,'Product F',175.00),(7,'Product G',200.00),(8,'Product H',225.00),(9,'Product I',250.00),(10,'Product J',275.00),(11,'Product K',300.00),(12,'Product L',325.00),(13,'Product M',350.00),(14,'Product N',375.00),(15,'Product O',400.00),(16,'Product P',425.00),(17,'Product Q',450.00),(18,'Product R',475.00),(19,'Product S',500.00),(20,'Product T',525.00),(21,'Product A',50.00),(22,'Product B',75.00),(23,'Product C',100.00),(24,'Product D',125.00),(25,'Product E',150.00),(26,'Product F',175.00),(27,'Product G',200.00),(28,'Product H',225.00),(29,'Product I',250.00),(30,'Product J',275.00),(31,'Product K',300.00),(32,'Product L',325.00),(33,'Product M',350.00),(34,'Product N',375.00),(35,'Product O',400.00),(36,'Product P',425.00),(37,'Product Q',450.00),(38,'Product R',475.00),(39,'Product S',500.00),(40,'Product T',525.00),(41,'Product A',50.00),(42,'Product B',75.00),(43,'Product C',100.00),(44,'Product D',125.00),(45,'Product E',150.00),(46,'Product F',175.00),(47,'Product G',200.00),(48,'Product H',225.00),(49,'Product I',250.00),(50,'Product J',275.00),(51,'Product K',300.00),(52,'Product L',325.00),(53,'Product M',350.00),(54,'Product N',375.00),(55,'Product O',400.00),(56,'Product P',425.00),(57,'Product Q',450.00),(58,'Product R',475.00),(59,'Product S',500.00),(60,'Product T',525.00);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'mydatabase'
--
/*!50003 DROP PROCEDURE IF EXISTS `CreateCopyOfTable` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateCopyOfTable`()
BEGIN
    CREATE TABLE customers_copy AS SELECT * FROM customers;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteOldCustomers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteOldCustomers`()
BEGIN
    DELETE FROM customers WHERE birthdate < '1985-01-01';
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertCustomers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertCustomers`()
BEGIN
    INSERT INTO customers (name, email, birthdate) VALUES ('New Customer', 'newcustomer@example.com', '2000-01-01');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertInitialData` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertInitialData`()
BEGIN
    -- Insert customers
    INSERT INTO customers (name, email, birthdate) VALUES
    ('John Doe', 'john@example.com', '1990-01-01'),
    ('Jane Smith', 'jane@example.com', '1992-02-02'),
    ('Alice Johnson', 'alice@example.com', '1985-03-03'),
    ('David Brown', 'david@example.com', '1980-05-05'),
    ('Emma Davis', 'emma@example.com', '1995-08-08'),
    ('Frank Miller', 'frank@example.com', '1987-12-12'),
    ('Grace Lee', 'grace@example.com', '1990-09-09'),
    ('Hannah White', 'hannah@example.com', '1984-11-11'),
    ('Ivy Green', 'ivy@example.com', '1988-06-06'),
    ('Jack Black', 'jack@example.com', '1979-07-07'),
    ('Katie Perry', 'katie@example.com', '1991-10-10'),
    ('Leo King', 'leo@example.com', '1983-04-04'),
    ('Mia Hill', 'mia@example.com', '1982-03-03'),
    ('Nina Turner', 'nina@example.com', '1986-02-02'),
    ('Oscar Blue', 'oscar@example.com', '1981-01-01'),
    ('Paul Red', 'paul@example.com', '1993-05-05'),
    ('Quincy Purple', 'quincy@example.com', '1985-09-09'),
    ('Rachel Orange', 'rachel@example.com', '1989-12-12'),
    ('Sam Pink', 'sam@example.com', '1994-11-11'),
    ('Tina Yellow', 'tina@example.com', '1996-07-07');

    -- Insert orders
    INSERT INTO orders (customer_id, order_date, amount) VALUES 
    (1, '2024-01-15', 150.00),
    (2, '2024-01-20', 200.00),
    (3, '2024-01-25', 300.00),
    (4, '2024-02-01', 250.00),
    (5, '2024-02-05', 400.00),
    (6, '2024-02-10', 350.00),
    (7, '2024-02-15', 450.00),
    (8, '2024-02-20', 500.00),
    (9, '2024-03-01', 550.00),
    (10, '2024-03-05', 600.00),
    (11, '2024-03-10', 650.00),
    (12, '2024-03-15', 700.00),
    (13, '2024-03-20', 750.00),
    (14, '2024-03-25', 800.00),
    (15, '2024-04-01', 850.00),
    (16, '2024-04-05', 900.00),
    (17, '2024-04-10', 950.00),
    (18, '2024-04-15', 1000.00),
    (19, '2024-04-20', 1050.00),
    (20, '2024-04-25', 1100.00);

    -- Insert products
    INSERT INTO products (name, price) VALUES 
    ('Product A', 50.00),
    ('Product B', 75.00),
    ('Product C', 100.00),
    ('Product D', 125.00),
    ('Product E', 150.00),
    ('Product F', 175.00),
    ('Product G', 200.00),
    ('Product H', 225.00),
    ('Product I', 250.00),
    ('Product J', 275.00),
    ('Product K', 300.00),
    ('Product L', 325.00),
    ('Product M', 350.00),
    ('Product N', 375.00),
    ('Product O', 400.00),
    ('Product P', 425.00),
    ('Product Q', 450.00),
    ('Product R', 475.00),
    ('Product S', 500.00),
    ('Product T', 525.00);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ModifyColumnAttributes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ModifyColumnAttributes`()
BEGIN
    ALTER TABLE customers MODIFY COLUMN email VARCHAR(255) NOT NULL;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SelectCustomerOrders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SelectCustomerOrders`()
BEGIN
    SELECT customers.id, customers.name, orders.id AS order_id, orders.order_date, orders.amount
    FROM customers
    INNER JOIN orders ON customers.id = orders.customer_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SelectCustomerOrdersLeftJoin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SelectCustomerOrdersLeftJoin`()
BEGIN
    SELECT customers.id, customers.name, orders.id AS order_id, orders.order_date, orders.amount
    FROM customers
    LEFT JOIN orders ON customers.id = orders.customer_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SelectCustomerOrdersProducts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SelectCustomerOrdersProducts`()
BEGIN
    SELECT customers.id, customers.name, orders.id AS order_id, orders.order_date, orders.amount, products.id AS product_id, products.name AS product_name, products.price
    FROM customers
    LEFT JOIN orders ON customers.id = orders.customer_id
    LEFT JOIN products ON orders.id = products.id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SelectCustomers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SelectCustomers`()
BEGIN
    SELECT * FROM customers;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SelectCustomersAndProducts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SelectCustomersAndProducts`()
BEGIN
    SELECT name, email, birthdate AS info FROM customers
    UNION
    SELECT name, '', price AS info FROM products;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SelectCustomersByName` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SelectCustomersByName`(IN customerName VARCHAR(255))
BEGIN
    SELECT * FROM customers WHERE name = customerName;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SelectCustomersWithConditions` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SelectCustomersWithConditions`()
BEGIN
    SELECT * FROM customers
    WHERE (email LIKE '%@example.com' AND birthdate BETWEEN '1980-01-01' AND '1995-12-31')
    OR email IN ('john@example.com', 'jane@example.com')
    ORDER BY birthdate DESC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SelectLimitedCustomers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SelectLimitedCustomers`(IN limitValue INT)
BEGIN
    SELECT * FROM customers LIMIT limitValue;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateCustomerEmail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateCustomerEmail`(IN customerId INT, IN newEmail VARCHAR(255))
BEGIN
    UPDATE customers SET email = newEmail WHERE id = customerId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateCustomerEmailBasedOnOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateCustomerEmailBasedOnOrder`()
BEGIN
    UPDATE customers
    SET email = 'updated@example.com'
    WHERE id = (SELECT customer_id FROM orders WHERE amount > 1000 LIMIT 1);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-11 10:03:15

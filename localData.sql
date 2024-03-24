-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: prueba
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `participants`
--

DROP TABLE IF EXISTS `participants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participants` (
  `participant_code` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `skill` int DEFAULT NULL,
  PRIMARY KEY (`participant_code`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participants`
--

LOCK TABLES `participants` WRITE;
/*!40000 ALTER TABLE `participants` DISABLE KEYS */;
INSERT INTO `participants` VALUES (1,'Lets',432),(2,'Lets',432),(3,'dslkfj',321),(4,'frewfr',4123),(5,'rfewf',212);
/*!40000 ALTER TABLE `participants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `producto_nombre` varchar(50) DEFAULT NULL,
  `modelo` varchar(150) DEFAULT NULL,
  `caracteristicas` varchar(150) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `precio_cuotas` decimal(10,2) DEFAULT NULL,
  `descripcion` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `precio_envio` int DEFAULT '0',
  `imagen_ruta` varchar(255) DEFAULT 'imagenes/fotoPrueba.png',
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Laptop HP Gaming','Victus','Disco solido',213.00,12345.00,'lo describe','2024-03-10 02:51:24','2024-03-10 02:51:24',30,'imagenes/laptop.jpg'),(2,'Auto','Modelo 1','FOo',23.00,234.00,'bar','2024-03-10 03:08:49','2024-03-10 03:08:49',30,'imagenes/auto.jpg'),(3,'Tablet Apple','iPad Pro','256 GB',999.00,200.00,'Color rosa','2024-03-11 05:48:24','2024-03-11 05:48:24',30,'imagenes/tablet.jpg'),(4,'Camara Canon','EOS R5','Sensor de imagen de alta calida',3840.00,57.00,'tres lentillas ','2024-03-11 05:53:19','2024-03-11 05:53:19',30,'imagenes/camaraCanon.jpg'),(5,'Consola de videojuegos','X-BOX','Capacidad de almacenamiento',2500.00,75.00,'Viene con 3 juegos','2024-03-11 06:25:21','2024-03-11 06:25:21',30,'imagenes/xbox.jpg'),(6,'Ropa','Sudaderas','Algodon',125.00,25.00,'color: negro, rosa, plomo','2024-03-11 06:25:21','2024-03-11 06:25:21',20,'imagenes/ropa.jpg'),(7,'Funda laptop','The North Face','Material impermiable',70.00,10.00,'Varios compartimientos','2024-03-11 06:25:21','2024-03-11 06:25:21',15,'imagenes/Funda.jpg'),(8,'Cartera','The totebag ','Cuero',350.00,20.00,'Varios Compartimientos','2024-03-11 06:25:21','2024-03-11 06:25:21',20,'imagenes/cartera.jpg'),(9,'Cuadernos ','One','Hoja punteada ',27.00,27.00,'Tamaño carta u oficio','2024-03-11 06:25:21','2024-03-11 06:25:21',20,'imagenes/Cuaderno.jpg'),(10,'Toma todo','Stanley','Alta durabilidad',250.00,50.00,'Color blanco','2024-03-11 06:25:21','2024-03-11 06:25:21',15,'imagenes/Tomatodo.jpg'),(11,'Celular ','Samsung S24 ultra','Titanium',6500.00,500.00,'Color Platinado','2024-03-11 20:08:34','2024-03-11 20:08:34',30,'imagenes/celular.jpg '),(12,'Tenis ','Adidas Samba','Ajuste clasico',750.00,50.00,'Color negro','2024-03-11 20:08:34','2024-03-11 20:08:34',30,'imagenes/adidas.jpg'),(13,'Televisor ','Samsung TV','Televisor Curvo Smart ',3500.00,350.00,'Serie 8 Ultra HD 4K','2024-03-11 20:08:34','2024-03-11 20:08:34',50,'imagenes/televisor.jpg'),(14,'Audiculares','AirPods Max','Inalambricos',4500.00,500.00,'Color verde ','2024-03-11 20:08:34','2024-03-11 20:08:34',50,'imagenes/audiculares.jpg'),(15,'Labiales ','Maybelline','Super Stay Matte',130.00,130.00,'Tono 065','2024-03-11 20:08:34','2024-03-11 20:08:34',20,'imagenes/labial.jpg'),(16,'Videojuego ','PS4','Grand Theft Auto  GTA',450.00,450.00,'GTA 4','2024-03-11 20:08:34','2024-03-11 20:08:34',20,'imagenes/gta.jpg'),(17,'Sofa','Puffs',NULL,350.00,350.00,'Color beige','2024-03-11 20:08:34','2024-03-11 20:08:34',0,'imagenes/puff.jpg');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tournament_participant`
--

DROP TABLE IF EXISTS `tournament_participant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tournament_participant` (
  `tournament_code` int NOT NULL,
  `participant_code` int NOT NULL,
  PRIMARY KEY (`tournament_code`,`participant_code`),
  KEY `tUser_code` (`participant_code`),
  CONSTRAINT `tournament_participant_ibfk_1` FOREIGN KEY (`tournament_code`) REFERENCES `tournaments` (`tournament_code`),
  CONSTRAINT `tournament_participant_ibfk_2` FOREIGN KEY (`participant_code`) REFERENCES `participants` (`participant_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tournament_participant`
--

LOCK TABLES `tournament_participant` WRITE;
/*!40000 ALTER TABLE `tournament_participant` DISABLE KEYS */;
INSERT INTO `tournament_participant` VALUES (3,1),(3,2),(3,3),(3,4),(3,5);
/*!40000 ALTER TABLE `tournament_participant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tournaments`
--

DROP TABLE IF EXISTS `tournaments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tournaments` (
  `tournament_code` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `format` int DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`tournament_code`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tournaments`
--

LOCK TABLES `tournaments` WRITE;
/*!40000 ALTER TABLE `tournaments` DISABLE KEYS */;
INSERT INTO `tournaments` VALUES (3,'Lets',1,'Not lose ourselvers','Preparacion'),(4,'Lets',1,'Not lose ourselvers','Preparacion'),(5,'Lets',1,'Not lose ourselvers','Preparacion');
/*!40000 ALTER TABLE `tournaments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nombres` varchar(255) DEFAULT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `pais` varchar(255) DEFAULT NULL,
  `metodo_pago` varchar(255) DEFAULT NULL,
  `productos_carrito` json DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'patito','12345','Javier','Ore','a@a.com','Bolivia','Tarjeta','[\"1\", \"3\", \"5\"]','2024-03-11 01:57:27','2024-03-12 11:50:23'),(2,'Usuario','12345',NULL,NULL,'usuario@gmail.com',NULL,NULL,NULL,'2024-03-12 06:12:17','2024-03-12 06:12:17'),(3,'usuario1','12345',NULL,NULL,'usuario1@gmail.com',NULL,NULL,NULL,'2024-03-12 06:27:53','2024-03-12 06:27:53');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'prueba'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-24  0:05:47

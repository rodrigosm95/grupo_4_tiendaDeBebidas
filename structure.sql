CREATE DATABASE IF NOT EXISTS `db_birritapp`;
USE `db_birritapp`;


CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `marcas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `metodosdepago` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `metodo` char(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `productcategoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` char(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `tamanios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tamanio` char(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `usercategorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` char(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` char(50) NOT NULL,
  `direccion` text NOT NULL,
  `provincia` char(50) NOT NULL,
  `ciudad` char(50) NOT NULL,
  `email` text NOT NULL,
  `contraseña` text NOT NULL,
  `categoria` int(11) NOT NULL,
  `esLegal` char(2) NOT NULL,
  `notificaciones` char(2) NOT NULL,
  `image` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`) USING HASH,
  KEY `fk_UserCategorias` (`categoria`),
  KEY `fk_UsuariosImages` (`image`),
  CONSTRAINT `fk_UserCategorias` FOREIGN KEY (`categoria`) REFERENCES `usercategorias` (`id`),
  CONSTRAINT `fk_UsuariosImages` FOREIGN KEY (`image`) REFERENCES `images` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `carritos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` int(11) NOT NULL,
  `listaDeItems` int(11) NOT NULL,
  `itemsTotales` int(11) NOT NULL,
  `precioTotal` int(11) NOT NULL,
  `horaDeLaCompra` text NOT NULL,
  `fechaDeLaCompra` text NOT NULL,
  `metodoDePago` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_UsuarioUsuarios` (`usuario`),
  KEY `fk_listaListaDeItems` (`listaDeItems`),
  KEY `fk_metodosDePago` (`metodoDePago`),
  CONSTRAINT `fk_UsuarioUsuarios` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `fk_metodosDePago` FOREIGN KEY (`metodoDePago`) REFERENCES `metodosdepago` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` int(11) NOT NULL,
  `marca` int(11) NOT NULL,
  `sabor` text NOT NULL,
  `tamanio` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_CatProdCat` (`categoria`),
  KEY `fk_marcaMarcas` (`marca`),
  KEY `fk_tamanioTamanios` (`tamanio`),
  CONSTRAINT `fk_CatProdCat` FOREIGN KEY (`categoria`) REFERENCES `productcategoria` (`id`),
  CONSTRAINT `fk_marcaMarcas` FOREIGN KEY (`marca`) REFERENCES `marcas` (`id`),
  CONSTRAINT `fk_tamanioTamanios` FOREIGN KEY (`tamanio`) REFERENCES `tamanios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `listasdeitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `carrito` int(11) NOT NULL,
  `producto` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_carrito` (`carrito`),
  KEY `fk_producto` (`producto`),
  CONSTRAINT `fk_carrito` FOREIGN KEY (`carrito`) REFERENCES `carritos` (`id`),
  CONSTRAINT `fk_producto` FOREIGN KEY (`producto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `productimages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` int(11) NOT NULL,
  `producto` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ProdImgIdProd` (`producto`),
  KEY `fk_ImagesPImg` (`image`),
  CONSTRAINT `fk_ImagesPImg` FOREIGN KEY (`image`) REFERENCES `images` (`id`),
  CONSTRAINT `fk_ProdImgIdProd` FOREIGN KEY (`producto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;






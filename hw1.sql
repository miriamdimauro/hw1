CREATE DATABASE hw1;

CREATE TABLE `immagini` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titolo` varchar(255) NOT NULL,
  `immagine` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user`) REFERENCES `users` (`username`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cognome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `genere` varchar(255) NOT NULL,
  PRIMARY KEY (`username`,`email`)
);

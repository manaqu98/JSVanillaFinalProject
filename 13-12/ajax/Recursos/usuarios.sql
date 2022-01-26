CREATE TABLE `datausers` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(80) NOT NULL,
  `password` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `datausers` (`id`, `username`, `password`) VALUES
(1, 'manaqu', 'Puchini1998'),
(2, 'martin', 'Puchini1998'),
(3, 'juan', 'Puchini1998'),
(4, 'ricardo', 'Puchini1998')
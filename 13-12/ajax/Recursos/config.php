<?php
session_start();
$host = "localhost"; /*Hostname*/
$user = "admin"; /*Nombre Usuario*/
$password = "root"; /*Password*/
$dbname = "Recursos/usuarios.sql"; /*Nombre Base de Datos*/

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
die("Connection failed: " . mysqli_connect_error());
}   
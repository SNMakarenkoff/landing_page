<?php
    $Firstname = $_POST['name'];
    $Lastname = $_POST['lastname'];
    $Login = $_POST['login'];
    $Email = $_POST['email'];
    $Password = $_POST['password'];
    $Patronymic = $_POST['patronymic'];    
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Данные формы</title>
</head>
<body>
    <p>Ваше имя <?php echo $Lastname; ?>
    </p>
</body>
</html>
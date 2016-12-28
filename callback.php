<?
header('Cache-Control: no-cache, must-revalidate');
header('Content-type: text/json');
header('Content-type: application/json');
if ((isset($_POST['name']) && $_POST['name'] != "") && (isset($_POST['phone']) && $_POST['phone'] != "")) { //Проверка отправилось ли наше поля name и не пустые ли они
	$to = 'debug.sujimoshi@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
	$subject = 'Обратный звонок'; //Загаловок сообщения
	$message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p>Имя: ' . $_POST['name'] . '</p>
                        <p>Телефон: ' . $_POST['phone'] . '</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
	$headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
	$headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
	mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
	
	echo json_encode([
		'msg' => 'Благодарим за заявку! Мы вскоре с вами свяжемся.'
	]);
} else {
	echo json_encode([
		'msg' => 'Произошла ошибка! Проверьте правильность заполненых полей!'
	]);
}
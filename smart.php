<?php
require_once 'PHPMailer/src/PHPMailer.php';
require_once 'PHPMailer/src/SMTP.php';
require_once 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Получение данных из POST-запроса с проверкой
$uname = isset($_POST['uname']) ? $_POST['uname'] : '';
$uphone = isset($_POST['uphone']) ? $_POST['uphone'] : '';

$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';

try {
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
	// Настройка SMTP
	$mail->isSMTP(); 
	$mail->Host = 'mail.hosting.reg.ru'; 
	$mail->SMTPAuth = true; 
	$mail->Username = 'text@elit-kvartira-brn.ru'; 
	$mail->Password = 'zO5nH0oD5puN7uG2'; 
	$mail->SMTPSecure = 'ssl'; 
	$mail->Port = 465; 
	
	// Настройка отправителя и получателей
	$mail->setFrom('text@elit-kvartira-brn.ru', 'Алиса'); 
	$mail->addAddress('arzonccnt@gmail.com'); 
	$mail->addAddress('yu.p.pryadko@yandex.ru');  
	$mail->addAddress('stillhaus@yandex.ru');  
	$mail->addReplyTo('stillhaus@yandex.ru', 'stillhaus');

    $mail->isHTML(true);
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body .= '
            <td style="border: 1px solid #bdbdbd; padding: 5px; width: 180px">Имя</td>
            <td style="border: 1px solid #bdbdbd; padding: 5px;">' . $uname . '</td>
        </tr>
        <tr>
            <td style="border: 1px solid #bdbdbd; padding: 5px; width: 180px">Телефон</td>
            <td style="border: 1px solid #bdbdbd; padding: 5px;">' . $uphone . '</td>
        </tr>
    </table>';
    $mail->AltBody = 'Новая заявка с сайта!';
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
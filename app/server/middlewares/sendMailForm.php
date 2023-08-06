<?php

require_once 'Middleware.php';
require_once 'request.php';
require_once './middleware/sendMailMiddleware.php';
$request = new Request();

$sendMailMiddleware = new sendMailMiddleware();


$response = $sendMailMiddleware->handle($request);
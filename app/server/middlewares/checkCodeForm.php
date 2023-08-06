<?php

require_once 'Middleware.php';
require_once 'request.php';
require_once './middleware/checkCodeMiddleware.php';
$request = new Request();


$checkCodeMiddleware = new checkCodeMiddleware();


$response = $checkCodeMiddleware->handle($request);
<?php


class Request{
   private $method;
   private $uri;
   private $queryParams;
   private $formData;

   public function __construct(){
      $this->method = $_SERVER['REQUEST_METHOD'];
      $this->uri = $_SERVER['REQUEST_URI'];
      $this->queryParams = $_GET;
      $this->formData = $_POST;
      $this->input = $_POST;
      $this->referer = $_SERVER['HTTP_REFERER'];
   }

   public function input($key) {
       return $this->input[$key] ?? null;
   }

   public function getMethod() {
      return $this->method;
   }

   public function getUri() {
      return $this->uri;
   }

   public function getQueryParam($key) {
      return isset($this->queryParams[$key]) ? $this->queryParams[$key] : null;
   }

   public function getFormData($key) {
      return isset($this->formData[$key]) ? $this->formData[$key] : null;
   }

}
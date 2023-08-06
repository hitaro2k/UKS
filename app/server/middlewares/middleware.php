<?php
class Middleware {
   protected $next;

   public function setNext(Middleware $next) {
       $this->next = $next;
   }

   public function handle(Request $request) {
       if ($this->next) {
           return $this->next->handle($request);
       }
       return null;
   }
}



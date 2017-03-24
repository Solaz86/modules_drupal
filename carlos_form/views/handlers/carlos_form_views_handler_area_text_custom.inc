<?php

class carlos_form_views_handler_area_text_custom extends views_handler_area_result {
  function options_form(&$form, &$form_state) { }

  function render($empty = FALSE) {
    global $user;
    return t('Hello, @name', array('@name' => format_username($user)));
  }
  
}
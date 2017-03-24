<?php

/**
 * Implements hook_views_data().
 */
function carlos_form_views_data() {
  $data = array();
  $data['node']['carlos_form_area_text_custom'] = array(
    'title' => t('Carlos campo'),
    'help' => t('Just a field created for development purposes.'),
    'field' => array(
      'handler' => 'carlos_form_views_handler_area_text_custom',
    ),
  );
  return $data;
};

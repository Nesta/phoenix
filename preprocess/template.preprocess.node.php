<?php

/*function autoDetectLanguage(){
  $languages = explode(',',$_SERVER['HTTP_ACCEPT_LANGUAGE']);
  if ($languages[0] == 'es' || $languages[0] == 'es-ES'){
    $lang = 'es'; 
  }else{ 
    $lang = 'en';
  }
  return $lang;
}
 */
/**
 * Implements template_preprocess_node().
 */

function da_vinci_preprocess_node(&$vars) {
  // Estructura de la home.
  global $language;
  if (drupal_is_front_page()) {
    if ($language->language == 'es') {
      $parallax_home         = 'parallax_home_es';
      $parallax_clients      = 'parallax_clients_es';
      $title_clients         = 'Grandes <strong>proyectos</strong> para grandes <strong>clientes</strong>';
      $proyectos_destacados  = 'proyectos_destacados_es';
      $slider_marcas         = 'slider_marcas_es';
      $parallax_services     = 'parallax_services_es';
      $title_services        = '<strong>Servicios expertos</strong> de <strong>consultoría</strong> y <strong>desarrollo</strong>';
      $tabs_servicios        = 'tabs_servicios_es';
      $negocios_destacados   = 'negocios_destacados_es';
      $negocios_marcas       = 'negocios_marcas_es';
      $parallax_comunidad    = 'parallax_comunidad_es';
      $parallax_solutions    = 'parallax_solutions_es';
      $title_solutions       = '<strong>Soluciones Drupal</strong> para tu negocio';
      $title_comunidad       = 'Sumamos a la <strong>comunidad Drupal</strong>';
      $comunidad_cifras      = 'comunidad_cifras_es';
      $comunidad_marcas      = 'comunidad_marcas_es';
      $parallax_contactar    = 'parallax_contactar_es';
      $contactar_form        = 'contactar_form_es';
      $main_menu             = 'main_menu_es';
      $txt_clients           = 'clientes';
      $txt_services          = 'servicios';
      $txt_solutions         = 'soluciones';
      $txt_community         = 'comunidad';
    }else{
      $parallax_home         = 'parallax_home_en';
      $parallax_clients      = 'parallax_clients_en';
      $title_clients         = 'Big projects for big customers';
      $proyectos_destacados  = 'proyectos_destacados_en';
      $slider_marcas         = 'slider_marcas_en';
      $parallax_services     = 'parallax_services_en';
      $title_services        = 'Expert Drupal consulting and development services';
      $tabs_servicios        = 'tabs_servicios_en';
      $negocios_destacados   = 'negocios_destacados_en';
      $negocios_marcas       = 'negocios_marcas_en';
      $parallax_comunidad    = 'parallax_comunidad_en';
      $parallax_solutions    = 'parallax_solutions_en';
      $title_solutions       = 'Drupal Solutions for your Business';
      $title_comunidad       = 'Contributing to Drupal';
      $comunidad_cifras      = 'comunidad_cifras_en';
      $comunidad_marcas      = 'comunidad_marcas_en';
      $parallax_contactar    = 'parallax_contactar_en';
      $contactar_form        = 'contactar_form_en';
      $main_menu             = 'main_menu_en';
      $txt_clients           = 'customers';
      $txt_services          = 'services';
      $txt_solutions         = 'solutions';
      $txt_community         = 'community';
    }

    $vars['sections'] = array(
      theme($parallax_home),
      theme($parallax_clients),
      theme('section', array(
        'items' => array(
          theme('html_tag', array(
            'element' => array(
              '#tag' => 'h2',
              '#attributes' => array(
                'class' => 'section-title clients-section-title',
              ),
              '#value' => $title_clients,
            ),
          )),
          theme($proyectos_destacados),
          theme($slider_marcas),
        ),
        'attributes' => array('class' => 'section-clients-content','id' => $txt_clients)
      )),
      theme($parallax_services),
      theme('section', array(
        'items' => array(
          theme('html_tag', array(
            'element' => array(
              '#tag' => 'h2',
              '#attributes' => array(
                'class' => 'section-title consultory-section-title',
              ),
              '#value' => $title_services,
            ),
          )),
          theme($tabs_servicios),
        ),
        'attributes' => array('class' => 'section-consultory-content', 'id' => $txt_services)
      )),
      theme($parallax_solutions),
      theme('section', array(
        'items' => array(
          theme('html_tag', array(
            'element' => array(
              '#tag' => 'h2',
              '#attributes' => array(
                'class' => 'section-title solutions-section-title',
              ),
              '#value' => $title_solutions,
            ),
          )),
          theme($negocios_destacados),
          theme($negocios_marcas),
        ),
        'attributes' => array('class' => 'section-solutions-content', 'id' => $txt_solutions)
      )),
      theme($parallax_comunidad),
      theme('section', array(
        'items' => array(
          theme('html_tag', array(
            'element' => array(
              '#tag' => 'h2',
              '#attributes' => array(
                'class' => 'section-title cifras-section-title',
              ),
              '#value' => $title_comunidad,
            ),
          )),
          theme($comunidad_cifras),
          theme($comunidad_marcas),
        ),
        'attributes' => array('class' => 'section-marcas-content', 'id' => $txt_community)
      )),
      theme($parallax_contactar, array(
        'content' => theme($contactar_form)
      )),
      theme($main_menu),
    );

  }

  if ($vars['view_mode'] == 'full' && node_is_page($vars['node'])) {
    $vars['classes_array'][] = 'node-full';
  }

  $vars['date'] = t('!datetime', array('!datetime' => date('j F Y', $vars['created'])));

  // Proporcionamos template suggestions para los nodos por view mode.
  $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->type . '__' . $vars['view_mode'];
  $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->nid . '__' . $vars['view_mode'];

}

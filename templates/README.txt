TEMPLATES:
==========
El directorio templates contiene (diferenciadas y divididas por carpetas) las plantillas del tema. Todo el contenido del portal parte de ellas.

De esta manera cada bloque, nodo, página, región, panel (tanto los que vienen por defecto como aquellos que creemos) partiran de sus correspondientes plantillas: 'block.tpl.php' 'node.tpl.php' 'page.tpl.php', 'region.tpl.php'...

Si necesitamos crear una plantilla específica para un contenido tan solo tenemos que añadir "--". Por ejemplo, queremos crear un tipo de contenido "article" en nuestro portal, por defecto ese contenido parte de "node.tpl.php", si queremos crear una plantilla solo para los nodos de tipo article crearemos "node--article.tpl.php".

Drupal es capaz de reconocer automaticamente el cambio, de esta manera podremos modificar esta nueva plantilla sin alterar el resto de nodos existentes.
CSS:
====

¡¡¡ DON'T TOUCH ME !!!!

Esta carpeta se encarga de recoger los estilos compilados del portal.
Cualquier cambio de estilos o creación de nuevos ficheros se hará desde la carpeta 'Sass > partials'. 
Leer README en 'Sass'.

main.css & chosen.css:
====================== 
Son los ficheros compilados 'main.sass' y 'chosen.sass' transformados a extensión .css y que serán los archivos finales incluidos en 'da_vinci.info'

	
Cronología de compilación:
==========================
|
| Todos los archivos 'sass' se compilan en un único archivo.
  (modals.sass, buttons.sass, form.sass...)   >   Main.sass
|
|	Este archivo será transformado a extension '.css'
	Main.Sass  >  Main.css
|
| Incluiremos en 'da_vinci.info' dicho archivo.
  Main.css  >>>  da_vinci.info





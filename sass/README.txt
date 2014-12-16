	Sass :
========
	|
	| Partials:
	===========
	 Contiene las hojas de estilos con extension 'sass', cualquier cambio en los estilos del portal, así como la creación de nuevas hojas de estilos se hará en este directorio.

	 		|
	 		| Base:
	 		=======
	 		Configuración base del tema: estilos comunes y configuracíon de susy

	 		|
	 		| Components:
	 		=============
	 		Contiene los estilos para los diferentes elementos del tema: botones, mensajes de error, modales, breadcrumbs...
	 		  |
	 			| Navigation:
	 			=============
	 			Estilos para el menú principal

	 		|
	 		| Content:
	 		==========
	 		Aquí se definen las hojas de estilos específicas para nuestro contenido: nodos, vistas, estilos para los diferentes navegadores, bloques, páginas...

	 		|
	 		|	Lib:
	 		======
	 		Estilos del chosen

	 		|
	 		| Regions:
	 		==========
	 		Contiene los estilos para cada región, si creamos una nueva región se definirán aquí sus estilos, si por el contrario vamos a darle estilos a un contenido dentro de una región usaremos el directorio 'Content'

	 		|
	 		| Utilities: 
	 		============
	 		Este directorio contiene las variables, extends, mixin... de los que nos ayudaremos a la hora de estilizar.

	====================================================================================================

	|
	| Main.sass:
	============
	¡¡¡ DON'T TOUCH ME !!!	 		
	Todos los estilos anteriores se compilan en un único archivo llamado main.sass, este archivo será transformado posteriormente al archivo final main.css, no cambiaremos ningun estilo en este archivo. En este fichero haremos referencia a aquellas dependencias necesarias así como a cada archivo creado en 'partials'.

	|
	| Chosen.sass:
	==============
	¡¡¡ DON'T TOUCH ME !!!
	Compila los estilos del chosen.
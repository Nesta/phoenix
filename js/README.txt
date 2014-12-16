js:
===
Contiene tanto las librerias como los plugins js necesarios.

	Plugins:
	========

		css_browser.js:
		===============
		Este plugin identifica el navegador que está siendo usado para visualizar el portal y aporta las clases necesarias en el body para poder dar estilos específicos. Si necesitamos sacar alguna clase específica para alguna versión en concreto de algun navegador, este es el archivo.

		html5.js:
		=========
		Fuerza a aquellos navegadores que aun no soportan etiquetas html5 a que sean capaces de identificarlas y leerlas.

  chosen.js:
  ==========
	Librería dedicada al chosen de jquery

	custon.js:
	==========
	Cualquier funcion js nueva que necesitemos incluir para modificar cualquier elemento mediante js se insertará en este fichero.

	guide.js
	========

	modales.js
	===========
	Funciones necesarias para lanzar los modales. Si necesitamos sacar un nuevo modal, este es el archivo. Se ha convertido el contenido del modulo "styleguide" en un modal, ver el interior del archivo para leer más sobre "styleguide".
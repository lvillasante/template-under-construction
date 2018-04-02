# Template Under construction 2018

Template base para páginas en construcción 

Incorpora las siguientes características:

## Librerías y fuente tipográfica

- [Countdown](http://hilios.github.io/jQuery.countdown/) (Contador regresivo)
- [Lodash](https://lodash.com/) (Barra de progreso)
- [Quicksand](https://fonts.google.com/specimen/Quicksand) (Tipografía de Google)

## Caracteristicas

- Responsive.
- Libre de Boostrap, no tiene ninguna dependencia. 
- Archivos SASS con configuración de colores primario, secundario y color de fuente principal.
- Enlace a redes sociales.
- Uso de imagenes en "Sprite" para iconos de redes sociales.

## Cambio de color

Descargar el repositorio o una copia en zip de [Template Under Cosntruction](https://github.com/lvillasante/template-under-construction/archive/master.zip). En el archivo `index.html` se incluye la versión minificada de los estilos, se encuentra con el nombre `style.min,css` .

`<link rel="stylesheet" href="css/style.min.css">`

Si abrimos el archivo fuente `style.scss` podremos encontrar en las primeras lineas las variables de configuración y cambio de color.

```
/* Colors*/
$primary-color: #003b64;
$secondary-color: #80C340;
$color-text: #ffffff;
```
Las cuales serviran para cambiar y configurar el cambio de color primario y secundario.

## Personalización

Carpeta SASS con todos los archivos fuente antes de ser pre-procesados en CSS 
Archivos `.scss` ubicados en la carpeta `sass`.

## Creador

**Luis Villasante**

* <https://twitter.com/villasantel>
* <https://github.com/lvillasante>


## License

[MIT license]
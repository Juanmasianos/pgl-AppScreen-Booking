# AppScreen Booking
Aplicacion propuesta por el profesor para copiar el aspecto sin funcionalidades.
## Funcionamiento:

### App.tsx:
En el App.tsx se cargan los tres componentes principales para la aplicacion, el header, el body y el footer.

## Header
El header se compone del fondo(background), el cual tiene como componentes hijos el titulo(donde pone booking) y los botones que aparecen en este(stays, flights, etc.)

## Body
El body se compone de varios componentes, el primero es la tabla que tiene los tres inputs(que no funcionan, solo son text) y el boton de "search".

Debajo de la tabla esta el componente "unlockedRewards" el cual contiene el pequeño recuadro con la imagen del candado, en una aplicacion funcional llevaría a otra pantalla pero aqui es inutil e unicamente tiene el proposito de parecerse al original.

Por ultimo, en el body esta la CarRecommendation que empieza con el titulo de "Get to the property". Debajo se carga otro componente mas el cual es la card del coche(CarCard) que contiene la recomendacion con el porcentaje y la propia imagen y textos de debajo.

## Footer
Para el footer solo hay un componente debajo el cual es FooterButton que se carga como una lista que coge los datos de FooterItems dentro de la carpeta "./data", que a su vez esta lista esta ligada al tipo de dato FooterItem que esta definido dentro de la carpeta "./types".

FooterButton carga los botones de abajo con sus iconos y en el caso del "my account" carga la imagen.

## Css
Este proyecto no utiliza hojas de estilos externas a los archivos excepto por los colores que se repiten en la aplicacion(sin ser blanco o negro) que estan guardados en la carpeta "./styles". 

Las hojas de estilo estan definidas dentro de cada archivo .tsx que necesite utilizar css(casi todos los archivos)



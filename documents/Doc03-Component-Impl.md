# Ejercicio 3

El componente propio a explicar va a ser: [FooterButton.tsx](../components/footer/FooterButton.tsx)

Este componente se encargar ser la plantilla para los botones del footer(La barra de abajo). 

Primero empieza recibiendo props los cuales se desestructuran. Estos contienen la informacion del icono(o no), de la imagen(o no) y por ultimo del titulo. 

Con los Props desestructurados, comienza el return con un view que coloca sus componentes hijos verticalmente con el flexDirection. Dentro del View, hay una ternaria la cual pregunta por el estado de "icon" que en el caso de que no esté definido se colocará una imagen, en caso contrario, se colocará el icono. Por ultimo se colocará el titulo del boton por debajo

```typescript

  const { icon, picture, title } = item


  return (
    <View style={styles.footerButton}>
      {
        icon == undefined 
        ? <Image style={styles.profilePicture} source={picture}/>
        : <Ionicons style={styles.icon} name={icon} size={24} color="black" /> 
      }
      <Text>{title}</Text>
    </View>
  )

```

## Implementar botones necesarios

Para ello, se hicieron dos archivos. Uno que contiene los tipos de datos necesarios para el componente:

[FooterItem](../types/FooterItem.tsx)

y otro archivo que contiene los datos a mostrar en pantalla en un array de objetos:

[FooterItems](../data/FooterItems.tsx)

Con estos dos archivos listos, en el archivo en el que se quiera renderizar se hace llamando al array de objetos con .map para dentro llamar al componente pasandole los props por cada objeto que hubiera en los datos.

```typescript
 return (
    <View style={styles.footer}>
      {
        footerItems.map((item: FooterItem) => 
          <FooterButton
                  key={item.key} 
                  icon={item.icon}
                  picture={item.picture}
                  title={item.title}
          />
        )
      }
    </View>
```
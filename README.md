# Prototipo Lexicon

## Instalacion

```bash
npm install -f
```

## Ejecutar

```bash
npm dev
```

Se ejecuta en [http://localhost:3000](http://localhost:3000)


## Enlaces

- [Lexicon (lineamientos Graficos)](https://liferay.design/lexicon)
- [Clay (Implementacion en React)](https://clayui.com)
- [StoryBook](https://storybook.clayui.com)
- [Figma](https://www.figma.com/file/fvvqKW4bIPIUfWqrtLAjD4/lexicon-dsl)


## Ventajas

- Para la mayoria de los componentes presenta una implementacion basica html y css aparte de la implementacion en react.
- Cuenta con documentacion de lineamientos graficos
- La documentacion de personalizacion es detallada.
- Los lineamientos graficos descritos en figma son detallados permitiendo
- La funcionalidad de layout es simple con funcionalidades responsive
- El data grid es sensillo de usar permitiendo insercion y personalizacion en la celdas

## Problemas Encontrados
- la instalacion no cuenta con soporte directo para react 18 pero puede ser usado con el forzando la instalacion de las dependencias, a pesar de esto el proyecto se encuentra activo con actualizaciones recientes y se espera el soporte react 18. 
- La instalacion de los iconos requiere la publicacion de los recursos en assets y la asignacion de su ruta para algunos componentes
- El data grid presenta problemas con los iconos internos
- La informacion se encuentra dispersa entre el storybook y clay(sitio de la implementacion con react)
- La personalizacion de estilos requiere compilar la solucion de estilos
- No presenta control de texto enriquesido
- No he encontrado funciones verticales en el layout
- Aunque tiene personalizacion de idioma esta no es general, requiere ser configurada en cada componente
- Los controles tiene estilos para indicar error, advertencias y confirmaciones pero requiere realizar adaptacion para usarlos
- No cuenta con una interfaz oscura por defecto
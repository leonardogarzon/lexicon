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

- Para la mayoría de los componentes presenta una implementación básica en HTML y CSS aparte de la implementación en React.
- Cuenta con documentación de lineamientos gráficos.
- La documentación de personalización es detallada.
- Los lineamientos gráficos descritos en Figma son detallados.
- La funcionalidad del layout es simple, con funcionalidades responsive.
- El data grid es sencillo de usar, permitiendo inserción y personalización en las celdas.

## Problemas Encontrados

- La instalación no cuenta con soporte directo para React 18, pero puede ser usado forzando la instalación de las dependencias. A pesar de esto, el proyecto se encuentra activo con actualizaciones recientes y se espera el soporte para React 18.
- La instalación de los iconos requiere la publicación de los recursos en assets y la asignación de su ruta para algunos componentes.
- El data grid presenta problemas con los iconos internos.
- La información se encuentra dispersa entre el Storybook y Clay (sitio de la implementación con React).
- La personalización de estilos requiere compilar la solución de estilos.
- No presenta control de texto enriquecido.
- No he encontrado funciones verticales en el layout.
- Aunque tiene personalización de idioma, esta no es general; requiere ser configurada en cada componente.
- Los controles tienen estilos para indicar error, advertencias y confirmaciones, pero requiere realizar adaptación para usarlos.
- No cuenta con una interfaz oscura por defecto.
- Existe u conflicto de pocicion entre el modal y los date pickers quedando el calendario oculto

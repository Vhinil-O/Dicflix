# 🍿DicFlix - Primeros pasos-
---

## 🪬 Proposito del proyecto

DicFlix permite visualizar un catálogo de series y películas en tiempo real utilizando la API pública de TVMaze. El usuario puede buscar títulos, explorar tendencias y ver información detallada de cada serie.

El proposito de este proyecto es ser una app de streaming propia, usando herramientas como lo son:
- JavaScript
- HTML
- CSS
- Bootstrap
- Y la API de 'TVMaze'
El objetivo es aprender como trabajar con diferentes tipos de situaciones y como poner diferentes tecnicas para la resolucion de las mismas

---
## 🏗️ Estructura del proyecto

Si bien es una estructura intuitiva, es vital para el funcionamiento del proyecto que todos y cada uno de los documentos que se muestran a continuacion conserven el mismo orden de carpetas mostrado en el mismo sitio:

```
dicflix/
|-index.html
|-css/
|--app.css
|-js/
|--app.js
```

- `index.html`: es el encargado del esqueleto visual de la pagina, con clases como: el navbar de búsqueda, hero, contenedor de filas y modal de detalle. Realiza la carga de Bootstrap y enlaza los archivos de estilos y scripts para el uso de CSS y JS, respectivamente.
- `app.css`: si bien la mayoria de las definiciones se toman directamente de Bootstrap en esta archivo de limitan nuevos estilos de etiquetas que son necesarios para una mejor visualizacion del codigo
- `app.js`: inicializa la app, hace fetch a TVMaze (/shows?page=1), y prepara renderRow(...) para construir secciones tipo “Tendencias”, mostrando las series y películas.

---

## 📝 Mas documentacion

- 🔠[Codigo -> Vesion 1](version01.md)
- 🔠[Codigo -> Vesion 2](version02.md)

---

## 🪪 Créditos
Proyecto hecho por Diego Sz.
Datos de series obtenidos de TVMaze (uso educativo).
Diseño base con Bootstrap 5.

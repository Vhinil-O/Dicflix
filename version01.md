# VERSION 01

Como el nombre lo indica esta seccion contiene solo el codigo creado para la version 1 del proyecto, es posible que contenga errores lo cuales se buscan reparar en un futuro cercano

`app.css`
``` css
body {
    background-color: #0b0d10;
}

.navbar-brand b {
    color: #e50914;
}

.hero {
    min-height: 55vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: end;
    padding: 3rem 1 rem;
    position: relative;
}

.hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.7));
}

.hero > .container {
    position: relative;
    z-index: 2;
}

.row-title {
    font-weight: 700;
    margin: 1rem 0 .5rem;
}

.rail {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: .5rem;
    scroll-snap-type: x mandatory;
}

.card-poster {
    min-width: 160px;
    scroll-snap-align: start;
    background: #111;
    border: none;
}

.card-poster img {
    aspect-ratio: 2/3;
    object-fit: cover;
    border-radius: 5rem;
}

.badge-genre {
    background-color: #e50914;
}

.footer {
    border-top: 1px solid #222;
    color: #9aa4ad
}

::-webkit-scrollbar {
    height: 8px;
}

::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 4px;
}
```

`app.js`
``` js
console.log('@@@ version 1')

//api a tvmaze
const API= "https://api.tvmaze.com"

//Elementos del dom
const rowsContainer = document.getElementById('rowsContainer')
const hero = document.getElementById('hero')
const heroTitle = document.getElementById('heroTitle')
const heroDesc = document.getElementById('heroDesc')
const heroPlay = document.getElementById('heroPlay')

const init = async () => {
    const trending = await fetchJSON (`${API}/shows?page=1`)
    renderRow("Tendencias", trending.slice(0,20))
    console.log('@@@trending => ', trending)
}

const renderRow = (title, shows) => {
    const section = document.createElement('section')
    section.classList = 'mb-3'
    section.innerHTML = 
    `
        <h3 class="rowTitle"> ${title} </h3>
        <div class="rail" data-rail></div>
    `

    //Funcion para crear los posters mini y pegarloos

    rowsContainer.appendChild(section)
}

const fetchJSON = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Error al cargar los datos: ', url)
    }
    return await response.json()
}

init()
```

`index.html`
``` html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>☢️ DicFlix ☢️</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/app.css">
  </head>
  <body>
   
    <nav class="navbar navbar-expand-lg border-bottom bg-black">
        <div class="container">
            <a href="#" class="navbar-brand">
                <b>Dic</b>flix
            </a>
            <form id="searchForm" class="d-flex ms-auto">

            <input id="searchInput" type="text" class="form-control me-2" placeholder="Busca tu movie">

            <button type="submit" class="btn btn-danger">Buscar</button>
            </form>
        </div>
    </nav>

    <header class="hero bg-black">
        <div class="container">
            <h1 id="heroTitle" class="display-5 fw-bold">
                <p class="lead col-lg-6"></p>
                <button id="heroPlay" class="btn btn-danger btn-lg">Ver Ahora</button>
            </h1>
        </div>
    </header>

    <main id="rowsContainer" class="container my-4">

    </main>

    <footer class="footer-py-4 mt-5">
        <div class="container small">
            Hecho con ♥️ utilizando TVMaze
        </div>
    </footer>

    <!-- Modal para el detalle de la pelicula-->
     <div class="modal fade" id="detailModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content bg-black text-light">
                <div class="modal-header border-secondary">
                    <h5 id="detailTitle" class="modal-title">Detail</h5>
                    <button class="btn-close btn-close-white" data-bs-dismiss="modal"></button>

                </div>
                <div class="modal-body" id="detailBody">
                    Cargando...
                </div>
            </div>
        </div>
     </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
    <script src="/js/app.js"></script>
  </body>
</html>
```
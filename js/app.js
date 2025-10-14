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
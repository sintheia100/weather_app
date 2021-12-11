const API_KEY = '69fca10b2daa402db07122418211112'
const IPFY_API = 'at_ERhCbAOWwsLkaFWkFsc6X3EVF9Q4g'
const IPFY_URL = `http://geo.ipify.org/api/v2/country,city?apiKey=${IPFY_API}`
const waether = document.getElementById('weather')
const waetherCard = document.getElementById('weather-card')
waetherCard.style.display = 'none'
const weatherCondition = document.getElementById('weather-condition')
const locationText = document.getElementById('location')
const humidity = document.getElementById('humidity')
const time = document.getElementById('time')
const pressure = document.getElementById('pressure')

const icon = document.getElementById('condition-icon')

const search = document.querySelector('#search-btn')

let searchInput = document.querySelector('#search')
let text = searchInput.value
searchInput.addEventListener('input', (e)=> {
    text = e.target.value
})
search.addEventListener('click', (e)=> {
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${text}`

    
    fetch(API_URL, {
        method:"GET",
        mode:'cors',
        headers:{
            'Access-Control-Origin-Policy': '*'
        }
    }).then(res=>res.json()).then(data => {
        console.log(data)
        waether.textContent = `${data.current.temp_c}°C`
        weatherCondition.textContent = data.current.condition.text
        icon.setAttribute('src', data.current.condition.icon)
        time.textContent = 'Last Updated: ' + data.current.last_updated.split(' ')[1]
        locationText.textContent = data.location.name + ', ' + data.location.country
        humidity.textContent = data.current.humidity + '%'
        pressure.textContent = data.current.pressure_mb + 'MB'
        waetherCard.style.display = 'flex'
        searchInput.value = ''
        searchInput.innerHTML = ''
    })

})


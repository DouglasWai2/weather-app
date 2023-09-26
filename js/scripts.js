const key = '327bef9022cf92edbe3decaef52d3fcf'
let city = "São Paulo"

searchCity(city)

function updatedata(data){
    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + " °C"
    document.querySelector(".status").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city){

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    updatedata(data)
}

function buttonclick(){

    const city = document.querySelector(".input-city").value
    searchCity(city)

}


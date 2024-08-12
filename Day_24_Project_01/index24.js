const api_key ="40587f6c807cf5dd96562c54a7ee0fb4";
const api_url="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchCity = document.querySelector(".search input");
const searchBtn  = document.querySelector("button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(api_url + city + `&appid=${api_key}`);
    var data = await response.json();
    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display='none';
    }else{
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
        console.log(data);

        document.querySelector (".city").innerHTML = data.name;
        document.querySelector(".weather-name").innerHTML = data.weather[0].main;

        if(data.weather[0].main =="Rain"){
            weatherIcon.src = 'heavy-rain.png';
        }
        else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "Drizzle.png"
        }
        else if(data.weather[0].main == "Clouds"){
            weatherIcon.src= "cloudy.png";
        }else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png";
        }else if(data.weather[0].main == 'Haze'){
            weatherIcon.src = "mist.png";
        }
    }
    
}
searchBtn.addEventListener('click',()=>{
    checkWeather(searchCity.value);
    
   
})


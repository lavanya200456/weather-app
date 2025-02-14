const apiKey ="c8fea97ddd1faa6e89c3270757de09dd";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");       
const weatherIcon = document.querySelector(".weather-icon");

async function checkWheather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404 ){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";

    }else{
        

    var data = await response.json();

  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"ºc";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";

if(data.weather[0].main =="Clouds"){
    weatherIcon.src="clouds.webp";
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src="clear.webp";
}

else if(data.weather[0].main == "Rain"){
    weatherIcon.src="rain.jpg";
}


else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src="drizzle.png";
}


else if(data.weather[0].main == "Mist"){
    weatherIcon.src="mist.png";
}

document.querySelector(".Weather").style.display = "block";
document.querySelector(".error").style.display = "none";



    }
   



}


searchBtn.addEventListener("click",()=>{
    checkWheather(searchBox.value);
})


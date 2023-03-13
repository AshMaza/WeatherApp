const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fdda880e4cmshe7c79484e06553ap1103cbjsnf6c58d1fe817',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city) => {
    cityName.innerHTML=city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
        
        console.log(response)

        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        temp.innerHTML = response.temp
        humidity.innerHTML = response.humidity
        sunset.innerHTML = response.sunset
        min_temp.innerHTML = response.min_temp
        // cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        sunrise.innerHTML = response.sunrise
        max_temp.innerHTML = response.max_temp
    

    })
	.catch(err => console.error(err));
}

submit.addEventListener("click" , (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Lucknow");


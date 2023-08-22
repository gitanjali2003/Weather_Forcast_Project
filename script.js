const options = {
	method: "GET",
	headers: {
	  "X-RapidAPI-Key": "96262ee0ebmshf3b764f6e8b6b30p155df9jsn3db75cedb057",
	  "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	},
};

const getWeather = (city)=>{
	cityName.innerHTML  = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
	.then(reponse => reponse.json())
	.then((response )=> {

		console.log(response)
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		Temp.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed

	})

	.catch(err => console.error(err));

}

submit.addEventListener("click",(e) =>{
	e.preventDefault();
	getWeather(city.value);
})

getWeather("Delhi");
const fetchData = async (url, options) => {
	const response = await fetch(url, options); //Promise
	const data = await response.json();
	return data;
};
  
const chennaiData = async () => {
	const data = await fetchData(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai",
		options
	);
	const hum1 = document.getElementById("hum1");
	hum1.innerHTML = data.humidity;
	const Temp = document.getElementById("temp1");
	Temp.innerHTML = data.temp;
	const max1 = document.getElementById("max1");
	max1.innerHTML = data.max_temp;
	const min1 = document.getElementById("min1");
	min1.innerHTML = data.min_temp;
	const wd1 = document.getElementById("wd1");
	wd1.innerHTML = data.wind_degrees;
	const ws1 = document.getElementById("ws1");
	ws1.innerHTML = data.wind_speed;
	// console.log(data);
};
  
const ranchiData = async () => {
	const data = await fetchData(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ranchi",
		options
	);
	const hum2 = document.getElementById("hum2");
	hum2.innerHTML = data.humidity;
	const temp2 = document.getElementById("temp2");
	temp2.innerHTML = data.temp;
	const max2 = document.getElementById("max2");
	max2.innerHTML = data.max_temp;
	const min2 = document.getElementById("min2");
	min2.innerHTML = data.min_temp;
	const wd2 = document.getElementById("wd2");
	wd2.innerHTML = data.wind_degrees;
	const ws2 = document.getElementById("ws2");
	ws2.innerHTML = data.wind_speed;
};
  
const puneData = async () => {
	const data = await fetchData(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune",
		options
	);
	const hum3 = document.getElementById("hum3");
	hum3.innerHTML = data.humidity;
	const temp3 = document.getElementById("temp3");
	temp3.innerHTML = data.temp;
	const max3 = document.getElementById("max3");
	max3.innerHTML = data.max_temp;
	const min3 = document.getElementById("min3");
	min3.innerHTML = data.min_temp;
	const wd3 = document.getElementById("wd3");
	wd3.innerHTML = data.wind_degrees;
	const ws3 = document.getElementById("ws3");
	ws3.innerHTML = data.wind_speed;
};

const bangloreData = async () => {
	const data = await fetchData(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
		options
	);
	const hum4 = document.getElementById("hum4");
	hum4.innerHTML = data.humidity;
	const temp4 = document.getElementById("temp4");
	temp4.innerHTML = data.temp;
	const max4 = document.getElementById("max4");
	max4.innerHTML = data.max_temp;
	const min4 = document.getElementById("min4");
	min4.innerHTML = data.min_temp;
	const wd4 = document.getElementById("wd4");
	wd4.innerHTML = data.wind_degrees;
	const ws4 = document.getElementById("ws4");
	ws4.innerHTML = data.wind_speed;
}; 
  
chennaiData();
ranchiData();
puneData();
bangloreData();

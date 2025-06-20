const myTemperature = document.querySelector('#gradesinF');
const myMood = document.querySelector('#moodofweather');
const myImgwea = document.querySelector('#myimgwea');
const myHigh = document.querySelector('#gradesinCH');
const myLow = document.querySelector('#gradesinCL');
const myHimidity = document.querySelector('#humiditywea');
const mySunrise = document.querySelector('#sunmornig');
const mySunset = document.querySelector('#suneven');

const myTodaywea = document.querySelector('#gradesTo');
const myWednesdaywea = document.querySelector('#gradesWe');
const myThursdaywea = document.querySelector('#gradesTh');

const myKey = "72ff68f674eff36ec01b3fd843e02251";
const myLat = "-8.11198940289915";
const myLong = "-79.02859361872879";

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
const myURL1 = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function fetchCurrentWeather() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        // console.error(error);
    }
}

function displayCurrentWeather(data) {
    myTemperature.innerHTML = `${data.main.temp}&deg;F`;
    myMood.innerHTML = data.weather[0].description;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myimgwea.setAttribute('src', iconsrc);
    myimgwea.setAttribute('alt', data.weather[0].description);

    myHigh.innerHTML = `${data.main.temp_max}&deg;F`;
    myLow.innerHTML = `${data.main.temp_min}&deg;F`;
    myHimidity.innerHTML = `${data.main.humidity}%`;
    mySunrise.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    mySunset.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();
}

async function fetchForecast() {
    try {
        const response = await fetch(myURL1);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        // console.error(error);
    }
}

function displayForecast(data) {
    myTodaywea.innerHTML = `${data.list[0].main.temp}&deg;F`;
    myWednesdaywea.innerHTML = `${data.list[8].main.temp}&deg;F`;
    myThursdaywea.innerHTML = `${data.list[16].main.temp}&deg;F`;
}

fetchCurrentWeather();
fetchForecast();

const { default: axios } = require('axios');
const fs = require('fs');
const path = require('path');

(async () => {
  const tempURL = {
    v1: 'https://raw.githubusercontent.com/Hackl0us/SS-Rule-Snippet/master/Scripts/Surge/weather_aqi_us/iOS14_Weather_AQI_US.js',
    v2: 'https://raw.githubusercontent.com/Hackl0us/SS-Rule-Snippet/master/Scripts/Surge/weather_aqi_us/iOS15_Weather_AQI_US.js'
  }
  for (const key in tempURL) {
    if (Object.hasOwnProperty.call(tempURL, key)) {
      const url = tempURL[key];
      const { data } = await axios.get(url)
      const temp = data.replace(new RegExp(`(.*)const(\\s)?aqicnToken(\\s)?=(\\s)''`), `const aqicnToken = '<%= aqicnToken %>'`)
      fs.writeFileSync(path.resolve('./views', `temp.${key}.ejs`), temp)
    }
  }
})()
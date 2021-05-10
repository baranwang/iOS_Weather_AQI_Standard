const { default: axios } = require('axios');
const fs = require('fs');
const path = require('path');

(async () => {
  const { data } = await axios.get('https://raw.githubusercontent.com/Hackl0us/SS-Rule-Snippet/master/Scripts/Surge/iOS_Weather_AQI_Standard.js')
  const temp = data.replace(new RegExp(`(.*)const(\\s)?aqicnToken(\\s)?=(\\s)''`), `const aqicnToken = '<%= aqicnToken %>'`)
  fs.writeFileSync(path.resolve('./views', 'temp.ejs'), temp)
})()
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.16.0.191:3000'
});

export default api;
// var data = JSON.stringify({"login":"hortencia","senha":"hortencia753"});



// var config = {
//   method: 'post',
//   url: 'http://localhost:3000/',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });



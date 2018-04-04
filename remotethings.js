
var axios = require('axios')

// var instance = axios.create({
//   baseURL: 'https://cp.remotethings.co.uk/api',
//   timeout: 5000,
//   headers: {'Authorization': 'kKD6pq64fJPaekJgSGOqNKCIPBjKI9i1fCbEVdIXhGLUHtuvAZprkqU3rmFlG3HB'}
// })
// instance.get('/devices/463/points').then((resp) => {
//   console.log('resp.data: ', resp)
     // console.log('resp.data: ', resp.data[10].location)
// })


var config = {
  url: 'https://cp.remotethings.co.uk/api/devices/463/points',
  headers: {'Authorization': 'kKD6pq64fJPaekJgSGOqNKCIPBjKI9i1fCbEVdIXhGLUHtuvAZprkqU3rmFlG3HB'},
  params: {
    filter: "{\"where\":{\"id\":\"1044472\"}}"
  }
}

axios.request(config).then(resp => {
  console.log('resp.data: ', resp.data)
})
  .catch(error => {
    console.log(error);
  })

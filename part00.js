/*let url = 'https://jsonplaceholder.typicode.com/users/'
 https://randomuser.me/api/
'https://api.chucknorris.io/jokes/random'
 */
let url = 'http://localhost:8080/usuario'
fetch(url)
    .then(Response=> Response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
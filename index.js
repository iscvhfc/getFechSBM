//let url = 'https://randomuser.me/api/'
//http://localhost:8080/usuario
//let url = 'https://jsonplaceholder.typicode.com/users/';
let url = 'http://localhost:8080/usuario'
fetch(url)
    .then(Response=> Response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

    const mostrarData = (data) => {
        console.log(data)
        let body = ""
        for (var i = 0; i < data.length; i++) {      
           body+=`<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].nombre}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].prioridad}</td>
                </tr>`
        }
        document.getElementById('data').innerHTML = body
        //console.log(body)
    }
let API_URL = "https://jsonplaceholder.typicode.com/users"
let API_LARAVEL = "http://localhost:8000/api/registro"

// Listar
fetch(API_URL)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))


const mostrarData = (data) => {
    let list_apiHTML = ""
    for (let i = 0; i < data.length; i++) {
        list_apiHTML += `<tr> 
        <td> ${data[i].id} </td>
        <td> ${data[i].name} </td>
        <td> ${data[i].username} </td>
        <td> ${data[i].email} </td>
        <td> ${data[i].address.city} </td>
        <td> ${data[i].phone} </td>
        <td> ${data[i].company.name} </td>
        <td><button ${data[i].id} class='btnguardar btn btn-primary'>Guardar</button></td><tr>`;
    }
    document.getElementById('data').innerHTML = list_apiHTML
}


const on = (element, event, selector, handler) => {
    //console.log(element)
    //console.log(event)
    // console.Log(selector)
    // console.Log(handler)
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}

let idform = 0
const obj = {}
on(document, 'click', '.btnguardar', e => {
    const fila = e.target.parentNode.parentNode
    obj.idform = fila.children[0].innerHTML
    obj.name = fila.children[1].innerHTML
    obj.username = fila.children[2].innerHTML
    obj.email = fila.children[3].innerHTML
    obj.addresscity = fila.children[4].innerHTML
    obj.phone = fila.children[5].innerHTML
    obj.companyname = fila.children[6].innerHTML
    // console.log(`id: ${idform} - name: ${name} - username: ${username} - email: ${email} - phone: ${phone} - addresscity: ${addresscity} - companyname: ${companyname}`)
    const URL_API = API_LARAVEL
    console.log(obj)
    // breakpoint
        const response = fetch(URL_API, {
          method: 'POST', 
          body: JSON.stringify(obj),
          mode: 'cors', 
        //   cache: 'no-cache', 
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
            
          },
          redirect: 'follow', 
          referrerPolicy: 'no-referrer', 
        });
        console.log(response)
        // return response.json(); 
      
})
const API_URL = 'http://localhost:8000/api/registroo';
const API_URLl = 'http://localhost:8000/api/registro';
let API_LARAVEL = '';

// Listar
fetch(API_URL)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))


const mostrarData = (data) => {
    let list_apiHTML = ""
    for (let i = 0; i < data.length; i++) {
        // <td id="id_registro"> ${data[i].id} </td>
        list_apiHTML += `<tr> 
        <td> ${data[i].name} </td>
        <td> ${data[i].username} </td>
        <td> ${data[i].email} </td>
        <td> ${data[i].city} </td>
        <td> ${data[i].phone} </td>
        <td> ${data[i].name_company} </td>
        <td id="fecha_nacimiento"> ${data[i].birth_date} </td>
        <td id="foto_registro"> ${data[i].photo} </td>
        <td><button onclick="ejecutar_modal(${data[i].id})" class='btnEditar btn btn-primary'>Insertar/Editar</button></td><tr>`;
    }
    document.getElementById('data').innerHTML = list_apiHTML
}

function ejecutar_modal (e){

    $('#exampleModal').modal('show')
    document.getElementById('id_registro').value = e;
}

function editar (e){
    let formulario = new FormData(document.getElementById('form_editar'));
    formulario.append('id', e);

    const response = fetch(API_URLl, {
        method: 'PUT', 
        body: formulario,
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
}


const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}


// let idform = 0
// on(document, 'click', '.btnEditar', e => {
//     const fila = e.target.parentNode.parentNode
//     idform = fila.children[0].innerHTML
//     const birth_date = fila.children[7].innerHTML
//     const photo = fila.children[8].innerHTML
//     console.log(`id: ${idform} - birth_date: ${birth_date} - photo: ${photo}`)
  
    
// })

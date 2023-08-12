//cree una variable para comunicarnos con el local storage, cree la lista y los botones para editar y/o eliminar al usuario.
// no coloque la informacion en el cuadro para que no fuese tan grande el cuadro pero si aparece al seleccionar los datos del usuario.
function validateForm(){
    let email = document.getElementById('inputEmail').value;
    let name = document.getElementById('inputName').value;
    let phone = document.getElementById('inputPhone').value;
    let info = document.getElementById('inputInfo').value;

    if (email == "") {
        alert('El campo correo esta vacio')
        return false;
    }else if(!email.includes('@')){
        alert('El correo no es valido');
        return false;
    }

    if (name == "") {
        alert('El campo nombre esta vacio')
        return false;
    }

    if (phone == "") {
        alert('El campo telefono esta vacio')
        return false;
    }

    if (info == "") {
        alert('El campo informacion esta vacio')
        return false;
    }

    return true;
}

//cree una variable para comunicarnos con el local storage, cree la lista y los botones para editar y/o eliminar al usuario.
// no coloque la informacion en el cuadro para que no fuese tan grande el cuadro pero si aparece al seleccionar los datos del usuario.
function ReadData(){
    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    let html = "";

    listPeople.forEach(function(element, index) {
        html += "<tr>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.phone + "</td>";
        html += '<td><button onclick="deleteData('+ index +')" class="btn btn-danger">Eliminar Dato</button> <button onclick="editData('+ index +')" class="btn btn-warning">Editar Dato</button>';
        html += "</tr>";
    });

    document.querySelector('#tableData').innerHTML = html;
}
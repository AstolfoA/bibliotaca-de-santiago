//funcion para validar los datos
//variables y funcion que busca a las variables.
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

//para cargar lo que tenemos en la tabla.

document.onload = ReadData();

//validamos la informacion y creamos la funcion de crear y ver datos.

function AddData(){
    if(validateForm() == true){
        let email = document.getElementById('inputEmail').value;
        let name = document.getElementById('inputName').value;
        let phone = document.getElementById('inputPhone').value;
        let info = document.getElementById('inputInfo').value;
        
        var listPeople;

        if(localStorage.getItem('listPeople') == null){
            listPeople = [];
        }else{
            listPeople = JSON.parse(localStorage.getItem('listPeople'));
        }

        listPeople.push({
            email: email,
            name: name,
            phone: phone,
            info: info
        });

        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        ReadData();

        document.getElementById('inputEmail').value= "";
        document.getElementById('inputName').value= "";
        document.getElementById('inputPhone').value= "";
        document.getElementById('inputInfo').value= "";
    }
} 

//funcio de eliminar los datos.

function deleteData(index){
    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    listPeople.splice(index, 1);
    localStorage.setItem('listPeople', JSON.stringify(listPeople));

    ReadData();
}


//funcion de editar los datos.

function editData(index){
    document.getElementById('btnAdd').style.display = 'none';
    document.getElementById('btnUpdate').style.display = 'block';

    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    document.getElementById('inputEmail').value = listPeople[index].email;
    document.getElementById('inputName').value = listPeople[index].name;
    document.getElementById('inputPhone').value = listPeople[index].phone;
    document.getElementById('inputInfo').value = listPeople[index].info;

    document.querySelector('#btnUpdate').onclick = function () {
        if (validateForm() == true) {
            listPeople[index].email = document.getElementById('inputEmail').value;
            listPeople[index].name = document.getElementById('inputName').value;
            listPeople[index].phone = document.getElementById('inputPhone').value;
            listPeople[index].info = document.getElementById('inputInfo').value;

            localStorage.setItem('listPeople', JSON.stringify(listPeople));
            ReadData();

            document.getElementById('inputEmail').value = "";
            document.getElementById('inputName').value = "";
            document.getElementById('inputPhone').value = "";
            document.getElementById('inputInfo').value = "";
            

            document.getElementById('btnAdd').style.display = 'block';
            document.getElementById('btnUpdate').style.display = 'none';
        }  

    };

}
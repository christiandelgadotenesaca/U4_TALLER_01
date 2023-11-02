function guardar() {

    console.log('Funcion Guardar')
    let usuario_ = document.getElementById('usuario').value
    let password_ = document.getElementById('password').value
    let nombre_ = document.getElementById('nombre').value
    let apellido_ = document.getElementById('apellido').value
    let email_ = document.getElementById('email').value
    let rol = document.getElementById('rol').value
    let listRoles = [];
    listRoles.push({name: rol})
    

    let data = {  
        usuario: usuario_, 
        password: password_,
        nombre: nombre_, 
        apellido: apellido_, 
        email:email_,
        roles: listRoles
    }

    console.log(data)

    return new Promise((resolve, reject) => {
        const request_options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Indicar que se envían datos JSON
            },
            body: JSON.stringify(data) // Convertir los datos a JSON
        };

        fetch('/users', request_options)
            .then((data) => resolve(data.json()))
            .catch((error) => reject(`[error]: ${error}`));
    })
}



function guardar_usuario() {
    guardar()
        .then( (response) => {
            alert('Registro exitoso.')
        } )
        .catch( (error) => {
            alert('Error al ingresar.')
        } )
}
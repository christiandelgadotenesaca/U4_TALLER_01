function guardar() {

    console.log('Funcion Guardar')
    let username_ = document.getElementById('username').value
    let email_ = document.getElementById('email').value
    let password_ = document.getElementById('password').value
    let rol = document.getElementById('rol').value
    let listRoles = [];
    listRoles.push({name: rol})
    

    let data = {  
        username: username_, 
        email:email_,
        password: password_,
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
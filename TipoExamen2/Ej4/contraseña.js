const actualPass = 'abc123.';

function checkPass () {
    let pass = document.getElementById('pass').value;
    if (pass === actualPass) {
        window.alert('Bienvenido');
    } else {
        document.getElementById('resultado').innerHTML = "Contraseña incorrecta, vuelva a introducirla";
    }
}
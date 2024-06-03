const usuariosPermitidos = [
    { correo: "usuario1@example.com", contraseña: "contraseña1" },
    { correo: "usuario2@example.com", contraseña: "contraseña2" },
    { correo: "usuario3@example.com", contraseña: "contraseña3" }
];

function validarCredenciales(correo, contraseña) {
    return usuariosPermitidos.some(usuario => usuario.correo === correo && usuario.contraseña === contraseña);
}

function handleSubmit(event) {
    event.preventDefault();

    const correo = document.getElementById("email").value;
    const contraseña = document.getElementById("password").value;

    if (validarCredenciales(correo, contraseña)) {
        window.location.href = "../index.html";
    } else {
        document.getElementById("error-message").textContent = "Credenciales incorrectas. Por favor, intenta de nuevo.";
    }
}

document.getElementById("login-form").addEventListener("submit", handleSubmit);

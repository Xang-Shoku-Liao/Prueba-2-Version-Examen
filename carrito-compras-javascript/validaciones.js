$(document).ready(function(){
    $("#registroForm").submit(function(event){
        event.preventDefault();
        
        var nombre = $("#nombre").val();
        var apellidos = $("#Apellidos").val();
        var correo = $("#correo").val();
        var edad = $("#edad").val();
        var genero = $("#genero").val();
        var celular = $("#celular").val();

        if(nombre.length < 3 || nombre.length > 20 || apellidos.length < 3 || apellidos.length > 20){
            alert("El Nombre y los Apellidos deben tener entre 3 y 20 caracteres.");
            return;
        }

        var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!correoRegex.test(correo)){
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        if (isNaN(edad) || edad <= 0 || edad < 18) {
            alert("Por favor, ingrese una edad válida mayor o igual a 18.");
            return;
        }

        if(genero === ""){
            alert("Por favor, seleccione un Género.");
            return;
        }

        if(celular.length < 9 || celular.length > 12){
            alert("El Celular debe tener entre 9 y 12 caracteres.");
            return;
        }

        alert("¡Registro exitoso!");
    });
});

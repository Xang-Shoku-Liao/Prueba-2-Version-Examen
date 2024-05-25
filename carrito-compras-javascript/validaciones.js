$(document).ready(function(){
    $("#registroForm").submit(function(event){
        // Evitar que el formulario se envíe automáticamente
        event.preventDefault();
        
        // Realizar las validaciones
        var nombre = $("#nombre").val();
        var apellidos = $("#Apellidos").val();
        var correo = $("#correo").val();
        var edad = $("#edad").val();
        var genero = $("#genero").val();
        var celular = $("#celular").val();

        // Nombre, Apellidos: largo entre 3 y 20 caracteres
        if(nombre.length < 3 || nombre.length > 20 || apellidos.length < 3 || apellidos.length > 20){
            alert("El Nombre y los Apellidos deben tener entre 3 y 20 caracteres.");
            return;
        }

        // Correo: validar formato de correo electrónico
        var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!correoRegex.test(correo)){
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        // Edad: validar que sea un número, mayor que cero y mayor o igual a 18
        if (isNaN(edad) || edad <= 0 || edad < 18) {
        alert("Por favor, ingrese una edad válida mayor o igual a 18.");
        return;
        }


        // Género: seleccionado
        if(genero === ""){
            alert("Por favor, seleccione un Género.");
            return;
        }

        // Celular: largo entre 9 y 12 caracteres
        if(celular.length < 9 || celular.length > 12){
            alert("El Celular debe tener entre 9 y 12 caracteres.");
            return;
        }

        // Si todas las validaciones pasan, se puede enviar el formulario
        alert("¡Registro exitoso!");
        // Aquí podrías enviar el formulario utilizando AJAX o cualquier otro método
    });
});

Swal.fire('Bienvenido a EDUCAKIDS')
    .then(r => {
        Swal.fire({
            title: "Cual es tu nombre?",
            input: "text",
            showCancelButton: true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
        })
        .then(resultado => {
            if (resultado.value) {
                let nombre = resultado.value;
                console.log("Hola, " + nombre);
            }
        });
    })





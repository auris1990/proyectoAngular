
console.log("prueba de js en mi pagina web con Angular :) B)")

function alerta1() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'COMPONENTE  ANGULAR',
        footer: '<a href="">Why do I have this issue?</a>'
    })
}

function alerta(){

    Swal.fire({
        title: 'BIENVENIDO',
        
        text: 'Components  Angular',
        
        imageUrl: 'assets/img/indi.jpg',
        imageWidth: 300,
        imageHeight: 150,
        background: '#96989A  ',
        imageAlt: 'Custom image',
        backdrop: `
        rgba(0,0,123,0.4)
      `,
      showConfirmButton: false,
      timer: 1500
      
      })

}
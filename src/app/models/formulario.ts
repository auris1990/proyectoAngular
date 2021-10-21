
export class Formulario {

    _id?: number;
    tipoidentificacion:string;
    numeroidentificacion:number;
    nombre:string;
    apellido:string;
    telefono:string;
    direccion:string;
    email:string;
    genero:string;


    constructor(tipoidentificacion:string,
        numeroidentificacion:number,
        nombre:string,
        apellido:string,
        telefono:string,
        direccion:string,
        email:string,
        genero:string,) {
            this.tipoidentificacion=tipoidentificacion;
            this.numeroidentificacion=numeroidentificacion;
            this.nombre=nombre;
            this.apellido=apellido;
            this.telefono=telefono;
            this.direccion=direccion;
            this.email=email;
            this.genero=genero;

        
    }
}

export class Producto{
    _id?: number;
    nombre: string;
    ubicacion: string;
    precio: number;
    proveedor: string;

    constructor( nombre_uno: string, ubicacion:string, precio:number,proveedor:string){
     this.nombre= nombre_uno;
     this.ubicacion= ubicacion;
     this.precio= precio;
     this.proveedor= proveedor;

    }

}
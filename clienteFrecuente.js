import Cliente from "./cliente.js"
import Fecha from "./fecha.js"

export default class ClienteFrecuente extends Cliente{
    /**
     * 
     * @param {number} numeroCliente 
     * @param {Fecha} fechaRegistro 
     */
    constructor({numeroCliente, fechaRegistro, nombre, direccion, telefono}){
        super({nombre, direccion, telefono})
        this._numeroCliente = numeroCliente
        this._fechaRegistro = fechaRegistro
        this._nombre = nombre
        this._direccion = direccion
        this._telefono = telefono
    }
    getPerfil(){
        return`${this._numeroCliente}, ${this._fechaRegistro.getFecha()}, ${this._nombre}, ${this._direccion}, ${this._telefono}`
    }

}
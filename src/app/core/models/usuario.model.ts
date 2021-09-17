export interface Usuario {
    _id?: number;
    usuario: string;
    password: string;
    nombreCompleto: string;
    numeroCedula: string;
    tipoCuenta: "Administrador" | "Docente" | "Padre";
}
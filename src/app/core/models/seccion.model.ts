export interface Seccion {
    _id?: number,
    numero: string,
    asignatura: string,
    docente: string,
    alumnos: string[],
    notificaciones: Notificacion[]
}

export interface Notificacion {
    titulo: string,
    descripcion: string,
    fecha: Date
}
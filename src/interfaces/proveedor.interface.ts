export enum EstadoProveedor {
  Inicial = 'inicial',
  Comprado = 'comprado',
}

export interface Proveedor {
  _id: string
  nombre: string
  direccion: string
  telefono: string
  estado: EstadoProveedor
  archived: boolean
}

import { model, Schema, Document } from 'mongoose'
import { Proveedor, EstadoProveedor } from '@/interfaces/proveedor.interface'

const proveedorSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  direccion: { type: String },
  telefono: { type: String },
  estado: { type: String, default: EstadoProveedor.Inicial, enum: Object.values(EstadoProveedor) },
  archived: { type: Boolean, default: false },
})

const proveedorModel = model<Proveedor & Document>('Proveedor', proveedorSchema, 'proveedores')

export default proveedorModel

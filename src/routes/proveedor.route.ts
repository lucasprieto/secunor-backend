import { Router } from 'express'
import { Routes } from '@/interfaces/routes.interface'
import ProveedorController from '@/controllers/proveedor.controller'
import validationMiddleware from '@/middlewares/validation.middleware'
import { CreateProveedorDto } from '@/dtos/proveedor.dto'

class ProveedorRoute implements Routes {
  public path = '/proveedor'
  public router = Router()
  public ctrl = new ProveedorController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    const { path, ctrl } = this
    this.router.get(path, ctrl.getAll)
    this.router.get(`${path}/:id`, ctrl.getById)
    this.router.post(path, validationMiddleware(CreateProveedorDto, 'body'), ctrl.create)
    this.router.put(`${path}/:id`, validationMiddleware(CreateProveedorDto, 'body'), ctrl.update)
    this.router.delete(`${path}/:id`, ctrl.delete)
  }
}

export default ProveedorRoute

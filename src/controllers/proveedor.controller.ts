import { CreateProveedorDto } from '@/dtos/proveedor.dto'
import { Proveedor } from '@/interfaces/proveedor.interface'
import ProveedorService from '@/services/proveedor.service'
import { NextFunction, Request, Response } from 'express'

class ProveedorController {
  private service = new ProveedorService()

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: Proveedor[] = await this.service.findAll()
      res.status(200).json({ data })
    } catch (error) {
      next(error)
    }
  }

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id
      const data: Proveedor = await this.service.findById(id)

      res.status(200).json({ data })
    } catch (error) {
      next(error)
    }
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dto: CreateProveedorDto = req.body
      const data: Proveedor = await this.service.create(dto)
      res.status(201).json({ data, message: 'created' })
    } catch (error) {
      next(error)
    }
  }

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dto: CreateProveedorDto = req.body
      const id: string = req.params.id
      const data: Proveedor = await this.service.update(id, dto)
      res.status(200).json({ data, message: 'updated' })
    } catch (error) {
      next(error)
    }
  }

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id
      const data: Proveedor = await this.service.archive(id)
      res.status(200).json({ data, message: 'deleted' })
    } catch (error) {
      next(error)
    }
  }
}

export default ProveedorController

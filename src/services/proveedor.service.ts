import { CreateProveedorDto } from '@/dtos/proveedor.dto'
import { HttpException } from '@/exceptions/HttpException'
import { Proveedor } from '@/interfaces/proveedor.interface'
import ProveedorModel from '@/models/proveedor.model'
import { isEmpty } from '@/utils/util'

class UserService {
  public model = ProveedorModel

  public async findAll(): Promise<Proveedor[]> {
    const entities: Proveedor[] = await this.model.find({ archived: false })
    return entities
  }

  public async findById(id: string): Promise<Proveedor> {
    if (isEmpty(id)) throw new HttpException(400, 'ID is empty')

    const entity: Proveedor = await this.model.findOne({ _id: id })
    if (!entity) throw new HttpException(404, 'Proveedor not found')

    return entity
  }

  public async create(data: CreateProveedorDto): Promise<Proveedor> {
    if (isEmpty(data)) throw new HttpException(400, 'Payload is empty')

    const entity: Proveedor = await this.model.create(data)

    return entity
  }

  public async update(id: string, data: CreateProveedorDto): Promise<Proveedor> {
    if (isEmpty(id)) throw new HttpException(400, 'ID is empty')
    if (isEmpty(data)) throw new HttpException(400, 'Payload is empty')

    const entity: Proveedor = await this.model.findByIdAndUpdate(id, data, { new: true })
    if (!entity) throw new HttpException(404, 'Proveedor does not exist')

    return entity
  }

  public async delete(id: string): Promise<Proveedor> {
    if (isEmpty(id)) throw new HttpException(400, 'ID is empty')

    const entity: Proveedor = await this.model.findByIdAndDelete(id)
    if (!entity) throw new HttpException(404, 'Proveedor does not exist')

    return entity
  }

  public async archive(id: string): Promise<Proveedor> {
    if (isEmpty(id)) throw new HttpException(400, 'ID is empty')

    const entity: Proveedor = await this.model.findByIdAndUpdate(id, { archived: true }, { new: true })
    if (!entity) throw new HttpException(404, 'Proveedor does not exist')

    return entity
  }
}

export default UserService

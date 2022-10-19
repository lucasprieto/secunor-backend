import { IsString } from 'class-validator'

export class CreateProveedorDto {
  @IsString()
  public nombre: string

  @IsString()
  public direccion: string

  @IsString()
  public telefono: string

  @IsString()
  public estado: string
}

import { Usuario } from '../share/interfaces/usuario.interface';

export interface LoginResponse{
    usuario: Usuario;
    token: string;
}

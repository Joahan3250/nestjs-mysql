import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){ // Este constructor le debemos de mandar primero el decorador,a su vez ese decorador pide un parametro, el cual es la entidad de la tabla que creamos, posteriormente debemos de agregarle un nombre a esta entidad. Posterior a ello debemos de importar la biblioteca "Repository" y posterior a ello indicarle al nombre que es de tipo "Repository" y al tipo de datos le decimos que es de tipo usuario para que funcione y para que se instancie le agregamos un private
    }

    createUser(user: CreateUserDto){//Como se puede observar el user aparece tres puntos" y si ponemos el cursor arriba del mismo aparece que espera un objeto  de tipo any, por eso ocupamos el "dto" (data transfer object) Posterior a ello pusimos .CreateUserDto y desaparecieron los puntos que habian debajo de la palabra
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)//El sabe como se guarda en la base de datos es asincrono sin embargo, voy a utilizar el return
    }

    getUsers(){
        return this.userRepository.find()
    }

    getUser(id: number): Promise<User> {
        return this.userRepository.findOne({ where: { id } }).then(user => {
            if (!user) {
                throw new NotFoundException(`User with ID ${id} not found`);
            }
            return user;
        });
    }

deleteUser(id: number){
    return this.userRepository.delete({id})
}

updateUser(id: number, user: UpdateUserDto){
    return this.userRepository.update({id}, user)
}

    }


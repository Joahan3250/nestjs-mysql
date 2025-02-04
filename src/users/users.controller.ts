import { Controller, Post, Body, Get } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { User } from "./user.entity";
@Controller('users')
export class UsersController{
    constructor(private usersService: UsersService){}//esto sirve por que tambien debo de crear lo del otro controlador (donde mando a crear el usuario);

@Get()
getUsers(): Promise<User[]>{
    return this.usersService.getUsers();
}
    @Post()
createUser(@Body() newUser: CreateUserDto ){//El decorador Body son los datos que vienen desde el cliente 
return this.usersService.createUser(newUser)//Esto se hace para poder usarlo
} 

}
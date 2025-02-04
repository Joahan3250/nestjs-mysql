import { Controller, Post, Body,Param, Get, ParseIntPipe, Delete, Patch } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { User } from "./user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";
@Controller('users')
export class UsersController{
    constructor(private usersService: UsersService){}//esto sirve por que tambien debo de crear lo del otro controlador (donde mando a crear el usuario);

@Get()
getUsers(): Promise<User[]>{
    return this.usersService.getUsers();
}

@Get(':id')

 getUser(@Param('id',ParseIntPipe)id: number): Promise<User>{
 return this.usersService.getUser(id);
}

    @Post()
createUser(@Body() newUser: CreateUserDto ){//El decorador Body son los datos que vienen desde el cliente 
return this.usersService.createUser(newUser)//Esto se hace para poder usarlo
} 

@Delete(':id')
deleteUser(@Param('id',ParseIntPipe)id: number){
return this.usersService.deleteUser(id);
}
@Patch(':id')
updateUser(@Param('id',ParseIntPipe) id:number, @Body()user: UpdateUserDto){
    return this.usersService.updateUser(id,user)
}
}
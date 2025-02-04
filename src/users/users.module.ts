import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Se importa al igual de la conexion de base de datos, pero esto sirve para poder mandarle
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Module({
    imports:[TypeOrmModule.forFeature([User])],//forFeature sirve para decirle que entidades cargar
    controllers:[UsersController],
    providers:[UsersService]
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

  
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'databasesrt.c7ee626s6kbi.us-east-2.rds.amazonaws.com',
      port:3306,
      username: 'admin',
      password: 'root2025',
      database: 'nestdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

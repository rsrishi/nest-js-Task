import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth.credentials';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
//import { UserRepository } from './user.repository';
// import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository:UserRepository,
  ){}

  async signUp(authCredentialsDto:AuthCredentialsDto):Promise<any> {
    //return await this.userRepository.save(this.userRepository.create(authCredentialsDto));

    // console.log('I am here');
    // return authCredentialsDto;
    return await this.userRepository.createUser(authCredentialsDto);
  }
}

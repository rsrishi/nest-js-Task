import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth.credentials";
import { User } from "./user.entity";

@Injectable()
export class UserRepository extends Repository<User>{
    
     constructor(
        @InjectRepository(User)
          repository: Repository<User>
      ) {
        super(repository.target, repository.manager, repository.queryRunner);
      }

    async createUser(authCredentialsDto : AuthCredentialsDto):Promise<any>{
       return await this.save(this.create(authCredentialsDto));
    }
}
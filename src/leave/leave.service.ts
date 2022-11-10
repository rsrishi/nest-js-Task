import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';
import { Leave } from './entities/leave.entity';

@Injectable()
export class LeaveService {

  constructor(
    @InjectRepository(Leave)
    private leaveRepository:Repository<Leave>
  ){}

  create(leave:Leave ) {
    return this.leaveRepository.save(leave);
  }

  findAll():Promise<Leave[]> {
    return this.leaveRepository.find();
  }

  findOne(id: number):Promise<Leave> {
    return this.leaveRepository.findOneBy({id});
  }

  update(id: number, updateLeaveDto: UpdateLeaveDto) {
    return `This action updates a #${id} leave`;
  }

  remove(id: number) {
    return `This action removes a #${id} leave`;
  }
}

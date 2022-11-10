import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { Attendance } from './entities/attendance.entity';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private AttendanceRepository: Repository<Attendance>
  ){}
  
  create(attendance:Attendance){
    return this.AttendanceRepository.save(attendance)    
  }
  
  // create(createAttendanceDto: CreateAttendanceDto) {console.log(createAttendanceDto)
  //   return this.AttendanceRepository.save(createAttendanceDto);
  // }

  findAll():Promise<Attendance[]> {
    return this.AttendanceRepository.find();
  }

  findOne(id: number):Promise<Attendance> {
    return this.AttendanceRepository.findOneBy({id});
  }

  update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    return `This action updates a #${id} attendance`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendance`;
  }
}

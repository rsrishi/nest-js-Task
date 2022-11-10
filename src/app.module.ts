import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// Attendance
import { AttendanceService } from './attendance/attendance.service';
import { AttendanceModule } from './attendance/attendance.module';
import { Attendance } from './attendance/entities/attendance.entity';
// Leave
import { LeaveModule } from './leave/leave.module';
import { LeaveService } from './leave/leave.service';
import { Leave } from './leave/entities/leave.entity';
// import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
// import { MyuserModule } from './myuser/myuser.module';
// import { RishiController } from './rishi/rishi.controller';
// import { AuthModule } from './auth/auth.module';
@Module({
  imports: [LeaveModule, AttendanceModule,TypeOrmModule.forFeature([Attendance , Leave]) ,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5434,
    username: 'postgres',
    password: 'Admin@49',
    database: 'appdb',
    entities: [Attendance , Leave, User],
    synchronize: true,
    autoLoadEntities:true,
  }), AttendanceModule,LeaveModule,AuthModule],
  controllers: [AppController,],
  providers: [AppService,AttendanceService,LeaveService],
})
export class AppModule {}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  hours: number;

  @Column()
  date: Date;

  @Column()
  task: string;
}

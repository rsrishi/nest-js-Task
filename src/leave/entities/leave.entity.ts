
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Leave {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  todate: Date;

  @Column()
  fromdate: Date;  
}

// export class Leave {}

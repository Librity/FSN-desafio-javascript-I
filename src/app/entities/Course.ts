import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Student } from '../../app/entities/Student';

@Entity()
@Unique(['id'])
export class Course {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  public id!: number;

  @Column()
  @IsNotEmpty()
  public name!: string;

  @Column()
  @IsNotEmpty()
  public enrollmentDate!: Date;

  @ManyToOne((type) => Student, (student) => student.courses)
  public student!: Student;

  @Column()
  @CreateDateColumn()
  public createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt!: Date;
}

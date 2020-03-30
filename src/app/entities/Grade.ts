import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Min, Max, IsNotEmpty, IsDecimal } from 'class-validator';
import { Student } from '../../app/entities/Student';

@Entity()
@Unique(['id'])
export class Grade {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  public id!: number;

  @Column({ type: 'float4' })
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  @IsDecimal()
  public value!: number;

  @ManyToOne((type) => Student, (student) => student.courses)
  public student!: Student;

  @Column()
  @CreateDateColumn()
  public createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt!: Date;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { MinLength, IsNotEmpty } from 'class-validator';
import { Course } from '../../app/entities/Course';
import { Grade } from '../../app/entities/Grade';

@Entity()
@Unique(['id'])
export class Student {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  public id!: number;

  @Column()
  @IsNotEmpty()
  @MinLength(4)
  public name!: string;

  @Column()
  @IsNotEmpty()
  public absences!: number;

  @OneToMany((type) => Course, (course: Course) => course.student)
  public courses!: Course[];

  @OneToMany((type) => Grade, (grade: Grade) => grade.student)
  public grades!: Grade[];

  @Column()
  @CreateDateColumn()
  public createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt!: Date;

  public addCourse(course: Course): void {
    this.courses.push(course);
  }

  public isNotEnrolled(): boolean {
    return this.courses.isEmpty();
  }

  public saveGrade(grade: Grade): void {
    this.grades.push(grade);
  }

  public hasNoGrades(): boolean {
    return this.grades.isEmpty();
  }

  public gradeAvarage(): number {
    const gradeValues = this.grades.map((grade) => grade.value);

    const sumOfGrades = gradeValues.reduce(
      (increment, grade) => increment + grade
    );

    return sumOfGrades / this.grades.length;
  }

  public applyAbsence(): void {
    this.absences++;
  }
}

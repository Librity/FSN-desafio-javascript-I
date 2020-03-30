import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Student } from '../../app/entities/Student';
import { Course } from '../../app/entities/Course';
import { Grade } from '../../app/entities/Grade';

export class InitialSeed1585601677993 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const studentRepository = getRepository(Student);
    const courseRepository = getRepository(Course);
    const gradeRepository = getRepository(Grade);

    const student1 = new Student();
    student1.name = 'Henrique';
    student1.grades = [];
    student1.courses = [];
    student1.absences = 5;
    await studentRepository.save(student1);

    const student2 = new Student();
    student2.name = 'Edson';
    student2.grades = [];
    student2.courses = [];
    student2.absences = 2;
    await studentRepository.save(student2);

    const grade1 = new Grade();
    grade1.value = 10;
    await gradeRepository.save(grade1);
    const grade2 = new Grade();
    grade2.value = 9.8;
    await gradeRepository.save(grade2);
    const grade3 = new Grade();
    grade3.value = 9.6;
    await gradeRepository.save(grade3);

    const student3 = new Student();
    student3.name = 'Bruno';
    student3.grades = [grade1, grade2, grade3];
    student3.courses = [];
    student3.absences = 2;
    await studentRepository.save(student3);

    const grade4 = new Grade();
    grade4.value = 10;
    await gradeRepository.save(grade4);
    const grade5 = new Grade();
    grade5.value = 9.8;
    await gradeRepository.save(grade5);
    const grade6 = new Grade();
    grade6.value = 9.6;
    await gradeRepository.save(grade6);

    const course1 = new Course();
    course1.name = 'Full Stack';
    course1.enrollmentDate = new Date();
    await courseRepository.save(course1);

    const student4 = new Student();
    student4.name = 'Guilherme';
    student4.grades = [grade4, grade5, grade6];
    student4.courses = [course1];
    student4.absences = 2;
    await studentRepository.save(student4);

    const student5 = new Student();
    student5.name = 'Carlos';
    student5.grades = [];
    student5.courses = [];
    student5.absences = 0;
    await studentRepository.save(student5);

    const grade7 = new Grade();
    grade7.value = 10;
    await gradeRepository.save(grade7);
    const grade8 = new Grade();
    grade8.value = 9.8;
    await gradeRepository.save(grade8);
    const grade9 = new Grade();
    grade9.value = 9.6;
    await gradeRepository.save(grade9);

    const course2 = new Course();
    course2.name = 'UX';
    course2.enrollmentDate = new Date();
    await courseRepository.save(course2);

    const student6 = new Student();
    student6.name = 'Lucca';
    student6.grades = [grade7, grade8, grade9];
    student6.courses = [course2];
    student6.absences = 0;
    await studentRepository.save(student6);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    return;
  }
}

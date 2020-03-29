import Student from '../models/Student';
import StudentORM from '../database/StudentORM';
import StudentViews from '../views/StudentViews';
import '../interfaces/StringInterface';

class StudentController {
  static addStudent(name: string): string {
    try {
      if (name.isEmpty()) throw 'Nome do aluno nao pode ser vazio.';

      const newStudent = new Student({
        name,
        grades: [],
        courses: [],
        absences: 0,
      });

      StudentORM.addStudent(newStudent);
    } catch (err) {
      return err;
    }

    return `Aluno ${name} adicionado com sucesso`;
  }

  static listStudents(): string {
    return StudentViews.showStudents(StudentORM.all());
  }

  static findStudent(name: string): Student {
    try {
      if (name.isEmpty()) throw 'Nome do aluno nao pode ser vazio.';

      const query = StudentORM.findByName(name);

      if (!query) throw 'Aluno nao encontrado.';

      return query;
    } catch (err) {
      return err;
    }
  }

  static enrollStudent(targetStudent: Student, courseName: string): Student {
    try {
      if (courseName.isEmpty()) throw 'Nome do aluno nao pode ser vazio.';

      targetStudent = StudentORM.find(targetStudent);

      if (!targetStudent) throw 'Aluno nao existe.';

      targetStudent.addCourse({ courseName, enrollmentDate: new Date() });

      return targetStudent;
    } catch (err) {
      return err;
    }
  }

  static addAbsence(targetStudent: Student): Student {
    try {
      targetStudent = StudentORM.find(targetStudent);

      if (!targetStudent) throw 'Aluno nao existe.';

      if (targetStudent.isNotEnrolled()) throw 'Aluno nao matriculado.';

      targetStudent.applyAbsence();

      return targetStudent;
    } catch (err) {
      return err;
    }
  }

  static addGrade(targetStudent: Student, grade: number): Student {
    try {
      if (grade < 0 || grade > 10) throw 'Nota precisa ser entre 0 e 10.';

      targetStudent = StudentORM.find(targetStudent);

      if (!targetStudent) throw 'Aluno nao existe.';

      if (targetStudent.isNotEnrolled()) throw 'Aluno nao matriculado.';

      targetStudent.saveGrade(grade);

      return targetStudent;
    } catch (err) {
      return err;
    }
  }

  static flunkOrPass(targetStudent: Student): string {
    try {
      targetStudent = StudentORM.find(targetStudent);

      if (!targetStudent) throw 'Aluno nao existe.';

      if (targetStudent.isNotEnrolled()) throw 'Aluno nao matriculado.';
    } catch (err) {
      return err;
    }

    if (targetStudent.absences > 3) return 'Aluno reprovado por faltas.';
    if (targetStudent.gradeAvarage() < 7) return 'Aluno reprovado por media.';

    return 'Aluno aprovado.';
  }
}

export default StudentController;

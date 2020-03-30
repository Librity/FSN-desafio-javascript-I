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

      const result = StudentORM.find(targetStudent);

      if (!result) throw 'Aluno nao existe.';

      result.addCourse({ courseName, enrollmentDate: new Date() });

      return result;
    } catch (err) {
      return err;
    }
  }

  static addAbsence(targetStudent: Student): Student {
    try {
      const result = StudentORM.find(targetStudent);

      if (!result) throw 'Aluno nao existe.';

      if (result.isNotEnrolled()) throw 'Aluno nao matriculado.';

      result.applyAbsence();

      return result;
    } catch (err) {
      return err;
    }
  }

  static addGrade(targetStudent: Student, grade: number): Student {
    try {
      if (grade < 0 || grade > 10) throw 'Nota precisa ser entre 0 e 10.';

      const result = StudentORM.find(targetStudent);

      if (!result) throw 'Aluno nao existe.';

      if (result.isNotEnrolled()) throw 'Aluno nao matriculado.';

      result.saveGrade(grade);

      return result;
    } catch (err) {
      return err;
    }
  }

  static flunkOrPass(targetStudent: Student): string {
    const result = StudentORM.find(targetStudent);

    try {
      if (!result) throw 'Aluno nao existe.';

      if (result.isNotEnrolled()) throw 'Aluno nao matriculado.';
    } catch (err) {
      return err;
    }

    if (result.absences > 3) return 'Aluno reprovado por faltas.';
    if (result.gradeAvarage() < 7) return 'Aluno reprovado por media.';

    return 'Aluno aprovado.';
  }
}

export default StudentController;

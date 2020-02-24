import Student from '../models/Student';
import StudentORM from '../database/StudentORM';
import StudentViews from '../views/StudentViews';
import '../interfaces/StringInterface';

// TODO use yup for the validations
class StudentController {
  // AKA adicionarAluno
  addStudent(name: string): string {
    /**
     * Essa função irá receber uma *string* que é nome do aluno a ser criado.
     * E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de
     * alunos. A função deve devolver um feedback de sucesso, caso o aluno seja
     * inserido corretamente.
     */
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

  // AKA listarAlunos
  listStudents(): string {
    /**
     * Com essa função o usuário poderá ver todos os alunos cadastrados
     * atualmente no sistema. Vale dizer que As informações deverão ser
     * exibidas em um formato amigável.
     */

    return StudentViews.showStudents(StudentORM.all());
  }

  // AKA buscarAluno
  findStudent(name: string): Student {
    /**
     * Por meio dessa função, podemos pesquisar um aluno por nome na lista de
     * aluno. Ela deverá exibir um feedback, tanto para quando encontrar o
     * aluno, tanto quando não encontrar. E deverá devolver um aluno em seu
     * retorno.
     */
    try {
      if (name.isEmpty()) throw 'Nome do aluno nao pode ser vazio.';

      let query = StudentORM.findByName(name);

      if (!query) throw 'Aluno nao encontrado.';

      return query;
    } catch (err) {
      return err;
    }
  }

  // AKA matricularAluno
  enrollStudent(targetStudent: Student, courseName: string): Student {
    /**
     * Essa funcionalidade irá permitir, cadastrar um aluno em um curso.
     * Essa função só poderá ser executada em um aluno já devidamente cadastrado
     * no sistema, e deverá armazenar a data atual no momento da matricula.
     * Lembre-se de exibir o feedback para o usuário.
     */
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

  // AKA aplicarFalta
  addAbsence(targetStudent: Student): Student {
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá
     * incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir
     * a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado
     * em um curso.
     */
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

  // AKA aplicarNota
  addGrade(targetStudent: Student, grade: number): Student {
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá
     * adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um
     * feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o
     * mesmo tiver matriculado em um curso.
     */
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

  // AKA aprovarAluno
  flunkOrPass(targetStudent: Student): string {
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer
     * se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no
     * máximo 3 faltas e média 7 em notas. Só o aluno só poderá ser aprovado se
     * o mesmo tiver matriculado em um curso.
     */
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

export default new StudentController();

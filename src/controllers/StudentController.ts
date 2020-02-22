import Student from '../models/Student';
import Students from '../database/data';
import generateStudentView from '../views/StudentView';
import '../interfaces/StringInterface';
import '../interfaces/ArrayInterface';

// TODO use yup for the validations
// TODO create & implement a Student class, & have the database save the

class StudentController {
  // AKA adicionarAluno
  addStudent(name: string) {
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

      Students.push(newStudent);
    } catch (err) {
      return err;
    }

    return `Aluno ${name} adicionado com sucesso`;
  }

  // AKA listarAlunos
  listStudents() {
    /**
     * Com essa função o usuário poderá ver todos os alunos cadastrados
     * atualmente no sistema. Vale dizer que As informações deverão ser
     * exibidas em um formato amigável.
     */
    let studentsList = '';

    Students.forEach((student: Student) => {
      studentsList += generateStudentView(student);
    });

    return studentsList;
  }

  // AKA buscarAluno
  findStudent(name: string) {
    /**
     * Por meio dessa função, podemos pesquisar um aluno por nome na lista de
     * aluno. Ela deverá exibir um feedback, tanto para quando encontrar o
     * aluno, tanto quando não encontrar. E deverá devolver um aluno em seu
     * retorno.
     */
    try {
      if (name.isEmpty()) throw 'Nome do aluno nao pode ser vazio.';

      let match;

      Students.forEach((student: Student) => {
        if (student.name.includes(name)) return (match = student);
      });

      if (!match) throw 'Aluno nao encontrado.';

      return match;
    } catch (err) {
      return err;
    }
  }

  // AKA matricularAluno
  enrollStudent(targetStudent: Student, courseName: string) {
    /**
     * Essa funcionalidade irá permitir, cadastrar um aluno em um curso.
     * Essa função só poderá ser executada em um aluno já devidamente cadastrado
     * no sistema, e deverá armazenar a data atual no momento da matricula.
     * Lembre-se de exibir o feedback para o usuário.
     */
    try {
      if (courseName.isEmpty()) throw 'Nome do aluno nao pode ser vazio.';

      let match;

      Students.forEach((student: Student) => {
        if (student === targetStudent) return (match = student);
      });

      if (!match) throw 'Aluno nao existe.';

      match.courses.push({ courseName, enrollmentDate: new Date() });

      return match;
    } catch (err) {
      return err;
    }
  }

  // AKA aplicarFalta
  addAbsence(targetStudent: Student) {
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá
     * incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir
     * a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado
     * em um curso.
     */
    try {
      let match;

      Students.forEach((student: Student) => {
        if (student === targetStudent) return (match = student);
      });

      if (!match) throw 'Aluno nao existe.';

      if (match.courses.isEmpty()) throw 'Aluno nao matriculado.';

      match.applyAbsence();

      return match;
    } catch (err) {
      return err;
    }
  }

  // AKA aplicarNota
  addGrade(targetStudent: Student, grade: number) {
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá
     * adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um
     * feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o
     * mesmo tiver matriculado em um curso.
     */
    try {
      if (grade < 0 || grade > 10) throw 'Nota precisa ser entre 0 e 10.';

      let match;

      Students.forEach((student: Student) => {
        if (student === targetStudent) return (match = student);
      });

      if (!match) throw 'Aluno nao existe.';

      if (match.courses.isEmpty()) throw 'Aluno nao matriculado.';

      match.includeGrade(grade);

      return match;
    } catch (err) {
      return err;
    }
  }

  // AKA aprovarAluno
  flunkOrPass(targetStudent: Student) {
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer
     * se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no
     * máximo 3 faltas e média 7 em notas. Só o aluno só poderá ser aprovado se
     * o mesmo tiver matriculado em um curso.
     */
    try {
      let match;

      Students.forEach((student: Student) => {
        if (student === targetStudent) return (match = student);
      });

      if (!match) throw 'Aluno nao existe.';

      if (match.courses.isEmpty()) throw 'Aluno nao matriculado.';

      if (match.absences > 3) return 'Aluno reprovado por faltas.';

      if (match.gradeAvarage < 7) return 'Aluno reprovado por media.';

      return 'Aluno aprovado.';
    } catch (err) {
      return err;
    }
  }
}

export default new StudentController();

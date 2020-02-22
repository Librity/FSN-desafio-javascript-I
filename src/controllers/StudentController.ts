import Student from '../models/Student';
import Students from '../database/data';
import generateStudentView from '../views/StudentViews';
import '../interfaces/StringInterface';

// TODO use yup for the validations
// TODO create & implement a Student class, & have the database save the

class StudentController {
  // AKA adicionarAluno
  addStudent(name: string) {
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
  enrollStudent(student: Student, courseName: string) {
    /**
     * Essa funcionalidade irá permitir, cadastrar um aluno em um curso.
     * Essa função só poderá ser executada em um aluno já devidamente cadastrado
     * no sistema, e deverá armazenar a data atual no momento da matricula.
     * Lembre-se de exibir o feedback para o usuário.
     */
  }

  // AKA aplicarFalta
  addAbsence(student: Student) {
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá
     * incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir
     * a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado
     * em um curso.
     */
  }

  // AKA aplicarNota
  addGrade(student: Student) {
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá
     * adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um
     * feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o
     * mesmo tiver matriculado em um curso.
     */
  }

  // AKA aprovarAluno
  flunkOrPass(student: Student) {
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer
     * se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no
     * máximo 3 faltas e média 7 em notas. Só o aluno só poderá ser aprovado se
     * o mesmo tiver matriculado em um curso.
     */
  }
}

export default new StudentController();

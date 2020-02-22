import './interfaces/String';
import Student from './database/data';
const tab = ' '.repeat(2);

// TODO use yup for the validations
class Students {
  addStudent(name: string) {
    /**
     * Essa função irá receber uma *string* que é nome do aluno a ser criado.
     * E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de
     * alunos. A função deve devolver um feedback de sucesso, caso o aluno seja
     * inserido corretamente.
     */
    const newStudent = { nome: name, notas: [], cursos: [], faltas: 0 };

    try {
      if (name.isEmpty) throw 'Nome do aluno nao pode ser vazio.';

      Student.push(newStudent);
    } catch (err) {
      return err;
    }

    return `Aluno ${name} adicionado com sucesso`;
  }

  listStudents() {
    /**
     * Com essa função o usuário poderá ver todos os alunos cadastrados
     * atualmente no sistema. Vale dizer que As informações deverão ser
     * exibidas em um formato amigável.
     */
    let studentsView = '';

    Student.forEach(student => {
      studentsView += generateStudentView(student);
    });

    return studentsView;
  }

  searchStudent(name: string) {
    /**
     * Por meio dessa função, podemos pesquisar um aluno por nome na lista de
     * aluno. Ela deverá exibir um feedback, tanto para quando encontrar o
     * aluno, tanto quando não encontrar. E deverá devolver um aluno em seu
     * retorno.
     */
    let studentsView = '';

    Student.forEach(student => {
      if (student.nome.includes(name))
        studentsView += generateStudentView(student);
    });

    return studentsView;
  }

  enrollStudent(student: object, curso: string) {
    /**
     * Essa funcionalidade irá permitir, cadastrar um aluno em um curso.
     * Essa função só poderá ser executada em um aluno já devidamente cadastrado
     * no sistema, e deverá armazenar a data atual no momento da matricula.
     * Lembre-se de exibir o feedback para o usuário.
     */
  }

  addAbsenceToStudent(student: object) {
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá
     * incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir
     * a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado
     * em um curso.
     */
  }

  addGradeToStudent(student: object) {
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá
     * adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um
     * feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o
     * mesmo tiver matriculado em um curso.
     */
  }

  flunkOrPass(student: object) {
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer
     * se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no
     * máximo 3 faltas e média 7 em notas. Só o aluno só poderá ser aprovado se
     * o mesmo tiver matriculado em um curso.
     */
  }
}

const generateStudentView = student => {
  let studentView = `Nome: ${student.nome}\n`;

  studentView += tab + 'Notas: ';
  student.notas.forEach((grade, index, array) => {
    if (index + 1 === array.length) return (studentView += `${grade}\n`);

    studentView += `${grade}, `;
  });

  studentView += tab + 'Cursos:\n';
  student.cursos.forEach(course => {
    studentView += tab + tab + course.nomeDoCurso;

    studentView += `, matriculado no ${course.dataMatricula}\n`;
  });

  studentView += tab + `Faltas: ${student.faltas}\n`;

  return studentView;
};

const students = new Students();

console.log(students.listarAlunos());
console.log(students.adicionarAluno('John Doe'));
console.log(students.listarAlunos());

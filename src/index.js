'use strict';
exports.__esModule = true;
require('./interfaces/String');
var data_1 = require('./database/data');
var tab = ' '.repeat(2);
// TODO use yup for the validations
var Students = /** @class */ (function() {
  function Students() {}
  Students.prototype.adicionarAluno = function(nome) {
    /**
     * Essa função irá receber uma *string* que é nome do aluno a ser criado.
     * E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de
     * alunos. A função deve devolver um feedback de sucesso, caso o aluno seja
     * inserido corretamente.
     */
    var newStudent = { nome: nome, notas: [], cursos: [], faltas: 0 };
    try {
      if (nome.isEmpty) throw 'Nome do aluno nao pode ser vazio.';
      data_1['default'].push(newStudent);
    } catch (err) {
      return err;
    }
    return 'Aluno ' + nome + ' adicionado com sucesso';
  };
  Students.prototype.listarAlunos = function() {
    /**
     * Com essa função o usuário poderá ver todos os alunos cadastrados
     * atualmente no sistema. Vale dizer que As informações deverão ser
     * exibidas em um formato amigável.
     */
    var studentsView = '';
    data_1['default'].forEach(function(student) {
      studentsView += generateStudentView(student);
    });
    return studentsView;
  };
  Students.prototype.buscarAluno = function(nome) {
    /**
     * Por meio dessa função, podemos pesquisar um aluno por nome na lista de
     * aluno. Ela deverá exibir um feedback, tanto para quando encontrar o
     * aluno, tanto quando não encontrar. E deverá devolver um aluno em seu
     * retorno.
     */
    var studentsView = '';
    data_1['default'].forEach(function(student) {
      if (student.nome.includes(nome))
        studentsView += generateStudentView(student);
    });
    return studentsView;
  };
  Students.prototype.matricularAluno = function(aluno, curso) {
    /**
     * Essa funcionalidade irá permitir, cadastrar um aluno em um curso.
     * Essa função só poderá ser executada em um aluno já devidamente cadastrado
     * no sistema, e deverá armazenar a data atual no momento da matricula.
     * Lembre-se de exibir o feedback para o usuário.
     */
  };
  Students.prototype.aplicarFalta = function(aluno) {
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá
     * incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir
     * a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado
     * em um curso.
     */
  };
  Students.prototype.aplicarNota = function(aluno) {
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá
     * adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um
     * feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o
     * mesmo tiver matriculado em um curso.
     */
  };
  Students.prototype.aprovarAluno = function(aluno) {
    /**
     * Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer
     * se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no
     * máximo 3 faltas e média 7 em notas.Só o aluno só poderá ser aprovado se
     * o mesmo tiver matriculado em um curso.
     */
  };
  return Students;
})();
var generateStudentView = function(student) {
  var studentView = 'Nome: ' + Students.name + '\n';
  studentView += tab + 'Notas: ';
  student.notas.forEach(function(grade, index, array) {
    if (index + 1 === array.length) return (studentView += grade + '\n');
    studentView += grade + ', ';
  });
  studentView += tab + 'Cursos:\n';
  student.cursos.forEach(function(course) {
    studentView += tab + tab + course.nomeDoCurso;
    studentView += ', matriculado no ' + course.dataMatricula + '\n';
  });
  studentView += tab + ('Faltas: ' + student.faltas);
  return studentView;
};
// declare interface String {
//   isEmpty() : boolean;
// }
// String.prototype.isEmpty = function() {
//   return this.length === 0 || !this.trim();
// };
var students = new Students();
console.log(students.listarAlunos());
console.log(students.adicionarAluno('John Doe'));
console.log(students.listarAlunos());

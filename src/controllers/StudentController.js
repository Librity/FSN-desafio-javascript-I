"use strict";
exports.__esModule = true;
var Student_1 = require("../models/Student");
var data_1 = require("../database/data");
var StudentViews_1 = require("../views/StudentViews");
require("../interfaces/StringInterface");
// TODO use yup for the validations
// TODO create & implement a Student class, & have the database save the
var StudentController = /** @class */ (function () {
    function StudentController() {
    }
    // AKA adicionarAluno
    StudentController.prototype.addStudent = function (name) {
        try {
            if (name.isEmpty())
                throw 'Nome do aluno nao pode ser vazio.';
            var newStudent = new Student_1["default"]({
                name: name,
                grades: [],
                courses: [],
                absences: 0
            });
            data_1["default"].push(newStudent);
        }
        catch (err) {
            return err;
        }
        return "Aluno " + name + " adicionado com sucesso";
    };
    // AKA listarAlunos
    StudentController.prototype.listStudents = function () {
        /**
         * Com essa função o usuário poderá ver todos os alunos cadastrados
         * atualmente no sistema. Vale dizer que As informações deverão ser
         * exibidas em um formato amigável.
         */
        var studentsList = '';
        data_1["default"].forEach(function (student) {
            studentsList += StudentViews_1["default"](student);
        });
        return studentsList;
    };
    // AKA buscarAluno
    StudentController.prototype.findStudent = function (name) {
        /**
         * Por meio dessa função, podemos pesquisar um aluno por nome na lista de
         * aluno. Ela deverá exibir um feedback, tanto para quando encontrar o
         * aluno, tanto quando não encontrar. E deverá devolver um aluno em seu
         * retorno.
         */
        try {
            if (name.isEmpty())
                throw 'Nome do aluno nao pode ser vazio.';
            var match_1;
            data_1["default"].forEach(function (student) {
                if (student.name.includes(name))
                    return (match_1 = student);
            });
            if (!match_1)
                throw 'Aluno nao encontrado.';
            return match_1;
        }
        catch (err) {
            return err;
        }
    };
    // AKA matricularAluno
    StudentController.prototype.enrollStudent = function (student, courseName) {
        /**
         * Essa funcionalidade irá permitir, cadastrar um aluno em um curso.
         * Essa função só poderá ser executada em um aluno já devidamente cadastrado
         * no sistema, e deverá armazenar a data atual no momento da matricula.
         * Lembre-se de exibir o feedback para o usuário.
         */
    };
    // AKA aplicarFalta
    StudentController.prototype.addAbsence = function (student) {
        /**
         * Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá
         * incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir
         * a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado
         * em um curso.
         */
    };
    // AKA aplicarNota
    StudentController.prototype.addGrade = function (student) {
        /**
         * Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá
         * adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um
         * feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o
         * mesmo tiver matriculado em um curso.
         */
    };
    // AKA aprovarAluno
    StudentController.prototype.flunkOrPass = function (student) {
        /**
         * Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer
         * se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no
         * máximo 3 faltas e média 7 em notas. Só o aluno só poderá ser aprovado se
         * o mesmo tiver matriculado em um curso.
         */
    };
    return StudentController;
}());
exports["default"] = new StudentController();

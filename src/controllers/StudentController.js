"use strict";
exports.__esModule = true;
var Student_1 = require("../models/Student");
var StudentORM_1 = require("../database/StudentORM");
var StudentViews_1 = require("../views/StudentViews");
require("../interfaces/StringInterface");
// TODO use yup for the validations
var StudentController = /** @class */ (function () {
    function StudentController() {
    }
    // AKA adicionarAluno
    StudentController.prototype.addStudent = function (name) {
        /**
         * Essa função irá receber uma *string* que é nome do aluno a ser criado.
         * E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de
         * alunos. A função deve devolver um feedback de sucesso, caso o aluno seja
         * inserido corretamente.
         */
        try {
            if (name.isEmpty())
                throw 'Nome do aluno nao pode ser vazio.';
            var newStudent = new Student_1["default"]({
                name: name,
                grades: [],
                courses: [],
                absences: 0
            });
            StudentORM_1["default"].addStudent(newStudent);
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
        return StudentViews_1["default"].showStudents(StudentORM_1["default"].all());
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
            var query = StudentORM_1["default"].findByName(name);
            if (!query)
                throw 'Aluno nao encontrado.';
            return query;
        }
        catch (err) {
            return err;
        }
    };
    // AKA matricularAluno
    StudentController.prototype.enrollStudent = function (targetStudent, courseName) {
        /**
         * Essa funcionalidade irá permitir, cadastrar um aluno em um curso.
         * Essa função só poderá ser executada em um aluno já devidamente cadastrado
         * no sistema, e deverá armazenar a data atual no momento da matricula.
         * Lembre-se de exibir o feedback para o usuário.
         */
        try {
            if (courseName.isEmpty())
                throw 'Nome do aluno nao pode ser vazio.';
            targetStudent = StudentORM_1["default"].find(targetStudent);
            if (!targetStudent)
                throw 'Aluno nao existe.';
            targetStudent.addCourse({ courseName: courseName, enrollmentDate: new Date() });
            return targetStudent;
        }
        catch (err) {
            return err;
        }
    };
    // AKA aplicarFalta
    StudentController.prototype.addAbsence = function (targetStudent) {
        /**
         * Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá
         * incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir
         * a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado
         * em um curso.
         */
        try {
            targetStudent = StudentORM_1["default"].find(targetStudent);
            if (!targetStudent)
                throw 'Aluno nao existe.';
            if (targetStudent.isNotEnrolled())
                throw 'Aluno nao matriculado.';
            targetStudent.applyAbsence();
            return targetStudent;
        }
        catch (err) {
            return err;
        }
    };
    // AKA aplicarNota
    StudentController.prototype.addGrade = function (targetStudent, grade) {
        /**
         * Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá
         * adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um
         * feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o
         * mesmo tiver matriculado em um curso.
         */
        try {
            if (grade < 0 || grade > 10)
                throw 'Nota precisa ser entre 0 e 10.';
            targetStudent = StudentORM_1["default"].find(targetStudent);
            if (!targetStudent)
                throw 'Aluno nao existe.';
            if (targetStudent.isNotEnrolled())
                throw 'Aluno nao matriculado.';
            targetStudent.saveGrade(grade);
            return targetStudent;
        }
        catch (err) {
            return err;
        }
    };
    // AKA aprovarAluno
    StudentController.prototype.flunkOrPass = function (targetStudent) {
        /**
         * Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer
         * se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no
         * máximo 3 faltas e média 7 em notas. Só o aluno só poderá ser aprovado se
         * o mesmo tiver matriculado em um curso.
         */
        try {
            targetStudent = StudentORM_1["default"].find(targetStudent);
            if (!targetStudent)
                throw 'Aluno nao existe.';
            if (targetStudent.isNotEnrolled())
                throw 'Aluno nao matriculado.';
        }
        catch (err) {
            return err;
        }
        if (targetStudent.absences > 3)
            return 'Aluno reprovado por faltas.';
        if (targetStudent.gradeAvarage() < 7)
            return 'Aluno reprovado por media.';
        return 'Aluno aprovado.';
    };
    return StudentController;
}());
exports["default"] = new StudentController();

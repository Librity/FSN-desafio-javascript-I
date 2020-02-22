"use strict";
exports.__esModule = true;
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
require("../interfaces/ArrayInterface");
var tab = ' '.repeat(2);
var generateStudentView = function (student) {
    var addGradesInfo = function () {
        if (student.grades.isEmpty())
            return (studentView += tab + 'Sem notas cadastradas.\n');
        studentView += tab + 'Notas: ';
        student.grades.forEach(function (grade, index, array) {
            if (index + 1 === array.length)
                return (studentView += "" + grade);
            studentView += grade + ", ";
        });
        studentView += '\n';
    };
    var addCoursesInfo = function () {
        if (student.courses.isEmpty())
            return (studentView += tab + 'Sem cursos matriculados.\n');
        studentView += tab + 'Cursos:\n';
        student.courses.forEach(function (course) {
            studentView += tab + tab + course.courseName;
            var formattedDate = date_fns_1.format(course.enrollmentDate, "d 'de' MMMM',' yyyy", { locale: locale_1.ptBR });
            studentView += ", matriculado em " + formattedDate + ".\n";
        });
    };
    var studentView = "Nome: " + student.name + "\n";
    addGradesInfo();
    addCoursesInfo();
    studentView += tab + ("Faltas: " + student.absences + "\n");
    return studentView;
};
exports["default"] = generateStudentView;

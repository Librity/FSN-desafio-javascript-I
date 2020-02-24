"use strict";
exports.__esModule = true;
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
require("../interfaces/ArrayInterface");
var tab = ' '.repeat(2);
var studentView;
var StudentViews = /** @class */ (function () {
    function StudentViews() {
    }
    StudentViews.showStudents = function (student) {
        student.forEach(function (student) {
            studentView += StudentViews.showStudent(student);
        });
        return studentView;
    };
    StudentViews.showStudent = function (targetStudent) {
        studentView = "Nome: " + targetStudent.name + "\n";
        StudentViews.addGradesInfo(targetStudent);
        StudentViews.addCoursesInfo(targetStudent);
        studentView += tab + ("Faltas: " + targetStudent.absences + "\n");
        return studentView;
    };
    StudentViews.addGradesInfo = function (student) {
        if (student.hasNoGrades())
            return (studentView += tab + 'Sem notas cadastradas.\n');
        studentView += tab + 'Notas: ';
        student.grades.forEach(function (grade, index, array) {
            if (index + 1 === array.length)
                return (studentView += "" + grade);
            studentView += grade + ", ";
        });
        studentView += '\n';
    };
    StudentViews.addCoursesInfo = function (student) {
        if (student.isNotEnrolled())
            return (studentView += tab + 'Sem cursos matriculados.\n');
        studentView += tab + 'Cursos:\n';
        student.courses.forEach(function (course) {
            studentView += tab + tab + course.courseName;
            var formattedDate = date_fns_1.format(course.enrollmentDate, "d 'de' MMMM',' yyyy", { locale: locale_1.ptBR });
            studentView += ", matriculado em " + formattedDate + ".\n";
        });
    };
    return StudentViews;
}());
exports["default"] = StudentViews;

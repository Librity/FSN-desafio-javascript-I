"use strict";
exports.__esModule = true;
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
require("../interfaces/ArrayInterface");
var tab = ' '.repeat(2);
var StudentViews = /** @class */ (function () {
    function StudentViews() {
    }
    StudentViews.showStudents = function (targetStudents) {
        var studentsList = '';
        targetStudents.forEach(function (student) {
            studentsList += StudentViews.showStudent(student);
        });
        return studentsList;
    };
    StudentViews.addCourse = function (course) {
        var courseInfo = tab + tab + course.courseName;
        var formattedDate = date_fns_1.format(course.enrollmentDate, "d 'de' MMMM',' yyyy", {
            locale: locale_1.ptBR
        });
        return (courseInfo += ", matriculado em " + formattedDate + ".\n");
    };
    StudentViews.showStudent = function (targetStudent) {
        var studentList = '';
        studentList += StudentViews.addName(targetStudent);
        studentList += StudentViews.addGrades(targetStudent);
        studentList += StudentViews.addCourses(targetStudent);
        studentList += StudentViews.addAbsences(targetStudent);
        return studentList;
    };
    StudentViews.addName = function (student) {
        return "Nome: " + student.name + "\n";
    };
    StudentViews.addGrades = function (student) {
        if (student.hasNoGrades())
            return tab + 'Sem notas cadastradas.\n';
        var gradesList = tab + 'Notas: ';
        student.grades.forEach(function (grade, index, array) {
            if (index + 1 === array.length)
                return (gradesList += "" + grade);
            gradesList += grade + ", ";
        });
        return (gradesList += '\n');
    };
    StudentViews.addCourses = function (student) {
        if (student.isNotEnrolled())
            return tab + 'Sem cursos matriculados.\n';
        var coursesList = tab + 'Cursos:\n';
        student.courses.forEach(function (course) {
            coursesList += StudentViews.addCourse(course);
        });
        return coursesList;
    };
    StudentViews.addAbsences = function (student) {
        return tab + ("Faltas: " + student.absences + "\n");
    };
    return StudentViews;
}());
exports["default"] = StudentViews;

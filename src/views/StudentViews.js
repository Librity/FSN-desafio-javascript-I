"use strict";
exports.__esModule = true;
var tab = ' '.repeat(2);
exports["default"] = (function (student) {
    var studentView = "Nome: " + student.name + "\n";
    studentView += tab + 'Notas: ';
    student.grades.forEach(function (grade, index, array) {
        if (index + 1 === array.length)
            return (studentView += "" + grade);
        studentView += grade + ", ";
    });
    studentView += '\n';
    studentView += tab + 'Cursos:\n';
    student.courses.forEach(function (course) {
        studentView += tab + tab + course.courseName;
        studentView += ", matriculado no " + course.enrollmentDate + "\n";
    });
    studentView += tab + ("Faltas: " + student.absences + "\n");
    return studentView;
});

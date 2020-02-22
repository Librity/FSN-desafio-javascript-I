"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(object) {
        this.object = object;
        this.name = (object && object.name) || '';
        this.grades = (object && object.grades) || [];
        this.courses = (object && object.courses) || [];
        this.absences = (object && object.absences) || 0;
    }
    Student.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    Student.prototype.applyAbsence = function () {
        this.absences++;
    };
    Student.prototype.includeGrade = function (grade) {
        this.grades.push(grade);
    };
    Student.prototype.gradeAvarage = function () {
        return (this.grades.reduce(function (increment, value) { return increment + value; }) /
            this.grades.length);
    };
    return Student;
}());
exports["default"] = Student;

"use strict";
exports.__esModule = true;
require("../interfaces/ArrayInterface");
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
    Student.prototype.isNotEnrolled = function () {
        return this.courses.isEmpty();
    };
    Student.prototype.includeGrade = function (grade) {
        this.grades.push(grade);
    };
    Student.prototype.hasNoGrades = function () {
        return this.grades.isEmpty();
    };
    Student.prototype.gradeAvarage = function () {
        return (this.grades.reduce(function (increment, value) { return increment + value; }) /
            this.grades.length);
    };
    Student.prototype.applyAbsence = function () {
        this.absences++;
    };
    return Student;
}());
exports["default"] = Student;

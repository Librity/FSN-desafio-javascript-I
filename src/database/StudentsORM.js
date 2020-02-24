"use strict";
exports.__esModule = true;
var studentData_1 = require("./data/studentData");
var StudentsORM = /** @class */ (function () {
    function StudentsORM() {
    }
    StudentsORM.addStudent = function (student) {
        studentData_1["default"].push(student);
    };
    StudentsORM.all = function () {
        return studentData_1["default"];
    };
    StudentsORM.findStudentByName = function (name) {
        var match;
        studentData_1["default"].forEach(function (student) {
            if (student.name.includes(name))
                return (match = student);
        });
        return match;
    };
    StudentsORM.findStudent = function (targetStudent) {
        var match;
        studentData_1["default"].forEach(function (student) {
            if (student === targetStudent)
                return (match = student);
        });
        return match;
    };
    return StudentsORM;
}());
exports["default"] = StudentsORM;

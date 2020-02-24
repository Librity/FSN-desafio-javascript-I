"use strict";
exports.__esModule = true;
var studentData_1 = require("./data/studentData");
var StudentORM = /** @class */ (function () {
    function StudentORM() {
    }
    StudentORM.addStudent = function (student) {
        studentData_1["default"].push(student);
    };
    StudentORM.all = function () {
        return studentData_1["default"];
    };
    StudentORM.findByName = function (name) {
        var match;
        studentData_1["default"].forEach(function (student) {
            if (student.name.includes(name))
                return (match = student);
        });
        return match;
    };
    StudentORM.find = function (targetStudent) {
        var match;
        studentData_1["default"].forEach(function (student) {
            if (student === targetStudent)
                return (match = student);
        });
        return match;
    };
    return StudentORM;
}());
exports["default"] = StudentORM;

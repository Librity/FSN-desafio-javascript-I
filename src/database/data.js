"use strict";
exports.__esModule = true;
var Student_1 = require("../models/Student");
var data = [
    new Student_1["default"]({ name: 'Henrique', grades: [], courses: [], absences: 5 }),
    new Student_1["default"]({ name: 'Edson', grades: [], courses: [], absences: 2 }),
    new Student_1["default"]({
        name: 'Bruno',
        grades: [10, 9.8, 9.6],
        courses: [],
        absences: 0
    }),
    new Student_1["default"]({
        name: 'Guilherme',
        grades: [10, 9.8, 9.6],
        courses: [{ courseName: 'Full Stack', enrollmentDate: new Date() }],
        absences: 0
    }),
    new Student_1["default"]({ name: 'Carlos', grades: [], courses: [], absences: 0 }),
    new Student_1["default"]({
        name: 'Lucca',
        grades: [10, 9.8, 9.6],
        courses: [{ courseName: 'UX', enrollmentDate: new Date() }],
        absences: 0
    }),
];
exports["default"] = data;

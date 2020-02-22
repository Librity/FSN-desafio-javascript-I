import Student from '../models/Student';

const data: Student[] = [
  new Student({ name: 'Henrique', grades: [], courses: [], absences: 5 }),
  new Student({ name: 'Edson', grades: [], courses: [], absences: 2 }),
  new Student({
    name: 'Bruno',
    grades: [10, 9.8, 9.6],
    courses: [],
    absences: 0,
  }),
  new Student({
    name: 'Guilherme',
    grades: [10, 9.8, 9.6],
    courses: [{ courseName: 'Full Stack', enrollmentDate: new Date() }],
    absences: 0,
  }),
  new Student({ name: 'Carlos', grades: [], courses: [], absences: 0 }),
  new Student({
    name: 'Lucca',
    grades: [10, 9.8, 9.6],
    courses: [{ courseName: 'UX', enrollmentDate: new Date() }],
    absences: 0,
  }),
];

export default data;

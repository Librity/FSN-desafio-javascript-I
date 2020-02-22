import Student from '../models/Student'
const tab = ' '.repeat(2);

export default (student: Student) => {
  let studentView = `Nome: ${student.name}\n`;

  studentView += tab + 'Notas: ';
  student.grades.forEach((grade, index, array) => {
    if (index + 1 === array.length) return (studentView += `${grade}`);

    studentView += `${grade}, `;
  });
  studentView += '\n';

  studentView += tab + 'Cursos:\n';
  student.courses.forEach(course => {
    studentView += tab + tab + course.courseName;

    studentView += `, matriculado no ${course.enrollmentDate}\n`;
  });

  studentView += tab + `Faltas: ${student.absences}\n`;

  return studentView;
};

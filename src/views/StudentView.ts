import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Student from '../models/Student';
import '../interfaces/ArrayInterface';
const tab = ' '.repeat(2);

const generateStudentView = (student: Student) => {
  const addGradesInfo = () => {
    if (student.grades.isEmpty())
      return (studentView += tab + 'Sem notas cadastradas.\n');

    studentView += tab + 'Notas: ';

    student.grades.forEach((grade, index, array) => {
      if (index + 1 === array.length) return (studentView += `${grade}`);

      studentView += `${grade}, `;
    });

    studentView += '\n';
  };

  const addCoursesInfo = () => {
    if (student.courses.isEmpty())
      return (studentView += tab + 'Sem cursos matriculados.\n');

    studentView += tab + 'Cursos:\n';

    student.courses.forEach(course => {
      studentView += tab + tab + course.courseName;

      const formattedDate = format(
        course.enrollmentDate,
        "d 'de' MMMM',' yyyy",
        { locale: ptBR }
      );

      studentView += `, matriculado em ${formattedDate}.\n`;
    });
  };

  let studentView = `Nome: ${student.name}\n`;

  addGradesInfo();

  addCoursesInfo();

  studentView += tab + `Faltas: ${student.absences}\n`;

  return studentView;
};

export default generateStudentView;

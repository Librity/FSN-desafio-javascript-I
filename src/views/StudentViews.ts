import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Student from '../models/Student';
import '../interfaces/ArrayInterface';

const tab = ' '.repeat(2);
let studentView: string;

class StudentViews {
  static showStudents(targetStudents: Student[]) {
    studentView = '';

    targetStudents.forEach((student: Student) => {
      studentView += StudentViews.showStudent(student);
    });

    return studentView;
  }

  static showStudent = (targetStudent: Student) => {
    studentView = `Nome: ${targetStudent.name}\n`;

    StudentViews.addGradesInfo(targetStudent);

    StudentViews.addCoursesInfo(targetStudent);

    studentView += tab + `Faltas: ${targetStudent.absences}\n`;

    return studentView;
  };

  static addGradesInfo = (student: Student) => {
    if (student.hasNoGrades())
      return (studentView += tab + 'Sem notas cadastradas.\n');

    studentView += tab + 'Notas: ';

    student.grades.forEach((grade, index, array) => {
      if (index + 1 === array.length) return (studentView += `${grade}`);

      studentView += `${grade}, `;
    });

    studentView += '\n';
  };

  static addCoursesInfo = (student: Student) => {
    if (student.isNotEnrolled())
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
}

export default StudentViews;

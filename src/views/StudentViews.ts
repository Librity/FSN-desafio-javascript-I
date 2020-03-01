import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Student from '../models/Student';
import { CourseInterface } from '../interfaces/StudentInterface';
import '../interfaces/ArrayInterface';

const tab = ' '.repeat(2);

class StudentViews {
  static showStudents(targetStudents: Student[]): string {
    let studentsList = '';

    targetStudents.forEach((student: Student) => {
      studentsList += StudentViews.showStudent(student);
    });

    return studentsList;
  }

  static showStudent = (targetStudent: Student): string => {
    let studentList = '';

    studentList += StudentViews.addName(targetStudent);
    studentList += StudentViews.addGrades(targetStudent);
    studentList += StudentViews.addCourses(targetStudent);
    studentList += StudentViews.addAbsences(targetStudent);

    return studentList;
  };

  private static addName = (student: Student): string => {
    return `Nome: ${student.name}\n`;
  };

  private static addGrades = (student: Student): string => {
    if (student.hasNoGrades()) return tab + 'Sem notas cadastradas.\n';

    let gradesList = tab + 'Notas: ';

    student.grades.forEach((grade, index, array) => {
      if (index + 1 === array.length) return (gradesList += `${grade}`);

      gradesList += `${grade}, `;
    });

    return (gradesList += '\n');
  };

  private static addCourses = (student: Student): string => {
    if (student.isNotEnrolled()) return tab + 'Sem cursos matriculados.\n';

    let coursesList = tab + 'Cursos:\n';

    student.courses.forEach(course => {
      coursesList += StudentViews.addCourse(course);
    });

    return coursesList;
  };

  private static addCourse(course: CourseInterface): string {
    let courseInfo = tab + tab + course.courseName;

    const formattedDate = format(course.enrollmentDate, "d 'de' MMMM',' yyyy", {
      locale: ptBR,
    });

    return (courseInfo += `, matriculado em ${formattedDate}.\n`);
  }

  private static addAbsences = (student: Student): string => {
    return tab + `Faltas: ${student.absences}\n`;
  };
}

export default StudentViews;

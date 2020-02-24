import studentData from './data/studentData';
import Student from '../models/Student';

class StudentsORM {
  static addStudent(student: Student) {
    studentData.push(student);
  }

  static all() {
    return studentData;
  }

  static findStudentByName(name: string) {
    let match: Student;

    studentData.forEach((student: Student) => {
      if (student.name.includes(name)) return (match = student);
    });

    return match;
  }

  static findStudent(targetStudent: Student) {
    let match: Student;

    studentData.forEach((student: Student) => {
      if (student === targetStudent) return (match = student);
    });

    return match;
  }
}

export default StudentsORM;

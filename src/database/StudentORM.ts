import studentData from './data/studentData';
import Student from '../models/Student';

class StudentORM {
  static addStudent(student: Student) {
    studentData.push(student);
  }

  static all() {
    return studentData;
  }

  static findByName(name: string) {
    let match: Student;

    studentData.forEach((student: Student) => {
      if (student.name.includes(name)) return (match = student);
    });

    return match;
  }

  static find(targetStudent: Student) {
    let match: Student;

    studentData.forEach((student: Student) => {
      if (student === targetStudent) return (match = student);
    });

    return match;
  }
}

export default StudentORM;

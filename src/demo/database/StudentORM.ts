import studentData from './seeds/studentData';
import Student from '../models/Student';

class StudentORM {
  static addStudent(student: Student): void {
    studentData.push(student);
  }

  static all(): Student[] {
    return studentData;
  }

  static findByName(name: string): Student {
    let match: Student;

    studentData.forEach((student: Student) => {
      if (student.name.includes(name)) return (match = student);
    });

    return match;
  }

  static find(targetStudent: Student): Student {
    let match: Student;

    studentData.forEach((student: Student) => {
      if (student === targetStudent) return (match = student);
    });

    return match;
  }
}

export default StudentORM;

import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    // @ts-ignore
    super.init(
      {
        name: Sequelize.STRING,
        absences: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Student;

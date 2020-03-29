import Sequelize, { Model } from 'sequelize';

interface Courses extends Model {
  associate: any;
}

class Courses extends Model {
  static init(sequelize) {
    // @ts-ignore
    super.init(
      {
        name: Sequelize.STRING,
        enrollment_date: Sequelize.DATE,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
  }
}

export default Courses;

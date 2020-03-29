import Sequelize, { Model } from 'sequelize';

interface Grades extends Model {
  associate: any;
}

class Grades extends Model {
  static init(sequelize) {
    // @ts-ignore
    super.init(
      {
        value: Sequelize.INTEGER,
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

export default Grades;

import Sequelize, { Model } from 'sequelize';

class Grades extends Model {
  static init(sequelize) {
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

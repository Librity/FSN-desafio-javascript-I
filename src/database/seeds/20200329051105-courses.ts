module.exports = {
  up: (QueryInterface: any) => {
    return QueryInterface.bulkInsert(
      'courses',
      [
        {
          name: 'Full Stack',
          enrollment_date: new Date(),
          student_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'UX',
          enrollment_date: new Date(),
          student_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: () => {},
};

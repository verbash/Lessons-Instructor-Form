// form models

// The form has a form_name attribute of type DataTypes.String
// and a devoured attribute that is false by default

module.exports = function(sequelize, DataTypes) {
  var form = sequelize.define("form", {
    date_created: DataTypes.DATEONLY,
    store: DataTypes.INTEGER,
    student_id: DataTypes.BIGINT,
    student_name: DataTypes.STRING,
    instructor: DataTypes.STRING,
    instrument: DataTypes.STRING,
    notes: DataTypes.STRING




    // devoured: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false
    // }
  });
  return form;
};

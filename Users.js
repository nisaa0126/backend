const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
      {
            nama: String,
            email: { type: String, unique: true },
            npm: String,
            password: String
      },
      {
            collection: "Users"
      }
);

mongoose.model("Users", UserSchema);


const ScheduleSchema = new mongoose.Schema(
      {
        
        no: String,
        nama: String,
        nohp: {
          type: String,
        },
      },
      {
        collection: "Schedules",
      }
    );

mongoose.model("Schedules", ScheduleSchema);
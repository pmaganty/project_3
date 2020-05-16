const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: { type: String },
  skills: { type: Array },
  description: { type: String },
  email: { type: String },
  phone: { type: String },
  collaborators: [
    {
      type: Schema.Types.ObjectId,
      ref: "Profile"
    }
  ]
});

const Profile = mongoose.model("Profile", profileSchema);


module.exports = Profile;

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const passwordValidator = function(password) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|`~\-]).{8,}$/;
    return regex.test(password); 
  };
const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: { 
    type: String, 
    required: true, 
    validate: {
      validator: passwordValidator, 
      message: 'Password must be at least 8 characters long, contain at least one letter, one number, and one special character.'
    }
  }
});

export default mongoose.model('User', UserSchema);

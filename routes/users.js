const  mongoose  = require("mongoose");

mongoose.connect("mongodb+srv://abhishek_chaturvedi:harshgangabnm@realmcluster.a2w01.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

let userSchema = mongoose.Schema({
  name : String ,
  posts: [{}],
  createdDate : {
    type : String,
    default : Date()
  }
})


module.exports = mongoose.model('usersIn',userSchema);


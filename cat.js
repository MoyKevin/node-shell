const fs = require('fs')

module.exports = function(fName,done){
  fs.readFile(`./${fName}`,'utf8',(err,data)=>{
    if(err) done('Something went wrong!');
    done(data);
  })
}

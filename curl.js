const request = require('request');

module.exports = function(givenHTTP,done){
  // console.log(request.get(givenHTTP));
  request(givenHTTP, function (error, response, body) {
  if(error) done('Something went wrong!');
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  done('body:', body); // Print the HTML for the Google homepage.
  });
}


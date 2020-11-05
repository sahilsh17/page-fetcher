const request = require('request');
const fs = require('fs');
const readline = require('readline');
const a = process.argv.slice(2);
let stats;
let fileSize;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
request(a[0], (error, response, body) => {
  console.log('error:', error); 
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
    
    
  fs.writeFile(a[1],body, (err)=>{
    stats = fs.statSync(a[1]);
    fileSize = stats['size'];
    if (!err) {console.log(`Downloaded and saved ${fileSize} bytes to ${a[1]}`);}
    else { console.log(err)};
  });
});





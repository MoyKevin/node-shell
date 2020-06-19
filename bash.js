const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

//Output a prompt
process.stdout.write('prompt >');


//The stdin 'data' event fires after a user types in a line.
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const arrayWords = cmd.split(' ');
    if (cmd === 'pwd')
    {
        pwd(done);
    }
    else if (cmd === 'ls')
    {
        ls(done);
    }
    else if(arrayWords[0]==='cat'){
        cat(arrayWords[1],done);
    }
    else if(arrayWords[0]==='curl'){
        curl(arrayWords[1],done);
    }
    else
    {
        process.stdout.write('You typed ' + cmd);
    }
    process.stdout.write('\nprompt > ');
});


const done=(output)=>{
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

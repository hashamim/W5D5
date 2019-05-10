const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a = 5;
function addNumbers(sum, numsLeft, completionCallback) {
    if(numsLeft > 0){
        rl.question(`${sum}: `,(num) => {
            sum += parseInt(num);
            addNumbers(sum,numsLeft-1,completionCallback);
        });
    }
    else{
        completionCallback(sum);
    }
    return check;
}

const cb1 = function(sum) {
    console.log(sum);
    rl.close();
};
console.log(addNumbers(0,1,cb1));
// rl.question("test: ", cb);
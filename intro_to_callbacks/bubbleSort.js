const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1,el2,callback){
    rl.question(`is ${el1} greater than ${el2}: `, (answer) => {
        if (answer === "yes"){
            callback(true);
        }else{
            callback(false);
        }
    });
}

function innerBubbleSortLoop(arr,i,madeAnySwaps,outerBubbleSortLoop){
    if( i < arr.length -1){
        askIfGreaterThan(arr[i],arr[i+1], (isGreaterThan) =>{
            if (isGreaterThan){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr,i+1,madeAnySwaps,outerBubbleSortLoop);
        });
    }else{
        console.log(arr);
        outerBubbleSortLoop(madeAnySwaps);
    }
}


function absurdBubbleSort(arr,sortCompletionCallback){
    const outerBubbleSortLoop = function(notDone){
        if(notDone){
            innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop);
        }
        else{
            sortCompletionCallback(arr);
        }
    };
    outerBubbleSortLoop(true);
}

const lastcb = function(arr){
    console.log(arr);
    rl.close();
}
arr = [1,6,4,5,2,8,9];
// innerBubbleSortLoop(arr,0,false,0);

absurdBubbleSort(arr,lastcb);
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//callback function

// specified callback functions in the arrays are called
const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => {
    return accumulator + currentBatch;
},
 0);

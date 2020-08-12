const fs = `
4
8
1 2 0 7 2 0 2 0
6
4 8 15 16 23 42
9
3 1 4 1 5 9 2 6 5
6
9 9 9 9 9 9`;

const input = fs.trim().split('\n');

let countRecordBreakingDays = function (visitors) {
    let recordBreaksCount = 0;
    let previousRecord = 0;
    for(let i = 0; i < visitors.length; i++) {
            let greaterThanPreviousDays = i == 0 || visitors[i] > previousRecord;
            let greaterThanFollowingDay = i == visitors.length-1 || visitors[i] > visitors[i+1];
            if(greaterThanPreviousDays && greaterThanFollowingDay) {
                recordBreaksCount++;
            }
        previousRecord = previousRecord > visitors[i] ? previousRecord : visitors[i];
    }
   return recordBreaksCount;
}

let currentLine = 0;
function readLine(){
    return input[currentLine++];
}

let T = readLine();
for(let i = 1; i <= T; i++){
    let N = readLine();
    let arr = readLine().split(' ');
    console.log(`Case #${i}: ${countRecordBreakingDays(arr)}`);
}
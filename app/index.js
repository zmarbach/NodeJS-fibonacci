// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ...

function findNthNumberInFibSeq(reps) {
    let fibSeq = [];

    let n1 = 0;
    let n2 = 1;
    fibSeq.push(n1);
    fibSeq.push(n2);

    //not i<=reps because we want 1 based, not 0 based
    for (let i=2; i<reps; i++) {
        let sum = n1 + n2;
        n1 = n2;
        n2 = sum;
        fibSeq.push(sum);
    }
    //Print entire sequence for reference
    console.log(`Entire fibonacci sequence: ${fibSeq}`)

    //print the last number in seq, because we are now at correct position in seq (10)
    console.log(`Number ${reps} in sequence: ${fibSeq[fibSeq.length - 1]}`);

}

//Change number here and execute 'npm run start'
findNthNumberInFibSeq(22);




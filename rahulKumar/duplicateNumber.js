let arr = [10, 8, 77, 66, 55, 8, 8];
let result = {};
for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {

        if (arr[i] === arr[j]) {

            count++;
            
            if (count > 1) {
                result[arr[i]] = count
            }

        }

    }
}

for(a in result){
    console.log("Duplicate Number: ",a," Occurence: ",result[a])
}

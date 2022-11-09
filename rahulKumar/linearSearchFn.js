function linearSearch(arr, item) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;

        }
    }
    return -1

}

result = linearSearch([10, 34, 65, 78, 345, 56, 54, 67, 55, 33], 345)
console.log(result)
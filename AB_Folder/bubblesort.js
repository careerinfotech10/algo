
function bubblesort(array) {
    let swapped;
    do {
        swapped = false;
        for (i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }


    } while (swapped)

}
let array = [8, 7, 9, 5, 6, 2, 1]
bubblesort(array)
console.log(array)
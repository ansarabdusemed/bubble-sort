function bubbleSort(arr){
    let no_swaps;
    for(let i = arr.length; i > 0; i--){
        no_swaps = true;
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                //SWAP
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp;
            }
        }
        if(no_swaps){
            break;
        }
    }


    return arr;
}


console.log(bubbleSort([37, 25, 8, 10, 1, -2]));

//Big-O Notation: Best/Average Case: O(n)                 Worst Case: O(n^2)
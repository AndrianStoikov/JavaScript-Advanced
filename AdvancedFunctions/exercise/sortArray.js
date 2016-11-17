function solve(arr, typeOfSort) {
    if(typeOfSort == 'asc') {
        arr = arr.sort((a,b) => Number(a) - Number(b));
    } else {
        arr = arr.sort((a,b) => Number(b) - Number(a));
    }

    return arr;
}

solve([14, 7, 17, 6, 8], 'asc');
function balancedSum(arr) {
    var found = false;
    var i = 1;
    var left = 0
    var right = 0;
    
    while (!found && i<=arr[0]) {
        left += arr[i];
        var j =0;
        while (!found && j<arr[0]-1) {
            right += arr[arr[0]-j]
            console.log("right atas", right);
           if (left === right) {
                found = true; 
                console.log('tes')
            } else {
                j++;
            }
        }
        console.log("left", left)
        console.log("right", right)
        i++;
        right = 0;
    }
    if (found) {
        console.log(i);
        return i-1;
    } else {
        console.log("i", i);
        return -1;
    }
}

console.log(balancedSum([4,1,2,3,3]));
console.log("-")
console.log(balancedSum([3,1,2,1]));
console.log("-")
console.log(balancedSum([5,1,2,3,3,5]));
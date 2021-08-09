function find_averages_of_subarrays(K, arr) {
    let windowSum = 0.0;
    let windowStart = 0;
    const average = [];

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        if (windowEnd >= K - 1) {
            average.push(windowSum / K);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }

    }
    return average;

}
console.log(find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])); //[ 2.2, 2.8, 2.4, 3.6, 2.8 ]
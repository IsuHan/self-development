function getPrimes(number) {
    let i = 0, arr = []
    for (let n = 2; n < Math.ceil(Math.sqrt(number)); n++) {
        if (number % n === 0) {
            arr.splice(i, 0, n)
            if (number / n !== Math.sqrt(number)) {
                arr.splice(i + 1, 0, number / n)
            }
            i++
        }
    }
    return arr
}
 
function solution(n) {
    const primes = getPrimes(n)
    if (primes.length !== 2) {
        return [-1, -1]
    }
 
    return primes
}
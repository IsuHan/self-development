function solution(numbers) {
    let answer = []
    const numSet = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
 
    let strArr = []
    for (const number of numbers) {
        if (number.toString().length === 1) {
            strArr.push(numSet[number])
        } else {
            let str = ""
            for (const n of number.toString()) {
                str += numSet[n * 1]
            }
            strArr.push(str)
        }
    }
 
    strArr.sort()
    for (let str of strArr) {
        const idx = numSet.indexOf(str)
        if (idx !== -1) {
            answer.push(idx)
        } else {
            let a = ""
            do {
                let key = ""
                for (const s of str) {
                    key += s
                    const id = numSet.indexOf(key)
                    if (id !== -1) {
                        a += id.toString()
                        str = str.replace(key, "")
                    }
                }
            } while (str.length > 0)
            answer.push(Number(a))
        }
    }
 
    return answer
}
function reverse(str){
    return str.split("").reverse().join("")
}
 
function solution(plain) {
    const rev = reverse(plain)
    if (plain === rev) {
        return plain.length
    }
 
    const add = plain.length % 2 === 0 ? rev : rev.slice(1, rev.length)
 
    for(let i = 0, answer = ""; i < add.length; i++) {
        answer = plain + add.slice(add.length - i, add.length)
        if (answer === reverse(answer)) {
            return answer.length
        }
    }
 
    return (plain + add).length
}
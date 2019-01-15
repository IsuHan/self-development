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

/*
Better Solution:
plain의 앞부터 하나씩 제외해서 나머지 문자열이 팰린드롬인지 검사. 팰린드롬일 경우, 제외한 문자열만 뒤에 붙인다.
*/
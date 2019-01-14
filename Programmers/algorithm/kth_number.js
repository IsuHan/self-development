/*
2019/01/11

[1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
[1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
[1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.
*/

function solution(array, commands) {
    let answer = []
    for (const command of commands) {
        const i = command[0] 
        const j = command[1]
        const k = command[2]
        const arr = array.slice(i - 1, j).sort(function(a, b) { return a - b })
        const a = arr[k - 1]
        answer.push(a)
    }
    return answer
}

// Better Solution - https://programmers.co.kr/learn/courses/30/lessons/42748/solution_groups?language=javascript
function solution(array, commands) {
    // map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
    return commands.map(command => {
        return array.slice(command[0] - 1, command[1]).sort((a, b) => a - b).slice(command[2] - 1, command[2])[0];
    });
}

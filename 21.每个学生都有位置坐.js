/**
 * leetcode 2037
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    const seat = seats.sort((a,b) =>  a -b)
    const student = students.sort((a,b) => a-b)
    console.log(seat, student)
    const length = seats.length
    let sum = 0
    for (let i = 0; i < length; i++){
        const num1 = seat[i]
        const num2 = student[i]
        const a = Math.abs(num1 - num2)
        sum += a
    }
    return sum
};
const students = [2,7,4]
const seats = [3,1,5]
const res = minMovesToSeat(seats,students)
console.log(res)

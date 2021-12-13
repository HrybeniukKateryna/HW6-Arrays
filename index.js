/*function arrayPp () {
const array = [];
    
while (true) {
    let ques = prompt('Enter your message');

    if (ques === null || ques === '') {
        array.pop();
    } else {
        array.push(ques);
    }
    console.log(array)

}
}

arrayPp();
*/

function mapArr() {
    const array = [];

    for (let i = 1; i <= 100; i++) {
        array.push(i);
    }
    return array.map(function (item) {
        return item * 3;
    });

}

console.log(mapArr());

mapArr();
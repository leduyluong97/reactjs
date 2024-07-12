function outer() {
    let a = 1;
    function inner(){
        console.log(a);
    }
    a = 2
    return inner;
}
const closure = outer();
closure();
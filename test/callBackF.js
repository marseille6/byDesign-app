function f1(callback) {
    var i = 0
    for (let i = 0; i < 10; i++) {
        i++
    }
    callback()
}
function f2() {
    console.log("in f2")
}
function f3() {
    console.log("in f3")
}
f1(f2)
f3()
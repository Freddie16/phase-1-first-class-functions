

function receivesAFunction(callback) {
    return callback()

}

function multiply(x,y) {
    return (x * y)
}

function returnsANamedFunction() {
    return (multiply)
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Anonymous")
    }
}


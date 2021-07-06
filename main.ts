let kompas = 0
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.compassHeading())
})
basic.forever(function () {
    kompas = input.compassHeading()
    if (kompas > 315 || kompas <= 45) {
        basic.showString("N")
    } else if (kompas > 45 && kompas <= 135) {
        basic.showString("E")
    } else if (kompas > 135 && kompas <= 225) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
})

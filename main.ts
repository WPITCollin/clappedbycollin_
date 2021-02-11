input.onGesture(Gesture.TiltRight, function () {
    basic.showString("Collin")
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(9)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # # # .
        . # # # .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.setLedColor(0x0000ff)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.ArrowSouth)
})

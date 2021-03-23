input.onButtonPressed(Button.A, function () {
    ScrolText.showNumber(
    cough,
    SCROLL_DIR.LEFT,
    SCROLL_ROTATE.SR_0,
    50
    )
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        ScrolText.showNumber(
        pins.analogReadPin(AnalogPin.P1),
        SCROLL_DIR.LEFT,
        SCROLL_ROTATE.SR_0,
        50
        )
        serial.writeNumber(pins.analogReadPin(AnalogPin.P1))
        serial.writeLine(" ")
    }
})
let cough = 0
basic.showIcon(IconNames.Happy)
ScrolText.showString(
"Cough Counter v.2",
SCROLL_DIR.LEFT,
SCROLL_ROTATE.SR_0,
50
)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) <= 61) {
        cough += 1
        basic.pause(2000)
    }
})

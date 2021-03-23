input.onButtonPressed(Button.A, function () {
    ScrolText.showNumber(
    cough,
    SCROLL_DIR.RIGHT,
    SCROLL_ROTATE.SR_0,
    20
    )
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        ScrolText.showNumber(
        Environment.ReadNoise(AnalogPin.P1),
        SCROLL_DIR.LEFT,
        SCROLL_ROTATE.SR_0,
        20
        )
        serial.writeNumber(Environment.ReadNoise(AnalogPin.P1))
        serial.writeLine(" ")
    }
})
let cough = 0
basic.showIcon(IconNames.Happy)
ScrolText.showString(
"Cough Counter v.3",
SCROLL_DIR.LEFT,
SCROLL_ROTATE.SR_0,
50
)
basic.forever(function () {
    serial.writeNumber(Environment.ReadNoise(AnalogPin.P1))
    serial.writeLine(" ")
})
basic.forever(function () {
    if (Environment.ReadNoise(AnalogPin.P1) <= 40) {
        cough += 1
        basic.pause(5000)
    }
})

def on_button_pressed_a():
    ScrolText.show_number(cough, SCROLL_DIR.LEFT, SCROLL_ROTATE.SR_0, 50)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    while True:
        ScrolText.show_number(Environment.read_noise(AnalogPin.P1),
            SCROLL_DIR.LEFT,
            SCROLL_ROTATE.SR_0,
            50)
        serial.write_number(Environment.read_noise(AnalogPin.P1))
        serial.write_line(" ")
input.on_button_pressed(Button.B, on_button_pressed_b)

cough = 0
basic.show_icon(IconNames.HAPPY)
ScrolText.show_string("Cough Counter v.2", SCROLL_DIR.LEFT, SCROLL_ROTATE.SR_0, 50)

def on_forever():
    serial.write_number(Environment.read_noise(AnalogPin.P1))
    serial.write_line(" ")
basic.forever(on_forever)

def on_forever2():
    global cough
    if Environment.read_noise(AnalogPin.P1) <= 40:
        cough += 1
        basic.pause(2000)
basic.forever(on_forever2)

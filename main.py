def Letter_o():
    for index in range(3):
        line_signal()
        pause_inside_word()
def letter_s():
    for index2 in range(3):
        dott_signal()
        pause_inside_word()

def on_button_pressed_a():
    letter_s()
    pause_inside_word()
    Letter_o()
    pause_inside_word()
    letter_s()
    pause_between_words()
input.on_button_pressed(Button.A, on_button_pressed_a)

def pause_between_letters():
    pins.digital_write_pin(DigitalPin.P0, 0)
    basic.pause(1000)
def dott_signal():
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(1000)
    pins.digital_write_pin(DigitalPin.P0, 0)
def line_signal():
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(3000)
    pins.digital_write_pin(DigitalPin.P0, 1)
def pause_between_words():
    pins.digital_write_pin(DigitalPin.P0, 0)
    basic.pause(7000)
def pause_inside_word():
    pins.digital_write_pin(DigitalPin.P0, 0)
    basic.pause(1000)
pins.digital_write_pin(DigitalPin.P0, 0)
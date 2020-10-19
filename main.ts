function Letter_o () {
    for (let index = 0; index < 3; index++) {
        line_signal()
        pause_inside_word()
    }
}
function letter_s () {
    for (let index = 0; index < 3; index++) {
        dott_signal()
        pause_inside_word()
    }
}
input.onButtonPressed(Button.A, function () {
    letter_s()
    pause_inside_word()
    Letter_o()
    pause_inside_word()
    letter_s()
    pause_between_words()
})
function pause_between_letters () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(1000)
}
function dott_signal () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function line_signal () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P0, 1)
}
function pause_between_words () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(7000)
}
function pause_inside_word () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(1000)
}
pins.digitalWritePin(DigitalPin.P0, 0)

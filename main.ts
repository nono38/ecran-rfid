input.onButtonPressed(Button.A, function () {
    OLED.writeStringNewLine("authentification")
})
input.onButtonPressed(Button.B, function () {
    OLED.clear()
})
let lire = 0
OLED.init(128, 64)
MFRC522.Init()
let id = 1071397406408
basic.forever(function () {
    basic.pause(1000)
    lire = MFRC522.getID()
    if (0 != lire) {
        OLED.writeStringNewLine("authentification")
        basic.pause(1000)
        OLED.drawLoading(0)
        basic.pause(1000)
        OLED.drawLoading(25)
        basic.pause(1000)
        OLED.drawLoading(50)
        basic.pause(1000)
        OLED.drawLoading(75)
        basic.pause(1000)
        OLED.drawLoading(100)
        basic.pause(1000)
        OLED.clear()
        basic.pause(1000)
        if (id == lire) {
            OLED.writeStringNewLine("hello")
            basic.pause(1000)
            OLED.clear()
        } else {
            OLED.writeStringNewLine("refuse")
            basic.pause(1000)
            OLED.clear()
        }
    }
})

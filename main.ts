let strip = neopixel.create(DigitalPin.P0, 20, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(200)
})

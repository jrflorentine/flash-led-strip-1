let strip = neopixel.create(DigitalPin.P0, 20, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})

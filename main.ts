input.onButtonPressed(Button.A, function () {
    haloDisplay.setBrightness(10)
})
input.onGesture(Gesture.Shake, function () {
    haloDisplay.setBrightness(255)
})
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.showRainbow(1, 360)
basic.forever(function () {
    haloDisplay.rotate(1)
    haloDisplay.show()
    basic.pause(100)
})

input.onButtonPressed(Button.A, function () {
    radio.sendValue("y", 0)
})
radio.onReceivedValue(function (name, value) {
    if (name.compare("y") == 0) {
        world = game.createSprite(randint(2, 2), randint(0, 5))
        basic.pause(5000)
        world.delete()
    }
})
let world: game.LedSprite = null
basic.showIcon(IconNames.SmallDiamond)

basic.showIcon(IconNames.Yes)
basic.pause(500)
let script_1 = game.createSprite(0, 3)
let script_2 = game.createSprite(0, 4)
let script_3 = game.createSprite(1, 3)
let script_4 = game.createSprite(1, 4)
let text_list = [script_1, script_2, script_3, script_4]
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 200) {
        script_1.change(LedSpriteProperty.X, 1)
        script_2.change(LedSpriteProperty.X, 1)
        script_3.change(LedSpriteProperty.X, 1)
        script_4.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -200) {
        script_1.change(LedSpriteProperty.X, -1)
        script_2.change(LedSpriteProperty.X, -1)
        script_3.change(LedSpriteProperty.X, -1)
        script_4.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.Y) > 200) {
        script_1.change(LedSpriteProperty.Y, 1)
        script_2.change(LedSpriteProperty.Y, 1)
        script_3.change(LedSpriteProperty.Y, 1)
        script_4.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.Y) < -200) {
        script_1.change(LedSpriteProperty.Y, -1)
        script_2.change(LedSpriteProperty.Y, -1)
        script_3.change(LedSpriteProperty.Y, -1)
        script_4.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
})

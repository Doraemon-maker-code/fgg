basic.showString("Hello!")
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showIcon(IconNames.House)
    music.playMelody("- - - D G - - - ", 120)
})

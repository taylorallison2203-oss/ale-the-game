namespace SpriteKind {
    export const pocion = SpriteKind.create()
    export const nps = SpriteKind.create()
    export const gati = SpriteKind.create()
    export const player2 = SpriteKind.create()
    export const nadaaaaaaa = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico15`, function (sprite, location) {
    tutorial = false
    tiles.setCurrentTilemap(tilemap`nivel13`)
    color.startFadeFromCurrent(color.originalPalette)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 14))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico47`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel22`)
    scene.setBackgroundColor(15)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 14))
    boss_cool()
    mySprite3.setImage(img`
        . . . . . . . . . . f f f . . . 
        . . . . . . . . . f f f . . . . 
        . . . . . . . . . f f . . . . . 
        . . . . . . b b b f f f . . . . 
        . . . . . b b f f f f f f . . . 
        . . . . b b 5 f f f f f f f . . 
        . . . . b 5 5 f f f f f f f . . 
        . . . . b 5 5 1 f f f f f f . . 
        b d d d b b d 5 f f f f f f f f 
        b b d 5 5 5 b 5 5 f f f f f f . 
        b d c 5 5 5 5 d 5 f f f f f . . 
        c d d c d 5 5 b 5 5 f f f f f . 
        c b d d c c b 5 5 5 f f f f f . 
        . c d d d d d d 5 5 5 f f f f . 
        . . c b d d d d d 5 5 f f f . . 
        . . . c c c c c c c c f f . . . 
        `)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(48, 14))
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`miMosaico72`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel32`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 0))
})
controller.combos.attachCombo("down up a", function () {
    mySprite.startEffect(effects.disintegrate)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite2)) {
        mySprite2.sayText(dialogos_personajes._pickRandom(), 2000, true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico36`, function (sprite, location) {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f 1 1 1 f 1 1 1 . . . . 
        . . . f f 1 1 1 f 1 1 1 . . . . 
        . . . f f 1 1 1 f 1 1 1 . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        `)
})
browserEvents.M.onEvent(browserEvents.KeyEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico25`, function (sprite, location) {
    sprite.ay = -400
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico30`, function (sprite, location) {
    spriteutils.jumpImpulse(sprite, 34)
    rebotar = false
    sprite.setFlag(SpriteFlag.BounceOnWall, false)
})
controller.combos.attachCombo("down baba", function () {
    mySprite.startEffect(effects.disintegrate, 2000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    tutorial = false
    tiles.setCurrentTilemap(tilemap`nivel2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
    info.changeScoreBy(2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico34`, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setWallAt(location, true)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite2)) {
        mySprite2.sayText(dialogos_personajes._pickRandom(), 2000, true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico19`, function (sprite, location) {
    tutorial = false
    tiles.setCurrentTilemap(tilemap`nivel14`)
    color.startFadeFromCurrent(color.originalPalette, 1000)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 19))
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(mySprite5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath2, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel4`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico29`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel26`)
    scene.setBackgroundColor(3)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 14))
})
controller.combos.attachCombo("down a", function () {
    mySprite.startEffect(effects.fire)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hazardLava1`, function (sprite, location) {
    info.changeLifeBy(-1)
    spriteutils.jumpImpulse(sprite, 34)
    sprite.startEffect(effects.fire, 5000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico13`, function (sprite, location) {
    info.changeLifeBy(-2)
    spriteutils.jumpImpulse(sprite, 34)
    if (tutorial == true) {
        sprite.sayText("no daño en tutorial", 2000, true)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f 1 1 1 f 1 1 1 . . . . 
        . . . f f 1 1 1 f 1 1 1 . . . . 
        . . . f f 1 1 1 f 1 1 1 . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . 1 1 1 f 1 1 1 f f . . . 
        . . . . 1 1 1 f 1 1 1 f f . . . 
        . . . . 1 1 1 f 1 1 1 f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico6`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel3`)
    info.changeScoreBy(4)
    color.startFadeFromCurrent(color.GrayScale)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 14))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico45`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel21`)
    scene.setBackgroundColor(2)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 14))
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    spriteutils.jumpImpulse(mySprite5, 89)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico22`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel25`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 14))
    statusbar.value = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles4, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel6`)
    blockSettings.writeNumber("67", 3)
    info.setScore(3)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 14))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 3 3 3 3 2 . . . . 
        . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 2 . . . 
        . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
        . . . . . 2 2 2 3 3 3 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico10`, function (sprite, location) {
    tutorial = false
    tiles.setCurrentTilemap(tilemap`nivel12`)
    effects.bubbles.startScreenEffect(100000)
    color.startFadeFromCurrent(color.originalPalette)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 14))
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(mySprite3, effects.disintegrate, 2000)
    mySprite.ay = 300
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico18`, function (sprite, location) {
    tutorial = false
    tiles.setCurrentTilemap(tilemap`nivel11`)
    color.startFadeFromCurrent(color.originalPalette, 1000)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 14))
})
info.onScore(100, function () {
    info.changeLifeBy(3)
    info.setScore(0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`baseTransparency16`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`baseTransparency16`)
    mySprite.ay = 20
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico39`, function (sprite, location) {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 6 6 . . . . . . . . 6 6 6 . 
        . . 6 6 6 . . . . . 6 6 6 . 6 . 
        . . 6 f f 6 f f f f f f a . 6 6 
        . . . 2 f f f 1 f 2 f a . . . . 
        . . . f 8 f f f f f f f . . . . 
        . . . f f 8 1 1 f 1 1 1 . . . . 
        . . . f f 1 8 1 f 1 8 1 . . . . 
        . . . 6 f 1 1 a f 1 8 8 . . . . 
        . . . 1 6 f f f f f f f . . . . 
        . . . f f f f f 6 f a f . . . . 
        . . . f f f 2 f f f f 2 . . . . 
        . . . 1 f f f f f 1 f f . . . . 
        . . . 1 f a f f 8 f f 6 . . . . 
        `)
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico35`, function (sprite, location) {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f . . . . . . . . . . 
        . f 1 f 1 f . . . . . . . . . . 
        . f f f f f . . . . . . . . . . 
        . f f f f f . . . . . . . . . . 
        . f f f f f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanSand0, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico94`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel27`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 0))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico7`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel5`)
    color.startFadeFromCurrent(color.GrayScale)
    info.changeScoreBy(5)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 14))
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 255, 82, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico9`, function (sprite, location) {
    tutorial = true
    tiles.setCurrentTilemap(tilemap`nivel8`)
    az = Math.idiv(Math.abs(controller.acceleration(ControllerDimension.Z)), 2048)
    color.startFadeFromCurrent(color.originalPalette)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 8))
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd9, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel28`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 0))
    color.startFadeFromCurrent(color.originalPalette)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    myMenu2 = miniMenu.createMenuFromArray([miniMenu.createMenuItem("2 pleyers")])
    miniMenu.onButtonPressed(myMenu2, miniMenu.Button.A, function (selection, selectedIndex) {
        mySprite5 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 f f f 1 f f f . . . . 
            . . . 1 1 f f f 1 f f f . . . . 
            . . . 1 1 f f f 1 f f f . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            `, SpriteKind.player2)
        controller.player2.moveSprite(mySprite5, 100, 0)
        mySprite5.ay = 400
        miniMenu.removeMenuItem(myMenu2, selectedIndex)
        miniMenu.insertMenuItem(myMenu2, miniMenu.createMenuItem("1 player"))
        miniMenu.close(myMenu2)
        info.player2.setLife(3)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico86`, function (sprite, location) {
    spriteutils.jumpImpulse(mySprite, 34)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico50`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel15`)
    scene.setBackgroundColor(15)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 14))
    boss_cool()
    mySprite3.setImage(img`
        . . . . . . . . . . f f f . . . 
        . . . . . . . . . f f f . . . . 
        . . . . . . . . . f f . . . . . 
        . . . . . . b b b f f f . . . . 
        . . . . . b b f f f f f f . . . 
        . . . . b b 5 f f f f f f f . . 
        . . . . b 5 5 f f f f f f f . . 
        . . . . b 5 5 1 f f f f f f . . 
        b d d d b b d 5 f f f f f f f f 
        b b d 5 5 5 b 5 5 f f f f f f . 
        b d c 5 5 5 5 d 5 f f f f f . . 
        c d d c d 5 5 b 5 5 f f f f f . 
        c b d d c c b 5 5 5 f f f f f . 
        . c d d d d d d 5 5 5 f f f f . 
        . . c b d d d d d 5 5 f f f . . 
        . . . c c c c c c c c f f . . . 
        `)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(48, 14))
    mySprite3.unfollow()
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(0, 14))
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    spriteutils.jumpImpulse(mySprite, 34)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`miMosaico70`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`miMosaico72`)
    sprite.sayText("lo logre gg destrui el mundo de ale the game", 5000, true)
    color.startFadeFromCurrent(color.Poke)
    sprite.sayText("que?!", 5000, true)
    music.play(music.createSong(hex`00ac000408100400001c00010a006400f4016400000400000000000000000000000000050000048c0100000300019c08000b00011b10001300019c18001b00011920002400019c28002b00011b30003300019c38003b00011940004300019c48004b00011b50005300019c58005b00011960006300019c68006b00011b70007300019c78007b00011980008400011b88008b00011990009400011b98009b000197a000a300011ba800ac000119b000b400011bb800bc000197c000c4000119c800cc000197d000d3000119d800dc000195e000e3000119e800ec000197f000f3000119f400f700011bf800fb00019c00010301019c08010b01011b10011301019c18011b01011920012401019c28012b01011b30013301019c38013b01011940014301019c48014b01011b50015301019c58015b01011960016301019c68016b01011b70017301019c78017b01011980018401011b88018b01011990019401011b98019b010197a001a301011ba801ac010119b001b401011bb801bc010197c001c401011ec801cc01019cd001d301011ed801dc01011be001e301011ee801ec01019cf001f301011bf401f701019cf801fb01011e02001c000c960064006d019001000478002c010000640032000000000a060005780010002000019c20003000011b30004900011950006000019c60007000011b7000840001199000a000011ba000b0000119b000c0000197c000e300011910012001019c20013001011b30014901011950016001019c60017001011b7001840101199001a001011ba001b0010119b001c0010197c001e301011403001c0001dc00690000045e0100040000000000000000000005640001040003560100001f00010d20003e0001144000580001955800600001146000780001127800800001908000a0000114a000b800010db800c0000114c000d0000112d000e0000190e000f000010ff0000001018b00010401010d0401070101a80c010f0101271401180101a81c011f0101272001240101142401280101a82c012f0101273401380101a83c01400101274001440101954401480101a84c014f01012754015701012558015c0101145c015f0101276001640101126401670101276c016f01012574017801012778017c0101907c01800101258001840101148401870101278c01900101a894019801012a9c01a00101a8a001a401010da401a7010127ac01b00101a3b401b70101a3b801bc010114bc01c0010120c001c4010108c401c8010120cc01d00101a3d001d401010fd401d90101a1dc01e0010120e001e4010108e401e80101a1ec01f00101a8f001f401018bf401f801012706001c00010a006400f401640000040000000000000000000000000000000002a1010000080002a82c0800100001251000180003a8272c1800200001252000280002a82c2800300001253000380002a82c3800400001254000480002a82c4800500001a15000580002a82c5800600001a16000680002a82c6800700001a17000780002a82c7800800001a18000880002272a8800900001209000980002272a9800a0000120a000a80002272aa800b0000120b000b80002272ab800c0000120c000c8000225a8c800d000011ed000d8000225a8d800e000011ee000e8000225a8e800f000011ef000f8000225a8f8000001011e0001080102a82c0801100101251001180102a82c1801200101252001280102a82c2801300101253001380102a82c3801400101254001480102a82c4801500101a15001580102a82c5801600101a16001680102a82c6801700101a17001780102a82c7801800101a18001880102272a8801900101209001980102272a9801a0010120a001a80102272aa801b0010120b001b80102272ab801c0010120c001c80102272ac801d0010120d001d80102272ad801e0010120e001e80102272ae801f0010120f001f80102272af801000201200033371e253434222c39312e2c2f232a253629332b27232e2f1b0a34223129263e3133371e253434222c39312e2c2f232a253629332b27232e2f1b0a34223129263e3102374749334c4f3e42495c374749334c4f3e42495c0336403534432d393c45363b343e363147403b40414a424335484836343643434b452d3f395d4c30393c3f3f3745363644373b333a342c383e3706362b362a3d324034483943413a3c48354e47373547333c3e37373e3536363b3f483e503e452f4c3443344232452842324e2736323134392b3e2e3c2a3b393a39`), music.PlaybackMode.LoopingInBackground)
    game.splash("gracias a", "musica: ale programador ale")
    game.splash("special gracias", "pruebas de juego candy")
    controller.configureRepeatEventDefaults(0, 0)
    scene.setBackgroundColor(9)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico84`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel37`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 0))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico8`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel8`)
    color.startFadeFromCurrent(color.GrayScale, 5000)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 14))
})
browserEvents.N.onEvent(browserEvents.KeyEvent.Pressed, function () {
    miniMenu.close(myMenu)
})
info.onLifeZero(function () {
    mySprite.x = broh_x
    mySprite.y = broh_y
    info.setLife(3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico0`, function (sprite, location) {
    info.changeLifeBy(-1)
    spriteutils.jumpImpulse(mySprite, 34)
    if (tutorial == true) {
        info.setLife(3)
        mySprite.sayText("no daño en tutorial", 2000, true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico43`, function (sprite, location) {
    info.changeLifeBy(-1)
    spriteutils.jumpImpulse(sprite, 34)
    sprite.startEffect(effects.fire, 5000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico21`, function (sprite, location) {
    tutorial = false
    tiles.setCurrentTilemap(tilemap`nivel17`)
    color.startFadeFromCurrent(color.originalPalette, 1000)
    boss_cool()
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 19))
})
function boss_cool () {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 5 5 5 5 5 5 f . . 
        . . . . b 5 5 1 5 5 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    mySprite3.setScale(2, ScaleAnchor.Middle)
    mySprite3.follow(mySprite, 100)
    scene.cameraShake(8, 2000)
    statusbar = statusbars.create(40, 40, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(mySprite3)
    statusbar.setColor(7, 15, 2)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.positionDirection(CollisionDirection.Bottom)
}
controller.combos.attachCombo("down b", function () {
    mySprite.startEffect(effects.trail)
})
browserEvents.C.onEvent(browserEvents.KeyEvent.Pressed, function () {
    game.splash("estas son tus cordenadas x", mySprite.x)
    game.splash("estas son tus cordenadas y", mySprite.y)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`baseTransparency16`)
    tiles.setWallAt(location, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico41`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel19`)
    scene.setBackgroundColor(2)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 14))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`baseTransparency16`)
    sprite.ay = 800
    if (tutorial == true) {
        mySprite.sayText("estos tipos hacen la gravead mas fuerte", 2000, true)
        pociones_tomadas = 1
        tiles.createSpritesOnTiles(assets.tile`miMosaico2`, SpriteKind.pocion)
    }
})
info.player2.onLifeZero(function () {
    mySprite5.x = broh_x
    mySprite5.y = broh_y
    mySprite5.startEffect(effects.confetti, 1000)
    info.player2.setLife(3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico74`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel7`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(5, 11))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico38`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel20`)
    scene.setBackgroundColor(2)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico5`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`baseTransparency16`)
    hambre += 1
    sprite.x += 10
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico27`, function (sprite, location) {
    sprite.ay = 400
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    myMenu = miniMenu.createMenuFromArray(mymenu99)
    mymenu99 = [
    miniMenu.createMenuItem("pizza", img`
        .............beebbbb............
        ............eebbbb4bb...........
        ............eb344bb4bb..........
        ............e44334bb4bb.........
        ............eb433344b4be........
        ............4eb43344444be.......
        ...........bd4eb43333344bb......
        ..........b455d4443333444bb.....
        ..........4d5555d444333444bb....
        .........4555555dd4b4443444be...
        ........bd5555d555d4bb444444ee..
        ........b55ddd665555bb4b44444ee.
        .......bd5555677655554ebb44444eb
        .......43222558855555d4eeb44b4ee
        ......b422332ddd555222d4eebbb4be
        ......be22232ed55522332db4ebbbbe
        .....bde22222e555e22232edd4bbbbe
        .....b52e222e3555e22222eddd4ebee
        ....bd552eee355552e222e355544eee
        ....665dd5555555552eee355dd4deee
        ...6776555555555555555551554d4ee
        ...4885222555dddd6655551544d4eee
        ..b45522332555dd677611d444ddeee.
        ..4d5222232e55555881d44ddd4eee..
        .bdd5e22222e555115114d54d4ee....
        .b55d2e222e351144d1d55eeee......
        bd5ddd2eee3d444555dd4e..........
        b555115dddd55d544eede...........
        4511d444d5544ee...4de...........
        41d4555d4ee........44...........
        41554eede.......................
        44ee...4e.......................
        `),
    miniMenu.createMenuItem("fresas", img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `),
    miniMenu.createMenuItem("hamburgesas", img`
        ...........ccccc66666...........
        ........ccc4444444444666........
        ......cc444444444bb4444466......
        .....cb4444bb4444b5b444444b.....
        ....eb4444b5b44444b44444444b....
        ...ebb44444b4444444444b444446...
        ..eb6bb444444444bb444b5b444446..
        ..e6bb5b44444444b5b444b44bb44e..
        .e66b4b4444444444b4444444b5b44e.
        .e6bb444444444444444444444bb44e.
        eb66b44444bb444444444444444444be
        eb66bb444b5b44444444bb44444444be
        fb666b444bb444444444b5b4444444bf
        fcb666b44444444444444bb444444bcf
        .fbb6666b44444444444444444444bf.
        .efbb66666bb4444444444444444bfe.
        .86fcbb66666bbb44444444444bcc688
        8772effcbbbbbbbbbbbbbbbbcfc22778
        87722222cccccccccccccccc22226678
        f866622222222222222222222276686f
        fef866677766667777776667777fffef
        fbff877768f86777777666776fffffbf
        fbeffeefffeff7766688effeeeefeb6f
        f6bfffeffeeeeeeeeeeeeefeeeeebb6e
        f66ddfffffeeeffeffeeeeeffeedb46e
        .c66ddd4effffffeeeeeffff4ddb46e.
        .fc6b4dddddddddddddddddddb444ee.
        ..ff6bb444444444444444444444ee..
        ....ffbbbb4444444444444444ee....
        ......ffebbbbbb44444444eee......
        .........fffffffcccccee.........
        ................................
        `),
    miniMenu.createMenuItem("sopa de caracol", img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ........dd55........
        ........5555........
        .........44.........
        ........dddd........
        ........dddd........
        .......dddddd.......
        .......dddddd.......
        .......dddddd.......
        .......555555.......
        .......555555.......
        .......555555.......
        ........5555........
        ........4444........
        ....................
        `),
    miniMenu.createMenuItem("plato?!", img`
        ...............bbbbbbbbbbbbbbbbbbb...............
        ...........bbbbdd111111111111111ddbbbb...........
        ........bbbd1111111111111111111111111dbbb........
        ......bbd11111111dddddddddddddd111111111dbb......
        ....bbd1111111ddd11111111111111dddd1111111dbb....
        ...bd111111ddd111111111111111111111ddd111111db...
        ..bd11111ddd111ddddddddddddddddddd111ddd11111db..
        .bd11111dd111dddd111111111111111dddd111dd11111db.
        .b11111d111ddd111111111111111111111ddd111d11111b.
        bd11111d1ddd1111111111111111111111111ddd1111111db
        b11111d1ddd111111111111111111111111111ddd1d11111b
        b11111ddddd111111111111111111111111111ddddd11111b
        b11111ddddd111111111111111111111111111dddbd11111b
        b111111dddd111111111111111111111111111dddb111111b
        bd111111dddd1111111111111111111111111dddbd11111db
        .b1111111dddd11111111111111111111111dddbd111111b.
        .bd1111111dbbdd1111111111111111111dddbbd111111db.
        ..bd11111111dbbdd111111111111111dddbbd1111111db..
        ...bd111111111dbbbbbbdddddddddddddd111111111db...
        ....bbd11111111111dbbbbbbbbbddd11111111111dbb....
        ......bbdd11111111111111111111111111111ddbb......
        ........bbbdd11111111111111111111111ddbbb........
        ...........bbbbbddd11111111111dddbbbbb...........
        ................bbbbbbbbbbbbbbbbb................
        `)
    ]
    menu1 = true
    myMenu.setPosition(mySprite.x, mySprite.top)
    miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
        info.changeScoreBy(1)
        mymenu99.removeAt(selectedIndex)
        hambre += 10
        controller.moveSprite(mySprite, 200, 0)
    })
})
scene.onOverlapTile(SpriteKind.player2, assets.tile`miMosaico0`, function (sprite, location) {
    spriteutils.jumpImpulse(mySprite5, 34)
    info.player2.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico95`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel31`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 0))
    color.startFadeFromCurrent(color.originalPalette)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico28`, function (sprite, location) {
    rebotar = true
    sprite.setFlag(SpriteFlag.BounceOnWall, true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico17`, function (sprite, location) {
    tutorial = false
    tiles.setCurrentTilemap(tilemap`nivel13`)
    color.startFadeFromCurrent(color.originalPalette, 1000)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 14))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f 1 1 1 f 1 1 1 . . . . 
        . . . f f 1 1 1 f 1 1 1 . . . . 
        . . . f f 1 1 1 f 1 1 1 . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        `)
})
let menu1 = false
let mymenu99: miniMenu.MenuItem[] = []
let pociones_tomadas = 0
let myMenu: Sprite = null
let myMenu2: Sprite = null
let az = 0
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite5: Sprite = null
let rebotar = false
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let tutorial = false
let broh_y = 0
let broh_x = 0
let mySprite: Sprite = null
let dialogos_personajes: string[] = []
let personajes_ = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 f f f 1 f f f 1 . . . . 
    . . . 1 f f f 1 f f f 1 . . . . 
    . . . 1 f f f 1 f f f 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    `,
img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `,
img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f f . . . . 
    . c d d d d d d e e d d f . . . 
    . c d f d d f d e e b d c . . . 
    c d d f d d f d e e b d c . f f 
    c d e e d d d d e e f c . f e f 
    c d d d d c d e e e f . . f e f 
    . f c c c d e e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f f . 
    . . f f e f e e f e e e e f . . 
    . f e f f e e f f f e e e f . . 
    f d d b d d c f f f f f f b f . 
    f d d c d d d f . . f c d d f . 
    . f f f f f f f . . . f f f . . 
    `,
img`
    . . . . . . . . . . b 7 b . . . 
    . . . . . . . . . b 7 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 7 7 7 7 7 b . . . 
    . . . . b b 7 d 1 f 7 7 d f . . 
    . . . . b 7 7 1 f f 7 d 4 c . . 
    . . . . b 7 7 d f b d d 4 4 . . 
    b d d d b b d 7 7 7 4 4 4 4 4 b 
    b b d 7 7 7 b 7 7 4 4 4 4 4 b . 
    b d c 7 7 7 7 d 7 7 7 7 7 b . . 
    c d d c d 7 7 b 7 7 7 7 7 7 b . 
    c b d d c c b 7 7 7 7 7 7 7 b . 
    . c d d d d d d 7 7 7 7 7 d b . 
    . . c b d d d d d 7 7 7 b b . . 
    . . . c c c c c c c c b b . . . 
    `,
img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `,
img`
    ..............cfff..............
    ............ccddbf..............
    ...........cbddbff.........ccc..
    ..........fccbbcf.........cbbc..
    ...fffffffccccccff.......cdbc...
    .ffcbbbbbbbbbbbbbcfff....cdbf...
    fcbbbbbbbbbcbbbbbbcccff.cdbf....
    fbcbbbbffbbbcbcbbbcccccffdcf....
    fbb1111ffbbbcbcbbbccccccbbcf....
    .fb11111111bbcbbbccccccccbbcf...
    ..fccc33cb11bbbbcccccccfffbbf...
    ...fc131c111bbbcccccbdbc..fbbf..
    ....f33c111cbbccdddddbc....fff..
    .....ff1111fdbbccddbcc..........
    .......cccccfdbbbfcc............
    .............fffff..............
    `,
img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,
img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ........ccccc...................
    ......ccbbbbbc..................
    ....ccddbbbbbbf.................
    ...cbbbddbbffbf.................
    ....ffffdbbffbff................
    .......fbbbbbbbf................
    .......fbbbbbbbff...............
    ......ffbbbbbbbbfff.............
    ......f6bbbbbb663ddcc...........
    .....cc66bbbb666dddddc..........
    .....cd36666663dddddddc.........
    .....cddd3333dbddddddbcc........
    .....cddddddddbdddddbbddc.......
    .....cddddddddbbdddbbdddbc......
    ......cddddddddbbdbbddddbbccc...
    ......ccddddddddbbbbcccccbbbcc..
    .......ccddddddddddddddbccffff..
    ........cccbddccbddddbbfff......
    ........c333bb333cbbfff.........
    ........c33cc33cc3fff...........
    `,
img`
    . . . c c c c c c . . . . . . . 
    . . c 6 7 7 7 7 6 c . . . . . . 
    . c 7 7 7 7 7 7 7 7 c . . . . . 
    c 6 7 7 7 7 7 7 7 7 6 c . . . . 
    c 7 c 6 6 6 6 c 7 7 7 c . . . . 
    f 7 6 f 6 6 f 6 7 7 7 f . . . . 
    f 7 7 7 7 7 7 7 7 7 7 f . . . . 
    . f 7 7 7 7 6 c 7 7 6 f . . . . 
    . . f c c c c 7 7 6 f c c c . . 
    . . c 6 2 7 7 7 f c c 7 7 7 c . 
    . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
    . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
    . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
    . . c 6 1 1 1 1 1 7 6 6 c c . . 
    . . . c c c c c c c c c c . . . 
    `,
assets.image`doogi`,
assets.image`falsy`,
assets.image`cuby`,
assets.image`cuby BUT OTHER  INCON`,
assets.image`veriti`,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f . . . . . 
    . . f f f f f f f f f . . . . . 
    . . f f f f f f f f f . . . . . 
    . . f f 1 1 f f 1 1 f . . . . . 
    . . f f 1 1 f f 1 1 f . . . . . 
    . . f f f f f f f f f . . . . . 
    . . f f f d d d d f f . . . . . 
    . . f f f d f f d f f . . . . . 
    . . f f f f f f f f f . . . . . 
    . . f f f f f f f f f . . . . . 
    `,
img`
    ..........bbbbbb................
    .......bbb444444bb..............
    .....2244444ddd444b.............
    ....244444444dddd44e............
    ...244444444444ddd4be...........
    ..244444f44444444d44be..........
    .2b44444f44f444444d4be..........
    .2b44444f44f44444444bbe.........
    2bbb4444f44f44444444bbe.........
    2bbb44f44444f4444444bbe.........
    2bb4b4f44444444444444bbe........
    2bb4444ff4444444444444be........
    2bb444444ff444fff444444e........
    2bbb444bbb4fff444444444e........
    22bbb444bb4bb444444444be........
    .2bbbbb44bbbb44444444bbe........
    .22bbbbbbbb44bbb444444bbe.......
    ..eeebbbbbbb44bbb444444be.......
    ...eeeeebbbbbbbb44b4444be.......
    .....eeeeee222bb44bbb4bbe.......
    .......eeeee222bb44bbbbee.......
    ............e222bbbbbbbec.......
    ..............ee2bbbbeebdb......
    .................eeeeecdddb.....
    .......................cd11bbbb.
    ........................cd111dbb
    .........................b11111c
    .........................c11dd1c
    .........................cd1dbc.
    .........................cb11c..
    ..........................ccc...
    ................................
    `,
img`
    . . . . . . . . . . b 2 b . . . 
    . . . . . . . . . b 2 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 2 2 2 2 2 b . . . 
    . . . . b b 2 d 1 f 2 2 d f . . 
    . . . . b 2 2 1 f f 2 d 4 c . . 
    . . . . b 2 2 d f b d d 4 4 . . 
    b d d d b b d 2 2 2 4 4 4 4 4 b 
    b b d 2 2 2 b 2 2 4 4 4 4 4 b . 
    b d c 2 2 2 2 d 2 2 2 2 2 b . . 
    c d d c d 2 2 b 2 2 2 2 2 2 b . 
    c b d d c c b 2 2 2 2 2 2 2 b . 
    . c d d d d d d 2 2 2 2 2 d b . 
    . . c b d d d d d 2 2 2 b b . . 
    . . . c c c c c c c c b b . . . 
    `,
img`
    ............................................................cc.....
    ...........................................................ccc.....
    ...........................................................cdc.....
    ..........................................................ccdc.....
    ..........................................................cddcc....
    .........................................................ccddbcc...
    .........................................................cdddbcc...
    ........................................................ccdddbdc...
    .......................................................ccdddbddc...
    ......................................................ccdddbbddbcc.
    ....................................................ccbbddbbdddbdc.
    ..................................................cccddbddddddbddc.
    .................................................ccddddbdddddbdddcc
    ................................................cdddddbbddddddddbcc
    ccc............................................cdddddbbddddddddbddc
    cdcc..........................................cddddddbbddddddbbddcc
    cddcc........................................cddddddddbbdddddddddc.
    .cddcc.......................................cdddddddddbddddddddc..
    .cdddcc......................................cdddddddddbdddddbbbccc
    ccbdddc......................................cbdddddddbbddddddddddc
    cdbbddcc.................ccccccc.............cbdddddbbbddddddddddcc
    cddbbddc...............ccbbbbbbbcc............cdddddbbddddddddddcc.
    ccdddddcc.............ccbbbbbbbbbcc...........cdddddbbddddddbbbbc..
    .cddddddcc............cbbbbbbbbbbbc...........cddddddbdddddddbbbc..
    .ccddddddcc...........cbbbbbbffbbbcc.........cbddddddbddddddddddc..
    ..cddddddbccccccc....c111bbbbffbbbbcc......cccddddddbbddddbbdddcc..
    ...cddddbbdddddddcc..f111bbbbbbbbbbbccc..ccddddddbbbbdddddddbbbc...
    ..cbbbddbbddddddddcccfbb11cbbbbbbbbbbbcccddddddddbbdddddbdddddc....
    .cdddbbdbbbbdddddddddfbbbbcbbbbbbbbbbb6cdddddddddbdddddddbdddc.....
    .ccdddddddbbbddddddddfbbfccbbbbbbbbbbb6cdddbbbbdbbddddddddbbbc.....
    ..ccddddddddbddddddddfbfdcbbbbbbbbbbb66bddbbbdbbbbddbddbdddbc......
    ....cddddddbbddddddddffddcbbbbbbbbbbb663bbbdddddddddbddbbdddc......
    ....cbbddddbbdbbbddddddddcbbbbbbbbbbb663bbbddbdddddddbddbbbcc......
    ....cddbbdddbbbbbddddddddcbbbbbbbbb66633ddbddbdddbbdddbddccc.......
    ....ccddddddddddbdddddddccbbbbbbbbb6633dddbddbbdddbbddcccc.........
    .....ccdddddddddbbddbbddcbbbbbbbbbb663dddddddcbbdddbbc.............
    ......ccddddddddbbbbbbddc6bbbbbbbb666ddddddcccccccccc..............
    .......ccbbbbdddddddbbbbc666bb6666663ddddddc.......................
    .........cbbddddddddddbbc66666666663dddddddc.......................
    .........cdddddbddddddbccd3666633ddddddddddc.......................
    .........ccddbbbddbdddbccdd33333dddddddddddc.......................
    ..........cccccddbbddbb.ccddddddddddddddddddc......................
    ..............ccccccbb...ccdddddddddddddddddc......................
    ...................cc.....ccddddddddddddddddcc.....................
    ...........................ccddddddddddbbbbddcc....................
    ............................bbbdddddddbbbbbddccccccc...............
    .............................bbbddddddbdddddddddddbcc..............
    .............................ccccddddbccccddddddddbbc..............
    ............................c3333cdddc3333cddddddcccc..............
    ...........................cc33333cbcc33333cdddddcc................
    ...........................c3333333cc3333333cdcdbbc................
    ...................bbbbbbbbc3c3c3c3cc3c3c3c3cdccbbc................
    ...................b1d11111c3c3c3cb1c3c3c3cbbdbccc.................
    ...................b1dd11111bcbccc111bcbcccdbbbcc..................
    ...................b11d111111111111111dd111dbccc...................
    ..................b111dd1111111111111dd1111dbc.....................
    ..................b1111dd11111111111dd1111ddb......................
    ..................b11111dd111111111dd11111ddb......................
    .................b1111111d11111111dd111111ddb......................
    .................b1111111dd111111dd1111111db.......................
    .................b11111111dd111ddd11111111db.......................
    .................b111111111dd1dd1111111111db.......................
    ................b11111111111ddd1111111111ddb.......................
    ................b111111111111111111111111ddb.......................
    ................b111111111111111111111111ddb.......................
    ................b111111111111111111111111ddb.......................
    ................bbbb111111111111111111111db........................
    ...................bbbbbbb111111111111111db........................
    ..........................bbbbbbbb1111111db........................
    .................................bbbbbbbbbb........................
    `
]
dialogos_personajes = [
"prueba ale the game!",
"naaaaaaah",
"ale broh",
":)",
":D",
":P",
"no pati nos quiere borrar",
"is easy ",
"esto es un dealogo que no sirve pa nada pero lo hice :)",
"XD",
"me sirve la hhhhhhhhhhhhgggggggggg",
"soy un nps ;)",
"brohhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
"datooo si tocas los pinchos mrbest te dara un 1m de dolares",
"datooo doogie se paso gref omgggg :0",
"datooo roptop le tiene miedo a la pala :(",
"soslapata",
"tengo hambre ffff",
"roblox es una tremenda kk",
"tengo sueño f",
"SI TODO ESTA HECHO DE ATOMOS DE QUE ESTAN HECHOS LOS ATOMOS????",
"Hola",
"https://arcade.makecode.com/S53772-84929-52737-03023 pruebalo"
]
info.setLife(3)
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f 1 1 1 f 1 1 1 . . . . 
    . . . f f 1 1 1 f 1 1 1 . . . . 
    . . . f f 1 1 1 f 1 1 1 . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 20
scene.cameraFollowSprite(mySprite)
info.setScore(0)
let hambre = 100
game.setGameOverMessage(true, "you win the end..................")
game.setGameOverEffect(true, color.RotatePalette)
let mySprite7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f . . . . . . . . . . . . 
    `, SpriteKind.nadaaaaaaa)
mySprite7.follow(mySprite)
if (info.score() == 3) {
    tiles.setCurrentTilemap(tilemap`nivel6`)
}
tiles.setCurrentTilemap(tilemap`nivel1`)
if (info.score() == 0) {
	
}
mySprite.x = broh_x
mySprite.y = broh_y
tutorial = true
mySprite2 = sprites.create(personajes_._pickRandom(), SpriteKind.nps)
mySprite.ay = 300
mySprite4 = sprites.create(assets.image`gati el gato`, SpriteKind.gati)
mySprite4.follow(mySprite)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(3, 11))
broh_y = mySprite.y
broh_x = mySprite.x
mySprite.x = blockSettings.readNumber("")
mySprite.y = blockSettings.readNumber("1")
info.setScore(blockSettings.readNumber("67"))
game.onUpdate(function () {
    mySprite7.sayText(game.runtime())
})
game.onUpdate(function () {
	
})
game.onUpdate(function () {
    mySprite4.sayText(hambre)
})
game.onUpdateInterval(5000, function () {
    broh_y = mySprite.y
    broh_x = mySprite.x
    mySprite.sayText("tu progerso ha sido guardado :)", 1000, true)
    blockSettings.writeNumber("", broh_x)
    blockSettings.writeNumber("1", broh_y)
})
game.onUpdateInterval(2000, function () {
    hambre += -2
    if (hambre == 0) {
        game.splash("tienes hambre", "pulsa m para inbentario")
        controller.moveSprite(mySprite, 50, 0)
    }
})

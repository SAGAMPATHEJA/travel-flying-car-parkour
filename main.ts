scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    sprites.destroy(mySprite, effects.fire, 500)
    scene.cameraShake(4, 500)
    effects.blizzard.startScreenEffect(500)
    game.gameOver(false)
    game.setGameOverPlayable(false, music.melodyPlayable(music.spooky), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight1, function (sprite, location) {
    sprites.destroy(mySprite, effects.fire, 500)
    scene.cameraShake(4, 500)
    effects.blizzard.startScreenEffect(500)
    game.gameOver(false)
    game.setGameOverPlayable(false, music.melodyPlayable(music.spooky), false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.splash("LEVEL 2")
    tiles.setCurrentTilemap(tilemap`level2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    sprites.destroy(mySprite, effects.fire, 500)
    scene.cameraShake(4, 500)
    effects.blizzard.startScreenEffect(500)
    game.gameOver(false)
    game.setGameOverPlayable(false, music.melodyPlayable(music.spooky), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorMixed, function (sprite, location) {
    sprites.destroy(mySprite, effects.fire, 500)
    scene.cameraShake(4, 500)
    effects.blizzard.startScreenEffect(500)
    game.gameOver(false)
    game.setGameOverPlayable(false, music.melodyPlayable(music.spooky), false)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1 DEEP HORROR`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
mySprite.setPosition(6, 105)
scene.setBackgroundColor(9)
game.setDialogCursor(img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 f 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
    4 f 5 5 f f 5 5 f f f 5 f f f 4 
    4 f 5 f 5 5 f 5 f 5 5 5 f 5 5 4 
    4 f 5 f 5 5 f 5 f f f 5 f f f 4 
    4 f 5 f 5 5 f 5 5 5 f 5 5 5 f 4 
    4 f f 5 f f 5 5 f f 5 5 f f f 4 
    4 5 2 5 5 2 5 2 5 5 5 5 2 2 5 4 
    4 2 2 5 5 2 2 2 2 5 2 5 2 2 5 4 
    4 2 2 5 2 2 2 2 2 2 2 2 2 5 2 4 
    4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
    4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
    4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
    4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
    4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `)

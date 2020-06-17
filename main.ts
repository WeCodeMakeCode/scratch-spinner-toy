sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (game.runtime() - priorTime > 500) {
        sprite.vx = 0 - otherSprite.vx
        otherSprite.vx = 0 - sprite.vx
        priorTime = game.runtime()
        info.changeScoreBy(1)
    }
})
let priorTime = 0
let mySpinner: spinner.Spinner = null
let myPolygon: Polygon = null
info.setScore(0)
for (let index = 0; index < 2; index++) {
    myPolygon = polygon.createPolygon(Math.randomRange(3, 6), Math.randomRange(10, 50), Math.randomRange(2, 13), 0)
    mySpinner = spinner.createSpinner(myPolygon, Math.randomRange(2, 10), Direction.Clockwise)
    mySpinner.polygon.sprite.ax = Math.randomRange(-50, 50)
    mySpinner.polygon.sprite.ay = Math.randomRange(-50, 50)
    mySpinner.polygon.sprite.setFlag(SpriteFlag.BounceOnWall, true)
}
priorTime = game.runtime()

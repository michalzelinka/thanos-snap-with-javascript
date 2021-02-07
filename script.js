disintegrate.init()

document.getElementById('div').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target)
  disintegrate.createSimultaneousParticles(disObj)
  e.target.remove()
})

/*
const thanosSnap = function() {
  this.name = 'ThanosSnap'
  this.animationDuration = 1500
  this.size = 3
  this.speedX = Math.random()
  this.speedY = Math.random() * -1
  this.draw = (ctx, percentComplete) => {
    ctx.behinPath()
    ctx.fillRect(this.startX - this.size / 2, this.startY - this.size / 2, this.size, this.size)
    const r = this.rgbArray[0]
    const g = this.rgbArray[1]
    const b = this.rgbArray[2]
    const a = 1 - percentComplete
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
    ctx.fill()

    this.startX += this.speedX
    this.startY += this.speedY
  }
}

disintegrate.addParticleType(thanosSnap)
*/
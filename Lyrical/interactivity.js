const timeStamps = [
  ['0:00:0', 'OUR GOD IS GOOD TO US <br><br><code>Jaming</code>'],
  ['0:11:0', 'I know the Father covers me as the enemy surrounds.'],
  ['0:18:0', 'My Shepard guards with rod and staff no sheep remain unfound.'],
  ['0:25:0', 'The quiet waters I will find my, my fears have been relived.'],
  ['0:32:0', 'And by my loving Saviour′s side forever I will be'],

  ['0:38:0', 'Our God is good to us...'],
  ['0:51:0', 'Now we can stand on Christ our Rock and boldly we proclaim'],
  ['0:58:0', 'Our God I good to us...'],

  ['01:14:0', 'I know the plans You have for me, are good and will fulfill.'],
  ['01:21:0', 'The Word You have begun in me surrender to Your will.'],
  ['01:28:0', 'So send Your holy spirit lord, to guide my wondering heart.'],
  ['01:34:0', 'My eyes forever fixed upon the promise of the Cross.'],

  ['01:41:0', 'His hands and feet were pierced that day to save me from the grave.'],
  ['01:47:0', 'The Father’s wrath for all my sin, upon His head was laid.'],
  ['01:53:0', 'And I who once, was bound by sin by the Saviour′s blood set free.'],
  ['02:01:0', 'The Father’s gift of Saving grace is poured out over me.'],

  ['02:08:0', 'Our God is good to us...'],
  ['02:21:0', 'Now we can stand on Christ our Rock and boldly we proclaim'],
  ['02:28:0', 'Our God I good to us...'],

  ['02:45:0', 'Our God is good to us...'],
  ['02:58:0', 'Now we can stand on Christ our Rock and boldly we proclaim'],
  ['03:05:0', 'Our God I good to us...'],

  ['03:21:0', 'When the Father calls us home His Word we long to hear.'],
  ['03:27:0', '<q>My good and faithful children come, and rest in Me draw near.</q>'],
  ['03:34:0', 'And as we join in heavenly song, we offer grateful praise.'],
  ['03:41:0', 'Unto the Lamb upon the throne the One who came to save.'],
  ['03:51:0', 'THANKS FOR WATCHING']
]

const audio = document.querySelector(`audio`)

timeStamps.forEach((sam, ind, ar) => {
  sam[0].split(':').forEach((tm, indeed, ar) => {
    sam[0] = +ar[0] * 60 + +ar[1]
  })
  sam.unshift(ind)
})

function timer(file) {
  return Math.floor(file.currentTime)
}

function sel() {
  let time = timer(audio)
  let row = []
  timeStamps.forEach((rowed) => {
    if (rowed[1] < time) {
      row[0] = rowed
    }
  })
  row.forEach((a,b,c)=>{
    document.querySelector('figcaption').innerHTML = c[c.length - 1][2]
  })
}
setInterval(()=>{
  if (!audio.paused || audio.ended) {
    sel()
  }
}, 500);
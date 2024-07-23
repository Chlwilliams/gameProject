const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576




const parsedCollisions = tutorial1.parse2D()
const collisionBlocks = parsedCollisions.createObjectsFrom2D()



const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './img/tutorialLevel1.png'
})

const player = new Player({
    collisionBlocks,
    imageSrc: 'img/PlayerAnim/Idle-R.png',
    frameRate: 11,
    animations: {
        idleRight: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: 'img/PlayerAnim/IdleR.png'
        },
        idleLeft: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: 'img/PlayerAnim/idleLeft.png'
        },
        runRight: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: 'img/PlayerAnim/runRight.png'
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: 'img/PlayerAnim/runLeft.png'
        },
        enterDoor: {
            frameRate: 8,
            frameBuffer: 4,
            loop: false,
            imageSrc: 'img/PlayerAnim/enterDoor.png',
            onComplete: ()=> {
                console.log('Completed')
            }
        }
    }
    
    
})

const doors = [
    new Sprite({
        position: {
            x:570,
            y:240,

        },
        imageSrc: 'img/Misc/doorOpen.png',
        frameRate:5,
        frameBuffer: 5,
        loop: false,
        autoplay: false
    })
]


const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },

    d: {
        pressed: false
    }
}

function animate(){
    window.requestAnimationFrame(animate)

    backgroundLevel1.draw()

    collisionBlocks.forEach(collisionsBlocks => {
        collisionsBlocks.draw()
    })

    doors.forEach(door => {
        door.draw()
    })


    
   player.handleInput(keys)
    player.draw()
    player.update()


   // if (bottom < canvas.height){
   //     y++
   //     bottom = y + 100
   // }
}

animate()

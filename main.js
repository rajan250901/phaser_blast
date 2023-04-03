class Play extends Phaser.Scene{
    constructor(){
        super();
    }
    preload(){
        this.load.image('ball','image/rock.jpg');
    }

    create(){
        this.add.image(500,300,'ball');
    }

    upload(){

    }
}

var config={
    type:Phaser.AUTO,
    width:window.innerWidth,
    height:window.innerHeight,
    scene:[Play]
}

var game=new Phaser.Game(config);
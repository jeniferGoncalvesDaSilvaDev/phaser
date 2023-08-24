//classe que herda dabiblioteca phaser
class Scene01 extends Phaser.Scene{
    constructor(){
        //colocando um nome na cena
        super('Scene01');
    }
    preload(){
        this.load.image('background', 'assets/background.png');
    }
    create(){
        this.add.image(400, 300, 'background');
    }
    update(){
        this.scene.start('Scene02');
    }

}
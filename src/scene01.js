//classe que herda dabiblioteca phaser
class Scene01 extends Phaser.Scene{
    constructor(){
        //colocando um nome na cena
        super('Scene01');
    }
    preload(){
        //carregando dos assets do jogo
        this.load.image('background', './img/ring-backgroung.png');
    }
    create(){
        //configuraçoes das variaveis
        //passando o background, salvando em uma variavel
        this.ring=this.add.image(800, 600, 'background');
    }
    update(){
        //criar as regras do jogo
    }
   
}
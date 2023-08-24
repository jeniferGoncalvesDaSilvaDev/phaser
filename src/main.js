//carregando o jogo
//phaser.game() eh uma classe no qual a variavel game vai instanciar
window.onload = function(){
    //criando um objeto para carregar as configuraçoes do jogo
    const config = {
        type: Phaser.Canvas,
        width: 800,
        height: 800,
        backgroundColor: '#000000',
        //pasando as fases do jogo
        scene:[scene01]
        
    };
    //chamando o objeto para carregar as configuraçoes do jogo
    let game = new Phaser.Game();
     
}

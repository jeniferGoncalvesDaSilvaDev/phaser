//importando as as classes

import CenaCarregamento from '.src/cena-carregamento.js';
import CenaJogo from './src/cena-jogo.js';
const config={
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    backgroundColor: '#000000',
    //get element by id
    parent: 'jogo luta de monstros',
    scene:[
        CenaCarregamento,
        CenaJogo
    ]
}


const game = new Phaser.Game(config);
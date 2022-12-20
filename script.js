let fields = [];
let fillshape = 'cross';
let gameover = false;


function fillShape(id) {

    if (!fields[id] && !gameover) {
        if (fillshape == 'circle') {
            fillshape = 'cross';
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        }
        else {
            fillshape = 'circle'
            document.getElementById('player-1').classList.add('player-inactive');
            document.getElementById('player-2').classList.remove('player-inactive');
        }

        fields[id] = fillshape;
        console.log(fields);
        draw();
        checkForWin();

    }
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle' + i).classList.remove('d-none');
        }
    }


    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'cross') {
            document.getElementById('cross' + i).classList.remove('d-none');
        }
    }

}


function checkForWin() {
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line0').classList.remove('d-none');
        document.getElementById('line0').style.transform = `scalex(1.0)`;
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line1').classList.remove('d-none');
        document.getElementById('line1').style.transform = `scalex(1.0)`;
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line2').classList.remove('d-none');
        document.getElementById('line2').style.transform = `scalex(1.0)`;
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line3').classList.remove('d-none');
        document.getElementById('line3').style.transform = `rotate(90deg) scalex(1.0)`;
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line5').classList.remove('d-none');
        document.getElementById('line5').style.transform = `rotate(90deg) scalex(1.0)`;
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line4').classList.remove('d-none');
        document.getElementById('line4').style.transform = `rotate(90deg) scalex(1.0)`;
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line6').classList.remove('d-none');
        document.getElementById('line6').style.transform = `rotate(45deg) scalex(1)`;
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line7').classList.remove('d-none');
        document.getElementById('line6').style.transform = `rotate(-45deg) scalex(1)`;
    }

    if (winner) {
        console.log('gewonnen:', winner);
        gameover = true;
        setTimeout(function () { document.getElementById('game-over').classList.remove('d-none'); }, 750);

    }

}


function reStart() {
    gameover = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');

    for (let i = 1; i <8; i++) {
    document.getElementById('line'+i).classList.add('d-none');
    }

    for (let i = 0; i <9; i++) {
        document.getElementById('circle'+i).classList.add('d-none');
        document.getElementById('cross'+i).classList.add('d-none');

    }
}


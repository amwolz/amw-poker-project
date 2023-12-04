var username = "username";
var welcomeDict = {"wim1": "images/female1.png",
                    "wim2": "images/female2.png",
                    "wim3": "images/male1.png",
                    "wim4": "images/male2.png"};
var charSelect = "images/male1.png";
var wim1 = document.getElementById("wim1");
var wim2 = document.getElementById("wim2");
var wim3 = document.getElementById("wim3");
var wim4 = document.getElementById("wim4");

function welcomeClick(img) {
    var div = document.getElementById(img);
    wim1.style.backgroundColor = "#f4f4f4";
    wim2.style.backgroundColor = "#f4f4f4";
    wim3.style.backgroundColor = "#f4f4f4";
    wim4.style.backgroundColor = "#f4f4f4";    
    div.style.backgroundColor = "lightcoral";
    charSelect = welcomeDict[img];
}

function goToGame() {
    username = document.getElementById("textInput").value;
    localStorage.setItem("username", username);
    localStorage.setItem("charSelect", charSelect);
    // window.location.href = "index.html"

}

function startPage() {
    document.getElementById("userName").innerHTML = localStorage.getItem("username");
    document.getElementById("userPic").src = localStorage.getItem("charSelect");
}

function updateTextbox() {
    const rangeValue = document.getElementById('myRange').value;
    document.getElementById('myTextbox').value = rangeValue;
}

function updateSlider() {
    const textboxValue = document.getElementById('myTextbox').value;
    if (textboxValue == "") {
        document.getElementById('myRange').value = 0
    }
    else {
        document.getElementById('myRange').value = textboxValue;
    }
}

class Frontend{
    constructor() {

    }

    static showDiv(id) {
        // id is string input of div id
        var div = document.getElementById(id);
        div.style.display = 'block';
    }

    static hideDiv(id) {
        var div = document.getElementById(id);
        div.style.display = 'none';
    }

    static toggleDiv(id) {
        var div = document.getElementById(id);
        if(div.style.display = 'block') {
            div.style.display = 'none'
        }
        else {
            div.style.display = 'block'
        }
    }
}

class Player {
    constructor(robot, name) {
        this.isrobot = robot;
        this.name = name;
        this.money = 200;
        this.cards = ['', '']; 
        this.active = true;  
        this.inRound = true;
        this.isTurn = false;   
        this.bet = 0;
    }
    promptMove() {
        Frontend.showDiv('actionContainer')
        this.isTurn = true;
        while (this.isTurn == false) {
        }




    }

}

p1 = new Player(false, username);
p2 = new Player(false, "Stephen");
p3 = new Player(false, "Alyssa");
p4 = new Player(false, "Eric");
p5 = new Player(false, "Alex");

players = [p1, p2, p3, p4, p5];
var inTurn = false;

// a = shuffleDeck()
// for (var card of a) {
//     console.log(card)
// }


class DealCards {
    constructor(players) {
        var deal = this.deal(players.length)
        this.pockets = deal[0]
        this.board = deal[1]
        // deals cards
        for (const player of players) {
            this.player = player;
            this.player.cards = this.pockets.pop();
        }
        this.flop = this.board.slice(0,3);
        this.turn = this.board[3];
        this.river = this.board[4];
        }

    shuffleDeck() {
        const suits = ['H', 'D', 'C', 'S'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      
        const deck = [];
      
        // Create a deck of cards
        for (const suit of suits) {
          for (const rank of ranks) {
            deck.push([suit, rank]);
          }
        }
      
        // Fisher-Yates shuffle algorithm
        for (let i = deck.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [deck[i], deck[j]] = [deck[j], deck[i]];
        }
      
        return deck;
      }

    deal(numPlayers) {
        var deck = this.shuffleDeck();
        var board = [];
        var pockets = [];
    
        for (let i = 0; i < numPlayers; i++) {
            var card1 = deck.pop();
            var card2 = deck.pop();
            pockets.push([card1, card2]);
        }
        for (let i = 0; i < 5; i++) {
            board.push(deck.pop());
        }
        return [pockets, board]
    }
}   

// test = new DealCards(players)

// console.log('a')
// for (card of test.board) {
//     console.log(card)
// }

// console.log('space')

// for (p of players) {
//     for (c of p.cards) {
//         console.log(c)
//     }
//     console.log('')
// }
// console.log(p1.cards)
// console.log(test.board)
// console.log('lgop')
// console.log(test.flop)
// for (c of test.flop) {
//     console.log(c)
// }

// console.log(test.turn)
// console.log(test.river)


class BettingRound {
    constructor(cards, players){
        this.flop = {cards: flop,
                    active: false};
        this.turn = {cards: turn,
                    active: false};
        this.river = {cards: river,
                    active: false};
        this.live = this.activate(this.flop, this.turn, this.river);
    }
    activate(flop, turn, river) {
        actives = []
        if (flop.active) {
            actives.push(flop.cards);
        }
        else {
            return ['back', 'back', 'back', 'back', 'back']
        }
        if (turn.active) {
            actives.push(turn.cards);
        }
        else {
            return actives.concat(['back', 'back']);
        }
        if (river.active) {
            actives.push(river.cards);
        }
        else {
            return actives.concat(['back']);
        }

        return actives
    }
}

class Hand {
    constructor() {
        dealtCards = new DealCards()
        this.bettingRound(['back', 'back', 'back', 'back', 'back'], players)
    }
    bettingRound(cards, players){
        for (player of players) {
            if (player.active) {
                const action = player.promptMove()

            }
        }
    }
}

function main() {

    return null
}

class Actions {
    constructor() {

    }

    static raiseAction() {
        // alert("raise")
        return this.response(raiseAction)
    }

    static checkcallAction() {
        alert("checkcall")
    }

    static foldAction() {
        alert("fold")
    }
    static response(){
        const resp = actionFunction()
        return resp
    }

    static getIsTurnPlayer() {
        for (player of players) {
            if (player.isTurn == true) {
                return player
            }
        }
    }

}
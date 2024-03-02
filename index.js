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
var cardDict = {
    "C2" : "images/cards/clubs_2.png",
    "C3": "images/cards/clubs_3.png",
    "C4": "images/cards/clubs_4.png",
    "C5": "images/cards/clubs_5.png",
    "C6": "images/cards/clubs_6.png",
    "C7": "images/cards/clubs_7.png",
    "C8": "images/cards/clubs_8.png",
    "C9": "images/cards/clubs_9.png",
    "C10": "images/cards/clubs_10.png",
    "CJ": "images/cards/clubs_jack.png",
    "CQ": "images/cards/clubs_queen.png",
    "CK": "images/cards/clubs_king.png",
    "CA": "images/cards/clubs_ace.png",
    "D2": "images/cards/diamonds_2.png",
    "D3": "images/cards/diamonds_3.png",
    "D4": "images/cards/diamonds_4.png",
    "D5": "images/cards/diamonds_5.png",
    "D6": "images/cards/diamonds_6.png",
    "D7": "images/cards/diamonds_7.png",
    "D8": "images/cards/diamonds_8.png",
    "D9": "images/cards/diamonds_9.png",
    "D10": "images/cards/diamonds_10.png",
    "DJ": "images/cards/diamonds_jack.png",
    "DQ": "images/cards/diamonds_queen.png",
    "DK": "images/cards/diamonds_king.png",
    "DA": "images/cards/diamonds_ace.png",
    "H2" : "images/cards/hearts_2.png",
    "H3" : "images/cards/hearts_3.png",
    "H4" : "images/cards/hearts_4.png",
    "H5" : "images/cards/hearts_5.png",
    "H6" : "images/cards/hearts_6.png",
    "H7" : "images/cards/hearts_7.png",
    "H8" : "images/cards/hearts_8.png",
    "H9" : "images/cards/hearts_9.png",
    "H10" : "images/cards/hearts_10.png",
    "HJ" : "images/cards/hearts_jack.png",
    "HQ" : "images/cards/hearts_queen.png",
    "HK" : "images/cards/hearts_king.png",
    "HA" : "images/cards/hearts_ace.png",
    "S2" : "images/cards/spades_2.png",
    "S3" : "images/cards/spades_3.png",
    "S4" : "images/cards/spades_4.png",
    "S5" : "images/cards/spades_5.png",
    "S6" : "images/cards/spades_6.png",
    "S7" : "images/cards/spades_7.png",
    "S8" : "images/cards/spades_8.png",
    "S9" : "images/cards/spades_9.png",
    "S10" : "images/cards/spades_10.png",
    "SJ" : "images/cards/spades_jack.png",
    "SQ" : "images/cards/spades_queen.png",
    "SK" : "images/cards/spades_king.png",
    "SA" : "images/cards/spades_ace.png",
}

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

// var stopGate = false;

// let userActionPromiseResolver;


// function waitForUserAction() {
//     userActionPromise = new Promise(resolve => {
//         userActionPromiseResolver = resolve;
//     });
//     return userActionPromise
// }

// function setUserAction(action) {
//     if (typeof userActionPromiseResolver === 'function') {
//         userActionPromiseResolver(action);
//         userActionPromiseResolver = null;
//     }
// }

var userResponse = false;
var currentBet = 0;
const lbAmount = 1;
const bbAmount = 2;

function setUserAction(action) {
    // userRespone = true;
    console.log("setUserAction")

}

function waitUserAction() {
    return new Promise(resolve => {
        window.setUserAction = function() {
            resolve();
        };
    });
}

let i = 0;

// function delayedLog() {
//   console.log(i);
//   i++;
  
//   if (i < 10) {
//     if (userResponse == true) {

//     }
//     setTimeout(delayedLog, 1000);
//   }
//   else {
//     i = 0;
//   }
// }

// async function listenerUserAction() {
//     return new Promise((resolve) => {
//         // while (userResponse == false) {
//         // setTimeout(console.log("listen"), 1000)
//         // }
//         // resolve        
//         if (userResponse === true) {
//             console.log(i, true);
//             i = 0;
            
//         } else {
//             console.log(i, false);
//             setTimeout(listenerUserAction(), 1000);
//             i++;
//         }
//     })
// }

async function asyncAwaitUserResponse() {
    console.log("start waiting for user input");

    await waitUserAction();

    // const userAction = await userActionPromise;
    console.log("user input received");
    console.log("userResponse = " + userResponse)
    return userResponse;

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
    static changeImage(id, imageSource) {
        var img = document.getElementById(id);
        img.src = imageSource;
    }

    static changeTextContent(id, text) {
        var content = document.getElementById(id)
        content.textContent = text
    }
    static hideCards(playerID) {
        var card1 = document.getElementById(playerID + 'c1')
        card1.style.visibility = "hidden";
        var card2 = document.getElementById(playerID + 'c2')
        card2.style.visibility = "hidden";
    }

}

class Player {
    constructor(robot, name, id) {
        this.isrobot = robot;
        this.name = name;
        this.id = id;
        this.money = 200;
        this.card1 = ''; 
        this.card2 = '';
        this.active = true;  
        this.inRound = true;
        this.isTurn = false;   
        this.bet = 0;
        Frontend.changeTextContent(this.id + 'p1', this.money)
        Frontend.changeTextContent(this.id + 'p2', '')


    }

    async promptMove() {
        console.log(this.card1);
        console.log(this.card2);
        console.log("test1");
        document.getElementById("myRange").setAttribute("max", this.money);
        Frontend.showDiv('actionContainer');
        Frontend.changeImage(this.id + 'c1', Utils.translateCard(this.card1));
        Frontend.changeImage(this.id + 'c2', Utils.translateCard(this.card2));
        var response = await asyncAwaitUserResponse();
        console.log("response responded to " + response);
        Frontend.changeImage(this.id + 'c1', Utils.translateCard('back'));
        Frontend.changeImage(this.id + 'c2', Utils.translateCard('back'));

        // this.isTurn = true;
        // while (this.isTurn == true) {
        // }
        // Frontend.hideDiv('actionContainer')
        // setTimeout(this.delayedFunction, 3000)
        return response;

    }

}

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
        for (var player of players) {
            this.player = player;
            const cards = this.pockets.pop();
            this.player.card1 = cards[0];
            this.player.card2 = cards[1];
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
// for (let card of test.board) {
//     console.log(card)
// }

// console.log('space')

// for (let p of players) {
//     for (let c of p.cards) {
//         console.log(c)
//     }
//     console.log('')
// }
// console.log(p1.cards)
// console.log(test.board)
// console.log('lgop')
// console.log(test.flop)
// for (let c of test.flop) {
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
    constructor(littleBlind=0) {
        this.littleBlind = littleBlind
        this.activePlayers = players.filter(player => player.active === true);
        console.log(this.activePlayers)
        this.dealtCards = new DealCards(this.activePlayers)
        this.card1 = this.dealtCards.board[0];
        this.card2 = this.dealtCards.board[1];
        this.card3 = this.dealtCards.board[2];
        this.card4 = this.dealtCards.board[3];
        this.card5 = this.dealtCards.board[4];
        this.active = true;
        this.pot = 0;
        this.minBet = 0;
        this.start = null;

        // cards are dealt/assigned to each player and board
        // this.bettingRound(['back', 'back', 'back', 'back', 'back'], this.activePlayers);
        // if (this.active) {
        //     this.bettingRound([this.card1, this.card2, this.card3, 'back', 'back'])
        // }
    }
    async initialize() {
        let start=false;
        await this.bettingRound(['back', 'back', 'back', 'back', 'back'], this.activePlayers, this.littleBlind, start=true);
        await this.bettingRound([this.card1, this.card2, this.card3, 'back', 'back'], this.activePlayers, this.littleBlind);
        await this.bettingRound([this.card1, this.card2, this.card3, this.card4, 'back'], this.activePlayers, this.littleBlind);
        await this.bettingRound([this.card1, this.card2, this.card3, this.card4, this.card5], this.activePlayers, this.littleBlind);
    }
    
    async bettingRound(cards, players, littleBlindPlayer, start=false){
        // console.log(this.activePlayers);
        // console.log(players);
        this.minBet = 0;
        currentBet = 0;
        let orderedPlayers = [];
        // console.log(players);
        // console.log(littleBlindPlayer, 'lb player')
        for (let j = 0; j < players.length; j++) {
            // changes the small and big blind each round
            // console.log(players[(littleBlindPlayer + j) % players.length])
            orderedPlayers.push(players[(littleBlindPlayer + j) % players.length])
        }
        console.log(orderedPlayers)
        // sets the board
        for (let i = 1; i <= 5; i++) {
            // console.log(cards[i-1])
            Frontend.changeImage('card' + i.toString() + 'Image', Utils.translateCard(cards[i - 1]))

        }
        if (start) {
            orderedPlayers[0].money -= lbAmount;
            this.pot += lbAmount;
            this.updateFrontend(orderedPlayers[0])
            orderedPlayers[1].money -= bbAmount;
            this.pot += bbAmount;
            this.minBet = bbAmount;
            this.updateFrontend(orderedPlayers[1])
            orderedPlayers.push(orderedPlayers[0])
            orderedPlayers.push(orderedPlayers[1])
            orderedPlayers.splice(0, 2)
        }

        // players' turns
        for (var player of orderedPlayers) {
            console.log(orderedPlayers)
            console.log(player)
            console.log(player.inRound)
            if (player.inRound) {
                currentBet = this.minBet;
                // playerAction will be a type array with information about user's action
                // playerAction will modify player's information in the Player Class, and
                // will modify game information here below
                this.checkcallHandler(player);
                var playerAction = await player.promptMove();
                console.log(this.pot, this.minBet, 'intitial')
                if (playerAction[0] == 'raise') {
                    
                    this.pot += playerAction[1] + this.minBet;
                    this.minBet += playerAction[1];
                    player.money -= playerAction[1];
                    this.updateFrontend(player);

                } else if (playerAction[0] == 'checkcall') {
                    player.money -= playerAction[1];
                    this.pot += playerAction[1];
                    this.updateFrontend(player)

                } else if (playerAction[0] == 'fold') {
                    // already taken care of in promptMove
                    player.inRound = false;
                    Frontend.hideCards(player.id)
                }
                console.log(this.pot, this.minBet, 'final')




            }
        }
    }
    checkcallHandler(activePlayer) {
        if (this.minBet > 0) {
            if (activePlayer.money >= this.minBet) {
            Frontend.changeTextContent('checkcallDisplay', 'Call: ' + this.minBet)
            } else {
            Frontend.changeTextContent('checkcallDisplay', 'Call: ' + activePlayer.money)
            }
        } else {
            Frontend.changeTextContent('checkcallDisplay', 'Check')
        }
    }
    updateFrontend(player) {
        Frontend.changeTextContent('potAmount', this.pot)
        Frontend.changeTextContent('roundInfoParagraph', 'Call: ' + this.minBet)
        Frontend.changeTextContent(player.id + 'p1', player.money)

    }
}

class Orbit {
    constructor() {

    }
    async initialize() {
        let hand = new Hand();
        hand.initialize();


        
    }

}

// want to init UI, then automatically(?) prompt Hand to handle a bettinground
// within Hand, we want to deal cards to active players first, then start the first
// bettinground with input 5 cards facedown. Then iterate through bettingroudn with flop, turn
// river. Then if players are stil "in" round show cards and calculate winner 



function main() {
    // Frontend.hideDiv("actionContainer")
    // Frontend.hideDiv("card5")
    // Frontend.hideDiv("cardContainer")
    // Frontend.changeImage("card1Image", "images/cards/clubs_2.png")
    p1 = new Player(false, username, 'p1');
    p2 = new Player(false, "Stephen", 'p2');
    p3 = new Player(false, "Alyssa", 'p3');
    p4 = new Player(false, "Eric", 'p4');
    p5 = new Player(false, "Alex", 'p5');


    players = [p1, p3, p2, p5, p4];

    var inTurn = false;



    let orbit = new Orbit;
    orbit.initialize();
    return null
}

class Actions {
    constructor() {

    }

    static raiseAction() {
        console.log("raise")
        userResponse = ['raise', document.getElementById("myTextbox").value]
        setUserAction('raise')
    }

    static checkcallAction() {
        console.log("check call")
        userResponse = ['checkcall', currentBet]
        setUserAction('checkcall')
        
    }

    static foldAction() {
        console.log("fold")
        userResponse = ['fold', '']
        setUserAction('fold')
    }
    static response(){
        const resp = actionFunction()
        return resp
    }

    static getIsTurnPlayer() {
        for (var player of players) {
            if (player.isTurn == true) {
                return player
            }
        }
    }

}

class Utils {
    constructor() {}
    static translateCard(card){
        // card is a set of string vals, ex ['H', '4']
        // returns path of image representing card
        // exception is 'back'
        if (card == 'back') {
            return '/images/cards/back.png'
        } else return cardDict[card.join("")]
    }


    

}



main();
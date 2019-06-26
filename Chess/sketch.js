var images = [];
var tempMaxDepth = 3;
var whiteAI = false;
var depthMinus;
var MoveState = false;
var MoveStatePiece;
var whitesMove = true;
var tileSize = 100;
var blackAI = true;
var depthPlus;
var moveCounter = 10;
var ThinkingDepth;
var scoredisplay;
var Mlem;
var aienable=true;
function setup() {
    htmlStuff();
    createCanvas(800, 800);
    for (var i = 1; i < 13; i++) {
		if(i<10)
        images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_0" + i + ".png"));
		else
		images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_" + i + ".png"));
    }
    Mlem = new Board();
}
function mlem()
{
	aienable=!aienable;
}
function draw() {
    background(100);
    showGrid();
    Mlem.show();
	if(aienable)
	{
		runAIs();
	}
}

function runAIs() {
    maxDepth = tempMaxDepth;
    if (!Mlem.isDead() && !Mlem.hasWon()) {
        if (blackAI) {
            if (!whitesMove) {
                if (moveCounter < 0) {
                    Mlem = maxFunAB(Mlem, -400, 400, 0);
                    print(Mlem);
                    whitesMove = true;
                    moveCounter = 10;
                } else {
                    moveCounter--;
                }
            }
        }
        if (whiteAI) {
            if (whitesMove) {
                if (moveCounter < 0) {
                    Mlem = minFunAB(Mlem, -400, 400, 0);
                    print("Mlem", Mlem);
                    whitesMove = false;
                    moveCounter = 10;
                } else {
                    moveCounter--;
                }
            }
        }
    }
}

function showGrid() {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if ((i + j) % 2 == 1) {
                fill(0);
            } else {
                fill(240);
            }
            noStroke();
            rect(i * tileSize, j * tileSize, tileSize, tileSize);
        }
    }
}

function keyPressed() {}

function mousePressed() {
    var x = floor(mouseX / tileSize);
    var y = floor(mouseY / tileSize);
    if (!Mlem.isDone()) {
        if (!MoveState) {
            MoveStatePiece = Mlem.getPieceAt(x, y);
            if (MoveStatePiece != null && MoveStatePiece.white == whitesMove) {

                MoveStatePiece.MoveStateThisPiece = true;
            } else {
                return;
            }
        } else {
            if (MoveStatePiece.canMove(x, y, Mlem)) {
                MoveStatePiece.move(x, y, Mlem);
                MoveStatePiece.MoveStateThisPiece = false;
                whitesMove = !whitesMove;
            } else {
                MoveStatePiece.MoveStateThisPiece = false;
            }
        }
        MoveState = !MoveState;
    }
}

function Reset() {
    Mlem = new Board();
}

function htmlStuff() {
	
    ThinkingDepth = createDiv("Thinking " + maxDepth + " moves ahead");
    scoredisplay = createDiv("Score " + 0);
    depthMinus = createButton("-");
    depthPlus = createButton('+');
    rset = createButton('Reset');
    rset.mousePressed(Reset);
    EnableAI = createButton('EnableAI');
    EnableAI.mousePressed(mlem);
    depthPlus.mousePressed(plusDepth);
    depthMinus.mousePressed(minusDepth);
    createP(
        ""
    )
}

function minusDepth() {
    if (tempMaxDepth > 1) {
        tempMaxDepth = tempMaxDepth - 1;
        ThinkingDepth.html("Thinking " + tempMaxDepth + " moves ahead");
    }
}

function plusDepth() {
    if (tempMaxDepth < 5) {
        tempMaxDepth = tempMaxDepth + 1;
        ThinkingDepth.html("Thinking " + tempMaxDepth + " moves ahead");
    }
}
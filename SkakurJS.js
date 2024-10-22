const manager = new GameStateManager();

function setup() {
  let c = createCanvas(415, 800);
  textAlign(CENTER, BASELINE);
  let x = (windowWidth - width) / 2;  
  let y = (windowHeight - height) / 2;
  c.position(x, y);  // ny positionering af canvas-objektet
  manager.opretGameState("menu", new MenuSkærm());
  manager.opretGameState("spil", new SpilSkærm());
  manager.skiftGameState("menu");
}
function draw() {
  manager.runState();
}
function mouseClicked() {
  manager.aktuelleSkærm.musKlikket();
}

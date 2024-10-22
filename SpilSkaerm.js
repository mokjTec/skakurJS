class SpilSkærm {

  constructor() {
    this.knapSpil = new ButtonCircle(75, 75, 75, color(175, 0, 0), color(100, 0, 0));
    this.knapRyk = new ButtonCircle(width/2, height/2, 300, color(255,255,255,230), color(175));
    this.skift = false;
    this.felt = width/6;
    this.tid1 = 0;
    this.tid2 = 0;
    this.spiller1True = true;
    this.savedTime = millis();
  }

  run() {
    let passedTime = millis() - this.savedTime;
    if (passedTime >= 1000) {
      if (this.spiller1True === true)
        this.tid1 -= 1;
      else
        this.tid2 -= 1;
      this.savedTime = millis();
    }
    
    this.tegnSkak();
    this.knapSpil.draw();
    stroke(0); strokeWeight(3);
    this.knapRyk.draw();
    fill(200,0,0);
    noStroke();
    text("HVID: " + this.tid1, width/2, height/2.5);
    text("SORT: " + this.tid2, width/2, height/1.6);
  }
  
  tegnSkak() {
    for (let i = 0; i < width; i +=this.felt) {
      for (let y = 0; y < height + this.felt; y +=this.felt) {
        this.skift = !this.skift;
        if (this.skift === true)
          fill(0);
        else
          fill(255);
          
        rect(i, y, this.felt, this.felt);
      }
    }
  }  sætTid(minutter){
    this.tid1 = minutter * 60;
    this.tid2 = this.tid1;
  
  }

  musKlikket() {
    if (this.knapSpil.overCircle()) {
      manager.skiftGameState("menu");
    }
    if (this.knapRyk.overCircle()) {
      this.spiller1True = !this.spiller1True;
    }
  }
}

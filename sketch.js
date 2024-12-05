//This is a character generator. You can create the character you want by entering different parameters.
//Just enter the amount of pixels you want to add to the character's setting
//For example, I want the hair to be 5 pixels long, then enter 5 at the "back hair length"
//also try clicking somewhere to change the bg colors!!
let colors = [
  [239, 162, 131],
  [244, 209, 194],
  [251, 238, 233],
  [251, 244, 233],
  [248, 210, 149],
  [244, 194, 116],
  [197, 143, 87],
  [63, 37, 10],
  [91, 51, 8],
  [121, 75, 27],
  [142, 82, 18],
  [158, 101, 14],
];
let input;
let input2;
let input3;
let input4;
let value = 0;
let value2 = 1;
let value3 = 2;
let value4 = 0;
let r = 255, g = 255, b = 150;

function setup() {
  createCanvas(400, 400);
  let label = createElement("p", "Back Hair Length(suggested number1-16):");
  label.position(10, 380);
  input = createInput();
  input.attribute("type", "number");
  input.position(10, 420);
  input.input(updateValue);

  let label2 = createElement("p", "Side Hair Length(suggested number1-16):");
  label2.position(10, 430);
  input2 = createInput();
  input2.attribute("type", "number");
  input2.position(10, 470);
  input2.input(updateValue2);

  let label3 = createElement("p", "Front hair Length(suggested number1-4):");
  label3.position(10, 480);
  input3 = createInput();
  input3.attribute("type", "number");
  input3.position(10, 520);
  input3.input(updateValue3);

  let label4 = createElement("p", "Body Size(suggested number1-9):");
  label4.position(10, 530);
  input4 = createInput();
  input4.attribute("type", "number");
  input4.position(10, 580);
  input4.input(updateValue4);

  frameRate(1);
}

function draw() {
 background(r, g, b);
  //noLoop();

  let backhairlenth = value;
  let sidehairvalue = value2;
  let fronthairlenth = value3;
  let bodysize = value4 / 2;

  let randomColor = random(colors);
  let gridSize = 20;
  for (let y = 0; y < height; y += gridSize) {
    for (let x = 0; x < width; x += gridSize) {
      noFill()
      rect(x, y, gridSize, gridSize);
      rhair = random(0, 255);
      ghair = random(0, 255);
      bhair = random(0, 255);
      reye = random(0, 255);
      geye = random(0, 255);
      beye = random(0, 255);
      rshirt = random(0, 255);
      gshirt = random(0, 255);
      bshirt = random(0, 255);

      push();
      let FaceX = map(4, 0, 20, 0, 400, true);
      let FaceY = map(5, 0, 20, 0, 400, true);
      let FaceW = map(11, 0, 20, 0, 400, true);
      let FaceH = map(backhairlenth, 0, 20, 0, 400, true);
      fill(rhair, ghair, bhair);
      rect(FaceX, FaceY, FaceW, FaceH);
      pop();

      push();
      fill(randomColor[0], randomColor[1], randomColor[2]);
      let FacX = map(6, 0, 20, 0, 400, true);
      let Facy = map(5, 0, 20, 0, 400, true);
      let FacW = map(7, 0, 20, 0, 400, true);
      let FacH = map(7, 0, 20, 0, 400, true);
      rect(FacX, Facy, FacW, FacH);

      let neckx = map(8, 0, 20, 0, 400, true);
      let necky = map(12, 0, 20, 0, 400, true);
      let neckw = map(3, 0, 20, 0, 400, true);
      let neckh = map(2, 0, 20, 0, 400, true);
      rect(neckx, necky, neckw, neckh);
      pop();

      push();
      fill(rshirt, gshirt, bshirt);
      let clothx = map((4-bodysize), 0, 20, 0, 400, true);
      let clothy = map(15, 0, 20, 0, 400, true);
      let clothw = map((11+bodysize*2), 0, 20, 0, 400, true);
      let clothh = map(6, 0, 20, 0, 400, true);
      rect(clothx, clothy, clothw, clothh);
      pop();

      push();
      fill(randomColor[0], randomColor[1], randomColor[2]);
      let armx = map((4-bodysize), 0, 20, 0, 400, true);
      let army = map(18, 0, 20, 0, 400, true);
      let armw = map((11+bodysize*2), 0, 20, 0, 400, true);
      let armh = map(2, 0, 20, 0, 400, true);
      rect(armx, army, armw, armh);
      pop();

      push();
      fill(rshirt, gshirt, bshirt);
      let shirtx = map((6-bodysize), 0, 20, 0, 400, true);
      let shirty = map(14, 0, 20, 0, 400, true);
      let shirtw = map((7+bodysize*2), 0, 20, 0, 400, true);
      let shirth = map(6, 0, 20, 0, 400, true);
      rect(shirtx, shirty, shirtw, shirth);
      pop();

      push();
      fill(reye, geye, beye);
      let leyex = map(8, 0, 20, 0, 400, true);
      let leyey = map(8, 0, 20, 0, 400, true);
      let leyew = map(1, 0, 20, 0, 400, true);
      let leyeh = map(2, 0, 20, 0, 400, true);
      rect(leyex, leyey, leyew, leyeh);

      let reyex = map(10, 0, 20, 0, 400, true);
      let reyey = map(8, 0, 20, 0, 400, true);
      let reyew = map(1, 0, 20, 0, 400, true);
      let reyeh = map(2, 0, 20, 0, 400, true);
      rect(reyex, reyey, reyew, reyeh);
      pop();

      push();
      fill(198, 30, 30);
      let mouthx = map(9, 0, 20, 0, 400, true);
      let mouthy = map(11, 0, 20, 0, 400, true);
      let mouthw = map(1, 0, 20, 0, 400, true);
      let mouthh = map(1, 0, 20, 0, 400, true);
      rect(mouthx, mouthy, mouthw, mouthh);
      pop();

      push();
      fill(rhair, ghair, bhair);
      let uhairx = map(5, 0, 20, 0, 400, true);
      let uhairy = map(4, 0, 20, 0, 400, true);
      let uhairw = map(9, 0, 20, 0, 400, true);
      let uhairh = map(fronthairlenth, 0, 20, 0, 400, true);
      rect(uhairx, uhairy, uhairw, uhairh);

      let lhairx = map(4, 0, 20, 0, 400, true);
      let lhairy = map(4, 0, 20, 0, 400, true);
      let lhairw = map(3, 0, 20, 0, 400, true);
      let lhairh = map(sidehairvalue, 0, 20, 0, 400, true);
      rect(lhairx, lhairy, lhairw, lhairh);

      let rhairx = map(12, 0, 20, 0, 400, true);
      let rhairy = map(4, 0, 20, 0, 400, true);
      let rhairw = map(3, 0, 20, 0, 400, true);
      let rhairh = map(sidehairvalue, 0, 20, 0, 400, true);
      rect(rhairx, rhairy, rhairw, rhairh);
      pop();
    }
  }
}
function updateValue() {
  value = int(input.value());
}
function updateValue2() {
  value2 = int(input2.value());
}
function updateValue3() {
  value3 = int(input3.value());
}
function updateValue4() {
  value4 = int(input4.value());
}
function mousePressed() {
  r = map(mouseX, 0, width, 0, 255);
  g = map(mouseY, 0, height, 0, 255);
}

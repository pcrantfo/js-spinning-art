function setup() {
  var canv = constrain(windowWidth, 500, 1200);
  createCanvas(canv-20, canv*0.6470588235294118-20);
  // background('black');
}

function draw() {
  
  // 8 color themes
  var theme = [['#00BAC6', '#72823C', '#48785D', '#214734'], ['#6BCCE3', '#792A16', '#C54227', '#F04D23'], ['#F8B34A', '#C65A28', '#927466', '#8385C0'], ['#90CAEE', '#19415A', '#C8B155', '#F2E88C'], ['#00BAC6', '#05733B', '#62BD68', '#7F321A'], ['#00BAC6', '#7F321A', '#01737A', '#F8B34A'], ['#01737A', '#F8B34A', '#D17F28', '#794B1E'], ['#625B51', '#A58CC1', '#905FA8', '#5D5163']]
  
  // check if key is in number
  var nums = ['0', '1', '2', '3', '4', '5', '6', '7'];
  
  // change colors based on number
  if (key in nums) {
    var color3 = theme[key][0];
    var color2 = theme[key][1];
    var color1 = theme[key][2];
    var color0 = theme[key][3];
  } else {
    var color3 = theme[0][0];
    var color2 = theme[0][1];
    var color1 = theme[0][2];
    var color0 = theme[0][3];
  }
  
  // white background
  fill('white');
  strokeWeight(0);
  rect(0, 0, width, height);
  
  // middle page translation coordinates
  var xcoor = width/2;
  var ycoor = height/2;
  
  // start shape rotation
  strokeWeight(0);
  push();
  translate(xcoor, ycoor);
  var srot = atan2(mouseY-height/2, mouseX-width/2);
  rotate(srot);
  
  // top triangle
  fill(color1);
  triangle(0.1673504901960784*width-xcoor, 0.1515151515151515*height-ycoor, 0.341405637254902*width-xcoor, 0.6174621212121212*height-ycoor, 0.8636225490196078*width-xcoor, 0.1515151515151515*height-ycoor);
  
  // left triangle
  fill(color2);
  triangle(0.0980392156862745*width-xcoor, 0.7033901515151515*height-ycoor, 0.0980392156862745*width-xcoor, 0.3448011363636364*height-ycoor, 0.1985110294117647*width-xcoor, 0.6137443181818182*height-ycoor);
  
  // right quad
  quad(0.466359068627451*width-xcoor, 0.7246628787878788*height-ycoor, 0.5126164215686275*width-xcoor, 0.8484848484848485*height-ycoor, 0.9019607843137255*width-xcoor, 0.8484848484848485*height-ycoor, 0.9019607843137255*width-xcoor, 0.3359924242424242*height-ycoor);
  
  // bottom triangle
  fill(color0);
  triangle(0.1805367647058824*width-xcoor, 0.8484848484848485*height-ycoor, 0.3234644607843137*width-xcoor, 0.7209469696969697*height-ycoor, 0.3711200980392157*width-xcoor, 0.8484848484848485*height-ycoor);
  
  // end shape rotation
  pop();
  
  // start line rotation
  push();
  translate(xcoor, ycoor);
  var lrot = atan2(mouseY-height/2, mouseX-width/2);
  rotate(-lrot);
  
  // blue lines
  stroke(color3);
  strokeWeight(0.005719362745098*width);
  
  line(0.1107365196078431*width-xcoor, 0.0757575757575758*height-ycoor, 0.1668762254901961*width-xcoor, 0.226032196969697*height-ycoor);
  line(0.3004705882352941*width-xcoor, 0-ycoor, 0.390515931372549*width-xcoor, 0.2410359848484848*height-ycoor);
  line(0.325953431372549*width-xcoor, 0-ycoor, 0.4111470588235294*width-xcoor, 0.2280454545454545*height-ycoor);
  line(0.5722879901960784*width-xcoor, 0.0757575757575758*height-ycoor, 0.5996004901960784*width-xcoor, 0.1488674242424242*height-ycoor);
  line(0.6675649509803922*width-xcoor, 0.3307973484848485*height-ycoor, 0.837031862745098*width-xcoor, 0.1795890151515152*height-ycoor);
  line(0.6759705882352941*width-xcoor, 0.3626799242424242*height-ycoor, 0.9509803921568627*width-xcoor, 0.1172992424242424*height-ycoor);
  line(0.727203431372549*width-xcoor, 0.6539280303030303*height-ycoor, 0.7745098039215686*width-xcoor, 0.611717803030303*height-ycoor);
  line(0.8331237745098039*width-xcoor, 0.773967803030303*height-ycoor, 0.8892634803921569*width-xcoor, 0.9242424242424242*height-ycoor);
  line(0.609484068627451*width-xcoor, 0.7589640151515152*height-ycoor, 0.6995294117647059*width-xcoor, height-ycoor);
  line(0.5888541666666667*width-xcoor, 0.7719545454545455*height-ycoor, 0.674046568627451*width-xcoor, height-ycoor);
  line(0.4003995098039216*width-xcoor, 0.8511325757575758*height-ycoor, 0.4277120098039216*width-xcoor, 0.9242424242424242*height-ycoor);
  line(0.162968137254902*width-xcoor, 0.8204109848484848*height-ycoor, 0.3324350490196078*width-xcoor, 0.6692026515151515*height-ycoor);
  line(0.0490196078431373*width-xcoor, 0.8827007575757576*height-ycoor, 0.3240294117647059*width-xcoor, 0.6373200757575758*height-ycoor);
  line(0.2254901960784314*width-xcoor, 0.388282196969697*height-ycoor, 0.272796568627451*width-xcoor, 0.3460719696969697*height-ycoor);
  
  // end line rotation
  pop();
  
  // white outer border
  noFill();
  stroke('white');
  strokeWeight(width*0.0245098039215686);
  rect(width*0.0122549019607843, width*0.0122549019607843, width-width*0.0245098039215686, height-width*0.0245098039215686);
  
  // inner colored border
  stroke(color0);
  strokeWeight(width*0.0245098039215686);
  rect(width*0.0245098039215686, width*0.0245098039215686, width-width*0.0490196078431373, height-width*0.0490196078431373);
}

function windowResized() {
  var canv = constrain(windowWidth, 500, 1200);
  resizeCanvas(canv-20, canv*0.6470588235294118-20);
}
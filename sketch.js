var hours;
var minutes;
var sec;
var getSecAngle;
var getMinAngle;
var getHrsAngle;
function setup() {
  createCanvas(600,600)
  background('hotpink')

  angleMode(DEGREES)
}

function draw() {
  background("black")
  hours = hour()
  minutes = minute()
  sec= second()
  getSecAngle = map(sec ,  0 , 60 , 0, 360) 
  getMinAngle = map(minutes ,  0 , 60 , 0, 360) + map(getSecAngle , 0 , 360, 0 ,6 )
  getHrsAngle = map(hours % 12 ,  0 , 12 , 0, 360) + map(getMinAngle , 0 , 360, 0 ,30 )


 // text(hours + ":" + minutes + ":" + sec , 300,300)
  translate(300, 300)
  
  rotate(-90)
  
  noFill()
  strokeWeight(10)
  stroke("cyan")
  
  arc(0, 0, 300, 300, 0, getSecAngle );
  stroke("red")
  arc(0, 00, 250, 250, 0, getMinAngle )
  
  stroke("hotpink")
  
  arc(0,0, 200, 200, 0, getHrsAngle )
  

  push()
  strokeWeight(10)
  stroke("cyan")

  rotate(getSecAngle)
  line( 0 ,0 ,100 ,0)

  pop()

  push()
  strokeWeight(10)
  stroke("red")
  rotate(getMinAngle)
  line( 0 ,0 ,80 ,0)

  pop()

  push()
  stroke("hotpink")
  
  rotate(getHrsAngle)
  strokeWeight(10)
  line( 0 ,0 ,60 ,0)

  pop()



}

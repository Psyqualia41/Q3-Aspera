const scene= new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const renderer = new THREE.WebGLRenderer();
renderer.setSize ( 800, 800 );
document.body.appendChild( renderer.domElement );


//Square Shape
const squareGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const squareMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const dvd = new THREE.Mesh( squareGeometry, squareMaterial );
scene.add( dvd );

camera.position.z = 1;

// Colors 
const colors = [
    new THREE.Color(0x0000ff), // Blue
    new THREE.Color(0xff0000), // Red
    new THREE.Color(0xffff00), // Yellow
    new THREE.Color(0x3DB919)  //Green

];

// Speed and color index as well as bounces
let colorIndex = 1; 
let xSpeed = 0.0100;
let ySpeed = 0.0100;
let dvdBounces = 7;

// Function
function dvdBouncesLeft() {
    dvdBounces -=1;
    console.log(" DVD BOUNCES LEFT: " + dvdBounces);
}
function stop() {
    xSpeed = 0;
    ySpeed = 0;
}

// Animation
function animate() {
    requestAnimationFrame( animate );
    
    dvd.position.x += xSpeed;
    if (dvd.position.x > 0.82)
    {
        xSpeed = -0.0029;
        colorIndex = (colorIndex + 1) % colors.length; //next color
        dvd.material.color.copy(colors[colorIndex]);
        dvd.scale.x -= 0.15;
        dvd.scale.y -= 0.15;
        dvdBouncesLeft();
    }
    if (dvd.position.x < -0.82)
    {
        xSpeed = 0.0029;
        colorIndex = (colorIndex + 1) % colors.length; 
        dvd.material.color.copy(colors[colorIndex]);
        dvd.scale.x -= 0.15;
        dvd.scale.y -= 0.15;
        dvdBouncesLeft();
    }
    dvd.position.y += ySpeed;
    if (dvd.position.y > 0.82)
    {
        ySpeed = -0.0039;
        colorIndex = (colorIndex + 1) % colors.length; 
        dvd.material.color.copy(colors[colorIndex]);
        dvd.scale.x -= 0.15;
        dvd.scale.y -= 0.15;
        dvdBouncesLeft();
    }
    if (dvd.position.y < -0.82)
    {
        ySpeed = 0.0039;
        colorIndex = (colorIndex + 1) % colors.length; 
        dvd.material.color.copy(colors[colorIndex]);
        dvd.scale.x -= 0.15;
        dvd.scale.y -= 0.15;
        dvdBouncesLeft();
    } else if (dvdBounces <=0) {
        dvd.scale.set(0);
        stop();
    }

    renderer.render( scene, camera );
}
animate();
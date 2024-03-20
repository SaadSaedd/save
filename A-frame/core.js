const scene = document.querySelector('a-scene');

var previoustime, currentTtime, deltaTime;
const cam = document.getElementById("camera");
const keyCodeAscend = 69;
const keyCodeDescend = 81;
let direction = 0, up = false, down = false;
const speed = 5;



Setup ();//wall
function Setup() {
    
    
    
    previoustime = new Date();

    Animate();

    document.addEventListener("keydown", (e)=>{
        if(e.keyCode ==keyCodeAscend) up = true;
        if(e.keyCode ==keyCodeDescend) down = true;

        if(up && !down) direction = 1;
        else if (down && !up) direction = -1;
        else direction = 0;
    });

    document.addEventListener("keyup", (e)=>{
        if(e.keyCode ==keyCodeAscend) up =false;
        if(e.keyCode ==keyCodeDescend) down = false;

        if(up && !down) direction = 1;
        else if (down && !up) direction = -1;
        else direction = 0;
    });

    let box = document.createElement('a-box');

    scene.appendChild(box);

    box.setAttribute('geometry' , {
    primitive: 'box' ,
    height: 3,
    width: 10,
    depth:0.3

    });

    box.setAttribute('material' , 'color', 'purple' );

    box.setAttribute('position' , {
        x: 1,
        y: 1,
        z: 1
        })

        box.setAttribute('rotation' , {
            x: 0,
            y: 0,
            z: 0
            })




    scene.appendChild(box);
}


Setup2 ();//wall L
function Setup2() {

    let box = document.createElement('a-box');

    scene.appendChild(box);

    box.setAttribute('geometry' , {
    primitive: 'box' ,
    height: 3,
    width: 10,
    depth:0.3

    });

    box.setAttribute('material' , 'color', 'purple' );

    box.setAttribute('position' , {
        x: 1,
        y: 1,
        z: 11
        })

        box.setAttribute('rotation' , {
            x: 0,
            y: 0,
            z: 0
            })




    scene.appendChild(box);
}
Setup7 ();
function Setup7() {

    let box = document.createElement('a-box');

    scene.appendChild(box);

    box.setAttribute('geometry' , {
    primitive: 'box' ,
    height: 3,
    width: 10,
    depth:0.3

    });

    box.setAttribute('material' , 'color', 'purple' );

    box.setAttribute('position' , {
        x: 1,
        y: 10,
        z: 11
        })

        box.setAttribute('rotation' , {
            x: 0,
            y: 10,
            z: 0
            })




    scene.appendChild(box);
}

Setup3 ();//backwall
function Setup3() {

    let box = document.createElement('a-box');

    scene.appendChild(box);

    box.setAttribute('geometry' , {
    primitive: 'box' ,
    height: 3,
    width: 10,
    depth:0.3

    });

    box.setAttribute('material' , 'color', 'purple' );

    box.setAttribute('position' , {
        x: 6,
        y: 1,
        z: 6
        })

        box.setAttribute('rotation' , {
            x: 0,
            y: 90,
            z: 0
            })




    scene.appendChild(box);
}



Setup4 ();//deur R
function Setup4() {

    let box = document.createElement('a-box');

    scene.appendChild(box);

    box.setAttribute('geometry' , {
    primitive: 'box' ,
    height: 3,
    width: 4.5,
    depth:0.3

    });

    box.setAttribute('material' , 'color', 'purple' );

    box.setAttribute('position' , {
        x: -4,
        y: 1,
        z: 9
        })

        box.setAttribute('rotation' , {
            x: 0,
            y: 90,
            z: 0
            })




    scene.appendChild(box);
}
Setup6 ();//deur L
function Setup6() {

    let box = document.createElement('a-box');

    scene.appendChild(box);

    box.setAttribute('geometry' , {
    primitive: 'box' ,
    height: 3,
    width: 4.5,
    depth:0.3

    });

    box.setAttribute('material' , 'color', 'purple' );

    box.setAttribute('position' , {
        x: -4,
        y: 1,
        z: 3
        })

        box.setAttribute('rotation' , {
            x: 0,
            y: 90,
            z: 0
            })




    scene.appendChild(box);
}

Setup5 ();//roof
function Setup5() {

    let box = document.createElement('a-box');

    scene.appendChild(box);

    box.setAttribute('geometry' , {
    primitive: 'box' ,
    height: 0.2,
    width: 12,
    depth:14

    });

    box.setAttribute('material' , 'color', 'purple' );

    box.setAttribute('position' , {
        x: 0,
        y: 2.5,
        z: 6 
        })

        box.setAttribute('rotation' , {
            x: 0,
            y: 90,
            z: 0
            })




    scene.appendChild(box);
}

Setup8 ();
function Setup8() {

    let box = document.createElement('a-box');

    scene.appendChild(box);

    box.setAttribute('geometry' , {
    primitive: 'box' ,
    height: 0.2,
    width: 12,
    depth:14

    });

    box.setAttribute('material' , 'color', 'purple' );

    box.setAttribute('position' , {
        x: 0,
        y: 10,
        z: 6 
        })

        box.setAttribute('rotation' , {
            x: 10,
            y: 90,
            z: 0
            })




    scene.appendChild(box);
}

function Animate(){
    requestAnimationFrame(Animate)

    currentTtime = new Date();
    deltaTime = currentTtime - previoustime;

    //console.log(deltaTime);

    let cameraPosition = cam.getAttribute("position");
    cameraPosition.y += deltaTime/1000*speed*direction;
    cam.setAttribute("postiton", cameraPosition);

    previoustime = currentTtime;
}


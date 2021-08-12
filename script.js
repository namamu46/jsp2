'use strict';

let can =document.getElementById("can");
let ctx = can.getContext("2d");
let shotjudge = 0;
let shotsitu = 0;

const shotbtn=document.getElementById("shot");
const leftbtn=document.getElementById("left");
const rightbtn=document.getElementById("right");

    let machine={
        name:"viper",
        x:100,
        y:180,
        leftmover:function(){
            machine.x-=10;
            // ctx.clearRect(0,0,can.width,can.height);
            // ctx.fillRect(machine.x,machine.y,10,10);
            console.log(machine.x,machine.y,);
            },

        rightmover:function(){
            machine.x+=10;
            // ctx.clearRect(0,0,can.width,can.height);
            // ctx.fillRect(machine.x,machine.y,10,10);
            console.log(machine.x,machine.y,);
            },
        }

    let ammo={
        name:"ammo",
        // x:machine.x,
        // y:machine.y,
        sw:0,
        MoveVol:0,
        shotmover:function(){
            if(ammo.sw==0){
                ammo.x=machine.x;
                ammo.y=machine.y;
            ammo.sw=1;
            ammo.MoveVol=2;
            console.log(ammo.x, ammo.y);
            }
            
        },
    }

    


shotbtn.addEventListener("click",ammo.shotmover);
leftbtn.addEventListener("click",machine.leftmover);
rightbtn.addEventListener("click",machine.rightmover);

    // ctx.fillRect(50 ,50,10,10);

            // ctx.clearRect(0,0,can.width,can.height);
            // ctx.fillRect(machine.x,machine.y,10,10);


function Game(){
    ctx.clearRect(0,0,can.width,can.height);
    //move
        ammo.y-=ammo.MoveVol;
         if(ammo.y<10){ 
            ammo.MoveVol=0;
            ammo.sw=0;
        }

   

    //draw
    if(ammo.sw==1){
        ctx.fillRect(ammo.x,ammo.y,10,10);
    }
    
    ctx.fillRect(machine.x,machine.y,10,10);
requestAnimationFrame(Game);
}

 Game();

// (()=>{
    
//     requestAnimationFrame(Game);
// }
// )();

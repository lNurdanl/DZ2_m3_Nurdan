const block = document.querySelector(".block")
let positionx = 0
let positiony = 0
const move = () => {
    if (positionx <= 440 && positiony == 0) {
        positionx += 16;
        block.style.left = `${positionx}px`
        setTimeout(move, 50);
    } else if (positiony <=440 && positionx == 448){
        positiony += 16;
        block.style.top = `${positiony}px`
        setTimeout(move, 50);
    } else if (positionx > 0 && positiony == 448){
        positionx -= 16;
        block.style.left = `${positionx}px`
        setTimeout(move, 50);
    } else if (positiony >= 0){
        positiony -= 16;
        block.style.top = `${positiony}px`
        setTimeout(move, 50);}
};
move();

var time = 0;
time1 = setInterval(
    function(){
        time = time + 1;
        console.log("С момента запуска программы прошло:" + time + " секунд");
        if (time > 59){
            clearInterval(time1)
        }
    },1000);
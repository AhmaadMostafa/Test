let btn_container_one = document.querySelector('.container-one'); 
let btn_container_two = document.querySelector('.container-two'); 
let btn_container_three = document.querySelector('.container-three'); 
let btn_container_four = document.querySelector('.container-four');
let btn = document.querySelectorAll('.container-one button');
let btn_Yes = document.querySelector('.yes');
let btn_No = document.querySelector('.no');


btn.forEach((e) =>{
    e.addEventListener('click'  , () =>{
        btn_container_one.style.display = "none";
        btn_container_two.style.display = "block";
    })
})

btn_Yes.addEventListener('click' , ()=>{
    btn_container_two.style.display = "none";
    btn_container_three.style.display = "block";
})

btn_No.addEventListener('click' , ()=>{
    btn_container_two.style.display = "none";
    btn_container_four.style.display = "block";
});

document.addEventListener('DOMContentLoaded' , ()=>{
    let display = document.getElementById('counter');
    const count = (duration)=>{
        let time = duration;
        var minutes , seconds;
        let valid = setInterval(() =>{
            minutes = parseInt(time / 60);
            seconds = parseInt(time % 60);
            seconds = seconds < 10 ? '0' + seconds : seconds;
            display.textContent = `${minutes}:${seconds}`;
            console.log(typeof(seconds));
            if(seconds < '00'){
                clearInterval(valid);
                display.textContent = "00:00";
            }
            time--;
        } , 1000) 
    }
    count(120);
})
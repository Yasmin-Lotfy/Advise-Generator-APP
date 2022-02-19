let cont = document.querySelector("#content h3 span");
let avd = document.querySelector("#content p");
let btn = document.querySelector('button')

cont.innerHTML = "D"


async function getRandomQ(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json()
    cont.innerHTML =data.slip.id
    avd.innerHTML = data.slip.advice;

    console.log(data)
    console.log(data.slip.id);
    console.log(data.slip.advice);


}

btn.addEventListener('click',getRandomQ)

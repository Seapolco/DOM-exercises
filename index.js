const container = document.querySelector("#container");
//const body 

const redP = document.createElement('p');
redP.textContent = "Hey I'm red!";
redP.style.color = 'red'
container.appendChild(redP);

const blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = 'blue';

container.insertAdjacentElement('afterend', blueH3);

const pinkDiv = document.createElement('div');
pinkDiv.setAttribute('style', 'border: solid black; background: pink');

const divH1 = document.createElement('div');
divH1.innerText = "I'm in a div!";

const divP = document.createElement('p');
divP.textContent = 'ME TOO!';


pinkDiv.appendChild(divH1);
pinkDiv.appendChild(divP);

blueH3.insertAdjacentElement('afterend', pinkDiv);

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    alert('Hello World');
    e.target.style.background = 'yellow';
});

const tracker = document.querySelector(".tracker");
tracker.style.backgroundColor = 'Green';
tracker.textContent = 'Start';

let timeSpent = document.querySelector(".timeSpent");

let times = [];

let start, stop, elapsed;

tracker.addEventListener('click', (e) => {
   // let times = [];
   


    if(e.target.textContent === 'Start') {
        e.target.textContent = 'Stop';
        e.target.style.backgroundColor = 'red';
        start = new Date().getTime();
        console.dir(start)
        //times.push(start)
    } else {
        e.target.textContent = 'Start';
        e.target.style.backgroundColor = 'Green';
        //stop = new Date();
        //console.log(stop)
        elapsed = new Date().getTime() - start;
        let hundredElapsed = elapsed
        let roundedElapsed = Math.round((hundredElapsed /1000));
        let date = new Date(null);
        date.setSeconds(roundedElapsed);

        let format = date.toISOString().substring(11,19)
        //.substr(11, 8);
        timeSpent.textContent = format
        console.log(typeof format);
    }

});




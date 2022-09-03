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




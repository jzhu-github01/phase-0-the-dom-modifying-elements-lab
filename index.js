const element = document.querySelector('main#main');
element.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'J is the champion.';
document.body.append('h1');
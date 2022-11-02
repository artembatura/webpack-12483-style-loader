import './styles.css';

const divElement = document.createElement('div');

divElement.className = 'myClass';
divElement.textContent = 'Hello world!';

document.getElementById('root').appendChild(divElement);

import _ from 'lodash';
import printMe from './print.js';
import './styles.css';
import './styles-less.less';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    let sss = () => { 
        console.warn('test123555');
        printMe();
     };

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me2 and check the console!';
    btn.onclick = sss;

    element.appendChild(btn);

    return element;
}

let element = component();
document.body.appendChild(element);

console.log('我是js文件');
const h1El = document.createElement('h1');
h1El.appendChild(h1El.appendChild(document.createTextNode('我是js文件')));
document.body.appendChild(h1El);

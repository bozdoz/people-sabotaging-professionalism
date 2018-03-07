import data from './data.json';
import './index.scss';

const headline = document.getElementById('headline');
const container = document.getElementById('headline-container');
const nextbtn = document.getElementById('next');
const prevbtn = document.getElementById('prev');

const shuffle = (a) => {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
};

const outdata = shuffle(data.slice());
const outlen = outdata.length;
let i = 0;

const update = () => {
    let newcontent = outdata[i];

    // add links
    newcontent = newcontent.replace(/(https?:\/\/\S+)/g, (a) => (
        `<a href="${a}" target="_blank">${a}</a>`
    ));

    // replace line breaks with HTML breaks
    newcontent = newcontent.replace(/(\/\s)/g, (a) => (
        `<br />`
    ));

    headline.innerHTML = newcontent;
    container.scrollTop = 0;
};

const next = () => {
    i = (i + 1) % outlen;
    update();
};

const prev = () => {
    i = (outlen + i - 1) % outlen;
    update();
};

update();

nextbtn.addEventListener('click', next);
prevbtn.addEventListener('click', prev);

window.addEventListener('keydown', (e) => {
    const { keyCode } = e;
    if (keyCode === 37) {
        // left
        prev();
    } else if (keyCode === 39) {
        // right
        next();
    }
});

// hot reloading
if (module.hot) {
    module.hot.accept();
}

// service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
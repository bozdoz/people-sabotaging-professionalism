import data from './data.json';
import './index.scss';

// DOM elements
const headline = document.getElementById('headline');
const container = document.getElementById('headline-container');
const nextbtn = document.getElementById('next');
const prevbtn = document.getElementById('prev');

/**
* it shuffles an array
*
* @param Array a
* @return Array
*/
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

// save indices
let dataobj = {};
data.forEach((a, i) => {
    dataobj[i] = a;
});

// shuffle indices
const outkeys = shuffle( Object.keys(dataobj) );
const outlen = outkeys.length;
let i = 0;

/**
* it updates location hash
*
* @param String hash
* @return Null
*/
const updateHash = (() => {
    let fun;

    try {
        fun = window.history.replaceState.bind(window.history, {}, document.title);
    } catch (e) {
        fun = window.location.replace.bind(window.location);
    }

    return (hash) => fun(hash);
})();

/**
* it updates page content
*
*/
const update = () => {
    let original_index = outkeys[i];
    let newcontent = dataobj[ original_index ];

    // update location
    updateHash( `#${original_index}` );

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

/**
* it gets the next iteration of site content
*
*/
const next = () => {
    i = (i + 1) % outlen;
    update();
};

/**
* it gets the previous iteration of site content
*
*/
const prev = () => {
    i = (outlen + i - 1) % outlen;
    update();
};

// content index is saved to location hash
if (window.location.hash) {
    let first_index = window.location.hash.substr(1);
    if (outlen > first_index && first_index >= 0) {
        outkeys.splice(outkeys.indexOf(first_index), 1);
        outkeys.unshift(first_index);
    } else {
        console.log(`out of luck, ${outlen - 1} is the max`);
    }
}

// update the site content
update();

// listeners for click and keydown
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
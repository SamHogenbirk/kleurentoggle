
//references to HTML elements
let reference = {

    icon: document.querySelector('i'),
    menu: document.querySelector('ul'),
    list: document.querySelector('li'),
    body: document.querySelector('body'),
    title: document.querySelector('h3'),
    radio: document.querySelectorAll('input[name=colors]')
};

//event listener for menu icon
reference.icon.addEventListener('mouseover', () => {

    if (menu.classList == "pageLoad" || menu.classList == "hidden") {
        menu.classList = "visible";
    }
});

//even listener on mouseleave
reference.menu.addEventListener('mouseleave', () => {

    menu.classList = "hidden";
});

// change background function on change
reference.radio.forEach(radio => radio.addEventListener('change', function () {

    let result = this.id;
    changeBackground(result);
}));

// change background function on key
reference.body.addEventListener('keypress', function (e) {

    let result = e.key;
    changeBackground(result);
});

//bubble function for both event listeners
function changeBackground(result) {

    if (result === "rood" || result == 1) {
        reference.body.classList = 'background-red';
        reference.title.innerText = "Rood"; //change title here due to keypress
        reference.radio[0].checked = true; //add check for keypress
    } else if (result === "geel" || result == 2) {
        reference.body.classList = 'background-yellow';
        reference.title.innerText = "Geel";
        reference.radio[1].checked = true;
    } else if (result === "groen" || result == 3) {
        reference.body.classList = 'background-green';
        reference.title.innerText = "Groen";
        reference.radio[2].checked = true;
    } else if (result === "blauw" || result == 4) {
        reference.body.classList = 'background-blue';
        reference.title.innerText = "Blauw";
        reference.radio[3].checked = true;
    } else if (result === "paars" || result == 5) {
        reference.body.classList = 'background-purple';
        reference.title.innerText = "Paars";
        reference.radio[4].checked = true;
    } else if (result === "wit" || result == 6) {
        reference.body.classList = "background-white";
        reference.title.innerText = "Wit";
        reference.radio[5].checked = true;
    }

    menu.classList = "hidden";
}
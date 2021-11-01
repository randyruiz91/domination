function selectAndStrikethrough() {
    const listItem = document.querySelector('li');
    console.log(listItem);

    listItem.style.textDecoration = 'line-through';
}

function setImage(id, url) {
    const image = document.querySelector(id);
    image.style.height = '250px';
    image.src = url;
}

setImage('#image-1', 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d')
setImage('#image-2', 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d')
setImage('#image-3', 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d')

function removeArgument() {
    const argument = document.querySelector('#arguments li');
    argument.remove();
}

removeArgument();
removeArgument();

function changeIDFontSize(size, id) {
    const string = document.getElementById(id);
    string.style.fontSize = size;
}

changeIDFontSize('12px', 'title');

function addToArguments(domElement) {
    const argumentsUl = document.querySelector('#arguments');
    argumentsUl.appendChild(domElement);
}

const newElement = document.createElement('li');
newElement.innerText = 'hello world';
addToArguments(newElement);

function changeImageSize(imageSize, id) {
    const element = document.getElementById(id);
    element.style.height = `${imageSize}px`;
}
changeImageSize(30, "image-1");
changeImageSize(30, "image-2");
changeImageSize(30, "image-3");

function makeElementInvisible(element) {
    element.className = 'invisible';
}

const h1 = document.querySelector('h1');
makeElementInvisible(h1);

function makeLi(text) {
    const li = document.createElement('li');
    li.innerText = text;
    return li;
}

const newLi = makeLi('I am a new LI');
addToArguments(newLi);

function makeHeader(headerSize, textDecoration) {
    const tagName = 'h' + headerSize;
    const header = document.createElement(tagName);
    header.innerText = text;
    return header;
}

const newHeader = makeHeader(5, 'this is our new header');
addToArguments(newHeader);
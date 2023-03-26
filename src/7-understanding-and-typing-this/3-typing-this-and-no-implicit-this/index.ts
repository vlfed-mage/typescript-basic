// tsconfig.json
// "strict": false,
// "noImplicitThis": true

const elem = document.querySelector('.click');

function handleClick(this: HTMLAnchorElement, event: Event) {
    event.preventDefault();
    console.log(this); // <a href="#" class="click">Click</a>
    console.log(this.className); // click
}

elem.addEventListener('click', handleClick, false);

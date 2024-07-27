const customRender = (element, container) => {
/*
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children;
    domElement.setAttribute('href', element.props.href)
    domElement.setAttribute('target', element.props.target)

    container.appendChild(domElement)
*/
const domElement = document.createElement(element.type);
domElement.innerHTML = element.children; 
for (const prop in element.props) {
    if(prop === 'children') continue;
    domElement.setAttribute(prop, element.props[prop])
}
container.appendChild(domElement)
}

const reactElement = { //react makes a tree behind the scenes before it renders the element on the DOM
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me to visit google'
}

const saman = {
    type: 'h1',
    props: {
       id: "heading"
    },
    children: "My name is Sheila, Sheela kii jawaani"
}


const mainContainer = document.getElementById('root');


customRender(reactElement, mainContainer)
customRender(saman, mainContainer)
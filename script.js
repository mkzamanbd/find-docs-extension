// translation id
const searchElement = ['dna-solution', 'Frontend-dev', 'Notification', 'JERP', 'zaman'];

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => console.log(json));

// find dom element with text
function findDomElement(searches) {
    const nodeElements = document.querySelectorAll('*');
    nodeElements.forEach((element) => {
        if (element?.firstChild?.nextSibling === null) {
            searches.forEach((search) => {
                if (element.textContent.toLowerCase().includes(search.toLowerCase())) {
                    if (element.innerText) {
                        element.style.backgroundColor = 'yellow';
                        console.log('Element', element.innerText);
                    }
                }
            });
        }
    });
}

findDomElement(searchElement);

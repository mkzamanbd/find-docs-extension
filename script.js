// translation id
const searchElement = ['dna-solution', 'Frontend-dev', 'Notification', 'nuxt'];

let nodeElements = document.querySelectorAll('*');
console.log('nodeElements', nodeElements);

nodeElements.forEach((element) => {
    console.log('element', element);
    if (element?.firstChild?.nextSibling === null) {
        console.log('textContent', element.textContent);
        searchElement.forEach((search) => {
            if (element.textContent.toLowerCase().includes(search.toLowerCase())) {
                if (element.innerText) {
                    element.style.backgroundColor = 'yellow';
                    console.log('Element', element.innerText);
                }
            }
        });
    }
});

/* source code 1 solution */
// let nodeElements = document.querySelectorAll('.file-name');
// console.log('nodeElements', nodeElements);

// for (let element of nodeElements) {
//     console.log('element', element);
//     for (let i = 0; i < searchElement.length; i++) {
//         if (element.textContent.toLowerCase().includes(searchElement[i].toLowerCase())) {
//             if (element.innerText) {
//                 element.style.backgroundColor = 'yellow';
//                 console.log('Element', element.innerText);
//             }
//         }
//     }
// }

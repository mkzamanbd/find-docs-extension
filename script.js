// translation id
fetch('http://203.188.245.58:7011/api/get-notification')
    .then((response) => response.json())
    .then((json) => {
        findDomElement(json.notifications);
    });

// find dom element with text
function findDomElement(searches) {
    const nodeElements = document.querySelectorAll('*');
    nodeElements.forEach((element) => {
        if (element?.firstChild?.nextSibling === null) {
            searches.forEach((search) => {
                if (element.innerText == search.transaction_id) {
                    element.style.backgroundColor = 'yellow';
                    element.setAttribute('title', search.android_text);
                    console.log('Element', element.innerText);
                }
            });
        }
    });
}

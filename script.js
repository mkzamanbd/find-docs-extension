window.onload = function() {
    // translation id
    fetch('https://api.kzaman.me/api/get-notification')
        .then((response) => response.json())
        .then((json) => {
            findDomElement(json.notifications);
        });

    // find dom element with text
    function findDomElement(searches) {
        const nodeElements = document.querySelectorAll('span');
        nodeElements.forEach((element) => {
            const transactionId = element?.childNodes[1]?.textContent?.replace(": ", '');
            if (transactionId) {
                searches.forEach((search) => {
                    if (transactionId == search.transaction_id) {
                        element.children[0].setAttribute('style', 'background: yellow;');
                        //element.style.backgroundColor = 'yellow';
                        element.setAttribute('title', search.android_text);
                        //console.log('Element', element.innerText);
                    }
                });
            }
        });
    }
};

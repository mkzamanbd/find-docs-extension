function findElement() {
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

const observeDOM = (function(){
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    return function( obj, callback ){
        if( !obj || obj.nodeType !== 1 ) return; 

        if( MutationObserver ){
            // define a new observer
            const mutationObserver = new MutationObserver(callback)

            // have the observer observe foo for changes in children
            mutationObserver.observe( obj, { childList:true, subtree:true })
            return mutationObserver
        }
        
        // browser support fallback
        else if( window.addEventListener ){
            obj.addEventListener('DOMNodeInserted', callback, false)
            obj.addEventListener('DOMNodeRemoved', callback, false)
        }
    }
})()

const listElm = document.querySelector('.mainpanel');
// Observe a specific DOM element:
observeDOM(listElm, function(m){
    findElement();
});
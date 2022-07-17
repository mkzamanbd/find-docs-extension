function findElement() {
    // translation id
    fetch('https://softxilla.com/api/get-notification')
        .then((response) => response.json())
        .then((json) => {
            findDomElement(json);
        });

    // find dom element with text
    function findDomElement({ notifications, nagad_messages }) {
        const nodeElements = document.querySelectorAll('td span');
        nodeElements.forEach((element) => {
            const transactionId = element?.childNodes[1]?.textContent?.replace(': ', '');
            if (transactionId) {
                notifications.forEach((item) => {
                    if (transactionId == item.transaction_id) {
                        element.children[0]?.setAttribute('style', 'background: #ffc107;');
                        element.setAttribute('title', item.android_text);
                    }
                });
            }
            const mobile = element?.childNodes[7]?.textContent?.replace(': ', '');
            if (mobile) {
                nagad_messages.forEach((item) => {
                    if (mobile == item.mobile) {
                        element.children[4]?.setAttribute('style', 'background: #dc3545; color: white;');
                        element.children[4]?.setAttribute('title', item.android_text);
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
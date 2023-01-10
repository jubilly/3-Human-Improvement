(function(w, d) {
    const targetOpen = d.querySelectorAll('[name="products-highlights__cta-open"]');
    const targetClose= d.querySelectorAll('[name="products-highlights__cta-close"]');

    const addButtonListener = (buttons, attribute) => {
        buttons.forEach((button) => {
            button.addEventListener('click', event => handleButton.toggle(event, attribute));
        });
    }

    if (!targetOpen) {
        return;
    }

    if (!targetClose) {
        return;
    }
    
    addButtonListener(targetOpen, 'open');
    addButtonListener(targetClose, 'open');

    const handleAttribute = (attr, element) => {
        element.hasAttribute(attr) ? element.removeAttribute(attr) : element.setAttribute(attr,'');
    }

    const handleToggle = (event, rawAttribute) => {
        const element = event.target;
        const attribute = rawAttribute;
        const source = element.getAttribute('source');
        if (!source) {
            return;
        }
        const drawer = document.querySelector(`#products-highlights-drawer-item--${source}[name="products-highlights-drawer-item"]`);
        if (!drawer) {
            return;
        }
        handleAttribute(attribute, drawer);
    }

    const handleButton = {
        toggle: handleToggle
    }

    const productsHighLights = {
        button: handleButton
    }

    window.productsHighLights = productsHighLights

}(window, document));

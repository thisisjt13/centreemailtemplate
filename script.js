function customizeEmail() {
    const fieldsToUpdate = [
        { inputId: 'headerImgSrc', elementId: 'header-img', attribute: 'src' },
        { inputId: 'greetingText', elementId: 'greeting', attribute: 'textContent' },
        { inputId: 'paragraph1Text', elementId: 'paragraph1', attribute: 'textContent' },
        { inputId: 'button1Link', elementId: 'button1link', attribute: 'href' },
        { inputId: 'button1LinkText', elementId: 'button1linktext', attribute: 'textContent' },
        { inputId: 'column1ImgUrl', elementId: 'column1img', attribute: 'backgroundImage' },
        { inputId: 'column1Text', elementId: 'column1text', attribute: 'textContent' },
        { inputId: 'column1ButtonUrl', elementId: 'column1button', attribute: 'href' },
        { inputId: 'column1ButtonText', elementId: 'column1buttontext', attribute: 'textContent' },
        { inputId: 'column1Heading', elementId: 'column1heading', attribute: 'textContent' },
        { inputId: 'column2ImgUrl', elementId: 'column2img', attribute: 'backgroundImage' },
        { inputId: 'column2Text', elementId: 'column2text', attribute: 'textContent' },
        { inputId: 'column2ButtonUrl', elementId: 'column2button', attribute: 'href' },
        { inputId: 'column2ButtonText', elementId: 'column2buttontext', attribute: 'textContent' },
        { inputId: 'column2Heading', elementId: 'column2heading', attribute: 'textContent' }
    ];

    fieldsToUpdate.forEach(field => {
        const inputValue = document.getElementById(field.inputId).value;
        if (inputValue) {
            if (field.attribute === 'src' || field.attribute === 'href') {
                document.getElementById(field.elementId)[field.attribute] = inputValue;
            } else if (field.attribute === 'backgroundImage') {
                document.getElementById(field.elementId).style.backgroundImage = 'url(' + inputValue + ')';
            } else {
                document.getElementById(field.elementId)[field.attribute] = inputValue;
            }
        }
    });
}

function downloadHTML() {
    // Clone the entire document body
    var bodyClone = document.body.cloneNode(true);

    // Remove the 'emailCustomizer' form from the clone
    var formToRemove = bodyClone.querySelector('#emailCustomizer');
    if (formToRemove) {
        formToRemove.parentNode.removeChild(formToRemove);
    }

    // Get the HTML content of the <head> section
    var headContent = document.head.innerHTML;

    // Combine the <head> and modified <body> content
    var fullHtmlContent = '<html><head>' + headContent + '</head><body>' + bodyClone.innerHTML + '</body></html>';

    // Create a Blob for the combined HTML content and download it
    var file = new Blob([fullHtmlContent], { type: 'text/html' });
    var element = document.createElement('a');
    element.href = URL.createObjectURL(file);
    element.download = 'emailTemplate.html';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

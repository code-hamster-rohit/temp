function getHandle(className){
    return document.querySelector('.' + className);
}

function showMenuBar(className){
    const element = getHandle(className);
    element.classList.toggle('hidden');

    if (!element.classList.contains('hidden')){
        window.addEventListener('click', (event) => {
            event.stopPropagation();
            if (!element.contains(event.target) && !getHandle('navbar').contains(event.target)){
                element.classList.add('hidden');
            }
        });
    }
}

const menuBtn = getHandle('menu-icon');
menuBtn.addEventListener('click', (event) => showMenuBar('menubar'));
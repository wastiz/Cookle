function openModal(modalSelector, modalTimer) {
    const modal = document.querySelector(modalSelector);
    modal.classList.toggle('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    console.log('modal opened');
    if (modalTimer){
        clearInterval(modalTimer);
    }
    
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    // Либо вариант с toggle - но тогда назначить класс в верстке
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimer) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        modalCloseBtn = document.querySelector('[data-close]');

        modalTrigger.forEach(btn => {
            btn.addEventListener('click', () => openModal(modalSelector, modalTimer) //Мы обернули эту функцию еще в стрелочную фун., потому что иначе она сразу же без клика будет запускаться, так как мы получаем элемент со страницы
        );
    });
    //Вообще если код повторяется два раза, то лучше делать отдельно функцию и вызывать ее. Так мы оптимизируем на код

    modalCloseBtn.addEventListener('click', closeModal());
    // По стандарту лучше испльзовать синтаксис с event в callback функции
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        //Условие для срабатывания клавиши escape.
        //Для того чтобы назначить другую клавишу - идем в инет и пробиваем event.code
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });



    // Мой вариант как я бы реализовал 
    // window.addEventListener('scroll', function(){
    //     if(document.documentElement.scrollTop === 1300){
    //         modal.classList.toggle('show');
    //     } else {
    //         console.log('nothing');
    //     }
    // });
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimer);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export{closeModal};
export{openModal};
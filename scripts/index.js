window.addEventListener('DOMContentLoaded', () => {


    //  ============== переменные popup info (profile) ===================
    const profilePopup = document.querySelector('#popup'),
        popups = document.querySelectorAll('.popup'),
        popupClose = document.querySelector('.popup__close'),
        popupCloseBtn = document.querySelector('.popup__close-profile'),
        saveBtn = document.querySelector('.popup__save-button');

    const formElement = document.querySelector('#popup__form'),

        inputName = document.querySelector('.popup__input_type_name'),
        inputAbout = document.querySelector('.popup__input_type_about');

    const profileEditBtn = document.querySelector('.profile__edit-button'),
        profileTitle = document.querySelector('.profile__title'),
        profileDescription = document.querySelector('.profile__description'),
        profileAddBtn = document.querySelector('.profile__add-button');

    // ======= переменные для получения данных  popup add images===================

    const popupCards = document.querySelector('#popup-cards'),
        popupFormCard = document.querySelector('#popup__form-card'),
        popupCloseBtnAdd = document.querySelector('.popup__close_add_card'),
        popupSaveBtnAdd = document.querySelector('.popup__save-button_add_card');

    const formElementCard = document.querySelector('.popup__form-card'),
        inputText = document.querySelector('.popup__input_type_link-name'),
        inputUrl = document.querySelector('.popup__input_type_link-url');

    // ======= переменные для popup open images ===================

    const popupImages = document.querySelector('#popup_img'),
        images = document.querySelector('.popup__img-photo'),
        imagesCaption = document.querySelector('.popup__img-caption'),
        popupCloseBtnImageFull = document.querySelector('.popup__close_img_full');

    // ================ переменные для template ==========================

    const tamplate = document.querySelector('#tamplate').content;
    const containerElements = document.querySelector('.elements');

    // ====================================================================================



    // ============== функция которая открывает popup =============== 

    function openPopup(popup) {
        popup.classList.add('popup_opened');
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handlerEscClose)
    }
    // ============== функция которая закрывает popup =============== 

    function closePopup(popup) {
        popup.classList.remove('popup_opened');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handlerEscClose)

    }

    function handlerEscClose(e) {
        if (e.key === 'Escape') {
            const openedPopup = document.querySelector('.popup_opened');
            closePopup(openedPopup);
        }

    }

    popups.forEach((item) => {
        item.addEventListener('click', (e) => {
            if ( e.target.classList.contains('popup') || e.target.classList.contains('popup__close')  ) {
                closePopup(item);

            }
        });
    });



    const handleFormSubmit = (e) => {
        e.preventDefault();
        profileTitle.textContent = inputName.value;
        profileDescription.textContent = inputAbout.value;
        closePopup(profilePopup);

    }
    // ==================== Массив с данными =======================

    const initialCards = [{
            name: 'Горный Алтай',
            link: 'https://w-dog.ru/wallpapers/9/19/531620289590164/ozero-nebo-voda-les-gory-otrazhenie-novaya-zelandiya.jpg'
        },
        {
            name: 'Сибирь',
            link: 'https://kartinkin.net/uploads/posts/2022-03/1647061399_70-kartinkin-net-p-samii-krasivii-kartinki-85.jpg'
        },
        {
            name: 'Норвегия',
            link: 'https://img1.fonwall.ru/o/al/sea-water-ocean-architecture-iwsh.jpeg?route=mid&h=750'
        },
        {
            name: 'Нью-Йорк',
            link: 'https://img1.fonwall.ru/o/dw/architecture-skyline-building-city-itar.jpeg?route=mid&h=750'
        },
        {
            name: 'Холмогорский район',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
        },
        {
            name: 'Байкал',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
        }
    ];

    // ========================= Создание карточки ===============================

    const createCard = (item) => {
        const tamplateElem = tamplate.querySelector('.element').cloneNode(true);
        const elementImage = tamplateElem.querySelector('.element__img');
        const elementDescription = tamplateElem.querySelector('.element__description');

        elementImage.src = item.link;
        elementImage.alt = item.name;
        elementDescription.textContent = item.name;

        tamplateElem
            .querySelector('.element__like-button')
            .addEventListener('click', (e) => {
                const target = e.target;
                target.classList.toggle('elements__like-btn_active')
            });
        tamplateElem
            .querySelector('.element__trash')
            .addEventListener('click', (e) => {
                const target = e.target;
                target.closest('.element').remove();

            });
        elementImage
            .addEventListener('click', () => {
                images.src = item.link;
                images.alt = item.name;
                imagesCaption.textContent = item.name;

                openPopup(popupImages);
            })

        popupCloseBtnImageFull.addEventListener('click', () => {
            closePopup(popupImages);
        })
        return tamplateElem;

    };




    // ========================= функция добавления карточки ===============================


    const addCard = (item, container) => {
        const newCard = createCard(item);
        container.prepend(newCard);
    }

    // ========================= перебор массива ===============================

    initialCards.forEach(function (item) {
        addCard(item, containerElements);

    });


    const cardFormSubmitHandler = (e) => {
        e.preventDefault();
        addCard(
            (item = {
                name: inputText.value,
                link: inputUrl.value
            }),
            containerElements
        )
        e.target.reset();
        closePopup(popupCards);
    };
    formElementCard.addEventListener("submit", cardFormSubmitHandler);


    formElement.addEventListener('submit', handleFormSubmit);

    profileEditBtn.addEventListener('click', () => {
        inputName.value = profileTitle.textContent;
        inputAbout.value = profileDescription.textContent;
        openPopup(profilePopup);
    });

    // ========================= обработчик собития ===============================

    profileAddBtn.addEventListener('click', () => {
        openPopup(popupCards);
    });
    popupCloseBtnAdd.addEventListener('click', () => {
        closePopup(popupCards);
    });
    popupCloseBtn.addEventListener('click', () => {
        closePopup(profilePopup);

    });

});
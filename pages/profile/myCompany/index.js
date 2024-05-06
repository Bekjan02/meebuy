// avatar upload
const avatarInput = document.querySelector('#upload');
const avatar = document.querySelector('#avatar');

avatarInput.addEventListener('change', () => {
    const reader = new FileReader();
    reader.readAsDataURL(avatarInput.files[0]);
    reader.addEventListener('load', () => {
        avatar.src = reader.result;
    });
})

// dropdown
const dropdownBtn = document.querySelector('.dropdown__btn');
const dropdownMenu = document.querySelector('.dropdown__menu');

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
})



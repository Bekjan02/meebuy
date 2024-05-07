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
    const isActive = dropdownMenu.classList.contains('active');
    dropdownMenu.style.maxHeight = isActive ? "0" : `${dropdownMenu.scrollHeight}px`;
    dropdownMenu.classList.toggle('active');
})

// photos upload
const fileInputs = document.querySelectorAll('.photos__input');

function handleFileLoad(event, index) {
    const imageElement = document.getElementById(`preview${index + 1}`);
    imageElement.src = event.target.result;
    imageElement.classList.remove('hidden');
    const iconElement = document.getElementById(`icon${index + 1}`);
    iconElement.style.display = 'none';
}

fileInputs.forEach((input, index) => {
    input.addEventListener('change', () => {
        const file = input.files[0];
        if (file) {
            console.log(input.id.substring(4))
            const reader = new FileReader();
            reader.onload = function (event) {
                handleFileLoad(event, index);
            };
            reader.readAsDataURL(file);
        }
    });
});

// price
const priceInput = document.querySelector('#price_file');
const priceFiles = document.querySelector('.uploaded_files')

priceInput.addEventListener('change', () => {
    const file = priceInput.files[0];
    if (file) {
        priceFiles.insertAdjacentHTML('beforeend', `
            <div id="${file.name}" class="flex items-center gap-[15px]">
                <p class="line-clamp-3">${file.name}</p>
                <svg class="delete__icon cursor-pointer" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.75511 9.19888L4.87011 6.31388L2.02754 9.15645L0.783035 7.91194L3.6256 5.06937L0.81132 2.25509L2.09825 0.968153L4.91254 3.78244L7.74097 0.95401L8.98547 2.19852L6.15705 5.02695L9.04204 7.91194L7.75511 9.19888Z"
                        fill="#4D4D4D"/>
                </svg>
            </div>
        `);
    }
});

function deleteFile(name) {
    document.getElementById(name).remove();
}

priceFiles.addEventListener('click', function (event) {
    const target = event.target;

    if (target.classList.contains('delete__icon') || target.closest('.delete__icon')) {
        const itemName = target.closest('div').id;
        deleteFile(itemName);
    }
});
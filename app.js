const dropAriya = document.querySelector('.drag_ariya');
dragText = dropAriya.querySelector('header');
button = dropAriya.querySelector('button');
input = dropAriya.querySelector('input');

let file;

button.onclick = () => {
    input.click();
}

input.addEventListener('change', function() {
    file = this.files[0];
    showFile();
    dropAriya.classList.add('active');
});


dropAriya.addEventListener('dragover', (evant) => {
    evant.preventDefault();
    dropAriya.classList.add('active');
    dragText.textContent = 'Realese to Upload File!';
});

dropAriya.addEventListener('dragleave', () => {
    dropAriya.classList.remove('active');
    dragText.textContent = ' Drag and drop to upload file!';
});

dropAriya.addEventListener('drop', (evant) => {
    evant.preventDefault();
    dropAriya.classList.remove('active');
    file = evant.dataTransfer.files[0];
    showFile();
});

function showFile() {
    let fileType = file.type;
    let validExtaintion = ['image/jpeg', 'image/jpg', 'image/png'];

    if (validExtaintion.includes(fileType)) {
        let fileReder = new FileReader();
        fileReder.onload = () => {
            let fileUrl = fileReder.result;
            let imageTag = `<img src="${fileUrl}" alt="">`;
            dropAriya.innerHTML = imageTag;
        }
        fileReder.readAsDataURL(file);
    } else {
        alert('This is not a image file!');
        dropAriya.classList.remove('active');
    };
};
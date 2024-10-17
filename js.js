document.addEventListener('DOMContentLoaded', () => {

    const items = document.querySelectorAll('.bingo_item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            // Переключаем класс "selected" при клике
            if (item.style.backgroundColor === 'lightgreen') {
                item.style.backgroundColor = 'white';
            } else {
                item.style.backgroundColor = 'lightgreen';
            }
            console.log(item.id);
        });
    });
});
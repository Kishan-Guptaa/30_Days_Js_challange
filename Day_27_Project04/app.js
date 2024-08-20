document.getElementById('button-86').addEventListener('click', function () {
    const text_to_add = prompt("Enter your Task");
    const taskList = document.getElementById('task-list');

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const taskText = document.createElement('p');
    taskText.textContent = text_to_add;

    const editbutton = document.createElement('button');
    editbutton.textContent = "Edit";
    editbutton.classList.add('edit');

    const deletebutton = document.createElement('button');
    deletebutton.textContent = "Delete";
    deletebutton.classList.add('delete');

    taskContainer.appendChild(taskText);
    taskContainer.appendChild(editbutton);
    taskContainer.appendChild(deletebutton);
    taskList.appendChild(taskContainer);

    deletebutton.addEventListener('click', function () {
        taskList.removeChild(taskContainer);
    });

    editbutton.addEventListener('click', function () {
        const newTask = prompt("Edit your Task", taskText.textContent);
        if (newTask !== null) {
            taskText.textContent = newTask;
        }
    });
});

// Calendar Code
const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
const calendar = document.getElementById('calendar');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const saveNoteBtn = document.getElementById('save-note');
let selectedDay;

for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = day;

    dayElement.addEventListener('click', () => {
        selectedDay = day;
        modal.style.display = 'block';
    });

    calendar.appendChild(dayElement);
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

saveNoteBtn.addEventListener('click', () => {
    const noteContent = document.getElementById('note-content').value;
    if (noteContent.trim() !== '') {
        const dayElements = document.getElementsByClassName('day');
        const noteSticker = document.createElement('div');
        noteSticker.classList.add('sticker');
        dayElements[selectedDay - 1].appendChild(noteSticker);

        dayElements[selectedDay - 1].setAttribute('title', noteContent);
        modal.style.display = 'none';
    }
    document.getElementById('note-content').value = ''; // Clear the note
});

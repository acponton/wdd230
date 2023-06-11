
// Create three variables that hold references to the input, button, and list elements using const.
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function. 
button.addEventListener('click', () => {
    const myChap = input.value;
    // input.value = '';
    // listItem = input.value;
    // create an li element
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
    listItem.appendChild(listText);
    listText.textContent = myChap;
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌';
    // populate the li elements textContent or innerHTML with the input
    // listItem = input.value;
    // input.value = '';
    // populate the button textContent with an ❌
    // listBtn.textContent = 'X';
    // append the li element with the delete button
    // listItem.appendChild(listBtn);
    // append the list element with the li element just created and appended with text and the delete button
    list.appendChild(listItem);

    // add an event listener to the delete button that removes the li element when clicked
    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    // send the focus to the input element
    input.focus();
    // change the input value to nothing or the empty string to clean up the interface for the user
    input.value = '';
})
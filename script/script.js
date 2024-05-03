const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');

const addItem = (e) => {
  e.preventDefault();

  const newItem = itemInput.value;

  const li = document.createElement('li');

  li.textContent = newItem;
  const button = document.createElement('button');

  button.innerHTML = `
  <i class="fa-solid fa-xmark"></i>
  `;
button.classList = 'remove-item btn-link text-red';

  li.appendChild(button)
  itemList.appendChild(li)

itemInput.value = ''  
}


const removeItem = (e) => {
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove() 
  }
}

const clearItem = () => {
  while (itemList.firstChild) {
   itemList.removeChild(itemList.firstChild)
 }
}

// Event Listeners
itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearItem)






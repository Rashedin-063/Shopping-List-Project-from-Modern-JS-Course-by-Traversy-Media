const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');

const addItem = (e) => {
  e.preventDefault();

  const newItem = itemInput.value;
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));
  const button = createButton('remove-item btn-link text-red');

  li.appendChild(button);

  // add to the dom
  itemList.appendChild(li);

  itemInput.value = '';

  resetUI()
};

const createButton = (classes) => {
  const button = document.createElement('button');
  button.className = classes;
  const icon = document.createElement('i');
  icon.classList = 'fa-solid fa-xmark';

  button.appendChild(icon);

  return button;
};

const removeItem = (e) => {
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
    resetUI()
  }
};

const clearItem = () => {
  // itemList.innerHTML = ''
  if (confirm('Are you sure?')) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
  }
  resetUI()
};


const filterItem = (e) => {
  const items = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    // const itemName = item.innerText;

    if (itemName.includes(text)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
};

const resetUI = () => {
  const items = itemList.querySelectorAll('li');
 
  if (items.length === 0) {
    itemFilter.style.display = 'none';
    clearBtn.style.display = 'none'
  } else {
    itemFilter.style.display = 'block';
    clearBtn.style.display = 'block';
  }
}


// add event listener
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItem);
itemFilter.addEventListener('input', filterItem);

resetUI();
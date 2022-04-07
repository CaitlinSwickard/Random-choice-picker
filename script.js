// html elements
const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// set automatic focus for textarea
textarea.focus();

// event listener for textarea
textarea.addEventListener('keyup', (e) => {
  // captures what we type into text area
  createTags(e.target.value)
})

// function to capture textarea input 
function createTags(input) {
  // filter = can not be an empty string and alos trim nay white space
  const tags = input.split(',').filter(tag => tag.trim()!== '').map(tag => tag.trim())
  
  // clear text area
  tagsEl.innerHTML = '';

  // loop through array to create html element for each tag
  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);

  })
}

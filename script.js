const items = document.querySelectorAll('.item');
const placeholders = document.querySelectorAll('.placeholder');
let item;

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
}

for (const item of items) {
  item.addEventListener('dragstart', dragstart)
  item.addEventListener('dragend', dragend)
}

function dragstart() {
  this.classList.add('hold');
  setTimeout(() => this.classList.add('hide'), 0);
  item = this;
}

function dragend() {
	this.classList.remove('hold', 'hide');
}

function dragover(event) {
  event.preventDefault();
}

function dragenter() {
  this.classList.add('hovered');
}

function dragleave() {
  this.classList.remove('hovered');
}

function dragdrop() {
  this.classList.remove('hovered');
  this.append(item);
}

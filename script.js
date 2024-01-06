const myLibrary = [];

function Book(title, author, pageCount, completed) {
  // the constructor...
  this.title = title
  this.author = author
  this.pageCount = pageCount
  this.completed = completed
}

function addBookToLibrary() {
  // do stuff here

  let form = document.getElementById('new-book-form')
  let dialog = document.getElementById('new-book-dialog')
  let addBookBtn = document.querySelector('.add-book-btn')
  let table = document.getElementById('Table')

  addBookBtn.addEventListener('click', () => {
    form.reset()
    dialog.showModal()
  })

  table.addEventListener('click', (event) => {  // Bard Trick, existing vs newly added elements with event listeners
    if (event.target.matches('.remove-btn')) {
      const row = event.target.closest('tr');
      row.remove();
    }
  });

  form.onsubmit = (event) => {
    event.preventDefault()

    let title = document.getElementById('inputTitle').value
    let author = document.getElementById('inputAuthor').value
    let pageCount = document.getElementById('inputPageCount').value
    let completed = document.getElementById('inputCompleted').value

    let book = new Book(title, author, pageCount, completed)
    myLibrary.push(book)
    let table = document.getElementById('Table')
    let tr = document.createElement('tr')

    let title_td = document.createElement('td')
    let author_td = document.createElement('td')
    let pageCount_td = document.createElement('td')
    let completed_td = document.createElement('td')
    let removeBtn = document.createElement('button')
    let removeBtn_td = document.createElement('td')

    title_td.textContent = title
    title_td.classList.add('title')
    author_td.textContent = author
    title_td.classList.add('author')
    pageCount_td.textContent = pageCount
    pageCount_td.classList.add('page-count')
    completed_td.textContent = completed
    completed_td.classList.add('completed')
    removeBtn.textContent = 'Remove'
    removeBtn.classList.add('remove-btn')
    removeBtn_td.classList.add('remove')

    tr.appendChild(title_td)
    tr.appendChild(author_td)
    tr.appendChild(pageCount_td)
    tr.appendChild(completed_td)
    removeBtn_td.appendChild(removeBtn)
    tr.appendChild(removeBtn_td)
    table.appendChild(tr)

    dialog.close()
  }

}

addBookToLibrary()
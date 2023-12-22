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

  let addBtn = document.querySelector('.add-book-btn')
  let submitBtn = document.getElementById('submit-book-btn')
  const dialog = document.querySelector("dialog")
  const form = document.querySelector("form");

  addBtn.addEventListener('click', () => {
    form.reset()
    dialog.showModal()
  })

  submitBtn.addEventListener('click', () => {
    let title = document.getElementById('inputTitle').value
    let author = document.getElementById('inputAuthor').value
    let pageCount = document.getElementById('inputPageCount').value
    let completed = document.getElementById('inputCompleted').value

    let inputs = [title, author, pageCount, completed]
    let allInputsFilled = true

    inputs.forEach((input) => {
      if (input.trim().length === 0) {
        // Input is empty
        allInputsFilled = false
      }
    })

    if(allInputsFilled) {
      let book = new Book(title, author, pageCount, completed)
      myLibrary.push(book)
      let table = document.getElementById('Table')
      let tr = document.createElement('tr')
      let title_td = document.createElement('td')
      let author_td = document.createElement('td')
      let pageCount_td = document.createElement('td')
      let completed_td = document.createElement('td')

      title_td.textContent = title
      title_td.classList.add('title')
      author_td.textContent = author
      title_td.classList.add('author')
      pageCount_td.textContent = pageCount
      pageCount_td.classList.add('page-count')
      completed_td.textContent = completed
      completed_td.classList.add('completed')
      tr.appendChild(title_td)
      tr.appendChild(author_td)
      tr.appendChild(pageCount_td)
      tr.appendChild(completed_td)
      table.appendChild(tr)
    }

  })
    
}

addBookToLibrary()
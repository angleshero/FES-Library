function openMenu() {
  document.body.classList += " menu--open"
}

function closeMenu() {
  document.body.classList.remove('menu--open')
}

function renderBooks() {
  const booksWrapper= document.querySelector('.books');
const books = getBooks();

const booksHtml = books.map((book =>) {

   return  `<div class="book">
<figure class="book__img--wrapper">
<img class="book__img" src="${book[0].url}" alt="">
</figure>
<div class="book__title">
${book[0].title}
</div>
<div class="book__ratings">
 <i class="fas fa-star"></i>
 <i class="fas fa-star"></i>
 <i class="fas fa-star"></i>
 <i class="fas fa-star"></i>
 <i class="fas fa-star-half-alt"></i>
</div>
<div class="book__price">
<span class="book__price--normal">$${book[0].orginalPrice.toFixed(2)}</span>$${book[0].salePrice.toFixed(2)}$14.95
</div>
</div>`
});

.join("");

booksWrapper.innerHTML = booksHtml;
  booksWrapper.innerHTML= booksHtml;



}

setTimeout(() => {
  renderBooks();

});
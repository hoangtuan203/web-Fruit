document.addEventListener("DOMContentLoaded", function () {
    const search = document.querySelector('#search-icon');
    const searchForm = document.querySelector('#search-form');
    const close = document.querySelector('#close')
    const searchBox = document.querySelector('#search-box')
      search.onclick = () => {
        searchForm.classList.toggle('active');
        searchBox.focus();
      }
      close.onclick=() => {
        searchForm.classList.toggle('active');
      }
  });
  
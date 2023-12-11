const storedProductsJSON = localStorage.getItem('products');
const productHomes = JSON.parse(storedProductsJSON);
const categoryContainer = document.querySelector('.category-container');
const checkboxs = categoryContainer.querySelectorAll('.menu-product');
const checkboxPrice = categoryContainer.querySelectorAll('.menu-price');
const handleEvent = function () {
  const productEvent = document.querySelector('#product');
  const categoryContainer = document.querySelector('.category-container');
  const navbarItems = document.querySelectorAll('.navbar-item');
  const self = this;
  navbarItems.forEach((item) => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      navbarItems.forEach((navItem) => {
        navItem.classList.remove('active');
      });
      item.classList.add('active');
      categoryContainer.style.display = 'block';
      renderCategoryMenu();
      const category_title_name = document.querySelector(
        '.category-title-name'
      );
      category_title_name.textContent = 'Danh Mục Sản Phẩm';
    });
  });
};

const renderCategoryMenu = function () {
  const category_crumb_container = document.querySelector(
    '.category-crumb-container'
  );
  category_crumb_container.innerHTML = `
    <div class="row-container-category">
    <div class="category-crumb-right">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
       <span> Danh Mục</span>
    </div>
    <div class="category-crumb-left">
        <span class="">
            <a class="" href="">Trang Chủ</a>
        </span>
        <svg style="margin-left: 10px;margin-right: 10px;"  width="15px" height="15px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
            class="svg-inline--fa fa-caret-right fa-w-6">
            <path fill="currentColor"
                d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                class=""></path>
        </svg>
        <span class="category-title-name" ></span>
    </div>
</div> `;
};
//  phân trang home
const renderProducts = function (page) {
  let start = (page - 1) * page_size;
  let end = start + page_size;
  const container = document.querySelector('.box-container');
  const categoryContainer = document.querySelector('.category-container');
  categoryContainer.style.display =
    categoryContainer.style.display !== 'block'
      ? 'none'
      : categoryContainer.style.display;
  const paginatedProducts = productHomes.slice(start, end);
  container.innerHTML = '';
  paginatedProducts.forEach((item) => {
    const productElement = document.createElement('div');
    const formattedPrice = item.price.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
    productElement.classList.add('product');
    productElement.innerHTML = `
        <div class="image-product">
                <a  class="eye-button eye" href="" data-product-id="${item.id}" >
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137"
                        stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                    <path
                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                        stroke="#1C274C" stroke-width="1.5" />
                </svg>
                </a> 
            <img src="${item.img}" alt="">
        </div>
        <div class="title">
            <p class="heading-name">${item.name}</p>
            <span class="product-price">${formattedPrice}</span>
            <div class="btn-buy" onclick="addEventCart(${item.id},1)">
                <svg  width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Thêm Vào Giỏ
            </div>
        </div>
        `;
    container.appendChild(productElement);
  });
  const boxContainer = document.querySelector('.box-container');
  const boxes = boxContainer.children;
  if (boxes.length >= 1 && boxes.length <= 4) {
    boxContainer.style.gridTemplateColumns =
      'repeat(auto-fill, minmax(20%, 1fr))';
  }
};
// tìm kiếm sản phẩm theo thêm
const renderProductsByName = function (filteredProducts) {
  const container = document.querySelector('.box-container');
  container.innerHTML = '';
  filteredProducts.forEach((item) => {
    const productElement = document.createElement('div');
    const formattedPrice = item.price.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
    productElement.classList.add('product');
    productElement.innerHTML = `
            <div class="image-product">
                <img src="${item.img}" alt="">
                <a class="eye-button eye" data-product-id=${item.id} href="">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137"
                            stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                        <path
                            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                            stroke="#1C274C" stroke-width="1.5" />
                    </svg>
                    </a> 
            </div>
            <div class="title">
                <p class="heading-name">${item.name}</p>
                <span class="product-price">${formattedPrice}</span>
                <div class="btn-buy" onclick="addEventCart(${item.id},1)">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Thêm Vào Giỏ
                </div>
            </div>
            `;
    container.appendChild(productElement);
  });
};
let page_size = 10;
let currentPage = 1;
let totalPage = Math.ceil(productHomes.length / page_size);
const pagination_item__link = document.querySelectorAll(
  '.pagination-item__link'
);
const pagination = function () {
  const next = document.querySelector('#next-pag');
  const prev = document.querySelector('#prev-pag');

  next.addEventListener('click', function (event) {
    event.preventDefault();
    currentPage++;
    if (currentPage > totalPage) {
      currentPage = 1;
    }
    renderProducts(currentPage);
    updatePaginationActive();
    modal();
  });
  prev.addEventListener('click', function (event) {
    event.preventDefault();
    currentPage--;
    if (currentPage == 0) {
      currentPage = totalPage;
    }
    renderProducts(currentPage);
    updatePaginationActive();
    modal();
  });
  const updatePaginationActive = function () {
    pagination_item__link.forEach((item, index) => {
      if (index === currentPage) {
        item.classList.add('pagination-active');
      } else {
        item.classList.remove('pagination-active');
      }
    });
  };
  renderProducts(currentPage);
  updatePaginationActive();
};
const modal = function () {
  const eyeButtons = document.querySelectorAll('.eye-button');
  const modalContainer = document.getElementById('modal');
  eyeButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      modalContainer.style.display = 'block';
      // Assume you have a data attribute for the product ID
      const productId = this.getAttribute('data-product-id');
      const product = productHomes.find(
        (item) => item.id === parseInt(productId)
      );
      const formattedPrice = product.price.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
      // Create modal content
      modalContainer.innerHTML = `
                <div class="modal-content">
                    <div class="image-container">
                        <div class="image-product">
                            <img src="${product.img}" alt="">
                        </div>
                    </div>
                    <div class="detail-product">
                        <p class="heading-name">${product.name}</p>
                        <span class="origin">Xuất sứ: <span class="sites">Thái Lan</span></span>
                        <br><p class="product-price-detail">${formattedPrice}</p>
                        <p class="des-product">Trong quả hồng khô chứa hàm lượng lớn các chất catechins và polyphenolic, là những hợp chất chống oxy hóa mạnh có tác dụng chống viêm và chống nhiễm trùng hiệu quả.</p>

                        <div class="input-group">
                            <span class="mb-4 quantity-title">Số lượng:</span><br>
                            <button class="button-quantity decrease" onclick="changeQuantity(1,event)">-</button>
                            <input type="number" class="form-control" id="quantity" data-id=${product.id} name="quantity" min="1" max="${product.quantity}" value="1">
                            <button class="button-quantity increase" onclick="changeQuantity(2,event)">+</button>
                        </div>
                        
                        <div style="" class="btn-buy" data-id="${product.id}" onclick="add(event)">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Thêm Vào Giỏ
                        </div>
                    </div>
                    <svg id="close-detail" width="35px" height="35px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21.32L21 3.32001" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 3.32001L21 21.32" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            `;
      const close_details = document.querySelector('#close-detail');
      close_details.addEventListener('click', function () {
        modalContainer.style.display = 'none';
      });
      window.addEventListener('click', function (event) {
        if (event.target === modalContainer) {
          modalContainer.style.display = 'none';
        }
      });
    });
  });
};
// search
const search = function () {
  const categoryContainer = document.querySelector('.category-container');
  categoryContainer.style.display =
    categoryContainer.style.display !== 'block'
      ? 'none'
      : categoryContainer.style.display;
  const categoryRadioButtons = document.querySelectorAll(
    '.menu-product:checked'
  );
  const priceRadioButtons = document.querySelectorAll('.menu-price:checked');
  const nameInput = document
    .querySelector('#search-box')
    .value.trim()
    .toLowerCase();
  const selectedCategories = Array.from(categoryRadioButtons).map(
    (radio) => radio.value
  );
  const selectedPrices = Array.from(priceRadioButtons).map((radio) =>
    parseInt(radio.value)
  );
  let minPrice, maxPrice;
  switch (selectedPrices[0]) {
    case 1:
      minPrice = 0;
      maxPrice = 10000;
      break;
    case 2:
      minPrice = 10000;
      maxPrice = 20000;
      break;
    case 3:
      minPrice = 30000;
      maxPrice = Infinity;
      break;
  }
  const filteredProducts = productHomes.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(nameInput);
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.categoryName);
    const matchesPrice =
      selectedPrices.length === 0 ||
      (product.price >= minPrice && product.price <= maxPrice);

    const category_title_name = document.querySelector('.category-title-name');
    if (matchesName) {
      category_title_name.textContent = 'Tìm thấy sản phẩm';
    }
    return matchesName && matchesCategory && matchesPrice;
  });
  renderProductsByName(filteredProducts);

  const boxContainer = document.querySelector('.box-container');
  const boxes = boxContainer.children;
  if (boxes.length >= 1 && boxes.length <= 4) {
    boxContainer.style.gridTemplateColumns =
      'repeat(auto-fill, minmax(20%, 1fr))';
  }
  modal();
};
checkboxs.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const category_title_name = document.querySelector('.category-title-name');
    checkboxs.forEach((oldRadio) => {
      if (oldRadio !== checkbox && oldRadio.checked) {
        oldRadio.checked = false;
      }
    });
    if (this.checked) {
      modal();
      search();
      if (this.value === 'box-fruit') {
        category_title_name.textContent = 'Hộp Quà Trái Cây';
      } else if (this.value === 'imported-fruit') {
        category_title_name.textContent = 'Trái Cây Nhập Khẩu';
      } else if (this.value === 'fresh-fruit') {
        category_title_name.textContent = 'Trái Cây Tươi';
      }
    }
  });
});
checkboxPrice.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    checkboxPrice.forEach((oldRadio) => {
      if (oldRadio !== checkbox && oldRadio.checked) {
        oldRadio.checked = false;
      }
    });
    if (this.checked) {
      search();
    }
  });
});
const renderSearch = function () {};
const search_icon = document.querySelector('#search-icon');
const searchForm = document.querySelector('#search-form');
const close = document.querySelector('#close');
const searchBox = document.querySelector('#search-box');
search_icon.onclick = () => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  searchBox.value = '';
  categoryContainer.style.display = 'block';

  renderCategoryMenu();
  const navbarItems = document.querySelector('.navbar-item');
  navbarItems.classList.remove('active');
  const navbaItems = document.querySelector('#product');
  navbaItems.classList.add('active');
};
close.onclick = () => {
  searchForm.classList.toggle('active');
};
const search_button = document.querySelector('#search-button');
search_button.addEventListener('click', () => {
  const category_title_name = document.querySelector('.category-title-name');
  search();
  searchForm.classList.toggle('active');
});

// category-crumb
const category_crumb_render = function () {
  const category_crumb = document.querySelector('.category-crumb');
  category_crumb.style.display = 'block';
};

handleEvent();
pagination();
modal();

// pagination_item__link.forEach((pageNumber) => {
//   pageNumber.addEventListener('click', function (event) {
//     event.preventDefault();
//     currentPage = parseInt(pageNumber.textContent);

//     renderProducts(currentPage);
//     updatePaginationActive();
//   });
// });
// theo tên sản phẩm, có chọn phân loại và khoảng giá
// 1/ tên ok
// 2/ phân loại
// 3/ khoảng giá
// 4/ tên và phân loại        cam
// 5/ tên và khoảng giá 	   chôm
// 6/ phân loại và khoảng giá
// 7/ tên, phân loại và khoảng giá   nho




const handleEvent = function () {
    const productEvent = document.querySelector('#product');
    const categoryContainer = document.querySelector('.category-container');
    const checkboxs = categoryContainer.querySelectorAll('.menu-product');
    const self = this;
    productEvent.onclick = function (event) {
        event.preventDefault();
        categoryContainer.style.display = 'block';
        checkboxs.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if (this.checked) {
                   search()
                }
            });
        });
        renderCategoryMenu()
       
    };  
};

const renderCategoryMenu=function(){
    const category_crumb_container=document.querySelector('.category-crumb-container');
    category_crumb_container.innerHTML=`
    <div class="row-container-category">
    <div class="category-crumb-right">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
       <span> Danh Mục</span>
    </div>
    <div class="category-crumb-left">
        <span class="">Trang Chủ</span>
        <svg style="margin-left: 10px;margin-right: 10px;"  width="15px" height="15px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
            class="svg-inline--fa fa-caret-right fa-w-6">
            <path fill="currentColor"
                d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                class=""></path>
        </svg>
        <span class="category-title-name" >Trái Cây Khô</span>
    </div>
</div>
    `
}
//  phân trang home
const renderProducts = function (page) {
    let start = (page - 1) * page_size;
    let end = start + page_size;
    const container = document.querySelector('.box-container');
    const categoryContainer = document.querySelector('.category-container');
    categoryContainer.style.display = (categoryContainer.style.display !== 'block') ? 'none' : categoryContainer.style.display;
    const paginatedProducts = products.slice(start, end);
   
    container.innerHTML = '';
    paginatedProducts.forEach(item => {
        const productElement = document.createElement('div');
        const formattedPrice = item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        productElement.classList.add('product');
        productElement.innerHTML = `
        <div class="image-product">
                <a  class="eye-button eye" href="" data-product-id="${item.id}" href="">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137"
                        stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                    <path
                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                        stroke="#1C274C" stroke-width="1.5" />
                </svg>
                </a> 

// const products = [
//     {
//         id: 1,
//         name: 'Chôm Chôm',
//         price: 5000,
//         quantity: 10,
//         img: './image/product-fresh/chom-chom.jpg',
//     },
//     {
//         id: 2,
//         name: 'Dưa Hấu',
//         price: 8000,
//         quantity: 15,
//         img: './image/product-fresh/dua-hau.jpg',
//     },
//     {
//         id: 3,
//         name: 'Dưa Lưới',
//         price: 7000,
//         quantity: 12,
//         img: './image/product-fresh/dua-luoi.jpg',
//     },
//     {
//         id: 4,
//         name: 'Hồng Giòn',
//         price: 6000,
//         quantity: 20,
//         img: './image/product-fresh/hong-gion.jpg',
//     },
//     {
//         id: 5,
//         name: 'Hồng Trung',
//         price: 7500,
//         quantity: 8,
//         img: './image/product-fresh/Hong-Trung.jpg',
//     },
//     {
//         id: 6,
//         name: 'Măng Cụt',
//         price: 10000,
//         quantity: 18,
//         img: './image/product-fresh/mang-cut.jpg',
//     },
//     {
//         id: 7,
//         name: 'Nhãn Xuồng',
//         price: 9000,
//         quantity: 14,
//         img: './image/product-fresh/Nhan-Xuong.jpg',
//     },
//     {
//         id: 8,
//         name: 'Sầu Riêng',
//         price: 11000,
//         quantity: 22,
//         img: './image/product-fresh/Sau-Rieng.jpg',
//     },
//     {
//         id: 9,
//         name: 'Vú Sữa',
//         price: 12000,
//         quantity: 7,
//         img: './image/product-fresh/vu-sua.jpg',
//     },
//     {
//         id: 10,
//         name: 'Cam Xoàn',
//         price: 12000,
//         quantity: 7,
//         img: './image/product-fresh/Cam-Xoan.jpg',
//     },
//     {
//         id: 11,
//         name: 'Cam Ai Cập',
//         price: 6500,
//         quantity: 25,
//         img: './image/product-import/cam-ai-cap.jpg',
//     },
//     {
//         id: 12,
//         name: 'Cam Úc',
//         price: 8500,
//         quantity: 12,
//         img: './image/product-import/cam-uc.jpg',
//     },
//     {
//         id: 13,
//         name: 'Cherry Đỏ Mỹ',
//         price: 3000,
//         quantity: 30,
//         img: './image/product-import/cherry-do-my.jpg',
//     },
//     {
//         id: 14,
//         name: 'Dâu Tây',
//         price: 9000,
//         quantity: 17,
//         img: './image/product-import/dau-tay.jpg',
//     },
//     {
//         id: 15,
//         name: 'Lê Nam Phi',
//         price: 4000,
//         quantity: 40,
//         img: './image/product-import/le-nam-phi.jpg',
//     },
//     {
//         id: 16,
//         name: 'Lựu Thái',
//         price: 6000,
//         quantity: 14,
//         img: './image/product-import/luu-thai.jpg',
//     },
//     {
//         id: 17,
//         name: 'Nho Đỏ Úc',
//         price: 11000,
//         quantity: 8,
//         img: './image/product-import/nho-do-khong-hat-uc.jpg',
//     },
//     {
//         id: 18,
//         name: 'Nho Mẫu Đơn',
//         price: 7500,
//         quantity: 13,
//         img: './image/product-import/nho-mau-don-dai-loan.jpg',
//     },
//     {
//         id: 19,
//         name: 'Táo Neazealand',
//         price: 13000,
//         quantity: 9,
//         img: './image/product-import/tao-do-neazealand.jpg',
//     },
//     {
//         id: 20,
//         name: 'Viết Quất',
//         price: 9500,
//         quantity: 16,
//         img: './image/product-import/viet-quat.jpg',
//     },
//     {
//         id: 21,
//         name: 'Giỏ Trái Cây Thăm Tặng',
//         price: 12000,
//         quantity: 14,
//         img: './image/product-cart/CT01-CTT-500k.jpg',
//     },
//     {
//         id: 22,
//         name: 'Giỏ Trái Cây Gia Đình',
//         price: 9000,
//         quantity: 20,
//         img: './image/product-cart/gio-trai-cay-579.jpg',
//     },
//     {
//         id: 23,
//         name: 'Giỏ Quà Trái Cây',
//         price: 8500,
//         quantity: 11,
//         img: './image/product-cart/gio-trai-cay-citi-fruit.jpg',
//     },
//     {
//         id: 24,
//         name: 'Hộp Trái Cây-Nho',
//         price: 15000,
//         quantity: 20,
//         img: './image/product-cart/hop-trai-cay-qua-tang-nho-xanh.jpg',
//     },
//     {
//         id: 25,
//         name: 'Hộp Trái Cây Quà Tặng',
//         price: 12000,
//         quantity: 15,
//         img: './image/product-cart/hop-trai-cay-qua-tang.jpg',
//     },
//     {
//         id: 26,
//         name: 'Hộp Nho Không Hạt',
//         price: 18000,
//         quantity: 12,
//         img: './image/product-cart/hop-trai-cay-qua-tang-nho-xanh-khong-hat.jpg',
//     },
const products = [
  {
    manhom: 1,
    id: 1,
    name: 'Chôm Chôm',
    price: 5000,
    quantity: 10,
    img: './image/product-fresh/chom-chom.jpg',
  },
  {
    manhom: 1,
    id: 2,
    name: 'Dưa Hấu',
    price: 8000,
    quantity: 15,
    img: './image/product-fresh/dua-hau.jpg',
  },
  {
    manhom: 1,
    id: 3,
    name: 'Dưa Lưới',
    price: 7000,
    quantity: 12,
    img: './image/product-fresh/dua-luoi.jpg',
  },
  {
    manhom: 1,
    id: 4,
    name: 'Hồng Giòn',
    price: 6000,
    quantity: 20,
    img: './image/product-fresh/hong-gion.jpg',
  },
  {
    manhom: 1,
    id: 5,
    name: 'Hồng Trung',
    price: 7500,
    quantity: 8,
    img: './image/product-fresh/Hong-Trung.jpg',
  },
  {
    manhom: 1,
    id: 6,
    name: 'Măng Cụt',
    price: 10000,
    quantity: 18,
    img: './image/product-fresh/mang-cut.jpg',
  },
  {
    manhom: 1,
    id: 7,
    name: 'Nhãn Xuồng',
    price: 9000,
    quantity: 14,
    img: './image/product-fresh/Nhan-Xuong.jpg',
  },
  {
    manhom: 1,
    id: 8,
    name: 'Sầu Riêng',
    price: 11000,
    quantity: 22,
    img: './image/product-fresh/Sau-Rieng.jpg',
  },
  {
    manhom: 1,
    id: 9,
    name: 'Vú Sữa',
    price: 12000,
    quantity: 7,
    img: './image/product-fresh/Sau-Rieng.jpg',
  },
  {
    manhom: 1,
    id: 10,
    name: 'Cam Xoàn',
    price: 12000,
    quantity: 7,
    img: './image/product-fresh/Cam-Xoan.jpg',
  },
  {
    manhom: 1,
    id: 11,
    name: 'Cam Ai Cập',
    price: 6500,
    quantity: 25,
    img: './image/product-import/cam-ai-cap.jpg',
  },
  {
    manhom: 1,
    id: 12,
    name: 'Cam Úc',
    price: 8500,
    quantity: 12,
    img: './image/product-import/cam-uc.jpg',
  },
  {
    manhom: 1,
    id: 13,
    name: 'Cherry Đỏ Mỹ',
    price: 3000,
    quantity: 30,
    img: './image/product-import/cherry-do-my.jpg',
  },
  {
    manhom: 1,
    id: 14,
    name: 'Dâu Tây',
    price: 9000,
    quantity: 17,
    img: './image/product-import/dau-tay.jpg',
  },
  {
    manhom: 1,
    id: 15,
    name: 'Lê Nam Phi',
    price: 4000,
    quantity: 40,
    img: './image/product-import/le-nam-phi.jpg',
  },
  {
    manhom: 2,
    id: 16,
    name: 'Lựu Thái',
    price: 6000,
    quantity: 14,
    img: './image/product-import/luu-thai.jpg',
  },
  {
    manhom: 2,
    id: 17,
    name: 'Nho Đỏ Úc',
    price: 11000,
    quantity: 8,
    img: './image/product-import/nho-do-khong-hat-uc.jpg',
  },
  {
    manhom: 2,
    id: 18,
    name: 'Nho Mẫu Đơn',
    price: 7500,
    quantity: 13,
    img: './image/product-import/nho-mau-don-dai-loan.jpg',
  },
  {
    manhom: 2,
    id: 19,
    name: 'Táo Neazealand',
    price: 13000,
    quantity: 9,
    img: './image/product-import/tao-do-neazealand.jpg',
  },
  {
    manhom: 2,
    id: 20,
    name: 'Viết Quất',
    price: 9500,
    quantity: 16,
    img: './image/product-import/viet-quat.jpg',
  },
  {
    manhom: 2,
    id: 21,
    name: 'Giỏ Trái Cây Thăm Tặng',
    price: 12000,
    quantity: 14,
    img: './image/product-cart/CT01-CTT-500k.jpg',
  },
  {
    manhom: 2,
    id: 22,
    name: 'Giỏ Trái Cây Gia Đình',
    price: 9000,
    quantity: 20,
    img: './image/product-cart/gio-trai-cay-579.jpg',
  },
  {
    manhom: 2,
    id: 23,
    name: 'Giỏ Quà Trái Cây',
    price: 8500,
    quantity: 11,
    img: './image/product-cart/gio-trai-cay-citi-fruit.jpg',
  },
  {
    manhom: 2,
    id: 24,
    name: 'Hộp Trái Cây-Nho',
    price: 15000,
    quantity: 20,
    img: './image/product-cart/hop-trai-cay-qua-tang-nho-xanh.jpg',
  },
  {
    manhom: 2,
    id: 25,
    name: 'Hộp Trái Cây Quà Tặng',
    price: 12000,
    quantity: 15,
    img: './image/product-cart/hop-trai-cay-qua-tang.jpg',
  },
  {
    manhom: 2,
    id: 26,
    name: 'Hộp Nho Không Hạt',
    price: 18000,
    quantity: 12,
    img: './image/product-cart/hop-trai-cay-qua-tang-nho-xanh-khong-hat.jpg',
  },

  {
    manhom: 2,
    id: 27,
    name: 'Hộp Trái Cây',
    price: 16000,
    quantity: 18,
    img: './image/product-cart/hop-trai-cay-qua-tang-hc03.jpg',
  },
  {
    manhom: 2,
    id: 28,
    name: 'Giỏ Quà Thăm Tặng',
    price: 13000,
    quantity: 25,
    img: './image/product-cart/qua-tang.jpg',
  },
  {
    manhom: 2,
    id: 29,
    name: 'Giỏ Quà Đơn Giản',
    price: 14000,
    quantity: 14,
    img: './image/product-cart/thiet-ke.png',
  },
  {
    manhom: 2,
    id: 30,
    name: 'Giỏ Quà Sinh Nhật',
    price: 14000,
    quantity: 14,
    img: './image/product-cart/sinh-nhat.jpg',
  },
];
const handleEvent = function () {
  const productEvent = document.querySelector('#product');
  const categoryContainer = document.querySelector('.category-container');
  const checkboxs = categoryContainer.querySelectorAll('.menu-product');
  const self = this;

  productEvent.onclick = function () {
    categoryContainer.style.display = 'block';
    checkboxs.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        if (this.checked) {
          self.renderProductsByCategory(this.value);
        }
      });
    });
  };
};


let page_size = 6;
let currentPage = 1;
let totalPage =Math.ceil( (products.length) / page_size);

const pagination = function () {
    const next = document.querySelector('#next-pag')
    const prev = document.querySelector('#prev-pag');
    const pagination_item__link = document.querySelectorAll('.pagination-item__link');
    next.addEventListener('click', function (event) {
        event.preventDefault();
        currentPage++;
        if (currentPage > totalPage) {
            currentPage = 1;
        }
        renderProducts(currentPage);
        updatePaginationActive();

    })
    prev.addEventListener('click', function (event) {
        event.preventDefault();
        currentPage--;
        if (currentPage == 0) {
            currentPage = totalPage;
        }
        renderProducts(currentPage);
        updatePaginationActive();
    })

    const updatePaginationActive = function () {
        pagination_item__link.forEach((item, index) => {
            if (index === currentPage) {
                item.classList.add('pagination-active')
            } else {
                item.classList.remove('pagination-active');
            }

        })
    }
    renderProducts(currentPage);
    updatePaginationActive();
}

const search = function () {
   
    // button
    const categoryRadioButtons = document.querySelectorAll('.menu-product:checked')
    const priceRadioButtons = document.querySelectorAll('.menu-price:checked');
    const nameInput = document.querySelector('#search-box').value.trim().toLowerCase()
    const selectedCategories = Array.from(categoryRadioButtons).map(radio => radio.value);
    const selectedPrices = Array.from(priceRadioButtons).map(radio => parseInt(radio.value));
    
    const filteredProducts = products.filter(product => {
        const matchesName = product.name.toLowerCase().includes(nameInput);
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.categoryName);
        const matchesPrice = selectedPrices.length === 0 || selectedPrices.includes(product.price);
        console.log(matchesCategory)
        return matchesName && matchesCategory && matchesPrice;
    });
    renderProductsByName(filteredProducts);
   
}
const renderSearch=function(){
    
}
const search_icon = document.querySelector('#search-icon')
const searchForm = document.querySelector('#search-form')
const close = document.querySelector('#close')
const searchBox = document.querySelector('#search-box')
search_icon.onclick = () => {
    searchForm.classList.toggle('active');
    searchBox.focus();
}
close.onclick = () => {
    searchForm.classList.toggle('active');
}

const search_button = document.querySelector('#search-button');
search_button.addEventListener('click', () => {
    search();
    
});
// category-crumb
const category_crumb_render = function(){
   const category_crumb= document.querySelector('.category-crumb');
   category_crumb.style.display="block";
}

pagination();
handleEvent();
modal();

// pagination_item__link.forEach((pageNumber) => {
//     pageNumber.addEventListener('click', function (event) {
//         event.preventDefault();
//         currentPage = parseInt(pageNumber.textContent);

//         renderProducts(currentPage);
//         updatePaginationActive();
//     });
// });

            Chọn mua
            </div>
        </div>
        `;
    container.appendChild(productElement);
  });
};

const renderProductSelling = function () {
  const container = document.querySelector('.box-container');
  const categoryContainer = document.querySelector('.category-container');
  categoryContainer.style.display = 'none';

  products.forEach((item) => {
    const productElement = document.createElement('div');
    const formattedPrice = item.price.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
    productElement.classList.add('product');
    productElement.innerHTML = `
        <div class="image-product">
            <img src="${item.img}" alt="">
        </div>
        <div class="title">
            <p class="heading-name">${item.name}</p>
            <span class="product-price">${formattedPrice}</span>
            <div class="btn-buy" data-product="${item.id}">
                Chọn mua
            </div>
        </div>
        `;
    container.appendChild(productElement);
  });
};

// Call the functions
handleEvent();
renderProductSelling();


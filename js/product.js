<<<<<<< HEAD
const products = [
    {
        id: 1,
        name: 'Chôm Chôm',
        price: 5000,
        quantity: 10,
        img: './image/product-fresh/chom-chom.jpg',
    },
    {
        id: 2,
        name: 'Dưa Hấu',
        price: 8000,
        quantity: 15,
        img: './image/product-fresh/dua-hau.jpg',
    },
    {
        id: 3,
        name: 'Dưa Lưới',
        price: 7000,
        quantity: 12,
        img: './image/product-fresh/dua-luoi.jpg',
    },
    {
        id: 4,
        name: 'Hồng Giòn',
        price: 6000,
        quantity: 20,
        img: './image/product-fresh/hong-gion.jpg',
    },
    {
        id: 5,
        name: 'Hồng Trung',
        price: 7500,
        quantity: 8,
        img: './image/product-fresh/Hong-Trung.jpg',
    },
    {
        id: 6,
        name: 'Măng Cụt',
        price: 10000,
        quantity: 18,
        img: './image/product-fresh/mang-cut.jpg',
    },
    {
        id: 7,
        name: 'Nhãn Xuồng',
        price: 9000,
        quantity: 14,
        img: './image/product-fresh/Nhan-Xuong.jpg',
    },
    {
        id: 8,
        name: 'Sầu Riêng',
        price: 11000,
        quantity: 22,
        img: './image/product-fresh/Sau-Rieng.jpg',
    },
    {
        id: 9,
        name: 'Vú Sữa',
        price: 12000,
        quantity: 7,
        img: './image/product-fresh/Sau-Rieng.jpg',
    },
    {
        id: 10,
        name: 'Cam Xoàn',
        price: 12000,
        quantity: 7,
        img: './image/product-fresh/Cam-Xoan.jpg',
    },
    {
        id: 11,
        name: 'Cam Ai Cập',
        price: 6500,
        quantity: 25,
        img: './image/product-import/cam-ai-cap.jpg',
    },
    {
        id: 12,
        name: 'Cam Úc',
        price: 8500,
        quantity: 12,
        img: './image/product-import/cam-uc.jpg',
    },
    {
        id: 13,
        name: 'Cherry Đỏ Mỹ',
        price: 3000,
        quantity: 30,
        img: './image/product-import/cherry-do-my.jpg',
    },
    {
        id: 14,
        name: 'Dâu Tây',
        price: 9000,
        quantity: 17,
        img: './image/product-import/dau-tay.jpg',
    },
    {
        id: 15,
        name: 'Lê Nam Phi',
        price: 4000,
        quantity: 40,
        img: './image/product-import/le-nam-phi.jpg',
    },
    {
        id: 16,
        name: 'Lựu Thái',
        price: 6000,
        quantity: 14,
        img: './image/product-import/luu-thai.jpg',
    },
    {
        id: 17,
        name: 'Nho Đỏ Úc',
        price: 11000,
        quantity: 8,
        img: './image/product-import/nho-do-khong-hat-uc.jpg',
    },
    {
        id: 18,
        name: 'Nho Mẫu Đơn',
        price: 7500,
        quantity: 13,
        img: './image/product-import/nho-mau-don-dai-loan.jpg',
    },
    {
        id: 19,
        name: 'Táo Neazealand',
        price: 13000,
        quantity: 9,
        img: './image/product-import/tao-do-neazealand.jpg',
    },
    {
        id: 20,
        name: 'Viết Quất',
        price: 9500,
        quantity: 16,
        img: './image/product-import/viet-quat.jpg',
    },
    {
        id: 21,
        name: 'Giỏ Trái Cây Thăm Tặng',
        price: 12000,
        quantity: 14,
        img: './image/product-cart/CT01-CTT-500k.jpg',
    },
    {
        id: 22,
        name: 'Giỏ Trái Cây Gia Đình',
        price: 9000,
        quantity: 20,
        img: './image/product-cart/gio-trai-cay-579.jpg',
    },
    {
        id: 23,
        name: 'Giỏ Quà Trái Cây',
        price: 8500,
        quantity: 11,
        img: './image/product-cart/gio-trai-cay-citi-fruit.jpg',
    },
    {
        id: 24,
        name: 'Hộp Trái Cây-Nho',
        price: 15000,
        quantity: 20,
        img: './image/product-cart/hop-trai-cay-qua-tang-nho-xanh.jpg',
    },
    {
        id: 25,
        name: 'Hộp Trái Cây Quà Tặng',
        price: 12000,
        quantity: 15,
        img: './image/product-cart/hop-trai-cay-qua-tang.jpg',
    },
    {
        id: 26,
        name: 'Hộp Nho Không Hạt',
        price: 18000,
        quantity: 12,
        img: './image/product-cart/hop-trai-cay-qua-tang-nho-xanh-khong-hat.jpg',
    },

    {
        id: 27,
        name: 'Hộp Trái Cây',
        price: 16000,
        quantity: 18,
        img: './image/product-cart/hop-trai-cay-qua-tang-hc03.jpg',
    },
    {
        id: 28,
        name: 'Giỏ Quà Thăm Tặng',
        price: 13000,
        quantity: 25,
        img: './image/product-cart/qua-tang.jpg',
    },
    {
        id: 29,
        name: 'Giỏ Quà Đơn Giản',
        price: 14000,
        quantity: 14,
        img: './image/product-cart/thiet-ke.png',
    },
    {
        id: 30,
        name: 'Giỏ Quà Sinh Nhật',
        price: 14000,
        quantity: 14,
        img: './image/product-cart/sinh-nhat.jpg',
    }
];
const handleEvent = function () {
    const productEvent = document.querySelector('#product');
    const categoryContainer = document.querySelector('.category-container');
    const checkboxs = categoryContainer.querySelectorAll('.menu-product');
    const self = this;

    productEvent.onclick = function () {
        categoryContainer.style.display = 'block';
        checkboxs.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if (this.checked) {
                    self.renderProductsByCategory(this.value);
                }
            });
        });
    };
};

const renderProductsByCategory = function (category) {
    const container = document.querySelector('.box-container');
    container.innerHTML = '';

    const filteredProducts = products.filter(function (item) {
        return item.category === category;
    });

    if (filteredProducts.length === 0) {
        console.log("No products in this category");
    }

    filteredProducts.forEach(item => {
        const productElement = document.createElement('div');
        const formattedPrice = item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        productElement.classList.add('product');
        productElement.innerHTML = `
        <div class="image-product">
            <img src="${item.img}" alt="">
        </div>
        <div class="title">
            <p class="heading-name">${item.name}</p>
            <span class="product-price">${formattedPrice}</span>
            <div class="btn-buy">
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

    products.forEach(item => {
        const productElement = document.createElement('div');
        const formattedPrice = item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        productElement.classList.add('product');
        productElement.innerHTML = `
        <div class="image-product">
            <img src="${item.img}" alt="">
        </div>
        <div class="title">
            <p class="heading-name">${item.name}</p>
            <span class="product-price">${formattedPrice}</span>
            <div class="btn-buy">
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
=======
const product = {
  products: [
    {
      manhom: 1,
      id: 1,
      name: 'Sản phẩm 1',
      price: 1500,
      img: './image/product1.jpg',
      priceOld: 1500,
    },
    {
      manhom: 1,
      id: 2,
      name: 'Sản phẩm 2',
      price: 1500,
      img: './image/product1.jpg',
      priceOld: 1500,
    },
    {
      manhom: 1,
      id: 3,
      name: 'Sản phẩm 3',
      price: 1500,
      img: './image/product1.jpg',
      priceOld: 1500,
    },
    {
      manhom: 1,
      id: 4,
      name: 'Sản phẩm 4',
      price: 1500,
      img: './image/product1.jpg',
      priceOld: 1500,
    },
    {
      manhom: 2,
      id: 5,
      name: 'Sản phẩm 5',
      price: 1500,
      img: './image/product1.jpg',
      priceOld: 1500,
    },
    {
      manhom: 2,
      id: 6,
      name: 'Sản phẩm 6',
      price: 1500,
      img: './image/product1.jpg',
      priceOld: 1500,
    },
    {
      manhom: 2,
      id: 7,
      name: 'Sản phẩm 7',
      price: 1500,
      img: './image/product1.jpg',
      priceOld: 1500,
    },
    {
      manhom: 2,
      id: 8,
      name: 'Sản phẩm 8',
      price: 1500,
      img: './image/product1.jpg',
      priceOld: 1500,
    },
  ],
  categories: [
    'Danh mục 1 Danh mục 1 Danh mục 1 Danh mục 1',
    'Danh mục 2',
    'Danh mục 3',
    // Thêm các danh mục ở đây
  ],
  handleEvent: function () {
    const productEvent = document.querySelector('#product');
    const categoryContainer = document.querySelector('.category-container');
    productEvent.onclick = function () {
      categoryContainer.style.display = 'block';
    };
  },
  // category
  renderCategories: function () {
    const categoryContainer = document.querySelector('.category-container');
    this.categories.forEach((category) => {
      categoryContainer.innerHTML = `
                <div>
                    <ul>
                        <li>danh mục 1</li>
                        <li>danh mục 1</li>
                        <li>danh mục 1</li>
                    </ul>
                </div>
           `;
    });
  },
  // sản phẩm bán chạy
  renderProductSelling: function () {
    const container = document.querySelector('.box-container');
    const categoryContainer = document.querySelector('.category-container');
    categoryContainer.style.display = 'none';
    this.products.forEach((item) => {
      const productElement = document.createElement('div');
      const formattedPrice = item.price.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
      productElement.classList.add('product');
      productElement.innerHTML = `
            <a class="eye" href="">
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
            <h3>${item.name}</h3>
            <span>${formattedPrice}</span>
            <button class="btn addcart"  data-product="${item.id}">
                Thêm vào giỏ
            </button>
            `;
      container.appendChild(productElement);
    });
  },

  start: function () {
    this.renderProductSelling();
    this.renderCategories();
    this.handleEvent();
  },
};
export default product;
>>>>>>> c0586cb8c6553dfdb87a642dbb5b085dd0aff505

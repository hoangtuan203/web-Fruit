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

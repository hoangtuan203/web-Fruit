const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');
const dangnhap = document.getElementById('dangnhap');

const dangky = document.getElementById('dangky');
const login = document.getElementsByClassName('login-register')[0];

const quantity_cart = document.getElementsByClassName('quantity_cart');

let currentIndex = 0;

function updateSlider() {
  const translateX = -currentIndex * 100; // Translate by percentage
  slider.style.transform = `translateX(${translateX}%)`;
}

function previousSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }
  updateSlider();
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
}
previousButton.addEventListener('click', previousSlide);
nextButton.addEventListener('click', nextSlide);

// Initial setup
updateSlider();

const sanpham = JSON.parse(localStorage.getItem('products')) || [
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
  },
  {
    id: 31,
    name: 'Chôm',
    price: 5000,
    quantity: 10,
    img: './image/product-fresh/chom-chom.jpg',
    categoryName: 'fresh-fruit',
  },
];

// get user and cart
const currentuser = JSON.parse(localStorage.getItem('currentuser')) || '';

const currentcart = JSON.parse(localStorage.getItem('currentcart')) || [];

if (currentuser) {
  login.innerHTML = '';
  let div = document.createElement('div');
  div.innerHTML = `<div class="dropdown">
    <button class="dropbtn"><i class="far fa-user"></i></button>
    <div class="dropdown-content">
      <a href="#">${currentuser.email}</a>
      <a href="./user/orderhistory.html">Đơn hàng</a>
      <a href="./block/logout.html">Đăng xuất</a>
    </div>
  </div>`;

  login.appendChild(div);
  let divdropdown = document.getElementsByClassName('dropdown-content')[0];
  console.log(currentuser.role);
  console.log(currentuser.role == 'admin');
  if (currentuser.role == 'admin') {
    let a = document.createElement('a');
    a.href = './admin/admin_index.html';
    a.innerHTML = 'Tới trang admin';
    divdropdown.insertBefore(a, divdropdown.children[0]);
  } else {
  }
}
// add detail
function addEventCart(id, quantity) {
  addtocart(id, quantity);
}
function changeQuantity(action, event) {
  let parentNode = event.target.parentNode;
  console.log(parentNode);
  let input = parentNode.querySelector('.form-control');
  if (action == 2) {
    if (parseInt(input.max) == parseInt(input.value)) {
      return;
    } else {
      input.value = parseInt(input.value) + 1;
    }
  } else {
    console.log(1);
    if (parseInt(input.value) > 1) {
      input.value = parseInt(input.value) - 1;
    } else {
      return;
    }
  }
}
function add(event) {
  let i = event.target.parentNode
    .querySelector('.input-group')
    .querySelector('.form-control');
  let id = parseInt(i.getAttribute('data-id'));

  addEventCart(id, parseInt(i.value));
  i.value = 1;
}

// count quantiy

let countquantity = () => {
  if (currentcart[0]) {
    let quantity = 0;
    currentcart.forEach((element) => {
      quantity += element.soluong;
    });
    quantity_cart[0].innerHTML = `${quantity.toLocaleString()}`;
  } else {
    quantity_cart[0].innerHTML = '0';
  }
};

countquantity();
// add to cart

let addtocart = (product_id, quantity) => {
  let product = sanpham.find((x) => x.id == product_id);

  if (currentcart.length > 0) {
    let checkcart = currentcart.findIndex((x) => x.masanpham == product_id);

    if (checkcart != -1) {
      console.log(1);
      let updatecart = currentcart[checkcart];
      updatecart.soluong = updatecart.soluong + quantity;
      currentcart[checkcart] = updatecart;
      localStorage.setItem('currentcart', JSON.stringify(currentcart));
      alert('Thêm sản phẩm vào giỏ thành công');
    } else {
      console.log(2);
      currentcart.push({
        masanpham: product.id,
        gia: product.price,
        soluong: quantity,
      });

      localStorage.setItem('currentcart', JSON.stringify(currentcart));
      alert('Thêm sản phẩm vào giỏ thành công');
    }
  } else {
    console.log(3);
    currentcart.push({
      masanpham: product.id,
      gia: product.price,
      soluong: quantity,
    });
    localStorage.setItem('currentcart', JSON.stringify(currentcart));
    alert('Thêm sản phẩm vào giỏ thành công');
  }

  countquantity();
};
// 3

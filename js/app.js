const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');
const dangnhap = document.getElementById('dangnhap');
const addcart = document.getElementsByClassName('addcart');
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

const sanpham = JSON.parse(localStorage.getItem('sanpham')) || [
  {
    masanpham: 1,
    manhom: 1,
    mahang: '',
    tensanpham: 'nho',
    ngaynhap: '',
    motta: '',
    soluong: '',
    gia: 30,
    hinhanh: '',
    trangthaisanpham: '',
  },
  {
    masanpham: 2,
    manhom: 2,
    mahang: '',
    tensanpham: 'nho',
    ngaynhap: '',
    motta: '',
    soluong: '',
    gia: 40,
    hinhanh: '',
    trangthaisanpham: '',
  },
];

// get user and cart
const currentuser = JSON.parse(localStorage.getItem('currentuser')) || '';

const currentcart = JSON.parse(localStorage.getItem('currentcart')) || [];

if (currentuser) {
  dangnhap.innerHTML = 'Đăng xuất';
  dangnhap.href = './block/logout.html';
} else {
  dangnhap.innerHTML = 'Đăng nhập';
}
// add event for cart
for (let i = 0; i < addcart.length; i++) {
  addcart[i].addEventListener('click', () => {
    let product_id = parseInt(addcart[i].getAttribute('data-product'));

    addtocart(product_id);
  });
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
let addtocart = (product_id) => {
  let product = sanpham.find((x) => x.masanpham == product_id);

  if (currentuser) {
    if (currentcart.length > 0) {
      let checkcart = currentcart.findIndex((x) => x.masanpham == product_id);

      if (checkcart != -1) {
        let updatecart = currentcart[checkcart];

        updatecart.soluong = updatecart.soluong + 1;
        currentcart[checkcart] = updatecart;
        localStorage.setItem('currentcart', JSON.stringify(currentcart));
      } else {
        currentcart.push({
          masanpham: product_id,
          gia: product.gia,
          soluong: 1,
        });

        localStorage.setItem('currentcart', JSON.stringify(currentcart));
      }
    } else {
      currentcart.push({
        masanpham: product_id,
        gia: product.gia,
        soluong: 1,
      });

      localStorage.setItem('currentcart', JSON.stringify(currentcart));
    }
  } else {
    alert('Đăng nhập trước khi mua');
  }
  countquantity();
};

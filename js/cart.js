const table = document.getElementsByClassName('table');
const tong_tien = document.getElementsByClassName('tong_tien');
const so_luong = document.getElementsByClassName('so_luong');
const order = document.getElementById('order');

// fake so lieu
const currentuser = JSON.parse(localStorage.getItem('currentuser')) || '';
const hoadon = JSON.parse(localStorage.getItem('hoadon')) || [];
const cart = JSON.parse(localStorage.getItem('currentcart')) || [];
const chitiethoadon = JSON.parse(localStorage.getItem('chitiethoadon')) || [];
const sanpham = JSON.parse(localStorage.getItem('sanpham')) || [
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
];
// thay doi so luong vat pham

function reloadCard() {
  let count = 0;
  let totalPrice = 0;
  table[0].innerHTML = '';
  let tr = document.createElement('tr');
  tr.innerHTML = ` <th >Hình ảnh</th>
 <th>Tên sản phẩm</th>
 <th>Giá</th>
 <th >Số lượng</th>`;
  table[0].appendChild(tr);
  cart.forEach((value, key) => {
    count += value.soluong;
    totalPrice += value.gia * value.soluong;

    let product = sanpham.find((x) => x.id == value.masanpham);
    let tr = document.createElement('tr');

    tr.innerHTML = `
                <td><img src=".${product.img}"/></td>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString()}</td>
                <td>               <div class="item">
                <button onclick="changeQuantity(${key}, ${
      value.soluong - 1
    })">-</button>
                <div class="count">${value.soluong}</div>
                <button onclick="changeQuantity(${key}, ${
      value.soluong + 1
    },)">+</button>
                <button onclick="deleteProduct(${key})">Xóa</button>
                </div> </td>`;

    table[0].appendChild(tr);
  });

  tong_tien[0].innerHTML = `Tổng tiền:${totalPrice.toLocaleString()}đ`;
  so_luong[0].innerHTML = `Tổng sản phẩm:${count.toLocaleString()}`;
}
reloadCard();
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    cart.splice(key, 1);
  } else {
    cart[key].soluong = quantity;
  }
  localStorage.setItem('currentcart', JSON.stringify(cart));
  reloadCard();
}
let deleteProduct = (key) => {
  cart.splice(key, 1);

  localStorage.setItem('currentcart', JSON.stringify(cart));
  reloadCard();
};
// order
order.addEventListener('click', () => {
  if (currentuser) {
    const cart = JSON.parse(localStorage.getItem('currentcart')) || [];
    if (cart.length == 0) {
      alert('Chọn ít nhất 1 sản phẩm');
      return;
    }
    let today = new Date().toISOString().slice(0, 10);
    let mahoadon = hoadon.length + 1;
    let tong_tien = 0;
    cart.map((x) => {
      tong_tien += x.soluong * x.gia;
    });
    hoadon.push({
      makhach: currentuser.user_id,
      mahoadon: mahoadon,
      ngaymua: today,
      trangthaihoadon: 'Chờ xử lý',
      tongtien: tong_tien,
    });

    cart.map((x) => {
      x['mahoadon'] = mahoadon;
      chitiethoadon.push(x);
    });
    localStorage.setItem('hoadon', JSON.stringify(hoadon));
    localStorage.setItem('chitiethoadon', JSON.stringify(chitiethoadon));
    localStorage.removeItem('currentcart');

    alert('Đặt hàng thành công đơn hàng chờ xử lý');
    window.location.href = '../index.html';
  } else {
    alert('Đăng nhập trước khi mua');
  }
});

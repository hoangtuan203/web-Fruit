const thongkeitem = document.getElementById('thongke');
const content = document.getElementsByClassName('content')[0];
//hien thi menu left

var menu_left = document.getElementsByClassName('menu-left')[0];
function PhongSide() {
  menu_left.style.width = '250px';
  var menuItems = document.querySelectorAll('.list-menu-item');
  menuItems.forEach(function (item) {
    item.classList.remove('hide-text');
  });
}
// Ẩn menu left
function ThuSide() {
  menu_left.style.width = '80px';
  var menuItems = document.querySelectorAll('.list-menu-item');
  menuItems.forEach(function (item) {
    item.classList.add('hide-text');
  });
}
// xử lí phân trang
let thisPage = 1;
let limit = 5;
let list = document.querySelectorAll('.list-product .item');

function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage;

  list.forEach((item, key) => {
    if (key >= beginGet && key < endGet) {
      item.style.display = 'table-row'; // Chuyển style display về 'table-row' thay vì 'block'
    } else {
      item.style.display = 'none';
    }
  });
  listPage();
}

loadItem();

function listPage() {
  let count = Math.ceil(list.length / limit);
  let listPageContainer = document.querySelector('.listPage');
  listPageContainer.innerHTML = '';

  if (thisPage > 1) {
    let prev = document.createElement('li');
    prev.innerText = '<';
    prev.setAttribute('onclick', `changePage(${thisPage - 1})`);
    listPageContainer.appendChild(prev);
  }

  for (let i = 1; i <= count; i++) {
    let page = document.createElement('li');
    page.innerText = i;
    if (i === thisPage) {
      page.classList.add('active');
    }
    page.setAttribute('onclick', `changePage(${i})`);
    listPageContainer.appendChild(page);
  }

  if (thisPage < count) {
    let next = document.createElement('li');
    next.innerText = '>';
    next.setAttribute('onclick', `changePage(${thisPage + 1})`);
    listPageContainer.appendChild(next);
  }
}

function changePage(newPage) {
  thisPage = newPage;
  loadItem();
}
//delete row table
// Lấy danh sách các nút "Xóa"
// Lấy danh sách các nút "Xóa"
const deleteButtons = document.querySelectorAll('.btn-delete');

// Lặp qua từng nút và gán sự kiện click cho nút "Xóa"
deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener('click', function () {
    // Sử dụng hàm confirm để hiển thị cửa sổ xác nhận
    const confirmed = window.confirm('Bạn có chắc muốn xóa?');

    // Nếu người dùng chọn "OK" trong cửa sổ xác nhận, thực hiện xóa dòng
    if (confirmed) {
      const row = this.closest('tr'); // Tìm dòng gần nhất chứa nút "Xóa"
      if (row) {
        row.remove(); // Xóa dòng ra khỏi bảng
      }
    }
  });
});

//thong ke

const chitiethoadon = JSON.parse(localStorage.getItem('chitiethoadon')) || [];
const hoadon = JSON.parse(localStorage.getItem('hoadon')) || [];
const nhomsanpham = JSON.parse(localStorage.getItem('nhom')) || [
  {
    manhom: 1,
    tennhom: 'Nhóm 1',
  },
  {
    manhom: 2,
    tennhom: 'Nhóm 2',
  },
];
const sanpham = JSON.parse(localStorage.getItem('sanpham')) || [
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

let today = new Date().toISOString().slice(0, 10);
let doanhthu = (chitiethoadon) => {
  let map = new Map();
  chitiethoadon.map((x) => {
    let sanpham = x.masanpham;
    let tien = map.get(x.masanpham);
    let temp = x.soluong * x.gia;
    if (tien) {
      map.set(sanpham, temp + tien);
    } else {
      map.set(sanpham, temp);
    }
  });
  return map;
};

let thongke = (ngaybatdau, ngayketthuc, nhom) => {
  if (chitiethoadon.length == 0) {
    return new Map();
  }
  let hoadonngay = hoadon
    .filter((x) => {
      return x.ngaymua >= ngaybatdau && x.ngaymua <= ngayketthuc;
    })
    .map((y) => {
      return y.mahoadon;
    });

  let sanphamnhom;
  if (nhom == 'all') {
    sanphamnhom = sanpham.map((y) => {
      return y.id;
    });
  } else {
    sanphamnhom = sanpham
      .filter((x) => {
        return x.manhom == nhom;
      })
      .map((y) => {
        return y.id;
      });
  }

  let thongkearray = chitiethoadon.filter((x) => {
    if (sanphamnhom.includes(x.masanpham) && hoadonngay.includes(x.mahoadon))
      return x;
  });

  return doanhthu(thongkearray);
};

// load data

let loaddata = (map) => {
  const itemsPerPage = 5; // Số sản phẩm trên mỗi trang
  let currentPage = 1; // Trang hiện tại
  let nhom = document.getElementById('nhom');
  // const table = document.getElementsByClassName('table');
  let nhomhientai = nhom.value;
  let sanphamnhom;
  if (nhomhientai == 'all') {
    sanphamnhom = sanpham;
  } else {
    sanphamnhom = sanpham.filter((x) => {
      return x.manhom == nhomhientai;
    });
  }

  function displayProducts(page) {
    const tableBody = document.getElementById('tableBody');
    const pagination = document.getElementById('pagination');
    tableBody.innerHTML = '';

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = sanphamnhom.slice(start, end);

    paginatedProducts.forEach((product) => {
      const row = tableBody.insertRow();
      let giatien = map.get(product.id);
      if (giatien) {
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.manhom}</td>
            <td>${product.name}</td>
            <td>${giatien.toLocaleString()}</td>
        `;
      } else {
        row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.manhom}</td>
        <td>${product.name}</td>
        <td>${0}</td>
    `;
      }
    });

    const totalPages = Math.ceil(sanphamnhom.length / itemsPerPage);
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.innerText = i;
      if (currentPage == i) btn.style.backgroundColor = '#039201';

      btn.addEventListener('click', function () {
        currentPage = i;
        displayProducts(currentPage);
      });

      pagination.appendChild(btn);
    }
  }

  // Hiển thị sản phẩm cho trang đầu tiên khi trang web được tải
  displayProducts(currentPage);
};

let tainhom = () => {
  let nhom = document.getElementById('nhom');

  let option = document.createElement('option');
  option.value = 'all';
  option.innerHTML = `Tất cả nhóm`;
  nhom.appendChild(option);
  nhomsanpham.map((x) => {
    let option = document.createElement('option');
    option.value = x.manhom;
    option.innerHTML = `${x.tennhom}`;
    nhom.appendChild(option);
  });
};
thongkeitem.addEventListener('click', () => {
  content.innerHTML = '';
  let div = document.createElement('div');
  div.className = 'container-thongke';
  div.innerHTML = `<div class="left-content">
  <form action="" class="form-thongke"  method="POST">
    <div class="text-form">
      <span>Thống kê</span>
    </div>
    <div class="form-item">
      <div class="item">
        <label for="birthday">Ngày bắt đầu:</label>
        <input type="date" id="ngaybatdau" name="birthday" />
      </div>
      <div class="item">
        <label for="birthday">Ngày kết thúc:</label>
        <input type="date" id="ngayketthuc" name="" />
      </div>
    </div>
    <div class="form-select">
      <label for="cars">Chọn nhóm:</label>
      <select name="nhom" id="nhom"></select>
    </div>
    <button class="form-button" type="submit">Thống kê ngay</button>
  </form>
</div>
<
<div class="right-content">
<table id="productTable">
<thead>
  <tr>
    <th>Mã Sản Phẩm</th>
    <th>Nhóm</th>
    <th>Tên Sản Phẩm</th>
    <th>Lợi nhuận</th>
  </tr>
</thead>
<tbody id="tableBody">
  <!-- Dữ liệu sản phẩm sẽ được thêm vào đây -->
</tbody>
</table>
<div id="pagination"></div>
</div>
`;
  content.appendChild(div);
  tainhom();

  const form = document.getElementsByClassName('form-thongke')[0];
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let nhomhientai = nhom.value;
    let ngaybatdau = document.getElementById('ngaybatdau').value;
    let ngayketthuc = document.getElementById('ngayketthuc').value;

    let map = thongke(ngaybatdau, ngayketthuc, nhomhientai);
    loaddata(map);
  });
});

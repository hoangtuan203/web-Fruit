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
  //   table[0].innerHTML = '';
  //   let thead = document.createElement('thead');
  //   let tr = document.createElement('tr');
  //   tr.innerHTML = ` <th >STT</th>
  //  <th >Nhóm</th>
  //  <th >Tên sản phẩm</th>
  //  <th ">Lợi nhuận</th>`;
  //   thead.appendChild(tr);
  //   table[0].appendChild(thead);
  //   let tbody = document.createElement('tbody');
  //   sanphamnhom.map((x) => {
  //     let tr = document.createElement('tr');

  //     tr.innerHTML = `<td>${x.id}</td>
  //   <td>${x.manhom}</td>
  //   <td>${x.name}</td>`;
  //     let td = document.createElement('td');
  //     let giatien = map.get(x.id);
  //     if (giatien) {
  //       td.innerHTML = `${giatien.toLocaleString()}`;
  //     } else {
  //       td.innerHTML = `${0}`;
  //     }
  //     tr.appendChild(td);
  //     tbody.appendChild(tr);
  //   });
  //   table[0].appendChild(tbody);
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

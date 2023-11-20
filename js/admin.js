const storedProductsJSON = localStorage.getItem("products");
const storedProducts = JSON.parse(storedProductsJSON);
const thongkeitem = document.getElementById("thongke");
const content = document.getElementsByClassName("content")[0];
const donhangitem = document.getElementById("donhang");
const showProduct = document.getElementById("productId");
const productsPerPage = 10;

//hien thi menu left

const menu_left = document.getElementById("menuLeft");
function PhongSide() {
  menu_left.style.width = "250px";
  var menuItems = document.querySelectorAll(".list-menu-item");
  menuItems.forEach(function (item) {
    item.classList.remove("hide-text");
  });
}
// Ẩn menu left
function ThuSide() {
  menu_left.style.width = "80px";
  var menuItems = document.querySelectorAll(".list-menu-item");
  menuItems.forEach(function (item) {
    item.classList.add("hide-text");
  });
}
document.addEventListener("DOMContentLoaded", function () {
  ThuSide();
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
    name: "Chôm Chôm",
    price: 5000,
    quantity: 10,
    img: "./image/product-fresh/chom-chom.jpg",
  },
  {
    manhom: 1,
    id: 2,
    name: "Dưa Hấu",
    price: 8000,
    quantity: 15,
    img: "./image/product-fresh/dua-hau.jpg",
  },
  {
    manhom: 1,
    id: 3,
    name: "Dưa Lưới",
    price: 7000,
    quantity: 12,
    img: "./image/product-fresh/dua-luoi.jpg",
  },
  {
    manhom: 1,
    id: 4,
    name: "Hồng Giòn",
    price: 6000,
    quantity: 20,
    img: "./image/product-fresh/hong-gion.jpg",
  },
  {
    manhom: 1,
    id: 5,
    name: "Hồng Trung",
    price: 7500,
    quantity: 8,
    img: "./image/product-fresh/Hong-Trung.jpg",
  },
  {
    manhom: 1,
    id: 6,
    name: "Măng Cụt",
    price: 10000,
    quantity: 18,
    img: "./image/product-fresh/mang-cut.jpg",
  },
  {
    manhom: 1,
    id: 7,
    name: "Nhãn Xuồng",
    price: 9000,
    quantity: 14,
    img: "./image/product-fresh/Nhan-Xuong.jpg",
  },
  {
    manhom: 1,
    id: 8,
    name: "Sầu Riêng",
    price: 11000,
    quantity: 22,
    img: "./image/product-fresh/Sau-Rieng.jpg",
  },
  {
    manhom: 1,
    id: 9,
    name: "Vú Sữa",
    price: 12000,
    quantity: 7,
    img: "./image/product-fresh/Sau-Rieng.jpg",
  },
  {
    manhom: 1,
    id: 10,
    name: "Cam Xoàn",
    price: 12000,
    quantity: 7,
    img: "./image/product-fresh/Cam-Xoan.jpg",
  },
  {
    manhom: 1,
    id: 11,
    name: "Cam Ai Cập",
    price: 6500,
    quantity: 25,
    img: "./image/product-import/cam-ai-cap.jpg",
  },
  {
    manhom: 1,
    id: 12,
    name: "Cam Úc",
    price: 8500,
    quantity: 12,
    img: "./image/product-import/cam-uc.jpg",
  },
  {
    manhom: 1,
    id: 13,
    name: "Cherry Đỏ Mỹ",
    price: 3000,
    quantity: 30,
    img: "./image/product-import/cherry-do-my.jpg",
  },
  {
    manhom: 1,
    id: 14,
    name: "Dâu Tây",
    price: 9000,
    quantity: 17,
    img: "./image/product-import/dau-tay.jpg",
  },
  {
    manhom: 1,
    id: 15,
    name: "Lê Nam Phi",
    price: 4000,
    quantity: 40,
    img: "./image/product-import/le-nam-phi.jpg",
  },
  {
    manhom: 2,
    id: 16,
    name: "Lựu Thái",
    price: 6000,
    quantity: 14,
    img: "./image/product-import/luu-thai.jpg",
  },
  {
    manhom: 2,
    id: 17,
    name: "Nho Đỏ Úc",
    price: 11000,
    quantity: 8,
    img: "./image/product-import/nho-do-khong-hat-uc.jpg",
  },
  {
    manhom: 2,
    id: 18,
    name: "Nho Mẫu Đơn",
    price: 7500,
    quantity: 13,
    img: "./image/product-import/nho-mau-don-dai-loan.jpg",
  },
  {
    manhom: 2,
    id: 19,
    name: "Táo Neazealand",
    price: 13000,
    quantity: 9,
    img: "./image/product-import/tao-do-neazealand.jpg",
  },
  {
    manhom: 2,
    id: 20,
    name: "Viết Quất",
    price: 9500,
    quantity: 16,
    img: "./image/product-import/viet-quat.jpg",
  },
  {
    manhom: 2,
    id: 21,
    name: "Giỏ Trái Cây Thăm Tặng",
    price: 12000,
    quantity: 14,
    img: "./image/product-cart/CT01-CTT-500k.jpg",
  },
  {
    manhom: 2,
    id: 22,
    name: "Giỏ Trái Cây Gia Đình",
    price: 9000,
    quantity: 20,
    img: "./image/product-cart/gio-trai-cay-579.jpg",
  },
  {
    manhom: 2,
    id: 23,
    name: "Giỏ Quà Trái Cây",
    price: 8500,
    quantity: 11,
    img: "./image/product-cart/gio-trai-cay-citi-fruit.jpg",
  },
  {
    manhom: 2,
    id: 24,
    name: "Hộp Trái Cây-Nho",
    price: 15000,
    quantity: 20,
    img: "./image/product-cart/hop-trai-cay-qua-tang-nho-xanh.jpg",
  },
  {
    manhom: 2,
    id: 25,
    name: "Hộp Trái Cây Quà Tặng",
    price: 12000,
    quantity: 15,
    img: "./image/product-cart/hop-trai-cay-qua-tang.jpg",
  },
  {
    manhom: 2,
    id: 26,
    name: "Hộp Nho Không Hạt",
    price: 18000,
    quantity: 12,
    img: "./image/product-cart/hop-trai-cay-qua-tang-nho-xanh-khong-hat.jpg",
  },

  {
    manhom: 2,
    id: 27,
    name: "Hộp Trái Cây",
    price: 16000,
    quantity: 18,
    img: "./image/product-cart/hop-trai-cay-qua-tang-hc03.jpg",
  },
  {
    manhom: 2,
    id: 28,
    name: "Giỏ Quà Thăm Tặng",
    price: 13000,
    quantity: 25,
    img: "./image/product-cart/qua-tang.jpg",
  },
  {
    manhom: 2,
    id: 29,
    name: "Giỏ Quà Đơn Giản",
    price: 14000,
    quantity: 14,
    img: "./image/product-cart/thiet-ke.png",
  },
  {
    manhom: 2,
    id: 30,
    name: "Giỏ Quà Sinh Nhật",
    price: 14000,
    quantity: 14,
    img: "./image/product-cart/sinh-nhat.jpg",
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
  if (nhom == "all") {
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
  let nhom = document.getElementById("nhom");
  // const table = document.getElementsByClassName('table');
  let nhomhientai = nhom.value;
  let sanphamnhom;
  if (nhomhientai == "all") {
    sanphamnhom = sanpham;
  } else {
    sanphamnhom = sanpham.filter((x) => {
      return x.manhom == nhomhientai;
    });
  }

  function displayProducts(page) {
    const tableBody = document.getElementById("tableBody");
    const pagination = document.getElementById("pagination");
    tableBody.innerHTML = "";

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
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.innerText = i;
      if (currentPage == i) btn.style.backgroundColor = "#039201";

      btn.addEventListener("click", function () {
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
  let nhom = document.getElementById("nhom");

  let option = document.createElement("option");
  option.value = "all";
  option.innerHTML = `Tất cả nhóm`;
  nhom.appendChild(option);
  nhomsanpham.map((x) => {
    let option = document.createElement("option");
    option.value = x.manhom;
    option.innerHTML = `${x.tennhom}`;
    nhom.appendChild(option);
  });
};

thongkeitem.addEventListener("click", () => {
  content.innerHTML = "";
  let div = document.createElement("div");
  div.className = "container-thongke";
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

  const form = document.getElementsByClassName("form-thongke")[0];
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let nhomhientai = nhom.value;
    let ngaybatdau = document.getElementById("ngaybatdau").value;
    let ngayketthuc = document.getElementById("ngayketthuc").value;

    let map = thongke(ngaybatdau, ngayketthuc, nhomhientai);
    loaddata(map);
  });
});


// xu ly don hang

donhangitem.addEventListener("click", () => {
  content.innerHTML = "";
  let div = document.createElement("div");
  div.className = "container-thongke";
  div.innerHTML = `<div class="container-order">
        <h1 class="title">Quản lý hóa đơn</h1>
        <div class="order-status-container">
            <div class="container-order-status">
                <h3 class="title-status">Trạng thái hóa đơn</h3>
                <div class="order-status">
                    <div class="block">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z" stroke="#039201" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z" stroke="#039201" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 13H12" stroke="#039201" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 17H16" stroke="#039201" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="quantity">200</span>
                        <span class="status">Tất cả</span>
                    </div>
                    <div class="block">
                        <svg width="30px" height="30px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.706 0.290 C 7.484 0.362,7.356 0.490,7.294 0.699 C 7.259 0.816,7.253 1.088,7.253 2.508 C 7.253 4.389,7.251 4.365,7.443 4.557 C 7.700 4.813,8.300 4.813,8.557 4.557 C 8.749 4.365,8.747 4.389,8.747 2.508 C 8.747 0.688,8.744 0.656,8.596 0.480 C 8.472 0.333,8.339 0.284,8.040 0.276 C 7.893 0.272,7.743 0.278,7.706 0.290 M2.753 2.266 C 2.595 2.338,2.362 2.566,2.281 2.728 C 2.197 2.897,2.193 3.085,2.269 3.253 C 2.343 3.418,4.667 5.750,4.850 5.843 C 5.109 5.976,5.375 5.911,5.643 5.649 C 5.907 5.391,5.977 5.111,5.843 4.850 C 5.750 4.667,3.418 2.343,3.253 2.269 C 3.101 2.200,2.901 2.199,2.753 2.266 M12.853 2.282 C 12.730 2.339,12.520 2.536,11.518 3.541 C 10.597 4.464,10.316 4.762,10.271 4.860 C 10.195 5.025,10.196 5.216,10.272 5.378 C 10.342 5.528,10.572 5.764,10.727 5.845 C 10.884 5.927,11.117 5.926,11.280 5.843 C 11.447 5.757,13.757 3.447,13.843 3.280 C 13.926 3.118,13.927 2.884,13.846 2.729 C 13.764 2.572,13.552 2.364,13.392 2.283 C 13.213 2.192,13.048 2.192,12.853 2.282 M0.699 7.292 C 0.404 7.385,0.258 7.620,0.258 7.999 C 0.259 8.386,0.403 8.618,0.698 8.706 C 0.816 8.741,1.079 8.747,2.508 8.747 C 3.997 8.747,4.196 8.742,4.318 8.702 C 4.498 8.644,4.644 8.498,4.702 8.318 C 4.788 8.053,4.745 7.677,4.608 7.491 C 4.578 7.451,4.492 7.384,4.417 7.343 L 4.280 7.267 2.547 7.261 C 1.152 7.257,0.791 7.263,0.699 7.292 M11.745 7.278 C 11.622 7.308,11.452 7.411,11.392 7.492 C 11.255 7.677,11.212 8.053,11.298 8.318 C 11.356 8.498,11.502 8.644,11.682 8.702 C 11.804 8.742,12.003 8.747,13.492 8.747 C 14.921 8.747,15.184 8.741,15.302 8.706 C 15.597 8.618,15.741 8.386,15.742 7.999 C 15.742 7.614,15.595 7.383,15.290 7.291 C 15.187 7.260,14.864 7.254,13.496 7.256 C 12.578 7.258,11.790 7.268,11.745 7.278 M4.853 10.282 C 4.730 10.339,4.520 10.536,3.518 11.541 C 2.597 12.464,2.316 12.762,2.271 12.860 C 2.195 13.025,2.196 13.216,2.272 13.378 C 2.342 13.528,2.572 13.764,2.727 13.845 C 2.884 13.927,3.117 13.926,3.280 13.843 C 3.447 13.757,5.757 11.447,5.843 11.280 C 5.926 11.118,5.927 10.884,5.846 10.729 C 5.764 10.572,5.552 10.364,5.392 10.283 C 5.213 10.192,5.048 10.192,4.853 10.282 M10.753 10.266 C 10.595 10.338,10.362 10.566,10.281 10.728 C 10.197 10.897,10.193 11.085,10.269 11.253 C 10.343 11.418,12.667 13.750,12.850 13.843 C 13.109 13.976,13.375 13.911,13.643 13.649 C 13.907 13.391,13.977 13.111,13.843 12.850 C 13.750 12.667,11.418 10.343,11.253 10.269 C 11.101 10.200,10.901 10.199,10.753 10.266 M7.745 11.277 C 7.620 11.309,7.451 11.412,7.392 11.492 C 7.254 11.678,7.253 11.691,7.253 13.489 C 7.253 14.921,7.259 15.184,7.294 15.302 C 7.382 15.597,7.615 15.741,8.000 15.741 C 8.385 15.741,8.618 15.597,8.706 15.302 C 8.768 15.090,8.767 11.875,8.704 11.690 C 8.644 11.514,8.575 11.430,8.420 11.346 C 8.310 11.286,8.246 11.271,8.057 11.264 C 7.930 11.259,7.790 11.265,7.745 11.277 " stroke="none" fill-rule="evenodd" fill="#039201"></path></svg>
                        <span class="quantity">3</span>
                        <span class="status">Chờ xử lý</span>
                    </div>
                    <div class="block">
                        <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#039201" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M824.8 1003.2H203.2c-12.8 0-25.6-2.4-37.6-7.2-11.2-4.8-21.6-12-30.4-20.8-8.8-8.8-16-19.2-20.8-30.4-4.8-12-7.2-24-7.2-37.6V260c0-12.8 2.4-25.6 7.2-37.6 4.8-11.2 12-21.6 20.8-30.4 8.8-8.8 19.2-16 30.4-20.8 12-4.8 24-7.2 37.6-7.2h94.4v48H203.2c-26.4 0-48 21.6-48 48v647.2c0 26.4 21.6 48 48 48h621.6c26.4 0 48-21.6 48-48V260c0-26.4-21.6-48-48-48H730.4v-48H824c12.8 0 25.6 2.4 37.6 7.2 11.2 4.8 21.6 12 30.4 20.8 8.8 8.8 16 19.2 20.8 30.4 4.8 12 7.2 24 7.2 37.6v647.2c0 12.8-2.4 25.6-7.2 37.6-4.8 11.2-12 21.6-20.8 30.4-8.8 8.8-19.2 16-30.4 20.8-11.2 4.8-24 7.2-36.8 7.2z" fill="" /><path d="M752.8 308H274.4V152.8c0-32.8 26.4-60 60-60h61.6c22.4-44 67.2-72.8 117.6-72.8 50.4 0 95.2 28.8 117.6 72.8h61.6c32.8 0 60 26.4 60 60v155.2m-430.4-48h382.4V152.8c0-6.4-5.6-12-12-12H598.4l-5.6-16c-12-33.6-43.2-56-79.2-56s-67.2 22.4-79.2 56l-5.6 16H334.4c-6.4 0-12 5.6-12 12v107.2zM432.8 792c-6.4 0-12-2.4-16.8-7.2L252.8 621.6c-4.8-4.8-7.2-10.4-7.2-16.8s2.4-12 7.2-16.8c4.8-4.8 10.4-7.2 16.8-7.2s12 2.4 16.8 7.2L418.4 720c4 4 8.8 5.6 13.6 5.6s10.4-1.6 13.6-5.6l295.2-295.2c4.8-4.8 10.4-7.2 16.8-7.2s12 2.4 16.8 7.2c9.6 9.6 9.6 24 0 33.6L449.6 784.8c-4.8 4-11.2 7.2-16.8 7.2z" fill="" /></svg>
                        <span class="quantity">197</span>
                        <span class="status">Đã xử lý</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-body">
            <div class="search-box">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#039201" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input type="text" placeholder="Nhập hóa đơn..." class="search-input">
                <!--<button class="search-btn">Tìm Hóa Đơn</button> -->
                    
            </div>
            <div class="filters-function">
                <div class="orders-time-period">
                    <select name="orders-time-period" id="select-orders">
                        <option value="" selected disabled>Khoảng thời gian</option>
                        <option value="1">Gần đây</option>
                        <option value="3">3 ngày</option>
                        <option value="7">7 ngày</option>
                        <option value="30">30 ngày</option>
                    </select>
                </div>
                <div class="all-filters">
                    <div class="filter">
                        <button class="btn-filter">Tất cả</button>
                    </div>
                    <div class="filter">
                        <button class="btn-filter">Chờ xử lý</button>
                    </div>
                    <div class="filter">
                        <button class="btn-filter">Đã xử lý</button>
                    </div>
                </div>
                <div class="filters">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V6.17157C3 6.70201 3.21071 7.21071 3.58579 7.58579L9.41421 13.4142C9.78929 13.7893 10 14.298 10 14.8284V20V20.2857C10 20.9183 10.7649 21.2351 11.2122 20.7878L12 20L13.4142 18.5858C13.7893 18.2107 14 17.702 14 17.1716V14.8284C14 14.298 14.2107 13.7893 14.5858 13.4142L20.4142 7.58579C20.7893 7.21071 21 6.70201 21 6.17157V5C21 3.89543 20.1046 3 19 3Z" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    lọc
                </div>
            </div>
            <div class="container-remove">
                <button class="remove-all">xóa</button>
            </div>
            <div class="orders-table">
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" id="selectAll"></th>
                            <th>Mã Khách Hàng</th>
                            <th>Mã Hóa Đơn </th>
                            <th>Ngày Mua</th>
                            <th>Trạng Thái</th>
                            <th>Tổng Tiền</th>
                            <th>Chức Năng</th>
                        </tr>
                    </thead>
                    <tbody id = "myTableBody">
                        
                    </tbody>
                </table>
                <div id="pagination-container">
                  <button id="prevButton"><svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <polyline fill="none" stroke="white" stroke-width="2" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)"/>
                    </svg> 
                  </button>
                  <ul id="pagination"></ul>
                  <button id="nextButton"><svg fill="white" height="20px" width="20px" version="1.1" id="XMLID_287_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                      viewBox="0 0 24 24" xml:space="preserve">
                    <g id="next">
                      <g>
                        <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 		"/>
                      </g>
                    </g>
                    </svg>
                  </button>
                </div>
            </div>
        </div>
    </div>
`;
  content.appendChild(div);
  // Lấy dữ liệu từ Local Storage
  var storedData = localStorage.getItem("hoadon");
  var dataList = JSON.parse(storedData) || [];

  // Định danh các khối HTML
  var allBlock = document.querySelector(".block:nth-child(1)");
  var processingBlock = document.querySelector(".block:nth-child(2)");
  var processedBlock = document.querySelector(".block:nth-child(3)");

  // Lọc dữ liệu theo trạng thái
  var allData = dataList.length;
  var processingData = dataList.filter(
    (item) => item.trangthaihoadon === "Chờ xử lý"
  ).length;
  var processedData = dataList.filter(
    (item) => item.trangthaihoadon === "Đã xử lý"
  ).length;

  // Gán dữ liệu vào các phần tử HTML
  allBlock.querySelector(".quantity").innerText = allData;
  processingBlock.querySelector(".quantity").innerText = processingData;
  processedBlock.querySelector(".quantity").innerText = processedData;

  // Đếm số lượng hóa đơn và số lượng hóa đơn đã xử lý
  var totalOrders = dataList.length;
  var processedOrders = dataList.filter(
    (item) => item.trangthaihoadon === "Đã xử lý"
  ).length;

  // Gán số liệu vào các nút lọc
  var allFilter = document.querySelector(
    ".all-filters .filter:nth-child(1) .btn-filter"
  );
  var processingFilter = document.querySelector(
    ".all-filters .filter:nth-child(2) .btn-filter"
  );
  var processedFilter = document.querySelector(
    ".all-filters .filter:nth-child(3) .btn-filter"
  );

  allFilter.innerHTML = `Tất cả (${totalOrders})`;
  processingFilter.innerHTML = `Chờ xử lý (${totalOrders - processedOrders})`;
  processedFilter.innerHTML = `Đã xử lý (${processedOrders})`;

  // Lấy danh sách từ Local Storage
  var storedData = localStorage.getItem("hoadon");
  var dataList = JSON.parse(storedData) || [];
  var itemsPerPage = 10;
  var currentPage = 1;
  // Lấy tham chiếu đến các nút "Next" và "Previous"
  var prevButton = document.getElementById("prevButton");
  var nextButton = document.getElementById("nextButton");
  var totalPages;

  // Thêm sự kiện click cho nút "Next"
  nextButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      displayData(currentPage);
    }
  });

  // Thêm sự kiện click cho nút "Previous"
  prevButton.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      displayData(currentPage);
    }
  });

    function removeItem(mahoadon) {
      // Tạo hộp thoại xác nhận
      var dialog = confirm("Bạn có chắc chắn muốn xóa mục này không?");

      // Nếu người dùng xác nhận, tiến hành xóa
      if (dialog) {
        // Xóa mục khỏi danh sách dữ liệu
        var updatedDataList = dataList.filter(
          (item) => item.mahoadon !== mahoadon
        );

        // Lưu danh sách dữ liệu đã cập nhật vào Local Storage
        localStorage.setItem("hoadon", JSON.stringify(updatedDataList));

        // Cập nhật dữ liệu bảng ngay lập tức
      }
      displayData(currentPage);
      window.location.reload();
    }


  function displayData(page) {
    var start = (page - 1) * itemsPerPage;
    var end = start + itemsPerPage;
    var pageData = dataList.slice(start, end);

    // Clear existing table body content
    document.getElementById("myTableBody").innerHTML = "";

    // Display data in the table
    pageData.forEach(function (item) {
      var row = document.createElement("tr");
      row.innerHTML = `
    <td><input type="checkbox"></td>
    <td>${item.makhach}</td>
    <td>${item.mahoadon}</td>
    <td>${item.ngaymua}</td>
    <td><span class="status-table">${item.trangthaihoadon}</span></td>
    <td>${item.tongtien}</td>
    <td>
      <button class="remove-item" onclick="removeItem('${item.mahoadon}')">Xóa</button>
    </td>
  `;
      document.getElementById("myTableBody").appendChild(row);

      // Add event listener to the "Xóa" button
      var removeButton = row.querySelector(".remove-item");
      removeButton.addEventListener("click", function () {
        removeItem(item.mahoadon);
      });
    });

    currentPage = page;

    // Cập nhật màu sắc của các nút trang
    updatePaginationButtons();
  }



  // Hàm cập nhật màu sắc của các nút trang
  function updatePaginationButtons() {
    var paginationButtons = document.querySelectorAll("#pagination li");

    paginationButtons.forEach(function (button, index) {
      // Nếu nút đang được bấm là trang hiện tại, thay đổi màu sắc
      if (index + 1 === currentPage) {
        button.style.backgroundColor = "#ff8000"; // Hoặc bất kỳ màu sắc nào bạn muốn
        button.style.color = "white"; // Đổi màu chữ nếu cần thiết
      } else {
        // Nếu không, đặt lại màu sắc gốc
        button.style.backgroundColor = "";
        button.style.color = "";
      }
    });
  }

  function setupPagination() {
    totalPages = Math.ceil(dataList.length / itemsPerPage);
    var paginationElement = document.getElementById("pagination");

    for (var i = 1; i <= totalPages; i++) {
      var li = document.createElement("li");
      li.textContent = i;
      li.addEventListener("click", function () {
        currentPage = parseInt(this.textContent);
        displayData(currentPage);
      });
      paginationElement.appendChild(li);
    }
    var firstPagination = document.querySelector("#pagination li:first-child");
    if (firstPagination) {
      firstPagination.style.backgroundColor = "#ff8000";
    }
  }

  // Initial display
  displayData(currentPage);
  setupPagination();
});
//san pham
showProduct.addEventListener("click", () => {
  content.innerHTML = "";
  let div = document.createElement("div");
  div.className = "container-thongke";
  div.innerHTML = `<div class="product">
    <div class="header-product">
      <h1 class="title">QUẢN LÝ SẢN PHẨM</h1>
      <p id="productQuantity">
        Tổng sản phẩm:
        <span id="quantityValue"></span>
      </p>
      <div class="button-header">
        <button class="btn-add" onclick="addProduct()">Thêm SP</button>
        <button
          id="imageInput"
          class="btn-upload-img"
          onclick="showUploadImage()"
        >
          Thêm Ảnh
        </button>
        <button class="btn-delete-all" onclick="deleteSelectedProducts()">
          Xóa Nhiều
        </button>
      </div>
    </div>
    <div id="tableProduct" class="body-product">
    </div>
    <!-- add product -->
    <div id="addProductModal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeAddProductModal()">&times;</span>
        <h2>Thêm sản phẩm mới</h2>
        <form id="addProductForm">
          <label for="productName">Tên Sản Phẩm:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Input Product Name"
          />

          <label for="productPrice">Giá:</label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            placeholder="Input Price"
            required
          />

          <label for="productQuantity">Số Lượng:</label>
          <input
            type="number"
            id="productQuantity"
            name="productQuantity"
            placeholder="Input Quantity"
            required
          />

          <label for="productImage">HÌnh Ảnh:</label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            accept="image/*"
            required
          />

          <button
            class="btn-add-product-new"
            type="button"
            onclick="addProductNew()"
          >
            Thêm Sản Phẩm
          </button>
        </form>
      </div>
    </div>

    <!-- form upload image -->
    <div class="modal" id="addImage">
      <div class="addProductModal">
        <form class="form-upload-image" id="imageUploadForm">
          <div class="headerUpload">
            <label for="imageInput">Chọn Ảnh:</label>
            <span class="closeImage" onclick="closeAddImage()">×</span>
          </div>

          <input
            type="file"
            id="imageInput"
            name="image"
            accept="image/*"
            required
          />
          <button type="button" onclick="uploadImage()">Upload Ảnh</button>
        </form>
      </div>
    </div>
    <div class="pagination">
      <ul class="listPage">
        <li class="active listPage-item">1</li>
        <li class="listPage-item">2</li>
        <li class="listPage-item">3</li>
      </ul>
    </div>
  </div>
  `;
  content.appendChild(div);
  loadProductList(1);
});
//hien thi menu left

//phan trang

function getTotalPages() {
  const storedProductsJSON = localStorage.getItem("storedProducts");
  const storedProducts = storedProductsJSON
    ? JSON.parse(storedProductsJSON)
    : [];
  return Math.ceil(storedProducts.length / productsPerPage);
}
function createPagination(totalPages, currentPage) {
  const paginationContainer = document.querySelector(".pagination");
  paginationContainer.innerHTML = ""; // Clear existing pagination

  const ul = document.createElement("ul");
  ul.classList.add("listPage");

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.classList.add("listPage-item");
    if (i === currentPage) {
      li.classList.add("active");
    }
    li.textContent = i;
    li.addEventListener("click", function () {
      loadProductList(i);
    });
    ul.appendChild(li);
  }

  paginationContainer.appendChild(ul);
}

// Load product
function loadProductList(currentPage) {
  const bodyProduct = document.getElementById("tableProduct");
  console.log(bodyProduct);
  const existingTable = document.getElementById("tbl-product");
  if (existingTable) {
    existingTable.parentNode.removeChild(existingTable);
  }
  // Create a new table
  const table = document.createElement("table");
  table.id = "tbl-product";
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `
      <th>STT</th>
      <th>ID</th>
      <th>Tên Sản Phẩm</th>
      <th>Giá(VNĐ)</th>
      <th>Số Lượng</th>
      <th>Hình Ảnh</th>
      <th>Chọn</th>
      <th>Chức Năng</th>
  `;

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const storedProductsJSON = localStorage.getItem("storedProducts");
  const storedProducts = storedProductsJSON
    ? JSON.parse(storedProductsJSON)
    : [];


  currentPage = currentPage || 1;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  displayedProducts = storedProducts.slice(startIndex, endIndex);

  displayedProducts.forEach((item, index) => {
    const row = createTableRow(item, startIndex + index);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  bodyProduct.appendChild(table);

  const totalPages = getTotalPages();
  createPagination(totalPages, currentPage);
  quantityProduct();
}

function createTableRow(item, index) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.quantity}</td>
    <td><img src="../image/product-fresh/${
      item.img
    }" style="max-width: 50px; max-height: 50px; background-color:transparent;"></td>
    <td class="product-checkbox" >  
      <input  type="checkbox" id="checkbox-${item.id}">
    </td>
    <td>
      <button class="btn-edit-product" onclick="editProduct(${
        item.id
      })">Sửa</button>
      <button class="btn-delete-product" onclick="deleteProduct(${
        item.id
      })">Xóa</button>
    </td>
  `;

  row.addEventListener("click", function () {
    const checkbox = row.querySelector(".product-checkbox");
    checkbox.checked = !checkbox.checked;
  });

  return row;
}
// Call the function to load the product list
function closeAddProductModal() {
  const modal = document.getElementById("addProductModal");
  modal.style.display = "none";
}
function addProduct() {
  const modal = document.getElementById("addProductModal");
  modal.style.display = "block";
}
function addProductNew() {
  const productName = document.getElementById("productName").value.trim();
  const productPrice = parseFloat(
    document.getElementById("productPrice").value
  );
  const productQuantity = parseInt(
    document.getElementById("productQuantity").value
  );
  const productImageInput = document.getElementById("productImage");

  // Extract only the file name from the full path
  const productImage = productImageInput.files[0]
    ? productImageInput.files[0].name
    : "";

  const storedProductsJSON = localStorage.getItem("storedProducts");
  const storedProducts = storedProductsJSON
    ? JSON.parse(storedProductsJSON)
    : [];

  const maxId = storedProducts.reduce(
    (max, product) => (product.id > max ? product.id : max),
    0
  );

  const newProduct = {
    id: maxId + 1,
    name: productName,
    price: productPrice,
    quantity: productQuantity,
    img: productImage,
  };

  storedProducts.push(newProduct);
  localStorage.setItem("storedProducts", JSON.stringify(storedProducts));
  loadProductList();
  alert("Thêm Sản Phẩm Thành Công !");
  closeAddProductModal();
}

//delete product
function deleteProduct(productId) {
  const index = storedProducts.findIndex((product) => product.id === productId);
  if (index !== -1) {
    const confirmation = window.confirm("Bạn muốn xóa sản phẩm này?");

    if (confirmation) {
      const deletedProduct = storedProducts.splice(index, 1)[0]; // Remove and get the deleted product
      localStorage.setItem("storedProducts", JSON.stringify(storedProducts));
      const table = document.getElementById("tbl-product");
      if (table) {
        table.parentNode.removeChild(table);
      }
      loadProductList();
    }
  }
}
//xoa nhieu san pham
function deleteSelectedProducts() {
  const checkboxes = document.querySelectorAll(".product-checkbox:checked");
  const selectedProductIds = Array.from(checkboxes).map((checkbox) =>
    parseInt(checkbox.dataset.id, 10)
  );

  if (selectedProductIds.length === 0) {
    alert("Vui lòng chọn ít nhất một sản phẩm để xóa.");
    return;
  }

  const confirmation = window.confirm(
    "Bạn có chắc chắn muốn xóa các sản phẩm đã chọn?"
  );

  if (confirmation) {
    const updatedProducts = storedProducts.filter(
      (product) => !selectedProductIds.includes(product.id)
    );
    localStorage.setItem("storedProducts", JSON.stringify(updatedProducts));
    loadProductList();
  }
}

//load quantity product
function quantityProduct() {
  const numberOfProducts = getNumberOfProducts();
  document.getElementById("quantityValue").innerText = numberOfProducts;
}
function getNumberOfProducts() {
  const storedProductsJSON = localStorage.getItem("storedProducts");
  const storedProducts = storedProductsJSON
    ? JSON.parse(storedProductsJSON)
    : [];
  return storedProducts.length;
}
function showUploadImage() {
  const form = document.getElementById("addImage");
  form.style.display = "block";
}
function closeAddImage() {
  const form = document.getElementById("addImage");
  form.style.display = "none";
}
//upload image
function uploadImage() {
  const input = document.getElementById("imageInput");
  input.click();

  input.addEventListener("change", () => {
    const imagePath = document.getElementById("imagePath");
    const selectedFile = input.files[0];

    if (selectedFile) {
      // Assuming you want to display the relative path after ../image/product-fresh/
      const relativePath = `../image/product-fresh/${selectedFile.name}`;
      imagePath.textContent = `Đường dẫn: ${relativePath}`;
    } else {
      imagePath.textContent = "";
    }
  });
}
loadProductList(1)


const storedProductsJSON = localStorage.getItem("products");
const storedProducts = JSON.parse(storedProductsJSON);
const thongkeitem = document.getElementById("thongke");
const content = document.getElementsByClassName("content")[0];
const donhangitem = document.getElementById("donhang");
const showProduct = document.getElementById("productId");
const productsPerPage = 10;

const showUser = document.getElementById("userId");
const storedUsersJSON = localStorage.getItem("users");
const storedUsers = JSON.parse(storedUsersJSON);
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
const chitiethoadon = JSON.parse(localStorage.getItem("chitiethoadon")) || [];
const hoadon = JSON.parse(localStorage.getItem("hoadon")) || [];
const theloai = JSON.parse(localStorage.getItem("theloai")) || [
  { id: 1, categoryName: "fresh-fruit" },
  { id: 2, categoryName: "imported-fruit" },
  { id: 3, categoryName: "box-fruit" },
];

const sanpham = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    name: "Chôm Chôm",
    price: 5000,
    quantity: 10,
    img: "./image/product-fresh/chom-chom.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 2,
    name: "Dưa Hấu",
    price: 8000,
    quantity: 15,
    img: "./image/product-fresh/dua-hau.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 3,
    name: "Dưa Lưới",
    price: 7000,
    quantity: 12,
    img: "./image/product-fresh/dua-luoi.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 4,
    name: "Hồng Giòn",
    price: 6000,
    quantity: 20,
    img: "./image/product-fresh/hong-gion.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 5,
    name: "Hồng Trung",
    price: 7500,
    quantity: 8,
    img: "./image/product-fresh/Hong-Trung.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 6,
    name: "Măng Cụt",
    price: 10000,
    quantity: 18,
    img: "./image/product-fresh/mang-cut.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 7,
    name: "Nhãn Xuồng",
    price: 9000,
    quantity: 14,
    img: "./image/product-fresh/Nhan-Xuong.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 8,
    name: "Sầu Riêng",
    price: 11000,
    quantity: 22,
    img: "./image/product-fresh/Sau-Rieng.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 9,
    name: "Vú Sữa",
    price: 12000,
    quantity: 7,
    img: "./image/product-fresh/vu-sua.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 10,
    name: "Cam Xoàn",
    price: 12000,
    quantity: 7,
    img: "./image/product-fresh/Cam-Xoan.jpg",
    categoryName: "fresh-fruit",
  },
  {
    id: 11,
    name: "Cam Ai Cập",
    price: 6500,
    quantity: 25,
    img: "../image/product-import/cam-ai-cap.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 12,
    name: "Cam Úc",
    price: 8500,
    quantity: 12,
    img: "./image/product-import/cam-uc.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 13,
    name: "Cherry Đỏ Mỹ",
    price: 3000,
    quantity: 30,
    img: "./image/product-import/cherry-do-my.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 14,
    name: "Dâu Tây",
    price: 9000,
    quantity: 17,
    img: "./image/product-import/dau-tay.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 15,
    name: "Lê Nam Phi",
    price: 4000,
    quantity: 40,
    img: "./image/product-import/le-nam-phi.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 16,
    name: "Lựu Thái",
    price: 6000,
    quantity: 14,
    img: "./image/product-import/luu-thai.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 17,
    name: "Nho Đỏ Úc",
    price: 11000,
    quantity: 8,
    img: "./image/product-import/nho-do-khong-hat-uc.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 18,
    name: "Nho Mẫu Đơn",
    price: 7500,
    quantity: 13,
    img: "./image/product-import/nho-mau-don-dai-loan.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 19,
    name: "Táo Neazealand",
    price: 13000,
    quantity: 9,
    img: "./image/product-import/tao-do-neazealand.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 20,
    name: "Viết Quất",
    price: 9500,
    quantity: 16,
    img: "./image/product-import/viet-quat.jpg",
    categoryName: "imported-fruit",
  },
  {
    id: 21,
    name: "Giỏ Trái Cây Thăm Tặng",
    price: 12000,
    quantity: 14,
    img: "./image/product-cart/CT01-CTT-500k.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 22,
    name: "Giỏ Trái Cây Gia Đình",
    price: 9000,
    quantity: 20,
    img: "./image/product-cart/gio-trai-cay-579.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 23,
    name: "Giỏ Quà Trái Cây",
    price: 8500,
    quantity: 11,
    img: "./image/product-cart/gio-trai-cay-citi-fruit.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 24,
    name: "Hộp Trái Cây-Nho",
    price: 15000,
    quantity: 20,
    img: "./image/product-cart/hop-trai-cay-qua-tang-nho-xanh.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 25,
    name: "Hộp Trái Cây Quà Tặng",
    price: 12000,
    quantity: 15,
    img: "./image/product-cart/hop-trai-cay-qua-tang.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 26,
    name: "Hộp Nho Không Hạt",
    price: 18000,
    quantity: 12,
    img: "./image/product-cart/hop-trai-cay-qua-tang-nho-xanh-khong-hat.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 27,
    name: "Hộp Trái Cây",
    price: 16000,
    quantity: 18,
    img: "./image/product-cart/hop-trai-cay-qua-tang-hc03.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 28,
    name: "Giỏ Quà Thăm Tặng",
    price: 13000,
    quantity: 25,
    img: "./image/product-cart/qua-tang.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 29,
    name: "Giỏ Quà Đơn Giản",
    price: 14000,
    quantity: 14,
    img: "./image/product-cart/thiet-ke.png",
    categoryName: "box-fruit",
  },
  {
    id: 30,
    name: "Giỏ Quà Sinh Nhật",
    price: 14000,
    quantity: 14,
    img: "./image/product-cart/sinh-nhat.jpg",
    categoryName: "box-fruit",
  },
  {
    id: 31,
    name: "Chôm",
    price: 5000,
    quantity: 10,
    img: "./image/product-fresh/chom-chom.jpg",
    categoryName: "fresh-fruit",
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
        return x.categoryName == nhom;
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
      return x.categoryName == nhomhientai;
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
            <td>${product.categoryName}</td>
            <td>${product.name}</td>
            <td>${giatien.toLocaleString()}</td>
        `;
      } else {
        row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.categoryName}</td>
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
  option.innerHTML = `Tất cả thể loại`;
  nhom.appendChild(option);
  theloai.map((x) => {
    let option = document.createElement("option");
    option.value = x.categoryName;
    option.innerHTML = `${x.categoryName}`;
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
      <label for="cars">Chọn thể loại:</label>
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
    <th>Thể loại</th>
    <th>Tên Sản Phẩm</th>
    <th>Lợi nhuận</th>
  </tr>
</thead>
<tbody id="tableBody">
  <!-- Dữ liệu sản phẩm sẽ được thêm vào đây -->
</tbody>
</table>
<div id="pagination" style="margin-top:15px"></div>
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
<svg width="30px" height="30px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.706 0.290 C 7.484 0.362,7.356 0.490,7.294 0.699 C 7.259 0.816,7.253 1.088,7.253 2.508 C 7.253 4.389,7.251 4.365,7.443 4.557 C 7.700 4.813,8.300 4.813,8.557 4.557 C 8.749 4.365,8.747 4.389,8.747 2.508 C 8.747 0.688,8.744 0.656,8.596 0.480 C 8.472 0.333,8.339 0.284,8.040 0.276 C 7.893 0.272,7.743 0.278,7.706 0.290 M2.753 2.266 C 2.595 2.338,2.362 2.566,2.281 2.728 C 2.197 2.897,2.193 3.085,2.269 3.253 C 2.343 3.418,4.667 5.750,4.850 5.843 C 5.109 5.976,5.375 5.911,5.643 5.649 C 5.907 5.391,5.977 5.111,5.843 4.850 C 5.750 4.667,3.418 2.343,3.253 2.269 C 3.101 2.200,2.901 2.199,2.753 2.266 M12.853 2.282 C 12.730 2.339,12.520 2.536,11.518 3.541 C 10.597 4.464,10.316 4.762,10.271 4.860 C 10.195 5.025,10.196 5.216,10.272 5.378 C 10.342 5.528,10.572 5.764,10.727 5.845 C 10.884 5.927,11.117 5.926,11.280 5.843 C 11.447 5.757,13.757 3.447,13.843 3.280 C 13.926 3.118,13.927 2.884,13.846 2.729 C 13.764 2.572,13.552 2.364,13.392 2.283 C 13.213 2.192,13.048 2.192,12.853 2.282 M0.699 7.292 C 0.404 7.385,0.258 7.620,0.258 7.999 C 0.259 8.386,0.403 8.618,0.698 8.706 C 0.816 8.741,1.079 8.747,2.508 8.747 C 3.997 8.747,4.196 8.742,4.318 8.702 C 4.498 8.644,4.644 8.498,4.702 8.318 C 4.788 8.053,4.745 7.677,4.608 7.491 C 4.578 7.451,4.492 7.384,4.417 7.343 L 4.280 7.267 2.547 7.261 C 1.152 7.257,0.791 7.263,0.699 7.292 M11.745 7.278 C 11.622 7.308,11.452 7.411,11.392 7.492 C 11.255 7.677,11.212 8.053,11.298 8.318 C 11.356 8.498,11.502 8.644,11.682 8.702 C 11.804 8.742,12.003 8.747,13.492 8.747 C 14.921 8.747,15.184 8.741,15.302 8.706 C 15.597 8.618,15.741 8.386,15.742 7.999 C 15.742 7.614,15.595 7.383,15.290 7.291 C 15.187 7.260,14.864 7.254,13.496 7.256 C 12.578 7.258,11.790 7.268,11.745 7.278 M4.853 10.282 C 4.730 10.339,4.520 10.536,3.518 11.541 C 2.597 12.464,2.316 12.762,2.271 12.860 C 2.195 13.025,2.196 13.216,2.272 13.378 C 2.342 13.528,2.572 13.764,2.727 13.845 C 2.884 13.927,3.117 13.926,3.280 13.843 C 3.447 13.757,5.757 11.447,5.843 11.280 C 5.926 11.118,5.927 10.884,5.846 10.729 C 5.764 10.572,5.552 10.364,5.392 10.283 C 5.213 10.192,5.048 10.192,4.853 10.282 M10.753 10.266 C 10.595 10.338,10.362 10.566,10.281 10.728 C 10.197 10.897,10.193 11.085,10.269 11.253 C 10.343 11.418,12.667 13.750,12.850 13.843 C 13.109 13.976,13.375 13.911,13.643 13.649 C 13.907 13.391,13.977 13.111,13.843 12.850 C 13.750 12.667,11.418 10.343,11.253 10.269 C 11.101 10.200,10.901 10.199,10.753 10.266 M7.745 11.277 C 7.620 11.309,7.451 11.412,7.392 11.492 C 7.254 11.678,7.253 11.691,7.253 13.489 C 7.253 14.921,7.259 15.184,7.294 15.302 C 7.382 15.597,7.615 15.741,8.000 15.741 C 8.385 15.741,8.618 15.597,8.706 15.302 C 8.768 15.090,8.767 11.875,8.704 11.690 C 8.644 11.514,8.575 11.430,8.420 11.346 C 8.310 11.286,8.246 11.271,8.057 11.264 C 7.930 11.259,7.790
11.265,7.745 11.277 " stroke="none" fill-rule="evenodd" fill="#039201"></path></svg>
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
                        <option value="3">Gần đây</option>
                        <option value="6">3 - 6 ngày</option>
                        <option value="9">6 - 9 ngày</option>
                        <option value="12">9 - 12 ngày</option>
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
                            <th>Tên Khách Hàng</th>
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
    <div id="container-cthd">
      <div id="container-chiTietHoaDon">
        <span id="title-cthd">Chi tiết hóa đơn</span>
        <svg id="mySvg" width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
        <div id="cthd-main"><div id="chiTietHoaDon"></div></div>
        <div id="check-status">
          Trạng thái hóa đơn:
          <button id="btn-check-status"></button>
        </div>
      </div>
    </div>
`;
  content.appendChild(div);
  var storedData = localStorage.getItem("hoadon");
  var dataList = JSON.parse(storedData) || [];

  var allBlock = document.querySelector(".block:nth-child(1)");
  var processingBlock = document.querySelector(".block:nth-child(2)");
  var processedBlock = document.querySelector(".block:nth-child(3)");

  var allData = dataList.length;
  var processingData = dataList.filter(
    (item) => item.trangthaihoadon === "Chờ xử lý"
  ).length;
  var processedData = dataList.filter(
    (item) => item.trangthaihoadon === "Đã xử lý"
  ).length;

  allBlock.querySelector(".quantity").innerText = allData;
  processingBlock.querySelector(".quantity").innerText = processingData;
  processedBlock.querySelector(".quantity").innerText = processedData;

  var totalOrders = dataList.length;
  var processedOrders = dataList.filter(
    (item) => item.trangthaihoadon === "Đã xử lý"
  ).length;

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

  var storedData = localStorage.getItem("hoadon");
  var dataList = JSON.parse(storedData) || [];
  var itemsPerPage = 5;
  var currentPage = 1;

  var prevButton = document.getElementById("prevButton");
  var nextButton = document.getElementById("nextButton");
  var totalPages;

  nextButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      displayData(currentPage);
    }
  });

  prevButton.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      displayData(currentPage);
    }
  });

  function clickDonHangItem() {
    if (donhangitem) {
      donhangitem.click();
      console.log("df");
    } else {
      console.error("Không tìm thấy phần tử với ID: donhangitem");
    }
  }

  function removeItem(mahoadon) {
    var dialog = confirm("Bạn có chắc chắn muốn xóa mục này không?");

    if (dialog) {
      var updatedDataList = dataList.filter(
        (item) => item.mahoadon !== mahoadon
      );

      localStorage.setItem("hoadon", JSON.stringify(updatedDataList));
      var chiTietHoaDon =
        JSON.parse(localStorage.getItem("chitiethoadon")) || [];
      var updatedChiTietHoaDon = chiTietHoaDon.filter(
        (item) => item.mahoadon !== mahoadon
      );
      localStorage.setItem(
        "chitiethoadon",
        JSON.stringify(updatedChiTietHoaDon)
      );

      var table = document.getElementById("myTableBody");
      var rows = table.getElementsByTagName("tr");
      for (var i = 0; i < rows.length; i++) {
        var currentRow = rows[i];
        if (currentRow.cells[2].textContent === mahoadon) {
          currentRow.parentNode.removeChild(currentRow);
          break;
        }
      }
      displayData(currentPage);
      clickDonHangItem();
    }
  }

  function displayData(page) {
    var start = (page - 1) * itemsPerPage;
    var end = start + itemsPerPage;
    var pageData = dataList.slice(start, end);

    document.getElementById("myTableBody").innerHTML = "";

    pageData.forEach(function (item) {
      var row = document.createElement("tr");
      row.innerHTML = `
    <td><input type="checkbox"></td>
    <td>${item.username}</td>
    <td>${item.mahoadon}</td>
    <td>${item.ngaymua}</td>
    <td><span class="status-table">${item.trangthaihoadon}</span></td>
    <td>${item.tongtien}</td>
    <td>
      <button class="remove-item" onclick="removeItem('${item.mahoadon}')">Xóa</button>
    </td>
  `;
      document.getElementById("myTableBody").appendChild(row);

      var removeButton = row.querySelector(".remove-item");
      removeButton.addEventListener("click", function () {
        removeItem(item.mahoadon);
      });
    });

    currentPage = page;

    updatePaginationButtons();
  }

  function updatePaginationButtons() {
    var paginationButtons = document.querySelectorAll("#pagination li");

    paginationButtons.forEach(function (button, index) {
      if (index + 1 === currentPage) {
        button.style.backgroundColor = "#ff8000";
        button.style.color = "white";
      } else {
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

  displayData(currentPage);
  setupPagination();

  const svgElement = document.getElementById("mySvg");
  const containerCthd = document.getElementById("container-cthd");
  svgElement.addEventListener("click", function () {
    containerCthd.style.display = "none";
  });

  var statusCells = document.querySelectorAll("#myTableBody .status-table");

  statusCells.forEach(function (statusCell) {
    var status = statusCell.innerText.trim();
    if (status == "Đã xử lý") {
      statusCell.style.color = "#05a0c7";
      statusCell.style.border = "1px solid #05a0c7";
    } else if (status == "Chờ xử lý") {
      statusCell.style.color = "#c72f05";
      statusCell.style.border = "1px solid #c72f05";
    }
  });

  function clickHandler(event) {
    // Kiểm tra xem sự kiện click đã được xử lý trước đó chưa
    if (event.handled !== true) {
      var target = event.target;
      if (
        target.tagName.toLowerCase() === "td" &&
        target.parentNode.tagName.toLowerCase() === "tr"
      ) {
        var mahoadon =
          target.parentNode.querySelector("td:nth-child(3)").innerText;
        var chiTietHoaDon =
          JSON.parse(localStorage.getItem("chitiethoadon")) || [];
        var chiTietDonHang = chiTietHoaDon.filter(
          (item) => item.mahoadon == mahoadon
        );

        // Đánh dấu sự kiện đã được xử lý
        event.handled = true;

        // Gọi hàm xử lý chi tiết đơn hàng
        displayOrderDetails(chiTietDonHang, mahoadon);
      }
    }
  }

  document
    .getElementById("myTableBody")
    .addEventListener("click", clickHandler);

  function displayOrderDetails(chiTiet, mahoadon) {
    var chiTietContainer = document.getElementById("chiTietHoaDon");
    chiTietContainer.innerHTML = "";
    var btnCheckStatus = document.getElementById("btn-check-status"); // Đảm bảo rằng btnCheckStatus đã được định nghĩa

    if (chiTietContainer && btnCheckStatus) {
      // Các phần tử đã được định nghĩa
      var table = document.createElement("table");
      table.border = "1";

      var headerRow = table.insertRow(0);
      var headers = [
        "Hình ảnh",
        "Tên sản phẩm",
        "Giá",
        "Số lượng",
        "Mã hóa đơn",
      ];

      for (var h = 0; h < headers.length; h++) {
        var headerCell = headerRow.insertCell(h);
        headerCell.innerHTML = "<b>" + headers[h] + "</b>";
      }

      for (var i = 0; i < chiTiet.length; i++) {
        var currentChiTiet = chiTiet[i];
        var row = table.insertRow(i + 1);

        var maSanPham = currentChiTiet.masanpham;
        var thongTinSanPham = layThongTinSanPhamTuProducts(maSanPham);

        if (thongTinSanPham) {
          row.insertCell(
            0
          ).innerHTML = `<img src="${thongTinSanPham.img}" alt="Hình ảnh" width="50">`;
          row.insertCell(1).innerHTML = thongTinSanPham.name;
          row.insertCell(2).innerHTML = currentChiTiet.gia;
          row.insertCell(3).innerHTML = currentChiTiet.soluong;
          row.insertCell(4).innerHTML = currentChiTiet.mahoadon;

          var containerCthd = document.getElementById("container-cthd");

          if (containerCthd) {
            containerCthd.style.display = "block";
          } else {
            console.error("Phần tử container-cthd không tồn tại trong HTML.");
          }
        } else {
          console.error(
            "Không tìm thấy thông tin sản phẩm cho mã sản phẩm: ",
            maSanPham
          );
        }
      }

      chiTietContainer.appendChild(table);

      var status = getTrangThaiHoaDon(mahoadon);
      btnCheckStatus.innerText = status;
      updateStatusColor(status, mahoadon);

      // Remove sự kiện click cũ trước khi thêm sự kiện mới
      btnCheckStatus.removeEventListener("click", handleStatusChangeClick);

      // Thêm sự kiện click mới
      btnCheckStatus.addEventListener("click", handleStatusChangeClick);

      function handleStatusChangeClick() {
        var confirmed = confirm("Bạn có chắc chắn muốn đổi trạng thái không?");
        if (confirmed) {
          toggleTrangThaiHoaDon(mahoadon);
          btnCheckStatus.innerText = getTrangThaiHoaDon(mahoadon);
          status = getTrangThaiHoaDon(mahoadon);
          updateStatusColor(status, mahoadon);
          clickDonHangItem();
        }
      }
    } else {
      console.error(
        "Phần tử chiTietHoaDon hoặc btnCheckStatus không tồn tại trong HTML."
      );
    }
  }

  function toggleTrangThaiHoaDon(mahoadon) {
    var danhSachHoaDon = JSON.parse(localStorage.getItem("hoadon")) || [];
    var hoadon = danhSachHoaDon.find((item) => item.mahoadon == mahoadon);

    if (hoadon) {
      var trangThai = hoadon.trangthaihoadon || "Chờ xử lý";
      trangThai = trangThai === "Chờ xử lý" ? "Đã xử lý" : "Chờ xử lý";
      hoadon.trangthaihoadon = trangThai;
      localStorage.setItem("hoadon", JSON.stringify(danhSachHoaDon));
      localStorage.setItem("trangthaihoadon", trangThai);
    } else {
      console.error("Không tìm thấy hóa đơn với mã: ", mahoadon);
    }
  }

  function getTrangThaiHoaDon(mahoadon) {
    var danhSachHoaDon = JSON.parse(localStorage.getItem("hoadon")) || [];
    var hoadon = danhSachHoaDon.find((item) => item.mahoadon == mahoadon);
    return hoadon ? hoadon.trangthaihoadon || "Chờ xử lý" : "Chờ xử lý";
  }

  function updateStatusColor(trangThai, mahoadon) {
    var btnCheckStatus = document.getElementById("btn-check-status");
    var table = document.getElementById("myTableBody");
    var rows = table.getElementsByTagName("tr");

    if (trangThai === "Đã xử lý") {
      btnCheckStatus.style.color = "#05a0c7";
      btnCheckStatus.style.border = "1px solid #05a0c7";
    } else if (trangThai === "Chờ xử lý") {
      btnCheckStatus.style.color = "#c72f05";
      btnCheckStatus.style.border = "1px solid #c72f05";
    } else {
      btnCheckStatus.style.color = "";
      btnCheckStatus.style.border = "";
    }

    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var currentMahoadon = row.querySelector("td:nth-child(3)").innerText;
      if (currentMahoadon == mahoadon) {
        var statusCell = row.querySelector(".status-table");
        var currentStatus = getTrangThaiHoaDon(mahoadon);
        statusCell.innerHTML = currentStatus;
        if (currentStatus == "Đã xử lý") {
          statusCell.style.color = "#05a0c7";
          statusCell.style.border = "1px solid #05a0c7";
        } else if (currentStatus == "Chờ xử lý") {
          statusCell.style.color = "#c72f05";
          statusCell.style.border = "1px solid #c72f05";
        }
        break;
      }
    }
  }

  function layThongTinSanPhamTuProducts(maSanPham) {
    var products = JSON.parse(localStorage.getItem("products")) || [];
    var sanPham = products.find((item) => item.id == maSanPham);
    return sanPham;
  }

  var searchInput = document.querySelector(".search-input");
  var tableBody = document.getElementById("myTableBody");

  // Lắng nghe sự kiện khi người dùng nhập liệu
  searchInput.addEventListener("input", function () {
    // Lọc dữ liệu trong bảng dựa trên nội dung của ô input
    filterTableRows();
  });

  // Hàm lọc dữ liệu trong bảng
  function filterTableRows() {
    var searchTerm = searchInput.value.toLowerCase();

    // Lấy ra tất cả các dòng trong tbody
    var rows = tableBody.getElementsByTagName("tr");

    // Duyệt qua từng dòng và ẩn/hiện dựa trên điều kiện tìm kiếm
    for (var i = 0; i < rows.length; i++) {
      var customerName = rows[i]
        .getElementsByTagName("td")[1]
        .innerText.toLowerCase();

      if (customerName.includes(searchTerm)) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }


  var selectOrders = document.getElementById("select-orders");
  var tableBody = document.getElementById("myTableBody");

  // Lắng nghe sự kiện khi người dùng chọn khoảng thời gian
  selectOrders.addEventListener("change", function () {
    // Lọc dữ liệu trong bảng dựa trên khoảng thời gian được chọn
    filterTableByTimePeriod();
  });

  // Hàm lọc dữ liệu trong bảng theo khoảng thời gian
  function filterTableByTimePeriod() {
    var selectedTimePeriod = parseInt(selectOrders.value);
    var currentDate = new Date();

    // Lấy ra tất cả các dòng trong tbody
    var rows = tableBody.getElementsByTagName("tr");

    // Duyệt qua từng dòng và ẩn/hiện dựa trên điều kiện khoảng thời gian
    for (var i = 0; i < rows.length; i++) {
      var purchaseDateStr = rows[i].getElementsByTagName("td")[3].innerText;
      var purchaseDate = new Date(purchaseDateStr);

      // Tính số ngày giữa ngày mua và ngày hiện tại
      var daysDifference = Math.floor(
        (currentDate - purchaseDate) / (1000 * 60 * 60 * 24)
      );
      console.log(selectedTimePeriod);
      console.log(daysDifference);


      // Ẩn/hiện dòng dựa trên khoảng thời gian
      if (
        selectedTimePeriod === 0 ||
        (daysDifference >= selectedTimePeriod - 3 &&
          daysDifference <= selectedTimePeriod)
      ) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }

});

{
  /* <button
          id="imageInput"
          class="btn-upload-img"
          onclick="showUploadImage()"
        >
          Thêm Ảnh
        </button> */
}
//san pham
showProduct.addEventListener("click", () => {
  content.innerHTML = "";
  let div = document.createElement("div");
  div.className = "container-thongke";
  div.innerHTML = `<div class="product">
    <div class="header-product">
      <h1 class="title">QUẢN LÝ SẢN PHẨM</h1>
      <p id="productQuantity-item">
        Tất Cả
        <span id="quantityValue"></span>
      </p>
      <div class="button-header">
        <?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg class="search-product" onclick="showSearchProduct()" width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
            <title>search</title>
            <desc>Created with Sketch Beta.</desc>
            <defs>
        
        </defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-256.000000, -1139.000000)" fill="#000000">
                    <path d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z" id="search" sketch:type="MSShapeGroup">
        
        </path>
                </g>
            </g>
        </svg>
        <button class="btn-add" onclick="addProduct()">Thêm SP</button>
        
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
        <h2 class="title-form-add">Thêm sản phẩm mới</h2>
        <form id="addProductForm">
          <label for="productName">Tên Sản Phẩm:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Tên Sản Phẩm"
          />
          <label for="productPrice">Giá:</label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            placeholder="Nhập Giá"
            required
          />
          <label for="productQuantity">Số lượng:</label>
          <input type="number" id="productQuantity" name="productQuantity"  placeholder="Nhập Số lượng" required />

          <label for="productImage">Hình Ảnh:</label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            accept="image/*"
            required
          />
          <label for="categoryName">Loại Sản Phẩm:</label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            placeholder="Loại Sản Phẩm"
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
    
    <div id="editProductModal" class="modal">
      <div class="modal-content">
      <span class="close" onclick="closeEditProduct()">&times;</span>
      <h2 class="title-form-edit">Sửa thông tin</h2>
        <form id="addProductForm">
          <label for="productName">Tên Sản Phẩm:</label>
          <input
            type="text"
            id="productNameEdit"
            name="productName"
            placeholder="Tên Sản Phẩm"
          />

          <label for="productPrice">Giá:</label>
          <input
            type="number"
            id="productPriceEdit"
            name="productPrice"
            placeholder="Giá"
            required
          />

          <label for="productQuantity">Số Lượng:</label>
          <input
            type="number"
            id="productQuantityEdit"
            name="productQuantity"
            placeholder="Số Lượng"
            required
          />

          <label for="productImage">HÌnh Ảnh:</label>
          <input
            type="file"
            id="productImageEdit"
            name="productImage"
            accept="image/*"
            required
          />
          <label for="categoryName">Loại Sản Phẩm:</label>
          <input
            type="text"
            id="categoryNameEdit"
            name="categoryName"
            placeholder="Loại Sản Phẩm"
            required
          />
          <button
            class="btn-edit-product"
            id="id_edit_product"
            type="button"
            onclick="updateProductClick()"
          >
            Cập nhật
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
    <div id="searchModal" class="modal">
      <div class="modal-content">
        <span class="close" id="closeSearchModal" onclick="hideSearchProduct()">&times;</span>
        <h2>Tìm kiếm</h2>
        <div class="modal-content-item">
          <input id="inputSearch" type="text" placeholder="Nhập tên sản phẩm muốn tìm...">
          <button>
            <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg class="filter-product" width="30px" height="30px" onclick="filterProduct()" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.95301 2.25C4.96862 2.25 4.98429 2.25 5.00001 2.25L19.047 2.25C19.7139 2.24997 20.2841 2.24994 20.7398 2.30742C21.2231 2.36839 21.6902 2.50529 22.0738 2.86524C22.4643 3.23154 22.6194 3.68856 22.6875 4.16405C22.7501 4.60084 22.7501 5.14397 22.75 5.76358L22.75 6.54012C22.75 7.02863 22.75 7.45095 22.7136 7.80311C22.6743 8.18206 22.5885 8.5376 22.3825 8.87893C22.1781 9.2177 21.9028 9.4636 21.5854 9.68404C21.2865 9.8917 20.9045 10.1067 20.4553 10.3596L17.5129 12.0159C16.8431 12.393 16.6099 12.5288 16.4542 12.6639C16.0966 12.9744 15.8918 13.3188 15.7956 13.7504C15.7545 13.9349 15.75 14.1672 15.75 14.8729L15.75 17.605C15.7501 18.5062 15.7501 19.2714 15.6574 19.8596C15.5587 20.4851 15.3298 21.0849 14.7298 21.4602C14.1434 21.827 13.4975 21.7933 12.8698 21.6442C12.2653 21.5007 11.5203 21.2094 10.6264 20.8599L10.5395 20.826C10.1208 20.6623 9.75411 20.519 9.46385 20.3691C9.1519 20.208 8.8622 20.0076 8.64055 19.6957C8.41641 19.3803 8.32655 19.042 8.28648 18.6963C8.24994 18.381 8.24997 18.0026 8.25 17.5806L8.25 14.8729C8.25 14.1672 8.24555 13.9349 8.20442 13.7504C8.1082 13.3188 7.90342 12.9744 7.54584 12.6639C7.39014 12.5288 7.15692 12.393 6.48714 12.0159L3.54471 10.3596C3.09549 10.1067 2.71353 9.8917 2.41458 9.68404C2.09724 9.4636 1.82191 9.2177 1.61747 8.87893C1.41148 8.5376 1.32571 8.18206 1.28645 7.80311C1.24996 7.45094 1.24998 7.02863 1.25 6.54012L1.25001 5.81466C1.25001 5.79757 1.25 5.78054 1.25 5.76357C1.24996 5.14396 1.24991 4.60084 1.31251 4.16405C1.38064 3.68856 1.53576 3.23154 1.92618 2.86524C2.30983 2.50529 2.77695 2.36839 3.26024 2.30742C3.71592 2.24994 4.28607 2.24997 4.95301 2.25ZM3.44796 3.79563C3.1143 3.83772 3.0082 3.90691 2.95251 3.95916C2.90359 4.00505 2.83904 4.08585 2.79734 4.37683C2.75181 4.69454 2.75001 5.12868 2.75001 5.81466V6.50448C2.75001 7.03869 2.75093 7.38278 2.77846 7.64854C2.8041 7.89605 2.84813 8.01507 2.90174 8.10391C2.9569 8.19532 3.0485 8.298 3.27034 8.45209C3.50406 8.61444 3.82336 8.79508 4.30993 9.06899L7.22296 10.7088C7.25024 10.7242 7.2771 10.7393 7.30357 10.7542C7.86227 11.0685 8.24278 11.2826 8.5292 11.5312C9.12056 12.0446 9.49997 12.6682 9.66847 13.424C9.75036 13.7913 9.75022 14.2031 9.75002 14.7845C9.75002 14.8135 9.75 14.843 9.75 14.8729V17.5424C9.75 18.0146 9.75117 18.305 9.77651 18.5236C9.79942 18.7213 9.83552 18.7878 9.8633 18.8269C9.89359 18.8695 9.95357 18.9338 10.152 19.0363C10.3644 19.146 10.6571 19.2614 11.1192 19.442C12.0802 19.8177 12.7266 20.0685 13.2164 20.1848C13.695 20.2985 13.8527 20.2396 13.9343 20.1885C14.0023 20.146 14.1073 20.0597 14.1757 19.626C14.2478 19.1686 14.25 18.5234 14.25 17.5424V14.8729C14.25 14.843 14.25 14.8135 14.25 14.7845C14.2498 14.2031 14.2496 13.7913 14.3315 13.424C14.5 12.6682 14.8794 12.0446 15.4708 11.5312C15.7572 11.2826 16.1377 11.0685 16.6964 10.7542C16.7229 10.7393 16.7498 10.7242 16.7771 10.7088L19.6901 9.06899C20.1767 8.79508 20.496 8.61444 20.7297 8.45209C20.9515 8.298 21.0431 8.19532 21.0983 8.10391C21.1519 8.01507 21.1959 7.89605 21.2215 7.64854C21.2491 7.38278 21.25 7.03869 21.25 6.50448V5.81466C21.25 5.12868 21.2482 4.69454 21.2027 4.37683C21.161 4.08585 21.0964 4.00505 21.0475 3.95916C20.9918 3.90691 20.8857 3.83772 20.5521 3.79563C20.2015 3.75141 19.727 3.75 19 3.75H5.00001C4.27297 3.75 3.79854 3.75141 3.44796 3.79563Z" fill="#1C274C"/>
            </svg>
          </button>
        </div>
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
document.addEventListener("DOMContentLoaded", function () {
  // Gọi sự kiện click mặc định cho showUser
  showProduct.click();
});
//get len username

//phan trang

function getTotalPages() {
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
function loadProductList(currentPage, filter) {
  const bodyProduct = document.getElementById("tableProduct");

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
      <th>Loại SP</th>
      <th>Chọn</th>
      <th>Chức Năng</th>
  `;

  thead.appendChild(headerRow);
  table.appendChild(thead);

  currentPage = currentPage || 1;
  let filteredProducts = storedProducts;

  // Apply filter if provided
  if (filter) {
    const filterLowerCase = filter.toLowerCase();
    filteredProducts = storedProducts.filter(
      (item) =>
        item.name.toLowerCase().includes(filterLowerCase) ||
        item.price.toString() === filterLowerCase
    );
  }
  if (filteredProducts.length === 0) {
    // Display a message when no products are found
    bodyProduct.innerHTML =
      "<p style='text-align: center; padding: 20px;'>No products found.</p>";
    return;
  }

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  displayedProducts = filteredProducts.slice(startIndex, endIndex);

  displayedProducts.forEach((item, index) => {
    const row = createTableRow(item, startIndex + index);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  bodyProduct.innerHTML = "";
  bodyProduct.appendChild(table);

  const totalPages = getTotalPages(filteredProducts.length);
  createPagination(totalPages, currentPage);
  quantityProduct(filteredProducts.length);
}

function createTableRow(item, index) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.quantity}</td>
    <td><img src="${
      item.img
    }" style="max-width: 50px; max-height: 50px; background:none; background-image: none;"></td>
    <td>${item.categoryName}</td>
    <td class="product-checkbox">  
      <input type="checkbox" id="checkbox-${item.id}">
    </td>
    <td>
      <button id="click_edit_product" class="btn-edit-product" onclick="editProductClick(${
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
//them san pham
function addProductNew() {
  const productName = document.getElementById("productName").value.trim();
  const productPrice = document.getElementById("productPrice").value;
  const productQuantity = document.getElementById("productQuantity").value;

  const productImageInput = document.getElementById("productImage");
  const categoryName = document.getElementById("categoryName").value;
  const productImage = productImageInput.files[0]
    ? productImageInput.files[0].name
    : "";
  if (productName == "") {
    alert("Vui lòng nhập tên sản phẩm.");
    return;
  }
  if (
    productPrice === "" ||
    isNaN(productPrice) ||
    !Number.isInteger(parseFloat(productPrice))
  ) {
    alert("Vui lòng nhập giá tiền");
    return;
  }

  // Kiểm tra nếu productQuantity không phải là số nguyên
  if (productQuantity === "" || isNaN(productQuantity) || !Number.isInteger(parseFloat(productQuantity))) {
    alert("Vui lòng nhập số lượng ");
    return;
  }
  if (categoryName == "") {
    alert("Vui lòng nhập loại sản phẩm.");
    return;
  }
  if (productImage == "") {
    alert("Vui lòng chọn ảnh.");
    return;
  }
  const maxId = storedProducts.reduce(
    (max, product) => (product.id > max ? product.id : max),
    0
  );
  let linkImage = "../image/product-fresh/" + productImage;

  const newProduct = {
    id: maxId + 1,
    name: productName,
    price: productPrice,
    quantity: productQuantity,
    img: linkImage,
    categoryName: categoryName,
  };

  storedProducts.push(newProduct);
  localStorage.setItem("products", JSON.stringify(storedProducts));
  alert("Thêm sản phẩm thành công!");
  closeAddProductModal();
  loadProductList();
}

//delete product
function deleteProduct(productId) {
  const index = storedProducts.findIndex((product) => product.id === productId);
  if (index !== -1) {
    const confirmation = window.confirm("Bạn muốn xóa sản phẩm này?");

    if (confirmation) {
      const deletedProduct = storedProducts.splice(index, 1)[0]; // Remove and get the deleted product
      localStorage.setItem("products", JSON.stringify(storedProducts));
      const table = document.getElementById("tbl-product");
      if (table) {
        table.parentNode.removeChild(table);
      }
      loadProductList();
    }
  }
}
function closeEditProduct() {
  const modal = document.getElementById("editProductModal");
  modal.style.display = "none";
}

//sua san pham

function updateProductClick(){
  const productId = document.getElementById("click_edit_product")
  editProductClick(productId)
}

function editProductClick(productId) {
  const modal = document.getElementById("editProductModal");
  modal.style.display = "block";

  const editedProduct = storedProducts.find((product) => product.id === productId);

  if (editedProduct) {
    displayProductDataOnForm(editedProduct);

    const updateButton = document.getElementById("id_edit_product");
    updateButton.removeEventListener("click", function () {});
    updateButton.addEventListener("click", function () {
      const updatedProduct = collectProductDataFromForm(productId);
      updateProduct(updatedProduct);
    });
  }
}


function collectProductDataFromForm(id_product) {
  // Collect the updated product data from the form
  const updatedProduct = {
    id: id_product,
    name: document.getElementById("productNameEdit").value,
    price: document.getElementById("productPriceEdit").value,
    quantity: document.getElementById("productQuantityEdit").value,
    categoryName: document.getElementById("categoryNameEdit").value,
    img: "", 
  };

  const productImageInput = document.getElementById("productImageEdit");
  if (productImageInput.files.length > 0) {
    const reader = new FileReader();

    reader.onload = function (e) {
      // Set the 'img' property to the data URL of the selected image
      updatedProduct.img = e.target.result;
      updateProduct(updatedProduct);
    };

    // Read the selected file as a data URL
    reader.readAsDataURL(productImageInput.files[0]);
  } else {
    // No new image selected, update the product without changing the image
    updateProduct(updatedProduct);
  }

  return updatedProduct;
}


function displayProductDataOnForm(product) {
  document.getElementById("productNameEdit").value = product.name;
  document.getElementById("productPriceEdit").value = product.price;
  document.getElementById("productQuantityEdit").value = product.quantity;
  document.getElementById("categoryNameEdit").value = product.categoryName;

  // Display the product image preview
  const productImageEdit = document.getElementById("productImageEdit");
  productImageEdit.src = product.img;
}

function updateProduct(updatedProduct) {
  // Lấy giá trị từ các trường nhập liệu
  const productName = document.getElementById("productNameEdit").value;
  const productPrice = document.getElementById("productPriceEdit").value;
  const productQuantity = document.getElementById("productQuantityEdit").value;
  const categoryName = document.getElementById("categoryNameEdit").value;
  const productImage = document.getElementById("productImageEdit").files[0]; // Lấy file ảnh

  // Kiểm tra nếu có bất kỳ trường nào bỏ trống
  if (!productName || !productPrice || !productQuantity || !categoryName) {
    alert("Vui lòng điền đầy đủ thông tin sản phẩm.");
    return;
  }
  if(!productImage){
    alert("Vui lòng chọn ảnh");
    return;
  }
  // Kiểm tra nếu giá và số lượng là số dương
  if (isNaN(productPrice) || isNaN(productQuantity) || productPrice <= 0 || productQuantity <= 0) {
    alert("Vui lòng nhập giá và số lượng hợp lệ.");
    return;
  }

  // Tìm sản phẩm cần sửa trong mảng storedProducts
  const index = storedProducts.findIndex((product) => product.id === updatedProduct.id);

  // Kiểm tra nếu sản phẩm được tìm thấy
  if (index !== -1) {
    // Cập nhật thông tin sản phẩm trong mảng storedProducts
    storedProducts[index] = {
      id: updatedProduct.id,
      name: productName,
      price: productPrice,
      quantity: productQuantity,
      categoryName: categoryName,
      img: updatedProduct.img, // Giữ nguyên URL hình ảnh ban đầu
    };

    // Cập nhật dữ liệu trong local storage
    localStorage.setItem("products", JSON.stringify(storedProducts));
    alert("Cập nhật thành công");
    closeModal();
    loadProductList();
  }
}

function closeModal() {
  const modal = document.getElementById("editProductModal");
  modal.style.display = "none";
}

//xoa nhieu san pham
function deleteSelectedProducts() {
  const checkboxes = document.querySelectorAll(
    '.product-checkbox input[type="checkbox"]:checked'
  );
  const selectedProductIds = Array.from(checkboxes).map((checkbox) => {
    const productId = parseInt(checkbox.id.split("-")[1].trim());
    return productId;
  });

  if (selectedProductIds.length === 0) {
    alert("Vui lòng chọn ít nhất một sản phẩm để xóa.");
    return;
  }
  const confirmation = window.confirm(
    "Bạn có chắc chắn muốn xóa các sản phẩm đã chọn?"
  );

  if (confirmation) {
    const updatedProducts = storedProducts.filter((product) => {
      const shouldKeep = !selectedProductIds.includes(product.id);
      return shouldKeep;
    });

    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setTimeout(() => {
      location.reload();
      loadProductList();
      alert("Xóa sản phẩm thành công!");
    }, 100); 
  }
}

//load quantity product
function quantityProduct(totalProducts) {
  const quantityValue = document.getElementById("quantityValue");
  quantityValue.textContent = totalProducts;
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
// function uploadImage() {
//   const input = document.getElementById("imageInput");
//   input.click();

//   input.addEventListener("change", () => {
//     const imagePath = document.getElementById("imagePath");
//     const selectedFile = input.files[0];

//     if (selectedFile) {
//       // Assuming you want to display the relative path after ../image/product-fresh/
//       const relativePath = `../image/product-fresh/${selectedFile.name}`;
//       imagePath.textContent = `Đường dẫn: ${relativePath}`;
//     } else {
//       imagePath.textContent = "";
//     }
//   });
// }
function showSearchProduct() {
  const show = document.getElementById("searchModal");
  show.style.display = "block";
}
function hideSearchProduct() {
  const hide = document.getElementById("searchModal");
  hide.style.display = "none";
}
function filterProduct() {
  const filterInputValue = document.getElementById("inputSearch").value;
  loadProductList(1, filterInputValue);
  hideSearchProduct();
}

// NGUOI DUNG

showUser.addEventListener("click", () => {
  content.innerHTML = "";
  let div = document.createElement("div");
  div.className = "container-thongke";
  div.innerHTML = `<div class="product">
    <div class="header-product">
      <h1 class="title">QUẢN LÝ NGƯỜI DÙNG</h1>
      <p id="productQuantity-item">
        Tất Cả
        <span id="quantityValue"></span>
      </p>
     
     
    </div>
    <div id="tableUser" class="body-product">
    </div>
    
    <div id="addProductModal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeAddProductModal()">&times;</span>
        <h2>Thêm Người Dùng</h2>
        <form id="addProductForm">
          <label for="userName">Tên người dùng:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Nhập tên người dùng"
          />

          <label for="userPassword">Mật khẩu:</label>
          <input
            type="text"
            id="userPassword"
            name="userPassword"
            placeholder="Nhập mật khẩu"
            required
          />

          <label for="userEmail">Email:</label>
          <input
            type="text"
            id="userEmail"
            name="userEmail"
            placeholder="Nhập Email"
            required
          />

          <label for="userPhone">SĐT</label>
          <input
            type="number"
            id="userPhone"
            name="userPhone"
            placeholder="Nhập SĐT"
            required
          />
          
          <button
            class="btn-add-user-new"
            type="button"
            onclick="addUserNew()"
          >
            Thêm Người dùng
          </button>
        </form>
      </div>
    </div>
    
    <div class="pagination pagination-user">
      <ul class="listPage">
        <li class="active listPage-item">1</li>
        <li class="listPage-item">2</li>
        <li class="listPage-item">3</li>
      </ul>
    </div>
  </div>
  `;
  content.appendChild(div);
  loadUser(1);
});
// Load user
function loadUser(currentPage, filter) {
  const bodyProduct = document.getElementById("tableUser");

  const table = document.createElement("table");
  table.id = "tbl-user";
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `
      <th>STT</th>
      <th>ID</th>
      <th>Tài khoản</th>
      <th>Password</th>
      <th>Email</th>
      <th>Chức năng</th>
  `;

  thead.appendChild(headerRow);
  table.appendChild(thead);

  currentPage = currentPage || 1;
  let filteredUser = storedUsers;


  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  displayedProducts = filteredUser.slice(startIndex, endIndex);

  displayedProducts.forEach((item, index) => {
    const row = createTableRowUsers(item, startIndex + index);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  bodyProduct.innerHTML = "";
  bodyProduct.appendChild(table);

  const totalPages = getTotalPagesUser(filteredUser.length);
  createPaginationUser(totalPages, currentPage);
  quantityProduct(filteredUser.length);
}

function createTableRowUsers(item, index) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${item.user_id}</td>
    <td>${item.username}</td>
    <td>${item.password}</td>
    <td>${item.email}</td>

    <td>
      <button class="btn-delete-product" onclick="deleteUser(${
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

function getTotalPagesUser() {
  return Math.ceil(storedUsers.length / productsPerPage);
}
function createPaginationUser(totalPages, currentPage) {
  const paginationContainer = document.querySelector(".pagination-user");
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
      loadUser(i);
    });
    ul.appendChild(li);
  }

  paginationContainer.appendChild(ul);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidPhoneNumber(phone) {
  // Số điện thoại gồm 10 số và số 0 là số bắt đầu
  const phoneRegex = /^0[0-9]{9}$/;
  return phoneRegex.test(phone);
}

//  xóa người dùng
function deleteUser(userId) {
  const index = storedUsers.findIndex((user) => user.id === userId);
  if (index !== -1) {
    const confirmation = window.confirm("Bạn muốn xóa người dùng này?");

    if (confirmation) {
      const deletedProduct = storedUsers.splice(index, 1)[0]; // Remove and get the deleted product
      localStorage.setItem("user", JSON.stringify(storedUsers));
      const table = document.getElementById("tbl-user");
      if (table) {
        table.parentNode.removeChild(table);
      }
      loadUser();
    }
  }
}
function searchUsers(userId) {}

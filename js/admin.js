const form = document.getElementById("thongke");
let nhom = document.getElementById("nhom");
const table = document.getElementsByClassName("table");
//hien thi menu left

var menu_left = document.getElementsByClassName("menu-left")[0];
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
// xử lí phân trang
let thisPage = 1;
let limit = 5;
let list = document.querySelectorAll(".list-product .item");

function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage;

  list.forEach((item, key) => {
    if (key >= beginGet && key < endGet) {
      item.style.display = "table-row"; // Chuyển style display về 'table-row' thay vì 'block'
    } else {
      item.style.display = "none";
    }
  });
  listPage();
}

loadItem();

function listPage() {
  let count = Math.ceil(list.length / limit);
  let listPageContainer = document.querySelector(".listPage");
  listPageContainer.innerHTML = "";

  if (thisPage > 1) {
    let prev = document.createElement("li");
    prev.innerText = "<";
    prev.setAttribute("onclick", `changePage(${thisPage - 1})`);
    listPageContainer.appendChild(prev);
  }

  for (let i = 1; i <= count; i++) {
    let page = document.createElement("li");
    page.innerText = i;
    if (i === thisPage) {
      page.classList.add("active");
    }
    page.setAttribute("onclick", `changePage(${i})`);
    listPageContainer.appendChild(page);
  }

  if (thisPage < count) {
    let next = document.createElement("li");
    next.innerText = ">";
    next.setAttribute("onclick", `changePage(${thisPage + 1})`);
    listPageContainer.appendChild(next);
  }
}

function changePage(newPage) {
  thisPage = newPage;
  loadItem();
}
const deleteButtons = document.querySelectorAll(".btn-delete");
deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener("click", function () {
    const confirmed = window.confirm("Bạn có chắc muốn xóa?");
    if (confirmed) {
      const row = this.closest("tr");
      if (row) {
        row.remove();
      }
    }
  });
});
//hien thi form
function hienThi() {
  var form = document.getElementById("formContainer");
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
  }
}
function initProductList() {
  var productList = JSON.parse(localStorage.getItem('productList')) || [];
  var table = document.getElementById('tbl-product').getElementsByTagName('tbody')[0];

  for (var i = 0; i < productList.length; i++) {
    var product = productList[i];
    var newRow = table.insertRow(-1);
    var cellCount = newRow.insertCell(0);
    cellCount.textContent = i + 1;
    var cellID = newRow.insertCell(1);
    cellID.textContent = product.id;
    var cellName = newRow.insertCell(2);
    cellName.textContent = product.name;
    var cellPrice = newRow.insertCell(3);
    cellPrice.textContent = product.price + ' VND';
    var cellImage = newRow.insertCell(4);
    cellImage.textContent = product.image;

    var cellAction = newRow.insertCell(5);
    var editButton = document.createElement('button');
    editButton.className = 'btn-edit';
    editButton.textContent = 'Sửa';
    var deleteButton = document.createElement('button');
    deleteButton.className = 'btn-delete';
    deleteButton.textContent = 'Xóa';
    cellAction.appendChild(editButton);
    cellAction.appendChild(deleteButton);
  }
}
initProductList();

//add product
function themSanPhamMoi() {
  var product_id = document.getElementById('product_id').value;
  var product_name = document.getElementById('product_name').value;
  var product_price = document.getElementById('product_price').value;
  var product_image = document.getElementById('product_image').value;
  var table = document.getElementById('tbl-product').getElementsByTagName('tbody')[0];

  if(product_id=""){
    alert("Id không dược để trống");
    return;
  }else if(product_name==""){ 
    alert("Tên sản phẩm không được để trống");
    return;
  }else if(product_price==""){
    alert("Giá tiền không được để trống");
    return;
  }else if(product_image==""){
    alert("Hình ảnh không được để trống");
    return ;
  }
  var newRow = table.insertRow(-1);
  var cellCount = newRow.insertCell(0);
  cellCount.textContent = table.rows.length;
  var cellID = newRow.insertCell(1);
  cellID.textContent = product_id;
  var cellName = newRow.insertCell(2);
  cellName.textContent = product_name;
  var cellPrice = newRow.insertCell(3);
  cellPrice.textContent = product_price + ' VND';
  var cellImage = newRow.insertCell(4);
  cellImage.textContent = product_image;

  var cellAction = newRow.insertCell(5);
  var editButton = document.createElement('button');
  editButton.className = 'btn-edit';
  editButton.textContent = 'Sửa';
  var deleteButton = document.createElement('button');
  deleteButton.className = 'btn-delete';
  deleteButton.textContent = 'Xóa';
  cellAction.appendChild(editButton);
  cellAction.appendChild(deleteButton);

  anForm();
  // Lưu danh sách sản phẩm vào localStorage
  var productList = JSON.parse(localStorage.getItem('productList')) || [];
  var newProduct = {
    id: product_id,
    name: product_name,
    price: product_price,
    image: product_image,
  };
  productList.push(newProduct);
  localStorage.setItem('productList', JSON.stringify(productList));
}

function anForm() {
  var formContainer = document.getElementById('formContainer');
  formContainer.style.display = 'none';
}

// Khôi phục danh sách sản phẩm từ localStorage khi tải lại trang
window.addEventListener('load', function () {
  var productList = JSON.parse(localStorage.getItem('productList')) || [];
  var tbody = document.getElementById('productTable').getElementsByTagName('tbody')[0];

  for (var i = 0; i < productList.length; i++) {
    var product = productList[i];
    var newRow = tbody.insertRow(-1);
    var cellCount = newRow.insertCell(0);
    cellCount.textContent = i + 1;
    var cellID = newRow.insertCell(1);
    cellID.textContent = product.id;
    var cellName = newRow.insertCell(2);
    cellName.textContent = product.name;
    var cellPrice = newRow.insertCell(3);
    cellPrice.textContent = product.price + ' VND';
    var cellImage = newRow.insertCell(4);
    cellImage.textContent = product.image;

    var cellAction = newRow.insertCell(5);
    var editButton = document.createElement('button');
    editButton.className = 'btn-edit';
    editButton.textContent = 'Sửa';
    var deleteButton = document.createElement('button');
    deleteButton.className = 'btn-delete';
    deleteButton.textContent = 'Xóa';
    cellAction.appendChild(editButton);
    cellAction.appendChild(deleteButton);
  }
});

function Thoat() {
  var formContainer = document.getElementById("formContainer");
  formContainer.style.display = "none";
}
//thong ke

const chitiethoadon = JSON.parse(localStorage.getItem("chitiethoadon")) || [];
const hoadon = JSON.parse(localStorage.getItem("hoadon")) || [];
const sanpham = JSON.parse(localStorage.getItem("sanpham")) || [
  {
    masanpham: 1,
    manhom: 1,
    mahang: "",
    tensanpham: "nho",
    ngaynhap: "",
    motta: "",
    soluong: "",
    gia: 30,
    hinhanh: "xoai.jpg",
    trangthaisanpham: "",
  },
  {
    masanpham: 2,
    manhom: 2,
    mahang: "",
    tensanpham: "nho",
    ngaynhap: "",
    motta: "",
    soluong: "",
    gia: 40,
    hinhanh: "xoai.jpg",
    trangthaisanpham: "",
  },
];

let tainhom = () => {
  let option = document.createElement("option");
  option.value = "all";
  option.innerHTML = `Tất cả nhóm`;
  nhom.appendChild(option);
  sanpham.map((x) => {
    let option = document.createElement("option");
    option.value = x.manhom;
    option.innerHTML = `${"Nhóm: " + x.manhom}`;
    nhom.appendChild(option);
  });
};
tainhom();

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
      return y.masanpham;
    });
  } else {
    sanphamnhom = sanpham
      .filter((x) => {
        return x.manhom == nhom;
      })
      .map((y) => {
        return y.masanpham;
      });
  }

  let thongkearray = chitiethoadon.filter((x) => {
    if (sanphamnhom.includes(x.masanpham) && hoadonngay.includes(x.mahoadon))
      return x;
  });

  return doanhthu(thongkearray);
};

let today = new Date().toISOString().slice(0, 10);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let nhomhientai = nhom.value;
  let ngaybatdau = document.getElementById("ngaybatdau").value;
  let ngayketthuc = document.getElementById("ngayketthuc").value;

  let map = thongke(ngaybatdau, ngayketthuc, nhomhientai);
  loaddata(map);
});
// load data
let loaddata = (map) => {
  let nhomhientai = nhom.value;
  let sanphamnhom;
  if (nhomhientai == "all") {
    sanphamnhom = sanpham;
  } else {
    sanphamnhom = sanpham.filter((x) => {
      return x.manhom == nhomhientai;
    });
  }

  table[0].innerHTML = "";
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  tr.innerHTML = ` <th >STT</th>
 <th >Nhóm</th>
 <th >Tên sản phẩm</th>
 <th ">Lợi nhuận</th>`;
  thead.appendChild(tr);
  table[0].appendChild(thead);
  let tbody = document.createElement("tbody");
  sanphamnhom.map((x) => {
    let tr = document.createElement("tr");

    tr.innerHTML = `<td>${x.masanpham}</td>
  <td>${x.manhom}</td>
  <td>${x.tensanpham}</td>`;
    let td = document.createElement("td");
    let giatien = map.get(x.masanpham);
    if (giatien) {
      td.innerHTML = `${giatien.toLocaleString()}`;
    } else {
      td.innerHTML = `${0}`;
    }
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  table[0].appendChild(tbody);
};

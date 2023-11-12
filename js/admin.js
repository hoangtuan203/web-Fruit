import product from "./product.js";

const deleteButtons = document.querySelectorAll(".btn-delete");
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
const admin = {
  // const form = document.getElementById("thongke");
  // let nhom = document.getElementById("nhom");
  // const table = document.getElementsByClassName("table");

  //hien thi menu left
  PhongSide: function () {
    var menu_left = document.getElementById("menuLeft");
    menu_left.style.width = "250px";
    var menuItems = document.querySelectorAll(".list-menu-item");
    menuItems.forEach(function (item) {
      item.classList.remove("hide-text");
    });
  },

  // Ẩn menu left
  ThuSide: function () {
    menu_left.style.width = "80px";
    var menuItems = document.querySelectorAll(".list-menu-item");
    menuItems.forEach(function (item) {
      item.classList.add("hide-text");
    });
  },
  // xử lí phân trang
  loadItem: function () {
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
  },
  listPage: function () {
    let thisPage = 1;
    let limit = 5;
    let list = document.querySelectorAll(".list-product .item");
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
  },
  changePage: function (newPage) {
    thisPage = newPage;
    loadItem();
  },
  //load product list
  loadProductList: function () {
  
    const bodyProduct = document.querySelector(".body-product");
    const table = document.createElement("table");
    table.id = "tbl-product";
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
        <th>STT</th>
        <th>ID</th>
        <th>Name Product</th>
        <th>Price</th>
        <th>Image</th>
  `;

    thead.appendChild(headerRow);
    table.appendChild(thead);
    console.log(product);
    product.products.forEach((item, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.img}</td>
    `;
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    bodyProduct.appendChild(table);
  }
  //thong ke

  // let tainhom = () => {
  //   let option = document.createElement("option");
  //   option.value = "all";
  //   option.innerHTML = `Tất cả nhóm`;
  //   nhom.appendChild(option);
  //   sanpham.map((x) => {
  //     let option = document.createElement("option");
  //     option.value = x.manhom;
  //     option.innerHTML = `${"Nhóm: " + x.manhom}`;
  //     nhom.appendChild(option);
  //   });
  // };
  // tainhom();

  // let doanhthu = (chitiethoadon) => {
  //   let map = new Map();
  //   chitiethoadon.map((x) => {
  //     let sanpham = x.masanpham;
  //     let tien = map.get(x.masanpham);
  //     let temp = x.soluong * x.gia;
  //     if (tien) {
  //       map.set(sanpham, temp + tien);
  //     } else {
  //       map.set(sanpham, temp);
  //     }
  //   });

  //   return map;
  // };

  // let thongke = (ngaybatdau, ngayketthuc, nhom) => {
  //   if (chitiethoadon.length == 0) {
  //     return new Map();
  //   }
  //   let hoadonngay = hoadon
  //     .filter((x) => {
  //       return x.ngaymua >= ngaybatdau && x.ngaymua <= ngayketthuc;
  //     })
  //     .map((y) => {
  //       return y.mahoadon;
  //     });

  //   let sanphamnhom;
  //   if (nhom == "all") {
  //     sanphamnhom = sanpham.map((y) => {
  //       return y.masanpham;
  //     });
  //   } else {
  //     sanphamnhom = sanpham
  //       .filter((x) => {
  //         return x.manhom == nhom;
  //       })
  //       .map((y) => {
  //         return y.masanpham;
  //       });
  //   }

  //   let thongkearray = chitiethoadon.filter((x) => {
  //     if (sanphamnhom.includes(x.masanpham) && hoadonngay.includes(x.mahoadon))
  //       return x;
  //   });

  //   return doanhthu(thongkearray);
  // };

  // let today = new Date().toISOString().slice(0, 10);
  // form.addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   let nhomhientai = nhom.value;
  //   let ngaybatdau = document.getElementById("ngaybatdau").value;
  //   let ngayketthuc = document.getElementById("ngayketthuc").value;

  //   let map = thongke(ngaybatdau, ngayketthuc, nhomhientai);
  //   loaddata(map);
  // });
  // // load data
  // let loaddata = (map) => {
  //   let nhomhientai = nhom.value;
  //   let sanphamnhom;
  //   if (nhomhientai == "all") {
  //     sanphamnhom = sanpham;
  //   } else {
  //     sanphamnhom = sanpham.filter((x) => {
  //       return x.manhom == nhomhientai;
  //     });
  //   }

  //   table[0].innerHTML = "";
  //   let thead = document.createElement("thead");
  //   let tr = document.createElement("tr");
  //   tr.innerHTML = ` <th >STT</th>
  //  <th >Nhóm</th>
  //  <th >Tên sản phẩm</th>
  //  <th ">Lợi nhuận</th>`;
  //   thead.appendChild(tr);
  //   table[0].appendChild(thead);
  //   let tbody = document.createElement("tbody");
  //   sanphamnhom.map((x) => {
  //     let tr = document.createElement("tr");

  //     tr.innerHTML = `<td>${x.masanpham}</td>
  //   <td>${x.manhom}</td>
  //   <td>${x.tensanpham}</td>`;
  //     let td = document.createElement("td");
  //     let giatien = map.get(x.masanpham);
  //     if (giatien) {
  //       td.innerHTML = `${giatien.toLocaleString()}`;
  //     } else {
  //       td.innerHTML = `${0}`;
  //     }
  //     tr.appendChild(td);
  //     tbody.appendChild(tr);
  //   });
  //   table[0].appendChild(tbody);
  // };
  ,
  start : function () {
    this.PhongSide();
    this.ThuSide(); 
    this.listPage();
    this.loadItem();
    this.changePage();
    this.loadProductList();
    console.log("ac")
  }
};
export default admin;
// const storedProductsJSON = localStorage.getItem("products");
// const storedProducts = JSON.parse(storedProductsJSON);
// const content = document.getElementsByClassName("content")[0];
// const showProduct = document.getElementById("productId");
// const productsPerPage = 10;
// showProduct.addEventListener("click", () => {
//   content.innerHTML = "";
//   let div = document.createElement("div");
//   div.className = "container-thongke";
//   div.innerHTML = `<div class="product">
//     <div class="header-product">
//       <h1 class="title">QUẢN LÝ SẢN PHẨM</h1>
//       <p id="productQuantity">
//         Tổng sản phẩm:
//         <span id="quantityValue"></span>
//       </p>
//       <div class="button-header">
//         <button class="btn-add" onclick="addProduct()">Thêm SP</button>
//         <button
//           id="imageInput"
//           class="btn-upload-img"
//           onclick="showUploadImage()"
//         >
//           Thêm Ảnh
//         </button>
//         <button class="btn-delete-all" onclick="deleteSelectedProducts()">
//           Xóa Nhiều
//         </button>
//       </div>
//     </div>
//     <div id="tableProduct" class="body-product">
//     </div>
//     <!-- add product -->
//     <div id="addProductModal" class="modal">
//       <div class="modal-content">
//         <span class="close" onclick="closeAddProductModal()">&times;</span>
//         <h2>Thêm sản phẩm mới</h2>
//         <form id="addProductForm">
//           <label for="productName">Tên Sản Phẩm:</label>
//           <input
//             type="text"
//             id="productName"
//             name="productName"
//             placeholder="Input Product Name"
//           />

//           <label for="productPrice">Giá:</label>
//           <input
//             type="number"
//             id="productPrice"
//             name="productPrice"
//             placeholder="Input Price"
//             required
//           />

//           <label for="productQuantity">Số Lượng:</label>
//           <input
//             type="number"
//             id="productQuantity"
//             name="productQuantity"
//             placeholder="Input Quantity"
//             required
//           />

//           <label for="productImage">HÌnh Ảnh:</label>
//           <input
//             type="file"
//             id="productImage"
//             name="productImage"
//             accept="image/*"
//             required
//           />

//           <button
//             class="btn-add-product-new"
//             type="button"
//             onclick="addProductNew()"
//           >
//             Thêm Sản Phẩm
//           </button>
//         </form>
//       </div>
//     </div>

//     <!-- form upload image -->
//     <div class="modal" id="addImage">
//       <div class="addProductModal">
//         <form class="form-upload-image" id="imageUploadForm">
//           <div class="headerUpload">
//             <label for="imageInput">Chọn Ảnh:</label>
//             <span class="closeImage" onclick="closeAddImage()">×</span>
//           </div>

//           <input
//             type="file"
//             id="imageInput"
//             name="image"
//             accept="image/*"
//             required
//           />
//           <button type="button" onclick="uploadImage()">Upload Ảnh</button>
//         </form>
//       </div>
//     </div>
//     <div class="pagination">
//       <ul class="listPage">
//         <li class="active listPage-item">1</li>
//         <li class="listPage-item">2</li>
//         <li class="listPage-item">3</li>
//       </ul>
//     </div>
//   </div>
//   `;
//   content.appendChild(div);
//   loadProductList(1);
// });
// //hien thi menu left
// const menu_left = document.getElementById("menuLeft");
// function PhongSide() {
//   menu_left.style.width = "250px";
//   var menuItems = document.querySelectorAll(".list-menu-item");
//   menuItems.forEach(function (item) {
//     item.classList.remove("hide-text");
//   });
// }
// // Ẩn menu left
// function ThuSide() {
//   menu_left.style.width = "80px";
//   var menuItems = document.querySelectorAll(".list-menu-item");
//   menuItems.forEach(function (item) {
//     item.classList.add("hide-text");
//   });
// }
// document.addEventListener("DOMContentLoaded", function () {
//   ThuSide();
// });

// //phan trang

// function getTotalPages() {
//   const storedProductsJSON = localStorage.getItem("storedProducts");
//   const storedProducts = storedProductsJSON
//     ? JSON.parse(storedProductsJSON)
//     : [];
//   return Math.ceil(storedProducts.length / productsPerPage);
// }
// function createPagination(totalPages, currentPage) {
//   const paginationContainer = document.querySelector(".pagination");
//   paginationContainer.innerHTML = ""; // Clear existing pagination

//   const ul = document.createElement("ul");
//   ul.classList.add("listPage");

//   for (let i = 1; i <= totalPages; i++) {
//     const li = document.createElement("li");
//     li.classList.add("listPage-item");
//     if (i === currentPage) {
//       li.classList.add("active");
//     }
//     li.textContent = i;
//     li.addEventListener("click", function () {
//       loadProductList(i);
//     });
//     ul.appendChild(li);
//   }

//   paginationContainer.appendChild(ul);
// }

// // Load product
// function loadProductList(currentPage) {
//   const bodyProduct = document.getElementById("tableProduct");
//   console.log(bodyProduct);
//   const existingTable = document.getElementById("tbl-product");
//   if (existingTable) {
//     existingTable.parentNode.removeChild(existingTable);
//   }
//   // Create a new table
//   const table = document.createElement("table");
//   table.id = "tbl-product";
//   const thead = document.createElement("thead");
//   const tbody = document.createElement("tbody");
//   const headerRow = document.createElement("tr");
//   headerRow.innerHTML = `
//       <th>STT</th>
//       <th>ID</th>
//       <th>Tên Sản Phẩm</th>
//       <th>Giá(VNĐ)</th>
//       <th>Số Lượng</th>
//       <th>Hình Ảnh</th>
//       <th>Chọn</th>
//       <th>Chức Năng</th>
//   `;

//   thead.appendChild(headerRow);
//   table.appendChild(thead);

//   const storedProductsJSON = localStorage.getItem("storedProducts");
//   const storedProducts = storedProductsJSON
//     ? JSON.parse(storedProductsJSON)
//     : [];


//   currentPage = currentPage || 1;
//   const startIndex = (currentPage - 1) * productsPerPage;
//   const endIndex = startIndex + productsPerPage;
//   displayedProducts = storedProducts.slice(startIndex, endIndex);

//   displayedProducts.forEach((item, index) => {
//     const row = createTableRow(item, startIndex + index);
//     tbody.appendChild(row);
//   });

//   table.appendChild(tbody);
//   bodyProduct.appendChild(table);

//   const totalPages = getTotalPages();
//   createPagination(totalPages, currentPage);
//   quantityProduct();
// }

// function createTableRow(item, index) {
//   const row = document.createElement("tr");
//   row.innerHTML = `
//     <td>${index + 1}</td>
//     <td>${item.id}</td>
//     <td>${item.name}</td>
//     <td>${item.price}</td>
//     <td>${item.quantity}</td>
//     <td><img src="../image/product-fresh/${
//       item.img
//     }" style="max-width: 50px; max-height: 50px; background-color:transparent;"></td>
//     <td>  
//       <input type="checkbox" class="product-checkbox" id="checkbox-${item.id}">
//     </td>
//     <td>
//       <button class="btn-edit-product" onclick="editProduct(${
//         item.id
//       })">Sửa</button>
//       <button class="btn-delete-product" onclick="deleteProduct(${
//         item.id
//       })">Xóa</button>
//     </td>
//   `;

//   row.addEventListener("click", function () {
//     const checkbox = row.querySelector(".product-checkbox");
//     checkbox.checked = !checkbox.checked;
//   });

//   return row;
// }
// // Call the function to load the product list
// function closeAddProductModal() {
//   const modal = document.getElementById("addProductModal");
//   modal.style.display = "none";
// }
// function addProduct() {
//   const modal = document.getElementById("addProductModal");
//   modal.style.display = "block";
// }
// function addProductNew() {
//   const productName = document.getElementById("productName").value.trim();
//   const productPrice = parseFloat(
//     document.getElementById("productPrice").value
//   );
//   const productQuantity = parseInt(
//     document.getElementById("productQuantity").value
//   );
//   const productImageInput = document.getElementById("productImage");

//   // Extract only the file name from the full path
//   const productImage = productImageInput.files[0]
//     ? productImageInput.files[0].name
//     : "";

//   const storedProductsJSON = localStorage.getItem("storedProducts");
//   const storedProducts = storedProductsJSON
//     ? JSON.parse(storedProductsJSON)
//     : [];

//   const maxId = storedProducts.reduce(
//     (max, product) => (product.id > max ? product.id : max),
//     0
//   );

//   const newProduct = {
//     id: maxId + 1,
//     name: productName,
//     price: productPrice,
//     quantity: productQuantity,
//     img: productImage,
//   };

//   storedProducts.push(newProduct);
//   localStorage.setItem("storedProducts", JSON.stringify(storedProducts));
//   loadProductList();
//   alert("Thêm Sản Phẩm Thành Công !");
//   closeAddProductModal();
// }

// //delete product
// function deleteProduct(productId) {
//   const index = storedProducts.findIndex((product) => product.id === productId);
//   if (index !== -1) {
//     const confirmation = window.confirm("Bạn muốn xóa sản phẩm này?");

//     if (confirmation) {
//       const deletedProduct = storedProducts.splice(index, 1)[0]; // Remove and get the deleted product
//       localStorage.setItem("storedProducts", JSON.stringify(storedProducts));
//       const table = document.getElementById("tbl-product");
//       if (table) {
//         table.parentNode.removeChild(table);
//       }
//       loadProductList();
//     }
//   }
// }
// //xoa nhieu san pham
// function deleteSelectedProducts() {
//   const checkboxes = document.querySelectorAll(".product-checkbox:checked");
//   const selectedProductIds = Array.from(checkboxes).map((checkbox) =>
//     parseInt(checkbox.dataset.id, 10)
//   );

//   if (selectedProductIds.length === 0) {
//     alert("Vui lòng chọn ít nhất một sản phẩm để xóa.");
//     return;
//   }

//   const confirmation = window.confirm(
//     "Bạn có chắc chắn muốn xóa các sản phẩm đã chọn?"
//   );

//   if (confirmation) {
//     const updatedProducts = storedProducts.filter(
//       (product) => !selectedProductIds.includes(product.id)
//     );
//     localStorage.setItem("storedProducts", JSON.stringify(updatedProducts));
//     loadProductList();
//   }
// }

// //load quantity product
// function quantityProduct() {
//   const numberOfProducts = getNumberOfProducts();
//   document.getElementById("quantityValue").innerText = numberOfProducts;
// }
// function getNumberOfProducts() {
//   const storedProductsJSON = localStorage.getItem("storedProducts");
//   const storedProducts = storedProductsJSON
//     ? JSON.parse(storedProductsJSON)
//     : [];
//   return storedProducts.length;
// }
// function showUploadImage() {
//   const form = document.getElementById("addImage");
//   form.style.display = "block";
// }
// function closeAddImage() {
//   const form = document.getElementById("addImage");
//   form.style.display = "none";
// }
// //upload image
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
// loadProductList(1)
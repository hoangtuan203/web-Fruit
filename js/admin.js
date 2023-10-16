//hien thi menu left
var menu_left = document.getElementsByClassName('menu-left')[0];
function PhongSide() {
    menu_left.style.width = '250px';
    var menuItems = document.querySelectorAll('.list-menu-item');
    menuItems.forEach(function(item) {
        item.classList.remove('hide-text');
    });
}
// Ẩn menu left
function ThuSide() {
    menu_left.style.width = '80px';
    var menuItems = document.querySelectorAll('.list-menu-item');
    menuItems.forEach(function(item) {
        item.classList.add('hide-text');
    });
}
// xử lí phân trang
const page = document.getElementById('pagination');
const range = delta + 4;
const valuePage = {
    truncate :true,
    currentPage :1,
    numLinksTwoSide:1,
    totalPages:3
};
function pagination(){
    const {totalPages,currentPage,truncate,numLinksTwoSide:delta } = valuePage;
}


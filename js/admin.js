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

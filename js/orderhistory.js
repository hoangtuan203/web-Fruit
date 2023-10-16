const table = document.getElementsByClassName('table');
const currentuser = JSON.parse(localStorage.getItem('currentuser')) || '';
const hoadon = JSON.parse(localStorage.getItem('hoadon')) || [];
let hoadonnguoidung = hoadon.filter((x) => x.makhach == currentuser.makhach);
function reloadCard() {
  table[0].innerHTML = '';
  let tr = document.createElement('tr');
  tr.innerHTML = ` <th >Mã hóa đơn</th>
  <th>Tổng tiền</th>
   <th>Thời gian mua</th>
   <th>Trạng thái hóa đơn</th>`;

  table[0].appendChild(tr);
  hoadonnguoidung.forEach((value, key) => {
    let tr = document.createElement('tr');

    tr.innerHTML = `
                  <td>${value.mahoadon}</td>
                  <td>${value.tongtien}</td>
                  <td>${value.ngaymua}</td>
                  <td>${value.trangthaihoadon}</td>`;

    table[0].appendChild(tr);
  });
}
reloadCard();

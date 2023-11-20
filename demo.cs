using BUS;
using DTO;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace WindowsFormsApp1
{
    public partial class BanHangGUI : Form
    {
       
        decimal thanhTien = 0;
        decimal tongTien = 0;
        private int soLuongSanPham = 1;
        private DataTable gioHang;
        BanHangBUS bus = new BanHangBUS();
        KhachHangBUS khachHangBUS=new KhachHangBUS();
        KhuyenMaiBUS khuyenMaiBUS = new KhuyenMaiBUS();
        HoaDonBUS hoaDonBus=new HoaDonBUS();
        ChiTietHoaDonBUS chiTietHoaDonBUS = new ChiTietHoaDonBUS();
        decimal soLuongSPTrongDB;
        //public string maNhanVien { get; set; }
        public BanHangGUI()
        {
            InitializeComponent();
            HienThiHoaDon();
            gioHang = new DataTable();
            gioHang.Columns.Add("MaSP", typeof(string));
            gioHang.Columns.Add("TenSP", typeof(string));
            gioHang.Columns.Add("GiaBan", typeof(decimal));
            gioHang.Columns.Add("SoLuong", typeof(int));
            gioHang.Columns.Add("ThanhTien", typeof(decimal));
            gioHang.Columns.Add("Xoa", typeof(bool)).SetOrdinal(0);

            dataGridView2.DataSource = gioHang;

            dataGridView2.Columns["MaSP"].HeaderText = "Mã SP";
            dataGridView2.Columns["TenSP"].HeaderText = "Tên SP";
            dataGridView2.Columns["GiaBan"].HeaderText = "Giá bán";
            dataGridView2.Columns["SoLuong"].HeaderText = "Số lượng";
            dataGridView2.Columns["ThanhTien"].HeaderText = "Thành tiền";
            dataGridView2.Columns["Xoa"].HeaderText = "Xóa";
        }
        private void capNhatSoLuong()
        {

        }
        
        private void BanHangGUI_Load(object sender, EventArgs e)
        {
          
          
            dataGridView1.DataSource = bus.getDSSP();
            // load combobox khách hàng
            DataTable dtKhachHang=khachHangBUS.getKhachHang();
            if (dtKhachHang.Rows.Count > 0)
            {
                dtKhachHang.Columns.Add("MaTenKH", typeof(string), "maKH + ' - ' + tenKH");
                comboBox2.DataSource = dtKhachHang;
                comboBox2.DisplayMember = "MaTenKH";
                comboBox2.ValueMember = "maKH";
              
            }
            // load combobox khuyễn mãi
            DataTable dtKhuyenMai = khuyenMaiBUS.getKhuyenMai();
            if (dtKhuyenMai.Rows.Count > 0)
            {
                dtKhuyenMai.Columns.Add("MaTenKM", typeof(string), "maKM + ' - ' + tenKM");
                comboBox1.DataSource = dtKhuyenMai;
                comboBox1.DisplayMember = "MaTenKM";
                comboBox1.ValueMember = "maKM";

            }
            comboBox1.SelectedIndex = -1;
            comboBox2.SelectedIndex = -1;

        }

        // nút thanh toán
        private void button3_Click(object sender, EventArgs e)
        {
            thanhToan();
            HienThiHoaDon();
        }

      
        // tìm kiếm
        private void button1_Click(object sender, EventArgs e)
        {
           string keyword = textBox1.Text;    
            if (!string.IsNullOrEmpty(keyword))
            {
                DataTable searchResult = bus.TimKiemSanPham(keyword); 

                if (searchResult != null && searchResult.Rows.Count > 0)
                {
                    dataGridView1.DataSource = searchResult;
                }
                else
                {
                    dataGridView1.DataSource = null; 
                    MessageBox.Show("Không tìm thấy sản phẩm nào.");
                }
            }
            else
            {
                MessageBox.Show("Vui lòng nhập từ khóa tìm kiếm.");
            }
        }
        // tải lại trang
        private void button5_Click(object sender, EventArgs e)
        {
            dataGridView1.DataSource = bus.getDSSP();
            textBox2.Text = "";
            textBox3.Text = "";
            textBox5.Text = "";
            textBox7.Text = "";
            textBox8.Text = "";
        }
        private void dataGridView1_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.RowIndex >= 0 && e.ColumnIndex >= 0)
            {
                DataGridViewRow selectedRow = dataGridView1.Rows[e.RowIndex];
                string maSP = selectedRow.Cells["Column1"].Value.ToString();
                string tenSP = selectedRow.Cells["Column2"].Value.ToString();
                decimal giaBan = decimal.Parse(selectedRow.Cells["Column4"].Value.ToString());
                string maLoai = selectedRow.Cells["Column3"].Value.ToString();
                soLuongSPTrongDB = decimal.Parse(selectedRow.Cells["Column22"].Value.ToString());
                string anh = selectedRow.Cells["Column5"].Value.ToString();
                textBox3.Text = maSP;
                textBox2.Text = tenSP;
                textBox5.Text = giaBan.ToString();
            }
        }
        // thêm vào giỏ
        private void button2_Click(object sender, EventArgs e)
        {
            string maSP = textBox3.Text;
            string tenSP = textBox2.Text;
            if (string.IsNullOrEmpty(maSP))
            {
                MessageBox.Show("Vui lòng chọn sản phẩm trước khi thêm vào giỏ hàng.");
                return;
            }
            decimal giaBan = decimal.Parse(textBox5.Text);
            DataRow[] existingRows = gioHang.Select("MaSP = '" + maSP + "'");
            if (existingRows.Length > 0)
            {
                int soLuong = Convert.ToInt32(existingRows[0]["SoLuong"]);
                if (soLuong + soLuongSanPham <= soLuongSPTrongDB)
                {
                    existingRows[0]["SoLuong"] = soLuong + soLuongSanPham;
                }
                else
                {
                    MessageBox.Show("sản phẩm tạm thời hết hàng");
                }
                tienSauKhuyenMai();
            }
            else
            {
                if (soLuongSanPham > soLuongSPTrongDB)
                {
                    MessageBox.Show("sản phẩm tạm thời hết hàng ");
                }
                else
                {
                    DataRow newRow = gioHang.NewRow();
                    newRow["MaSP"] = maSP;
                    newRow["TenSP"] = tenSP;
                    newRow["GiaBan"] = giaBan;
                    newRow["SoLuong"] = soLuongSanPham;
                    newRow["Xoa"] = false;
                    gioHang.Rows.Add(newRow); 
                }
            }
            foreach (DataRow row in gioHang.Rows)
            {
                decimal gia = Convert.ToDecimal(row["GiaBan"]);
                int soLuong = Convert.ToInt32(row["SoLuong"]);
                row["ThanhTien"] = gia * soLuong;
                tongTien += gia * soLuong;
            }
            label21.Text = "Tổng Tiền: " + tongTien.ToString("#,##0 VND");
        }
        private void numericUpDown1_ValueChanged(object sender, EventArgs e)
        {
            soLuongSanPham = (int)numericUpDown1.Value;
        }
        // xóa giỏ hàng
        private void button4_Click(object sender, EventArgs e)
        {
            var rowsToDelete = gioHang.Select("Xoa = true");
            foreach (DataRow row in rowsToDelete)
            {
                gioHang.Rows.Remove(row);
            }
            foreach (DataRow row in gioHang.Rows)
            {
                row.SetField("Xoa", false);
            }
        }

        private void comboBox2_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
        // tính tiền khuyến mãi 
        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            tienSauKhuyenMai();
        }
        private void tienSauKhuyenMai()
        {
            DataRowView selectedRow = comboBox1.SelectedItem as DataRowView;
            if (selectedRow != null)
            {
                decimal khuyenMai = Convert.ToDecimal(selectedRow["maKM"]);
                decimal tienKhuyenMai = (tongTien * khuyenMai / 100);
                textBox7.Text = tienKhuyenMai.ToString();
                decimal thanhTien = tongTien - tienKhuyenMai;
                textBox8.Text = thanhTien.ToString();
            }
        }
        // datagridview4 bảng chi tiết hóa đơn
        private void HienThiChiTietHoaDon(int maHD)
        {
            dataGridView4.DataSource = chiTietHoaDonBUS.GetChiTietHoaDon(maHD);
        }
        private void HienThiHoaDon()
        {
            dataGridView5.DataSource = hoaDonBus.getDSHD();
        }
        private void dataGridView5_Click(object sender, EventArgs e)
        {
            if (dataGridView5.SelectedCells.Count > 0)
            {
                int selectedRow = dataGridView5.SelectedCells[0].RowIndex;
                DataGridViewRow row = dataGridView5.Rows[selectedRow];
                int maHoaDon = Convert.ToInt32(row.Cells[0].Value);
                HienThiChiTietHoaDon(maHoaDon);
            }
        }
        
        // hàm thanh toán
        private void thanhToan()
        {
            if (gioHang.Rows.Count == 0)
            {
                MessageBox.Show("Giỏ hàng đang trống. Vui lòng thêm sản phẩm vào giỏ hàng trước khi thanh toán.", "Thông báo", MessageBoxButtons.OK, MessageBoxIcon.Information);
                return; 
            }
            if (string.IsNullOrEmpty(comboBox1.Text))
            {
                MessageBox.Show("Vui lòng chọn mã giảm giá trước khi thanh toán.", "Thông báo", MessageBoxButtons.OK, MessageBoxIcon.Information);
                return; 
            }
            if (string.IsNullOrEmpty(comboBox2.Text))
            {
                MessageBox.Show("Vui lòng chọn mã khách hàng trước khi thanh toán.", "Thông báo", MessageBoxButtons.OK, MessageBoxIcon.Information);
                return; 
            }
            DangNhapGUI d = new DangNhapGUI();
            string maKhachHang = comboBox2.Text;
            string maGiamGia = comboBox1.Text;
            decimal soTienGiam = decimal.Parse(textBox7.Text);
            decimal thanhTien = decimal.Parse(textBox8.Text);
            DateTime ngayLap = DateTime.Now;
            FormThanhToan thanhToan = new FormThanhToan();
            thanhToan.tenNhanVien = d.TenNhanVien;
            thanhToan.MaKhachHang = maKhachHang;
            thanhToan.MaGiamGia = maGiamGia;
            thanhToan.SoTienGiam = soTienGiam;
            thanhToan.ThanhTien = thanhTien;
            thanhToan.GioHang = gioHang;
            thanhToan.ShowDialog();
            string maKhachHangHD = comboBox2.SelectedValue.ToString();
            string maKhuyenMai = comboBox1.SelectedValue.ToString();
            if (int.TryParse(maKhachHangHD, out int maKH))
            {
                HoaDonDTO hoaDon = new HoaDonDTO
                {
                    maNV = d.MaNhanVien,
                    maKH = maKH,
                    ngayLap = ngayLap,
                    tongTien = (float)thanhTien

                };
                if (hoaDonBus.TaoHoaDon(hoaDon))
                {
                    int maHoaDon = hoaDonBus.GetMaHoaDonMoiNhat();
                    if (maHoaDon != -1)
                    {
                        foreach (DataRow row in gioHang.Rows)
                        {
                            string maSP = row["maSP"].ToString();
                            string tenSP = row["tenSP"].ToString();
                            int soLuong = Convert.ToInt32(row["soLuong"]);
                            decimal giaBan = Convert.ToDecimal(row["giaBan"]);
                            if (!bus.CapNhatSoLuongSPTrongDB(maSP, soLuong))
                            {
                                MessageBox.Show("Có lỗi khi cập nhật số lượng sản phẩm.", "Lỗi", MessageBoxButtons.OK, MessageBoxIcon.Error);
                                return;
                            }
                            if (int.TryParse(maKhuyenMai, out int maKM))
                            {
                                ChiTietHoaDonDTO chiTietHoaDon = new ChiTietHoaDonDTO
                                {
                                    //maHD
                                    maHD = maHoaDon,
                                    maSP = maSP,
                                    giaBan = (float)giaBan,
                                    soLuong = soLuong,
                                    tongTien = (float)(soLuong * giaBan),
                                    maKM = maKM
                                };
                                if (!chiTietHoaDonBUS.ThemChiTietHoaDon(chiTietHoaDon))
                                {
                                    MessageBox.Show("Có lỗi khi thêm chi tiết hóa đơn.", "Lỗi", MessageBoxButtons.OK, MessageBoxIcon.Error);
                                }
                            }
                        }
                    }
                    else
                    {
                        MessageBox.Show("Không thể lấy mã hóa đơn mới nhất.", "Lỗi", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }
                }
                else
                {
                    MessageBox.Show("Có lỗi khi tạo hóa đơn.", "Lỗi", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
            dataGridView1.DataSource = bus.getDSSP();
        }
        // tìm kiếm hóa đơn
        private void button6_Click(object sender, EventArgs e)
        {
            DateTime fromDate = dateTimePicker1.Value;
            DateTime toDate = dateTimePicker2.Value;
            DataTable result = hoaDonBus.TimKiemHoaDonTheoKhoangNgay(fromDate, toDate);
            dataGridView5.DataSource = result;
        }
        // tải lại phần hóa đơn
        private void button7_Click(object sender, EventArgs e)
        {
            HienThiHoaDon();
            ResetDateTimePickers();
        }
        private void ResetDateTimePickers()
        {
            dateTimePicker1.Value = DateTime.Now;
            dateTimePicker2.Value = DateTime.Now;
        }
    }
}

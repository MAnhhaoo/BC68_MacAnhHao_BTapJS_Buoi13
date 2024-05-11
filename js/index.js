document.querySelector(".btn-success").onclick = function () {
    /**
     INPUT : 
     Nhập số tiền lương trong 1 ngày
     Nhập số ngày làm
    CÁC BƯỚC XỬ LÝ :
    Tính số tiền lương nhận được = số ngày làm * số tiền lương trong 1 ngày

     OUTPUT : số tiền lương nhận được
     */
    let luong1Ngay = document.querySelector(".luong1NgayLam").value ;
    let soNgayLam1 = document.querySelector(".songaylam").value ;
    let luongNhanDuoc =  luong1Ngay * soNgayLam1  ;
    let ketQua1 = document.querySelector(".xuatKetQua").innerHTML = luongNhanDuoc + " VND";
    console.log(ketQua1);
}



// btap 2 
document.querySelector(".btn_tinhTB").onclick = function () {
    /**
     INPUT: 
     nhập giá trị thứ nhất
     nhập giá trị thứ hai
     nhập giá trị thứ ba
     nhập giá trị thứ tư
     nhập giá trị thứ năm
     CÁC BƯỚC XỬ LÝ : giá trị trung bình = ( giá trị thứ nhất + giá trị hai +giá trị thứ ba +giá trị thứ tư + giá trị thứ năm ) / 5
     OUTPUT
     */
    let diem1 = document.querySelector(".nhapSoThuNhat").value *1;
    let diem2 = document.querySelector(".nhapSoThuHai").value *1;
    let diem3 = document.querySelector(".nhapSoThuBa").value *1;
    let diem4 = document.querySelector(".nhapSoThuTu").value *1;
    let diem5 = document.querySelector(".nhapSoThuNam").value *1;
    let diemTb = ( diem1 + diem2 + diem3 + diem4 + diem5) / 5 ;
    let xuatDiemTb = document.querySelector(".alert_tb").innerHTML = diemTb ;
    console.log(xuatDiemTb);
}
//   baitap3
document.querySelector(".btn_quyDoiTien").onclick = function () {
    /**
     INPUT: 
     nhập sô tiền cần chuyển đổi từ usd sang vnd 
     CÁC BƯỚC XỬ LÝ : tiền sau khi quy đổi = * 23500 và dùng dùng thêm NumberFormat để số tiền hiển thị đẹp hơn vd 23,500

     OUTPUT số tiền đã chuyển đổi 
     */
    let doiTien = document.querySelector(".quyDoi").value * 1;
    let giaQuyDoi = doiTien * 23500;
    let xuatTien = new Intl.NumberFormat('vn-VN').format(giaQuyDoi);
    document.querySelector(".alert_thanhTien").innerHTML = xuatTien;
    console.log(xuatTien); // Sẽ hiển thị số tiền được định dạng
}

// baitap4
document.querySelector(".btn_DTCV").onclick = function () {
    /**
     INPUT: 
     nhập chiều dài
     nhập chiều rộng

     CÁC BƯỚC XỬ LÝ : 
     chu vi = (chiều dài + chiều rộng) * 2
     diện tích = chiều dài * chiều rộng
     OUTPUT diện tích và chu vi
     */
    let dai = document.querySelector(".tinhChieuDai").value *1 ;
    let rong = document.querySelector(".tinhChieuRong").value *1;
    let chuVi = ( dai + rong) * 2 ;
    let dienTich = dai * rong ;
    let xuatDTCV = document.querySelector(".alert_DTCV").innerHTML = "Diện tích: " + dienTich + "; " +  "Chu vi: " + chuVi;
    console.log(xuatDTCV);
}


// baitap5


document.querySelector(".btn_TinhTong").onclick = function () {
    /**
     INPUT: 
     nhập giá trị

     CÁC BƯỚC XỬ LÝ : 
     hàng chục sẽ lấy giá trị / 10 và dùng hàm Math.floor để làm tròn số thập phân xuống số nguyên gần nhất VD 1.2 sẽ là 1
     hàng đơn vị sẽ lấy giá trị % 10 VD 12 % 10 sẽ bằng 2 (số dư)
     OUTPUT tổng 2 chữ số VD 12 = 1 + 2 = 3 
     */
    let giaTri = document.querySelector(".tongChuSo").value *1;
    let hangChuc = Math.floor ( giaTri / 10);
    let hangDonVi = giaTri % 10 ;
    let tongHaiChuSo = hangChuc + hangDonVi ;
    document.querySelector(".alert_TinhTong").innerHTML = tongHaiChuSo ;
    console.log(tongHaiChuSo);
}
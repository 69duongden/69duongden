function execute(url) {
    let response = fetch(url);
    let doc = response.html();
    
    // Lấy toàn bộ khối chứa nội dung truyện trên 69shuba
    let contentElement = doc.select(".txtnav");
    
    // Tiến hành dọn dẹp các thẻ thừa, thẻ quảng cáo bám theo văn bản
    contentElement.select("h1").remove();         // Xóa tiêu đề chương lặp lại
    contentElement.select(".txtinfo").remove();    // Xóa dòng thông tin ngày đăng/tác giả
    contentElement.select("#txtright").remove();   // Xóa khối quảng cáo bên phải nếu có
    contentElement.select(".contentadv").remove(); // Xóa khối quảng cáo giữa truyện
    contentElement.select(".bottom-ad").remove();  // Xóa khối quảng cáo dưới cùng
    
    // Lấy nội dung chữ dạng HTML sau khi đã lọc sạch quảng cáo
    let htmlContent = contentElement.html();
    
    // Trả dữ liệu về cho trình đọc của VBook
    return Response.success(htmlContent);
}
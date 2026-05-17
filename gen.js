function execute(url, page) {
    if (!page) page = '1';
    
    // Xử lý thay đổi URL theo số trang thích hợp cho hệ thống 69shuba
    // Ví dụ từ: class/1.htm chuyển thành class/1/2.htm cho trang số 2
    let baseUrl = url.replace(".htm", "");
    if (page !== '1') {
        baseUrl = baseUrl + "/" + page + ".htm";
    } else {
        baseUrl = url;
    }

    let response = fetch(baseUrl);
    let doc = response.html();
    const data = [];

    // Tìm khối danh sách truyện theo phân loại trên giao diện 69shuba
    let el = doc.select(".mybox ul li, .ranking ul li, .grid li");
    
    for (let i = 0; i < el.size(); i++) {
        let e = el.get(i);
        let link = e.select("a").first();
        let href = link.attr("href");

        if (href && href.indexOf("/book/") !== -1) {
            data.push({
                name: e.select("h3, .ranktit, a").first().text().trim(),
                url: href,
                cover: e.select("img").attr("src") || "https://cdn.cdnshu.com/images/apple-touch-icon.png",
                author: e.select(".author, p").text().trim() || "Unknown",
                host: "https://www.69shuba.com"
            });
        }
    }

    // Tính toán trang tiếp theo (Next page) cho VBook
    let next = parseInt(page, 10) + 1;

    return Response.success(data, next.toString());
}
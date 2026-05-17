function execute(key, page) {
    // 69shuba dùng phương thức POST để tìm kiếm dữ liệu
    let response = fetch("https://www.69shuba.com/modules/article/search.php", {
        method: "POST",
        body: {
            "searchkey": key,
            "searchtype": "all"
        }
    });

    let doc = response.html();
    
    // Khối bọc danh sách kết quả tìm kiếm (thường nằm trong thẻ li hoặc div kết quả)
    let el = doc.select(".mybox ul li, .ranking ul li");
    const data = [];

    for (let i = 0; i < el.size(); i++) {
        let e = el.get(i);
        let link = e.select("a").first();
        let href = link.attr("href");

        // Chỉ lấy các link dẫn tới trang chi tiết bộ truyện (có chữ /book/)
        if (href && href.indexOf("/book/") !== -1) {
            data.push({
                name: e.select(".ranktit, h3, a").text().trim(),
                url: href,
                cover: e.select("img").attr("src") || "https://cdn.cdnshu.com/images/apple-touch-icon.png",
                author: e.select(".author, p").text().trim() || "Unknown",
                host: "https://www.69shuba.com"
            });
        }
    }

    return Response.success(data);
}
function execute() {
    let response = fetch("https://www.69shuba.com/");
    let doc = response.html();
    const data = [];

    // Lấy danh sách truyện ở các cột: 新书推荐 (Tân thư), 点击排行 (Click nhiều), 完本推荐 (完本)
    let blocks = doc.select(".indextj li.fl");

    for (let i = 0; i < blocks.size(); i++) {
        let block = blocks.get(i);
        let categoryName = block.select(".mytitle").text().trim(); // Tên mục (Ví dụ: 新书推荐)
        
        let books = block.select(".ranking ul li a");
        const listBooks = [];

        for (let j = 0; j < books.size(); j++) {
            let book = books.get(j);
            let href = book.attr("href");

            if (href && href.indexOf("/book/") !== -1) {
                listBooks.push({
                    name: book.select(".ranktit").text().trim(),
                    url: href,
                    cover: "https://cdn.cdnshu.com/images/apple-touch-icon.png", // Ảnh mặc định vì trang chủ 69shuba không hiện ảnh cover nhỏ
                    host: "https://www.69shuba.com"
                });
            }
        }

        // Đẩy vào danh mục trang chủ của VBook
        data.push({
            title: categoryName,
            input: "https://www.69shuba.com",
            script: "gen.js",
            books: listBooks
        });
    }

    return Response.success(data);
}
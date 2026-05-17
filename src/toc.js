function execute(url) {
    // Xử lý để đưa về url dạng danh sách chương nếu cần, hoặc giữ nguyên fetch
    let response = fetch(url);
    let doc = response.html();
    
    // Bóc tách các thẻ <a> nằm trong khối class .qustime của 69shuba
    let el = doc.select(".qustime ul li a");
    
    const data = [];
    for (let i = 0; i < el.size(); i++) {
        let e = el.get(i);
        data.push({
            name: e.select("span").text().trim(), // Tên chương nằm trong thẻ <span>
            url: e.attr("href") // Đường dẫn chương nằm trong href
        });
    }
    
    return Response.success(data);
}
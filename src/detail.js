function execute(url) {
    let response = fetch(url);
    let doc = response.html();
    
    // Bóc tách thông tin dựa trên cấu trúc thẻ của 69shuba
    let name = doc.select(".booknav2 h1 a").text().trim();
    let author = doc.select(".booknav2 p").first().text().replace("作者：", "").trim();
    let cover = doc.select(".bookimg2 img").attr("src");
    let description = doc.select(".navtxt p").first().html();
    
    return Response.success({
        name: name,
        author: author,
        cover: cover,
        description: description,
        detail: url,
        host: "https://www.69shuba.com"
    });
}
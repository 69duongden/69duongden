function execute() {
    // Định nghĩa danh sách các thể loại chính và đường dẫn tương ứng trên 69shuba
    return Response.success([
        { title: "玄幻魔法 (Huyền Huyễn)", input: "https://www.69shuba.com/novels/class/1.htm", script: "gen.js" },
        { title: "修真武侠 (Tu Chân)", input: "https://www.69shuba.com/novels/class/2.htm", script: "gen.js" },
        { title: "都市言情 (Đô Thị)", input: "https://www.69shuba.com/novels/class/3.htm", script: "gen.js" },
        { title: "历史军事 (Lịch Sử)", input: "https://www.69shuba.com/novels/class/4.htm", script: "gen.js" },
        { title: "游戏竞技 (Du Hí)", input: "https://www.69shuba.com/novels/class/5.htm", script: "gen.js" },
        { title: "科幻小说 (Khoa Huyễn)", input: "https://www.69shuba.com/novels/class/6.htm", script: "gen.js" },
        { title: "恐怖惊悚 (Khủng Bố)", input: "https://www.69shuba.com/novels/class/7.htm", script: "gen.js" },
        { title: "其他类型 (Khác)", input: "https://www.69shuba.com/novels/class/9.htm", script: "gen.js" },
        { title: "官场职场 (Quan Trường)", input: "https://www.69shuba.com/novels/class/10.htm", script: "gen.js" },
        { title: "青春校园 (Thanh Xuân)", input: "https://www.69shuba.com/novels/class/11.htm", script: "gen.js" }
    ]);
}
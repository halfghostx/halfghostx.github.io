var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
	("馄饨", "烩面", "热干面", "刀削面", "油泼面", "炸酱面","鸡蛋", "炒面", "重庆小面", "米线", "酸辣粉", "土豆粉", "螺狮粉", "凉皮儿", "麻辣烫", "肉夹馍", "羊肉泡馍", "炒饭", "盖浇饭", "烤肉饭", "黄焖鸡米饭", "麻辣香锅", "火锅", "酸菜鱼", "豆浆","烤串", "披萨", "烤鸭", "汉堡", "炸鸡", "寿司", "煎饼果子", "南瓜粥", "牛奶","小龙虾", "牛排", "砂锅", "大排档", "馒头", "西餐", "自助餐", "小笼包", "水果", "西北风", "烧烤", "泡面", "水饺", "日本料理", "涮羊肉", "兰州拉面", "肯德基", "面包", "臊子面", "小笼包", "包子","麦当劳", "沙县小吃", "烤鱼", "海鲜", "铁板烧","韩国料理", "甜点", "鸭血粉丝汤", "兰州牛肉面");
        /*("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");*/
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
			3000,
			function() {
			    $i.remove();
			});
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}

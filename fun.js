/***
ToDoList:
浏览器检测
日期格式化
组织冒泡
判断Class是否存在，增删class，getclass
事件绑定，移除
自定义鼠标右键菜单
拖拽


DoneList:
计算中文长度
字符串转日期
**/

/***
method：计算中文长度
time：2016/03/23
devBy：ZhangChan
desc:
**/
function calCn(str) {
	re = /[\u4E00-\u9FA5]/g;
	if (re.test(str)) {
		return str.match(re).length
	} else {
		return 0
	}
}

/***
method：字符串转日期
time：2016/03/23
devBy：ZhangChan
desc:
**/
function toDate(date) {
	return new Date(date);
}

/***
method：日期格式化
time：2016/03/23
devBy：ZhangChan
desc:
**/
function DateFormat(date, pattern ){

}

/**
method：浏览器检测
time：2016/03/23
devBy：ZhangChan
desc:
**/
(function(){
	window.sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;

	(s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] : 
	(s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
	(s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] : 0;
	
	// console.log(ua,(/chrome\/([\d.]+)/).test(ua),s,sys.chrome);
})();
alert(sys.firefox);
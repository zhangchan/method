/***
ToDoList:
浏览器检测
DateFormat
组织冒泡
判断Class是否存在，增删class，
事件移除 
自定义鼠标右键菜单
拖拽
 
 
DoneList:
calCn
toDate
getClass 
getCharCode
removeEvent
loadScript
arrSort
**/ 

/***
method：arrSort
time：2016/05/10
devBy：EastC
desc: ["1-2","1-1","2-1" ... "1-2-2",1,2,3] 排序
***/
var arrs = ["1-2","1-1","2-1","2-2","1-1-1","1-1-2","1-2-1","1-2-2",1,2,3];
// [1,2,3,"1-1","1-2","2-1","2-2","1-1-1","1-1-2","1-2-1","1-2-2"]
function arrSort(arrs){
    var subArr = [];
    var newArr = arrs; 
    var lastArr = [];
    for(var i = 0; i < newArr.length; i++){
        newArr[i] = newArr[i].toString().split("-");
        if(!subArr[newArr[i].length]){
            subArr[newArr[i].length] = [];
        }
        subArr[newArr[i].length].push(arrs[i]);
        subArr[newArr[i].length].sort();
    }
    for(var key in subArr){
        for(var i=0; i < subArr[key].length;i++){
            subArr[key][i] = subArr[key][i].join("-");
        }
        lastArr = lastArr.concat(subArr[key]);
    }
    return lastArr;
}

/***
method：loadScript
time：2016/05/10
devBy：EastC
desc: 动态载入js
***/
function loadScript(url){
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	document.body.appendChild(script);
}

/***
method：getCharCode
time：2016/04/11
devBy：EastC
desc:
**/
function getCharCode(evt){
	var e = evt || window.event;
	if(typeof e.charCode == "number"){
		return e.charCode;
	}else{
		return e.keyCode;
	}
}

/***
method：removeEvent
time：2016/04/11
devBy：EastC
desc: 事件移除
**/

function removeEvent(obj, type, fn){
	if(typeof obj.removeEventListener !="undefined"){
		obj.removeEventListener(type, fn, false);
	}else if(typeof obj.detachEvent !="undefined"){
		obj.detachEvent("on" + type,fn);
	}
}

/***
method：事件绑定
time：2016/04/01
devBy：EastC
desc:
**/

function addEvent(obj, type, fn){
	if(typeof obj.addEventListener !="undefined"){
		obj.addEventListener(type, fn, false);
	}else if(typeof obj.attachEvent !="undefined"){
		obj.attachEvent("on" + type,function(){
			fn.call(obj);
		})
	}
}

/***
method：getClass
time：2016/04/01
devBy：EastC
desc:
**/

var getClass = function (className){
	var all = document.getElementsByTagName("*");
	var ele= [];
	for(var i=0; i<all.length; i++){
		if(all[i].className == className){
			ele.push(all[i]);
		}
	}
	return ele;
}

/***
method：calCn
time：2016/03/23
devBy：EastC
desc: 计算中文长度
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
method：toDate
time：2016/03/23
devBy：EastC
desc: 字符串转日期
**/
function toDate(date) {
	return new Date(date);
}

/***
method：DateFormat
time：2016/03/23
devBy：EastC
desc: 日期格式化
**/
function DateFormat(date, pattern ){

}

/**
method：浏览器检测
time：2016/03/23
devBy：EastC
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
// alert(sys.firefox);
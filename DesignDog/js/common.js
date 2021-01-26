var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.href = '//at.alicdn.com/t/font_2264974_a1rxf550uu.css';
link.rel = 'stylesheet';
link.type = 'text/css';
head.appendChild(link);
var link1 = document.createElement('link');
link1.href = 'css/common.css';
link1.rel = 'stylesheet';
link1.type = 'text/css';
head.appendChild(link1);
 // ;
 //  (function(win) {
 //    var tid;

 //    function refreshRem() {
 //      let designSize = 1920; // 设计图尺寸
 //      let html = document.documentElement;
 //      let wW = html.clientWidth; // 窗口宽度
	//   if(wW < 1024){
	// 	  designSize = 750; // 设计图尺寸
	//   }
	  
 //      let rem = wW * 100 / designSize / 100;
	//   /**
	//    *  进行rem的换算，因为在实际展示中，在不同的尺寸的屏幕上design的宽度是变化的，
	//    * 所以rem是一个动态变化的值，比如当前ww是1536（14寸笔记本屏幕大小），所以此时1rem就是10px，
	//    * 而到宽度为1920的屏幕上，此时rem就是12.5px，就会实现宽高自适应。
	//    * **/
 //      document.documentElement.style.fontSize = rem + 'px';
 //    }

 //    win.addEventListener('resize', function() {
 //      clearTimeout(tid);
	//   window.location.reload()
 //      tid = setTimeout(refreshRem, 300);
 //    }, false);
 //    win.addEventListener('pageshow', function(e) {
 //      if (e.persisted) {
 //        clearTimeout(tid);
 //        tid = setTimeout(refreshRem, 300);
 //      }
 //    }, false);

 //    refreshRem();

 //  })(window);
  


  
// 加载动画
$('html').append(
	'<div class="loding flex-box align-center flex-center"><div id="preloader_1"><span></span><span></span><span></span><span></span><span></span></div></div><div class="toast"></div>'
)
// 提示语
function showToast(txt) {
	$('body').append('<div class="toast" style="display:block">'+txt+'</div>')
	setTimeout(function() {
		$('.toast').fadeOut()
	}, 1500)
}

var baseUrl = 'http://www.designdog.cn'
var imgUrl = 'http://www.designdog.cn/storage/' //
/**
 * 封装请求方法
 * @param {Object} url  接口请求地址
 * @param {Object} data 接口请求参数（无需请求方式参数，则此项可以为空，否则必须传）
 * @param {Object} params 请求方式参数（可以为空）
 */
function ajax(url, data, Type, resType) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: baseUrl + url,
			type: Type?Type:'get',
			dataType: 'JSON',
			data: data,
			success: function(res) {
				if (res.code == 200) {
					if(resType == 1){
						resolve(res)
					}else{
						resolve(res.data)
					}
				} else {
					showToast(res.msg)
				}
			},
			error: function(res) {
                if(res.status == 401){
                    // window.location.replace('login.html')
                }
			}
		});
	})
}

$(document).ready(function() {
	// document.oncontextmenu = function() {
	// 	return false;
	// }
	// document.onselectstart = function() {
	// 	return false;
	// }
	// document.oncopy = function() {
	// 	return false;
	// }
	// document.onkeydown = function(e) {
	// 	var currKey = 0,
	// 		evt = e || window.event;
	// 	currKey = evt.keyCode || evt.which || evt.charCode;
	// 	if (currKey == 123) {
	// 		window.event.cancelBubble = true;
	// 		window.event.returnValue = false;
	// 	}
	// }
	
	$('.fixed-header>div').append('<div class="nav-fixed-box">'+
		'<div class="flex-box flex-center align-center nav-fixed">'+
			'<span class="iconfont icon- icon-caidanshouqi_huaban1"></span>'+
			'<span class="iconfont icon-caidan_huaban1"></span>'+
				'<img src="img/menu-active-bg.png">'+
				'<div class="nav-position thmeBg">'+
				'<div class="nav-list2 flex-box my-contain-lg align-center">'+
					'<a href="index.html" class="nav-item2">首页</a>'+
					'<a href="newsList.html" class="nav-item2">新闻列表</a>'+
					'<a href="aboutUs.html" class="nav-item2">关于我们</a>'+
					'<a href="productList.html" class="nav-item2">作品展馆</a>'+
					'<a href="talks.html" class="nav-item2">老狗讲坛</a>'+
					'<a href="contactUs.html" class="nav-item2 contact_">联系我们'+'</a>'+
					'<a href="joinUs.html" class="nav-item3">加入我们</a>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>'+
	'<div class="backTop" onclick="window.scroll(0,0)"></div>'
	)
	
	// 移动端返回顶部
	$('.nav-item2').hover(function(){
		$('.nav-item3').removeClass('show')
	})
	
	$('.contact_').hover(function(){
		$('.nav-item3').addClass('show')
	})
	
	// 移动端header
	// $("header").append('<div class="isPhone">'+
	$("header").append('<div class="nav">'+
		'<div class="flex-box flex-between align-center">'+
			'<img src="img/logo-gold.png" class="LOGO">'+
			'<div class="icon-box flex-box flex-center align-center">'+
				'<span class="iconfont icon-daohangcaidan thmeColor"></span>'+
				'<div class="phoneNav text-bg">'+
					'<span class="iconfont icon-guanbi thmeColor"></span>'+
					'<div class="flex-box column">'+
						'<a class="item" href="index.html">'+
							'<div class="Higher flex-box flex-between">'+
								'<span class="name">首页</span>'+
							'</div>'+
						'</a>'+
						'<div class="item aboutus">'+
							'<div class="Higher flex-box flex-between">'+
								'<a href="aboutUs.html?type=1" class="name">关于我们</a>'+
								'<span class="click flex"></span>'+
								'<span class="iconfont icon-xiangxia click"></span>'+
							'</div>'+
							'<div class="lower">'+
								'<a href="aboutUs.html?type=1" class="flex-box align-center nav-active-1"><b></b> <span>公司简介</span></a>'+
								'<a href="aboutUs.html?type=4" class="flex-box align-center nav-active-2"><b></b> <span>领军人物</span></a>'+
								'<a href="aboutUs.html?type=2" class="flex-box align-center nav-active-3"><b></b> <span>服务内容</span></a>'+
								'<a href="aboutUs.html?type=3" class="flex-box align-center nav-active-4"><b></b> <span>设计狗方法论</span></a>'+
								'<a href="newsList.html" class="flex-box align-center nav-active-5"><b></b> <span>新闻专栏</span></a>'+
								'<a href="awards.html" class="flex-box align-center nav-active-6"><b></b> <span>获奖</span></a>'+
								'<a href="aboutUs.html?type=5" class="flex-box align-center nav-active-7"><b></b> <span>专家团队</span></a>'+
							'</div>'+
						'</div>'+
						'<div class="item article">'+
							'<div class="Higher flex-box flex-between">'+
								'<a href="point.html" class="name">我们的观点</a>'+
								'<span class="click flex"></span>'+
								'<span class="iconfont icon-xiangxia click"></span>'+
							'</div>'+
							'<div class="lower nav-point"></div>'+
						'</div>'+
						
						'<div class="item works">'+
							'<div class="Higher flex-box flex-between">'+
								'<a href="productList.html" class="name">作品展馆</a>'+
								'<span class="click flex"></span>'+
								'<span class="iconfont icon-xiangxia click"></span>'+
							'</div>'+
							'<div class="lower nav-pro"></div>'+
						'</div>'+
						
						'<a class="item" href="contactUs.html">'+
							'<div class="Higher flex-box flex-between">'+
								'<span class="name">联系我们</span>'+
							'</div>'+
						'</a>'+
						
						'<a class="item" href="joinUs.html">'+
							'<div class="Higher flex-box flex-between">'+
								'<span class="name">加入我们</span>'+
							'</div>'+
						'</a>'+
						
						'<div class="flex"></div>'+
						
						'<a class="contact-now"><span class="iconfont icon-lianxiwomen-dianhua_huaban1"></span>即刻联系我们</a>'+
						'<div class="copy">COPYRIGHT©2018<br>重庆博观达智品牌营销策划有限公司 <br>沪ICP备17057325号-3</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>')
	
	$('.click').on('click',function(){
		$(this).parents('.item').toggleClass('active').siblings().removeClass('active')
	})
	
	ajax('/api/banner/menu').then(res=>{
		if(res && res.length > 0){
			res.forEach(item=>{
				if(item.type == 'about_us' && item.list){
					$('.aboutus').show()
					if(item.list.introduce == 0){
						$('.nav-active-1').hide()
					}
					if(item.list.leader == 0){
						$('.nav-active-2').hide()
					}
					if(item.list.focus == 0){
						$('.nav-active-3').hide()
					}
					if(item.list.method == 0){
						$('.nav-active-4').hide()
					}
					if(item.list.news == 0){
						$('.nav-active-5').hide()
					}
					if(item.list.award == 0){
						$('.nav-active-6').hide()
					}
					if(item.list.group == 0){
						$('.nav-active-7').hide()
					}
				}
				if(item.type == 'article' && item.list && item.list.length > 0){
					$('.article').show();
					item.list.forEach((item,i)=>{
						$('.nav-point').append('<a href="point.html?id='+item.type_id+'&current='+i+
						'" class="flex-box align-center point-'+item.type_id+'"><b></b><span>'+ item.type_name +'</span></a>')
					})
				}
				if(item.type == 'work' && item.list && item.list.length > 0){
					$('.works').show();
					item.list.forEach((item,i)=>{
						$('.nav-pro').append('<a href="productList.html?id='+item.type_id+'&current='+i+
						'" class="flex-box align-center pro-'+item.type_id+'"><b></b> <span>'+ item.type_name +'</span></a>')
					})
				}
			})
		}
	})


	ajax('/api/config/contact').then(data=>{
		if(data){
			$('.contact-now').attr('href','tel:'+data.tel)
			
			$("body").append('<div class="isPhone"><div class="backTop-phone">'+
				'<a href="tel:'+data.tel+'" class="call-box flex-box flex-center align-center">'+
					'<span class="iconfont icon-dianhua"></span>'+
				'</a>'+
				'<div class="xiangshang-box flex-box flex-center align-center" onclick="window.scroll(0,0)">'+
					'<span class="iconfont icon-xiangshang"></span>'+
				'</div>'+
			'</div></div>')
			
			$("footer").append('<div class="footer text-bg">'+
				'<div class="title-news">'+
					'博观达智品牌营销策划有限公司'+
				'</div>'+
				'<div class="address">'+
					'<p class="flex-box">'+
						'<span>地址：</span>'+
						'<span class="flex">'+data.address+'</span>'+
					'</p>'+
					'<p class="flex-box">'+
						'<span>电话：</span>'+
						'<span class="flex">'+data.tel+'</span>'+
					'</p>'+
					'<p class="flex-box">'+
						'<span>邮箱：</span>'+
						'<span class="flex">'+data.email+'</span>'+
					'</p>'+
				'</div>'+
				'<div class="flex-box code-box">'+
					'<div>'+
						'<img src="'+imgUrl + data.image+'" class="code-img">'+
						'<p>博观达智</p>'+
					'</div>'+
				'</div>'+
				'<p class="copy border-top">重庆博观达智品牌营销策划有限公司  渝ICP备18000488号-1</p>'+
			'</div>')			
		}
	})
	// 移动端footer
	
	$('.icon-liebiao,.icon-daohangcaidan').on('click',function(){
		$('.phoneNav').fadeIn()
	})
	
	$('.icon-guanbi').on('click',function(){
		$('.phoneNav').fadeOut()
	})
	// $('header .icon-box').on('click',function(){
	// 	$(this).toggleClass('active')
	// })
	
	
	$('#modal-container').click(function(){
	  $(this).addClass('out');
	  $('body').removeClass('modal-active');
	})
	
	$(".LOGO").on("click",function(){
		window.location.href= "index.html"
	})
	
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if(scrollTop > 520){
			$(".backTop,.nav-fixed-box,.backTop-phone").fadeIn();
			$('header .nav-list,header .nav-list2_').fadeOut();
		}else{
			$(".backTop,.nav-fixed-box,.backTop-phone").fadeOut();
			$('header .nav-list,header .nav-list2_').fadeIn();
		}
	})
})

function showModel(){
	$('#modal-container').removeAttr('class').addClass("two");
	$('body').addClass('modal-active');
}

function noData(txt) {
	$('.noData-box').append('<div class="noData" style="display:block">'+
		'<img src="img/dog-lock.png" >'+
		'<div class="txt">'+txt+'</div>'+
	'</div>')
}


// 获取路由参数
function getUrlParam(name) {
	var url = window.location.search;
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var result = url.substr(1).match(reg);
	return result ? decodeURIComponent(result[2]) : null;
}



function upload(url, formData) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: baseUrl + url,
			type: 'POST',
			data: formData,
			processData: false,// ⑧告诉jQuery不要去处理发送的数据
			contentType: false, // ⑨告诉jQuery不要去设置Content-Type请求头
			beforeSend: function () {
			   //⑩发送之前的动作

			},
			success: function (res) {
				if (res.code == 200) {
					resolve(res.data)
				} else {
					showToast(res.msg)
				}
			}
		})
	})
}

function richTxt(html) {
	var capture = html;
	if (html) {
		html = capture.replace(/src=\s*['"]([^'"]+)[^>]*>/gi, function(match, capture) {
			if (capture.indexOf('http') > -1) {
				capture = ' src="' + capture +
					'" style="max-width: 100%; height: auto; margin: 0 auto; display: block;"/>';
				return capture
			} else {
				capture = ' src="' + config.imgUrl + capture +
					'" style="max-width: 100%; height: auto; margin: 0 auto; display: block;"/>';
				return capture
			}
		})
		.replace(/<section/g, '<div').replace(/\/section>/g, '/div>')
		.replace(/<o:p>/g, '').replace(/<\/o:p>/g, '')
		.replace(/<font/g, '<span').replace(/\/font>/g, '/span>')
	}
	return html;
}
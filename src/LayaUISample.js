var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var WebGL = laya.webgl.WebGL;
var Tween = Laya.Tween;
var Ease = Laya.Ease;

document.addEventListener("WeixinJSBridgeReady", function () {
	WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
		document.getElementById('audio').play();
		// document.getElementById('audio').pause();
	});
}, false);
var audio=document.getElementById("audio");
audio.addEventListener('ended', function () {
	audio.play()
	setTimeout(function () {audio.play(); }, 10);
}, false);

document.addEventListener('click', audioPlay)

function audioPlay(){
	document.removeEventListener('click', audioPlay)
	audio.play()
}

var u = navigator.userAgent, app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

document.body.addEventListener('focusout', function () {
	if (isAndroid) return
	var currentPosition,timer;
	var speed=1;//页面滚动距离
	timer=setInterval(function(){
		currentPosition=document.documentElement.scrollTop || document.body.scrollTop;
		currentPosition-=speed;
		window.scrollTo(0,currentPosition);//页面向上滚动
		currentPosition+=speed; //speed变量
		window.scrollTo(0,currentPosition);//页面向下滚动
		clearInterval(timer);
	},1);
})

document.body.addEventListener('touchmove', function (e) {
	e.preventDefault(); 
}, {passive: false}); 

window.alert = function(name){
  var iframe = document.createElement("IFRAME");
  iframe.style.display="none";
  iframe.setAttribute("src", 'data:text/plain,');
  document.documentElement.appendChild(iframe);
  window.frames[0].window.alert(name);
  iframe.parentNode.removeChild(iframe);
};

function getRequestParams(strname) {
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		var strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
		}
	}
	return theRequest[strname];
}

function aniUrls(aniName,length){
	var urls = [];
	for(var i = 1;i<length;i++){
		//动画资源路径要和动画图集打包前的资源命名对应起来
		urls.push("loop/"+aniName+i+".jpg");
	}
	return urls;
}

function fly(type,obj,num,time) {
    var json = {};
    if(type==1){
        type = 0;
        json.scaleX =num;
        // json.scaleY =num;
    }else{
        type = 1;
        json.scaleX =1;
        json.scaleY =1;
    }
    Tween.to(obj,json,time,Ease.linearIn, Handler.create(self, function(){fly(type,obj,num,time);}));
}

function sf(type,obj,num,time) {
    var json = {};
    if(type==1){
        type = 0;
        json.scaleX =num;
        json.scaleY =num;
    }else{
        type = 1;
        json.scaleX =1;
        json.scaleY =1;
    }
    Tween.to(obj,json,time,Ease.linearIn, Handler.create(self, function(){sf(type,obj,num,time);}));
}

function alpha(type,obj,num,time) {
    var json = {};
    if(type==1){
        type = 0;
        json.alpha =num;
        json.alpha =num;
    }else{
        type = 1;
        json.alpha =1;
        json.alpha =1;
    }
    Tween.to(obj,json,time,Ease.linearIn, Handler.create(self, function(){
        alpha(type,obj,num,time);           
    }));
}

function rotation(obj,time,rotate){
	Tween.to(obj,{rotation:rotate},time,Ease.linearIn, Handler.create(self, function(){
		Tween.to(obj,{rotation:-rotate},time*2,Ease.linearIn, Handler.create(self, function(){
			Tween.to(obj,{rotation:0},time,Ease.linearIn, Handler.create(self, function(){
				rotation(obj,time,rotate);  
			}));
		}));
	}));
}

//x缩放比例=舞台宽度/设计宽度
var scaleRateW
//y缩放比例=舞台高度/设计高度
var scaleRateH
//token
var token = getRequestParams('token')||''
// 当前层级
var zindex = 0
// 试用已结束
var isOver = true
// 第几名试用者
var num = Math.floor(Math.random()*100)+1

var isWeibo = false

var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
if (ua.match(/MicroMessenger/i) == "micromessenger") {
	//在微信中打开
}
if (ua.match(/WeiBo/i) == "weibo") {
	//在新浪微博客户端打开
	isWeibo=true
}

function p1() {
	p1UI.super(this);
	var self = this;
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth);//x缩放比例=舞台宽度/设计宽度
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight);//y缩放比例=舞台高度/设计高度
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2
	self.p1_rule.y=-self.y+60

	self.p1_t4.y=158;
	self.p1_t4.alpha=0;
	Tween.to(self.p1_t4,{alpha:1},400, Ease.linearIn,null,600);
	Tween.to(self.p1_t4,{y:258},600, Ease.quartOut,null,600);

	self.p1_t5.y=318;
	self.p1_t5.alpha=0;
	Tween.to(self.p1_t5,{alpha:1},400, Ease.linearIn,null,600);
	Tween.to(self.p1_t5,{y:258},600, Ease.quartOut,null,600);

	self.p1_t2.scale(0,0);
	self.p1_t2.alpha=0;
	Tween.to(self.p1_t2,{alpha:1,scaleX:1,scaleY:1,rotation:360}, 800, Ease.backOut,null,1200);

	rotation(self.hand,300,5)
    
    // jump(self.p1_t3);
	
	self.p1_water.once(Event.CLICK,this,function () {
		console.log('water!!!')
		self.p1_water.skin='p1/p1_water2.png'
		setTimeout(function() {
			Laya.stage.removeChild(self);
			Laya.stage.addChildAt(new p2(),zindex);
		}, 500);
	})

	self.rule.visible=false
	self.p1_rule.on(Event.CLICK,this,function () {
		self.rule.visible=true
	})

	self.rule_x.on(Event.CLICK,this,function () {
		self.rule.visible=false
	})

	$.ajax({
		type : 'post',
		async : true,
		url :  '//api.slb.moneplus.cn/api/web/itr/status',
		dataType: 'json',
		data:{
			token:token
		},
		success : function(res) {
			if(res.code==0){
				res.data===1?isOver=true:isOver=false
			}else{
				alert(res.msg);
			}
		},
		error : function(msg) {
			console.log(msg);
		}
	});
}

function jump(obj){
	var getY = obj.y;
	Tween.to(obj,{y:getY-30}, 400, Ease.linearIn, Handler.create(self, function(){
		Tween.to(obj,{y:getY}, 800, Ease.bounceOut, Handler.create(self, function(){
			jump(obj);
		}), 60);
	}), 200);
}
function p2() {
	p2UI.super(this);
	var self = this;
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth)
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight)
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2
	self.back.y=-self.y+55

	console.log(self.y,'yyy')

	self.next.visible=false
	rotation(self.p2_arrow,200,-10);

    function rotation(obj,time,rotate){
        Tween.to(obj,{rotation:rotate},time,Ease.linearIn, Handler.create(self, function(){
            Tween.to(obj,{rotation:-rotate},time*2,Ease.linearIn, Handler.create(self, function(){
                Tween.to(obj,{rotation:0},time,Ease.linearIn, Handler.create(self, function(){
                    rotation(obj,time,rotate);  
                }));
            }));
        }));
    }

	sf(1,self.p2_next,1.06,450);
	tips(self.p2_tips,600);

	self.back.on(Event.CLICK,this,function () {
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p1(),zindex);
	})

	// var curResourceManager = Laya.ResourceManager.currentResourceManager;
		// curResourceManager.autoRelease = true;
		// curResourceManager.autoReleaseMaxSize = 1024 * 100

	var roleAni = new Laya.Animation()
	// 创建动画模板loop1
    Laya.Animation.createFrames(aniUrls("scene1_",35),"loop1")
	roleAni.interval=50
	self.bg.addChildAt(roleAni,0)

	self.p2_btn.on(Event.CLICK,this,function () {
		self.p2_tips.visible=false
		self.p2_arrow.visible=false
		self.p2_btn.visible=false
		roleAni.play(0,false,"loop1")
	})

	roleAni.on("complete", this,function(){
		console.log('complete')
		self.next.visible=true
		self.next.alpha=0
		self.p2_t1.scale(0,0)
		self.p2_t2.scale(0,0)
		self.p2_t3.scale(0,0)
		self.p2_next.visible=false
		Tween.to(self.next,{alpha:1}, 500, Ease.linearIn, Handler.create(self, function(){
			roleAni.clear()
			pop1Ani()
			self.p2_tips.visible=true
			self.p2_arrow.visible=true
			self.p2_btn.visible=true
		}), 200);
	})

	function pop1Ani(){
		Tween.to(self.p2_t1,{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300);
		Tween.to(self.p2_t2,{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 600);
		Tween.to(self.p2_t3,{scaleX:1,scaleY:1}, 700, Ease.backOut, Handler.create(self, function(){
			self.p2_next.visible=true
		}), 900);
	}

	self.p2_x.on(Event.CLICK,this,function () {
		self.next.visible=false
	})

	self.p2_next.on(Event.CLICK,this,function () {
		roleAni.destroy(true)
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p3(),zindex);
	})

}


function tips(obj,time){
	var _x=obj.x
	obj.x=750
	Tween.to(obj,{x:_x},time,Ease.backOut, Handler.create(self, function(){}));
}

function p3() {
	p3UI.super(this);
	var self = this;
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth)
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight)
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2
	self.back.y=-self.y+55

	self.next.visible=false

	tips(self.p3_tips,600);

	self.back.on(Event.CLICK,this,function () {
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p2(),zindex);
	})

	arrow(self.p3_arrow,900,-10);

    function arrow(obj,time,rotate){
		obj.x=289
		obj.y=885
		obj.alpha=0
		obj.rotation=0
        Tween.to(obj,{x:196,y:846,alpha:1,rotation:-5},time,Ease.linearIn, Handler.create(self, function(){
            arrow(obj,time,rotate)
        }));
    }

	var down = 0
	var ls_anim = true
	self.on(Event.MOUSE_DOWN, this, function (e) {
		down = e.currentTarget.mouseY;
		down1 = e.currentTarget.mouseX;
	});
	self.on(Event.MOUSE_UP, this, function (e) {
		var up = e.currentTarget.mouseY;
		var left = e.currentTarget.mouseX;
		if( (up+20)<down&& ls_anim){
			ls_anim=false
			console.log('播放轮播图')
			loop2Ani.play(0,false,"loop2")
			self.p3_tips.visible=false
			self.p3_arrow.visible=false
		}
	});

	var loop2Ani = new Laya.Animation()
	// 创建动画模板loop2
    Laya.Animation.createFrames(aniUrls("scene2_",62),"loop2")
	loop2Ani.interval=60
	self.bg.addChildAt(loop2Ani,0)

	// loop2Ani.play(0,false,"loop2")

	loop2Ani.on("complete", this,function(){
		self.next.visible=true
		self.next.alpha=0
		self.p3_t1.scale(0,0)
		self.p3_t2.scale(0,0)
		self.p3_next.visible=false
		Tween.to(self.next,{alpha:1}, 500, Ease.linearIn, Handler.create(self, function(){
			pop2Ani()
			self.p3_tips.visible=true
			self.p3_arrow.visible=true
			loop2Ani.clear()
		}), 200);
	})

	function pop2Ani(){
		// Tween.to(self.p3_t1,{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 200);
		Tween.to(self.p3_t2,{scaleX:1,scaleY:1}, 700, Ease.backOut, Handler.create(self, function(){
			self.p3_next.visible=true
		}), 500);
	}

	self.p2_x.on(Event.CLICK,this,function () {
		ls_anim=true
		self.next.visible=false
	})

	sf(1,self.p3_next,1.1,450);
	self.p3_next.on(Event.CLICK,this,function () {
		loop2Ani.destroy()
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p4(),zindex);
	})
}

function p4() {
	p4UI.super(this);
	var self = this;
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth)
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight)
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2
	self.back.y=-self.y+55

	self.next.visible=false

	tips(self.p4_tips,600);
	alpha(0,self.p4_light,0.3,400)

	self.back.on(Event.CLICK,this,function () {
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p3(),zindex);
	})

	var loop3Ani = new Laya.Animation()
	// 创建动画模板loop3
    Laya.Animation.createFrames(aniUrls("scene3_",38),"loop3")
	loop3Ani.interval=50
	self.bg.addChildAt(loop3Ani,0)

	loop3Ani.on("complete", this,function(){
		self.next.visible=true
		self.next.alpha=0
		self.p4_t1.scale(0,0)
		self.p4_t2.scale(0,0)
		self.p4_t3.scale(0,0)
		self.p4_t4.scale(0,0)
		self.p4_next.visible=false
		Tween.to(self.next,{alpha:1}, 500, Ease.linearIn, Handler.create(self, function(){
			pop3Ani()
			self.p4_light.visible=true
			self.p4_tips.visible=true
			loop3Ani.clear()
		}), 200);
	})

	function pop3Ani(){
		Tween.to(self.p4_t1,{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 200);
		Tween.to(self.p4_t2,{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 500);
		Tween.to(self.p4_t3,{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 800);
		Tween.to(self.p4_t4,{scaleX:1,scaleY:1}, 700, Ease.backOut, Handler.create(self, function(){
			self.p4_next.visible=true
		}), 1100);
	}

	self.p4_light.on(Event.CLICK,this,function () {
		self.p4_light.visible=false
		self.p4_tips.visible=false
		loop3Ani.play(0,false,"loop3")
	})

	self.p2_x.on(Event.CLICK,this,function () {
		self.next.visible=false
	})

	sf(1,self.p4_next,1.05,450);
	self.p4_next.on(Event.CLICK,this,function () {
		loop3Ani.destroy()
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p5(),zindex);
	})
}

function p5() {
	p5UI.super(this);
	var self = this;
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth)
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight)
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2

	// 清除缓存
	for(var k=0;k<loopA.length;k++){
		Laya.Loader.clearTextureRes(loopA[k].url)
	}

	var telPattern = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;

	self.over.visible=false
	if(isOver){
		self.over.visible=true
		var t1=2
		var overTime=setInterval(function(){
			t1--
			console.log(t1)
			if(t1<0){
				clearInterval(overTime)
				if(isWeibo){
					window.location.replace('https://api.weibo.com/oauth2/authorize?client_id=3144981223&redirect_uri=http%3A%2F%2F6yn2xj.cn&scope=snsapi_base&state=1KjdrgZ')
				}else{
					Laya.stage.addChildAt(new p7(),zindex+1);
				}
				return
			}
			self.over_time.skin='p5/over_time'+t1+'.png'
		},1000)
	}
	self.err.visible=false

	var maBool=true
	self.getCode.on(Event.CLICK,this,function () {
        if(!maBool)return
		if(self.tel.text ==''){
			alert('请输入手机号！')
			return;
		}else if(!telPattern.test(self.tel.text)){
			alert('手机号码格式不正确！');
			return false;
		}else{
			var params = getNVCVal()
			$.ajax({
				type : 'post',
				async : true,
				url :  '//api.slb.moneplus.cn/api/web/itr/msg',
				dataType: 'json',
				data:{
					tel:self.tel.text,
					afs:params
				},
				success : function(res) {
					console.log('seedMsg',res)
					if(res.code==0){
						seedSuccess()
					}else{
						maBool=true
						alert(res.msg)
					}
				},
				error : function(msg) {
					maBool=true
					console.log(msg)
				}
			});
			
		}
	})

	function seedSuccess(){
		var s=60
		self.getCode.text=s
		var tm= setInterval(myInterval,1000);//1000为1秒钟
		maBool=false;
		function myInterval(){
			if(s<=0){
				maBool=true;
				self.getCode.text='重新发送';
				clearInterval(tm);
			}else{
				s--
				self.getCode.text=s
			}
		}
	}

	sf(1,self.p5_btn,1.05,450);
	var isAdd=true
	self.p5_btn.on(Event.CLICK,this,function () {
		if(!isAdd)return
		if(self.tel.text ==''){
			alert('请输入手机号码！')
			return;
		}else if(!telPattern.test(self.tel.text)){
			alert('手机号码格式不正确！');
			return false;
		}else if(self.code.text ==''){
			alert('请验证码！')
			return;
		}
		isAdd=false
		$.ajax({
			type : 'post',
			async : true,
			url :  '//api.slb.moneplus.cn/api/web/itr/add',
			dataType: 'json',
			data:{
				token:token,
				tel:self.tel.text,
				code:self.code.text
			},
			success : function(res) {
				if(res.code==0){
					isAdd=true
					num=res.data.id
					Laya.stage.removeChild(self);
					Laya.stage.addChildAt(new p6(),zindex);
				}else{
					isAdd=true
					alert(res.msg)
				}
			},
			error : function(msg) {
				isAdd=true
				console.log(msg)
			}
		});

		console.log('验证通过')
		
	})
}

var clipboard=new ClipboardJS('.btn');
function p6() {
	p6UI.super(this);
	var self = this;
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth)
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight)
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2

	self.rank.text='恭喜成为第'+num+'名申领者'

	var t2=5
	var p2Time=setInterval(function(){
		t2--
		console.log('t2',t2)
		if(t2<0){
			clearInterval(p2Time)
			if(isWeibo){
				// window.location.replace('https://detail.m.tmall.hk/item.htm?spm=a212k0.12153887.0.0.4e60687dAU40Vd&id=626354588997')
				window.location.replace('https://api.weibo.com/oauth2/authorize?client_id=3144981223&redirect_uri=http%3A%2F%2F6yn2xj.cn&scope=snsapi_base&state=1Kjd33k')
				// window.location.href='https://api.weibo.com/oauth2/authorize?client_id=3144981223&redirect_uri=http%3A%2F%2F6yn2xj.cn&scope=snsapi_base&state=1Kjd33k'
			}else{
				Laya.stage.addChildAt(new p7(),zindex+1);
			}
			return
		}
		self.p6_time.skin='p5/p6_time'+t2+'.png'
	},1000)

}

function p7() {
	p7UI.super(this);
	var self = this;
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth)
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight)
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2

	$('.btn').css('left',100 * (self.pos.x) / Laya.stage.width+ '%')
	$('.btn').css('top',100 * (self.pos.y+self.y) / Laya.stage.height + '%')
	$('.btn').css('width',100 * self.pos.width / Laya.stage.width + '%')
	$('.btn').css('height',100 * self.pos.height / Laya.stage.height + '%')
	$('.btn').css('display','block')

	
	$('.btn').on('click', function(){
		clipboard.destroy();
		clipboard =new ClipboardJS('.btn', {
			text: function(trigger) {
				return '￥O765cfZGxhr￥';
			}
		});
		
		clipboard.on('success', function(e) {
			// $('.btn').css('display','none')
			alert('复制成功')
		});

		clipboard.on('error', function(e) {
			console.log(e);
		});
     });

	 self.p2_x.on(Event.CLICK,this,function () {
		$('.btn').css('display','none')
		Laya.stage.removeChild(self)
	})

}

var loadView = null;
function load() {
	var self = this;
	loadUI.super(this);
	loadView = this;
	
	scaleRateW = (Laya.stage.width / Laya.stage.designWidth)
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight)
	// if(Laya.stage.height<1289)self.y=-211
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2

	console.log('load：'+Laya.stage.width+','+Laya.stage.height,scaleRateW,scaleRateH)
}

var musicView = null;
function music() {
	var self = this;
	musicUI.super(this);
	musicView = this;
	
	scaleRateW = (Laya.stage.width / Laya.stage.designWidth)
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight)
	// if(Laya.stage.height<1289)self.y=50
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2
	self.audioBtn.y=-self.y+self.audioBtn.height

	var Event = laya.events.Event;
	var audioBool = true;
	audio.play();

	self.audioBtn.on(Event.CLICK, this, function () {
		if(audioBool){
			audioBool = false;
			self.audioBtn.skin='load/music_off.png';
			audio.pause();
		}else{
			audioBool = true;
			self.audioBtn.skin='load/music.png';
			audio.play();	
		}
	});

	Laya.timer.frameLoop(1, this, function(){
		if(audioBool)	self.audioBtn.rotation += 2;
	});

}

Laya.class(load, "load", loadUI);
Laya.class(p1, "p1", p1UI);
Laya.class(p2, "p2", p2UI);
Laya.class(p3, "p3", p3UI);
Laya.class(p4, "p4", p4UI);
Laya.class(p5, "p5", p5UI);
Laya.class(p6, "p6", p6UI);
Laya.class(p7, "p7", p7UI);
Laya.class(music, "music", musicUI);


var s = document.body.clientWidth / 750
//   var stageW = document.body.clientWidth / s
var stageH = document.body.clientHeight / s

//程序入口
stageH<1289?Laya.init(750, 1500):Laya.init(750, 1500,Laya.WebGL)
//缩放模式
// full,,pc=showall
var os  = function(){
	var u = navigator.userAgent;
	var u2 = navigator.userAgent.toLowerCase();
	return { //移动终端版本信息
		mobile: !!u.match(/(iPhone|iPod|Android|ios|Mobile)/i), //是否为移动终端
		pc: !u.match(/(iPhone|iPod|Android|ios|Mobile)/i), //是否为pc终端
		ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //是否为ios终端
		android: u.indexOf('Android') > -1, //是否为android终端
		weixin: u2.match(/MicroMessenger/i) == "micromessenger", //是否为微信客户端
		newsapp: u.indexOf('NewsApp') > -1,//是否为网易新闻客户端
		yixin: u.indexOf('YiXin') > -1,//易信客户端
		weibo: u.indexOf('weibo') > -1,//微博客户端
		yunyuedu:u.indexOf('PRIS') > -1 //云阅读客户端
	};
};
os().pc?Laya.stage.scaleMode='showall':Laya.stage.scaleMode='fixedwidth'
//自动竖屏
// Laya.stage.screenMode = "vertical";
//对齐方式
Laya.stage.alignH='center';
Laya.stage.alignV='top';
// 显示fps
// Laya.Stat.show(0,0);
// 背景颜色
Laya.stage.bgColor='#fff';
//背景透明
// Laya.Render.isWebGL ? Laya.stage.bgColor = "none" : Laya.stage.bgColor = null;

var assets = [
	{url:'img/p1_bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p2_bgs.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p3_bgs.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p4_bgs.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p5_bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p6_bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/copy.jpg',type:Laya.Loader.IMAGE},
	{url:'img/over.jpg',type:Laya.Loader.IMAGE},
	{url:'img/rule_bg.jpg',type:Laya.Loader.IMAGE},
	
	{url:'res/atlas/p1.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p2.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p3.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p4.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p5.atlas',type:Laya.Loader.ATLAS},
	// {url:'res/atlas/loop.atlas',type:Laya.Loader.ATLAS},
];

var loopA=[
	{url:'loop/scene1_1.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_2.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_3.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_4.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_5.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_6.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_7.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_8.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_9.jpg',type:Laya.Loader.IMAGE},
	{url:'loop/scene1_10.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_11.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_12.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_13.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_14.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_15.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_16.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_17.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_18.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_19.jpg',type:Laya.Loader.IMAGE},
	{url:'loop/scene1_20.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_21.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_22.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_23.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_24.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_25.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_26.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_27.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_28.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_29.jpg',type:Laya.Loader.IMAGE},
	{url:'loop/scene1_30.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_31.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_32.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_33.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_34.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene1_35.jpg',type:Laya.Loader.IMAGE},
	{url:'loop/scene2_1.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_2.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_3.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_4.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_5.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_6.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_7.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_8.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_9.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_10.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_11.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_12.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_13.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_14.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_15.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_16.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_17.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_18.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_19.jpg',type:Laya.Loader.IMAGE},
	{url:'loop/scene2_20.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_21.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_22.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_23.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_24.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_25.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_26.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_27.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_28.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_29.jpg',type:Laya.Loader.IMAGE},
	{url:'loop/scene2_30.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_31.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_32.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_33.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_34.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_35.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_36.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_37.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_38.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_39.jpg',type:Laya.Loader.IMAGE},
	{url:'loop/scene2_40.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_41.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_42.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_43.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_44.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_45.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_46.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_47.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_48.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_49.jpg',type:Laya.Loader.IMAGE},
	{url:'loop/scene2_50.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_51.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_52.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_53.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_54.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_55.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_56.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_57.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_58.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_59.jpg',type:Laya.Loader.IMAGE},
	{url:'loop/scene2_60.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_61.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene2_62.jpg',type:Laya.Loader.IMAGE},
	{url:'loop/scene3_1.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_2.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_3.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_4.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_5.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_6.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_7.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_8.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_9.jpg',type:Laya.Loader.IMAGE},
	{url:'loop/scene3_10.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_11.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_12.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_13.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_14.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_15.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_16.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_17.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_18.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_19.jpg',type:Laya.Loader.IMAGE},
	{url:'loop/scene3_20.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_21.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_22.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_23.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_24.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_25.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_26.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_27.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_28.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_29.jpg',type:Laya.Loader.IMAGE},
	{url:'loop/scene3_30.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_31.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_32.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_33.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_34.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_35.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_36.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_37.jpg',type:Laya.Loader.IMAGE},
    {url:'loop/scene3_38.jpg',type:Laya.Loader.IMAGE},
]

assets.push.apply(assets,loopA)

Laya.stage.on(Laya.Event.RESIZE, this, stageResize);
function stageResize(event){
	Laya.stage.off(Laya.Event.RESIZE, this, stageResize);
	trace('RESIZE:'+Laya.stage.width,Laya.stage.height,'Browser:'+Laya.Browser.clientWidth,Laya.Browser.clientHeight,'isWebGL:'+Laya.Render.isWebGL)
	Laya.loader.load(['res/atlas/load.atlas'], Handler.create(this, loading), null, Laya.Loader.ATLAS);
}

function loading() {
	Laya.stage.addChildAt(new load(),zindex);
	Laya.stage.addChildAt(new music(),zindex+1);
	Laya.loader.load(assets, Handler.create(this, onAssetLoaded), Handler.create(this, onLoading, null, false));
}

// 加载结束侦听器
function onAssetLoaded(texture) {
	console.log("加载结束",texture);
	setTimeout(function() {
		Laya.stage.removeChild(loadView);
		Laya.stage.addChildAt(new p1(),zindex);
	}, 500);
}

// 加载进度侦听器
function onLoading(progress) {
	// 26=-120,56=-40
	// console.log("加载进度: " + parseInt(progress*100),-400+parseInt(progress*100)*4);
	loadView.progress.x=-400+parseInt(progress*100)*4
	loadView.percent.text= '分手教程下载'+parseInt(progress*100)+"%";//文字百分比
}

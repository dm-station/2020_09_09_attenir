var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var loadUI=(function(_super){
		function loadUI(){
			
		    this.percent=null;
		    this.progress=null;

			loadUI.__super.call(this);
		}

		CLASS$(loadUI,'ui.test.loadUI',_super);
		var __proto__=loadUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loadUI.uiView);

		}

		loadUI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"load/load_bg.png"}},{"type":"Image","props":{"y":852,"x":126,"skin":"load/load_por.png"}},{"type":"Label","props":{"y":915,"x":0,"width":750,"var":"percent","text":"分手教程下载0% ","styleSkin":"load/label.png","height":59,"fontSize":38,"color":"#424242","align":"center"}},{"type":"Panel","props":{"y":867,"x":132,"width":486,"height":31},"child":[{"type":"Image","props":{"x":-400,"var":"progress","skin":"load/load_por4.png"}}]}]};
		return loadUI;
	})(View);
var musicUI=(function(_super){
		function musicUI(){
			
		    this.audioBtn=null;

			musicUI.__super.call(this);
		}

		CLASS$(musicUI,'ui.test.musicUI',_super);
		var __proto__=musicUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(musicUI.uiView);

		}

		musicUI.uiView={"type":"View","props":{"width":750,"mouseThrough":true,"mouseEnabled":true,"height":1500},"child":[{"type":"Image","props":{"y":219,"x":662,"var":"audioBtn","skin":"load/music.png","pivotY":50,"pivotX":50}}]};
		return musicUI;
	})(View);
var p1UI=(function(_super){
		function p1UI(){
			
		    this.p1_t4=null;
		    this.p1_t5=null;
		    this.p1_t2=null;
		    this.p1_water=null;
		    this.p1_rule=null;
		    this.hand=null;
		    this.p1_t3=null;
		    this.p1_hand=null;
		    this.rule=null;
		    this.rule_x=null;

			p1UI.__super.call(this);
		}

		CLASS$(p1UI,'ui.test.p1UI',_super);
		var __proto__=p1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p1UI.uiView);

		}

		p1UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p1_bg.jpg"}},{"type":"Image","props":{"y":251,"x":169,"skin":"p1/p1_t1.png"}},{"type":"Image","props":{"y":251,"x":169,"var":"p1_t4","skin":"p1/p1_t4.png"}},{"type":"Image","props":{"y":251,"x":169,"var":"p1_t5","skin":"p1/p1_t5.png"}},{"type":"Image","props":{"y":677,"x":193,"width":298,"var":"p1_t2","skin":"p1/p1_t2.png","pivotY":190,"pivotX":157,"height":297}},{"type":"Image","props":{"y":968,"x":34,"var":"p1_water","skin":"p1/p1_water.png"}},{"type":"Image","props":{"y":171,"x":31,"var":"p1_rule","skin":"p1/p1_rule.png"}},{"type":"Box","props":{"y":1058,"x":357,"width":482,"var":"hand","pivotY":62,"pivotX":117,"height":159},"child":[{"type":"Image","props":{"y":59,"x":18,"var":"p1_t3","skin":"p1/p1_t3.png"}},{"type":"Image","props":{"y":59,"x":113,"width":116,"var":"p1_hand","skin":"p1/p1_hand.png","pivotY":59,"pivotX":113,"height":61}}]},{"type":"Box","props":{"y":0,"x":0,"var":"rule"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/rule_bg.jpg"}},{"type":"Image","props":{"y":306,"x":568,"width":100,"var":"rule_x","height":100}}]}]};
		return p1UI;
	})(View);
var p2UI=(function(_super){
		function p2UI(){
			
		    this.bg=null;
		    this.back=null;
		    this.p2_tips=null;
		    this.p2_arrow=null;
		    this.p2_btn=null;
		    this.next=null;
		    this.p2_t1=null;
		    this.p2_t2=null;
		    this.p2_t3=null;
		    this.p2_x=null;
		    this.p2_next=null;

			p2UI.__super.call(this);
		}

		CLASS$(p2UI,'ui.test.p2UI',_super);
		var __proto__=p2UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p2UI.uiView);

		}

		p2UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"loop/scene1_1.jpg"}},{"type":"Image","props":{"y":0,"x":0,"skin":"p2/p2_mask.png"}},{"type":"Image","props":{"y":179,"x":35,"var":"back","skin":"p2/p2_back.png"}},{"type":"Image","props":{"y":979,"x":313,"width":621,"var":"p2_tips","skin":"p2/p2_tips.png","pivotY":99,"pivotX":284,"height":194}},{"type":"Image","props":{"y":707,"x":466,"width":146,"var":"p2_arrow","skin":"p2/p2_arrow.png","pivotY":73,"pivotX":73,"height":146}},{"type":"Image","props":{"y":519,"x":270,"width":386,"var":"p2_btn","height":348}},{"type":"Box","props":{"y":0,"x":0,"var":"next"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p2_bgs.jpg"}},{"type":"Image","props":{"y":397,"x":0,"skin":"p2/p2_pop.png"}},{"type":"Image","props":{"y":737,"x":465,"width":299,"var":"p2_t1","skin":"p2/p2_t1.png","pivotY":99,"pivotX":215,"height":188}},{"type":"Image","props":{"y":736,"x":465,"width":299,"var":"p2_t2","skin":"p2/p2_t2.png","pivotY":98,"pivotX":215,"height":188}},{"type":"Image","props":{"y":732,"x":465,"width":299,"var":"p2_t3","skin":"p2/p2_t3.png","pivotY":94,"pivotX":215,"height":188}},{"type":"Image","props":{"y":430,"x":510,"var":"p2_x","skin":"p2/p2_x.png"}},{"type":"Image","props":{"y":938,"x":375,"width":269,"var":"p2_next","skin":"p2/p2_next.png","pivotY":54,"pivotX":141,"height":132}}]}]};
		return p2UI;
	})(View);
var p3UI=(function(_super){
		function p3UI(){
			
		    this.bg=null;
		    this.back=null;
		    this.p3_arrow=null;
		    this.p3_tips=null;
		    this.next=null;
		    this.p3_t1=null;
		    this.p3_t2=null;
		    this.p3_next=null;
		    this.p2_x=null;

			p3UI.__super.call(this);
		}

		CLASS$(p3UI,'ui.test.p3UI',_super);
		var __proto__=p3UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p3UI.uiView);

		}

		p3UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"loop/scene2_1.jpg"}},{"type":"Image","props":{"y":180,"x":35,"var":"back","skin":"p2/p2_back.png"}},{"type":"Image","props":{"y":885,"x":289,"var":"p3_arrow","skin":"p3/p3_arrow.png"}},{"type":"Image","props":{"y":1132,"x":28,"var":"p3_tips","skin":"p3/p3_tips.png"}},{"type":"Box","props":{"y":0,"x":0,"var":"next"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p3_bgs.jpg"}},{"type":"Image","props":{"y":395,"x":0,"skin":"p3/p3_pop.png"}},{"type":"Image","props":{"y":732,"x":428,"width":188,"var":"p3_t1","skin":"p3/p3_t1.png","pivotY":54,"pivotX":123,"height":112}},{"type":"Image","props":{"y":731,"x":433,"width":188,"var":"p3_t2","skin":"p3/p3_t2.png","pivotY":53,"pivotX":128,"height":112}},{"type":"Image","props":{"y":936,"x":375,"width":269,"var":"p3_next","skin":"p3/p3_next.png","pivotY":54,"pivotX":141,"height":132}},{"type":"Image","props":{"y":428,"x":510,"var":"p2_x","skin":"p2/p2_x.png"}}]}]};
		return p3UI;
	})(View);
var p4UI=(function(_super){
		function p4UI(){
			
		    this.bg=null;
		    this.back=null;
		    this.p4_tips=null;
		    this.p4_light=null;
		    this.p4_arrow=null;
		    this.next=null;
		    this.p4_t1=null;
		    this.p4_t2=null;
		    this.p4_t3=null;
		    this.p4_t4=null;
		    this.p4_next=null;
		    this.p2_x=null;

			p4UI.__super.call(this);
		}

		CLASS$(p4UI,'ui.test.p4UI',_super);
		var __proto__=p4UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p4UI.uiView);

		}

		p4UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"loop/scene3_1.jpg"}},{"type":"Image","props":{"y":182,"x":35,"var":"back","skin":"p2/p2_back.png"}},{"type":"Image","props":{"y":977,"x":29,"var":"p4_tips","skin":"p4/p4_tips.png"}},{"type":"Image","props":{"y":609,"x":232,"var":"p4_light","skin":"p4/p4_light.png"},"child":[{"type":"Image","props":{"y":-15,"x":-13,"var":"p4_arrow","skin":"p4/p4_arrow.png"}}]},{"type":"Box","props":{"y":0,"x":0,"var":"next"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p4_bgs.jpg"}},{"type":"Image","props":{"y":396,"x":0,"skin":"p4/p4_pop.png"}},{"type":"Image","props":{"y":756,"x":422,"width":282,"var":"p4_t1","skin":"p4/p4_t1.png","pivotY":132,"pivotX":189,"height":237}},{"type":"Image","props":{"y":762,"x":421,"width":282,"var":"p4_t2","skin":"p4/p4_t2.png","pivotY":138,"pivotX":188,"height":237}},{"type":"Image","props":{"y":760,"x":411,"width":282,"var":"p4_t3","skin":"p4/p4_t3.png","pivotY":136,"pivotX":178,"height":237}},{"type":"Image","props":{"y":765,"x":411,"width":282,"var":"p4_t4","skin":"p4/p4_t4.png","pivotY":141,"pivotX":178,"height":237}},{"type":"Image","props":{"y":933,"x":364,"width":339,"var":"p4_next","skin":"p4/p4_next.png","pivotY":50,"pivotX":165,"height":132}},{"type":"Image","props":{"y":429,"x":510,"var":"p2_x","skin":"p2/p2_x.png"}}]}]};
		return p4UI;
	})(View);
var p5UI=(function(_super){
		function p5UI(){
			
		    this.err=null;
		    this.tel=null;
		    this.code=null;
		    this.getCode=null;
		    this.p5_btn=null;
		    this.over=null;
		    this.over_time=null;

			p5UI.__super.call(this);
		}

		CLASS$(p5UI,'ui.test.p5UI',_super);
		var __proto__=p5UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p5UI.uiView);

		}

		p5UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p5_bg.jpg"}},{"type":"Image","props":{"y":953,"x":178,"var":"err","skin":"p5/err1.png"}},{"type":"TextInput","props":{"y":801,"x":241,"width":312,"var":"tel","promptColor":"#392308","prompt":"输入手机号","maxChars":11,"height":69,"fontSize":28,"color":"#392308","align":"center"}},{"type":"TextInput","props":{"y":885,"x":186,"width":232,"var":"code","maxChars":10,"height":69,"fontSize":28,"color":"#392308","align":"center"}},{"type":"Label","props":{"y":885,"x":420,"width":173,"var":"getCode","valign":"middle","text":"获取验证码","styleSkin":"load/label.png","height":69,"fontSize":28,"color":"#392308","align":"center"}},{"type":"Image","props":{"y":1076,"x":368,"width":296,"var":"p5_btn","skin":"p5/p5_btn.png","pivotY":47,"pivotX":148,"height":132}},{"type":"Box","props":{"y":0,"x":0,"var":"over"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/over.jpg"}},{"type":"Image","props":{"y":1165,"x":176,"var":"over_time","skin":"p5/over_time2.png"}}]}]};
		return p5UI;
	})(View);
var p6UI=(function(_super){
		function p6UI(){
			
		    this.rank=null;
		    this.p6_time=null;

			p6UI.__super.call(this);
		}

		CLASS$(p6UI,'ui.test.p6UI',_super);
		var __proto__=p6UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p6UI.uiView);

		}

		p6UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p6_bg.jpg"}},{"type":"Label","props":{"y":774,"x":107,"width":538,"var":"rank","text":"恭喜成为第X名申领者","styleSkin":"load/label.png","height":61,"fontSize":44,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":1165,"x":198,"var":"p6_time","skin":"p5/p6_time5.png"}}]};
		return p6UI;
	})(View);
var p7UI=(function(_super){
		function p7UI(){
			
		    this.copy=null;
		    this.p2_x=null;
		    this.pos=null;

			p7UI.__super.call(this);
		}

		CLASS$(p7UI,'ui.test.p7UI',_super);
		var __proto__=p7UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p7UI.uiView);

		}

		p7UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"copy"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/copy.jpg"}},{"type":"Image","props":{"y":431,"x":510,"var":"p2_x","skin":"p2/p2_x.png"}},{"type":"Image","props":{"y":655,"x":125,"width":506,"var":"pos","height":262}}]}]};
		return p7UI;
	})(View);
var TestPageUI=(function(_super){
		function TestPageUI(){
			
		    this.btn=null;
		    this.clip=null;
		    this.combobox=null;
		    this.tab=null;
		    this.list=null;
		    this.btn2=null;
		    this.check=null;
		    this.radio=null;
		    this.box=null;

			TestPageUI.__super.call(this);
		}

		CLASS$(TestPageUI,'ui.test.TestPageUI',_super);
		var __proto__=TestPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TestPageUI.uiView);

		}

		TestPageUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","height":400}},{"type":"Button","props":{"y":56,"x":41,"width":150,"var":"btn","skin":"comp/button.png","sizeGrid":"4,4,4,4","label":"点我赋值","height":37}},{"type":"Clip","props":{"y":56,"x":401,"var":"clip","skin":"comp/clip_num.png","clipX":10}},{"type":"ComboBox","props":{"y":143,"x":220,"width":200,"var":"combobox","skin":"comp/combobox.png","sizeGrid":"4,20,4,4","selectedIndex":1,"labels":"select1,select2,selecte3","height":23}},{"type":"Tab","props":{"y":96,"x":220,"var":"tab","skin":"comp/tab.png","labels":"tab1,tab2,tab3"}},{"type":"VScrollBar","props":{"y":223,"x":259,"skin":"comp/vscroll.png","height":150}},{"type":"VSlider","props":{"y":223,"x":224,"skin":"comp/vslider.png","height":150}},{"type":"List","props":{"y":68,"x":452,"width":128,"var":"list","vScrollBarSkin":"comp/vscroll.png","repeatX":1,"height":299},"child":[{"type":"Box","props":{"y":0,"x":0,"width":112,"name":"render","height":30},"child":[{"type":"Label","props":{"y":5,"x":26,"width":78,"text":"this is a list","skin":"load/label.png","name":"label","height":20,"fontSize":14}},{"type":"Clip","props":{"y":2,"x":0,"skin":"comp/clip_num.png","name":"clip","clipX":10}}]}]},{"type":"Button","props":{"y":4,"x":563,"skin":"comp/btn_close.png","name":"close"}},{"type":"Button","props":{"y":112,"x":41,"width":150,"var":"btn2","skin":"comp/button.png","sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"label":"点我赋值","height":66}},{"type":"CheckBox","props":{"y":188,"x":220,"var":"check","skin":"comp/checkbox.png","label":"checkBox1"}},{"type":"RadioGroup","props":{"y":61,"x":220,"var":"radio","skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3"}},{"type":"Panel","props":{"y":223,"x":299,"width":127,"vScrollBarSkin":"comp/vscroll.png","height":150},"child":[{"type":"Image","props":{"skin":"comp/image.png"}}]},{"type":"CheckBox","props":{"y":188,"x":326,"skin":"comp/checkbox.png","labelColors":"#ff0000","label":"checkBox2"}},{"type":"Box","props":{"y":197,"x":41,"var":"box"},"child":[{"type":"ProgressBar","props":{"y":70,"width":150,"skin":"comp/progress.png","sizeGrid":"4,4,4,4","name":"progress","height":14}},{"type":"Label","props":{"y":103,"width":137,"text":"This is a Label","skin":"load/label.png","name":"label","height":26,"fontSize":20}},{"type":"TextInput","props":{"y":148,"width":150,"text":"textinput","skin":"comp/textinput.png","name":"input"}},{"type":"HSlider","props":{"width":150,"skin":"comp/hslider.png","name":"slider"}},{"type":"HScrollBar","props":{"y":34,"width":150,"skin":"comp/hscroll.png","name":"scroll"}}]}]};
		return TestPageUI;
	})(View);
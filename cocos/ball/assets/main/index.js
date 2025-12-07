System.register("chunks:///_virtual/constants.ts",["cc"],(function(t){"use strict";var c,n;return{setters:[function(t){c=t.cclegacy,n=t._decorator}],execute:function(){c._RF.push({},"06dfd6kGV9CMZaLTtMp5nDY","constants",void 0);n.ccclass,n.property,t("Constants",(function(){}));c._RF.pop()}}}));

System.register("chunks:///_virtual/GameLanch.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,e,c,o;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,c=t._decorator,o=t.Component}],execute:function(){var r;e._RF.push({},"ba9b2j61lVMEJiE06z2tORq","GameLanch",void 0);var a=c.ccclass;c.property,t("GameLanch",a("GameLanch")(r=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var c=e.prototype;return c.onLoad=function(){},c.start=function(){},c.update=function(t){},e}(o))||r);e._RF.pop()}}}));

System.register("chunks:///_virtual/IndexPage.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,o,c;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,o=e._decorator,c=e.Component}],execute:function(){var r;n._RF.push({},"3f903lOhX1IsL1y1uiBbqfp","IndexPage",void 0);var i=o.ccclass;o.property,e("IndexPage",i("IndexPage")(r=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var o=n.prototype;return o.start=function(){},o.update=function(e){},o.ruleClick=function(){console.log("ruleclick====")},o.recodeClick=function(){console.log("recodeClick====")},o.startClick=function(){console.log("startClick====")},n}(c))||r);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameLanch.ts","./IndexPage.ts","./PopDialogCtrl.ts","./constants.ts","./main.ts","./scene.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/main.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,t,i,o,r,a,l,c,u,s,p;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,l=e.Node,c=e.Vec3,u=e.Label,s=e.tween,p=e.Component}],execute:function(){var f,b,h,g,d,y,m,w,T;r._RF.push({},"fa2bemb93RF4bPbocG9/2hg","main",void 0);var v=a.ccclass,D=a.property;e("main",(f=v("main"),b=D(l),h=D(l),g=D(l),f((m=n((y=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return n=e.call.apply(e,[this].concat(r))||this,i(n,"contentPage",m,o(n)),i(n,"popDialog",w,o(n)),i(n,"nodeTip",T,o(n)),n}t(n,e);var r=n.prototype;return r.onLoad=function(){},r.start=function(){this.init(),this.showTip("测试坦克")},r.onDestroy=function(){},r.init=function(){this.nodeTip.scale=new c(0,0,0)},r.showTip=function(e){this.nodeTip.getChildByName("Label").getComponent(u).string=e,s(this.nodeTip).to(.1,{scale:new c(1,1,1)}).delay(1.5).to(.1,{scale:new c(0,0,0)}).start()},n}(p)).prototype,"contentPage",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=n(y.prototype,"popDialog",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=n(y.prototype,"nodeTip",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=y))||d));r._RF.pop()}}}));

System.register("chunks:///_virtual/PopDialogCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,e,i,n,r,a,l,c;return{setters:[function(t){o=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,l=t.Node,c=t.Component}],execute:function(){var u,p,s,f,y,g,b,d,h;r._RF.push({},"a2544YvJcJKc6oFwwns3NRH","PopDialogCtrl",void 0);var m=a.ccclass,v=a.property;t("PopDialogCtrl",(u=m("PopDialogCtrl"),p=v({type:l,tooltip:"弹出式对话框的遮罩节点"}),s=v({type:l,tooltip:"弹出式对话框的主题内容节点"}),f=v({type:Number,tooltip:"弹出式对话框初始化时的透明度"}),u((b=o((g=function(t){function o(){for(var o,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return o=t.call.apply(t,[this].concat(r))||this,i(o,"mask",b,n(o)),i(o,"content",d,n(o)),i(o,"maskOpacity",h,n(o)),o}e(o,t);var r=o.prototype;return r.onLoad=function(){},r.showDialog=function(){console.log("显示"),this.node.active=!0},r.hideDialog=function(){console.log("隐藏"),this.node.active=!1},r.start=function(){},r.update=function(t){},o}(c)).prototype,"mask",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=o(g.prototype,"content",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=o(g.prototype,"maskOpacity",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),y=g))||y));r._RF.pop()}}}));

System.register("chunks:///_virtual/scene.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,c,r;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,c=t._decorator,r=t.Component}],execute:function(){var o;n._RF.push({},"382c8UJTKJGQ7B4fl9MotcZ","scene",void 0);var s=c.ccclass;c.property,t("scene",s("scene")(o=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var c=n.prototype;return c.start=function(){},c.update=function(t){},n}(r))||o);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
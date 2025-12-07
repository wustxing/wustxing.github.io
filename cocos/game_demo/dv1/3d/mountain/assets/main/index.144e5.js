System.register("chunks:///_virtual/app.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './dateUtils.ts', './encodeUtils.ts', './eventNameUtils.ts', './eventObjUtils.ts', './eventUtils.ts', './httpUtils.ts', './imgUrils.ts', './jsUrils.ts', './mathUtils.ts', './poolUtils.ts', './promiseUtils.ts', './randomUtils.ts', './storageUtils.ts', './tweenUtils.ts', './uiManagerUtils.ts', './urlUtils.ts', './vectorUtils.ts'], function (exports) {
  var _createClass, cclegacy, dateUtils, encodeUtils, eventNameUtils, eventObjUtils, event2Utils, httpUtils, imgUrils, jsUtils, mathUtils, poolUtils, promiseUtils, randomUtils, storageUtil, tweenUtils, uiManagerUtils, urlUtils, vectorUtils;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      dateUtils = module.default;
    }, function (module) {
      encodeUtils = module.default;
    }, function (module) {
      eventNameUtils = module.default;
    }, function (module) {
      eventObjUtils = module.default;
    }, function (module) {
      event2Utils = module.default;
    }, function (module) {
      httpUtils = module.default;
    }, function (module) {
      imgUrils = module.default;
    }, function (module) {
      jsUtils = module.default;
    }, function (module) {
      mathUtils = module.default;
    }, function (module) {
      poolUtils = module.default;
    }, function (module) {
      promiseUtils = module.default;
    }, function (module) {
      randomUtils = module.default;
    }, function (module) {
      storageUtil = module.default;
    }, function (module) {
      tweenUtils = module.default;
    }, function (module) {
      uiManagerUtils = module.default;
    }, function (module) {
      urlUtils = module.default;
    }, function (module) {
      vectorUtils = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "08ddbAIKllOq7c9ziy/UgN+", "app", undefined);
      /**
       * 类名采用全小写 方便再手机上 输入代码调试
       * @export
       * @class app
       */


      var app = exports('default', /*#__PURE__*/function () {
        function app() {}

        _createClass(app, null, [{
          key: "promise",
          get:
          /**
          * promise类
          * @readonly
          * @static
          * @type {promiseUtilsF}
          * @memberof app
          */
          function get() {
            return promiseUtils.instance();
          }
          /**
           * 对象池工具类
           * @type {poolUtils}
           */

        }, {
          key: "pool",
          get: function get() {
            return poolUtils.instance();
          }
          /**
           * 事件
           * @readonly
           * @static
           * @type {Event2Utils}
           * @memberof App
           */

        }, {
          key: "event",
          get: function get() {
            return event2Utils.instance();
          }
          /**
          * 事件名
          * @readonly
          * @static
          * @type {eventNameUtils}
          * @memberof App
          */

        }, {
          key: "eName",
          get: function get() {
            return eventNameUtils.instance();
          }
          /**
           * 随机数
           * @readonly
           * @static
           * @type {randomUtils}
           * @memberof app
           */

        }, {
          key: "rand",
          get: function get() {
            return randomUtils.instance();
          }
          /**
           * date 时间处理类
           * @readonly
           * @static
           * @type {dateUtils}
           * @memberof app
           */

        }, {
          key: "date",
          get: function get() {
            return dateUtils.instance();
          }
          /**
           * encode
           * @readonly
           * @static
           * @type {tweenUtils}
           * @memberof app
           */

        }, {
          key: "encode",
          get: function get() {
            return encodeUtils.instance();
          }
          /**
           * 事件封装类
           * @type {eventObjUtils}
           */

        }, {
          key: "eventObj",
          get: function get() {
            return eventObjUtils.instance();
          }
          /**
           * http请求工具类
           * @readonly
           * @static
           * @type {httpUtil}
           * @memberof app
           */

        }, {
          key: "http",
          get: function get() {
            return httpUtils.instance();
          }
          /**
           * 图片工具
           * @readonly
           * @static
           * @type {imgUrils}
           * @memberof app
           */

        }, {
          key: "img",
          get: function get() {
            return imgUrils.instance();
          }
          /**
          * 节点搜索
          * @readonly
          * @static
          * @type {nodeTreeUtils}
          * @memberof app
          */

        }, {
          key: "nodeTree",
          get: function get() {
            console.error("not find nodeTree");
            return {}; // return nodeTreeUtils.instance();
          }
          /**
          * js通用工具
          * @readonly
          * @static
          * @type {jsUtils}
          * @memberof app
          */

        }, {
          key: "common",
          get: function get() {
            return jsUtils.instance();
          } // /**
          //  * request请求工具类
          //  * @readonly
          //  * @static
          //  * @type {requestUtils}
          //  * @memberof app
          //  */
          // public static get request(): requestUtils {
          //     return requestUtils.instance();
          // }

          /**
           * tween包
           * @readonly
           * @static
           * @type {tweenUtils}
           * @memberof app
           */

        }, {
          key: "tween",
          get: function get() {
            return tweenUtils.instance();
          }
          /**
           * 游戏场景管理类
           * @type {uiManagerUtils}
           */

        }, {
          key: "uiMgr",
          get: function get() {
            return uiManagerUtils.instance();
          }
          /**
          * url工具类
          * @readonly
          * @static
          * @type {urlUtils}
          * @memberof app
          */

        }, {
          key: "url",
          get: function get() {
            return urlUtils.instance();
          }
          /**
          * storage 本地存储
          * @readonly
          * @static
          * @type {storageUtils}
          * @memberof app
          */

        }, {
          key: "storage",
          get: function get() {
            return storageUtil.instance();
          }
          /**
           * vector 向量相关
           * @readonly
           * @static
           * @type {vectorUtils}
           * @memberof app
           */

        }, {
          key: "vector",
          get: function get() {
            return vectorUtils.instance();
          }
          /**
           * 数学相关
           * @readonly
           * @static
           * @type {mathUtils}
           * @memberof app
           */

        }, {
          key: "math",
          get: function get() {
            return mathUtils.instance();
          }
        }]);

        return app;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/arrayUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "27fc6EfJO5AMp+UcaAgy2Fb", "arrayUtils", undefined);
      /**
       * 数组工具类
       * @export
       * @class arrayUtils
       * @extends {singtonClass}
       */


      var arrayUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(arrayUtils, _singtonClass);

        function arrayUtils() {
          return _singtonClass.apply(this, arguments) || this;
        }

        var _proto = arrayUtils.prototype;
        /**
        * 数组去重，并创建一个新数组返回
        * @param arr  源数组
        */

        _proto.noRepeated = function noRepeated(arr) {
          var res = [arr[0]];

          for (var i = 1; i < arr.length; i++) {
            var repeat = false;

            for (var j = 0; j < res.length; j++) {
              if (arr[i] == res[j]) {
                repeat = true;
                break;
              }
            }

            if (!repeat) {
              res.push(arr[i]);
            }
          }

          return res;
        }
        /**
         * 复制二维数组
         * @param array 目标数组 
         */
        ;

        _proto.copy2DArray = function copy2DArray(array) {
          var newArray = [];

          for (var i = 0; i < array.length; i++) {
            newArray.push(array[i].concat());
          }

          return newArray;
        }
        /**
         * Fisher-Yates Shuffle 随机置乱算法
         * @param array 目标数组
         */
        ;

        _proto.fisherYatesShuffle = function fisherYatesShuffle(array) {
          var count = array.length;

          while (count) {
            var index = Math.floor(Math.random() * count--);
            var temp = array[count];
            array[count] = array[index];
            array[index] = temp;
          }

          return array;
        }
        /**
         * 混淆数组
         * @param array 目标数组
         */
        ;

        _proto.confound = function confound(array) {
          var result = array.slice().sort(function () {
            return Math.random() - .5;
          });
          return result;
        }
        /**
         * 数组扁平化
         * @param array 目标数组
         */
        ;

        _proto.flattening = function flattening(array) {
          for (; array.some(function (v) {
            return Array.isArray(v);
          });) {
            // 判断 array 中是否有数组
            array = [].concat.apply([], array); // 压扁数组
          }

          return array;
        }
        /** 删除数组中指定项 */
        ;

        _proto.removeItem = function removeItem(array, item) {
          var temp = array.concat();

          for (var i = 0; i < temp.length; i++) {
            var value = temp[i];

            if (item == value) {
              array.splice(i, 1);
              break;
            }
          }
        }
        /**
         * 合并数组
         * @param array1 目标数组1
         * @param array2 目标数组2
         */
        ;

        _proto.combineArrays = function combineArrays(array1, array2) {
          var newArray = [].concat(array1, array2);
          return newArray;
        }
        /**
         * 获取随机数组成员
         * @param array 目标数组
         */
        ;

        _proto.getRandomValueInArray = function getRandomValueInArray(array) {
          var newArray = array[Math.floor(Math.random() * array.length)];
          return newArray;
        };

        return arrayUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseListView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaseView;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseView = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "421a1LZtZtAcbjF8uKzLBNb", "BaseListView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseListView = exports('BaseListView', (_dec = ccclass('BaseListView'), _dec(_class = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(BaseListView, _BaseView);

        function BaseListView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _this.arrData = null; // @property(list)

          _this.listV = null;
          return _this;
        }

        var _proto = BaseListView.prototype;

        _proto.updateUI = function updateUI() {// this.arrData = data.arrMissionVo.sort(this.sortBy);
          // this.listV.refreshData(this.arrData);
        };

        return BaseListView;
      }(BaseView)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseUrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts'], function (exports) {
  var _construct, _asyncToGenerator, _regeneratorRuntime, cclegacy, app;

  return {
    setters: [function (module) {
      _construct = module.construct;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      app = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0cb9cVWwBRDLKJXbiUWU+LG", "BaseUrl", undefined); // /**
      //  * 将类名赋给该类
      //  * @param target 
      //  */
      // export function requestClass(target: any) {
      //     let aaaa = import.meta.url;
      //     let frameInfo = cc['_RF'].peek();
      //     let script = frameInfo.script;
      //     js.setClassName(script, target);
      // }

      /**
       * http请求基类
       * @export
       * @class baseUrl
       */


      var BaseUrl = exports('default', /*#__PURE__*/function () {
        function BaseUrl() {
          this.success_callback = null;
          this.fail_callback = null;
          this._urlData = null;
          this.url = "";
        } //接口链接

        /**
         * 获取一个单例
         * @returns {any}
         */


        BaseUrl.instance = function instance() {
          var Class = this;

          if (!Class._instance) {
            for (var _len = arguments.length, param = new Array(_len), _key = 0; _key < _len; _key++) {
              param[_key] = arguments[_key];
            }

            Class._instance = _construct(Class, param);
          }

          return Class._instance;
        }
        /**
         * 发送协议
         * @param keyt
         */
        ;

        var _proto = BaseUrl.prototype;

        _proto.send = function send() {}
        /**
         * post发送命令
         * @param _param 接口需要的参数
         */
        ;

        _proto.post = /*#__PURE__*/function () {
          var _post = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
            var _this = this;

            var res, time_obj;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this._urlData = data;
                  res = null;
                  time_obj = setTimeout(function () {
                    console.log("定时器");
                    app.eventObj.showWait();
                  }, 500);
                  _context.next = 5;
                  return app.http.asyncPost(this.url, data).then(function (obj) {
                    res = _this.autoData(obj.resp, true);
                  })["catch"](function (err) {
                    res = _this.autoData(err, false);
                  });

                case 5:
                  clearTimeout(time_obj);
                  app.eventObj.hideWait();

                  if (res.status) {
                    this.success(res.data, res.obj);
                  } else {
                    this.fail(res.data, res.msg);
                  }

                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function post(_x) {
            return _post.apply(this, arguments);
          }

          return post;
        }();

        _proto.autoData = function autoData(data, res) {
          if (res === void 0) {
            res = true;
          }

          var obj = {
            status: false,
            data: null,
            obj: null,
            msg: null
          };

          if (res == true) {
            obj.status = true;
            obj.data = data;
            obj.obj = data["data"];

            if (data["status"] == "success") {
              obj.status = true;
              obj.data = data;
              obj.obj = data["data"];
            } else {
              obj.status = false;
              obj.data = data;
              obj.msg = data["message"];
            }
          } else {
            obj.status = false;
            obj.data = data;
            obj.msg = data.message;
          }

          return obj;
        }
        /**
         * 自动处理get post 请求后的参数 并调用对应的success 和 fail
         * @memberof BaseUrl
         */
        ;

        _proto.autoResponse = function autoResponse(data) {
          var res = this.autoData(data, true);

          if (res.status) {
            this.success(res.data, res.obj);
          } else {
            this.fail(res.data, res.msg);
          }
        }
        /**
         * get发送命令
         * @param _param 接口需要的参数
         */
        ;

        _proto.get = /*#__PURE__*/function () {
          var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
            var _this2 = this;

            var res, time_obj;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this._urlData = data;
                  res = null;
                  time_obj = setTimeout(function () {
                    app.eventObj.showWait();
                  }, 500);

                  if (data && Object.keys(data).length != 0) {
                    console.warn(data);

                    if (this.url.indexOf("?") == -1) {
                      this.url += "?";
                    }

                    this.url += app.common.paramObjToString(data);
                  }

                  _context2.next = 6;
                  return app.http.asyncGet(this.url).then(function (obj) {
                    res = _this2.autoData(obj.resp, true);
                  })["catch"](function (err) {
                    res = _this2.autoData(err, false);
                  });

                case 6:
                  clearTimeout(time_obj);
                  app.eventObj.hideWait();

                  if (res.status) {
                    this.success(res.data, res.obj);
                  } else {
                    this.fail(res.data, res.msg);
                  }

                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));

          function get(_x2) {
            return _get.apply(this, arguments);
          }

          return get;
        }()
        /**
         * 接口回调成功
         * @param obj 数据json对象
         */
        ;

        _proto.success = function success(obj, _data) {
          if (_data === void 0) {
            _data = null;
          }

          if (this.url.indexOf("api/index/ping") >= 0) ;else {
            console.log(this.url);
            console.log("[BASEURL-LOG]", obj);
          }

          if (this.success_callback) {
            this.success_callback(_data);
            this.success_callback = null;
          }
        }
        /**
         * 接口回调成功
         * @param obj 数据json对象
         */
        ;

        _proto.fail = function fail(obj, msg) {
          console.warn(this.url);
          console.warn("[BASEURL-ERROR]", obj);
          var code = obj.code;

          switch (code) {
            default:
              console.warn("未知错误[" + code + "]", obj);
              break;
          }
        };

        return BaseUrl;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './gameEnum.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Input, Widget, tween, easing, UIOpacity, Component, app, gameEnum;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Input = module.Input;
      Widget = module.Widget;
      tween = module.tween;
      easing = module.easing;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      app = module.default;
    }, function (module) {
      gameEnum = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "4ca1fXdXk9JPp+Bvi/MxCxE", "BaseView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseView = exports('default', (_dec = property({
        type: Enum(gameEnum.viewEffect),
        displayName: "弹出效果",
        tooltip: "NORMAL:缩小放大特效;BUTTON_SHOW:从下方弹出"
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseView, _Component);

        function BaseView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.view_name = gameEnum.view.NONE;
          _this.arr_btn = [];
          _this.arr_event = [];

          _initializerDefineProperty(_this, "effectType", _descriptor, _assertThisInitialized(_this));

          _this.btnBack = null;
          _this.c_startTime = 0;
          _this.c_endTime = 0;
          _this.url = "";
          _this.rurl = "";
          _this.clicktime = 0;
          return _this;
        }

        var _proto = BaseView.prototype;
        /**
         * 关闭view
         * @memberof baseView
         */

        _proto.closeView = function closeView() {
          app.uiMgr.hide(this.view_name);
        }
        /**
         * 打开view
         * @param {*} [layer=gameEnum.layer.WINDOW_LAYER]
         * @memberof baseView
         */
        ;

        _proto.showView = function showView(layer) {
          if (layer === void 0) {
            layer = gameEnum.layer.WINDOW_LAYER;
          }

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          app.event.emit(app.eName.OPEN_VIEW, this.view_name, layer, args);
        };

        _proto.show = function show() {
          var _this2 = this;

          this.view_name = arguments.length <= 0 ? undefined : arguments[0];
          console.log(this.view_name, " is show");
          this.showEffect();
          this.arr_btn.forEach(function (obj) {
            obj.on(Input.EventType.TOUCH_END, _this2.click, _this2);
          });
          var btn_back = this.node.getChildByName("btn_back");
          btn_back && btn_back.on(Input.EventType.TOUCH_END, this._click, this); //用于屏蔽弹窗透明区域的点击事件

          var btn_null = this.node.getChildByName("btn_null");
          btn_null && btn_null.on(Input.EventType.TOUCH_END, this._click, this); //额外的关闭按钮

          this.btnBack && this.btnBack.on(Input.EventType.TOUCH_END, this._click, this);
          this.arr_event.forEach(function (vo) {
            // app.event.on(vo.name, vo.func, vo.target ? vo.target : this);
            app.event.on(vo.name, vo.func, vo.target ? vo.target : _this2);
          });
          this.c_startTime = app.date.getTime();
        };

        _proto.hide = function hide() {
          var _this3 = this;

          this.arr_btn.forEach(function (obj) {
            // obj.off(Node.EventType.TOUCH_END, this.click, this);
            obj.off(Input.EventType.TOUCH_END, _this3.click, _this3);
          });
          app.event.offAll(this);
          var btn_back = this.node.getChildByName("btn_back");
          btn_back && btn_back.off(Input.EventType.TOUCH_END, this._click, this); //用于屏蔽弹窗透明区域的点击事件

          var btn_null = this.node.getChildByName("btn_null");
          btn_null && btn_null.off(Input.EventType.TOUCH_END, this._click, this); //额外的关闭按钮

          this.btnBack && this.btnBack.off(Input.EventType.TOUCH_END, this._click, this);
          this.c_endTime = app.date.getTime();
        };

        _proto.off = function off() {
          var _this4 = this;

          this.arr_btn.forEach(function (obj) {
            obj.off(Input.EventType.TOUCH_END, _this4.click, _this4);
          });
          app.event.offAll(this);
        };

        _proto.click = function click(e) {};

        _proto._click = function _click(e) {
          var btn_back = this.node.getChildByName("btn_back"); //用于屏蔽弹窗透明区域的点击事件

          var btn_null = this.node.getChildByName("btn_null");

          switch (e.currentTarget) {
            case this.btnBack:
              this.closeView();
              break;

            case btn_back:
              app.uiMgr.hide(this.view_name);
              break;
          }
        }
        /**
         *
         * @param {Function} cb 实际关闭界面的函数
         * @return {*} 
         * @memberof baseView
         */
        ;

        _proto.hideEffect = function hideEffect(cb) {
          console.log("hideEffect", this.view_name);

          switch (this.effectType) {
            case gameEnum.viewEffect.BG_SCALE:
              var node_view = this.node.getChildByName("view");

              if (!node_view) {
                cb();
                return;
              }

              node_view.scale = app.vector.getV3(1);
              var ui_opacity = node_view.getComponent(UIOpacity);
              ui_opacity.opacity = 255;
              tween(ui_opacity).to(0.1, {
                opacity: 0
              }, {
                easing: easing.smooth
              }).start();
              tween(node_view).to(0.1, {
                scale: app.vector.getV3(1.3)
              }, {
                easing: easing.smooth
              }).call(function () {
                node_view.scale = app.vector.getV3(1);
                ui_opacity.opacity = 255;
                cb();
              }).start();
              break;

            case gameEnum.viewEffect.WIDGET_BUTTOM_SHOW:
              var node_view = this.node.getChildByName("view");

              if (!node_view) {
                cb();
                return;
              }

              var node_widget = node_view.getComponent(Widget);

              if (!node_widget) {
                cb();
                return;
              }

              node_widget.bottom = 0;
              tween(node_widget).to(0.1, {
                bottom: -500
              }, {
                easing: easing.smooth
              }).call(function () {
                node_widget.bottom = 0;
                cb();
              }).start();
              break;

            case gameEnum.viewEffect.WIDGET_LEFT_SHOW:
              var node_view = this.node.getChildByName("view");

              if (!node_view) {
                cb();
                return;
              }

              var node_widget = node_view.getComponent(Widget);

              if (!node_widget) {
                cb();
                return;
              }

              node_widget.left = 0;
              tween(node_widget).to(0.1, {
                left: -500
              }, {
                easing: easing.smooth
              }).call(function () {
                node_widget.left = 0;
                cb();
              }).start();
              break;

            default:
              cb(); // this.node.scale = 0.7;
              // tween(this.node).to(0.1, { scale: 1 }).start();

              break;
          }
        };

        _proto.showEffect = function showEffect() {
          switch (this.effectType) {
            case gameEnum.viewEffect.BG_SCALE:
              var node_view = this.node.getChildByName("view");

              if (!node_view) {
                return;
              }

              node_view.scale = app.vector.getV3(1.5);
              tween(node_view).to(0.2, {
                scale: app.vector.getV3(1)
              }, {
                easing: easing.expoOut
              }).start();
              break;

            case gameEnum.viewEffect.BG_SCALE1:
              var node_view = this.node.getChildByName("view");

              if (!node_view) {
                return;
              }

              node_view.scale = app.vector.getV3(0.7);
              tween(node_view).to(0.1, {
                scale: app.vector.getV3(1)
              }).start();
              break;

            case gameEnum.viewEffect.WIDGET_BUTTOM_SHOW:
              var node_view = this.node.getChildByName("view");

              if (!node_view) {
                return;
              }

              var node_widget = node_view.getComponent(Widget);

              if (!node_widget) {
                return;
              }

              node_widget.bottom = -500;
              tween(node_widget).to(1.6, {
                bottom: 0
              }, {
                easing: easing.quintOut
              }).start(); // tween(node_widget).to(1.6, { bottom: 0 }, { easing: easing.expoOut }).start();

              break;

            case gameEnum.viewEffect.WIDGET_LEFT_SHOW:
              var node_view = this.node.getChildByName("view");

              if (!node_view) {
                return;
              }

              var node_widget = node_view.getComponent(Widget);

              if (!node_widget) {
                return;
              }

              node_widget.left = -500;
              tween(node_widget).to(0.1, {
                left: 0
              }, {
                easing: easing.quadOut
              }).start();
              break;
            // case gameEnum.viewEffect.FADE_OUT:
            //     var node_view = this.node.getChildByName("view");
            //     if (!node_view) { return; }
            //     node_view.opacity = 0;
            //     node_view.active = true;
            //     node_view.stopAllActions();
            //     node_view.runAction(cc.fadeIn(0.15));
            //     break;

            case gameEnum.viewEffect.NORMAL:
            default:
              this.node.scale = app.vector.getV3(1); // tween(this.node).to(0.1, { scale: 1 }).start();

              break;
          }
        };

        return BaseView;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "effectType", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return gameEnum.viewEffect.NORMAL;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CameraCtr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Debug.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Quat, Vec2, Camera, toRadian, input, Input, clamp, Vec3, Component, Debug;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Quat = module.Quat;
      Vec2 = module.Vec2;
      Camera = module.Camera;
      toRadian = module.toRadian;
      input = module.input;
      Input = module.Input;
      clamp = module.clamp;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      Debug = module.Debug;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "fa3bd1pc6ZMQ422iA/LXBoA", "CameraCtr", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CameraCtr = exports('CameraCtr', (_dec = ccclass('CameraCtr'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraCtr, _Component);

        function CameraCtr() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "distance", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "vertical", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "horizontal", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "target", _descriptor4, _assertThisInitialized(_this));

          _this.camera = null;
          _this.rot = new Quat();
          _this.curXY = new Vec2();
          _this.curScale = 1;
          _this.touchCount = 0;
          _this.touchs = [{
            id: -1,
            pre: new Vec2(),
            cur: new Vec2()
          }, {
            id: -1,
            pre: new Vec2(),
            cur: new Vec2()
          }];
          _this.rotTemp = new Quat();
          return _this;
        }

        var _proto = CameraCtr.prototype;

        _proto.start = function start() {
          this.camera = this.getComponentInChildren(Camera);
          this.curXY.set(toRadian(this.horizontal), -toRadian(this.vertical));

          if (this.camera) {
            Debug.camera = this.camera; //debug camera
            // this.camera.node.position = new Vec3(0, 0, this.distance);
          }
        };

        _proto.onEnable = function onEnable() {
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseScale, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        };

        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.MOUSE_WHEEL, this.onMouseScale, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        };

        _proto.updateRotate = function updateRotate() {
          var node = this.node;
          var rotation = this.rot;
          this.curXY.y = clamp(this.curXY.y, toRadian(-60), toRadian(30));
          Quat.rotateY(rotation, Quat.IDENTITY, -this.curXY.x);
          Quat.rotateX(rotation, rotation, this.curXY.y);
          Quat.slerp(rotation, node.rotation, rotation, 0.25);
          node.rotation = rotation; // if(this.target){
          //     let rotate = this.target.rotation;
          //     node.position.lerp(this.target.position,0.25);
          //     Quat.fromAxisAngle(this.rotTemp,Vec3.UNIT_Y,-this.curXY.x);
          //     this.target.rotation = rotate.lerp(this.rotTemp,0.25);
          // }
        };

        _proto.onMouseScale = function onMouseScale(event) {
          var scale = event.getScrollY() > 0 ? 1 : -1;
          this.curScale = clamp(this.curScale - scale * 0.1, 0.25, 1.5);
          this.node.scale = new Vec3(this.curScale, this.curScale, this.curScale);
        };

        _proto.onTouchStart = function onTouchStart(event) {
          var id = event.getID();
          var pos = event.getUILocation();

          for (var i = 0; i < 2; i++) {
            var t = this.touchs[i];

            if (t.id == -1) {
              t.id = id;
              t.pre.set(pos);
              t.cur.set(pos);
              this.touchCount++;
              break;
            }
          }
        };

        _proto.onTouchMove = function onTouchMove(event) {
          var curTouch = null;
          var id = event.getID();
          var pos = event.getUILocation();

          for (var i = 0; i < 2; i++) {
            var t = this.touchs[i];

            if (t.id == id) {
              t.cur.set(pos);
              curTouch = t;
            }
          }

          if (this.touchCount == 1) {
            var scale = 0.008;
            var cur = event.getUIDelta();
            this.curXY.x += cur.x * scale;
            this.curXY.y += cur.y * scale; // this.updateRotate();
          } else if (this.touchCount == 2) {
            var p0 = this.touchs[0];
            var p1 = this.touchs[1];
            var curLen = Vec2.distance(p0.cur, p1.cur);
            var oldLen = Vec2.distance(p0.pre, p1.pre);
            this.curScale = clamp(this.curScale - (curLen - oldLen) * 0.002, 0.25, 1.5);
            this.node.scale = new Vec3(this.curScale, this.curScale, this.curScale);
          }

          if (curTouch) {
            curTouch.pre.set(curTouch.cur);
          }
        };

        _proto.onTouchEnd = function onTouchEnd(event) {
          var id = event.getID();

          for (var i = 0; i < 2; i++) {
            var t = this.touchs[i];

            if (t.id == id) {
              t.id = -1;
              this.touchCount--;
            }
          }
        };

        _proto.update = function update(dt) {
          this.updateRotate();
        };

        return CameraCtr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "distance", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 25;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "vertical", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "horizontal", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 45;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cameraUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Vec3, view, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      view = module.view;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aae62eKRSVJMbgr2iQSqr31", "cameraUtils", undefined);
      /**
       * 摄像机工具类
       * @export
       * @class cameraUtils
       * @extends {singtonClass}
       */


      var cameraUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(cameraUtils, _singtonClass);

        function cameraUtils() {
          return _singtonClass.apply(this, arguments) || this;
        }

        var _proto = cameraUtils.prototype;
        /**
         * 当前世界坐标是否在摄像机显示范围内
         * @param camera    摄像机
         * @param worldPos  坐标
         */

        _proto.isInView = function isInView(camera, worldPos) {
          var cameraPos = camera.node.getWorldPosition();
          var viewPos = camera.worldToScreen(worldPos);
          var dir = Vec3.normalize(new Vec3(), worldPos.subtract(cameraPos));
          var forward = camera.node.forward;
          var dot = Vec3.dot(forward, dir);
          var viewportRect = view.getViewportRect(); // 判断物体是否在相机前面

          if (dot > 0) {
            // 判断物体是否在视窗内
            if (viewPos.x <= viewportRect.width && viewPos.x >= 0 && viewPos.y <= viewportRect.height && viewPos.y >= 0) {
              return true;
            }
          } else {
            return false;
          }
        };

        return cameraUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChickModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, SkeletalAnimation, Node, MeshRenderer, Animation, v3, tween, easing, Color, Component, app;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SkeletalAnimation = module.SkeletalAnimation;
      Node = module.Node;
      MeshRenderer = module.MeshRenderer;
      Animation = module.Animation;
      v3 = module.v3;
      tween = module.tween;
      easing = module.easing;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      app = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "871b8l8u9JI77z+ewZQO4ju", "ChickModel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ChickModel = exports('ChickModel', (_dec = ccclass('ChickModel'), _dec2 = property(SkeletalAnimation), _dec3 = property(Node), _dec4 = property(MeshRenderer), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ChickModel, _Component);

        function ChickModel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "fbx", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeX", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "meshBody", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ChickModel.prototype;

        _proto.start = function start() {// let collider = this.fbx.node.getComponent(CapsuleCollider);
          // if (collider) {
          //     collider.on('onTriggerStay', this.onTriggerStay, this);
          // }
        }
        /**
        * ====================================================
        * 模型动画
        * ====================================================
        */
        ;

        _proto.run = function run() {
          this.fbx.play("anim_rig_run");
        };

        _proto.fall_into_water_die = function fall_into_water_die() {
          this.fbx.play("anim_rig_fall_into_water_die");
        };

        _proto.fly_open = function fly_open() {
          this.fbx.once(Animation.EventType.FINISHED, this.fly, this);
          this.fbx.play("anim_rig_fly_open");
        };

        _proto.fly = function fly() {
          this.fbx.play("anim_rig_fly");
        };

        _proto.fly_shut = function fly_shut() {
          this.fbx.once(Animation.EventType.FINISHED, this.idle, this);
          this.fbx.play("anim_rig_fly_shut");
        };

        _proto.idle = function idle() {
          this.fbx.play("anim_rig_idle_1");
        }
        /**
        * ====================================================
        * 动画相关
        * ====================================================
        */

        /**
         * 跳跃动画
         * @param {number} [_t=1.2]
         * @param {number} [_height=4]
         * @memberof ChickModel
         */
        ;

        _proto.jump = function jump(_t, _height) {
          var _this2 = this;

          if (_t === void 0) {
            _t = 1.2;
          }

          if (_height === void 0) {
            _height = 4;
          }

          var initPosition = this.fbx.node.position.clone();
          var targetPosition = this.fbx.node.position.clone();
          var centerPostion = v3(0, _height, -3); // this.fly_open();
          // var obj = { a: 0 };
          // tween(obj).to(_t, { a: 1 }, {
          //     progress: (start: number, end: number, current: number, ratio: number) => {
          //         let v = app.vector.bezierTwo(ratio, initPosition, centerPostion, targetPosition);
          //         v.subtract(initPosition);
          //         // console.log(ratio, v);
          //         this.fbx.node.setPosition(v);
          //         return 0;
          //     }
          // }).call(() => {
          //     this.fly_shut();
          //     // this.jump(_t, _height);
          // }).start();

          var _tHalf = _t / 2;

          this.fly_open();
          tween(this.fbx.node).to(_tHalf, {
            position: centerPostion
          }, {
            easing: easing.cubicOut
          }).to(_tHalf, {
            position: targetPosition
          }, {
            easing: easing.quadIn
          }).call(function () {
            _this2.fly_shut(); // this.jump(_t, _height);

          }).start();
        }
        /**
         * 播放死亡闪烁动画
         * @memberof ChickModel
         */
        ;

        _proto.playDieAnim = /*#__PURE__*/function () {
          var _playDieAnim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var material;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  material = this.meshBody.getMaterialInstance(0);
                  material.setProperty("albedo", Color.RED);
                  _context.next = 4;
                  return app.promise.sleep(0.1);

                case 4:
                  material.setProperty("albedo", Color.WHITE);
                  _context.next = 7;
                  return app.promise.sleep(0.1);

                case 7:
                  material.setProperty("albedo", Color.RED);
                  _context.next = 10;
                  return app.promise.sleep(0.1);

                case 10:
                  material.setProperty("albedo", Color.WHITE);
                  _context.next = 13;
                  return app.promise.sleep(0.1);

                case 13:
                  material.setProperty("albedo", Color.RED);
                  _context.next = 16;
                  return app.promise.sleep(0.1);

                case 16:
                  material.setProperty("albedo", Color.WHITE);

                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function playDieAnim() {
            return _playDieAnim.apply(this, arguments);
          }

          return playDieAnim;
        }()
        /**
         * 设置正常的材质
         * @memberof ChickModel
         */
        ;

        _proto.setNormalMaterial = function setNormalMaterial() {
          var material = this.meshBody.getMaterialInstance(0);
          material.setProperty("albedo", Color.WHITE);
        }
        /**
         * 设置红色的材质
         * @memberof ChickModel
         */
        ;

        _proto.setRedMaterial = function setRedMaterial() {
          var material = this.meshBody.getMaterialInstance(0);
          material.setProperty("albedo", Color.RED);
        };

        return ChickModel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fbx", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeX", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "meshBody", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Collision.ts", ['cc'], function (exports) {
  var cclegacy, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4caf55KSv9GPq+TOhyBeb+v", "Collision", undefined);

      var ShapeType = exports('ShapeType', /*#__PURE__*/function (ShapeType) {
        ShapeType[ShapeType["Box"] = 0] = "Box";
        ShapeType[ShapeType["Sphere"] = 1] = "Sphere";
        ShapeType[ShapeType["Capsule"] = 2] = "Capsule";
        return ShapeType;
      }({})); //Cylinder = 3,

      var ShapeSupport = [];

      ShapeSupport[ShapeType.Box] = function (dir) {
        dir[0] = dir[0] > 0 ? 0.5 : -0.5;
        dir[1] = dir[1] > 0 ? 0.5 : -0.5;
        dir[2] = dir[2] > 0 ? 0.5 : -0.5;
        return dir;
      };

      ShapeSupport[ShapeType.Sphere] = function (dir) {
        var x = dir[0],
            y = dir[1],
            z = dir[2];
        var len = x * x + y * y + z * z;
        len = (len > 0 ? 1.0 / Math.sqrt(len) : 0) * 0.5;
        dir[0] = x * len, dir[1] = y * len, dir[2] = z * len;
        return dir;
      };

      ShapeSupport[ShapeType.Capsule] = function (dir) {
        var x = dir[0],
            y = dir[1],
            z = dir[2];
        var len = x * x + y * y + z * z;
        len = (len > 0 ? 1.0 / Math.sqrt(len) : 0) * 0.5;
        dir[0] = x * len, dir[1] = y * len, dir[2] = z * len;
        dir[1] += y > 0 ? 0.5 : -0.5;
        return dir;
      }; // ShapeSupport[ShapeType.Cylinder] = function (dir) {
      //     let x = dir[0], y = dir[1], z = dir[2];
      //     let len = x * x + z * z;
      //     len = (len > 0 ? 1.0 / Math.sqrt(len) : 0) * 0.5;
      //     dir[0] = x * len, dir[2] = z * len;
      //     dir[1] = y > 0 ? 1.0 : -1.0;
      //     return dir;
      // }


      var Collision = exports('Collision', /*#__PURE__*/function () {
        //closest = { index: 0, dist: Number.MAX_VALUE, norm: new Vec3(), a: 0, b: 0, c: 0 };
        function Collision(gjk, epa, epsilon) {
          if (gjk === void 0) {
            gjk = 16;
          }

          if (epa === void 0) {
            epa = 16;
          }

          if (epsilon === void 0) {
            epsilon = 0.00001;
          }

          this.MAX_GJK_TIMES = 16;
          this.MAX_EPA_TIMES = 16;
          this.MAX_EPSILON = 0.00001;
          this.slength = 0;
          this.simplex = [];
          this.flength = 0;
          this.simplexFaces = [{
            a: 0,
            b: 1,
            c: 2,
            nx: 0,
            ny: 0,
            nz: 0,
            dist: 0
          }, {
            a: 0,
            b: 1,
            c: 3,
            nx: 0,
            ny: 0,
            nz: 0,
            dist: 0
          }, {
            a: 0,
            b: 2,
            c: 3,
            nx: 0,
            ny: 0,
            nz: 0,
            dist: 0
          }, {
            a: 1,
            b: 2,
            c: 3,
            nx: 0,
            ny: 0,
            nz: 0,
            dist: 0
          }];
          this.a0 = new Vec3();
          this.b0 = new Vec3();
          this.ab = new Vec3();
          this.ac = new Vec3();
          this.ad = new Vec3();
          this.bc = new Vec3();
          this.ba = new Vec3();
          this.bd = new Vec3();
          this.dir = new Vec3();
          this.pA = [0, 0, 0];
          this.pB = [0, 0, 0];
          this.eData = new Array(64);
          this.eflag = new Array(1024);
          this.closest = null;
          this.MAX_GJK_TIMES = gjk;
          this.MAX_EPA_TIMES = epa;
          this.MAX_EPSILON = epsilon;
          this.slength = 0;
          var max = (gjk > epa ? gjk : epa) + 8;

          for (var i = 0; i < max; i++) {
            this.simplex[i] = new Vec3();
          }

          for (var _i = 0; _i < 1024; _i++) {
            this.eflag[_i] = 0;
          }
        }

        var _proto = Collision.prototype;

        _proto.EPA = function EPA(aWorldVerts, bWorldVerts, simplex) {
          this.flength = 4;
          var epsilon = this.MAX_EPSILON;
          var simplexFaces = this.simplexFaces;
          simplexFaces[0].a = 0, simplexFaces[0].b = 1, simplexFaces[0].c = 2;
          simplexFaces[1].a = 0, simplexFaces[1].b = 1, simplexFaces[1].c = 3;
          simplexFaces[2].a = 0, simplexFaces[2].b = 2, simplexFaces[2].c = 3;
          simplexFaces[3].a = 1, simplexFaces[3].b = 2, simplexFaces[3].c = 3;
          var res = null;
          var dir = this.dir;
          this.closest = null;
          this.getClosestFace(simplex, simplexFaces);

          for (var i = 0; i < this.MAX_EPA_TIMES; i++) {
            //let face: any = this.closest;
            var _face = this.closest;
            dir.x = _face.nx, dir.y = _face.ny, dir.z = _face.nz; // let point = this.support(aWorldVerts, bWorldVerts, face.norm);

            var _point = this.support(aWorldVerts, bWorldVerts, dir); //let dist = point.dot(face.norm);


            var dist = _point.dot(dir);

            if (dist - _face.dist < epsilon) {
              // res = { dir: face.norm.negative(), dist: dist + epsilon };
              res = {
                dist: dist + epsilon,
                dir: dir.negative()
              };
              return res;
            } //simplex.push(point);


            this.expand(simplex, simplexFaces, _point);
          }

          var face = this.closest;
          dir.x = face.nx, dir.y = face.ny, dir.z = face.nz;
          var point = this.support(aWorldVerts, bWorldVerts, dir);
          res = {
            dist: point.dot(dir) + epsilon,
            dir: dir.negative()
          };
          return res;
        };

        _proto.GJK = function GJK(a, b, epa) {
          if (epa === void 0) {
            epa = true;
          } //let simplex = [];


          this.slength = 0;
          var colliding = null;
          var simplex = this.simplex;
          var sA = ShapeSupport[a.getColliderShape()];
          var sB = ShapeSupport[b.getColliderShape()];
          var dir = Vec3.subtract(this.dir, a.getWorldCenter(), b.getWorldCenter());
          var objectA = {
            center: a.center,
            m: a.getWorldMatrix(),
            verts: a.getVertices(),
            support: sA
          };
          var objectB = {
            center: b.center,
            m: b.getWorldMatrix(),
            verts: b.getVertices(),
            support: sB
          };
          this.support(objectA, objectB, dir);
          dir.negative();

          for (var i = 0; i < this.MAX_GJK_TIMES; i++) {
            var p = this.support(objectA, objectB, dir);

            if (p.dot(dir) <= 0) {
              // console.log("out:"+i);
              colliding = false;
              break;
            }

            if (this.getChangeDir(simplex, dir)) {
              // console.log("in:"+i);
              if (epa) return this.EPA(objectA, objectB, simplex);
              colliding = true;
              break;
            }
          }

          return colliding;
        };

        _proto.expand = function expand(simplex, simplexFaces, extendPoint) {
          var edges = new Set();
          var closest_dist = Number.MAX_VALUE;
          var ex = extendPoint.x,
              ey = extendPoint.y,
              ez = extendPoint.z;
          var flength = this.flength;

          for (var i = flength - 1; i >= 0; i--) {
            var face = simplexFaces[i],
                dist = face.dist;
            var nx = face.nx,
                ny = face.ny,
                nz = face.nz;

            if (ex * nx + ey * ny + ez * nz - dist > 0) {
              var edgeAB = face.a << 16 | face.b;
              var edgeAC = face.a << 16 | face.c;
              var edgeBC = face.b << 16 | face.c;
              if (!edges["delete"](edgeAB)) edges.add(edgeAB);
              if (!edges["delete"](edgeAC)) edges.add(edgeAC);
              if (!edges["delete"](edgeBC)) edges.add(edgeBC); //remove simplexFaces

              simplexFaces[i] = simplexFaces[--flength];
              simplexFaces[flength] = face;
              continue;
            }

            if (dist < closest_dist) {
              this.closest = face;
              closest_dist = dist;
            }
          }

          var start = flength;
          var c = this.slength - 1;
          edges.forEach(function (edge) {
            if (flength >= simplexFaces.length) {
              simplexFaces.push({
                a: edge >> 16,
                b: edge & 0xFFFF,
                c: c,
                nx: 0,
                ny: 0,
                nz: 0
              });
            } else {
              var sf = simplexFaces[flength];
              sf.a = edge >> 16, sf.b = edge & 0xFFFF, sf.c = c;
            }

            flength++;
          });
          edges.clear();
          this.flength = flength;
          this.getClosestFace(simplex, simplexFaces, start, closest_dist);
        };

        _proto.getClosestFace = function getClosestFace(simplex, simplexFaces, start, closest_dist) {
          if (start === void 0) {
            start = 0;
          }

          if (closest_dist === void 0) {
            closest_dist = Number.MAX_VALUE;
          }

          var flength = this.flength;

          for (var i = start; i < flength; i++) {
            var face = simplexFaces[i];
            var a = simplex[face.a];
            var b = simplex[face.b];
            var c = simplex[face.c];
            var ax = a.x,
                ay = a.y,
                az = a.z;
            var abx = b.x - ax,
                aby = b.y - ay,
                abz = b.z - az;
            var acx = c.x - ax,
                acy = c.y - ay,
                acz = c.z - az;
            var nx = aby * acz - abz * acy,
                ny = abz * acx - abx * acz,
                nz = abx * acy - aby * acx;
            var len = nx * nx + ny * ny + nz * nz;

            if (len > 0) {
              len = 1.0 / Math.sqrt(len);
              nx = nx * len;
              ny = ny * len;
              nz = nz * len;
            }

            var dist = ax * nx + ay * ny + az * nz;

            if (dist <= 0) {
              nx = -nx, ny = -ny, nz = -nz;
              dist = -dist;
            }

            face.nx = nx, face.ny = ny, face.nz = nz;
            face.dist = dist;

            if (dist < closest_dist) {
              this.closest = face;
              closest_dist = dist;
            }
          }
        };

        _proto.getChangeDir = function getChangeDir(simplex, dir) {
          switch (this.slength) {
            case 2:
              {
                var _ab = Vec3.subtract(this.ab, simplex[1], simplex[0]);

                var _a = Vec3.negate(this.a0, simplex[0]);

                var _b = Vec3.cross(this.b0, _ab, _a);

                Vec3.cross(dir, _b, _ab);
              }
              return false;

            case 3:
              {
                var _ab2 = Vec3.subtract(this.ab, simplex[1], simplex[0]);

                var _ac = Vec3.subtract(this.ac, simplex[2], simplex[0]);

                Vec3.cross(dir, _ab2, _ac);

                var _a2 = Vec3.negate(this.b0, simplex[0]);

                if (_a2.dot(dir) < 0) dir.negative();
              }
              return false;

            case 4:
              var ab = Vec3.subtract(this.ab, simplex[1], simplex[0]);
              var ac = Vec3.subtract(this.ac, simplex[2], simplex[0]);
              Vec3.cross(dir, ab, ac).normalize();
              var ad = Vec3.subtract(this.ad, simplex[3], simplex[0]);

              if (ad.dot(dir) > 0) {
                dir.negative();
              }

              var a0 = Vec3.negate(this.b0, simplex[0]);

              if (a0.dot(dir) > 0) {
                //remove d
                //simplex.splice(3, 1);
                this.slength = 3;
                return false;
              } //face abd


              Vec3.cross(dir, ab, ad).normalize();

              if (ac.dot(dir) > 0) {
                dir.negative();
              }

              if (a0.dot(dir) > 0) {
                //remove c
                //simplex.splice(2, 1);
                var t = simplex[2];
                simplex[2] = simplex[3];
                simplex[3] = t;
                this.slength = 3;
                return false;
              } //face acd


              Vec3.cross(dir, ac, ad).normalize();

              if (ab.dot(dir) > 0) {
                dir.negative();
              }

              if (a0.dot(dir) > 0) {
                //remove b
                //simplex.splice(1, 1);
                var _t = simplex[1];
                simplex[1] = simplex[2];
                simplex[2] = simplex[3];
                simplex[3] = _t;
                this.slength = 3;
                return false;
              } //face bcd


              var bc = Vec3.subtract(this.bc, simplex[2], simplex[1]);
              var bd = Vec3.subtract(this.bd, simplex[3], simplex[1]);
              Vec3.cross(dir, bc, bd).normalize();
              var ba = Vec3.subtract(this.ba, simplex[0], simplex[1]);

              if (ba.dot(dir) > 0) {
                dir.negative();
              }

              var b0 = Vec3.negate(this.b0, simplex[1]);

              if (b0.dot(dir) > 0) {
                //simplex.splice(0, 1);
                var _t2 = simplex[0];
                simplex[0] = simplex[1];
                simplex[1] = simplex[2];
                simplex[2] = simplex[3];
                simplex[3] = _t2;
                this.slength = 3;
                return false;
              }

              return true;
          }
        };

        _proto.support = function support(objectA, objectB, dir) {
          var a = this.getPointInDirection(objectA, dir, this.pA);
          dir.negative();
          var b = this.getPointInDirection(objectB, dir, this.pB);
          dir.negative(); //new Vec3(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

          var simplex = this.simplex[this.slength++];
          simplex.x = a[0] - b[0];
          simplex.y = a[1] - b[1];
          simplex.z = a[2] - b[2];
          return simplex;
        };

        _proto.getPointInDirection = function getPointInDirection(object, dir, point) {
          var m = object.m;
          var verts = object.verts;
          var center = object.center;
          var support = object.support;
          var dx = dir.x,
              dy = dir.y,
              dz = dir.z;
          var x = dx * m.m00 + dy * m.m01 + dz * m.m02;
          var y = dx * m.m04 + dy * m.m05 + dz * m.m06;
          var z = dx * m.m08 + dy * m.m09 + dz * m.m10;

          if (support != null) {
            point[0] = x, point[1] = y, point[2] = z;
            support(point);
            dx = point[0], dy = point[1], dz = point[2];
          } else {
            var index = 0;
            var length = verts.length / 3;
            var maxDot = -Number.MAX_VALUE;
            var dist = center.x * x + center.y * y + center.z * z;

            for (var i = 0; i < length; i++) {
              var dot = verts[i * 3] * x + verts[i * 3 + 1] * y + verts[i * 3 + 2] * z;

              if (dot - dist > maxDot) {
                maxDot = dot - dist;
                index = i;
              }
            }

            dx = verts[index * 3];
            dy = verts[index * 3 + 1];
            dz = verts[index * 3 + 2];
          }

          point[0] = m.m00 * dx + m.m04 * dy + m.m08 * dz + m.m12;
          point[1] = m.m01 * dx + m.m05 * dy + m.m09 * dz + m.m13;
          point[2] = m.m02 * dx + m.m06 * dy + m.m10 * dz + m.m14;
          return point;
        };

        return Collision;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Common_mountain.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "66ecf/a77tNdKL8EiALjtJL", "Common_mountain", undefined);

      var Common_mountain = exports('default', function Common_mountain() {});
      Common_mountain.debug = false;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Common.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c95f0iECdRDG5VRtvKeIRqQ", "Common", undefined);

      var Common = exports('default', /*#__PURE__*/function () {
        function Common() {}

        Common.init = function init() {
          this.path = 0;
          this.coin = 0;
          this.score = 0;
          this.s = 20;
          this.speed = 50;
          this.isRun = false;
        };

        return Common;
      }());
      Common.clickWaitTime = 350;
      Common.isRun = false;
      Common.speed = 50;
      Common.s = 20;
      Common.path = 0;
      Common.coin = 0;
      Common.score = 0;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CommonExpand.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4a575+CaL1Cq75CnO/cZjG1", "CommonExpand", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dateUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "50576OKrRNKRpUNBDzGzqIj", "dateUtils", undefined);
      /**
       * Date工具类
       * @export
       * @class DateUtils
       * @extends {singtonClass}
       */


      var dateUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(dateUtils, _singtonClass);

        function dateUtils() {
          return _singtonClass.apply(this, arguments) || this;
        }

        var _proto = dateUtils.prototype;
        /**
         * 获取当前时间戳
         * @memberof dateUtils
         */

        _proto.getTime = function getTime() {
          var d = new Date();
          return d.getTime();
        }
        /**
         * 将秒数转为 00:00(分:秒) 格式输出
         * @private
         * @param {number} [t=0] 秒数
         * @return {*}  {string}
         * @memberof dateUtils
         */
        ;

        _proto.getFormatBySecond = function getFormatBySecond(t) {
          if (t === void 0) {
            t = 0;
          }

          if (t < 0) t = 0;
          var hourst = Math.floor(t / 3600);
          var minst = Math.floor((t - hourst * 3600) / 60);
          var secondt = Math.floor((t - hourst * 3600) % 60);
          var mins;
          var sens;

          if (minst == 0) {
            mins = "00";
          } else if (minst < 10) {
            mins = "0" + minst;
          } else {
            mins = "" + minst;
          }

          if (secondt == 0) {
            sens = "00";
          } else if (secondt < 10) {
            sens = "0" + secondt;
          } else {
            sens = "" + secondt;
          }

          return mins + ":" + sens;
        }
        /**
         * 获取当前是周几
         * ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
         */
        ;

        _proto.getDay = function getDay(timestamp) {
          var date = new Date(timestamp);
          return date.getDay();
        }
        /**
         * 判定两个时间是否是同一天
         */
        ;

        _proto.isSameDate = function isSameDate(timestamp1, timestamp2) {
          var date1 = new Date(timestamp1);
          var date2 = new Date(timestamp2);
          return date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate();
        }
        /**
         * 日期格式化
         */
        ;

        _proto.format = function format(d, fmt) {
          if (fmt === void 0) {
            fmt = "yyyy-MM-dd hh:mm:ss";
          }

          var o = {
            "M+": d.getMonth() + 1,
            //month
            "d+": d.getDate(),
            //day
            "h+": d.getHours(),
            //hour
            "m+": d.getMinutes(),
            //minute
            "s+": d.getSeconds(),
            //second
            "q+": Math.floor((d.getMonth() + 3) / 3),
            //quarter
            "S": d.getMilliseconds() //millisecond

          };
          if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));

          for (var k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));

          return fmt;
        }
        /**
         * 计算两个时间相差天数
         */
        ;

        _proto.dateDifference = function dateDifference(timestamp1, timestamp2) {
          var d_value = Math.abs(timestamp2 - timestamp1);
          return Math.ceil(d_value / (24 * 60 * 60 * 1000));
        };

        return dateUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Debug.ts", ['cc'], function (exports) {
  var cclegacy, VERSION, director, geometry, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      VERSION = module.VERSION;
      director = module.director;
      geometry = module.geometry;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b733b+Dgw1Fw4GN9fRaNzjI", "Debug", undefined);

      var Debug = exports('Debug', /*#__PURE__*/function () {
        function Debug() {}

        Debug.getRenderer = function getRenderer() {
          if (!this.renderer) {
            var num = parseInt(VERSION.charAt(2));

            if (num < 6) {
              // < 3.6 ver
              this.renderer = director.root.pipeline.geometryRenderer;
            } else {
              // >= 3.6 ver
              if (this.camera) this.camera.camera['initGeometryRenderer']();
              this.renderer = this.camera.camera["geometryRenderer"]; //director.root.scenes[0].cameras[0]["geometryRenderer"];
            }
          }

          return this.renderer;
        };

        Debug.addBox = function addBox(bound, world, color) {
          var renderer = this.getRenderer();

          if (renderer && renderer.addBoundingBox) {
            var cx = bound[0] + bound[3],
                cy = bound[1] + bound[4],
                cz = bound[2] + bound[5];
            var lx = bound[3] - bound[0],
                ly = bound[4] - bound[1],
                lz = bound[5] - bound[2];
            var aabb = geometry.AABB.create(cx * 0.5, cy * 0.5, cz * 0.5, lx * 0.5, ly * 0.5, lz * 0.5);
            renderer.addBoundingBox(aabb, color, true, true, true, true, world);
          }
        };

        Debug.addTriangle = function addTriangle(tris, world, color) {
          var renderer = this.getRenderer();

          if (renderer && renderer.addBoundingBox) {
            var v0 = new Vec3(tris[0], tris[1], tris[2]).transformMat4(world);
            var v1 = new Vec3(tris[3], tris[4], tris[5]).transformMat4(world);
            var v2 = new Vec3(tris[6], tris[7], tris[8]).transformMat4(world);
            renderer.addTriangle(v0, v1, v2, color);
          }
        };

        Debug.addLine = function addLine(v0, v1, world, color) {
          var renderer = this.getRenderer();

          if (renderer && renderer.addLine) {
            renderer.addLine(v0, v1, color);
          }
        };

        return Debug;
      }());
      Debug.renderer = null;
      Debug.camera = null;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/encodeUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e9312netVZCmaZXEMPeiWKB", "encodeUtils", undefined);
      /**
       * 
       * @export
       * @class AniUtils
       * @extends {singtonClass}
       */


      var encodeUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(encodeUtils, _singtonClass);

        function encodeUtils() {
          return _singtonClass.apply(this, arguments) || this;
        }

        var _proto = encodeUtils.prototype;

        _proto.aesDecrypt = function aesDecrypt(txt) {
          // decrypt
          var key = "0FldOs9PhBZqzEMK";
          var iv = "DFBZpId059PhEMoK";
          key = CryptoJS.enc.Utf8.parse(key); // 将 key 转为 128bit 格式

          iv = CryptoJS.enc.Utf8.parse(iv); // 将 iv 转为 128bit 格式

          var message = txt; // base64解码

          var decrypted = CryptoJS.AES.decrypt(message, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
          var decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
          return JSON.parse(decryptedStr);
        };

        return encodeUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/eventNameUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2f7f3r+ejtOIqHf19uAg4SJ", "eventNameUtils", undefined);
      /**
       *
       * 全局的事件发送监听中心 (发布订阅者模式)
       * 建议用 symbol 类型的事件名，防止事件冲突
       * @export
       * @class EventListenerUtils
       * @extends {SingtonClass}
       */


      var eventNameUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(eventNameUtils, _singtonClass);

        function eventNameUtils() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _singtonClass.call.apply(_singtonClass, [this].concat(args)) || this;
          /**
           * 打开一个弹窗
           * @memberof eventNameUtils
           */

          _this.OPEN_VIEW = Symbol();
          _this.CLOSE_VIEW = Symbol();
          _this.TOAST = Symbol();
          _this.OPEN_VIEW_AND_RUN_FUNC = Symbol();
          _this.SHOW_WAIT = Symbol();
          _this.HIDE_WAIT = Symbol();
          _this.COMPLETE_LOGIN = Symbol();
          /**@example 添加新的地块 */

          _this.addStep = Symbol();
          _this.event_view08_addScore = Symbol();
          _this.event_view08_gameEnd = Symbol();
          _this.event_view10_addScore = Symbol();
          _this.event_view10_gameEnd = Symbol();
          _this.event_updateRunViewUI = Symbol();
          /**
           * ====================================================
           * 游戏流程 通用游戏事件
           * ====================================================
          */

          _this.event_gameStart = Symbol();
          _this.event_gameEnd = Symbol();
          _this.event_gameInit = Symbol();
          _this.event_gameAgain = Symbol();
          _this.event_addScore = Symbol();
          return _this;
        }

        return eventNameUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/eventObjUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './singtonClass.ts', './gameEnum.ts'], function (exports) {
  var _inheritsLoose, cclegacy, app, singtonClass, gameEnum;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      app = module.default;
    }, function (module) {
      singtonClass = module.default;
    }, function (module) {
      gameEnum = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3509fLnAaVBKZ5NTp9EHI/7", "eventObjUtils", undefined);
      /**
       * 事件封装类
       * @export
       * @class eventListenerUtils
       * @extends {singtonClass}
       */


      var eventObjUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(eventObjUtils, _singtonClass);

        function eventObjUtils() {
          return _singtonClass.apply(this, arguments) || this;
        }

        var _proto = eventObjUtils.prototype;
        /**
         * 打开一个界面
         * @param {*} [view_name=gameEnum.view.NONE]
         * @param {*} [layer=gameEnum.layer.WINDOW_LAYER] 界面显示的层级
         * @param {...any[]} args 拓展参数
         * @memberof eventObjUtils
         */

        _proto.openView = function openView(view_name, layer) {
          var _app$event;

          if (view_name === void 0) {
            view_name = gameEnum.view.NONE;
          }

          if (layer === void 0) {
            layer = gameEnum.layer.WINDOW_LAYER;
          }

          for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          } // console.log("openView", view_name);


          (_app$event = app.event).emit.apply(_app$event, [app.eName.OPEN_VIEW, view_name, layer].concat(args));
        }
        /**
         * 打开一个界面
         * @param {*} [view_name=gameEnum.view.NONE]
         * @param {*} [layer=gameEnum.layer.WINDOW_LAYER] 界面显示的层级
         * @param {...any[]} args 拓展参数
         * @memberof eventObjUtils
         */
        ;

        _proto.openViewAsync = function openViewAsync(view_name, layer, cb) {
          var _app$event2;

          if (view_name === void 0) {
            view_name = gameEnum.view.NONE;
          }

          if (layer === void 0) {
            layer = gameEnum.layer.WINDOW_LAYER;
          }

          if (cb === void 0) {
            cb = null;
          }

          for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
            args[_key2 - 3] = arguments[_key2];
          } // console.log("openViewFunc", view_name);


          (_app$event2 = app.event).emit.apply(_app$event2, [app.eName.OPEN_VIEW_AND_RUN_FUNC, view_name, layer, cb].concat(args));
        }
        /**
         * 关闭一个页面
         * @param {*} [view_name=gameEnum.view.NONE]
         * @memberof eventObjUtils
         */
        ;

        _proto.closeView = function closeView(view_name) {
          if (view_name === void 0) {
            view_name = gameEnum.view.NONE;
          }

          app.event.emit(app.eName.CLOSE_VIEW, view_name);
        }
        /**
         * 显示一个toast 
         * @param {string} msg 内容
         * @memberof eventObjUtils
         */
        ;

        _proto.toast = function toast(msg, _t) {
          if (_t === void 0) {
            _t = 2;
          }

          if (!msg) {
            console.error("msg is null", msg);
            return;
          }

          app.event.emit(app.eName.TOAST, msg, _t);
        };

        _proto.showWait = function showWait() {// this.openView(gameEnum.view.WAIT_VIEW, gameEnum.layer.TOP_LAYER);
        };

        _proto.hideWait = function hideWait() {// this.closeView(gameEnum.view.WAIT_VIEW);
        };

        _proto.showViewWait = function showViewWait() {
          app.event.emit(app.eName.SHOW_WAIT);
        };

        _proto.hideViewWait = function hideViewWait() {
          app.event.emit(app.eName.HIDE_WAIT);
        };

        _proto.loginSuccess = function loginSuccess() {
          app.event.emit(app.eName.COMPLETE_LOGIN, true);
        };

        _proto.loginFail = function loginFail() {
          app.event.emit(app.eName.COMPLETE_LOGIN, false);
        };

        return eventObjUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/eventUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3824eSzDc9BrLlXoET6k435", "eventUtils", undefined);
      /**
       *
       * 全局的事件发送监听中心 (发布订阅者模式)
       * 建议用 symbol 类型的事件名，防止事件冲突
       * @export
       * @class EventListenerUtils
       * @extends {SingtonClass}
       */


      var event2Utils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(event2Utils, _singtonClass);

        function event2Utils() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _singtonClass.call.apply(_singtonClass, [this].concat(args)) || this;
          /**所有事件及其信息 */

          _this._allEventInfo = new Map();
          /**所有脚本下面的事件记录 */

          _this._allContextInfo = new Map();
          return _this;
        }

        var _proto = event2Utils.prototype;
        /**
         * 开始一个事件监听
         * @param {PropertyKey} eventName 事件名  GEventName里面的枚举类型
         * @param {Function} handler 事件响应函数
         * @param {object} context 当前脚本 this
         * @example
         * GEvent.on(GEventName.Test, this[GEventName.Test], this);
         */

        _proto.on = function on(eventName, handler, context) {
          //参数检查
          if (typeof handler != "function") {
            console.error("没有事件响应函数！");
            return;
          } //记录当前脚本的事件 方便移除当前脚本注册的所有事件


          if (!this._allContextInfo.has(context)) {
            this._allContextInfo.set(context, []);
          }

          this._allContextInfo.get(context).push(eventName); //保存事件信息


          if (!this._allEventInfo.has(eventName)) {
            this._allEventInfo.set(eventName, new Map());
          }

          this._allEventInfo.get(eventName).set(context, {
            handler: handler,
            context: context
          });
        }
        /**
         * 监听一个事件一次
         * @param {PropertyKey} eventName 事件名  GEventName里面的枚举类型
         * @param {Function} handler 事件响应函数
         * @param {object} context 当前脚本 this
         * @example
         * GEvent.once(GEventName.Test, this[GEventName.Test], this);
         */
        ;

        _proto.once = function once(eventName, handler, context) {
          var _this2 = this; //监听事件后马上移除此监听


          var handlerRemove = function handlerRemove() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            handler.call.apply(handler, [context].concat(args));

            _this2.off(eventName, context);
          };

          this.on(eventName, handlerRemove, context);
        }
        /**
         * 用数组的形式开始多个事件监听（推荐），事件名跟回调函数名一致
         * @param {PropertyKey[]} eventNameArray 事件名  GEventName里面的枚举类型数组
         * @param {object} context 当前脚本 this
         * @memberof Event2Utils
         * GEvent.onByArray([GEventName.Test1, GEventName.Test.Test2, ], this);
         */
        ;

        _proto.onByArray = function onByArray(eventNameArray, context) {
          for (var _iterator = _createForOfIteratorHelperLoose(eventNameArray), _step; !(_step = _iterator()).done;) {
            var one = _step.value;
            this.on(one, context[one], context);
          }
        }
        /**
         * 用数组的形式开始多个事件监听（推荐），事件名跟回调函数名一致
         * - 并且马上调用一次回调函数，调用时，传入一个 true 作为第一个参数的值（初始化调用）
         * @param {PropertyKey[]} eventNameArray 事件名  GEventName里面的枚举类型数组
         * @param {object} context 当前脚本 this
         * @example
         * GEvent.onByArrayAndCall([GEventName.Test1, GEventName.Test.Test2, ], this);
         */
        ;

        _proto.onByArrayAndCall = function onByArrayAndCall(eventNameArray, context) {
          for (var _iterator2 = _createForOfIteratorHelperLoose(eventNameArray), _step2; !(_step2 = _iterator2()).done;) {
            var one = _step2.value;
            var callBack = context[one];
            this.on(one, callBack, context); //立马调用一次回调函数

            callBack.call(context, true);
          }
        }
        /**关闭一个事件监听
         * @param {PropertyKey} eventName 事件名  GEventName里面的枚举类型
         * @param {object} context 当前脚本 this
         * @example
         * GEvent.off(GEventName.Test, this);
         */
        ;

        _proto.off = function off(eventName, context) {
          if (!this._allEventInfo.has(eventName)) {
            console.warn("事件已经关闭监听或从未开始监听！");
          }

          this._allEventInfo.get(eventName)["delete"](context);
        }
        /**关闭当前脚本所有事件监听（推荐）
        * @param {object} context 当前脚本 this   
        * @example 
          onDestroy() {
              GEvent.offAll(this);
          }
        */
        ;

        _proto.offAll = function offAll(context) {
          if (!this._allContextInfo.has(context)) ;

          var contextInfo = this._allContextInfo.get(context);

          if (Array.isArray(contextInfo)) {
            for (var _iterator3 = _createForOfIteratorHelperLoose(contextInfo), _step3; !(_step3 = _iterator3()).done;) {
              var one = _step3.value;
              this.off(one, context);
            }
          }

          this._allContextInfo["delete"](context);
        }
        /**
         * 发送事件
         * 参数个数不限，第一个参数为事件名，其余为传递给响应函数的参数
         * @param {PropertyKey} eventName 事件名  GEventName里面的枚举类型
         * @param args 传递给响应函数的参数集，可以为空
         * @example
         * GEvent.emit(GEventName.Test, "test");
         */
        ;

        _proto.emit = function emit(eventName) {
          for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
          }

          var eventInfo = this._allEventInfo.get(eventName);

          if (eventInfo) {
            eventInfo.forEach(function (data) {
              var _data$handler;

              return (_data$handler = data.handler).call.apply(_data$handler, [data.context].concat(args));
            });
          }
        };

        return event2Utils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FreeCamera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, Vec3, Quat, input, Input, game, KeyCode, v2, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      Quat = module.Quat;
      input = module.input;
      Input = module.Input;
      game = module.game;
      KeyCode = module.KeyCode;
      v2 = module.v2;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "1c2cbPbALtO/bSGR8kDSftp", "FreeCamera", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var v2_1 = new Vec2();
      var v2_2 = new Vec2();
      var v3_1 = new Vec3();
      var qt_1 = new Quat();
      var forward = new Vec3();
      var right = new Vec3();
      var FreeCamera = exports('FreeCamera', (_dec = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FreeCamera, _Component);

        function FreeCamera() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "moveSpeed", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "moveSpeedShiftScale", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "damp", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rotateSpeed", _descriptor4, _assertThisInitialized(_this));

          _this._euler = new Vec3();
          _this._velocity = new Vec3();
          _this._position = new Vec3();
          _this._speedScale = 1;
          _this._eulerP = new Vec3();
          _this.keys = []; // x  -1 left, +1 right   y -1 backword, +1 forward

          _this.moveDir = new Vec3();
          _this.key2dirMap = null;
          return _this;
        }

        var _proto = FreeCamera.prototype;

        _proto.onEnable = function onEnable() {
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          Vec3.copy(this._euler, this.node.eulerAngles);
          Vec3.copy(this._position, this.node.getPosition());
          Vec3.copy(this._eulerP, this.node.eulerAngles);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        };

        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        };

        _proto.update = function update(dt) {
          var t = Math.min(dt / this.damp, 1); // position

          Vec3.transformQuat(v3_1, this._velocity, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this._position, v3_1, this.moveSpeed * this._speedScale);
          Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
          this.node.setPosition(v3_1);

          if (this.moveDir.lengthSqr()) {
            Vec3.transformQuat(forward, Vec3.FORWARD, this.node.rotation);
            forward.normalize();
            Vec3.cross(right, forward, Vec3.UP);
            right.normalize();
            Vec3.scaleAndAdd(this._position, this._position, forward, this.moveSpeed * this._speedScale * this.moveDir.z);
            Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
            this.node.setPosition(v3_1);
            Vec3.scaleAndAdd(this._position, this._position, right, this.moveSpeed * this._speedScale * this.moveDir.x);
            Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
            this.node.setPosition(v3_1);
            Vec3.scaleAndAdd(this._position, this._position, Vec3.UP, this.moveSpeed * this._speedScale * this.moveDir.y);
            Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
            this.node.setPosition(v3_1);
          } // rotation


          Quat.fromEuler(qt_1, this._eulerP.x, this._eulerP.y, this._eulerP.z);
          Quat.slerp(qt_1, this.node.rotation, qt_1, t);
          this.node.setWorldRotationFromEuler(this._eulerP.x, this._eulerP.y, this._eulerP.z);
        };

        _proto.onMouseWheel = function onMouseWheel(e) {
          var delta = -e.getScrollY() * this.moveSpeed * 0.1; // delta is positive when scroll down

          Vec3.transformQuat(v3_1, Vec3.UNIT_Z, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this.node.position, v3_1, delta);
        };

        _proto.onTouchStart = function onTouchStart(e) {
          if (game.canvas.requestPointerLock) {
            game.canvas.requestPointerLock();
          }
        };

        _proto.onTouchMove = function onTouchMove(e) {
          e.getStartLocation(v2_1);

          if (v2_1.x > game.canvas.width * 0.4) {
            // rotation
            e.getDelta(v2_2);
            this._eulerP.y -= v2_2.x * this.rotateSpeed * 0.1;
            this._eulerP.x += v2_2.y * this.rotateSpeed * 0.1;
          } else {
            // position
            e.getDelta(v2_2);
            this._eulerP.y -= v2_2.x * this.rotateSpeed * 0.1;
            this._eulerP.x += v2_2.y * this.rotateSpeed * 0.1;
          }
        };

        _proto.onTouchEnd = function onTouchEnd(e) {
          if (document.exitPointerLock) {
            document.exitPointerLock();
          }

          e.getStartLocation(v2_1);

          if (v2_1.x < game.canvas.width * 0.4) {
            // position
            this._velocity.x = 0;
            this._velocity.z = 0;
          }
        };

        _proto.onKeyDown = function onKeyDown(event) {
          var keyCode = event.keyCode;

          if (keyCode == KeyCode.KEY_A || keyCode == KeyCode.KEY_S || keyCode == KeyCode.KEY_D || keyCode == KeyCode.KEY_W) {
            if (this.keys.indexOf(keyCode) == -1) {
              this.keys.push(keyCode);
              this.updateDirection();
            }
          }

          if (keyCode == KeyCode.KEY_Q) {
            this.moveDir.y = -1;
          } else if (keyCode == KeyCode.KEY_E) {
            this.moveDir.y = 1;
          }
        };

        _proto.onKeyUp = function onKeyUp(event) {
          var keyCode = event.keyCode;

          if (keyCode == KeyCode.KEY_A || keyCode == KeyCode.KEY_S || keyCode == KeyCode.KEY_D || keyCode == KeyCode.KEY_W) {
            var index = this.keys.indexOf(keyCode);

            if (index != -1) {
              this.keys.splice(index, 1);
              this.updateDirection();
            }
          }

          if (keyCode == KeyCode.KEY_Q || keyCode == KeyCode.KEY_E) {
            this.moveDir.y = 0;
          }
        };

        _proto.updateDirection = function updateDirection() {
          if (this.key2dirMap == null) {
            this.key2dirMap = {};
            this.key2dirMap[0] = v2(0, 0);
            this.key2dirMap[KeyCode.KEY_A] = v2(-1, 0);
            this.key2dirMap[KeyCode.KEY_D] = v2(1, 0);
            this.key2dirMap[KeyCode.KEY_W] = v2(0, 1);
            this.key2dirMap[KeyCode.KEY_S] = v2(0, -1);
            this.key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_W] = this.key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_A] = v2(-1, 1);
            this.key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_W] = this.key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_D] = v2(1, 1);
            this.key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_S] = this.key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_A] = v2(-1, -1);
            this.key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_S] = this.key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_D] = v2(1, -1);
            this.key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_D] = this.key2dirMap[KeyCode.KEY_D];
            this.key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_A] = this.key2dirMap[KeyCode.KEY_A];
            this.key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_S] = this.key2dirMap[KeyCode.KEY_S];
            this.key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_W] = this.key2dirMap[KeyCode.KEY_W];
          }

          var keyCode0 = this.keys[this.keys.length - 1] || 0;
          var keyCode1 = this.keys[this.keys.length - 2] || 0;
          var dir = this.key2dirMap[keyCode1 * 1000 + keyCode0];
          this.moveDir.x = dir.x;
          this.moveDir.z = dir.y;
        };

        return FreeCamera;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeedShiftScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/gameEnum.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d0b506LzS1CXKneBMs6Ihci", "gameEnum", undefined);

      var enumView = /*#__PURE__*/function (enumView) {
        enumView["NONE"] = "None";
        enumView["TOAST_VIEW"] = "TOAST_VIEW";
        enumView["HomeScene"] = "HomeScene";
        enumView["DemoView"] = "DemoView";
        enumView["TestView"] = "TestView";
        enumView["StartView"] = "StartView";
        enumView["GameResView"] = "GameResView";
        return enumView;
      }(enumView || {});

      var enumIsRemoteView = /*#__PURE__*/function (enumIsRemoteView) {
        enumIsRemoteView[enumIsRemoteView["PrizeView"] = 1] = "PrizeView";
        enumIsRemoteView[enumIsRemoteView["PrizeInfoView"] = 1] = "PrizeInfoView";
        return enumIsRemoteView;
      }(enumIsRemoteView || {});

      var enumEffect = /*#__PURE__*/function (enumEffect) {
        enumEffect[enumEffect["NORMAL"] = 1] = "NORMAL";
        enumEffect[enumEffect["BG_SCALE"] = 2] = "BG_SCALE";
        enumEffect[enumEffect["WIDGET_BUTTOM_SHOW"] = 3] = "WIDGET_BUTTOM_SHOW";
        enumEffect[enumEffect["WIDGET_LEFT_SHOW"] = 4] = "WIDGET_LEFT_SHOW";
        enumEffect[enumEffect["BG_SCALE1"] = 5] = "BG_SCALE1";
        enumEffect[enumEffect["FADE_OUT"] = 6] = "FADE_OUT";
        return enumEffect;
      }(enumEffect || {});

      var enumLayer = /*#__PURE__*/function (enumLayer) {
        enumLayer["SCENE_LAYER"] = "sceneLayer";
        enumLayer["WINDOW_LAYER"] = "windowLayer";
        enumLayer["TOP_LAYER"] = "topLayer";
        enumLayer["EFFECT_LAYER"] = "effectLayer";
        return enumLayer;
      }(enumLayer || {});

      var gameEnum = exports('default', function gameEnum() {});
      gameEnum.view = enumView;
      gameEnum.isRemoteView = enumIsRemoteView;
      gameEnum.layer = enumLayer;
      gameEnum.viewEffect = enumEffect;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameResView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './BaseView.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, app, BaseView, Common;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
    }, function (module) {
      app = module.default;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      Common = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "7372dTFOzJKrZ54k6LwT9s5", "GameResView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameResView = exports('GameResView', (_dec = ccclass('GameResView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(GameResView, _BaseView);

        function GameResView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "btnAgain", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnHome", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lblCoin", _descriptor3, _assertThisInitialized(_this));

          _this.clicktime = 0;
          return _this;
        }

        var _proto = GameResView.prototype;

        _proto.show = function show() {
          var _BaseView$prototype$s;

          this.arr_btn = [this.btnAgain, this.btnHome];
          this.arr_event = [];

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          (_BaseView$prototype$s = _BaseView.prototype.show).call.apply(_BaseView$prototype$s, [this].concat(args));

          this.lblCoin.string = args[2];
        };

        _proto.click = function click(e) {
          var d = new Date().getTime();

          if (d - this.clicktime < Common.clickWaitTime) {
            return;
          }

          this.clicktime = d;

          switch (e.target) {
            case this.btnHome:
              app.event.emit(app.eName.event_gameInit);
              this.closeView();
              break;

            case this.btnAgain:
              app.event.emit(app.eName.event_gameAgain);
              this.closeView();
              break;
          }
        };

        return GameResView;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnAgain", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnHome", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblCoin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GirlModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, SkeletalAnimation, Node, Camera, CapsuleCollider, tween, v3, Component, app, Common;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SkeletalAnimation = module.SkeletalAnimation;
      Node = module.Node;
      Camera = module.Camera;
      CapsuleCollider = module.CapsuleCollider;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      app = module.default;
    }, function (module) {
      Common = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "7761anXtWBNqIO5ztMrHRfJ", "GirlModel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GirlModel = exports('GirlModel', (_dec = ccclass('GirlModel'), _dec2 = property(SkeletalAnimation), _dec3 = property(Node), _dec4 = property(Camera), _dec5 = property(Camera), _dec6 = property(Camera), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GirlModel, _Component);

        function GirlModel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "anim", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeFbx", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mainCamera", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraBegin", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraEnd", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = GirlModel.prototype;

        _proto.playAnim = function playAnim(name) {
          this.anim.play(name);
        };

        _proto.start = function start() {
          console.log("start");
          var collider = this.node.getComponent(CapsuleCollider);
          collider.on('onTriggerStay', this.onTriggerStay, this);
        } // onTriggerStay() {
        ;

        _proto.onTriggerStay = function onTriggerStay(e) {
          var type = e.type,
              selfCollider = e.selfCollider,
              otherCollider = e.otherCollider;
          app.pool.setNode(otherCollider.node);
          Common.coin++;
          app.event.emit(app.eName.event_updateRunViewUI);
        };

        _proto.run = function run(_speed) {
          if (_speed === void 0) {
            _speed = 1;
          }

          this.anim.play("run");
          /**
          * ====================================================
          * 获取animtion state 修改播放speed
          * ====================================================
          */

          var state = this.anim.getState('run');
          state.speed = _speed;
        };

        _proto.stand = function stand() {
          this.anim.play("idle01"); // this.
        };

        _proto.win = function win() {
          this.anim.play("jump02"); // this.node.eulerAngles.y += 180;
          // this.node.worl
          // this.node.setRotationFromEuler(0, this.node.eulerAngles.y + 180, 0);

          tween(this.nodeFbx).to(0.2, {
            eulerAngles: v3(0, 180, 0)
          }).start();
          var _t = 0.7;
          var target_position = this.cameraEnd.node.worldPosition;
          var target_eulerAngles = this.cameraEnd.node.eulerAngles;
          tween(this.mainCamera.node).to(_t, {
            worldPosition: target_position
          }).start();
          var v1 = this.mainCamera.node.eulerAngles;
          var v2 = target_eulerAngles;
          this.autoEulerAngles(v1, v2, _t); // tween(this.mainCamera.node).to(_t, { eulerAngles: target_eulerAngles }).start();
        };

        _proto.init = function init() {
          this.mainCamera.node.position = this.cameraBegin.node.position;
          this.mainCamera.node.eulerAngles = this.cameraBegin.node.eulerAngles;
          this.nodeFbx.eulerAngles = v3(0, 0, 0);
          this.node.setPosition(0, 0, 20);
          this.node.eulerAngles = v3(0, 0, 0);
        }
        /**
         *
         * @private
         * @param {Vec3} v1 起点
         * @param {Vec3} v2 终点
         * @param {number} _t 总时长
         * @memberof GirlModel
         */
        ;

        _proto.autoEulerAngles = /*#__PURE__*/function () {
          var _autoEulerAngles = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(v1, v2, _t) {
            var _this2 = this;

            var _x1, _x2, vv3, obj;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // let dirAngle = app.vector.dirAngle(v1, v2);
                  // console.log(dirAngle);
                  _x1 = v1.x;
                  _x2 = v2.x;
                  vv3 = v3(_x1, 180, 0);
                  obj = {
                    x: _x1
                  };
                  tween(obj).to(_t, {
                    x: _x2
                  }, {
                    progress: function progress(s, e, c, t) {
                      var initValue = s; //初始值

                      var targetValue = e; //目标值

                      var temp = targetValue - initValue;
                      vv3.x = temp * t + initValue;
                      _this2.mainCamera.node.eulerAngles = vv3;
                      return 0;
                    }
                  }).start();
                // for (let i = 0; i < _t1; i++) {
                //     // let v3 = app.vector.rotateTo(v1.clone(), v2.clone(), dirAngle / _t1 * (i + 1));
                //     let _x = _x1 + x_difference * (i + 1);
                //     let vv3 = v3(_x, 180, 0);
                //     this.mainCamera.node.eulerAngles = vv3;
                //     console.warn(vv3);
                //     await app.promise.sleep(_t / _t1);
                // }

                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));

          function autoEulerAngles(_x, _x3, _x4) {
            return _autoEulerAngles.apply(this, arguments);
          }

          return autoEulerAngles;
        }()
        /**
        * ====================================================
        * 测试代码
        * ====================================================
        */
        ;

        _proto.test = function test() {
          console.log(this.anim.clips[0].speed);
        };

        return GirlModel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeFbx", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cameraBegin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cameraEnd", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HomeItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ListItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, ListItem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
    }, function (module) {
      ListItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "622f1tb57BB4ISMWCChBRsq", "HomeItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HomeItem = exports('HomeItem', (_dec = ccclass('HomeItem'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_ListItem) {
        _inheritsLoose(HomeItem, _ListItem);

        function HomeItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ListItem.call.apply(_ListItem, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "lblName", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lblIndex", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = HomeItem.prototype;
        /**数据发生变化 子类重写*/

        _proto.updateItem = function updateItem() {
          this.lblName.string = this.data.name;
          this.lblIndex.string = this.data.index.toString();
        };

        return HomeItem;
      }(ListItem), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblIndex", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HomeScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './BaseView.ts', './gameEnum.ts', './List.ts', './T_Demo.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, Camera, Input, input, RenderTexture, view, UITransform, gfx, director, app, BaseView, gameEnum, List, T_Demo;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Sprite = module.Sprite;
      Camera = module.Camera;
      Input = module.Input;
      input = module.input;
      RenderTexture = module.RenderTexture;
      view = module.view;
      UITransform = module.UITransform;
      gfx = module.gfx;
      director = module.director;
    }, function (module) {
      app = module.default;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      gameEnum = module.default;
    }, function (module) {
      List = module.default;
    }, function (module) {
      T_Demo = module.T_Demo;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

      cclegacy._RF.push({}, "1268eIT2dFM15onuPVc9woC", "HomeScene", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HomeScene = exports('HomeScene', (_dec = ccclass('HomeScene'), _dec2 = property(T_Demo), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(List), _dec6 = property(List), _dec7 = property(List), _dec8 = property(Node), _dec9 = property(Sprite), _dec10 = property(Camera), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(HomeScene, _BaseView);

        function HomeScene() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "role", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btn_1", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btn_2", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "listV", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "listH", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "listG", _descriptor6, _assertThisInitialized(_this));

          _this._start_x = 0;
          /**
          * ====================================================
          * 截图功能
          * ====================================================
          */

          _initializerDefineProperty(_this, "targetNode", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "targetSprite", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "copyCamera", _descriptor9, _assertThisInitialized(_this));

          _this._canvas = null;
          _this._buffer = null;
          _this.renderTex = null;
          return _this;
        }

        var _proto = HomeScene.prototype;

        _proto.start = function start() {
          window["hhh"] = this;
          window["app"] = app;
          this.show(gameEnum.view.HomeScene);
        };

        _proto.show = function show() {
          var _BaseView$prototype$s;

          this.arr_btn = [this.btn_1, this.btn_2];

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          (_BaseView$prototype$s = _BaseView.prototype.show).call.apply(_BaseView$prototype$s, [this].concat(args));

          var arr = [{
            name: "贵州省安顺市西秀区宋旗镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "贵州省安顺市西秀区宋旗镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "贵州省安顺市西秀区宋旗镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "贵州省安顺市西秀区宋旗镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "贵州省安顺市西秀区宋旗镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }];

          for (var i = 0; i < arr.length; i++) {
            arr[i]["index"] = i;
          }

          this.listV.refreshData(arr);
          this.listH.refreshData(arr);
          this.listG.refreshData(arr);
        };

        _proto.click = function click(e) {
          switch (e.type) {
            case Input.EventType.TOUCH_START:
              this._start_x = e.getLocationInView().x;
              input.on(Input.EventType.TOUCH_MOVE, this.click, this);
              break;

            case Input.EventType.TOUCH_MOVE:
              var _x = e.getLocationInView().x;

              var _temp = _x - this._start_x;

              if (Math.abs(_temp) > 40) {
                input.off(Input.EventType.TOUCH_MOVE, this.click, this);

                if (_temp > 0) {
                  this.role._path--;
                  this.role._path = Math.max(this.role._path, -1);
                } else {
                  this.role._path++;
                  this.role._path = Math.min(this.role._path, 1);
                }
              }

              break;
          }

          switch (e.target) {
            case this.btn_1:
              // console.log(1);
              this.capture();
              break;

            case this.btn_2:
              // console.log(2);
              app.eventObj.toast("asdasdasdasd");
              app.eventObj.openView(gameEnum.view.TestView);
              break;
          }
        };

        _proto.onLoad = function onLoad() {
          this.renderTex = new RenderTexture();

          var _w = Math.floor(view.getVisibleSize().width);

          var _h = Math.floor(view.getVisibleSize().height);

          this.renderTex.reset({
            width: _w,
            height: _h
          });
          this.copyCamera.targetTexture = this.renderTex;
        } // 截图
        ;

        _proto.capture = function capture() {
          var width = this.targetNode.getComponent(UITransform).width;
          var height = this.targetNode.getComponent(UITransform).height;
          var worldPos = this.targetNode.getWorldPosition();
          var texBuffers = [];
          texBuffers[0] = new Uint8Array(width * height * 4);
          var region = new gfx.BufferTextureCopy();
          region.texOffset.x = Math.round(worldPos.x);
          region.texOffset.y = Math.round(worldPos.y);
          region.texExtent.width = width;
          region.texExtent.height = height;
          director.root.device.copyTextureToBuffers(this.renderTex.getGFXTexture(), texBuffers, [region]);
          this._buffer = texBuffers[0];

          if (!this._canvas) {
            this._canvas = document.createElement('canvas');
            this._canvas.width = width;
            this._canvas.height = height;
          } else {
            this.clearCanvas();
          }

          var ctx = this._canvas.getContext('2d');

          var rowBytes = width * 4;

          for (var row = 0; row < height; row++) {
            var sRow = height - 1 - row;
            var imageData = ctx.createImageData(width, 1);
            var start = sRow * width * 4;

            for (var i = 0; i < rowBytes; i++) {
              imageData.data[i] = this._buffer[start + i];
            }

            ctx.putImageData(imageData, 0, row);
          } // this.showImage(width, height);
          // let base64 = this._canvas.toDataURL("image/png", 0.1);


          var base64 = this._canvas.toDataURL("image/jpeg", 0.1);

          this.showBase64(base64);
        };

        _proto.showBase64 = function showBase64(base64) {
          app.img.setBase64ToSpriteFrame1(this.targetSprite, base64);
        };

        _proto.clearCanvas = function clearCanvas() {
          var ctx = this._canvas.getContext('2d');

          ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        };

        return HomeScene;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "role", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btn_1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btn_2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "listV", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "listH", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "listG", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "targetSprite", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "copyCamera", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/httpUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, js, app, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
    }, function (module) {
      app = module.default;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "21ffdcTuCVNIJEQ8TfKnjcV", "httpUtils", undefined);

      var eHttpCode = exports('eHttpCode', /*#__PURE__*/function (eHttpCode) {
        eHttpCode[eHttpCode["Invalid"] = -1] = "Invalid";
        eHttpCode[eHttpCode["Success"] = 0] = "Success";
        eHttpCode[eHttpCode["Timeout"] = 1] = "Timeout";
        eHttpCode[eHttpCode["Error"] = 2] = "Error";
        return eHttpCode;
      }({})); // XMLHttpRequest withCredentials

      var CRequest = exports('CRequest', /*#__PURE__*/function () {
        function CRequest() {}

        var _proto = CRequest.prototype;

        _proto.sendRequest = function sendRequest(method, url, params, func, thisObj, headers) {
          var xhr = new XMLHttpRequest();
          xhr.responseType = "text";

          var clearfunc = function clearfunc() {
            xhr.onreadystatechange = null;
            xhr.ontimeout = null;
            xhr.onerror = null;
            xhr.onabort = null;
          };

          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
              var code = eHttpCode.Success;
              var data = null;
              var response = xhr.responseText;

              try {
                data = JSON.parse(response);
              } catch (e) {
                code = eHttpCode.Error;
                data = {};
              }

              if (func && thisObj) {
                func.apply(thisObj, [data, code]);
              }

              clearfunc();
            }
          };

          xhr.ontimeout = function () {
            if (func && thisObj) {
              func.apply(thisObj, [null, eHttpCode.Timeout]);
            }

            clearfunc();
          };

          xhr.onerror = function () {
            if (func && thisObj) {
              func.apply(thisObj, [null, eHttpCode.Error]);
            }

            clearfunc();
          };

          xhr.onabort = function () {
            clearfunc();
          };

          xhr.open(method, url, true);
          xhr.timeout = 5000;

          if (headers) {
            var ks = Object.keys(headers);

            for (var _i = 0, _ks = ks; _i < _ks.length; _i++) {
              var k = _ks[_i];
              xhr.setRequestHeader(k, headers[k]);
            }
          }
          /**
          * ====================================================
          * 必要设置
          * ====================================================
          */


          var tagToken = document.getElementsByTagName("meta")["csrf-token"];
          var tagAuth = document.getElementsByTagName("meta")["Authorization"];
          xhr.withCredentials = true;
          xhr["xsrfCookieName"] = "XSRF-TOKEN";
          xhr["xsrfHeaderName"] = "X-XSRF-TOKEN";
          xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
          xhr.setRequestHeader("X-CSRF-TOKEN", tagToken ? tagToken.content : "");
          xhr.setRequestHeader("Authorization", "Bearer " + (tagAuth ? tagAuth.content : "")); // if (cc.sys.isNative) {
          //     xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
          // }

          xhr.setRequestHeader("Content-Type", "application/json"); // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

          xhr.send(params);
        };

        return CRequest;
      }());
      /**
       * http请求
       * @export
       * @class imgUrils
       * @extends {singtonClass}
       */

      var httpUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(httpUtils, _singtonClass);

        function httpUtils() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _singtonClass.call.apply(_singtonClass, [this].concat(args)) || this;
          _this.map_request = new Map();
          return _this;
        }

        var _proto2 = httpUtils.prototype;

        _proto2.request = function request(method, url, params, func, thisObj, headers) {
          var item = new CRequest();
          item.sendRequest(method, url, params, func, thisObj, headers);
        };

        _proto2.get = function get(url, params, func, thisObj, headers) {
          if (params) {
            if (url.indexOf("?") == -1) {
              url += "?";
            }

            var szparam = "";
            var ks = Object.keys(params);

            for (var i = 0; i < ks.length; ++i) {
              szparam += "&" + ks[i] + "=" + params[ks[i]];
            }

            url += encodeURI(szparam);
          }

          this.request("GET", url, null, func, thisObj, headers);
        };

        _proto2.post = function post(url, params, func, thisObj, headers) {
          this.request("POST", url, params, func, thisObj, headers);
        };

        _proto2.asyncGet = function asyncGet(url, params, headers) {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            if (params) {
              if (url.indexOf("?") == -1) {
                url += "?";
              }

              url += app.common.paramObjToString(params);
            }

            _this2.request("GET", url, null, function (resp, code) {
              resolve({
                resp: resp,
                code: code
              });
            }, _this2, headers);
          });
        };

        _proto2.asyncPost = function asyncPost(url, params, headers) {
          var _this3 = this; // params = app.common.paramObjToString(params);


          params = JSON.stringify(params);
          return new Promise(function (resolve, reject) {
            _this3.request("POST", encodeURI(url), params, function (resp, code) {
              resolve({
                resp: resp,
                code: code
              }); // console.log("post", url.split("http")[1]);
              // console.log(resp);
              // if (code === 0 && resp.code == 200) {
              //     resolve({ resp });
              // } else {
              //     reject({ resp, code });
              // }
            }, _this3, headers);
          });
        }
        /**
         * 获取一个请求的单例
         * @template T
         * @param {new () => T} cls
         * @return {*}  {T}
         * @memberof requestUtils
         */
        ;

        _proto2.getXHR = function getXHR(cls) {
          var reqName = js.getClassName(cls);

          if (this.map_request.has(reqName) == false) {
            var obj = new cls();
            this.map_request.set(reqName, obj);
          }

          return this.map_request.get(reqName);
        };

        return httpUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/imgUrils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, Texture2D, SpriteFrame, ImageAsset, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      Texture2D = module.Texture2D;
      SpriteFrame = module.SpriteFrame;
      ImageAsset = module.ImageAsset;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "59670iTeeJPg72ZCKirU3Y1", "imgUrils", undefined);
      /**
       * img 处理
       * @export
       * @class imgUrils
       * @extends {singtonClass}
       */


      var imgUrils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(imgUrils, _singtonClass);

        function imgUrils() {
          return _singtonClass.apply(this, arguments) || this;
        }

        var _proto = imgUrils.prototype;
        /**
         * 将一个base64数据传入一个sprite
         * @param {Sprite} img
         * @param {string} base64
         * @memberof imgUrils
         */

        _proto.setBase64 = function setBase64(img, base64) {
          if (img) {
            img.spriteFrame = this.base64ToSpriteFrame(base64);
          }
        }
        /**
         * base64转spriteFrame
         * @param {string} base64
         * @return {*}  {SpriteFrame}
         * @memberof imgUrils
         */
        ;

        _proto.base64ToSpriteFrame = function base64ToSpriteFrame(base64) {
          var image = new Image();
          image.src = base64;
          var tex = new Texture2D();
          tex.uploadData(image);

          var _s = new SpriteFrame();

          _s.texture = tex;
          return _s;
        };

        _proto.setBase64ToSpriteFrame1 = function setBase64ToSpriteFrame1(img, base64) {
          var image = new Image();
          image.src = base64; // base 64是string，看后端返回是二进制，是否带头data:image/png;base64, 不带要手动添加

          image.onload = function () {
            var texture = new Texture2D();
            texture.image = new ImageAsset(image);

            var _frame = new SpriteFrame();

            _frame.texture = texture; // 获取节点的容器

            img.spriteFrame = _frame;
          };
        }
        /**
         * 透明点击
         * @memberof imgUrils
         */
        ;

        _proto.ShapeTouch = /*#__PURE__*/function () {
          var _ShapeTouch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(src, x, y) {
            var apiIndexInfoPromise, res;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  apiIndexInfoPromise = function apiIndexInfoPromise() {
                    return new Promise(function (resolve, reject) {
                      var img = new Image();

                      img.onload = function () {
                        var canvas = document.createElement('canvas');
                        var ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);
                        var imgData = ctx.getImageData(x, img.height - y, 1, 1);
                        var alpha = imgData.data[3];
                        resolve({
                          touch: alpha > 0,
                          alpha: alpha
                        });
                      };

                      img.onerror = function () {
                        resolve({
                          touch: false,
                          alpha: 0
                        });
                      };

                      img.src = src;
                    });
                  };

                  _context.next = 3;
                  return apiIndexInfoPromise();

                case 3:
                  res = _context.sent;
                  return _context.abrupt("return", res);

                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));

          function ShapeTouch(_x, _x2, _x3) {
            return _ShapeTouch.apply(this, arguments);
          }

          return ShapeTouch;
        }();

        return imgUrils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InterfaceUrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7d470xO0CpEHI94JaVdchaI", "InterfaceUrl", undefined);
      /**
       * http协议地址
       * @export
       * @class interfaceUrl
       */


      var InterfaceUrl = exports('default', /*#__PURE__*/function () {
        function InterfaceUrl() {}

        InterfaceUrl.getUrl = function getUrl(apiName) {
          return this.url + apiName + this.pid + this.sn;
        }
        /**
         * 获取活动详情 GET
         * @static
         * @type {string}
         * @memberof InterfaceUrl
         */
        // https://hdbch.kerlala.com/advertApi/getMultAdvert?advert_tag=HDTLJSYFOOTDT01&sn=jmX797Pd&source_platform=10
        ;

        _createClass(InterfaceUrl, null, [{
          key: "url",
          get: function get() {
            var hostname = ""; //线上测试

            if (location.origin.includes("localhost") == true || location.origin.includes("192.168.2.33") == true) {
              hostname = "https://hddev.kerlala.com"; //本地测试
              // hostname = "https://hdbch.kerlala.com";//线上测试
            } else {
              hostname = location.origin; //本地测试
            }

            return hostname;
          } // https://hdbch.kerlala.com/a/21/kZMXDgmW

        }, {
          key: "config",
          get: function get() {
            var obj = {
              pid: "/70",
              sn: "/AZGyg6P9"
            };
            var dmspConf = window["dmspConf"];

            if (dmspConf) {
              obj = {
                pid: "/" + dmspConf.pid,
                sn: "/" + dmspConf.sn
              };
            }

            return obj;
          }
        }, {
          key: "pid",
          get: function get() {
            return this.config.pid;
          }
        }, {
          key: "sn",
          get: function get() {
            return this.config.sn;
          }
        }]);

        return InterfaceUrl;
      }());
      InterfaceUrl.debug = true;
      InterfaceUrl.socketUrl = 'ws://xxx';
      InterfaceUrl.getActivityInfo = "/Common/activity/getActivityInfo";
      /**
       * 获取活动用户信息 GET
       * @static
       * @type {string}
       * @memberof InterfaceUrl
       */

      InterfaceUrl.getUserInfo = "/Common/activity/getUserInfo";
      /**
       * 获取活动广告列表 GET
       * @static
       * @type {string}
       * @memberof InterfaceUrl
       */

      InterfaceUrl.getAdvertList = "/Common/activity/getAdvertList";
      /**
       * 剩余抽奖机会 GET
       * @static
       * @type {string}
       * @memberof InterfaceUrl
       */

      InterfaceUrl.getUserExtInfo = "/Component/draw/getUserExtInfo";
      /**
       * 用户抽奖接口 GET
       * @static
       * @type {string}
       * @memberof InterfaceUrl
       */

      InterfaceUrl.commonDrawPrize = "/Component/draw/commonDrawPrize";
      /**
       * 抽奖奖品接口 POST
       * @static
       * @type {string}
       * @memberof InterfaceUrl
       */

      InterfaceUrl.getPrizeList = "/Component/draw/getPrizeList";
      /**
       * 查询用户中奖纪录 GET
       * @static
       * @type {string}
       * @memberof InterfaceUrl
       */

      InterfaceUrl.getMyWinList = "/Component/draw/getMyWinList";
      /**
       * 奖品详情 GET
       * @static
       * @type {string}
       * @memberof InterfaceUrl
       */

      InterfaceUrl.getWinInfo = "/Component/draw/getWinInfo";
      /**
       * 获取活动自定义数据 GET
       * @static
       * @type {string}
       * @memberof InterfaceUrl
       */

      InterfaceUrl.getIndexData = "/activity/dunk/getindexdata";
      /**
       * 游戏开始 POST
       * @static
       * @type {string}
       * @memberof InterfaceUrl
       */

      InterfaceUrl.apiNewGame = "/activity/dunk/newgame";
      /**
       * 游戏结束 POST
       * @static
       * @type {string}
       * @memberof InterfaceUrl
       */

      InterfaceUrl.apiEndGame = "/activity/dunk/endgame";
      /**
       * 游戏结束 POST
       * @static
       * @type {string}
       * @memberof InterfaceUrl
       */

      InterfaceUrl.getGameRecordList = "/activity/dunk/gamerecord";
      /**
      * 游戏结束 POST
      * @static
      * @type {string}
      * @memberof InterfaceUrl
      */

      InterfaceUrl.activityInviteList = "/activity/dunk/invite";
      /**
      * 获取广告详情
      * @static
      * @type {string}
      * @memberof InterfaceUrl
      */

      InterfaceUrl.advertApiGetMultAdvert = "/advertApi/getMultAdvert";

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Joystick.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UITransform, Vec3, Input, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Input = module.Input;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "169ccjdkw1NuLcEHFIL9qvl", "Joystick", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Joystick = exports('Joystick', (_dec = ccclass('Joystick'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Joystick, _Component);

        function Joystick() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "round", _descriptor, _assertThisInitialized(_this)); //摇杆背景


          _initializerDefineProperty(_this, "inner", _descriptor2, _assertThisInitialized(_this)); //摇杆 也就是中心点


          _initializerDefineProperty(_this, "isStatic", _descriptor3, _assertThisInitialized(_this)); //固定罗盘不隐藏


          _initializerDefineProperty(_this, "isDiretion", _descriptor4, _assertThisInitialized(_this)); //是否为方向模式(中心指示点拉尽)


          _initializerDefineProperty(_this, "maxRadius", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "activeRange", _descriptor6, _assertThisInitialized(_this)); //摇杆触发范围比例（0-1）


          _this.joystickCB = null;
          _this.touchID = -1;
          return _this;
        }

        var _proto = Joystick.prototype;

        _proto.onLoad = function onLoad() {
          this.show(this.isStatic);

          if (this.isStatic) {
            this.round.on(Node.EventType.TOUCH_START, this.touchStart, this);
            this.round.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
            this.round.on(Node.EventType.TOUCH_END, this.touchEnd, this);
            this.round.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
          }
        };

        _proto.init = function init(cb) {
          this.joystickCB = cb;
        };

        _proto.show = function show(flag) {
          this.round.active = flag;
        };

        _proto.innerPosition = function innerPosition(pos) {
          var data = {
            type: null,
            active: true,
            angle: 0,
            ratio: 0
          };
          var ui = this.round.getComponent(UITransform);
          var s = ui.convertToNodeSpaceAR(new Vec3(pos.x, pos.y));
          s.z = 0; //触发范围

          if (s.length() <= this.maxRadius * this.activeRange) {
            this.inner.position = new Vec3();
            data.active = false;
            return data;
          } //限制范围


          if (s.length() > this.maxRadius || this.isDiretion) {
            s = s.normalize();
            s = s.multiplyScalar(this.maxRadius);
          }

          this.inner.position = new Vec3(s); //修正位置
          //实际数据

          data.active = true;
          data.angle = Math.atan2(s.y, s.x);
          data.ratio = s.length() / this.maxRadius; // (s.length()-this.maxRadius*this.activeRange)/(this.maxRadius*(1.0 - this.activeRange)); //

          return data;
        };

        _proto.touchStart = function touchStart(event) {
          if (this.touchID == -1) {
            this.touchID = event.getID();

            if (!this.isStatic) {
              this.show(true);
              var pos = event.getUILocation();
              this.node.setWorldPosition(new Vec3(pos.x, pos.y, 0));
            }
          }

          if (this.touchID != event.getID()) return false;
          var data = this.innerPosition(event.getUILocation());
          data.type = Input.EventType.TOUCH_START;
          this.joystickCB && this.joystickCB(data);
          return true;
        };

        _proto.touchMove = function touchMove(event) {
          if (this.touchID != event.getID()) return false;
          var data = this.innerPosition(event.getUILocation());
          data.type = Input.EventType.TOUCH_MOVE;
          this.joystickCB && this.joystickCB(data);
          return true;
        };

        _proto.touchEnd = function touchEnd(event) {
          //摇杆弹回原位置
          if (this.touchID != event.getID()) return false;
          this.touchID = -1;
          this.show(this.isStatic);
          this.inner.position = new Vec3();
          var data = {
            type: Input.EventType.TOUCH_END,
            active: false,
            angle: 0,
            ratio: 0
          };
          this.joystickCB && this.joystickCB(data);
          return true;
        };

        return Joystick;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "round", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "inner", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isStatic", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isDiretion", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "maxRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 128;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "activeRange", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/jsUrils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "afbeeBaXjdP8JC+nvxi1uU+", "jsUrils", undefined);
      /**
       * js 通用方法
       * @export
       * @class jsUtils（commonUtils）
       * @extends {singtonClass}
       */


      var jsUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(jsUtils, _singtonClass);

        function jsUtils() {
          return _singtonClass.apply(this, arguments) || this;
        }

        var _proto = jsUtils.prototype;
        /**
         * Fisher–Yates shuffle
         * @param {Array<any>} arr
         * @return {*} 
         * @memberof jsUtils
         */

        _proto.shuffle = function shuffle(arr) {
          var res = [].concat(arr);

          for (var i = arr.length - 1; i > 0; i--) {
            var randomIndex = Math.floor(Math.random() * (i + 1));
            var randomItem = res[randomIndex];
            res[randomIndex] = res[i];
            res[i] = randomItem;
          }

          return res;
        }
        /**
         * 将参数对象转为字符串 将参数编码成表单的键值对形式
         * @param {*} data
         * @return {*} 
         * @memberof jsUtils
         */
        ;

        _proto.paramObjToString = function paramObjToString(data) {
          var str = "";
          var params = [];

          if (data) {
            // 将参数编码成表单的键值对形式
            for (var k in data) params.push(encodeURIComponent(k) + "=" + encodeURIComponent(data[k]));

            str = params.join('&');
          }

          return str;
        };
        /**
         * 拷贝对象2的属性 到 对象1 上
         * @param {*} obj1 对象1
         * @param {*} obj2
         * @memberof jsUtils
         */


        _proto.copyProp = function copyProp(obj1, obj2) {
          for (var p in obj2) {
            if (typeof obj2[p] != "function") {
              obj1[p] = obj2[p];
            }
          }

          return obj1;
        };

        _proto.copyToClipBoard = function copyToClipBoard(content) {
          if (content === void 0) {
            content = "文本内容";
          }

          var input = content;
          var el = document.createElement('textarea');
          el.value = input;
          el.setAttribute('readonly', '');
          el.style.contain = 'strict';
          el.style.position = 'absolute';
          el.style.left = '-9999px';
          el.style.fontSize = '12pt'; // Prevent zooming on iOS

          var selection = getSelection();
          var originalRange = null;
          var res = false;

          if (selection.rangeCount > 0) {
            originalRange = selection.getRangeAt(0);
            res = true;
          }

          document.body.appendChild(el);
          el.select();
          el.selectionStart = 0;
          el.selectionEnd = input.length;
          var success = false;

          try {
            success = document.execCommand('copy');
          } catch (err) {}

          document.body.removeChild(el);

          if (res) {
            // if (originalRange) {
            selection.removeAllRanges();
            selection.addRange(originalRange);
          }

          return success;
        }
        /**
         * 设备类型
         * @readonly
         * @memberof jsUtils
         */
        ;
        /**
         * 把 html字符串 转为 bbcode
         * @memberof jsUtils
         */


        _proto.htmlToBBCode = function htmlToBBCode(domStr) {
          if (!domStr) {
            return "";
          } //处理换行 <br/>


          domStr = domStr.replace(/\n/g, "<br/>");
          var converter = new HTML2BBCode();
          var str = converter.feed(domStr).s; //处理括号

          str = str.replace(/\[/g, "<").replace(/\]/g, ">");
          /**
          * ====================================================
          * 处理超链接
          * ====================================================
          */

          var regex = /<.*?>/g;
          var matches = str.match(regex);
          str = str.replace(/<\/url>/g, "</on>");

          if (matches) {
            matches.forEach(function (str1) {
              // <url=www.baidu.com>
              if (str1.includes("url=") == true) {
                var url = str1.split("url=")[1].slice(0, -1);
                str = str.replace(str1, "<on click=\"handler\" param=\"" + url + "\"\">");
              }
            });
          }

          return str;
        };

        _createClass(jsUtils, [{
          key: "isAndroid",
          get: function get() {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端

            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

            return isAndroid;
          }
        }, {
          key: "isiOS",
          get: function get() {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端

            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

            return isiOS;
          }
        }, {
          key: "isWx",
          get: function get() {
            var ua = navigator.userAgent.toLowerCase();
            var isWeixin = ua.indexOf('micromessenger') != -1;

            if (!isWeixin) {
              return false; // alert('Dragondean说这不是通过微信内置浏览器');
            }

            return true; // else alert('Dragondean估计这就是微信内置的浏览器！');
          }
        }, {
          key: "userAgent",
          get: function get() {
            return navigator.userAgent;
          }
          /**
           * 设备类型
           * @readonly
           * @memberof jsUtils
           */

        }, {
          key: "uaVer",
          get: function get() {
            var sUserAgent = navigator.userAgent;
            var isWin = navigator.platform == "Win32" || navigator.platform == "Windows";
            var isMac = navigator.platform == "Mac68K" || navigator.platform == "MacPPC" || navigator.platform == "Macintosh" || navigator.platform == "MacIntel";
            if (isMac) return "Mac";
            var isUnix = navigator.platform == "X11" && !isWin && !isMac;
            if (isUnix) return "Unix";
            var isLinux = String(navigator.platform).indexOf("Linux") > -1;
            if (isLinux) return "Linux";

            if (isWin) {
              var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
              if (isWin2K) return "Win2000";
              var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
              if (isWinXP) return "WinXP";
              var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
              if (isWin2003) return "Win2003";
              var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
              if (isWinVista) return "WinVista";
              var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
              if (isWin7) return "Win7";
              var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
              if (isWin10) return "Win10";
            }

            return "other";
          }
          /**
           * 网络类型
           * @readonly
           * @memberof jsUtils
           */

        }, {
          key: "netType",
          get: function get() {
            var ua = navigator.userAgent;
            var networkStr = ua.match(/NetType\/\w+/) ? ua.match(/NetType\/\w+/)[0] : 'NetType/other';
            networkStr = networkStr.toLowerCase().replace('nettype/', '');
            var networkType;

            switch (networkStr) {
              case 'wifi':
                networkType = 'wifi';
                break;

              case '4g':
                networkType = '4g';
                break;

              case '3g':
                networkType = '3g';
                break;

              case '3gnet':
                networkType = '3g';
                break;

              case '2g':
                networkType = '2g';
                break;

              default:
                networkType = 'other';
            }

            return networkType;
          }
          /**
           * 屏幕分辨率
           * @readonly
           * @type {string}
           * @memberof jsUtils
           */

        }, {
          key: "screen",
          get: function get() {
            return window.screen.width + " x " + window.screen.height;
          }
        }, {
          key: "model",
          get: function get() {
            var device_type = navigator.userAgent; //获取userAgent信息 

            console.log(device_type);
            var md = new MobileDetect(device_type); //初始化mobile-detect 

            var os = md.os(); //获取系统 

            console.log(os);
            console.log(md.mobile());
            var model = "";

            if (os == "iOS") {
              //ios系统的处理 
              os = md.os() + md.version("iPhone");
              model = md.mobile();
            } else if (os == "AndroidOS") {
              //Android系统的处理 
              var j,
                  sss = device_type.split(";");

              for (var i = 0; i < sss.length; i++) {
                if (sss[i].indexOf("Build/") > 0) {
                  j = i;
                  break;
                }
              }

              if (j > -1) {
                model = sss[j].substring(0, sss[j].indexOf("Build/"));
              }
            }

            return model;
          }
        }]);

        return jsUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Kdtree.ts", ['cc', './Math.ts'], function (exports) {
  var cclegacy, RaycastAABB;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      RaycastAABB = module.RaycastAABB;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e43d3K0tY1A4L3w+emoHja1", "Kdtree", undefined);

      var Kdtree = exports('Kdtree', /*#__PURE__*/function () {
        // static nCount = 0;
        // static tCount = 0;
        // static lCount = 0;
        function Kdtree(objects, l, r, b, axis, object_level) {
          if (object_level === void 0) {
            object_level = 1 << 8 | 16;
          }

          this.l = 0;
          this.r = 0;
          this.left = null;
          this.right = null;
          this.isLeaf = false;
          this.objects = [];
          this.axis = 0;
          this.middle = 0;
          this.bound = null;
          this.bounds = [];
          this.object_level = 1 << 8 | 16;
          this.l = l;
          this.r = r;
          this.bound = b;
          this.objects = objects;
          this.object_level = object_level;

          if (r - l + 1 <= object_level >> 8 || !(object_level & 0xFF)) {
            this.isLeaf = true;
            return;
          }

          this.axis = axis % 3;
          this.split(l, r);
        }

        var _proto = Kdtree.prototype;

        _proto.split = function split(l, r) {
          var axis = this.axis;
          var bounds = this.bounds;
          var level = this.object_level;
          var side = this.getSide(l, r, axis);
          var object = this.findMid(l, r, side);
          this.middle = object.bound[side];
          var m = this.partion(l, r, this.middle, side); //middle

          this.right = new Kdtree(this.objects, m, r, bounds[0], axis + 1, level - 1); //up

          this.left = new Kdtree(this.objects, l, m - 1, bounds[1], axis + 1, level - 1); //down
        };

        _proto.getSide = function getSide(l, r, axis) {
          var a = this.objects;
          var side0 = 0,
              side3 = 0;
          var min = this.bound[axis];
          var max = this.bound[axis + 3];

          for (var i = l; i <= r; i++) {
            var b = a[i].bound,
                b0 = b[axis] - min,
                b3 = b[axis + 3] - max;
            side0 += b0 * b0;
            side3 += b3 * b3;
          }

          return side0 >= side3 ? axis : axis + 3;
        };

        _proto.partion = function partion(l, r, max, side) {
          var i = l,
              j = r;
          var a = this.objects;

          for (; i <= j; i++) {
            var _obj = a[i];

            if (_obj.bound[side] >= max) {
              a[i] = a[j];
              a[j] = _obj;
              j--, i--;
            }
          }

          var middle = i;

          if (i >= r) {
            middle = r;
          } else if (i == l) {
            middle = i + 1;
          }

          var m = Number.NEGATIVE_INFINITY;
          var M = Number.POSITIVE_INFINITY;
          var rb = this.bounds[0] = [M, M, M, m, m, m];
          var lb = this.bounds[1] = [M, M, M, m, m, m];

          for (i = l; i <= r; i++) {
            var b = a[i].bound;

            if (i < middle) {
              if (lb[0] > b[0]) lb[0] = b[0];
              if (lb[1] > b[1]) lb[1] = b[1];
              if (lb[2] > b[2]) lb[2] = b[2];
              if (lb[3] < b[3]) lb[3] = b[3];
              if (lb[4] < b[4]) lb[4] = b[4];
              if (lb[5] < b[5]) lb[5] = b[5];
            } else {
              if (rb[0] > b[0]) rb[0] = b[0];
              if (rb[1] > b[1]) rb[1] = b[1];
              if (rb[2] > b[2]) rb[2] = b[2];
              if (rb[3] < b[3]) rb[3] = b[3];
              if (rb[4] < b[4]) rb[4] = b[4];
              if (rb[5] < b[5]) rb[5] = b[5];
            }
          }

          return middle;
        };

        _proto.insertSort = function insertSort(l, r, side) {
          var a = this.objects; // let axis = this.axis + 3;

          for (var i = l + 1; i <= r; i++) {
            var t = a[i],
                j = i;
            var max = t.bound[side];

            while (j > l && a[j - 1].bound[side] > max) {
              a[j] = a[j - 1];
              j--;
            }

            if (j != i) a[j] = t;
          }
        };

        _proto.findMid = function findMid(l, r, side) {
          var a = this.objects;
          if (l == r) return a[l];
          var i = 0,
              n = 0;

          for (i = l; i < r - 5; i += 5) {
            this.insertSort(i, i + 4, side);
            n = i - l; // swap(a[l + n / 5], a[i + 2]);  

            var n5 = ~~(n / 5);
            var t = a[l + n5];
            a[l + n5] = a[i + 2];
            a[i + 2] = t;
          }

          var num = r - i + 1;

          if (num > 0) {
            this.insertSort(i, i + num - 1, side);
            n = i - l; // swap(a[l + n / 5], a[i + num / 2]);

            var _n = ~~(n / 5),
                n2 = ~~(num / 2);

            var _t = a[l + _n];
            a[l + _n] = a[i + n2];
            a[i + n2] = _t;
          } //n /= 5;  


          n = ~~(n / 5);
          if (n == l) return a[l];
          return this.findMid(l, l + n, side);
        };

        _proto.retrieve = function retrieve(bound, result) {
          var inc = 0;
          var A = bound;
          var objects = this.objects;
          var queue = [this];

          while (inc >= 0) {
            var _obj2 = queue[inc--];
            var axis = _obj2.axis;
            var B = _obj2.bounds;

            if (_obj2.isLeaf) {
              var l = _obj2.l,
                  r = _obj2.r; //Kdtree.tCount += (r - l + 1);

              for (var i = l; i <= r; i++) {
                var objB = objects[i],
                    _B = objB.bound;

                if (!(_B[0] > A[3] || A[0] > _B[3] || _B[1] > A[4] || A[1] > _B[4] || _B[2] > A[5] || A[2] > _B[5])) {
                  result.push(objB);
                }
              }

              continue;
            } //Kdtree.nCount++;


            if (!(A[axis + 3] < B[1][axis] || A[axis] > B[1][axis + 3])) {
              queue[++inc] = _obj2.left;
            }

            if (!(A[axis + 3] < B[0][axis] || A[axis] > B[0][axis + 3])) {
              queue[++inc] = _obj2.right;
            }
          }
        };

        _proto.rayCast = function rayCast(ray, result) {
          var min = ray[6];
          var o = [ray[0], ray[1], ray[2]];
          var n = [ray[3], ray[4], ray[5]];
          var inc = 0;
          var rayAABB = RaycastAABB;
          var objects = this.objects;
          var queue = [this];

          while (inc >= 0) {
            var _obj3 = queue[inc--];
            var B = _obj3.bound;

            if (_obj3.isLeaf) {
              var _l = _obj3.l,
                  _r = _obj3.r;

              for (var i = _l; i <= _r; i++) {
                var objB = objects[i],
                    _B2 = objB.bound;

                var _dist = rayAABB(o, n, _B2, min);

                if (_dist != null) {
                  objB.rayDist = _dist;
                  _dist = result(objB);

                  if (_dist < min) {
                    min = _dist;
                  }
                }
              }

              continue;
            } //Kdtree.nCount++;


            var l = 1,
                r = 1;
            if (o[_obj3.axis] <= _obj3.middle) l = 2;else r = 2;

            if (!(o[0] < B[0] || o[0] > B[3] || o[1] < B[1] || o[1] > B[4] || o[2] < B[2] || o[2] > B[5])) {
              queue[inc + r] = _obj3.right;
              queue[inc + l] = _obj3.left;
              inc += 2;
              continue;
            }

            var dist = rayAABB(o, n, B, min);

            if (dist != null && dist >= 0) {
              queue[inc + r] = _obj3.right;
              queue[inc + l] = _obj3.left;
              inc += 2;
            }
          }
        };

        _proto.clear = function clear() {
          if (this.left) this.left.clear();
          if (this.right) this.right.clear();
          this.left = null;
          this.right = null;
          this.bound = null;
          this.bounds = null;
          this.objects = null;
        };

        return Kdtree;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/List.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ListItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Node, Prefab, UITransform, Layout, Vec2, instantiate, ScrollView, ListItem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Node = module.Node;
      Prefab = module.Prefab;
      UITransform = module.UITransform;
      Layout = module.Layout;
      Vec2 = module.Vec2;
      instantiate = module.instantiate;
      ScrollView = module.ScrollView;
    }, function (module) {
      ListItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "e14a3McnAxLC6SPk1gCF0Hv", "List", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var TemplateType = /*#__PURE__*/function (TemplateType) {
        TemplateType[TemplateType["PREFAB"] = 2] = "PREFAB";
        TemplateType[TemplateType["NODE"] = 1] = "NODE";
        return TemplateType;
      }(TemplateType || {});
      /**
       * 虚拟滚动视图 扩展ScrollView
       * 渲染预制体必需挂载 ListItem子类
       * @author slf
       */


      var List = exports('default', (_dec = property({
        type: Enum(TemplateType),
        displayName: '模板类型'
      }), _dec2 = property({
        type: Node,
        displayName: '模板Item',
        visible: function visible() {
          return this.templateType == TemplateType.NODE;
        }
      }), _dec3 = property({
        type: Prefab,
        // tooltip: '模板Item',
        displayName: '模板Item',
        visible: function visible() {
          return this.templateType == TemplateType.PREFAB;
        }
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_ScrollView) {
        _inheritsLoose(List, _ScrollView);

        function List() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ScrollView.call.apply(_ScrollView, [this].concat(args)) || this;
          /**渲染预制体必需挂载 ListItem子类 */

          _this.itemRenderer = null; //模板类型

          _initializerDefineProperty(_this, "templateType", _descriptor, _assertThisInitialized(_this)); //模板Item（Node）


          _initializerDefineProperty(_this, "itemRendererNode", _descriptor2, _assertThisInitialized(_this)); //模板Item（Prefab）


          _initializerDefineProperty(_this, "itemRendererPrefab", _descriptor3, _assertThisInitialized(_this));
          /**子项点击 回调函数  回调作用域*/


          _this.callback = void 0;
          _this.itemTarget = void 0;
          /**最大渲染预制体 垂直数量 */

          _this.verticalCount = void 0;
          /**最大渲染预制体 水平数量 */

          _this.horizontalCount = void 0;
          /**预制体宽高 */

          _this.itemW = void 0;
          _this.itemH = void 0;
          /**定时器 */

          _this.interval = void 0;
          /**预制体池 */

          _this.itemPool = void 0;
          /**预制体列表 */

          _this.itemList = void 0;
          /**预制体渲染类列表 */

          _this.itemRendererList = void 0;
          /**数据列表 */

          _this.dataList = void 0;
          /**开始坐标 */

          _this.startPos = void 0;
          /**布局*/

          _this.contentLayout = void 0;
          _this.contentUITransform = void 0;
          /**强制刷新 */

          _this.forcedRefresh = void 0;
          /**刷新 */

          _this.refresh = void 0;
          _this._uiTransform = void 0;
          return _this;
        }

        var _proto = List.prototype;

        _proto.onLoad = function onLoad() {
          this.itemRenderer = this.templateType == TemplateType.NODE ? this.itemRendererNode : this.itemRendererPrefab;
          this.contentUITransform = this.content.getComponent(UITransform);
          this.content.removeAllChildren();
          this.itemList = [];
          this.itemPool = [];
          this.itemRendererList = [];
          this.contentLayout = this.content.getComponent(Layout);
          this.contentLayout.enabled = false;
          this._uiTransform = this.node.getComponent(UITransform);

          switch (this.contentLayout.type) {
            case Layout.Type.HORIZONTAL:
              this.contentUITransform.anchorX = 0;
              this.contentUITransform.anchorY = 0.5;
              break;

            case Layout.Type.VERTICAL:
              this.contentUITransform.anchorX = 0.5;
              this.contentUITransform.anchorY = 1;
              break;

            case Layout.Type.GRID:
              this.contentUITransform.anchorX = 0;
              this.contentUITransform.anchorY = 1;
              break;
          } //起始位置


          var itemNode = (this.templateType == TemplateType.NODE ? this.itemRendererNode : this.itemRendererPrefab.data).getComponent(UITransform);
          this.startPos = new Vec2(itemNode.width * itemNode.anchorX + this.contentLayout.paddingLeft, -(itemNode.height * itemNode.anchorY + this.contentLayout.paddingTop)); //预制体宽高

          this.itemW = itemNode.width + this.contentLayout.spacingX;
          this.itemH = itemNode.height + this.contentLayout.spacingY; //垂直、水平最大预制体数量

          this.horizontalCount = Math.ceil(this._uiTransform.width / this.itemW) + 2;
          this.verticalCount = Math.ceil(this._uiTransform.height / this.itemH) + 2;

          if (this.contentLayout.type == Layout.Type.GRID) {
            if (this.contentLayout.startAxis == Layout.AxisDirection.HORIZONTAL) {
              this.horizontalCount = Math.floor(this._uiTransform.width / this.itemW);
            } else {
              this.verticalCount = Math.floor(this._uiTransform.height / this.itemH);
            }
          }
        };

        _proto.onDestroy = function onDestroy() {
          this.dataList = null;
          this.itemList = null;
          this.itemRendererList = null;
          clearInterval(this.interval);
        }
        /**利用ScrollView本身方法 来标记滑动中 */
        ;

        _proto._setContentPosition = function _setContentPosition(position) {
          _ScrollView.prototype['_setContentPosition'].call(this, position);

          this.refresh = true;
        }
        /**
        * 设置列表 子项点击回调
        * 回调会携带当前子项的 data
        * @param cb 回调
        * @param itemTarget 作用域
        */
        ;

        _proto.setTouchItemCallback = function setTouchItemCallback(cb, itemTarget) {
          this.callback = cb;
          this.itemTarget = itemTarget;
        }
        /**选中数据 */
        ;

        _proto.onItemTap = function onItemTap(data) {
          this.callback && this.callback.call(this.itemTarget, data);
        }
        /**
         * 刷新数据
         * @param data 数据源 单项|队列
         */
        ;

        _proto.refreshData = function refreshData(data) {
          if (Array.isArray(data)) {
            this.dataList = data;
          } else {
            this.dataList = [data];
          }

          if (this.interval) {
            clearInterval(this.interval);
          }

          this.addItem();
          this.refreshContentSize();
          this.forcedRefresh = true;
          this.refresh = true;
          this.interval = setInterval(this.refreshItem.bind(this), 1000 / 10);
        }
        /**添加预制体 */
        ;

        _proto.addItem = function addItem() {
          var len = 0;

          switch (this.contentLayout.type) {
            case Layout.Type.HORIZONTAL:
              len = this.horizontalCount;
              break;

            case Layout.Type.VERTICAL:
              len = this.verticalCount;
              break;

            case Layout.Type.GRID:
              len = this.horizontalCount * this.verticalCount;
              break;
          }

          len = Math.min(len, this.dataList.length);
          var itemListLen = this.itemList.length;

          if (itemListLen < len) {
            var itemRenderer = null;

            for (var i = itemListLen; i < len; i++) {
              var child = this.itemPool.length > 0 ? this.itemPool.shift() : instantiate(this.itemRenderer);
              this.content.addChild(child);
              this.itemList.push(child);
              itemRenderer = child.getComponent(ListItem);
              this.itemRendererList.push(itemRenderer);

              if (itemRenderer.isClick) {
                itemRenderer.setTouchCallback(this.onItemTap, this);
              }
            }
          } else {
            var cL = this.content.children.length;
            var item;

            while (cL > len) {
              item = this.itemList[cL - 1];
              this.content.removeChild(item);
              this.itemList.splice(cL - 1, 1);
              this.itemRendererList.splice(cL - 1, 1);
              this.itemPool.push(item);
              cL = this.content.children.length;
            }
          }
        }
        /**根据数据数量 改变content宽高 */
        ;

        _proto.refreshContentSize = function refreshContentSize() {
          var layout = this.contentLayout;
          var dataListLen = this.dataList.length;

          switch (this.contentLayout.type) {
            case Layout.Type.VERTICAL:
              this.content.getComponent(UITransform).height = layout.paddingTop + dataListLen * this.itemH + layout.paddingBottom;
              break;

            case Layout.Type.HORIZONTAL:
              this.content.getComponent(UITransform).width = layout.paddingLeft + dataListLen * this.itemW + layout.paddingRight;
              break;

            case Layout.Type.GRID:
              if (this.contentLayout.startAxis == Layout.AxisDirection.HORIZONTAL) {
                this.content.getComponent(UITransform).height = layout.paddingTop + Math.ceil(dataListLen / this.horizontalCount) * this.itemH + layout.paddingBottom;
              } else if (this.contentLayout.startAxis == Layout.AxisDirection.VERTICAL) {
                this.content.getComponent(UITransform).width = layout.paddingLeft + Math.ceil(dataListLen / this.verticalCount) * this.itemW + layout.paddingRight;
              }

              break;
          }
        }
        /**刷新预制体位置 和 数据填充 */
        ;

        _proto.refreshItem = function refreshItem() {
          if (!this.refresh) {
            return;
          }

          switch (this.contentLayout.type) {
            case Layout.Type.HORIZONTAL:
              this.refreshHorizontal();
              break;

            case Layout.Type.VERTICAL:
              this.refreshVertical();
              break;

            case Layout.Type.GRID:
              this.refreshGrid();
              break;
          }

          this.refresh = false;
          this.forcedRefresh = false;
        }
        /**刷新水平 */
        ;

        _proto.refreshHorizontal = function refreshHorizontal() {
          var start = Math.floor(Math.abs(this.getContentPosition().x) / this.itemW);

          if (start < 0 || this.getContentPosition().x > 0) {
            //超出边界处理
            start = 0;
          }

          var end = start + this.horizontalCount;

          if (end > this.dataList.length) {
            //超出边界处理
            end = this.dataList.length;
            start = Math.max(end - this.horizontalCount, 0);
          }

          var tempV = 0;
          var itemListLen = this.itemList.length;
          var item, pos, idx;

          for (var i = 0; i < itemListLen; i++) {
            idx = (start + i) % itemListLen;
            item = this.itemList[idx];
            pos = item.getPosition();
            tempV = this.startPos.x + (start + i) * this.itemW;

            if (pos.x != tempV || this.forcedRefresh) {
              // console.log("修改的数据=" + (start + i))
              pos.x = tempV;
              item.position = pos;
              this.itemRendererList[idx].data = this.dataList[start + i];
            }
          }
        }
        /**刷新垂直 */
        ;

        _proto.refreshVertical = function refreshVertical() {
          var start = Math.floor(Math.abs(this.getContentPosition().y) / this.itemH);

          if (start < 0 || this.getContentPosition().y < 0) {
            start = 0;
          }

          var end = start + this.verticalCount;

          if (end > this.dataList.length) {
            end = this.dataList.length;
            start = Math.max(end - this.verticalCount, 0);
          }

          var tempV = 0;
          var itemListLen = this.itemList.length;
          var item, pos, idx;

          for (var i = 0; i < itemListLen; i++) {
            idx = (start + i) % itemListLen;
            item = this.itemList[idx];
            pos = item.getPosition();
            tempV = this.startPos.y + -(start + i) * this.itemH;

            if (pos.y != tempV || this.forcedRefresh) {
              // console.log("修改的数据=" + (start + i))
              pos.y = tempV;
              item.position = pos;
              this.itemRendererList[idx].data = this.dataList[start + i];
            }
          }
        }
        /**刷新网格 */
        ;

        _proto.refreshGrid = function refreshGrid() {
          //是否垂直方向 添加网格
          var isVDirection = this.contentLayout.startAxis == Layout.AxisDirection.VERTICAL;
          var start = Math.floor(Math.abs(this.getContentPosition().y) / this.itemH) * this.horizontalCount;

          if (isVDirection) {
            start = Math.floor(Math.abs(this.getContentPosition().x) / this.itemW) * this.verticalCount;

            if (this.getContentPosition().x > 0) {
              start = 0;
            }
          } else if (this.getContentPosition().y < 0) {
            start = 0;
          }

          if (start < 0) {
            start = 0;
          }

          var end = start + this.horizontalCount * this.verticalCount;

          if (end > this.dataList.length) {
            end = this.dataList.length;
            start = Math.max(end - this.horizontalCount * this.verticalCount, 0);
          }

          var tempX = 0;
          var tempY = 0;
          var itemListLen = this.itemList.length;
          var item, pos, idx;

          for (var i = 0; i < itemListLen; i++) {
            idx = (start + i) % itemListLen;
            item = this.itemList[idx];
            pos = item.getPosition();

            if (isVDirection) {
              tempX = this.startPos.x + Math.floor((start + i) / this.verticalCount) * this.itemW;
              tempY = this.startPos.y + -((start + i) % this.verticalCount) * this.itemH;
            } else {
              tempX = this.startPos.x + (start + i) % this.horizontalCount * this.itemW;
              tempY = this.startPos.y + -Math.floor((start + i) / this.horizontalCount) * this.itemH;
            }

            if (pos.y != tempY || pos.x != tempX || this.forcedRefresh) {
              // console.log("修改的数据=" + (start + i))
              pos.x = tempX;
              pos.y = tempY;
              item.position = pos;
              this.itemRendererList[idx].data = this.dataList[start + i];
            }
          }
        };

        return List;
      }(ScrollView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "templateType", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TemplateType.NODE;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemRendererNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemRendererPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ListItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "f27bbdzACxKgqcAB7J4H8Xy", "ListItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * 单项渲染基类 T数据结构
       *  */

      var ListItem = exports('default', (_dec = ccclass('ListItem'), _dec2 = property({
        displayName: "是否添加点击事件"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ListItem, _Component);

        function ListItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "isClick", _descriptor, _assertThisInitialized(_this));

          _this.callback = void 0; //回调函数

          _this.target = void 0; //回调作用域

          _this._data = void 0;
          return _this;
        }

        var _proto = ListItem.prototype;
        /**数据发生变化 子类重写*/

        _proto.updateItem = function updateItem() {}
        /**刷新数据 */
        ;

        _proto.refreshData = function refreshData() {
          this.updateItem();
        }
        /**销毁 */
        ;

        _proto.onDestroy = function onDestroy() {
          this._data = null;
        }
        /**
         * 设置点击回调
         * @param cb 回调函数
         * @param target 回调作用域
         */
        ;

        _proto.setTouchCallback = function setTouchCallback(cb, target) {
          this.callback = cb;
          this.target = target; // this

          if (this.node) {
            if (this.node.hasEventListener(Node.EventType.TOUCH_END)) {
              this.node.off(Node.EventType.TOUCH_END, this.onClickCallback, this);
            }

            this.node.on(Node.EventType.TOUCH_END, this.onClickCallback, this);
          }
        }
        /**
         * 预制体点击回调 会携带data
         * @param e 
         */
        ;

        _proto.onClickCallback = function onClickCallback(e) {
          this.callback && this.callback.call(this.target, this.data);
        };

        _createClass(ListItem, [{
          key: "data",
          get: //数据结构
          function get() {
            return this._data;
          },
          set: function set(v) {
            this._data = v;
            this.updateItem();
          }
        }]);

        return ListItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "isClick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './HomeItem.ts', './HomeScene.ts', './T_Demo.ts', './RaycastClosest.ts', './CommonExpand.ts', './app.ts', './BaseListView.ts', './BaseUrl.ts', './BaseView.ts', './singtonClass.ts', './CameraCtr.ts', './Joystick.ts', './Object3D.ts', './Player.ts', './World.ts', './Collision.ts', './Debug.ts', './Kdtree.ts', './Math.ts', './ObjNode.ts', './Octree.ts', './gameEnum.ts', './viewMgr.ts', './FreeCamera.ts', './List.ts', './ListItem.ts', './ModelTips.ts', './arrayUtils.ts', './cameraUtils.ts', './dateUtils.ts', './encodeUtils.ts', './eventNameUtils.ts', './eventObjUtils.ts', './eventUtils.ts', './httpUtils.ts', './imgUrils.ts', './jsUrils.ts', './mathUtils.ts', './poolUtils.ts', './promiseUtils.ts', './randomUtils.ts', './storageUtils.ts', './stringUtils.ts', './tweenUtils.ts', './uiManagerUtils.ts', './urlUtils.ts', './vectorUtils.ts', './viewUtils.ts', './InterfaceUrl.ts', './ChickModel.ts', './Common_mountain.ts', './MountainScene.ts', './MountainView.ts', './StepModel.ts', './WaveModel.ts', './Common.ts', './GirlModel.ts', './PathMgr.ts', './PathNode.ts', './RunView.ts', './TestView.ts', './TimerModel.ts', './GameResView.ts', './StartView.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Math.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "470ec5EWAVCe64rxmOlGbB1", "Math", undefined);

      var max_min = function max_min(v0, v1, v2, value) {
        var min = v0,
            max = v0;

        if (v1 > max) {
          max = v1;
        } else if (v1 < min) {
          min = v1;
        }

        if (v2 > max) {
          max = v2;
        } else if (v2 < min) {
          min = v2;
        }

        return max < -value || min > value;
      }; //Bound, Trangle


      var AABBTriangle = exports('AABBTriangle', function AABBTriangle(b, t) {
        var c = [(b[0] + b[3]) * 0.5, (b[1] + b[4]) * 0.5, (b[2] + b[5]) * 0.5];
        var e = [(b[3] - b[0]) * 0.5, (b[4] - b[1]) * 0.5, (b[5] - b[2]) * 0.5];
        var v = [t[0] - c[0], t[1] - c[1], t[2] - c[2], t[3] - c[0], t[4] - c[1], t[5] - c[2], t[6] - c[0], t[7] - c[1], t[8] - c[2]];
        var f = [v[3] - v[0], v[4] - v[1], v[5] - v[2], v[6] - v[3], v[7] - v[4], v[8] - v[5], v[0] - v[6], v[1] - v[7], v[2] - v[8]];
        if (max_min(v[0], v[3], v[6], e[0])) return false;
        if (max_min(v[1], v[4], v[7], e[1])) return false;
        if (max_min(v[2], v[5], v[8], e[2])) return false;
        var pn0 = -f[2] * f[4] + f[1] * f[5],
            pn1 = f[2] * f[3] - f[0] * f[5],
            pn2 = -f[1] * f[3] + f[0] * f[4];
        var pd = v[0] * pn0 + v[1] * pn1 + v[2] * pn2;
        var pr = e[0] * (pn0 >= 0 ? pn0 : -pn0) + e[1] * (pn1 >= 0 ? pn1 : -pn1) + e[2] * (pn2 >= 0 ? pn2 : -pn2);
        if (pd > pr || pd < -pr) return false;
        var a1 = 0,
            a2 = 0,
            ap0 = 0,
            ap1 = 0,
            ap2 = 0,
            ar = 0;

        for (var j = 2; j >= 0; j--) {
          var n = j,
              m = (j + 2) % 3;

          for (var i = 0; i < 3; i++) {
            a2 = f[i * 3 + m];
            a1 = -f[i * 3 + n];
            ap0 = v[m] * a1 + v[n] * a2;
            ap1 = v[3 + m] * a1 + v[3 + n] * a2;
            ap2 = v[6 + m] * a1 + v[6 + n] * a2;
            ar = e[m] * (a1 >= 0 ? a1 : -a1) + e[n] * (a2 >= 0 ? a2 : -a2);
            if (max_min(ap0, ap1, ap2, ar)) return false;
          }
        }

        return true;
      });

      var line_line = function line_line(a, b) {
        //dot2(a*clamp(dot(a,b)/dot2(a),0.0,1.0)-b);
        var dotAB = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
        var dotA2 = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
        var clamp = dotAB * 1.0 / dotA2;
        if (clamp < 0.0) clamp = 0.0;
        if (clamp > 1.0) clamp = 1.0;
        var x = a[0] * clamp - b[0];
        var y = a[1] * clamp - b[1];
        var z = a[2] * clamp - b[2];
        return x * x + y * y + z * z;
      };

      var line_side = function line_side(a, b, c) {
        //sign(dot(cross(a,b),c))
        var ax = a[0],
            ay = a[1],
            az = a[2];
        var bx = b[0],
            by = b[1],
            bz = b[2];
        var x = ay * bz - az * by;
        var y = az * bx - ax * bz;
        var z = ax * by - ay * bx;
        return x * c[0] + y * c[1] + z * c[2];
      };

      var SphereTriangle = exports('SphereTriangle', function SphereTriangle(p, r, t) {
        //vec3 pa = p - a;  
        var pa = [p[0] - t[0], p[1] - t[1], p[2] - t[2]]; //vec3 pb = p - b;	

        var pb = [p[0] - t[3], p[1] - t[4], p[2] - t[5]]; //vec3 pc = p - c;	

        var pc = [p[0] - t[6], p[1] - t[7], p[2] - t[8]]; //vec3 ba = b - a;  

        var ba = [t[3] - t[0], t[4] - t[1], t[5] - t[2]]; //vec3 ac = a - c; 	

        var ac = [t[0] - t[6], t[1] - t[7], t[2] - t[8]]; //vec3 cb = c - b;  

        var cb = [t[6] - t[3], t[7] - t[4], t[8] - t[5]]; //vec3 nor = cross( ba, ac ); 

        var nor = [ba[1] * ac[2] - ba[2] * ac[1], ba[2] * ac[0] - ba[0] * ac[2], ba[0] * ac[1] - ba[1] * ac[0]]; //separate by triangle plane

        var dotAB = nor[0] * pa[0] + nor[1] * pa[1] + nor[2] * pa[2];
        var dotA2 = nor[0] * nor[0] + nor[1] * nor[1] + nor[2] * nor[2];
        if (dotAB * dotAB / dotA2 > r * r) return false;
        var signs = true;
        if (signs) signs = line_side(ba, nor, pa) >= 0;
        if (signs) signs = line_side(cb, nor, pb) >= 0;
        if (signs) signs = line_side(ac, nor, pc) >= 0;

        if (!signs) {
          if (line_line(ba, pa) <= r * r) return true;
          if (line_line(cb, pb) <= r * r) return true;
          if (line_line(ac, pc) <= r * r) return true;
          return false;
        }

        return true;
      });
      var C0 = [0, 0, 0],
          C1 = [0, 0, 0],
          C2 = [0, 0, 0],
          C3 = [0, 0, 0];

      var closest_point_on_line = function closest_point_on_line(a, b, p, c) {
        // let ab = b - a;
        // let t = dot(p - a, ab) / dot(ab, ab);
        // return (a + (t.max(0.0).min(1.0)) * ab);
        var ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
        var dab2 = ab[0] * ab[0] + ab[1] * ab[1] + ab[2] * ab[2];
        var pab = (p[0] - a[0]) * ab[0] + (p[1] - a[1]) * ab[1] + (p[2] - a[2]) * ab[2];
        var t = pab / dab2;
        if (t < 0.0) t = 0.0;
        if (t > 1.0) t = 1.0;
        c[0] = a[0] + ab[0] * t;
        c[1] = a[1] + ab[1] * t;
        c[2] = a[2] + ab[2] * t;
        return c;
      };

      var point_inside_triangle = function point_inside_triangle(p0, p1, p2, n, p) {
        //let c0 = (p - p0).cross(p1 - p0);
        var ax = p[0] - p0[0],
            ay = p[1] - p0[1],
            az = p[2] - p0[2];
        var bx = p1[0] - p0[0],
            by = p1[1] - p0[1],
            bz = p1[2] - p0[2];
        var x = ay * bz - az * by;
        var y = az * bx - ax * bz;
        var z = ax * by - ay * bx;
        if (x * n[0] + y * n[1] + z * n[2] > 0) return false; //let c1 = (p - p1).cross(p2 - p1);

        ax = p[0] - p1[0], ay = p[1] - p1[1], az = p[2] - p1[2];
        bx = p2[0] - p1[0], by = p2[1] - p1[1], bz = p2[2] - p1[2];
        x = ay * bz - az * by;
        y = az * bx - ax * bz;
        z = ax * by - ay * bx;
        if (x * n[0] + y * n[1] + z * n[2] > 0) return false; //let c2 = (p - p2).cross(p0 - p2);

        ax = p[0] - p2[0], ay = p[1] - p2[1], az = p[2] - p2[2];
        bx = p0[0] - p2[0], by = p0[1] - p2[1], bz = p0[2] - p2[2];
        x = ay * bz - az * by;
        y = az * bx - ax * bz;
        z = ax * by - ay * bx;
        if (x * n[0] + y * n[1] + z * n[2] > 0) return false; //let inside = dot(c0, *n) <= 0.0 && dot(c1, *n) <= 0.0 && dot(c2, *n) <= 0.0;

        return true;
      };

      var closest_point_on_triangle = function closest_point_on_triangle(t, n, p) {
        var p0 = [t[0], t[1], t[2]];
        var p1 = [t[3], t[4], t[5]];
        var p2 = [t[6], t[7], t[8]];
        var reference_point = p; //point.clone();

        if (point_inside_triangle(p0, p1, p2, n, p)) {
          return reference_point;
        } else {
          var point1 = closest_point_on_line(p0, p1, p, C1);
          var x = p[0] - point1[0],
              y = p[1] - point1[1],
              z = p[2] - point1[2];
          var sq_dist = x * x + y * y + z * z;
          var best_dist = sq_dist;
          reference_point = point1;
          var point2 = closest_point_on_line(p1, p2, p, C2);
          x = p[0] - point2[0], y = p[1] - point2[1], z = p[2] - point2[2];
          sq_dist = x * x + y * y + z * z;

          if (sq_dist < best_dist) {
            reference_point = point2;
            best_dist = sq_dist;
          }

          var point3 = closest_point_on_line(p2, p0, p, C3);
          x = p[0] - point3[0], y = p[1] - point3[1], z = p[2] - point3[2];
          sq_dist = x * x + y * y + z * z;

          if (sq_dist < best_dist) {
            reference_point = point2;
            best_dist = sq_dist;
          }
        }

        return reference_point;
      };

      var CapsuleTriangle = exports('CapsuleTriangle', function CapsuleTriangle(tip, base, r, t) {
        var ax = t[3] - t[0],
            ay = t[4] - t[1],
            az = t[5] - t[2];
        var bx = t[6] - t[0],
            by = t[7] - t[1],
            bz = t[8] - t[2];
        var x = ay * bz - az * by;
        var y = az * bx - ax * bz;
        var z = ax * by - ay * bx;
        var length = x * x + y * y + z * z;
        length = length > 0 ? 1.0 / Math.sqrt(length) : 0;
        var n = [x * length, y * length, z * length]; //triangle normal

        x = tip[0] - base[0];
        y = tip[1] - base[1];
        z = tip[2] - base[2];
        length = x * x + y * y + z * z;
        length = length > 0 ? 1.0 / Math.sqrt(length) : 0;
        var cn = [x * length, y * length, z * length]; //capsule_normal
        //let line_end_offset = capsule_normal * r;
        //let a = base + line_end_offset;
        //let b = tip - line_end_offset;

        var a = [base[0] + cn[0] * r, base[1] + cn[1] * r, base[2] + cn[2] * r];
        var b = [tip[0] - cn[0] * r, tip[1] - cn[1] * r, tip[2] - cn[2] * r];
        var rp = [t[0], t[1], t[2]]; //reference_point
        //separate by triangle plane

        var n2 = n[0] * n[0] + n[1] * n[1] + n[2] * n[2];
        ax = a[0] - t[0], ay = a[1] - t[1], az = a[2] - t[2];
        bx = b[0] - t[0], by = b[1] - t[1], bz = b[2] - t[2];
        var da = ax * n[0] + ay * n[1] + az * n[2],
            db = bx * n[0] + by * n[1] + bz * n[2];

        if (da * da / n2 > r * r && db * db / n2 > r * r) {
          if (da * db > 0) {
            return false;
          }
        } //if dot(capsule_normal, n) != 0.0 {


        var dot = cn[0] * n[0] + cn[1] * n[1] + cn[2] * n[2];

        if (dot != 0.0) {
          //let tt = dot(n, (p0 - base) / dot(n, capsule_normal).abs());
          var tt = (n[0] * (t[0] - base[0]) + n[1] * (t[1] - base[1]) + n[2] * (t[2] - base[2])) / (dot > 0 ? dot : -dot); //let line_plane_intersection = base + capsule_normal * tt;

          var lpi = [base[0] + cn[0] * tt, base[1] + cn[1] * tt, base[2] + cn[2] * tt];
          rp = closest_point_on_triangle(t, n, lpi);
        }

        var center = closest_point_on_line(a, b, rp, C0);
        return SphereTriangle(center, r, t);
      }); // origin: Array<number>,
      // normal: Array<number>,
      // aabb: Array<number>, //minPos,maxPos
      // max: number = Number.POSITIVE_INFINITY,

      var RaycastAABB = exports('RaycastAABB', function RaycastAABB(o, n, b, max) {
        if (max === void 0) {
          max = Number.POSITIVE_INFINITY;
        }

        var lo = Number.NEGATIVE_INFINITY; //-Infinity;

        var hi = Number.POSITIVE_INFINITY; //+Infinity

        var tmp = 0.0,
            dimHi = 0.0,
            dimLo = 0.0;

        for (var i = 0; i < 3; i++) {
          dimLo = (b[i] - o[i]) / n[i];
          dimHi = (b[i + 3] - o[i]) / n[i];

          if (dimLo > dimHi) {
            tmp = dimLo;
            dimLo = dimHi;
            dimHi = tmp;
          }

          if (dimHi < lo || dimLo > hi) {
            return null;
          }

          if (dimLo > lo) lo = dimLo;
          if (dimHi < hi) hi = dimHi;
        }

        if (lo >= hi) return null;
        if (lo > max || hi < 0) return null; //if (lo == Number.POSITIVE_INFINITY) return null;

        return lo;
      }); // origin: Array<number>,
      // normal: Array<number>,
      // box: Array<number>, //center,halfSize
      // max: number = Number.POSITIVE_INFINITY,

      var RaycastBox = exports('RaycastBox', function RaycastBox(o, n, b, max) {
        if (max === void 0) {
          max = Number.POSITIVE_INFINITY;
        }

        var lo = Number.NEGATIVE_INFINITY; //-Infinity;

        var hi = Number.POSITIVE_INFINITY; //+Infinity

        var tmp = 0.0,
            dimHi = 0.0,
            dimLo = 0.0;

        for (var i = 0; i < 3; i++) {
          tmp = b[i] - o[i];
          dimLo = (tmp - b[i + 3]) / n[i];
          dimHi = (tmp + b[i + 3]) / n[i];

          if (dimLo > dimHi) {
            tmp = dimLo;
            dimLo = dimHi;
            dimHi = tmp;
          }

          if (dimHi < lo || dimLo > hi) {
            return null;
          }

          if (dimLo > lo) lo = dimLo;
          if (dimHi < hi) hi = dimHi;
        }

        if (lo >= hi) return null;
        if (lo > max || hi < 0) return null; //if (lo == Number.POSITIVE_INFINITY) return null;

        return lo;
      }); // origin: Array<number>,
      // normal: Array<number>,
      // trangle: Array<number>,
      // max: number = Number.POSITIVE_INFINITY,

      var RaycastTriangle = exports('RaycastTriangle', function RaycastTriangle(o, n, t, max) {
        if (max === void 0) {
          max = Number.POSITIVE_INFINITY;
        } // sub(edge1, t[1], t[0]);
        // sub(edge2, t[2], t[0]);


        var nx = n[0],
            ny = n[1],
            nz = n[2];
        var e1x = t[3] - t[0],
            e1y = t[4] - t[1],
            e1z = t[5] - t[2];
        var e2x = t[6] - t[0],
            e2y = t[7] - t[1],
            e2z = t[8] - t[2]; //cross(pvec, n, edge2);
        //var det = dot(edge1, pvec);
        //if (det < EPSILON) return -1;

        var px = ny * e2z - nz * e2y;
        var py = nz * e2x - nx * e2z;
        var pz = nx * e2y - ny * e2x;
        var det = e1x * px + e1y * py + e1z * pz;
        if (det < Number.EPSILON) return -1; // sub(tvec, o, t[0]);
        // var u = dot(tvec, pvec);
        // if (u < 0 || u > det) return -1;

        var tx = o[0] - t[0],
            ty = o[1] - t[1],
            tz = o[2] - t[2];
        var u = tx * px + ty * py + tz * pz;
        if (u < 0 || u > det) return -1; // cross(qvec, tvec, edge1);
        // var v = dot(n, qvec);
        // if (v < 0 || u + v > det) return -1;

        px = ty * e1z - tz * e1y;
        py = tz * e1x - tx * e1z;
        pz = tx * e1y - ty * e1x;
        var v = nx * px + ny * py + nz * pz;
        if (v < 0 || u + v > det) return -1; // var l = dot(edge2, qvec) / det;

        var dist = (e2x * px + e2y * py + e2z * pz) / det;
        return dist > max ? -1 : dist;
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mathUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "580abVCdWtOHYB5TaEre22h", "mathUtils", undefined);
      /**
       * 数学计算工具类
       * @export
       * @class mathUtils
       * @extends {singtonClass}
       */


      var mathUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(mathUtils, _singtonClass);

        function mathUtils() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _singtonClass.call.apply(_singtonClass, [this].concat(args)) || this;
          /**
              * 角度转弧度
              */

          _this.deg2Rad = Math.PI / 180;
          /**
           * 弧度转角度
           */

          _this.rad2Deg = 180 / Math.PI;
          return _this;
        }

        var _proto = mathUtils.prototype;
        /**
         * 获得随机方向
         * @param x -1为左，1为右
         * @returns 
         */

        _proto.sign = function sign(x) {
          if (x > 0) {
            return 1;
          }

          if (x < 0) {
            return -1;
          }

          return 0;
        }
        /**
         * 随时间变化进度值
         * @param start 初始值
         * @param end   结束值
         * @param t     时间
         */
        ;

        _proto.progress = function progress(start, end, t) {
          return start + (end - start) * t;
        }
        /**
         * 插值
         * @param numStart 开始数值
         * @param numEnd   结束数值
         * @param t        时间
         */
        ;

        _proto.lerp = function lerp(numStart, numEnd, t) {
          if (t > 1) {
            t = 1;
          } else if (t < 0) {
            t = 0;
          }

          return numStart * (1 - t) + numEnd * t;
        }
        /**
         * 角度插值
         * @param angle1 角度1
         * @param angle2 角度2
         * @param t      时间
         */
        ;

        _proto.lerpAngle = function lerpAngle(current, target, t) {
          current %= 360;
          target %= 360;
          var dAngle = target - current;

          if (dAngle > 180) {
            target = current - (360 - dAngle);
          } else if (dAngle < -180) {
            target = current + (360 + dAngle);
          }

          return (this.lerp(current, target, t) % 360 + 360) % 360;
        }
        /**
         * 按一定的速度从一个角度转向令一个角度
         * @param current 当前角度
         * @param target  目标角度
         * @param speed   速度
         */
        ;

        _proto.angleTowards = function angleTowards(current, target, speed) {
          current %= 360;
          target %= 360;
          var dAngle = target - current;

          if (dAngle > 180) {
            target = current - (360 - dAngle);
          } else if (dAngle < -180) {
            target = current + (360 + dAngle);
          }

          var dir = target - current;

          if (speed > Math.abs(dir)) {
            return target;
          }

          return ((current + speed * Math.sign(dir)) % 360 + 360) % 360;
        }
        /**
         * 获取方位内值，超过时获取对应边界值
         * @param value     值
         * @param minLimit  最小值
         * @param maxLimit  最大值
         */
        ;

        _proto.clamp = function clamp(value, minLimit, maxLimit) {
          if (value < minLimit) {
            return minLimit;
          }

          if (value > maxLimit) {
            return maxLimit;
          }

          return value;
        }
        /**
         * 获得一个值的概率
         * @param value 值
         */
        ;

        _proto.probability = function probability(value) {
          return Math.random() < value;
        };

        return mathUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ModelTips.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, UITransform, UIOpacity, tween, Component, app;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      app = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "cea6cWt4YVAlYqjfjFDNE7X", "ModelTips", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ModelTips = exports('ModelTips', (_dec = ccclass('ModelTips'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ModelTips, _Component);

        function ModelTips() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));

          _this.vo = null;
          return _this;
        }

        var _proto = ModelTips.prototype;

        _proto.setData = function setData(tips) {
          this.vo = tips;
          var padding = 50;
          this.label.overflow = Label.Overflow.NONE;
          this.label.string = tips + "";
          this.label.updateRenderData(true);
          var ui_label = this.label.node.getComponent(UITransform);

          if (ui_label.width > 500) {
            this.label.string = "";
            this.label.overflow = Label.Overflow.RESIZE_HEIGHT;
            ui_label.width = 500;
            this.label.string = tips + "";
            this.label.updateRenderData(true);
          }

          this.label.node.parent.getComponent(UITransform).width = ui_label.width + padding;
          this.label.node.parent.getComponent(UITransform).height = ui_label.height + padding;
        };

        _proto.show = function show(_time) {
          var _this2 = this;

          var node_opacity = this.node.getComponent(UIOpacity);
          tween(node_opacity).to(0.1, {
            opacity: 255
          }).delay(_time).to(0.15, {
            opacity: 0
          }).call(function () {
            app.pool.setNode(_this2.node);
          }).start();
        };

        return ModelTips;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MountainScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './Object3D.ts', './World.ts', './Common.ts', './ChickModel.ts', './Common_mountain.ts', './StepModel.ts', './WaveModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, v3, tween, Component, app, Object3D, World, Common, ChickModel, Common_mountain, StepModel;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      v3 = module.v3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      app = module.default;
    }, function (module) {
      Object3D = module.Object3D;
    }, function (module) {
      World = module.World;
    }, function (module) {
      Common = module.default;
    }, function (module) {
      ChickModel = module.ChickModel;
    }, function (module) {
      Common_mountain = module.default;
    }, function (module) {
      StepModel = module.StepModel;
    }, null],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "40931k0zctCf4197+DMDzYl", "MountainScene", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MountainScene = exports('MountainScene', (_dec = ccclass('MountainScene'), _dec2 = property(ChickModel), _dec3 = property(Object3D), _dec4 = property([Prefab]), _dec5 = property(Node), _dec6 = property(Prefab), _dec7 = property(World), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MountainScene, _Component);

        function MountainScene() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "role", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "role3D", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "arr_prefab", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeRoot", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "pre_wave", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "world", _descriptor6, _assertThisInitialized(_this));

          _this.index = 0;
          _this.maxCount = 5;
          _this.arr_step = [];
          _this._speed = 0.75;
          return _this;
        }

        var _proto = MountainScene.prototype;

        _proto.updateRoleX = function updateRoleX(_x) {
          var v = this.role.nodeX.getWorldPosition();

          var _x1 = _x / 375 * -2.75;

          _x1 = Math.max(_x1, -2.75);
          _x1 = Math.min(_x1, 2.75);
          v.x = _x1;
          this.role.nodeX.setWorldPosition(v); // console.warn(_x, v.x);
        };

        _proto.start = function start() {
          window["main"] = this; // this.init();
        };

        _proto.roleInit = function roleInit() {
          //添加角色碰撞检测
          var objects = this.role.node.getComponentsInChildren(Object3D); // console.log("=========:", objects.length);

          for (var i = 0; i < objects.length; i++) {
            this.world.insert(objects[i]);
          }
        };

        _proto.init = function init() {
          this.index = 0;
          this.maxCount = 5; //重置角色位置 及 角色动作

          this.role.node.setPosition(v3(0, 1, 0));
          this.role.nodeX.setPosition(v3(0, 0, 0));
          this.role.idle(); //移除所有的台阶

          this.removeAllStep(); //重置碰撞world
          // this.world.clear(false);
          // this.world.preBuild();
          //添加台阶

          for (var i = 0; i < this.maxCount; i++) {
            this.addStep(i);
          } //重置游戏速度


          this.updateSpeed(0); //添加角色碰撞检测

          var objects = this.role.node.getComponentsInChildren(Object3D);

          for (var _i = 0; _i < objects.length; _i++) {
            this.world.remove(objects[_i], false);
            this.world.insert(objects[_i]);
          }

          console.log("角色碰撞检测=========:", objects.length);
        };

        _proto.removeAllStep = function removeAllStep() {
          console.warn("移除所有台阶....");

          for (var i = 0; i < this.arr_step.length; i++) {
            // app.pool.setNode(this.arr_step[i].node);
            this.arr_step[i].removeSelf(this.world);
          }

          this.arr_step = [];
        };

        _proto.jump = function jump(_height) {
          var _this2 = this;

          if (_height === void 0) {
            _height = 4;
          }

          var _t = this._speed;
          var targetID = this.index + 1;
          var targetPosition = v3(0, targetID * 1 + 1, targetID * 2.5);
          /**
          * ====================================================
          * 生成一个新的台阶
          * ====================================================
          */

          this.index++;
          var i = this.maxCount;
          this.maxCount++;
          this.addStep(i);
          var initPosition = this.role.node.worldPosition.clone();
          this.role.jump(_t, _height);
          var obj = {
            a: 0
          };
          tween(obj).to(_t, {
            a: 1
          }, {
            progress: function progress(start, end, current, ratio) {
              var v = app.vector.lerp(initPosition, targetPosition, ratio);

              _this2.role.node.setWorldPosition(v);

              return 0;
            }
          }).call(function () {
            var res = _this2.checkCollsion();

            if (res == false || Common_mountain.debug == true) {
              _this2.addWave(_this2.role.nodeX.worldPosition.clone());

              _this2.jump(_height);

              app.event.emit(app.eName.event_addScore);
            } else {
              // if (Common_mountain.debug == false) {
              _this2.role.idle();

              _this2.role.playDieAnim();

              app.event.emit(app.eName.event_gameEnd);
            }

            _this2.removeStep();
          }).start();
        }
        /**
         * 添加一个波浪效果
         * @memberof MountainScene
         */
        ;

        _proto.addWave = function addWave(p) {
          return;
        }
        /**
         * 添加一个新的台阶
         * @param {number} [_index=0] 
         * @memberof MountainScene
         */
        ;

        _proto.addStep = function addStep(_index) {
          if (_index === void 0) {
            _index = 0;
          } // let node = app.pool.getNode(app.rand.randomArray(this.arr_prefab));


          var node = null;

          if (_index < 50) {
            node = app.pool.getNode(this.arr_prefab[0]);
          } else {
            node = app.pool.getNode(this.arr_prefab[1]);
          }

          node.setParent(this.nodeRoot);
          node.setWorldPosition(v3(0, _index * 1, _index * 2.5));
          var comp = node.getComponent(StepModel);
          comp.init(_index, this.world);
          this.arr_step.push(comp);
          /**
           * ====================================================
           * 添加obj3
           * ====================================================
          */

          var objects = node.getComponentsInChildren(Object3D);

          for (var i = 0; i < objects.length; i++) {
            this.world.insert(objects[i]);
          } // console.warn(Common.score, this.nodeRoot.children.length, this.world.objects.length, this.arr_step);

        }
        /**
         * 根据得分移除step
         * @memberof MountainScene
         */
        ;

        _proto.removeStep = function removeStep() {
          var _this3 = this;

          var index = Common.score - 1;
          var arr = this.arr_step.filter(function (obj) {
            return obj.index < index;
          });
          arr.forEach(function (obj) {
            obj.removeSelf(_this3.world);

            var index = _this3.arr_step.indexOf(obj);

            if (index !== -1) {
              _this3.arr_step.splice(index, 1);
            }
          });
        };

        _proto.updateSpeed = function updateSpeed(_index) {
          this._speed = Math.max(0.6, (90 - _index) / 100);
        }
        /**
         * 碰撞检测
         * @return {*}  {boolean}
         * @memberof MountainScene
         */
        ;

        _proto.checkCollsion = function checkCollsion() {
          /**
          * ====================================================
          * 更新鸡的位置
          * ====================================================
          */
          this.world.remove(this.role3D, false);
          this.world.insert(this.role3D);
          /**
          * ====================================================
          * 碰撞检测
          * ====================================================
          */

          var res = false;
          this.role.setNormalMaterial();
          var collisions = this.world.objectQuery(this.role3D, true);

          for (var i = 0; i < collisions.length; i++) {
            var obj = collisions[i];
            var result = this.world.collision.GJK(this.role3D, obj); // console.warn(result);

            if (result) {
              this.role.setRedMaterial(); // console.log("发生碰撞");

              res = true;
            }
          }

          return res;
        };

        return MountainScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "role", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "role3D", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arr_prefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeRoot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pre_wave", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "world", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MountainView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './BaseView.ts', './gameEnum.ts', './Common.ts', './Common_mountain.ts', './MountainScene.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Label, Input, app, BaseView, gameEnum, Common, Common_mountain, MountainScene;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Input = module.Input;
    }, function (module) {
      app = module.default;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      gameEnum = module.default;
    }, function (module) {
      Common = module.default;
    }, function (module) {
      Common_mountain = module.default;
    }, function (module) {
      MountainScene = module.MountainScene;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "fc6f2hVzD1HDq2cjijainsB", "MountainView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MountainView = exports('MountainView', (_dec = ccclass('MountainView'), _dec2 = property(Node), _dec3 = property(MountainScene), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(MountainView, _BaseView);

        function MountainView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "btnNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mgr", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lblDebug", _descriptor3, _assertThisInitialized(_this));
          /**
          * ====================================================
          * 游戏中UI
          * ====================================================
          */


          _initializerDefineProperty(_this, "nodeGame", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lblScore", _descriptor5, _assertThisInitialized(_this));
          /**
          * ====================================================
          * 游戏数据
          * ====================================================
          */


          _this._score = 0;
          _this.clicktime = 0;
          return _this;
        }

        var _proto = MountainView.prototype;

        _proto.onLoad = function onLoad() {// game.frameRate = 30;
        };

        _proto.start = function start() {
          this.show(gameEnum.view.NONE);
        };

        _proto.show = function show() {
          var _BaseView$prototype$s;

          this.arr_btn = [this.btnNode];
          this.arr_event = [{
            func: this.addScore,
            name: app.eName.event_addScore
          }, {
            func: this.gameStart,
            name: app.eName.event_gameStart
          }, {
            func: this.gameEnd,
            name: app.eName.event_gameEnd
          }, {
            func: this.gameAgain,
            name: app.eName.event_gameAgain
          }, {
            func: this.init,
            name: app.eName.event_gameInit
          }];

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          (_BaseView$prototype$s = _BaseView.prototype.show).call.apply(_BaseView$prototype$s, [this].concat(args));

          this.node.on(Input.EventType.TOUCH_START, this._move, this);
          this.node.on(Input.EventType.TOUCH_MOVE, this._move, this);
          this.mgr.roleInit();
          this.init();
        };

        _proto.init = function init(autoRun) {
          if (autoRun === void 0) {
            autoRun = false;
          }

          Common.init();
          this.nodeGame.active = false;
          this._score = 0;
          this.lblScore.string = "" + this._score;
          this.mgr.init();
          app.eventObj.openView(gameEnum.view.StartView, gameEnum.layer.WINDOW_LAYER, autoRun);
        };

        _proto.addScore = function addScore() {
          this._score++;
          Common.score = this._score;
          this.lblScore.string = "" + this._score;
          this.mgr.updateSpeed(this._score);
        };

        _proto.gameAgain = function gameAgain() {
          this.init(true);
        };

        _proto.gameStart = function gameStart() {
          Common.isRun = true;
          app.eventObj.closeView(gameEnum.view.StartView);
          this.mgr.jump(3);
          this.nodeGame.active = true;
        };

        _proto.gameEnd = /*#__PURE__*/function () {
          var _gameEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(Common.isRun == false)) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  Common.isRun = false;
                  Common.coin = this._score;
                  _context.next = 6;
                  return app.promise.sleep(2);

                case 6:
                  app.eventObj.openView(gameEnum.view.GameResView, gameEnum.layer.WINDOW_LAYER, "\u5F53\u524D\u5F97\u5206\uFF1A" + Common.coin);

                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function gameEnd() {
            return _gameEnd.apply(this, arguments);
          }

          return gameEnd;
        }();

        _proto._move = function _move(e) {
          if (Common.isRun == false) {
            return;
          }

          switch (e.type) {
            case Input.EventType.TOUCH_START:
              // this._start_x = e.getLocationInView().x;
              break;

            case Input.EventType.TOUCH_MOVE:
              // let _x = e.getLocationInView().x;
              // let _temp = _x - this._start_x;
              var x = e.getUILocation().x - 375;
              this.mgr.updateRoleX(x);
              break;
          }
        };

        _proto.click = function click(e) {
          var d = new Date().getTime();

          if (d - this.clicktime < Common.clickWaitTime) {
            return;
          }

          this.clicktime = d;

          switch (e.target) {
            case this.btnNode:
              break;
          }
        };

        _proto.update = function update(dt) {
          this.lblDebug.string = "\u78B0\u649E\u8C03\u8BD5(" + (Common_mountain.debug == true ? "开" : "关") + ")";
        };

        _proto.changeDebug = function changeDebug() {
          Common_mountain.debug = !Common_mountain.debug;
        };

        return MountainView;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mgr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblDebug", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeGame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblScore", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Object3D.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Collision.ts', './Debug.ts', './Kdtree.ts', './Math.ts', './ObjNode.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, utils, primitives, Mesh, PhysicsSystem, CCInteger, Vec3, Mat4, MeshRenderer, Color, Component, ShapeType, Debug, Kdtree, CapsuleTriangle, SphereTriangle, AABBTriangle, RaycastTriangle, ObjNode;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      utils = module.utils;
      primitives = module.primitives;
      Mesh = module.Mesh;
      PhysicsSystem = module.PhysicsSystem;
      CCInteger = module.CCInteger;
      Vec3 = module.Vec3;
      Mat4 = module.Mat4;
      MeshRenderer = module.MeshRenderer;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      ShapeType = module.ShapeType;
    }, function (module) {
      Debug = module.Debug;
    }, function (module) {
      Kdtree = module.Kdtree;
    }, function (module) {
      CapsuleTriangle = module.CapsuleTriangle;
      SphereTriangle = module.SphereTriangle;
      AABBTriangle = module.AABBTriangle;
      RaycastTriangle = module.RaycastTriangle;
    }, function (module) {
      ObjNode = module.ObjNode;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      cclegacy._RF.push({}, "4c004euHlxHyZISqmdYtGsS", "Object3D", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BoundType = Enum(ShapeType);
      var BoundShapeMesh = [utils.createMesh(primitives.box()), utils.createMesh(primitives.sphere(0.5, {
        segments: 12
      })), utils.createMesh(primitives.capsule(0.5, 0.5, 2, {
        sides: 12,
        heightSegments: 12
      }))];
      var Object3D = exports('Object3D', (_dec = ccclass('Object3D'), _dec2 = property({
        type: Mesh,
        displayName: "Collider"
      }), _dec3 = property({
        type: BoundType,
        displayName: "Bound"
      }), _dec4 = property({
        type: PhysicsSystem.PhysicsGroup
      }), _dec5 = property({
        group: "Kdtree",
        visible: function visible() {
          return this.useTriangle;
        }
      }), _dec6 = property({
        type: CCInteger,
        group: "Kdtree",
        step: 1,
        min: 9,
        max: 25,
        visible: function visible() {
          return this.useTriangle;
        }
      }), _dec7 = property({
        type: CCInteger,
        group: "Kdtree",
        step: 1,
        min: 1,
        max: 8,
        visible: function visible() {
          return this.useTriangle;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Object3D, _Component);

        function Object3D() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "meshCollider", _descriptor, _assertThisInitialized(_this)); //use Low poly for mesh collider


          _initializerDefineProperty(_this, "fastBound", _descriptor2, _assertThisInitialized(_this)); //for bound culling


          _initializerDefineProperty(_this, "group", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "useTriangle", _descriptor4, _assertThisInitialized(_this)); //default is convex hull,


          _initializerDefineProperty(_this, "debug", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "maxLevels", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "maxObjects", _descriptor7, _assertThisInitialized(_this)); //flag


          _this.id = 0;
          _this.flag = 0;
          _this.mask = 0xFFFFFFFF; //collider mask

          _this.isDirty = 0xFFFFFFFF;
          _this.useBoundShape = false; //local

          _this.bound = []; //model bound

          _this.center = new Vec3(); //model center

          _this.worldBounds = []; //sub mesh world bound
          //cache

          _this.kdtree = null;
          _this.indices = [];
          _this.vertices = [];
          _this.objNodes = []; //temp

          _this._mat4 = new Mat4();
          _this._inv4 = new Mat4();
          _this._verts = [];
          _this._normal = new Vec3();
          _this._center = new Vec3(); //model world center

          _this._worldBound = [];
          return _this;
        }

        var _proto = Object3D.prototype; //model world Bound

        _proto.onLoad = function onLoad() {
          this.init();
        };

        _proto.init = function init() {
          if (!this.meshCollider) {
            var render = this.node.getComponent(MeshRenderer);

            if (render) {
              this.meshCollider = render.mesh;
            } else {
              this.useTriangle = false;
              this.useBoundShape = true;
              this.meshCollider = BoundShapeMesh[this.fastBound];
            }
          }

          this.preBuild();
          this.mask = PhysicsSystem.instance.collisionMatrix[this.group];
        };

        _proto.clear = function clear() {
          if (this.kdtree) {
            this.kdtree.clear();
            this.kdtree = null;
          }

          var length = this.objNodes.length;

          for (var i = 0; i < length; i++) {
            this.objNodes[i].clear();
          }

          this.bound = [];
          this.indices = [];
          this.vertices = [];
          this.objNodes = [];
          this.worldBounds = []; // this.init();
        };

        _proto.setScale = function setScale(scale) {
          this.isDirty |= 1 | 8;
          this.node.scale = scale;
          return scale;
        };

        _proto.getScale = function getScale() {
          return this.node.scale;
        };

        _proto.setRotation = function setRotation(rot) {
          this.isDirty |= 2 | 8;
          this.node.rotation = rot;
          return rot;
        };

        _proto.getRotation = function getRotation() {
          return this.node.rotation;
        };

        _proto.setPosition = function setPosition(pos) {
          this.isDirty |= 4 | 8;
          this.node.position = pos;
          return pos;
        };

        _proto.getPosition = function getPosition() {
          return this.node.position;
        };

        _proto.getWorldScale = function getWorldScale() {
          return this.node.scale;
        };

        _proto.getWorldPosition = function getWorldPosition() {
          return this.node.worldPosition;
        };

        _proto.getWorldRotation = function getWorldRotation() {
          return this.node.worldRotation;
        };

        _proto.getWorldMatrix = function getWorldMatrix() {
          return this.node.worldMatrix;
        };

        _proto.getWorldMatrixInvert = function getWorldMatrixInvert() {
          if (this.isDirty & 0xf) {
            this.isDirty &= ~0xf;
            Mat4.invert(this._inv4, this.node.worldMatrix);
          }

          return this._inv4;
        };

        _proto.getWorldCenter = function getWorldCenter() {
          return Vec3.transformMat4(this._center, this.center, this.getWorldMatrix());
        };

        _proto.getColliderShape = function getColliderShape() {
          return this.useBoundShape ? this.fastBound : -1;
        };

        _proto.preBuild = function preBuild() {
          //build local bound and center
          var struct = this.meshCollider.struct;
          var min = struct.minPosition,
              max = struct.maxPosition;
          this.bound = [min.x, min.y, min.z, max.x, max.y, max.z];
          this.center.set((min.x + max.x) * 0.5, (min.y + max.y) * 0.5, (min.z + max.z) * 0.5);
          var objects = [];
          var meshs = this.meshCollider.renderingSubMeshes;

          for (var i = 0; i < meshs.length; i++) {
            var geoInfo = meshs[i].geometricInfo;
            var vertices = geoInfo.positions;
            var indices = geoInfo.indices;
            this.vertices.push(vertices);
            this.indices.push(indices);
            this.worldBounds.push([]);

            if (this.useTriangle) {
              //build triangles Kdtree
              if (indices.length > 0) {
                var length = indices.length / 3;

                for (var j = 0; j < length; j++) {
                  var a = indices[j * 3];
                  var b = indices[j * 3 + 1];
                  var c = indices[j * 3 + 2];
                  var tris = [vertices[a * 3], vertices[a * 3 + 1], vertices[a * 3 + 2], vertices[b * 3], vertices[b * 3 + 1], vertices[b * 3 + 2], vertices[c * 3], vertices[c * 3 + 1], vertices[c * 3 + 2]];
                  var x = Math.min(tris[0], tris[3], tris[6]);
                  var y = Math.min(tris[1], tris[4], tris[7]);
                  var z = Math.min(tris[2], tris[5], tris[8]);
                  var X = Math.max(tris[0], tris[3], tris[6]);
                  var Y = Math.max(tris[1], tris[4], tris[7]);
                  var Z = Math.max(tris[2], tris[5], tris[8]);
                  objects.push(new ObjNode(this, i, j, [x, y, z, X, Y, Z], tris));
                }
              }
            }
          }

          if (this.useTriangle) {
            // Kdtree.lCount = 0;
            this.kdtree = new Kdtree(objects, 0, objects.length - 1, this.bound, 1, this.maxObjects << 8 | this.maxLevels); //  console.log("avg levels:"+(Kdtree.lCount*1.0/objects.length));
          }

          this.updateBounds(true); //preBuild update  worldBounds
        };

        _proto.getVertices = function getVertices(idx) {
          if (idx === void 0) {
            idx = 0;
          }

          return this.vertices[idx];
        };

        _proto.getWorldBound = function getWorldBound(idx) {
          if (idx === void 0) {
            idx = -1;
          }

          this.updateBounds();

          if (idx >= 0) {
            //sub mesh world bound
            return this.worldBounds[idx];
          } //model world bound


          return this._worldBound;
        };

        _proto.calculateBound = function calculateBound(out, b, m) {
          var x = (b[3] + b[0]) * 0.5;
          var y = (b[4] + b[1]) * 0.5;
          var z = (b[5] + b[2]) * 0.5;
          var hx = (b[3] - b[0]) * 0.5;
          var hy = (b[4] - b[1]) * 0.5;
          var hz = (b[5] - b[2]) * 0.5;
          var cx = m.m00 * x + m.m04 * y + m.m08 * z + m.m12;
          var cy = m.m01 * x + m.m05 * y + m.m09 * z + m.m13;
          var cz = m.m02 * x + m.m06 * y + m.m10 * z + m.m14;
          var m0 = hx * m.m00,
              m1 = hx * m.m01,
              m2 = hx * m.m02,
              m3 = hy * m.m04,
              m4 = hy * m.m05,
              m5 = hy * m.m06,
              m6 = hz * m.m08,
              m7 = hz * m.m09,
              m8 = hz * m.m10;
          hx = (m0 >= 0 ? m0 : -m0) + (m3 >= 0 ? m3 : -m3) + (m6 >= 0 ? m6 : -m6);
          hy = (m1 >= 0 ? m1 : -m1) + (m4 >= 0 ? m4 : -m4) + (m7 >= 0 ? m7 : -m7);
          hz = (m2 >= 0 ? m2 : -m2) + (m5 >= 0 ? m5 : -m5) + (m8 >= 0 ? m8 : -m8);
          out[0] = cx - hx, out[1] = cy - hy, out[2] = cz - hz;
          out[3] = cx + hx, out[4] = cy + hy, out[5] = cz + hz;
          return out;
        };

        _proto.updateBounds = function updateBounds(force) {
          if (force === void 0) {
            force = false;
          }

          if ((this.isDirty & 0x8 || force) && this.worldBounds.length) {
            var m = this.getWorldMatrix();
            var subMeshs = this.meshCollider.renderingSubMeshes; //sub mesh wrold bound

            for (var i = 0; i < subMeshs.length; i++) {
              var geoInfo = subMeshs[i].geometricInfo;
              var min = geoInfo.boundingBox.min;
              var max = geoInfo.boundingBox.max;
              var bound = this.worldBounds[i];
              bound[0] = min.x;
              bound[1] = min.y;
              bound[2] = min.z;
              bound[3] = max.x;
              bound[4] = max.y;
              bound[5] = max.z;
              this.calculateBound(bound, bound, m);
            } //model world bound
            //this.calculateBound(this._worldBound,this.bound,m);


            if (subMeshs.length <= 1) {
              this._worldBound = this.worldBounds[0];
            } else {
              this.calculateBound(this._worldBound, this.bound, m);
            }

            this.isDirty &= ~0x8;
          }

          return this.worldBounds;
        };

        _proto.boundCulling = function boundCulling(object) {
          if (object.isBox) return false; //TODO?
          // triangle culling

          var verts = this._verts;
          var localBound = this.bound;
          var v = object.getVertices();
          var m = Mat4.multiply(this._mat4, this.getWorldMatrixInvert(), object.getWorldMatrix());

          for (var i = 0, j = v.length / 3; i < j; i++) {
            var x = v[i * 3],
                y = v[i * 3 + 1],
                z = v[i * 3 + 2];
            verts[i * 3] = m.m00 * x + m.m04 * y + m.m08 * z + m.m12;
            verts[i * 3 + 1] = m.m01 * x + m.m05 * y + m.m09 * z + m.m13;
            verts[i * 3 + 2] = m.m02 * x + m.m06 * y + m.m10 * z + m.m14;
          }

          switch (this.fastBound) {
            case BoundType.Box:
              return !AABBTriangle(localBound, verts);

            case BoundType.Sphere:
              return !SphereTriangle([0, 0, 0], 0.5, verts);

            case BoundType.Capsule:
              return !CapsuleTriangle([0, 1, 0], [0, -1, 0], 0.5, verts);
          }

          return false;
        };

        _proto.boundTriangles = function boundTriangles(bound, world) {
          if (world === void 0) {
            world = null;
          }

          var result = [];
          var localBound = [];

          if (this.useTriangle) {
            var m = this.getWorldMatrixInvert();

            if (world) {
              m = Mat4.multiply(this._mat4, m, world);
            }

            this.calculateBound(localBound, bound, m);
            this.kdtree.retrieve(localBound, result);

            if (this.debug) {
              for (var i = 0; i < result.length; i++) {
                var obj = result[i];
                Debug.addTriangle(obj.getVertices(), obj.getWorldMatrix(), Color.BLUE);
              } // Debug.addBox(localBound, this.getWorldMatrix(), Color.BLUE);

            }
          }

          return result;
        };

        _proto.boundObject = function boundObject(obj3d) {
          // Kdtree.tCount = 0;
          // Kdtree.nCount = 0;
          var localBound = obj3d.bound;
          var fastBound = obj3d.fastBound;
          var world = obj3d.getWorldMatrix();
          var result = this.boundTriangles(localBound, world);

          if (result.length) {
            // triangles culling
            var inc = 0,
                verts = this._verts,
                length = result.length;
            var m = Mat4.multiply(this._mat4, obj3d.getWorldMatrixInvert(), this.getWorldMatrix());
            var mm = [m.m00, m.m04, m.m08, m.m12, m.m01, m.m05, m.m09, m.m13, m.m02, m.m06, m.m10, m.m14];

            for (var j = 0; j < length; j++) {
              var obj = result[j],
                  v = obj.getVertices();

              for (var k = 0; k < 3; k++) {
                var x = v[k * 3],
                    y = v[k * 3 + 1],
                    z = v[k * 3 + 2];
                verts[k * 3] = mm[0] * x + mm[1] * y + mm[2] * z + mm[3];
                verts[k * 3 + 1] = mm[4] * x + mm[5] * y + mm[6] * z + mm[7];
                verts[k * 3 + 2] = mm[8] * x + mm[9] * y + mm[10] * z + mm[11];
              }

              var isCollision = false;

              switch (fastBound) {
                case BoundType.Box:
                  isCollision = AABBTriangle(localBound, verts);
                  break;

                case BoundType.Sphere:
                  isCollision = SphereTriangle([0, 0, 0], 0.5, verts);
                  break;

                case BoundType.Capsule:
                  isCollision = CapsuleTriangle([0, 1, 0], [0, -1, 0], 0.5, verts);
                  break;
              }

              if (isCollision) {
                if (inc < j) {
                  result[inc] = result[j];
                }

                inc++;

                if (this.debug) {
                  Debug.addTriangle(obj.getVertices(), obj.getWorldMatrix(), Color.RED);
                }
              }
            }

            result.length = inc; //    console.log(obj3d.node.name + ":");
            //    console.log("total:" + (Kdtree.tCount + Kdtree.nCount));
            //    console.log("tree Nodes:" + Kdtree.nCount);
            //    console.log("triangles:" + Kdtree.tCount);
            //    console.log("results:" + inc);
            //    console.log("----------------------------------------------");
          } // result.length = 0;


          return result;
        };

        _proto.rayCast = function rayCast(ray, id) {
          var normal = this._normal;
          var isHit = false;
          var hitData = [];
          var m = this.getWorldMatrixInvert(); //rotate*direction -> current direction

          var n = [ray[3] * m.m00 + ray[4] * m.m04 + ray[5] * m.m08, ray[3] * m.m01 + ray[4] * m.m05 + ray[5] * m.m09, ray[3] * m.m02 + ray[4] * m.m06 + ray[5] * m.m10];
          var scale = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
          var min = ray[6] * scale; //current distance

          var invSqrt = scale > 0 ? 1.0 / scale : 0;
          n[0] *= invSqrt, n[1] *= invSqrt, n[2] *= invSqrt; //matrix*origin -> current origin

          var o = [ray[0] * m.m00 + ray[1] * m.m04 + ray[2] * m.m08 + m.m12, ray[0] * m.m01 + ray[1] * m.m05 + ray[2] * m.m09 + m.m13, ray[0] * m.m02 + ray[1] * m.m06 + ray[2] * m.m10 + m.m14];

          if (this.useTriangle) {
            var MAX = Number.POSITIVE_INFINITY;

            var result = function result(obj) {
              var rayDist = obj.rayDist;

              if (rayDist < 0 || min > rayDist) {
                var dist = RaycastTriangle(o, n, obj.getVertices(), min);

                if (dist >= 0 && min > dist) {
                  normal.set(obj.normal);
                  isHit = true;
                  min = dist;
                  return min;
                }
              }

              return MAX;
            };

            this.kdtree.rayCast([o[0], o[1], o[2], n[0], n[1], n[2], min], result);
          } else {
            var indices = this.indices[id];
            var vertices = this.vertices[id];
            var idx = 0;
            var verts = this._verts;
            var length = indices.length / 3;

            for (var i = 0; i < length; i++) {
              var a = indices[i * 3],
                  b = indices[i * 3 + 1],
                  c = indices[i * 3 + 2];
              verts[0] = vertices[a * 3], verts[1] = vertices[a * 3 + 1], verts[2] = vertices[a * 3 + 2];
              verts[3] = vertices[b * 3], verts[4] = vertices[b * 3 + 1], verts[5] = vertices[b * 3 + 2];
              verts[6] = vertices[c * 3], verts[7] = vertices[c * 3 + 1], verts[8] = vertices[c * 3 + 2];
              var dist = RaycastTriangle(o, n, verts, min);

              if (dist >= 0 && min > dist) {
                isHit = true;
                min = dist;
                idx = i;
              }
            }

            if (isHit) {
              //calculate triangle normal
              var _a = indices[idx * 3],
                  _b = indices[idx * 3 + 1],
                  _c = indices[idx * 3 + 2];
              verts[0] = vertices[_a * 3], verts[1] = vertices[_a * 3 + 1], verts[2] = vertices[_a * 3 + 2];
              verts[3] = vertices[_b * 3], verts[4] = vertices[_b * 3 + 1], verts[5] = vertices[_b * 3 + 2];
              verts[6] = vertices[_c * 3], verts[7] = vertices[_c * 3 + 1], verts[8] = vertices[_c * 3 + 2];
              var ax = verts[3] - verts[0],
                  ay = verts[4] - verts[1],
                  az = verts[5] - verts[2];
              var bx = verts[6] - verts[0],
                  by = verts[7] - verts[1],
                  bz = verts[8] - verts[2]; //cross

              normal.x = ay * bz - az * by;
              normal.y = az * bx - ax * bz;
              normal.z = ax * by - ay * bx; //normal.normalize();
            }
          }

          if (isHit) {
            //wordMatrix*normal
            var _m = this.getWorldMatrix();

            var x = normal.x,
                y = normal.y,
                z = normal.z;
            normal.x = x * _m.m00 + y * _m.m04 + z * _m.m08;
            normal.y = x * _m.m01 + y * _m.m05 + z * _m.m09;
            normal.z = x * _m.m02 + y * _m.m06 + z * _m.m10;
            normal.normalize();

            var _dist = min / scale;

            hitData[0] = ray[0] + ray[3] * _dist;
            hitData[1] = ray[1] + ray[4] * _dist;
            hitData[2] = ray[2] + ray[5] * _dist;
            hitData[3] = normal.x;
            hitData[4] = normal.y;
            hitData[5] = normal.z;
            hitData[6] = _dist;
            return hitData;
          }

          return null;
        };

        _proto.getGroup = function getGroup() {
          return this.group;
        };

        _proto.setGroup = function setGroup(v) {
          this.group = v;
        };

        _proto.addGroup = function addGroup(v) {
          this.group |= v;
        };

        _proto.removeGroup = function removeGroup(v) {
          this.group &= ~v;
        };

        _proto.getMask = function getMask() {
          return this.mask;
        };

        _proto.setMask = function setMask(v) {
          this.mask = v;
        };

        _proto.addMask = function addMask(v) {
          this.mask |= v;
        };

        _proto.removeMask = function removeMask(v) {
          this.mask &= ~v;
        };

        return Object3D;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "meshCollider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fastBound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BoundType.Box;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "group", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PhysicsSystem.PhysicsGroup.DEFAULT;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "useTriangle", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "debug", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "maxLevels", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 16;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "maxObjects", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ObjNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, Vec3;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "03846lN9lRMQId0vG1Lqtw/", "ObjNode", undefined);

      var ObjNode = exports('ObjNode', /*#__PURE__*/function () {
        function ObjNode(obj3D, id0, id1, bound, vertices) {
          if (vertices === void 0) {
            vertices = null;
          }

          this.obj3D = void 0; //aabb:(id0:objectID,id1:meshID) -> octree;
          //triangle:(id0:meshID,id1:triangleID) -> kdtree; 

          this.id0 = 0;
          this.id1 = 0;
          this.normal = new Vec3();
          this.center = new Vec3();
          this.bound = null;
          this.vertices = null;
          this.flag = 0;
          this.isBox = true;
          this.rayDist = 0;
          this.maxLevel = 4;
          this.targets = [];
          this._normal = new Vec3();
          this._center = new Vec3();
          this.flag = 0;
          this.id0 = id0;
          this.id1 = id1;
          this.obj3D = obj3D;
          this.bound = bound;
          this.vertices = vertices;
          this.isBox = vertices ? false : true;

          if (this.isBox) {
            //aabb
            this.center.x = (bound[0] + bound[3]) / 2.0;
            this.center.y = (bound[1] + bound[4]) / 2.0;
            this.center.z = (bound[2] + bound[5]) / 2.0;
            this.vertices = this.obj3D.getVertices(this.id1); // bind mesh vertices;
          } else {
            //triangle
            this.center.x = (vertices[0] + vertices[3] + vertices[6]) / 3.0;
            this.center.y = (vertices[1] + vertices[4] + vertices[7]) / 3.0;
            this.center.z = (vertices[2] + vertices[5] + vertices[8]) / 3.0;
            var ax = vertices[3] - vertices[0],
                ay = vertices[4] - vertices[1],
                az = vertices[5] - vertices[2];
            var bx = vertices[6] - vertices[0],
                by = vertices[7] - vertices[1],
                bz = vertices[8] - vertices[2];
            this.normal.x = ay * bz - az * by;
            this.normal.y = az * bx - ax * bz;
            this.normal.z = ax * by - ay * bx;
            this.normal.normalize();
          }
        }

        var _proto = ObjNode.prototype;

        _proto.getVertices = function getVertices() {
          return this.vertices;
        };

        _proto.getWorldMatrix = function getWorldMatrix() {
          return this.obj3D.getWorldMatrix();
        };

        _proto.getColliderShape = function getColliderShape() {
          return this.obj3D.getColliderShape();
        };

        _proto.getWorldBound = function getWorldBound() {
          if (!this.isBox) {
            var bound = this.bound;
            var m = this.getWorldMatrix();
            return this.obj3D.calculateBound([], bound, m);
          }

          return this.obj3D.getWorldBound(this.id1);
        };

        _proto.getWorldCenter = function getWorldCenter() {
          return Vec3.transformMat4(this._center, this.center, this.getWorldMatrix());
        };

        _proto.getWorldNormal = function getWorldNormal() {
          return Vec3.transformQuat(this._normal, this.normal, this.obj3D.getWorldRotation());
        };

        _proto.insert = function insert(tree) {
          this.targets.push(tree);
        };

        _proto.remove = function remove(tree) {
          var targets = this.targets;
          var idx = targets.indexOf(tree);

          if (idx != -1) {
            var end = targets.length - 1;
            targets[idx] = targets[end];
            targets.length = end;
          }
        };

        _proto.clear = function clear() {
          this.obj3D = null;
          this.bound = null;
          this.targets = null;
          this.vertices = null;
        };

        _createClass(ObjNode, [{
          key: "mask",
          get: function get() {
            return this.obj3D.mask;
          }
        }, {
          key: "group",
          get: function get() {
            return this.obj3D.group;
          }
        }]);

        return ObjNode;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Octree.ts", ['cc', './Math.ts'], function (exports) {
  var cclegacy, RaycastBox, RaycastAABB;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      RaycastBox = module.RaycastBox;
      RaycastAABB = module.RaycastAABB;
    }],
    execute: function () {
      cclegacy._RF.push({}, "27156sYO9lPJr4FTFJfQAhF", "Octree", undefined);

      var GetMaxLevel = exports('GetMaxLevel', function GetMaxLevel(obj, oct, ratio) {
        if (ratio === void 0) {
          ratio = 1.0;
        }

        var maxLevel = oct.object_level >> 8;

        if (ratio <= 0) {
          obj.maxLevel = maxLevel;
          return maxLevel;
        }

        var a = obj.bound;
        var b = oct.bound;
        var avgB = (b[3] + b[4] + b[5]) * 2.0; //halfSize * 2.0

        var avgA = a[3] - a[0] + (a[4] - a[1]) + (a[5] - a[2]);
        maxLevel = ~~Math.log2(avgB / (avgA * ratio));
        obj.maxLevel = maxLevel;
        return maxLevel;
      });
      var Octree = exports('Octree', /*#__PURE__*/function () {
        // static count:number = 0;
        function Octree(bound, object_level, level, parent, id) {
          if (bound === void 0) {
            bound = [];
          }

          if (object_level === void 0) {
            object_level = 8 << 8 | 4;
          }

          if (level === void 0) {
            level = 0;
          }

          if (parent === void 0) {
            parent = null;
          }

          if (id === void 0) {
            id = 0;
          }

          this.id = 0;
          this.idxs = 0;
          this.level = 0;
          this.parent = null;
          this.bound = [];
          this.nodes = [];
          this.objects = [];
          this.object_level = 8 << 8 | 4;
          this.id = id;
          this.idxs = 0;
          this.nodes = [];
          this.objects = [];
          this.bound = bound;
          this.level = level;
          this.parent = parent;
          this.object_level = object_level;
        }

        var _proto = Octree.prototype;

        _proto.split = function split() {
          var level = this.level;
          var object_level = this.object_level - 1;
          var nodes = this.nodes,
              bound = this.bound;
          var x = bound[0],
              y = bound[1],
              z = bound[2],
              w = bound[3] * 0.5,
              h = bound[4] * 0.5,
              d = bound[5] * 0.5;
          nodes[0] = new Octree([x + w, y - h, z - d, w, h, d], object_level, level + 1, this, 0);
          nodes[1] = new Octree([x - w, y - h, z - d, w, h, d], object_level, level + 1, this, 1);
          nodes[2] = new Octree([x - w, y + h, z - d, w, h, d], object_level, level + 1, this, 2);
          nodes[3] = new Octree([x + w, y + h, z - d, w, h, d], object_level, level + 1, this, 3);
          nodes[4] = new Octree([x + w, y - h, z + d, w, h, d], object_level, level + 1, this, 4);
          nodes[5] = new Octree([x - w, y - h, z + d, w, h, d], object_level, level + 1, this, 5);
          nodes[6] = new Octree([x - w, y + h, z + d, w, h, d], object_level, level + 1, this, 6);
          nodes[7] = new Octree([x + w, y + h, z + d, w, h, d], object_level, level + 1, this, 7);
        };

        _proto.getIndex = function getIndex(pRect) {
          var idxs = 0,
              bound = this.bound;
          var x = bound[0],
              y = bound[1],
              z = bound[2];
          var L = pRect[0] < x,
              R = pRect[3] >= x;
          var D = pRect[1] < y,
              U = pRect[4] >= y;
          var B = pRect[2] < z,
              F = pRect[5] >= z;

          if (R && D) {
            B && (idxs = 1);
            F && (idxs |= 1 << 16);
          }

          if (L && D) {
            B && (idxs |= 1 << 4);
            F && (idxs |= 1 << 20);
          }

          if (L && U) {
            B && (idxs |= 1 << 8);
            F && (idxs |= 1 << 24);
          }

          if (R && U) {
            B && (idxs |= 1 << 12);
            F && (idxs |= 1 << 28);
          }

          return idxs;
        };

        _proto.remove = function remove(obj) {
          var octrees = obj.targets;

          for (var i = octrees.length - 1; i >= 0; i--) {
            var node = octrees[i];
            var objects = node.objects;

            if (objects) {
              var idx = objects.indexOf(obj);

              if (idx != -1 && objects.length > 0) {
                //remove obj
                var end = objects.length - 1;
                objects[idx] = objects[end];
                objects.length = end; //combine tree

                while (end == 0 && node.idxs == 0) {
                  node.reset();
                  node.objects = [];
                  var id = node.id;
                  node = node.parent;
                  if (!node) break; //head = null, break;

                  end = node.objects.length;
                  node.idxs &= ~(1 << id * 4);
                }
              }
            } else {
              console.error(node);
            }
          }

          octrees.length = 0;
        };

        _proto.insert = function insert(obj) {
          var level = this.level,
              nodes = this.nodes,
              objects = this.objects,
              object_level = this.object_level;

          if (nodes.length) {
            if (obj.maxLevel != level) {
              var j = 0,
                  idxs = this.getIndex(obj.bound);
              this.idxs |= idxs;

              while (idxs) {
                if (idxs & 0xF) nodes[j].insert(obj);
                idxs = idxs >> 4;
                j++;
              }
            } else {
              objects.push(obj);
              obj.insert(this);
            }

            return;
          }

          objects.push(obj);
          obj.insert(this);

          if (objects.length > object_level >> 8 && object_level & 0xFF) {
            this.split();
            var inc = 0,
                length = objects.length;

            for (var i = 0; i < length; i++) {
              var _obj = objects[i];

              if (_obj.maxLevel != level) {
                _obj.remove(this);

                var _j = 0,
                    _idxs = this.getIndex(_obj.bound);

                this.idxs |= _idxs;

                while (_idxs) {
                  if (_idxs & 0xF) nodes[_j].insert(_obj);
                  _idxs = _idxs >> 4;
                  _j++;
                }
              } else {
                objects[inc++] = objects[i];
              }
            }

            objects.length = inc;
          }
        };

        _proto.retrieve = function retrieve(bound, flag, result, mask) {
          if (mask === void 0) {
            mask = 0xFFFFFFFF;
          }

          var inc = 0;
          var A = bound;
          var queue = [this];

          while (inc >= 0) {
            var octree = queue[inc--];
            var idxs = octree.idxs;
            var nodes = octree.nodes;
            var objects = octree.objects;

            for (var i = 0, j = objects.length; i < j; i++) {
              var obj = objects[i],
                  B = obj.bound;

              if (obj.flag < flag) {
                obj.flag = flag;

                if (mask & obj.group) {
                  if (!(B[0] > A[3] || A[0] > B[3] || B[1] > A[4] || A[1] > B[4] || B[2] > A[5] || A[2] > B[5])) {
                    result.push(obj);
                  }
                }
              }
            }

            if (idxs) {
              idxs &= octree.getIndex(A);

              for (var _i = 0; idxs != 0; idxs >>= 4, _i++) {
                if (idxs & 0xF) {
                  queue[++inc] = nodes[_i];
                }
              }
            }
          }
        };

        _proto.rayCast = function rayCast(ray, flag, result, mask) {
          if (mask === void 0) {
            mask = 0xFFFFFFFF;
          }

          var max = ray[6];
          var o = [ray[0], ray[1], ray[2]]; //origin

          var n = [ray[3], ray[4], ray[5]]; //normal

          var inc = 0;
          var queue = [this];

          while (inc >= 0) {
            // Octree.count++;
            var octree = queue[inc--];

            if (RaycastBox(o, n, octree.bound, max) != null) {
              var idxs = octree.idxs;
              var nodes = octree.nodes;
              var objects = octree.objects;

              for (var i = 0, j = objects.length; i < j; i++) {
                var obj = objects[i],
                    b = obj.bound;

                if (obj.flag < flag) {
                  obj.flag = flag;

                  if (mask & obj.group) {
                    var dist = RaycastAABB(o, n, b, max);

                    if (dist != null) {
                      obj.rayDist = dist;
                      result.push(obj);
                    }
                  }
                }
              }

              for (var _i2 = 0; idxs != 0; idxs >>= 4, _i2++) {
                if (idxs & 0xF) {
                  queue[++inc] = nodes[_i2];
                }
              }
            }
          }
        };

        _proto.reset = function reset() {
          var nodes = this.nodes;

          for (var i = nodes.length - 1; i >= 0; i--) {
            var node = nodes[i];

            if (node) {
              node.clear();
              nodes[i] = null;
            }
          }

          this.idxs = 0;
          this.nodes = [];
          this.objects = [];
        };

        _proto.clear = function clear() {
          var nodes = this.nodes;

          for (var i = nodes.length - 1; i >= 0; i--) {
            var node = nodes[i];

            if (node) {
              node.clear();
              nodes[i] = null;
            }
          }

          this.nodes = null;
          this.bound = null;
          this.objects = null;
        };

        return Octree;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PathMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './Common.ts', './PathNode.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, v3, Component, app, Common, PathNode;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      app = module.default;
    }, function (module) {
      Common = module.default;
    }, function (module) {
      PathNode = module.PathNode;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "0ad7dSneeJMqIjWZ7haQBtB", "PathMgr", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PathMgr = exports('PathMgr', (_dec = ccclass('PathMgr'), _dec2 = property([Prefab]), _dec3 = property([Prefab]), _dec4 = property([Prefab]), _dec5 = property([Prefab]), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PathMgr, _Component);

        function PathMgr() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "arrStraightPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "arrRightPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "arrLeftPrefab", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "arrEndPrefab", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeRoot", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "role", _descriptor6, _assertThisInitialized(_this));

          _this.pathIndex = 0; //当前所在的块 下标

          _this.arr_path = [];
          _this.config_path = [];
          return _this;
        }

        var _proto = PathMgr.prototype;

        _proto.start = function start() {
          window["app"] = app;
          window["v3"] = v3;
          window["path"] = this;
          this.init();
        };

        _proto.init = function init() {
          this.pathIndex = 0;
          this.removeAllPath();
          /**
          * ====================================================
          * 根据路径生成场景
          * ====================================================
          */
          // let config_path = [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 0, 2];

          var config_path = [1, 2]; // let config_path = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          //随机生成一个路径

          config_path = [];
          var path_count = app.rand.randomArray([5, 10, 15]);

          for (var i = 0; i < path_count; i++) {
            var arr_type = [[1, 0, 0], [-1, 0, 0], [0, 0, 0], [0], [0, 0]];
            var arr = app.rand.randomArray(arr_type);
            config_path = [].concat(config_path, arr);
          }

          config_path.push(2);
          console.error(config_path); // config_path = [0, 1, 0, 0, 2];//测试用

          this.config_path = config_path;
          var startP = v3();
          var startAngle = v3();

          for (var _i = 0; _i < config_path.length; _i++) {
            var node = app.pool.getNode(app.rand.randomArray(this.getArr(config_path[_i])));
            node.setParent(this.nodeRoot);
            node.setPosition(startP); // console.warn(startAngle.x, startAngle.y, startAngle.z);

            node.setWorldRotationFromEuler(startAngle.x, startAngle.y, startAngle.z);
            var comp = node.getComponent(PathNode);
            startP = comp.lastPathNode;
            startAngle.y += comp.lastPathEulerAngles.y;
            this.arr_path.push(comp);
            comp.init(_i);
            node.active = false; // console.error(`type:${arr_path[i]}`, comp.distance);
          }

          this.showPath();
        };

        _proto.showPath = function showPath() {
          // return;
          for (var i = 0; i < this.arr_path.length; i++) {
            this.arr_path[i].node.active = i >= this.pathIndex - 1 && i <= this.pathIndex + 3 ? true : false; // this.arr_path[i].node.active = true;
          }
        };

        _proto.removeAllPath = function removeAllPath() {
          for (var i = 0; i < this.arr_path.length; i++) {
            app.pool.setNode(this.arr_path[i].node);
          }

          this.arr_path = [];
        };

        _proto.getArr = function getArr(index) {
          var arr = null;

          switch (index) {
            case 0:
              arr = this.arrStraightPrefab;
              break;

            case 1:
              arr = this.arrRightPrefab;
              break;

            case -1:
              arr = this.arrLeftPrefab;
              break;

            case 2:
              arr = this.arrEndPrefab;
              break;
          }

          return arr;
        };

        _proto.run = function run(index, percent) {
          var v1 = this.arr_path[index].run(percent, this.role);
          var v2 = this.role.worldPosition;
          var v3 = app.vector.lerp(v2, v1, 0.1);
          this.role.setWorldPosition(v3);
          this.pathIndex = index;
          this.showPath(); // this.role.worldPosition
          // Tween.stopAllByTarget(this.role);
          // tween(this.role).to(0.2, { worldPosition: v3 }).start();
        };

        _proto.runDistance = function runDistance(value) {
          var index = 0;
          var distance = this.arr_path[index].distance; // do {
          //     index++;
          //     count += this.arr_path[index].distance;
          // } while (value <= count);

          while (distance <= value) {
            var _this$arr_path$index;

            value -= distance;
            index++;

            if (index > this.config_path.length) {
              break;
            }

            distance = (_this$arr_path$index = this.arr_path[index]) == null ? void 0 : _this$arr_path$index.distance;
          }

          if (!distance) {
            // console.log("结束");
            app.event.emit(app.eName.event_gameEnd);
            return;
          } // console.log(index, value, distance, value / distance);


          this.run(index, value / distance);
        };

        _proto.update = function update(dt) {
          if (Common.isRun == false) {
            return;
          }

          Common.s += dt * Common.speed;
          this.runDistance(Common.s);
        };

        return PathMgr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrStraightPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrRightPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrLeftPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "arrEndPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeRoot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "role", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PathNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Enum, Prefab, v3, Component, app, Common;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Enum = module.Enum;
      Prefab = module.Prefab;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      app = module.default;
    }, function (module) {
      Common = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "7fe21+1YVVEDp+7+saOR0iH", "PathNode", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var enumAllow = /*#__PURE__*/function (enumAllow) {
        enumAllow[enumAllow["straight"] = 0] = "straight";
        enumAllow[enumAllow["left"] = 1] = "left";
        enumAllow[enumAllow["right"] = 2] = "right";
        enumAllow[enumAllow["end"] = 3] = "end";
        return enumAllow;
      }(enumAllow || {});

      var PathNode = exports('PathNode', (_dec = ccclass('PathNode'), _dec2 = property([Node]), _dec3 = property([Node]), _dec4 = property([Node]), _dec5 = property({
        type: Enum(enumAllow),
        displayName: "道路类型"
      }), _dec6 = property({
        type: Node,
        visible: function visible() {
          return [enumAllow.straight, enumAllow.end].indexOf(this.pathType) >= 0 ? false : true;
        }
      }), _dec7 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PathNode, _Component);

        function PathNode() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 路径点
           * @type {Node[]}
           * @memberof PathNode
           */

          _initializerDefineProperty(_this, "nodePath", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodePathR", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodePathL", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "pathType", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeCenterCircle", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "pre_coin", _descriptor6, _assertThisInitialized(_this));

          _this.index = 0;
          _this.arr_coin = [];
          _this.temp_v = v3();
          /**
          * 精度
          * @private
          * @type {number}
          * @memberof T_Demo
          */

          _this.accuracy = 100000;
          return _this;
        }

        var _proto = PathNode.prototype;

        _proto.init = function init(_index) {
          this.index = _index;

          if (_index != 0) {
            this.addCoin();
          }
        };

        _proto.addCoin = function addCoin() {
          /**
          * ====================================================
          * 回收旧的金币
          * ====================================================
          */
          for (var i = 0; i < this.arr_coin.length; i++) {
            app.pool.setNode(this.arr_coin[i]);
          }

          this.arr_coin = [];
          /**
          * ====================================================
          * 根据类型生成金币
          * ====================================================
          */

          switch (this.pathType) {
            case enumAllow.straight:
              this.addStraight();
              break;

            case enumAllow.left:
            case enumAllow.right:
              this.addLR();
              break;
          }
        };

        _proto.addStraight = function addStraight() {
          var _start = 0.1;
          var _end = 0.9;
          var eulerAnglesY = this.node.eulerAngles.y; //分成3段金币

          var stageCount = 6; //每段金币个数

          var count = 5;
          var difference = _end - _start;
          var differenceStage = difference / stageCount;

          for (var j = 0; j < stageCount; j++) {
            var path = app.rand.randomArray([this.nodePath, this.nodePathL, this.nodePathR]);

            var _start_p = path[0].getWorldPosition();

            var _end_p = path[1].getWorldPosition();

            for (var i = 0; i < count; i++) {
              var v = app.vector.lerp(_start_p, _end_p, differenceStage / count * i + _start + differenceStage * j);
              var coin = app.pool.getNode(this.pre_coin);
              v.y = 3;
              coin.setParent(this.node);
              coin.setWorldPosition(v); // console.log(v.x, v.z);

              coin.setRotationFromEuler(90, 0, 0);
              this.arr_coin.push(coin);
            }
          }
        };

        _proto.addLR = function addLR() {
          var _start = 0.1;
          var _end = 0.9;
          var eulerAnglesY = this.node.eulerAngles.y; //分成3段金币

          var stageCount = 3; //每段金币个数

          var count = 5;
          var difference = _end - _start;
          var differenceStage = difference / stageCount;

          for (var j = 0; j < stageCount; j++) {
            var path = app.rand.randomArray([this.nodePath, this.nodePathL, this.nodePathR]);

            var _start_p = path[0].getWorldPosition();

            var _end_p = path[1].getWorldPosition();

            for (var i = 0; i < count; i++) {
              var v = app.vector.lerp(_start_p, _end_p, differenceStage / count * i + _start + differenceStage * j);
              var coin = app.pool.getNode(this.pre_coin);
              v.y = 3;
              coin.setParent(this.node);
              coin.setWorldPosition(v);
              coin.setRotationFromEuler(90, 0, 0);
              this.arr_coin.push(coin);
            }
          }

          eulerAnglesY = this.node.eulerAngles.y + (this.pathType == enumAllow.left ? 90 : -90);

          for (var _j = 0; _j < stageCount; _j++) {
            var _path = app.rand.randomArray([this.nodePath, this.nodePathL, this.nodePathR]);

            var _start_p2 = _path[2].getWorldPosition();

            var _end_p2 = _path[3].getWorldPosition();

            for (var _i = 0; _i < count; _i++) {
              var _v = app.vector.lerp(_start_p2, _end_p2, differenceStage / count * _i + _start + differenceStage * _j);

              var _coin = app.pool.getNode(this.pre_coin);

              _v.y = 3;

              _coin.setParent(this.node);

              _coin.setWorldPosition(_v);

              _coin.setRotationFromEuler(90, 90, 0);

              this.arr_coin.push(_coin);
            }
          }
        }
        /**
         * 获取
         * @readonly
         * @type {Vec3}
         * @memberof PathNode
         */
        ;

        _proto.run = function run(percent, role) {
          var arr = this.nodePath;

          switch (Common.path) {
            case 0:
              arr = this.nodePath;
              break;

            case 1:
              arr = this.nodePathR;
              break;

            case -1:
              arr = this.nodePathL;
              break;
          }

          var v = v3();

          switch (this.pathType) {
            case enumAllow.end:
            case enumAllow.straight:
              v = app.vector.lerp(arr[0].worldPosition, arr[1].worldPosition, percent);
              role.setRotationFromEuler(0, this.node.eulerAngles.y, 0);
              break;

            case enumAllow.left:
            case enumAllow.right:
              var arrPrecent = [43331, 13465, 43202];
              percent = percent * this.accuracy;
              var i = 0;

              for (i = 0; i < arrPrecent.length; i++) {
                if (percent > arrPrecent[i]) {
                  percent -= arrPrecent[i];
                } else {
                  break;
                }
              }

              switch (i) {
                case 0:
                  v = app.vector.lerp(arr[0].worldPosition, arr[1].worldPosition, percent / arrPrecent[0]); // console.warn(percent / arrPrecent[0]);

                  role.setRotationFromEuler(0, this.node.eulerAngles.y, 0);
                  break;

                case 1:
                  var center = this.nodeCenterCircle.getWorldPosition();
                  var v1 = app.vector.vectorAtoB(center, arr[1].getWorldPosition());
                  var v2 = app.vector.vectorAtoB(center, arr[2].getWorldPosition());
                  var temp_precent = percent / arrPrecent[1];
                  v = app.vector.rotateTo(v1, v2, 90 * temp_precent);
                  v = v.add(center);
                  role.setRotationFromEuler(0, this.node.eulerAngles.y + (this.pathType == enumAllow.left ? 90 : -90) * temp_precent, 0);
                  break;

                case 2:
                  v = app.vector.lerp(arr[2].worldPosition, arr[3].worldPosition, percent / arrPrecent[2]);
                  role.setRotationFromEuler(0, this.node.eulerAngles.y + (this.pathType == enumAllow.left ? 90 : -90), 0);
                  break;
              }

              break;
          }

          return v;
        };

        _createClass(PathNode, [{
          key: "lastPathNode",
          get:
          /**
           * 获取最后一个路径点的世界坐标
           * @readonly
           * @type {Vec3}
           * @memberof PathNode
           */
          function get() {
            return this.nodePath[this.nodePath.length - 1].worldPosition;
          }
        }, {
          key: "lastPathEulerAngles",
          get: function get() {
            var p = v3();

            switch (this.pathType) {
              case enumAllow.left:
                p.y = 90;
                break;

              case enumAllow.right:
                p.y = -90;
                break;
            }

            return p;
          }
        }, {
          key: "distance",
          get:
          /**
           * 获取当前
           * @readonly
           * @memberof PathMgr
           */
          function get() {
            var value = 0;

            switch (this.pathType) {
              case enumAllow.end:
                value = 20;
                break;

              case enumAllow.straight:
                // value = this.nodePath[this.nodePath.length - 1].getPosition(this.temp_v).z;
                value = 209.97;
                break;

              case enumAllow.left:
                // var len1 = this.nodePath[0].getPosition(this.temp_v).z;
                // var len2 = Math.abs(this.nodePath[1].getPosition(this.temp_v).x - this.nodePath[2].getPosition(this.temp_v).x);
                // var radius = 14.6;
                // var half_semicircle_len = Math.PI * radius / 2;
                // value = len1 + half_semicircle_len + len2;
                // console.warn(len1 * this.accuracy, len2 * this.accuracy, half_semicircle_len * this.accuracy);
                // PathNode.ts:78 73.8 73.58 22.93362
                value = 170.31362;
                break;

              case enumAllow.right:
                //左右长度一样 直接用左转的长度
                value = 170.31362;
                break;
            }

            return value;
          }
        }]);

        return PathNode;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodePath", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodePathR", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodePathL", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pathType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return enumAllow.straight;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeCenterCircle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pre_coin", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Player.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Debug.ts', './Joystick.ts', './Object3D.ts', './World.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SkeletalAnimation, Vec3, Quat, Node, MeshRenderer, Input, toRadian, clamp, Mat4, Color, Debug, Joystick, Object3D, World;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SkeletalAnimation = module.SkeletalAnimation;
      Vec3 = module.Vec3;
      Quat = module.Quat;
      Node = module.Node;
      MeshRenderer = module.MeshRenderer;
      Input = module.Input;
      toRadian = module.toRadian;
      clamp = module.clamp;
      Mat4 = module.Mat4;
      Color = module.Color;
    }, function (module) {
      Debug = module.Debug;
    }, function (module) {
      Joystick = module.Joystick;
    }, function (module) {
      Object3D = module.Object3D;
    }, function (module) {
      World = module.World;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

      cclegacy._RF.push({}, "21da67bXuhDHYvNI/nkIUZh", "Player", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Player = exports('Player', (_dec = ccclass('Player'), _dec2 = property(World), _dec3 = property(Joystick), _dec4 = property(SkeletalAnimation), _dec5 = property({
        visible: false,
        override: true
      }), _dec6 = property({
        min: 0
      }), _dec7 = property({
        min: 0,
        max: 90
      }), _dec8 = property({
        min: 0
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Object3D) {
        _inheritsLoose(Player, _Object3D);

        function Player() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Object3D.call.apply(_Object3D, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "boundDebug", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "world", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "joystick", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "character", _descriptor4, _assertThisInitialized(_this)); //player only use convex 


          _initializerDefineProperty(_this, "useTriangle", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "maxSpeed", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "slopeLimit", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "stepOffset", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gravity", _descriptor9, _assertThisInitialized(_this));

          _this.angle = 0;
          _this.vertical = 0;
          _this.velocity = new Vec3();
          _this.direction = new Vec3(0, 0, 0);
          _this.surfaceNormal = new Vec3(0, 1, 0);
          _this.sample = 0;
          _this.isMove = false;
          _this.rayDir = new Vec3();
          _this._currAni = null;
          _this._rot = new Quat();
          _this._dir = new Vec3();
          _this._vector = new Vec3();
          _this.isRayCast = false;
          return _this;
        }

        var _proto = Player.prototype;

        _proto.start = function start() {
          this.initJoystick();

          if (this.boundDebug) {
            var node = new Node("DebugCollider");
            var render = node.addComponent(MeshRenderer);
            render.mesh = this.meshCollider;
            this.node.addChild(node);
          }
        };

        _proto.reset = function reset() {
          // this.rotateCharacter(0);
          this.changeAnimation("idle");
          this.node.position = new Vec3(0, 60, 0);
          this.node.rotation = Quat.IDENTITY;
          this.surfaceNormal.set(0, 1, 0);
          this.velocity.set(Vec3.ZERO);
          this.vertical = 0; // this.angle = 0;
        };

        _proto.changeAnimation = function changeAnimation(name) {
          if (this.character && this._currAni != name) {
            this._currAni = name;
            this.character.crossFade(name, 0.5);
          }
        };

        _proto.rotateCharacter = function rotateCharacter(angle) {
          if (this.character) {
            //this.character.getState(this._currAni).speed = clamp(ratio,0.5,1.0);
            this.character.node.rotation = Quat.fromAxisAngle(this._rot, Vec3.UNIT_Y, angle + Math.PI / 2);
          }
        };

        _proto.initJoystick = function initJoystick() {
          var _this2 = this;

          if (this.joystick) {
            this.joystick.init(function (event) {
              var angle = event.angle;
              var ratio = event.ratio;

              switch (event.type) {
                case Input.EventType.TOUCH_START:
                  _this2.velocity.set(Vec3.ZERO);

                  _this2.direction.set(Vec3.ZERO);

                  break;

                case Input.EventType.TOUCH_MOVE:
                  _this2.angle = angle;
                  var speed = _this2.maxSpeed * ratio;
                  angle = -(toRadian(_this2.node.eulerAngles.y) + angle);

                  _this2.direction.set(Math.cos(angle) * speed, 0, Math.sin(angle) * speed);

                  _this2.rayDir.set(_this2.direction);

                  _this2.isMove = true;

                  _this2.changeAnimation("run");

                  _this2.rotateCharacter(_this2.angle);

                  break;

                case Input.EventType.TOUCH_END:
                  _this2.isMove = false;

                  _this2.velocity.set(Vec3.ZERO);

                  _this2.direction.set(Vec3.ZERO);

                  _this2.changeAnimation("idle");

                  break;
              }
            });
          }
        };

        _proto.checkRays = function checkRays() {
          if (this.isRayCast) {
            var dist = 100;
            var d = new Vec3();
            var p = this.getWorldPosition();
            var r = this.node.children[0].getWorldRotation();
            var dir = Vec3.transformQuat(new Vec3(), new Vec3(0, 0, 1), r); //let d = new Vec3(this.rayDir).normalize();

            var add = 0; //((this.sample++)%2)*Math.PI/1000;
            //1000 rayCast test

            for (var i = 0; i < 1000; i++) {
              Vec3.rotateY(d, dir, Vec3.ZERO, add + i * Math.PI * 2.0 / 1000);
              var ray = [p.x, p.y, p.z, d.x, d.y, d.z, dist]; //origin , dir , distance

              this.world.rayCast(ray, 0xFFFFFFFF, true);
            }
          }
        };

        _proto.update = function update(dt) {
          Vec3.projectOnPlane(this.velocity, this.direction, this.surfaceNormal);
          dt = clamp(dt, 0.0, 0.016 * 2);
          var pos = this.getPosition();
          var v = this.velocity,
              g = this.gravity;
          var x = pos.x + v.x * dt + g.x * dt * dt / 2;
          var y = pos.y + v.y * dt + this.vertical * dt + g.y * dt * dt / 2;
          var z = pos.z + v.z * dt + g.z * dt * dt / 2;
          this.vertical += g.y * dt;
          this.setPosition(pos.set(x, y, z));
          var moveUp = new Vec3();
          var avgDir = new Vec3();
          var isCollision = false;
          this.surfaceNormal.set(0, 1, 0);
          var upLimit = Math.cos(toRadian(this.slopeLimit));
          var collisions = this.world.objectQuery(this, true); //collisions.sort((a:ObjNode,b:ObjNode)=>b.getWorldBound()[4]-a.getWorldBound()[4]);

          for (var i = 0; i < collisions.length; i++) {
            var obj = collisions[i]; //if (this.boundCulling(obj)) continue;

            var result = this.world.collision.GJK(this, obj);

            if (result) {
              moveUp.set(0, 1, 0);
              var dir = result.dir;
              var dist = result.dist;
              var upWalkable = moveUp.dot(dir);
              var faceWalkable = obj.isBox ? true : moveUp.dot(obj.getWorldNormal()) >= upLimit;

              if (upWalkable >= upLimit && faceWalkable) {
                moveUp.multiplyScalar(dist); // Math.cos(upWalkable)

                this.setPosition(pos.add(moveUp));
                this.surfaceNormal.set(dir);
                avgDir.set(dir);
              } else {
                var boundB = obj.getWorldBound();
                var boundA = this.getWorldBound();
                moveUp.set(dir).multiplyScalar(dist);

                if (this.isMove) {
                  var verticalH = boundB[4] - boundA[1];

                  if (verticalH < this.stepOffset) {
                    moveUp.y = Math.max(moveUp.y, this.stepOffset * 0.01);
                    dir.add(Vec3.UNIT_Y).normalize();
                    this.surfaceNormal.set(dir);
                    avgDir.set(dir);
                  } else {
                    //  if(moveUp.y>0)
                    moveUp.y = 0;
                  }
                }

                this.setPosition(pos.add(moveUp));
              }

              isCollision = true;
              if (obj.obj3D.debug) Debug.addBox(obj.getWorldBound(), Mat4.IDENTITY, obj.isBox ? Color.RED : Color.CYAN);
            }
          }

          if (!isCollision) {
            this.velocity.y = 0;
          } else {
            avgDir.normalize();
            var down = avgDir.dot(Vec3.UNIT_Y);

            if (down > 0) {
              this.vertical *= 1.0 - down;
            }
          }

          this.checkRays(); // Debug.addBox(this.getWorldBound(), Mat4.IDENTITY, isCollision ? Color.RED : Color.GREEN);
        };

        return Player;
      }(Object3D), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boundDebug", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "world", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "joystick", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "character", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "useTriangle", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "maxSpeed", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "slopeLimit", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 75;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "stepOffset", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "gravity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, -9.8, 0);
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/poolUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, instantiate, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "adb12LILmdKjJzpcs0npaxw", "poolUtils", undefined);
      /**
       * 对象池
       * @export
       * @class PoolUtils
       * @extends {singtonClass}
       */


      var poolUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(poolUtils, _singtonClass);

        function poolUtils() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _singtonClass.call.apply(_singtonClass, [this].concat(args)) || this;
          _this.handle = new Map();
          return _this;
        }

        var _proto = poolUtils.prototype;
        /**
         * 获取一个prefab的实例并设置父节点
         * @param {(Prefab | Node)} prefab
         * @param {Node} [parent=null]
         * @return {*}  {Node}
         * @memberof poolUtils
         */

        _proto.getNode = function getNode(prefab, parent) {
          if (parent === void 0) {
            parent = null;
          }

          if (!prefab) {
            console.error("prefab is null");
            return null;
          }

          var name = prefab.name;
          var node = null;

          if (this.handle.has(name) && this.handle.get(name).length > 0) {
            node = this.handle.get(name).shift();
          } else {
            node = instantiate(prefab);
          }

          if (!node) {
            return null;
          }

          if (parent) {
            node.setParent(parent);
          }

          return node;
        }
        /**
         * 回收一个节点
         * 会调用removeFromParent移除该节点
         * @param {Node} target
         * @memberof PoolUtils
         */
        ;

        _proto.setNode = function setNode(target) {
          var name = target.name;
          target.removeFromParent();

          if (this.handle.has(name)) {
            // console.log(name, this.handle.get(name).includes(target));
            this.handle.get(name).push(target);
          } else {
            this.handle.set(name, [target]);
          }
        };

        return poolUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/promiseUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, resources, Prefab, SpriteFrame, assetManager, Texture2D, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      Prefab = module.Prefab;
      SpriteFrame = module.SpriteFrame;
      assetManager = module.assetManager;
      Texture2D = module.Texture2D;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c8a8bdZD5RATZwSlbddWlNP", "promiseUtils", undefined);
      /**
       * js 通用方法
       * @export
       * @class jsUtils（commonUtils）
       * @extends {singtonClass}
       */


      var promiseUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(promiseUtils, _singtonClass);

        function promiseUtils() {
          return _singtonClass.apply(this, arguments) || this;
        }

        var _proto = promiseUtils.prototype;

        _proto.sleep = /*#__PURE__*/function () {
          var _sleep = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(time, component) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve) {
                    if (component) {
                      component.scheduleOnce(resolve, time);
                    } else {
                      setTimeout(resolve, time * 1000);
                    }
                  }));

                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));

          function sleep(_x, _x2) {
            return _sleep.apply(this, arguments);
          }

          return sleep;
        }()
        /**
         * 加载本地prefab资源并返回一个promise 
         * @param {string} url
         * @return {*} 
         * @memberof promiseUtils
         */
        ;

        _proto.loadPrefab = function loadPrefab(url) {
          return new Promise(function (resolve) {
            resources.load(url, Prefab, function (err, prefab) {
              if (err) {
                console.error(err);
                resolve(null);
                return;
              }

              resolve(prefab);
            });
          });
        };

        _proto.loadView = function loadView(name, cb) {
          var path = "ui/" + name;
          return new Promise(function (resolve) {
            resources.load(path, Prefab, function (finish, total, item) {
              cb && cb(finish, total);
            }, function (err, prefab) {
              resolve(prefab);
            });
          });
        }
        /**
         *  加载本地图片资源并返回一个promise 
         *  app.promise.loadSpriteFrame(`icon/seed/seed1`).then((res) => {
         *      this.imgHead.spriteFrame = res;
         *  });
         * @param {string} url
         * @return {*} 
         * @memberof promiseUtils
         */
        ;

        _proto.loadSpriteFrame = function loadSpriteFrame(url) {
          return new Promise(function (resolve) {
            resources.load(url + "/spriteFrame", SpriteFrame, function (err, res) {
              if (err) {
                console.error(err);
                resolve(null);
                return;
              }

              resolve(res);
            });
          });
        }
        /**
         * 加载远程纹理
         * @param url 资源地址
         * @param callback 加载回调
         */
        ;

        _proto.loadUrlTexture = function loadUrlTexture(url, callback) {
          return new Promise(function (res) {
            assetManager.loadRemote(url, function (error, texture) {
              if (error || !(texture instanceof Texture2D)) {
                callback && callback(error, null);
                res(null);
              } else {
                callback && callback(null, texture);
                res(texture);
              }
            });
          });
        };

        return promiseUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/randomUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9a49c5u44NI56+dJq5rr1OW", "randomUtils", undefined);
      /**
       * 随机数工具类
       * @export
       * @class RandomUtils
       * @extends {singtonClass}
       */


      var randomUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(randomUtils, _singtonClass);

        function randomUtils() {
          return _singtonClass.apply(this, arguments) || this;
        }

        var _proto = randomUtils.prototype;
        /**
             * 获取一个区间的随机数
             * @param $from 最小值
             * @param $end 最大值
             * @returns {number}
             */

        _proto.limit = function limit($from, $end) {
          $from = Math.min($from, $end);
          $end = Math.max($from, $end);
          var range = $end - $from;
          return $from + Math.random() * range;
        }
        /**
         * 获取一个区间的随机数(整数)
         * @param $from 最小值
         * @param $end 最大值
         * @returns {number}
         */
        ;

        _proto.limitInteger = function limitInteger($from, $end) {
          return Math.floor(this.limit($from, $end + 1));
        };

        _proto.rand = function rand() {
          var a = this.limitInteger(1, 9);
          var b = this.limitInteger(1, 10) % 2 == 0 ? 1 : -1;
          return a * b;
        }
        /**
         * 在一个数组中随机获取一个元素
         * @param arr 数组
         * @returns {any} 随机出来的结果
         */
        ;

        _proto.randomArray = function randomArray(arr) {
          if (!arr) {
            return null;
          }

          var index = Math.floor(Math.random() * arr.length);
          return arr[index];
        }
        /**
         * 在一个数组中随机获取一个元素 【不会随机出特定的对象】
         * @param {Array<any>} arr 数组
         * @param {*} obj 
         * @return {*}  {*} 随机出来的结果
         * @memberof randomUtils
         */
        ;

        _proto.randomArraySplitObj = function randomArraySplitObj(arr, obj) {
          if (!arr) {
            return null;
          } // console.log(arr);


          var _arr = [];
          arr.forEach(function (fobj) {
            if (fobj != obj) {
              _arr.push(fobj);
            }
          });

          if (_arr.length <= 0) {
            _arr = arr;
          } // console.log(_arr, obj);


          var index = Math.floor(Math.random() * _arr.length);
          return _arr[index];
        }
        /**
           * 根据权重返回数组里面的元素，要求arr1和arr2数组长度一样
           * @param arr1 产生随机结果的数组
           * @param arr2 控制权重的数组，要求arr2元素个数和arr1元素个数对应
           */
        ;

        _proto.randomByWeight = function randomByWeight(arr1, arr2) {
          if (arr1.length != arr2.length) {
            console.warn("random2输入不合法: arr1.length != arr2.length");
            return null;
          }

          var sum = 0;
          var factor = 0;
          var random = Math.random();

          for (var i = arr2.length - 1; i >= 0; i--) {
            sum += arr2[i]; // 统计概率总和
          }

          random *= sum; // 生成概率随机数

          for (var _i = arr2.length - 1; _i >= 0; _i--) {
            factor += arr2[_i];
            if (random <= factor) return arr1[_i];
          }

          return null;
        };

        return randomUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RaycastClosest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Input, geometry, PhysicsSystem, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Input = module.Input;
      geometry = module.geometry;
      PhysicsSystem = module.PhysicsSystem;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "246f9WtiFJDtq1ceoHRqAMq", "RaycastClosest", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var RaycastClosest = exports('RaycastClosest', (_dec = ccclass('RaycastClosest'), _dec2 = property(Camera), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RaycastClosest, _Component);

        function RaycastClosest() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "camera", _descriptor, _assertThisInitialized(_this));

          _this.clicktime = 0;
          return _this;
        }

        var _proto = RaycastClosest.prototype;

        _proto.start = function start() {
          this.node.on(Input.EventType.TOUCH_END, this.click, this);
        };

        _proto.click = function click(e) {
          // console.log(e.getLocationX(), e.getLocationY());
          var _x = e.getLocationX();

          var _y = e.getLocationY();

          var ray = new geometry.Ray();
          this.camera.screenPointToRay(_x, _y, ray); // 以下参数可选

          var mask = 0xffffffff;
          var maxDistance = 10000000;
          var queryTrigger = true; // worldRay：世界空间下的射线
          // mask：用于过滤的 掩码，可以传入需要检测的分组，默认为 0xffffffff
          // maxDistance：最大检测距离，默认为 10000000，目前请勿传入 Infinity 或 Number.MAX_VALUE
          // queryTrigger：是否检测触发器

          var res = PhysicsSystem.instance.raycastClosest(ray, mask, maxDistance, queryTrigger);

          if (res == true) {
            // collider ：击中的碰撞器
            // distance ：击中点与射线起点的距离
            // hitPoint ：击中点（世界坐标系中）
            // hitNormal ：击中点所处面的法线（世界坐标系中）
            var raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            var hitPoint = raycastClosestResult.hitPoint;
            var hitNormal = raycastClosestResult.hitNormal;
            var collider = raycastClosestResult.collider;
            var distance = raycastClosestResult.distance; // console.warn(raycastClosestResult);

            console.warn("点击的是", collider.node.name);
          } else {
            console.log(false);
          }
        };

        return RaycastClosest;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class)); // 1.合成飞机 合成动画优化
      // 体验地址：https://hdimg.kerlala.com/cocos/test/game_demo/dv1/index.html?gid=25
      // 【玩法备注】解锁我们所有独特的彩色飞机，扩大你的飞机收藏。赚取最大金币购买飞机进行合成。升级你的飞机，拥有我们所有奇妙的彩色飞机。
      // 2.投篮机统一登陆异常修改
      // 3.底层框架3.x版本改造（事件管理、节点池、虚拟列表、2D节点截图、3D模型点击）
      // 4.跑酷游戏场景模块搭建（根据配置生成场景）(40%)
      // 下周：
      // 跑酷游戏场景模块搭建（根据配置生成场景）
      // 角色移动路径生成

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RunView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './BaseView.ts', './gameEnum.ts', './Common.ts', './GirlModel.ts', './PathMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Label, Input, app, BaseView, gameEnum, Common, GirlModel, PathMgr;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Input = module.Input;
    }, function (module) {
      app = module.default;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      gameEnum = module.default;
    }, function (module) {
      Common = module.default;
    }, function (module) {
      GirlModel = module.GirlModel;
    }, function (module) {
      PathMgr = module.PathMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      cclegacy._RF.push({}, "ab4d66aHQ5Iorm7XO4RXu/E", "RunView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var RunView = exports('RunView', (_dec = ccclass('RunView'), _dec2 = property(GirlModel), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(PathMgr), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(RunView, _BaseView);

        function RunView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "role", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnCamere", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnRun", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraFree", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraRole", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lblCoin", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "pathMgr", _descriptor7, _assertThisInitialized(_this));

          _this._start_x = 0;
          _this.clicktime = 0;
          return _this;
        }

        var _proto = RunView.prototype;

        _proto.start = function start() {
          this.show(gameEnum.view.HomeScene);
          this.cameraFree.active = false;
          this.cameraRole.active = true;
          window["run"] = this;
          window["Common"] = Common;
          this.node.on(Input.EventType.TOUCH_START, this._move, this);
          this.lblCoin.node.active = false;
          app.eventObj.openView(gameEnum.view.StartView);
        };

        _proto._move = function _move(e) {
          switch (e.type) {
            case Input.EventType.TOUCH_START:
              this._start_x = e.getLocationInView().x;
              this.node.on(Input.EventType.TOUCH_MOVE, this._move, this);
              break;

            case Input.EventType.TOUCH_MOVE:
              var _x = e.getLocationInView().x;

              var _temp = _x - this._start_x;

              if (Math.abs(_temp) > 40) {
                this.node.off(Input.EventType.TOUCH_MOVE, this._move, this);

                if (_temp < 0) {
                  Common.path--;
                  Common.path = Math.max(Common.path, -1);
                } else {
                  Common.path++;
                  Common.path = Math.min(Common.path, 1);
                }
              }

              break;
          }
        };

        _proto.show = function show() {
          var _BaseView$prototype$s;

          this.arr_btn = [this.btnCamere, this.btnRun];
          this.arr_event = [{
            name: app.eName.event_updateRunViewUI,
            func: this.updateUI
          }, {
            name: app.eName.event_gameStart,
            func: this.gameStart
          }, {
            name: app.eName.event_gameEnd,
            func: this.gameEnd
          }, {
            name: app.eName.event_gameInit,
            func: this.initGame
          }, {
            name: app.eName.event_gameAgain,
            func: this.gameAgain
          }];

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          (_BaseView$prototype$s = _BaseView.prototype.show).call.apply(_BaseView$prototype$s, [this].concat(args));

          this.updateUI();
        };

        _proto.click = function click(e) {
          console.log("...");
          var d = new Date().getTime();

          if (d - this.clicktime < Common.clickWaitTime) {
            return;
          }

          this.clicktime = d;

          switch (e.target) {
            case this.btnCamere:
              this.cameraFree.active = this.cameraRole.active;
              this.cameraRole.active = !this.cameraFree.active;

              if (this.cameraRole.active == true) {
                this.node.on(Input.EventType.TOUCH_START, this._move, this);
              } else {
                this.node.off(Input.EventType.TOUCH_START, this._move, this);
              }

              break;

            case this.btnRun:
              Common.isRun = !Common.isRun;

              if (Common.isRun == true) {
                this.role.run();
              } else {
                this.role.stand();
              }

              break;
          }
        };

        _proto.updateUI = function updateUI() {
          this.lblCoin.string = "\u91D1\u5E01\uFF1A" + Common.coin;
        };

        _proto.gameStart = function gameStart() {
          this.lblCoin.node.active = true;
          Common.isRun = true;
          this.role.run();
        };

        _proto.gameEnd = /*#__PURE__*/function () {
          var _gameEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  Common.isRun = false;
                  this.role.win();
                  _context.next = 4;
                  return app.promise.sleep(3);

                case 4:
                  app.eventObj.openView(gameEnum.view.GameResView, gameEnum.layer.WINDOW_LAYER, "\u83B7\u5F97\u91D1\u5E01\uFF1A" + Common.coin);

                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function gameEnd() {
            return _gameEnd.apply(this, arguments);
          }

          return gameEnd;
        }();

        _proto.initGame = function initGame(isRun) {
          if (isRun === void 0) {
            isRun = false;
          }

          Common.init();
          this.lblCoin.string = "\u91D1\u5E01\uFF1A" + Common.coin;
          this.lblCoin.node.active = false;
          this.role.stand();
          this.role.init();
          this.pathMgr.init();

          if (isRun == false) {
            app.eventObj.openView(gameEnum.view.StartView);
          } else {
            app.eventObj.openView(gameEnum.view.StartView, gameEnum.layer.WINDOW_LAYER, true);
          }
        };

        _proto.gameAgain = function gameAgain() {
          this.initGame(true);
        };

        return RunView;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "role", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnCamere", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnRun", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cameraFree", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cameraRole", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lblCoin", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "pathMgr", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/singtonClass.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _construct, cclegacy;

  return {
    setters: [function (module) {
      _construct = module.construct;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "559bbjGpaVFH5tdYFVUF5Hc", "singtonClass", undefined);
      /**
       * 基类
       */


      var singtonClass = exports('default', /*#__PURE__*/function () {
        function singtonClass() {}
        /**
         * 获取一个单例
         * @returns {any}
         */


        singtonClass.instance = function instance() {
          var Class = this;

          if (!Class._instance) {
            for (var _len = arguments.length, param = new Array(_len), _key = 0; _key < _len; _key++) {
              param[_key] = arguments[_key];
            }

            Class._instance = _construct(Class, param);
          }

          return Class._instance;
        };

        return singtonClass;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StartView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './BaseView.ts', './Common.ts', './TimerModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, app, BaseView, Common, TimerModel;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      app = module.default;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      Common = module.default;
    }, function (module) {
      TimerModel = module.TimerModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "0e21fqt0XhGeafLtLKvCjqn", "StartView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var StartView = exports('StartView', (_dec = ccclass('StartView'), _dec2 = property(TimerModel), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(StartView, _BaseView);

        function StartView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "timer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnBegin", _descriptor2, _assertThisInitialized(_this));

          _this.clicktime = 0;
          return _this;
        }

        var _proto = StartView.prototype;

        _proto.show = function show() {
          var _BaseView$prototype$s;

          this.arr_btn = [this.btnBegin];
          this.arr_event = [{
            name: app.eName.event_gameStart,
            func: this._gameStart
          }];

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          (_BaseView$prototype$s = _BaseView.prototype.show).call.apply(_BaseView$prototype$s, [this].concat(args));

          this.timer.node.active = false;
          var isRun = args[2];

          if (isRun == true) {
            this.btnBegin.active = false;
            this.timer.playAnim();
          }
        };

        _proto.click = function click(e) {
          var d = new Date().getTime();

          if (d - this.clicktime < Common.clickWaitTime) {
            return;
          }

          this.clicktime = d;

          switch (e.target) {
            case this.btnBegin:
              this.btnBegin.active = false;
              this.timer.playAnim();
              break;
          }
        };

        _proto._gameStart = function _gameStart() {
          this.closeView();
        };

        return StartView;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "timer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnBegin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StepModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './Object3D.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Node, MeshRenderer, Color, Component, app, Object3D;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      MeshRenderer = module.MeshRenderer;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      app = module.default;
    }, function (module) {
      Object3D = module.Object3D;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2aceLj2uhNDa/LPWXWGrXi", "StepModel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var StepModel = exports('StepModel', (_dec = ccclass('StepModel'), _dec2 = property([Prefab]), _dec3 = property(Node), _dec4 = property(MeshRenderer), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StepModel, _Component);

        function StepModel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "arr_obstaclesPre", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "root", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mesh", _descriptor3, _assertThisInitialized(_this));

          _this.arr_node = [];
          _this.index = -1;
          return _this;
        }

        var _proto = StepModel.prototype;
        /**
         * 移除自己
         * @param {World} world
         * @memberof StepModel
         */

        _proto.removeSelf = function removeSelf(world) {
          //移除障碍物
          this.removeObstacles(world); //回收节点

          app.pool.setNode(this.node);
        }
        /**
         * 移除所有的障碍物
         * @memberof StepModel
         */
        ;

        _proto.removeObstacles = function removeObstacles(world) {
          //移除碰撞世界相关数据
          var objects = this.node.getComponentsInChildren(Object3D);

          for (var i = 0; i < objects.length; i++) {
            world.remove(objects[i], false);
          } //移除相关节点


          for (var _i = 0; _i < this.arr_node.length; _i++) {
            var node = this.arr_node[_i];
            app.pool.setNode(node);
          }

          this.arr_node = [];
        }
        /**
         * 初始化
         * @param {number} _index 当前台阶下标
         * @param {World} world 碰撞检测世界
         * @memberof StepModel
         */
        ;

        _proto.init = function init(_index, world) {
          this.index = _index; // this.removeObstacles(world);

          if (this.index < 3) ;else if (this.index < 15) {
            this.addObstacles();
          } else if (this.index < 40) {
            app.rand.limitInteger(1, 100) > 65 ? this.addObstacles2() : this.addObstacles();
          } else {
            this.addObstacles2();
          }
        }
        /**
         * 随机添加一个障碍物
         * @memberof StepModel
         */
        ;

        _proto.addObstacles = function addObstacles() {
          var node = app.pool.getNode(app.rand.randomArray(this.arr_obstaclesPre));
          node.setParent(this.root);
          node.setPosition(app.rand.limitInteger(-2500, 2500) / 1000, 1, 0);
          this.arr_node.push(node);
        }
        /**
        * 随机添加两个障碍物
        * @memberof StepModel
        */
        ;

        _proto.addObstacles2 = function addObstacles2() {
          var node1 = app.pool.getNode(app.rand.randomArray(this.arr_obstaclesPre));
          node1.setParent(this.root);
          node1.setPosition(app.rand.limitInteger(-2500, -400) / 1000, 1, 0);
          var node2 = app.pool.getNode(app.rand.randomArray(this.arr_obstaclesPre));
          node2.setParent(this.root);
          node2.setPosition(app.rand.limitInteger(400, 2500) / 1000, 1, 0);
          this.arr_node.push(node1);
          this.arr_node.push(node2);
        };

        _createClass(StepModel, [{
          key: "opacity",
          set:
          /**
           * 测试用 设置材质透明度
           * @memberof StepModel
           */
          function set(value) {
            var material_grass = this.mesh.getMaterialInstance(0);
            var color1 = new Color(92, 225, 192, value);
            material_grass.setProperty("albedo", color1);
            var material_dirt = this.mesh.getMaterialInstance(1);
            var color2 = new Color(248, 189, 137, value);
            material_dirt.setProperty("albedo", color2);
          }
        }]);

        return StepModel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arr_obstaclesPre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "root", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mesh", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/storageUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "09080Ms2G1Dr4zlpdhea8mK", "storageUtils", undefined);

      var storageUtil = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(storageUtil, _singtonClass);

        function storageUtil() {
          return _singtonClass.apply(this, arguments) || this;
        }

        var _proto = storageUtil.prototype;
        /**
         * 保存数据到本地
         * @param key 键
         * @param value 值
         */

        _proto.set = function set(key, value) {
          var dataString = typeof value === 'object' ? JSON.stringify(value) : value;
          window.localStorage.setItem(key, dataString);
        }
        /**
         * 读取本地数据
         * @param key 键
         * @param parse 解析
         */
        ;

        _proto.get = function get(key, parse) {
          if (parse === void 0) {
            parse = true;
          }

          var dataString = window.localStorage.getItem(key);

          if (dataString) {
            if (parse) {
              try {
                return JSON.parse(dataString);
              } catch (_unused) {
                return dataString;
              }
            }

            return dataString;
          }

          return null;
        }
        /**
         * 移除本地数据
         * @param key 键
         */
        ;

        _proto.remove = function remove(key) {
          window.localStorage.removeItem(key);
        } // 以下是一个简单的操作cookie的方法，附带注释以帮助解释代码的作用：
        // 读取cookie function 
        ;

        _proto.getCookie = function getCookie(name) {
          // 将cookie字符串分割成键值对数组 
          var pairs = document.cookie.split("; "); // 遍历数组，找到对应的键值对并返回值 

          for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("=");

            if (pair[0] === name) {
              return decodeURIComponent(pair[1]);
            }
          } // 没有找到则返回null 


          return null;
        } // 设置cookie function 

        /**
         * 设置cookie
         * @param {*} name 
         * @param {*} value
         * @param {*} expires 过期时间（单位天）
         * @param {*} path 路径
         * @param {*} domain 域
         * @param {*} secure 安全标志
         * @memberof storageUtil
         */
        ;

        _proto.setCookie = function setCookie(name, value, day, path, domain, secure) {
          if (day === void 0) {
            day = 0;
          } // 过期时间 


          var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

          if (day) {
            var currentDate = new Date();
            var expiryDate = new Date(currentDate.getTime() + day * 24 * 60 * 60 * 1000); // 2天后的时间

            cookieText += "; expires=" + expiryDate.toUTCString();
          } // 路径 


          if (path) {
            cookieText += "; path=" + path;
          } // 域 


          if (domain) {
            cookieText += "; domain=" + domain;
          } // 安全标志 


          if (secure) {
            cookieText += "; secure";
          } // 设置cookie 


          document.cookie = cookieText;
        } // 删除cookie function deleteCookie(name, path, domain) { // 将过期时间设置成过去的一段时间 setCookie(name, "", new Date(0), path, domain); }
        // 使用示例： setCookie("username", "Jerry", new Date(2022, 0, 1)); getCookie("username"); // 返回 "Jerry" deleteCookie("username");

        /**
         * 参考地址
         * https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
         * @readonly
         * @memberof storageUtil
         */
        ;

        _createClass(storageUtil, [{
          key: "cookie",
          get: function get() {
            return {
              getItem: function getItem(sKey) {
                return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
              },
              setItem: function setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                  return false;
                }

                var sExpires = "";

                if (vEnd) {
                  switch (vEnd.constructor) {
                    case Number:
                      sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                      break;

                    case String:
                      sExpires = "; expires=" + vEnd;
                      break;

                    case Date:
                      sExpires = "; expires=" + vEnd.toUTCString();
                      break;
                  }
                }

                document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
                return true;
              },
              removeItem: function removeItem(sKey, sPath, sDomain) {
                if (!sKey || !this.hasItem(sKey)) {
                  return false;
                }

                document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
                return true;
              },

              /**
               * 判断 key 是否存在
               * @param {*} sKey
               * @return {*} 
               */
              hasItem: function hasItem(sKey) {
                return new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
              },

              get keys() {
                var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);

                for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
                  aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
                }

                return aKeys;
              }

            };
          }
        }]);

        return storageUtil;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/stringUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5814eL5D8VHPIgTuM6j8+x/", "stringUtils", undefined);
      /**
       * 字符串工具类
       * @export
       * @class arrayUtils
       * @extends {singtonClass}
       */


      var stringUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(stringUtils, _singtonClass);

        function stringUtils() {
          return _singtonClass.apply(this, arguments) || this;
        }

        var _proto = stringUtils.prototype;
        /**
          * 转美式计数字符串
          * @param value 数字
          * @example
          * 123456789 = 123,456,789
          */

        _proto.numberTotPermil = function numberTotPermil(value) {
          return value.toLocaleString();
        }
        /** 
         * 转英文单位计数
         * @param value 数字
         * @param fixed 保留小数位数
         * @example
         * 12345 = 12.35K
         */
        ;

        _proto.numberToThousand = function numberToThousand(value, fixed) {
          if (fixed === void 0) {
            fixed = 2;
          }

          var k = 1000;
          var sizes = ['', 'K', 'M', 'G'];

          if (value < k) {
            return value.toString();
          } else {
            var i = Math.floor(Math.log(value) / Math.log(k));
            var r = value / Math.pow(k, i);
            return r.toFixed(fixed) + sizes[i];
          }
        }
        /** 
         * 转中文单位计数
         * @param value 数字
         * @param fixed 保留小数位数
         * @example
         * 12345 = 1.23万
         */
        ;

        _proto.numberToTenThousand = function numberToTenThousand(value, fixed) {
          if (fixed === void 0) {
            fixed = 2;
          }

          var k = 10000;
          var sizes = ['', '万', '亿', '万亿'];

          if (value < k) {
            return value.toString();
          } else {
            var i = Math.floor(Math.log(value) / Math.log(k));
            return (value / Math.pow(k, i)).toFixed(fixed) + sizes[i];
          }
        }
        /**
         * "," 分割字符串成数组
         * @param str 字符串
         */
        ;

        _proto.stringToArray1 = function stringToArray1(str) {
          if (str == "") {
            return [];
          }

          return str.split(",");
        }
        /**
        * 字符串截取
        * @param str     字符串
        * @param n       截取长度
        * @param showdot 是否把截取的部分用省略号代替
        */
        ;

        _proto.sub = function sub(str, n, showdot) {
          if (showdot === void 0) {
            showdot = false;
          }

          var r = /[^\x00-\xff]/g;

          if (str.replace(r, "mm").length <= n) {
            return str;
          }

          var m = Math.floor(n / 2);

          for (var i = m; i < str.length; i++) {
            if (str.substr(0, i).replace(r, "mm").length >= n) {
              if (showdot) {
                return str.substr(0, i) + "...";
              } else {
                return str.substr(0, i);
              }
            }
          }

          return str;
        }
        /**
         * 计算字符串长度，中文算两个字节
         * @param str 字符串
         */
        ;

        _proto.stringLen = function stringLen(str) {
          var realLength = 0,
              len = str.length,
              charCode = -1;

          for (var i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) realLength += 1;else realLength += 2;
          }

          return realLength;
        };

        return stringUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/T_Demo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, v3, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      v3 = module.v3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "585a8E6KO5LVLptmcZYIWN/", "T_Demo", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var T_Demo = exports('T_Demo', (_dec = ccclass('T_Demo'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(T_Demo, _Component);

        function T_Demo() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._index = 1;
          /**
          * ====================================================
          * 调试代码
          * ====================================================
          */

          _initializerDefineProperty(_this, "nodeMap1", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeMap2", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeMap3", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeMap4", _descriptor4, _assertThisInitialized(_this));

          _this.arr_p = [v3(-9.8, 0, -59.4), //0
          v3(-9.8, 0, 717.6), v3(-24.4, 0, 732.2), //2
          v3(-801.4, 0, 732.2), v3(-816, 0, 717.6), //4
          v3(-816, 0, -59.4), v3(-801.4, 0, -74), //6
          v3(-24.4, 0, -74)];
          /**
           * 记录每一段的距离 数组index=0 表示 从p0 到 p1 的长度
           * @private
           * @type {number[]}
           * @memberof T_Demo
           */

          _this.arr_distance = []; //边缘两个路径半径±3

          _this.arr_distance_inner = []; //边缘两个路径半径±3

          _this.arr_distance_outer = []; //边缘两个路径半径±3

          _this.arr_p_inner = [];
          _this.arr_p_outer = [];
          /**
           * 记录每一段的比例
           * @private
           * @type {number[]}
           * @memberof T_Demo
           */

          _this.arr_proportion = [];
          _this.count_distance = 0;
          /**
           * 精度
           * @private
           * @type {number}
           * @memberof T_Demo
           */

          _this.accuracy = 100000;
          _this.radius = 14.6;
          _this._path = 0;
          _this._speed = 3070;
          _this._run = 0;
          return _this;
        }

        var _proto = T_Demo.prototype;
        /**
        * ====================================================
        * onLoad 初始化
        * ====================================================
        */

        _proto.onLoad = function onLoad() {
          this.node.setPosition(-9.8, 0, -62);
          this.node.setRotationFromEuler(0, 0, 0);
          this.init();
          window["t_demo"] = this;
          window["v3"] = v3;
        };

        _proto.start = function start() {};
        /**
         * 初始化路径数据
         * @memberof T_Demo
         */


        _proto.init = function init() {
          var p0 = this.arr_p[0];
          var p1 = this.arr_p[1];
          var p2 = this.arr_p[2];
          var p3 = this.arr_p[3];
          var value1 = p1.z - p0.z;
          var value2 = p2.x - p3.x;
          var radius = this.radius;
          var half_semicircle_len = Math.PI * radius / 2;
          var arr_distance = [value1, half_semicircle_len, value2, half_semicircle_len, value1, half_semicircle_len, value2, half_semicircle_len];
          var count_distance = 0;

          for (var i = 0; i < arr_distance.length; i++) {
            count_distance += arr_distance[i];
          }

          for (var _i = 0; _i < arr_distance.length; _i++) {
            this.arr_proportion[_i] = Math.floor(arr_distance[_i] / count_distance * this.accuracy);
          }

          this.arr_distance = arr_distance;
          this.count_distance = count_distance;
          console.log(this.arr_proportion);
          console.log(this.count_distance); // v3(-9.8, 0, -59.4),//0
          // v3(-9.8, 0, 717.6),
          // v3(-24.4, 0, 732.2),//2
          // v3(-801.4, 0, 732.2),
          // v3(-816, 0, 717.6),//4
          // v3(-816, 0, -59.4),
          // v3(-801.4, 0, -74),//6
          // v3(-24.4, 0, -74),

          var p = this.arr_p;
          this.arr_p_outer = [v3(p[0].x + 3, 0, p[0].z), //0
          v3(p[1].x + 3, 0, p[1].z), v3(p[2].x, 0, p[2].z + 3), //2
          v3(p[3].x, 0, p[3].z + 3), v3(p[4].x - 3, 0, p[4].z), //4
          v3(p[5].x - 3, 0, p[5].z), v3(p[6].x, 0, p[6].z - 3), //6
          v3(p[7].x, 0, p[7].z - 3)];
          this.arr_p_inner = [v3(p[0].x - 3, 0, p[0].z), //0
          v3(p[1].x - 3, 0, p[1].z), v3(p[2].x, 0, p[2].z - 3), //2
          v3(p[3].x, 0, p[3].z - 3), v3(p[4].x + 3, 0, p[4].z), //4
          v3(p[5].x + 3, 0, p[5].z), v3(p[6].x, 0, p[6].z + 3), //6
          v3(p[7].x, 0, p[7].z + 3)];
          radius = this.radius + 3;
          half_semicircle_len = Math.PI * radius / 2;
          this.arr_distance_outer = [value1, half_semicircle_len, value2, half_semicircle_len, value1, half_semicircle_len, value2, half_semicircle_len];
          radius = this.radius - 3;
          half_semicircle_len = Math.PI * radius / 2;
          this.arr_distance_inner = [value1, half_semicircle_len, value2, half_semicircle_len, value1, half_semicircle_len, value2, half_semicircle_len];
        };

        _proto.run1 = function run1(pre) {
          var now = pre % this.accuracy;
          var i = 0;

          for (i = 0; i < this.arr_proportion.length; i++) {
            if (now > this.arr_proportion[i]) {
              // id++;
              now -= this.arr_proportion[i];
            } else {
              break;
            }
          }

          var v = this.unifiedArrP[i].clone();
          var radius = this.unifiedRadius;
          var nowPre = now / this.arr_proportion[i];
          var _cos = 0;
          var _sin = 0;
          var nodePre_pi_half = nowPre * Math.PI / 2;

          switch (i) {
            case 0:
              v.z = v.z + this.arr_distance[i] * nowPre;
              this.node.setRotationFromEuler(0, 0, 0);
              break;

            case 1:
              _cos = radius - Math.cos(nodePre_pi_half) * radius;
              _sin = Math.sin(nodePre_pi_half) * radius;
              v.x = v.x - _cos;
              v.z = v.z + _sin;
              this.node.setRotationFromEuler(0, -90 * nowPre, 0);
              break;

            case 2:
              v.x = v.x - this.arr_distance[i] * nowPre;
              this.node.setRotationFromEuler(0, -90, 0);
              break;

            case 3:
              _cos = radius - Math.cos(nodePre_pi_half) * radius;
              _sin = Math.sin(nodePre_pi_half) * radius;
              v.x = v.x - _sin;
              v.z = v.z - _cos;
              this.node.setRotationFromEuler(0, -90 * nowPre - 90, 0);
              break;

            case 4:
              v.z = v.z - this.arr_distance[i] * nowPre;
              this.node.setRotationFromEuler(0, -180, 0);
              break;

            case 5:
              _cos = radius - Math.cos(nodePre_pi_half) * radius;
              _sin = Math.sin(nodePre_pi_half) * radius;
              v.x = v.x + _cos;
              v.z = v.z - _sin;
              this.node.setRotationFromEuler(0, -90 * nowPre - 180, 0);
              break;

            case 6:
              v.x = v.x + this.arr_distance[i] * nowPre;
              this.node.setRotationFromEuler(0, 90, 0);
              break;

            case 7:
              _cos = radius - Math.cos(nodePre_pi_half) * radius;
              _sin = Math.sin(nodePre_pi_half) * radius;
              v.x = v.x + _sin;
              v.z = v.z + _cos;
              this.node.setRotationFromEuler(0, 90 - 90 * nowPre, 0);
              break;
          }

          this.node.setPosition(v);
        };
        /**
         *
         * @param {number} deltaTime
         * @memberof T_Demo
         */


        _proto.update = function update(deltaTime) {
          // [24283, 716, 24283, 716, 24283, 716, 24283, 716]
          var distance = deltaTime * this._speed;
          this._run += distance;
          this._run = this._run % this.accuracy; // this._run = this._run % (24283 + 716) + (24283 + 716) * 2;

          this.run1(this._run);
        };

        _createClass(T_Demo, [{
          key: "unifiedArrP",
          get: function get() {
            if (this._path == 1) {
              return this.arr_p_outer;
            }

            if (this._path == -1) {
              return this.arr_p_inner;
            }

            return this.arr_p;
          }
        }, {
          key: "unifiedRadius",
          get: function get() {
            if (this._path == 1) {
              return this.radius + 3;
            }

            if (this._path == -1) {
              return this.radius - 3;
            }

            return this.radius;
          }
        }]);

        return T_Demo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeMap1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeMap2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeMap3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeMap4", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './BaseListView.ts', './List.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, app, BaseListView, List;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
    }, function (module) {
      app = module.default;
    }, function (module) {
      BaseListView = module.BaseListView;
    }, function (module) {
      List = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "07a8320u1pHobSUXEPvRB8n", "TestView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TestView = exports('TestView', (_dec = ccclass('TestView'), _dec2 = property(List), _dec3 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseListView) {
        _inheritsLoose(TestView, _BaseListView);

        function TestView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseListView.call.apply(_BaseListView, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "listV", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "imgIcon", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = TestView.prototype;

        _proto.show = function show() {
          var _BaseListView$prototy;

          this.arr_btn = [];
          this.arr_event = [];

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          (_BaseListView$prototy = _BaseListView.prototype.show).call.apply(_BaseListView$prototy, [this].concat(args)); // this.loadIcon();


          var arr = [{
            name: "贵州省安顺市西秀区宋旗镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "贵州省安顺市西秀区宋旗镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "贵州省安顺市西秀区宋旗镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "贵州省安顺市西秀区宋旗镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "贵州省安顺市西秀区宋旗镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }, {
            name: "宁夏回族自治区银川市贺兰县洪广镇"
          }, {
            name: "安徽省池州市贵池区杏花村街道"
          }, {
            name: "黑龙江省哈尔滨市五常市山河屯林业局"
          }, {
            name: "江西省九江市德安县磨溪乡"
          }, {
            name: "陕西省榆林市吴堡县张家山镇"
          }];

          for (var i = 0; i < arr.length; i++) {
            arr[i]["index"] = i;
          }

          this.updateUI(arr);
        };

        _proto.updateUI = function updateUI() {
          // this.arrData = data.arrMissionVo.sort(this.sortBy);
          this.arrData = arguments.length <= 0 ? undefined : arguments[0];
          this.listV.refreshData(this.arrData);
        };

        _proto.loadIcon = /*#__PURE__*/function () {
          var _loadIcon = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            var icon;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // let icon = "2";
                  icon = "icon/1";
                  app.promise.loadSpriteFrame(icon).then(function (res) {
                    // app.promise.loadSpriteFrame(`icon/1`).then((res) => {
                    _this2.imgIcon.spriteFrame = res;
                  });

                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));

          function loadIcon() {
            return _loadIcon.apply(this, arguments);
          }

          return loadIcon;
        }();

        return TestView;
      }(BaseListView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listV", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "imgIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TimerModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, app;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      app = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "505b9mNamlJGYFGAZalAIyA", "TimerModel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TimerModel = exports('TimerModel', (_dec = ccclass('TimerModel'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TimerModel, _Component);

        function TimerModel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "node1", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "node2", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "node3", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = TimerModel.prototype;

        _proto.playAnim = /*#__PURE__*/function () {
          var _playAnim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // app.event.emit(app.eName.event_gameStart);
                  // return;
                  this.node.active = true;
                  this.node2.active = false;
                  this.node1.active = false;
                  this.node3.active = true;
                  _context.next = 6;
                  return app.promise.sleep(1);

                case 6:
                  this.node3.active = false;
                  this.node2.active = true;
                  _context.next = 10;
                  return app.promise.sleep(1);

                case 10:
                  this.node2.active = false;
                  this.node1.active = true;
                  _context.next = 14;
                  return app.promise.sleep(1);

                case 14:
                  this.node.active = false;
                  app.event.emit(app.eName.event_gameStart);

                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function playAnim() {
            return _playAnim.apply(this, arguments);
          }

          return playAnim;
        }();

        return TimerModel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tweenUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, tween, Tween, app, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
      Tween = module.Tween;
    }, function (module) {
      app = module.default;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cca10ajGaBI/qso0Dv/q/UF", "tweenUtils", undefined);

      var tweenUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(tweenUtils, _singtonClass);

        function tweenUtils() {
          return _singtonClass.apply(this, arguments) || this;
        }

        var _proto = tweenUtils.prototype;
        /**
         * lab显示数字缓动动画
         * @param {Label} lab
         * @param {number} value
         * @param {number} [time=0.5]
         * @memberof tweenUtils
         */

        _proto.labTween = function labTween(lab, value, time) {
          if (time === void 0) {
            time = 0.5;
          }

          var temp = Number(lab.string);
          var obj = {
            a: temp
          };
          tween(obj).to(time, {
            a: value
          }, {
            progress: function progress(s, e, c, t) {
              var initValue = s; //初始值

              var targetValue = e; //目标值

              var temp = targetValue - initValue; //100 30

              var num = Math.round(temp * t + initValue);

              if (lab) {
                lab.string = String(num);
              }

              return 0;
            }
          }).start();
        };

        _proto.sharkTween = function sharkTween(obj, time) {
          if (time === void 0) {
            time = 8.5;
          }

          Tween.stopAllByTarget(obj);
          tween(obj).repeatForever(tween().set({
            angle: 0
          }).to(time, {
            angle: 359
          })).start();
        };

        _proto.guideFingerTween = function guideFingerTween(obj) {
          Tween.stopAllByTarget(obj);
          tween(obj).repeatForever(tween().set({
            x: 0,
            y: 0,
            scale: 1
          }).to(0.8, {
            x: 50,
            y: -50,
            scale: 1.2
          }).to(0.8, {
            x: 0,
            y: 0,
            scale: 1
          })).start();
        };

        _proto.scaleShow = function scaleShow(obj) {
          Tween.stopAllByTarget(obj);
          tween(obj).set({
            scale: app.vector.getV3(0.7)
          }).to(0.05, {
            scale: app.vector.getV3(0.9)
          }).to(0.05, {
            scale: app.vector.getV3(0.7)
          }).call(function () {
            obj.active = true;
          }).start();
        };

        _proto.scaleDelayShow = function scaleDelayShow(obj, delay_t) {
          Tween.stopAllByTarget(obj);
          tween(obj).call(function () {
            obj.active = false;
          }).delay(delay_t).call(function () {
            obj.active = true;
          }).set({
            scale: app.vector.getV3(0.7)
          }).to(0.05, {
            scale: app.vector.getV3(0.9)
          }).to(0.05, {
            scale: app.vector.getV3(0.7)
          }).start();
        };

        _proto.stopAllByTarget = function stopAllByTarget(obj) {
          Tween.stopAllByTarget(obj);
        }
        /** 
         * 按钮 呼吸效果
         * @param {Node} obj
         * @param {number} scalemin
         * @param {number} scalemax
         * @param {number} [time=0.5]
         * @memberof tweenUtils
         */
        ;

        _proto.scaleTween = function scaleTween(obj, scalemin, scalemax, time) {
          if (time === void 0) {
            time = 0.5;
          }

          Tween.stopAllByTarget(obj);
          tween(obj).repeatForever(tween().set({
            scale: scalemax
          }).to(time, {
            scale: scalemin
          }).to(time, {
            scale: scalemax
          })).start();
        }
        /**
         * 上下浮动
         * @param {Node} obj
         * @param {number} [time=1.8]
         * @memberof tweenUtils
         */
        ;

        _proto.floatTween = function floatTween(obj, time) {
          if (time === void 0) {
            time = 0.8;
          }

          Tween.stopAllByTarget(obj);
          tween(obj).repeatForever(tween().set({
            y: 0
          }).to(time, {
            y: 40
          })).start();
        };

        return tweenUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/uiManagerUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './InterfaceUrl.ts', './app.ts', './singtonClass.ts', './gameEnum.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, resources, Prefab, assetManager, instantiate, InterfaceUrl, app, singtonClass, gameEnum;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      Prefab = module.Prefab;
      assetManager = module.assetManager;
      instantiate = module.instantiate;
    }, function (module) {
      InterfaceUrl = module.default;
    }, function (module) {
      app = module.default;
    }, function (module) {
      singtonClass = module.default;
    }, function (module) {
      gameEnum = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "872c67/+vlJ/pXaCQotUD6S", "uiManagerUtils", undefined);
      /**
       * 场景ui管理类
       * @class UIManagerUtils
       */


      var uiManagerUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(uiManagerUtils, _singtonClass);

        function uiManagerUtils() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _singtonClass.call.apply(_singtonClass, [this].concat(args)) || this;
          _this._dictPanel = new Map();
          _this._dictComp = new Map();
          _this._isLoading = new Map();
          _this._bundleConfig = new Map();
          /**
           * 游戏内的页面是否处于show 或 load的状态
           * @private
           * @memberof uiManagerUtils
           */

          _this._listIsShow = new Map();
          return _this;
        }

        var _proto = uiManagerUtils.prototype;

        _proto.init = function init() {};
        /**
         * 显示一个弹窗
         * @param {string} name 弹窗名称
         * @param {Function} [cb] 显示后可执行的函数 一般不传 在view脚本中的show方法中实现打开后的操作
         * @param {...any[]} args 
         * @memberof UIManagerUtils
         */


        _proto.show = function show(name, cb) {
          if (!name) {
            return;
          }

          this._listIsShow.set(name, true);
          /**
          * ====================================================
          * 如果已打开 不对当前已打开的界面做处理 
          * ====================================================
          */


          if (this._dictPanel.has(name) == true) {
            return;
          }
          /**
          * ====================================================
          * 判断是否在加载prefab的时候 又show了相同的view
          * ====================================================
          */


          if (this._isLoading.has(name) == true && this._isLoading.get(name) == true) {
            console.log(name, "is load");
            return;
          }

          this._isLoading.set(name, true);

          app.eventObj.showViewWait();
          /**
          * ====================================================
          * 根据配置从本地或者远程服务器加载prefab
          * ====================================================
          */

          for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          if (gameEnum.isRemoteView[name] == 1) {
            this.loadPrefabForBundle.apply(this, [name, cb].concat(args));
          } else {
            this.loadPrefab.apply(this, [name, cb].concat(args));
          }
        }
        /**
         * 加载本地的prefab
         * @param {string} name
         * @param {Function} [cb]
         * @param {...any[]} args
         * @memberof uiManagerUtils
         */
        ;

        _proto.loadPrefab = function loadPrefab(name, cb) {
          var _this2 = this;

          for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            args[_key3 - 2] = arguments[_key3];
          }

          var path = "ui/" + name;
          resources.load(path, Prefab, function (err, prefab) {
            _this2._isLoading.set(name, false);

            app.eventObj.hideViewWait();

            if (err) {
              // console.warn(err);
              console.log(" === === === === === === === === === === === === === === === ");
              console.warn("本地加载prefab失败：", name);
              console.log(" === === === === === === === === === === === === === === === ");
              return;
            }

            _this2.showNode(false, prefab, name, cb, name, args);
          });
        }
        /**
         * 加载远程prefab
         * @param {string} name
         * @param {Function} [cb]
         * @param {...any[]} args
         * @memberof uiManagerUtils
         */
        ;

        _proto.loadPrefabForBundle = function loadPrefabForBundle(name, cb) {
          var _this3 = this;

          for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
            args[_key4 - 2] = arguments[_key4];
          } // 远程Bundle的URL地址


          var remoteUrl = 'http://192.168.2.35:1688/bundle_ui'; // 需要加载的资源在bundle下的路径

          var path = "ui/" + name; // 加载远程Bundle

          assetManager.loadBundle(remoteUrl, function (err, bundle) {
            if (err) {
              _this3._isLoading.set(name, false);

              app.eventObj.hideViewWait();
              console.error('Failed to load bundle: ' + remoteUrl);
              return;
            }

            if (REHome && REHome.init) {
              REHome.init(app, InterfaceUrl.config.pid, InterfaceUrl.config.sn, InterfaceUrl.url);
            } // 使用bundle中的load方法加载prefab


            bundle.load(path, Prefab, function (err, prefab) {
              _this3._isLoading.set(name, false);

              app.eventObj.hideViewWait();

              if (err) {
                console.error('Failed to load prefab: ' + err);
                return;
              }

              _this3.showNode(true, prefab, name, cb, name, args);
            });
          });
        }
        /**
         * 根据prefab生成node并添加到页面上
         * @private
         * @param {boolean} isRemote
         * @param {*} prefab
         * @param {*} name
         * @param {*} cb
         * @param {*} scriptName
         * @param {*} args
         * @return {*} 
         * @memberof uiManagerUtils
         */
        ;

        _proto.showNode = /*#__PURE__*/function () {
          var _showNode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(isRemote, prefab, name, cb, scriptName, args) {
            var panel;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(this._listIsShow.has(name) && this._listIsShow.get(name) == false)) {
                    _context.next = 3;
                    break;
                  }

                  console.log("打开页面时 在加载过程中 调用了hide");
                  return _context.abrupt("return");

                case 3:
                  panel = instantiate(prefab);

                  this._dictPanel.set(name, panel);

                  panel.parent = args[0];
                  this.showCallBack.apply(this, [isRemote, panel, cb, name].concat(args));

                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function showNode(_x, _x2, _x3, _x4, _x5, _x6) {
            return _showNode.apply(this, arguments);
          }

          return showNode;
        }()
        /**
         * 将view显示到界面上后 执行该脚本的show方法
         * @param {*} panel
         * @param {*} scriptName
         * @param {*} args
         * @param {*} cb
         * @memberof UIManagerUtils
         */
        ;

        _proto.showCallBack = function showCallBack(isRemote, panel, cb) {
          for (var _len5 = arguments.length, args = new Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
            args[_key5 - 3] = arguments[_key5];
          }

          var e_name = args[0];

          if (!e_name) {
            return;
          }

          var arr_name = e_name.split('/');
          var scriptName = arr_name[arr_name.length - 1];

          if (!scriptName) {
            console.error(args[0] + " getComponent is error");
            return;
          }

          if (isRemote == true) {
            var _comp$show;

            var config = this._bundleConfig.get(e_name); // console.log(` === === === === === === === === === === === === === === === `);
            // console.warn(config);
            // console.log(` === === === === === === === === === === === === === === === `);


            var comp = panel.getComponent(scriptName);

            if (config) {
              comp.init(config.showComplete, config.hideComplete);
            } else {
              comp.init(null, null);
            }

            comp && (comp == null ? void 0 : (_comp$show = comp.show) == null ? void 0 : _comp$show.call.apply(_comp$show, [comp].concat(args)));
            cb && cb();

            this._dictComp.set(e_name, comp);
          } else {
            var _comp$show2;

            var _comp = panel.getComponent(scriptName);

            _comp && (_comp == null ? void 0 : (_comp$show2 = _comp.show) == null ? void 0 : _comp$show2.call.apply(_comp$show2, [_comp].concat(args)));
            cb && cb();

            this._dictComp.set(e_name, _comp);
          }
        }
        /**
         * 根据view名称获取一个view，如果当前页面中没有这个view，则返回null，有 则返回一个Node
         * @param {string} name
         * @return {*}  {(null | Node)}
         * @memberof uiManagerUtils
         */
        ;

        _proto.getView = function getView(name) {
          if (this._dictPanel.has(name)) {
            var panel = this._dictPanel.get(name);

            return panel;
          } // console.error(name + " is null");


          return null;
        }
        /**
         * 根据view名称获取一个view上对应的脚本
         * 如果当前页面中没有这个view，或view上没有绑定对应的脚本,则返回null
         * 有 则返回一个baseView 或 REBaseView
         * @param {string} name
         * @return {*}  {(null | BaseView | REBaseView)}
         * @memberof uiManagerUtils
         */
        ;

        _proto.getViewComp = function getViewComp(name) {
          if (this._dictComp.has(name)) {
            var comp = this._dictComp.get(name);

            return comp;
          }

          return null;
        }
        /**
         * 根据view name调用远程包中的comp.updateForHome
         * @param {string} name
         * @param {*} args
         * @return {*} 
         * @memberof uiManagerUtils
         */
        ;

        _proto.updateRemoteView = function updateRemoteView(name) {
          var comp = app.uiMgr.getViewComp(gameEnum.view.NONE);

          if (!comp) {
            console.warn("comp is null:", name);
            return;
          }

          if (!comp.updateForHome) {
            console.warn("updateForHome is null:", name);
            return;
          }

          for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
            args[_key6 - 1] = arguments[_key6];
          }

          comp.updateForHome.apply(comp, args);
        }
        /** 
         * 隐藏一个弹窗
         * @param {string} name 弹窗名称
         * @param {Function} [cb] 显示后可执行的函数 一般不传 在view脚本中的show方法中实现打开后的操作
         * @param {...any[]} args
         * @return {*} 
         * @memberof uiManagerUtils
         */
        ;

        _proto.hide = function hide(name, cb) {
          var _this4 = this;

          this._listIsShow.set(name, false);

          if (this._dictPanel.has(name) == false) {
            if (name != "WaitView") {
              console.log("不存在:", name);
            }

            return;
          }

          var e_name = name;

          if (!e_name) {
            return;
          }

          var arr_name = e_name.split('/');
          var scriptName = arr_name[arr_name.length - 1];

          var nodePanel = this._dictPanel.get(name);

          cb && cb();

          if (!nodePanel) {
            // console.error("getComponent is null " + name);
            return;
          }
          /**
          * ====================================================
          * 处理hide及hideEffect事件
          * ====================================================
          */


          var comp = nodePanel.getComponent(scriptName);

          if (!comp) {
            this.panelDestroy(name, nodePanel, comp);
            return;
          }

          for (var _len7 = arguments.length, args = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
            args[_key7 - 2] = arguments[_key7];
          }

          comp.hide && comp.hide.call(comp, args);
          comp.hideEffect && comp.hideEffect.call(comp, function () {
            _this4.panelDestroy(name, nodePanel, comp);
          });
        }
        /**
         * 移除一个节点，取消对应监听，会销毁该对象及其子对象
         * @private
         * @param {*} name
         * @param {Node} nodePanel
         * @param {BaseView} comp
         * @memberof uiManagerUtils
         */
        ;

        _proto.panelDestroy = function panelDestroy(name, nodePanel, comp) {
          nodePanel.removeFromParent();
          comp && (comp == null ? void 0 : comp.off());

          this._dictPanel["delete"](name);

          nodePanel.destroyAllChildren();
          nodePanel.destroy();
        }
        /**
         * 根据view名称判断一个view是否显示
         * @param {string} name
         * @return {*} 
         * @memberof uiManagerUtils
         */
        ;

        _proto.isShow = function isShow(name) {
          if (this._listIsShow.has(name) && this._listIsShow.get(name) == true) {
            // console.log("打开页面时 在加载过程中 调用了hide");
            return true;
          }

          return false;
        };

        return uiManagerUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/urlUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7925fKyu05G3r43nc4Zdo8B", "urlUtils", undefined);

      var urlUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(urlUtils, _singtonClass);

        function urlUtils() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _singtonClass.call.apply(_singtonClass, [this].concat(args)) || this;
          _this.param = null;
          return _this;
        }

        _createClass(urlUtils, [{
          key: "searchParam",
          get: //h5 获取url上的hash search参数 如果两者参数有冲突 以search为准
          function get() {
            var obj = {};

            if (window.document.location) {
              // console.log(window.document.location.search, window.document.location.hash);
              var hash = decodeURIComponent(window.document.location.hash);
              hash = hash.split("#")[1];

              if (hash) {
                var pairs = hash.split("&");

                for (var i = 0; i < pairs.length; i++) {
                  obj[pairs[i].split("=")[0]] = pairs[i].split("=")[1];
                }
              }

              var search = decodeURIComponent(window.document.location.search);
              search = search.split("?")[1];

              if (search) {
                var pairs = search.split("&");

                for (var i = 0; i < pairs.length; i++) {
                  obj[pairs[i].split("=")[0]] = pairs[i].split("=")[1];
                }
              } // console.log(location.href);
              // console.log("hash", hash);
              // console.log("search", search);

            }

            this.param = obj;
            return obj;
          }
        }, {
          key: "searchHerf",
          get: function get() {
            var obj = {};

            if (window.document.location) {
              var href = decodeURIComponent(window.location.href); // console.log('href------>>',href);

              href = href.split("?")[1];

              if (href) {
                var pairs = href.split("&");

                for (var i = 0; i < pairs.length; i++) {
                  obj[pairs[i].split("=")[0]] = pairs[i].split("=")[1];
                }
              }
            }

            return obj;
          }
        }]);

        return urlUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/vectorUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, v3, Vec3, Mat4, app, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      Vec3 = module.Vec3;
      Mat4 = module.Mat4;
    }, function (module) {
      app = module.default;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dfb0ajYIdpAW6CvGNNcbItW", "vectorUtils", undefined);

      var vectorUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(vectorUtils, _singtonClass);

        function vectorUtils() {
          return _singtonClass.apply(this, arguments) || this;
        }

        var _proto = vectorUtils.prototype;
        /**
         * 获取一个x y z的值都是value的向量
         * @param {*} value
         * @return {*}  {Vec3}
         * @memberof vectorUtils
         */

        _proto.getV3 = function getV3(value) {
          return v3(value, value, value);
        }
        /**
         * X轴
         */
        ;
        /**
         * 随时间变化进度值
         * @param start  起始位置
         * @param end    结束位置
         * @param t      进度[0，1]
         */


        _proto.progress = function progress(start, end, t) {
          var current = new Vec3();
          current.x = app.math.progress(start.x, end.x, t);
          current.y = app.math.progress(start.y, end.y, t);
          current.z = app.math.progress(start.z, end.z, t);
          return current;
        }
        /**
         * 求两个三维向量的和
         * @param pos1  向量1
         * @param pos2  向量2
         */
        ;

        _proto.add = function add(pos1, pos2) {
          var outPos = new Vec3();
          Vec3.add(outPos, pos1, pos2);
          return outPos;
        }
        /**
         * 求两个三维向量的差
         * @param pos1  向量1
         * @param pos2  向量2
         */
        ;

        _proto.sub = function sub(pos1, pos2) {
          var outPos = new Vec3();
          Vec3.subtract(outPos, pos1, pos2);
          return outPos;
        }
        /**
         * 三维向量乘以常量
         * @param pos     向量
         * @param scalar  常量
         */
        ;

        _proto.mul = function mul(pos, scalar) {
          var outPos = new Vec3();
          Vec3.multiplyScalar(outPos, pos, scalar);
          return outPos;
        }
        /**
         * 三维向量除常量
         * @param pos     向量
         * @param scalar  常量
         */
        ;

        _proto.div = function div(pos, scalar) {
          var outPos = new Vec3();
          outPos.x = pos.x / scalar;
          outPos.y = pos.y / scalar;
          outPos.z = pos.z / scalar;
          return outPos;
        }
        /**
         * 判断两个三维向量的值是否相等
         * @param pos1  向量1
         * @param pos2  向量2
         */
        ;

        _proto.equals = function equals(pos1, pos2) {
          if (pos1.x == pos2.x && pos1.y == pos2.y && pos1.z == pos2.z) {
            return true;
          }

          return false;
        }
        /**
         * 三维向量的模
         * @param pos  向量
         */
        ;

        _proto.magnitude = function magnitude(pos) {
          return pos.length();
        }
        /**
         * 三维向量归一化
         * @param pos  向量
         */
        ;

        _proto.normalize = function normalize(pos) {
          var outPos = new Vec3(pos.x, pos.y, pos.z);
          return outPos.normalize();
        }
        /**
         * 获得位置1，到位置2的方向
         * @param pos1  向量1
         * @param pos2  向量2
         */
        ;

        _proto.direction = function direction(pos1, pos2) {
          var outPos = new Vec3();
          Vec3.subtract(outPos, pos2, pos1);
          return outPos.normalize();
        }
        /**
         * 获得两点间的距离
         * @param pos1  向量1
         * @param pos2  向量2
         */
        ;

        _proto.distance = function distance(pos1, pos2) {
          return Vec3.distance(pos1, pos2);
        }
        /**
         * 插值运算
         * @param posStart  开始俏步
         * @param posEnd    结束位置
         * @param t         时间
         */
        ;

        _proto.lerp = function lerp(posStart, posEnd, t) {
          return this.bezierOne(t, posStart, posEnd);
        }
        /**
         * 球面插值
         * @param from  起点
         * @param to    终点
         * @param t     时间
         */
        ;

        _proto.slerp = function slerp(from, to, t) {
          if (t <= 0) {
            return from;
          } else if (t >= 1) {
            return to;
          }

          var dir = this.rotateTo(from, to, Vec3.angle(from, to) / Math.PI * 180 * t);
          var lenght = to.length() * t + from.length() * (1 - t);
          return dir.normalize().multiplyScalar(lenght);
        }
        /**
         * 向量旋转一个角度
         * @param from  起点
         * @param to    终点
         * @param angle 角并
         */
        ;

        _proto.rotateTo = function rotateTo(from, to, angle) {
          //如果两个方向角度为0，则返回目标
          if (Vec3.angle(from, to) == 0) {
            return to;
          }

          var axis = new Vec3(); // 获得旋转轴

          Vec3.cross(axis, from, to);
          axis.normalize();
          var radian = angle * Math.PI / 180; // 获得弧度

          var rotateMatrix = new Mat4();
          rotateMatrix.rotate(radian, axis);
          return new Vec3(Number((from.x * rotateMatrix.m00 + from.y * rotateMatrix.m04 + from.z * rotateMatrix.m08).toFixed(6)), Number((from.x * rotateMatrix.m01 + from.y * rotateMatrix.m05 + from.z * rotateMatrix.m09).toFixed(6)), Number((from.x * rotateMatrix.m02 + from.y * rotateMatrix.m06 + from.z * rotateMatrix.m10).toFixed(6)));
        }
        /**
         * 一次贝塞尔即为线性插值函数
         * @param t 
         * @param posStart 
         * @param posEnd 
         * @returns 
         */
        ;

        _proto.bezierOne = function bezierOne(t, posStart, posEnd) {
          if (t > 1) {
            t = 1;
          } else if (t < 0) {
            t = 0;
          }

          var pStart = posStart.clone();
          var pEnd = posEnd.clone();
          return pStart.multiplyScalar(1 - t).add(pEnd.multiplyScalar(t));
        }
        /**
         * 二次贝塞尔曲线
         * @param t 
         * @param posStart 
         * @param posCon 
         * @param posEnd 
         * @returns 
         */
        ;

        _proto.bezierTwo = function bezierTwo(t, posStart, posCon, posEnd) {
          if (t > 1) {
            t = 1;
          } else if (t < 0) {
            t = 0;
          }

          var n = 1 - t;
          var tt = t * t;
          var pStart = posStart.clone();
          var pos = posStart.clone();
          var pCon = posCon.clone();
          var pEnd = posEnd.clone();
          pos.add(pStart.multiplyScalar(n * n));
          pos.add(pCon.multiplyScalar(2 * n * t));
          pos.add(pEnd.multiplyScalar(tt));
          return pos;
        }
        /**
         * 三次贝塞尔
         * @param t 
         * @param posStart 
         * @param posCon1 
         * @param posCon2 
         * @param posEnd 
         * @returns 
         */
        ;

        _proto.bezierThree = function bezierThree(t, posStart, posCon1, posCon2, posEnd) {
          if (t > 1) {
            t = 1;
          } else if (t < 0) {
            t = 0;
          }

          var n = 1 - t;
          var nn = n * n;
          var nnn = nn * n;
          var tt = t * t;
          var ttt = tt * t;
          var pStart = posStart.clone();
          var pos = posStart.clone();
          var pCon1 = posCon1.clone();
          var pCon2 = posCon2.clone();
          var pEnd = posEnd.clone();
          pos.add(pStart.multiplyScalar(nnn));
          pos.add(pCon1.multiplyScalar(3 * nn * t));
          pos.add(pCon2.multiplyScalar(3 * n * tt));
          pos.add(pEnd.multiplyScalar(ttt));
          return pos;
        }
        /**
         * 点乘
         * @param dir1 方向量1
         * @param dir2 方向量2
         */
        ;

        _proto.dot = function dot(dir1, dir2) {
          var tempDir1 = dir1;
          var tempDir2 = dir2;
          return tempDir1.x * tempDir2.x + tempDir1.y * tempDir2.y + tempDir1.z * tempDir2.z;
        }
        /**
         * 叉乘
         * @param dir1 方向量1
         * @param dir2 方向量2
         */
        ;

        _proto.cross = function cross(dir1, dir2) {
          var i = new Vec3(1, 0, 0);
          var j = new Vec3(0, 1, 0);
          var k = new Vec3(0, 0, 1);
          var tempDir1 = new Vec3(dir1.x, dir1.y, dir1.z);
          var tempDir2 = new Vec3(dir2.x, dir2.y, dir2.z);
          var iv = i.multiplyScalar(tempDir1.y * tempDir2.z - tempDir2.y * tempDir1.z);
          var jv = j.multiplyScalar(tempDir2.x * tempDir1.z - tempDir1.x * tempDir2.z);
          var kv = k.multiplyScalar(tempDir1.x * tempDir2.y - tempDir2.x * tempDir1.y);
          return iv.add(jv).add(kv);
        }
        /**
         * 获得两个方向向量的角度
         * @param dir1 方向量1
         * @param dir2 方向量2
         */
        ;

        _proto.angle = function angle(dir1, dir2) {
          var dotValue = this.dot(dir1.clone().normalize(), dir2.clone().normalize());
          return Math.acos(dotValue) / Math.PI * 180 * Math.sign(dotValue);
        }
        /**
         * 获得方向a到方向b的角度（带有方向的角度）
         * @param a 角度a
         * @param b 角度b
         */
        ;

        _proto.dirAngle = function dirAngle(a, b) {
          var c = this.cross(a, b);
          var angle = this.angle(a, b); // a 到 b 的夹角

          var sign = Math.sign(this.dot(c.normalize(), this.cross(b.normalize(), a.normalize())));
          return angle * sign;
        }
        /**
         * 根据ab坐标 获得一个a到b的向量
         * @param {Vec3} start
         * @param {Vec3} end
         * @memberof vectorUtils
         */
        ;

        _proto.vectorAtoB = function vectorAtoB(start, end) {
          var v = v3(end.x - start.x, end.y - start.y, end.z - start.z);
          return v;
        };

        _createClass(vectorUtils, [{
          key: "x",
          get: function get() {
            return new Vec3(1, 0, 0);
          }
          /**·
           * Y轴
           */

        }, {
          key: "y",
          get: function get() {
            return new Vec3(0, 1, 0);
          }
          /**
           * Z轴
           */

        }, {
          key: "z",
          get: function get() {
            return new Vec3(0, 0, 1);
          }
          /**
           * 左向量
           */

        }, {
          key: "left",
          get: function get() {
            return new Vec3(-1, 0, 0);
          }
          /**
           * 右向量
           */

        }, {
          key: "right",
          get: function get() {
            return new Vec3(1, 0, 0);
          }
          /**
           * 上向量
           */

        }, {
          key: "up",
          get: function get() {
            return new Vec3(0, 1, 0);
          }
          /**
           * 下向量
           */

        }, {
          key: "down",
          get: function get() {
            return new Vec3(0, -1, 0);
          }
          /**
           * 前向量
           */

        }, {
          key: "forward",
          get: function get() {
            return new Vec3(0, 0, 1);
          }
          /**
           * 后向量
           */

        }, {
          key: "back",
          get: function get() {
            return new Vec3(0, 0, -1);
          }
          /**
           * 1向量
           */

        }, {
          key: "one",
          get: function get() {
            return new Vec3(1, 1, 1);
          }
          /**
           * 0向量
           */

        }, {
          key: "zero",
          get: function get() {
            return new Vec3(0, 0, 0);
          }
        }]);

        return vectorUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/viewMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './gameEnum.ts', './ModelTips.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, tween, Tween, v3, Component, app, gameEnum, ModelTips;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      tween = module.tween;
      Tween = module.Tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      app = module.default;
    }, function (module) {
      gameEnum = module.default;
    }, function (module) {
      ModelTips = module.ModelTips;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

      cclegacy._RF.push({}, "217a4quqc1Pa5GeK0j/Fzau", "viewMgr", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executionOrder = _decorator.executionOrder;
      /**
       * 游戏层级管理
       * @export
       * @class viewMgr
       * @extends {Component}
       */

      var viewMgr = exports('default', (_dec = executionOrder(-300), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(Node), _dec9 = property(Node), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(viewMgr, _Component);

        function viewMgr() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "sceneLayer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "effectLayer", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "windowLayer", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "waitLayer", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "topLayer", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "prefabToast", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "node_null", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "node_wait", _descriptor8, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = viewMgr.prototype; // @property(Prefab)
        // modelIconTips: Prefab = null;
        // @property(Prefab)
        // livePrefab: Prefab = null;
        // @property(Prefab)
        // stealIconTips: Prefab = null;
        // @property(Prefab)
        // greedTips: Prefab = null;
        // @property(Prefab)
        // stealIFailconTips: Prefab = null;
        // @property(Prefab)
        // stealingiconTips: Prefab = null;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}

        _proto.start = function start() {
          // this.node.on();
          app.event.on(app.eName.OPEN_VIEW, this.show, this);
          app.event.on(app.eName.OPEN_VIEW_AND_RUN_FUNC, this.showCallBack, this);
          app.event.on(app.eName.CLOSE_VIEW, this.hide, this);
          app.event.on(app.eName.TOAST, this.toast, this);
          app.event.on(app.eName.SHOW_WAIT, this.showWait, this);
          app.event.on(app.eName.HIDE_WAIT, this.hideWait, this);
          this.node_null.on(Node.EventType.TOUCH_END, this._click, this);
          tween(this.node_wait).repeatForever(tween().set({
            angle: 0
          }).to(3, {
            angle: 359
          })).start();
          this.waitLayer.active = false;
        };

        _proto.showWait = function showWait() {
          this.waitLayer.active = true;
        };

        _proto.hideWait = function hideWait() {
          this.waitLayer.active = false;
        };

        _proto.onDestroy = function onDestroy() {
          app.event.offAll(this);
          this.node_null.off(Node.EventType.TOUCH_END, this._click, this);
          Tween.stopAllByTarget(this.node_wait);
        };

        _proto._click = function _click() {};

        _proto.show = function show(view_name, layer) {
          if (view_name === void 0) {
            view_name = gameEnum.view.TOAST_VIEW;
          }

          if (layer === void 0) {
            layer = gameEnum.layer.WINDOW_LAYER;
          }

          var node_layer = this.node.getChildByName(layer);

          if (node_layer) {
            var _app$uiMgr;

            for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }

            (_app$uiMgr = app.uiMgr).show.apply(_app$uiMgr, [view_name, null, node_layer].concat(args));
          } else {
            console.error("层级不存在：", layer);
          }
        }
        /**
         * 打开一个界面 并打开后执行一个函数
         * @param {*} [view_name=gameEnum.view.TOAST_VIEW]
         * @param {*} [layer=gameEnum.layer.WINDOW_LAYER]
         * @param {...any[]} args
         * @memberof viewMgr
         */
        ;

        _proto.showCallBack = function showCallBack(view_name, layer, cb) {
          if (view_name === void 0) {
            view_name = gameEnum.view.TOAST_VIEW;
          }

          if (layer === void 0) {
            layer = gameEnum.layer.WINDOW_LAYER;
          }

          var node_layer = this.node.getChildByName(layer);

          if (node_layer) {
            var _app$uiMgr2;

            for (var _len3 = arguments.length, args = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
              args[_key3 - 3] = arguments[_key3];
            } // panel.parent = node_layer;


            (_app$uiMgr2 = app.uiMgr).show.apply(_app$uiMgr2, [view_name, cb, node_layer].concat(args));
          } else {
            console.error("层级不存在：", layer);
          }
        };

        _proto.hide = function hide(view_name) {
          if (view_name === void 0) {
            view_name = gameEnum.view.TOAST_VIEW;
          }

          app.uiMgr.hide(view_name);
        };

        _proto.toast = function toast(tips, _time, count) {
          if (_time === void 0) {
            _time = 0.5;
          }

          if (count === void 0) {
            count = 3;
          }

          if (count <= 0) {
            return;
          }

          var node = app.pool.getNode(this.prefabToast);

          if (!node) {
            var next_count = count - 1;
            app.event.emit(app.eName.TOAST, tips, _time, next_count);
          } else {
            this.effectLayer.addChild(node);
            node.setPosition(v3(0, 160, 0));
            var comp = node.getComponent(ModelTips);
            comp.setData(tips);
            comp.show(_time);
          }
        };

        return viewMgr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sceneLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "effectLayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "windowLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "waitLayer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "topLayer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "prefabToast", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_null", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_wait", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/viewUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singtonClass.ts'], function (exports) {
  var _inheritsLoose, cclegacy, UITransform, v3, Size, singtonClass;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      UITransform = module.UITransform;
      v3 = module.v3;
      Size = module.Size;
    }, function (module) {
      singtonClass = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9fe22RoeJ5JlK8IXaninKN7", "viewUtils", undefined);
      /**
       * 数组工具类
       * @export
       * @class arrayUtils
       * @extends {singtonClass}
       */


      var viewUtils = exports('default', /*#__PURE__*/function (_singtonClass) {
        _inheritsLoose(viewUtils, _singtonClass);

        function viewUtils() {
          return _singtonClass.apply(this, arguments) || this;
        }

        var _proto = viewUtils.prototype;
        /**
         * 节点之间坐标互转
         * @param a         A节点
         * @param b         B节点
         * @param aPos      A节点空间中的相对位置
         */

        _proto.calculateASpaceToBSpacePos = function calculateASpaceToBSpacePos(a, b, aPos) {
          var world = a.getComponent(UITransform).convertToWorldSpaceAR(aPos);
          var space = b.getComponent(UITransform).convertToNodeSpaceAR(world);
          return space;
        }
        /**
         * 屏幕转空间坐标
         * @param event 触摸事件
         * @param space 转到此节点的坐标空间
         */
        ;

        _proto.calculateScreenPosToSpacePos = function calculateScreenPosToSpacePos(event, space) {
          var uil = event.getUILocation();
          var worldPos = v3(uil.x, uil.y);
          var mapPos = space.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
          return mapPos;
        }
        /**
         * 显示对象等比缩放
         * @param targetWidth       目标宽
         * @param targetHeight      目标高
         * @param defaultWidth      默认宽
         * @param defaultHeight     默认高
         */
        ;

        _proto.uniformScale = function uniformScale(targetWidth, targetHeight, defaultWidth, defaultHeight) {
          var widthRatio = defaultWidth / targetWidth;
          var heightRatio = defaultHeight / targetHeight;
          var ratio;
          widthRatio < heightRatio ? ratio = widthRatio : ratio = heightRatio;
          var size = new Size(Math.floor(targetWidth * ratio), Math.floor(targetHeight * ratio));
          return size;
        };

        return viewUtils;
      }(singtonClass));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WaveModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Tween, tween, v3, Component, app;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      app = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "1e22898WQlL9pFqEFUBEmHk", "WaveModel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var WaveModel = exports('WaveModel', (_dec = ccclass('WaveModel'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WaveModel, _Component);

        function WaveModel() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = WaveModel.prototype;

        _proto.start = function start() {
          window["wave"] = this;
        };

        _proto.update = function update(deltaTime) {}
        /**
         * 播放一个动画
         * @param {number} [_t=0.4]
         * @param {number} [_scaleB=1]
         * @param {number} [_scaleE=3]
         * @memberof WaveModel
         */
        ;

        _proto.showAnim = function showAnim(_t, _scaleB, _scaleE) {
          var _this = this;

          if (_t === void 0) {
            _t = 0.4;
          }

          if (_scaleB === void 0) {
            _scaleB = 1;
          }

          if (_scaleE === void 0) {
            _scaleE = 3;
          }

          Tween.stopAllByTarget(this.node);
          tween(this.node).set({
            scale: v3(_scaleB, 0.002, _scaleB)
          }).to(_t, {
            scale: v3(_scaleE, 0.002, _scaleE)
          }).call(function () {
            app.pool.setNode(_this.node);
          }).start();
          return;
        };

        _proto.hideAnim = function hideAnim() {
          Tween.stopAllByTarget(this.node);
        };

        return WaveModel;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/World.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Collision.ts', './Debug.ts', './ObjNode.ts', './Octree.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCInteger, Vec3, Mat4, Color, Component, Collision, Debug, ObjNode, Octree, GetMaxLevel;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCInteger = module.CCInteger;
      Vec3 = module.Vec3;
      Mat4 = module.Mat4;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      Collision = module.Collision;
    }, function (module) {
      Debug = module.Debug;
    }, function (module) {
      ObjNode = module.ObjNode;
    }, function (module) {
      Octree = module.Octree;
      GetMaxLevel = module.GetMaxLevel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "7c8abXRkTBOfKZiIsLmJ+o5", "World", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var World = exports('World', (_dec = ccclass('World'), _dec2 = property({
        group: "Octree"
      }), _dec3 = property({
        type: CCInteger,
        group: "Octree",
        step: 1,
        min: 1,
        max: 6
      }), _dec4 = property({
        type: CCInteger,
        group: "Octree",
        step: 1,
        min: 1,
        max: 16
      }), _dec5 = property({
        group: "Octree"
      }), _dec6 = property({
        group: "Octree"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(World, _Component);

        function World() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "debug", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "maxLevels", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "maxObjects", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "center", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "halfSize", _descriptor5, _assertThisInitialized(_this));

          _this.octree = void 0;
          _this.flag = 0;
          _this.result = [];
          _this.objects = [];
          _this.collision = new Collision();
          return _this;
        }

        var _proto = World.prototype;

        _proto.start = function start() {
          // console.warn("world start");
          this.preBuild();
        };

        _proto.preBuild = function preBuild() {
          var c = this.center;
          var h = this.halfSize;
          Vec3.max(h, h, Vec3.ONE);
          var bound = [c.x, c.y, c.z, h.x, h.y, h.z];
          this.octree = new Octree(bound, this.maxObjects << 8 | this.maxLevels); // let objects = this.node.getComponentsInChildren(Object3D);
          // for (let i = 0; i < objects.length; i++) {
          //     this.insert(objects[i]);
          // }
        };

        _proto.insert = function insert(object) {
          // console.warn("add 3d obj");
          var bounds = object.updateBounds(true);

          if (bounds.length) {
            this.objects.push(object);
            var objNodes = object.objNodes;

            if (objNodes && objNodes.length > 0) {
              // reInsert
              for (var j = 0; j < objNodes.length; j++) {
                this.octree.insert(objNodes[j]);
              }

              return;
            }

            for (var _j = bounds.length - 1; _j >= 0; _j--) {
              var objNode = new ObjNode(object, object.id, _j, bounds[_j]);
              GetMaxLevel(objNode, this.octree, 1.0); //prebuild max level

              this.octree.insert(objNode);
              objNodes.push(objNode);
            }
          }
        };

        _proto.remove = function remove(object, isClear) {
          if (isClear === void 0) {
            isClear = true;
          }

          var objects = this.objects;
          var idx = objects.indexOf(object);

          if (idx != -1) {
            //remove from octree
            var objNodes = object.objNodes;

            for (var i = 0; i < objNodes.length; i++) {
              this.octree.remove(objNodes[i]);
            }

            var end = objects.length - 1;
            objects[idx] = objects[end];
            objects.length = end;
          }

          isClear && object.clear();
        };

        _proto.aabbQuery = function aabbQuery(worldBound, isTriangle, mask) {
          if (isTriangle === void 0) {
            isTriangle = false;
          }

          if (mask === void 0) {
            mask = 0xFFFFFFFF;
          }

          this.result.length = 0;
          this.octree.retrieve(worldBound, ++this.flag, this.result, mask); //, this.debug);

          if (isTriangle) {
            var objs = this.result;
            var length = objs.length;

            for (var i = 0; i < length; i++) {
              var objB = objs[i].obj3D;

              if (objB.useTriangle) {
                // Octree.count = 0;
                var result = objB.boundTriangles(worldBound);
                this.result.splice(i, 1);

                for (var j = result.length - 1; j >= 0; j--) {
                  this.result.push(result[j]);
                }

                result.length = 0;
                length--;
                i--;
              }
            }
          }

          return this.result;
        };

        _proto.objectQuery = function objectQuery(objA, isTriangle) {
          if (isTriangle === void 0) {
            isTriangle = false;
          }

          this.result.length = 0;
          var worldBound = objA.getWorldBound();
          this.octree.retrieve(worldBound, ++this.flag, this.result, objA.mask); // if (this.debug) {
          //     let result = this.result;
          //     for (let i = 0; i < result.length; i++) {
          //         Debug.addBox(result[i].getWorldBound(), Mat4.IDENTITY, Color.GREEN);
          //     }
          //     // Debug.addBox(objA.getWorldBound(),Mat4.IDENTITY,Color.GREEN);
          // }

          if (isTriangle) {
            var result = this.result;
            var length = result.length;

            for (var i = length - 1; i >= 0; i--) {
              var objB = result[i].obj3D;

              if (objB.useTriangle) {
                //add triangles from mesh
                var tris = objB.boundObject(objA);

                for (var j = 0; j < tris.length; j++) {
                  result[length++] = tris[j];
                } // tris.length = 0;


                result[i] = result[--length]; //remove the mesh
              }
            }

            result.length = length;
          }

          return this.result;
        } //ray:[0-2] -> origin
        //ray:[3-5] -> direction
        //ray:[6] -> max distance
        ;

        _proto.rayCast = function rayCast(ray, mask, isTriangle) {
          if (mask === void 0) {
            mask = 0xFFFFFFFF;
          }

          if (isTriangle === void 0) {
            isTriangle = false;
          }

          var min = ray[6];
          var result = [];
          var rayCast = {
            objs: result,
            hit: null
          };
          this.octree.rayCast(ray, ++this.flag, result, mask);
          result.sort(function (a, b) {
            return a.rayDist - b.rayDist;
          }); //if (this.debug) {
          // for (let i = 0; i < result.length; i++) {
          //     Debug.addBox(result[i].getWorldBound(), Mat4.IDENTITY, Color.BLACK);
          // }
          //}

          if (isTriangle) {
            for (var i = 0, j = result.length; i < j; i++) {
              var obj = result[i];
              var obj3D = obj.obj3D;
              var dist = obj.rayDist;

              if (dist < 0 || dist < min) {
                var hit = obj3D.rayCast(ray, obj.id1);

                if (hit && min >= hit[6]) {
                  min = hit[6];
                  result[0] = obj;
                  rayCast.hit = hit; //rayCast.objs[0] = obj;
                }
              }
            }

            if (this.debug && rayCast.hit) {
              var _hit = rayCast.hit;
              var _obj = rayCast.objs[0];
              var v0 = new Vec3(ray[0], ray[1], ray[2]);
              var v1 = new Vec3(_hit[0], _hit[1], _hit[2]);
              Debug.addLine(v0, v1, Mat4.IDENTITY, Color.GREEN); // Debug.addBox(obj.getWorldBound(), Mat4.IDENTITY, Color.BLACK);
            }
          }

          return rayCast;
        }
        /**
         * 是否清除对象
         * @param {boolean} [clearObj=true]
         * @memberof World
         */
        ;

        _proto.clear = function clear(clearObj) {
          if (clearObj === void 0) {
            clearObj = true;
          }

          if (clearObj) {
            for (var i = 0; i < this.objects.length; i++) {
              this.objects[i].clear(); //release mesh data
            }
          }

          this.objects.length = 0;
          this.octree && this.octree.clear();
          this.octree = null;
        };

        return World;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "debug", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxLevels", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxObjects", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "center", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "halfSize", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(50, 50, 50);
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

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
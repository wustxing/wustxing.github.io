<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">

<title>投篮机活动</title>

<script>
    var url_1 = "https://hdimg.kerlala.com/cocos/test/toulan/";
    var ident = '{!!$ident??''!!}'
    var sessionId = '{!!$sessionId??''!!}'
    var dmspConf = {
    
    pid: '{{request()->route('pid','')}}',
    sn: '{{request()->route('sn','')}}',
     
    }
</script>

  <meta name="viewport"
    content="width=device-width,user-scalable=no,initial-scale=1, minimum-scale=1,maximum-scale=1" />
  <meta name="format-detection" content="telephone=no">


  <meta name="renderer" content="webkit" />
  <meta name="force-rendering" content="webkit" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="msapplication-tap-highlight" content="no">

  <meta name="full-screen" content="yes" />
  <meta name="x5-fullscreen" content="true" />
  <meta name="360-fullscreen" content="true" />

  <meta name="screen-orientation" content="<%=orientation%>" />
  <meta name="x5-orientation" content="<%=orientation%>">
  <meta name="x5-page-mode" content="app">

  <script src="https://hdimg.kerlala.com/cocos/lib/vue2/vue.min.js?v=1" charset="utf-8"></script>
  <script src="https://hdimg.kerlala.com/cocos/lib/vant/vant.min.js?v=1" charset="utf-8"></script>

  <link rel="stylesheet" href="https://hdimg.kerlala.com/cocos/lib/vant/index.css?v=1" />
  <link rel="stylesheet" href="https://hdimg.kerlala.com/urloginhd/hdlogin/test1/index.css">
  <script src="https://hdimg.kerlala.com/urloginhd/hdlogin/test1/urloginhd.min.js?v=2" charset="utf-8"></script>

  <script src="https://hdimg.kerlala.com/cocos/test/toulan/jquery-1.11.1.min.js" charset="utf-8"></script>
  <script src="//res2.wx.qq.com/open/js/jweixin-1.4.0.js" charset="utf-8"></script>
  <link rel="stylesheet" type="text/css" href="https://hdimg.kerlala.com/cocos/test/toulan/style-mobile.css" />
  <link rel="icon" href="data:;base64,=" />
</head>

<body>
  <canvas id="GameCanvas" oncontextmenu="event.preventDefault()" tabindex="0"></canvas>
  <div id="splash">
    <div class="progress-bar stripes" style="display:none">
      <span style="width: 0%"></span>
    </div>
  </div>

  <!-- 首先先引入js -->

  <script src="https://hdimg.kerlala.com/cocos/test/toulan/src/settings.js" charset="utf-8"></script>
  <script src="https://hdimg.kerlala.com/cocos/test/toulan/eruda.js"></script>
  <script src="https://hdimg.kerlala.com/cocos/test/toulan/main.js" charset="utf-8"></script>
  <script type="text/javascript">
    (function () {
      if (typeof VConsole !== 'undefined') {
        //window.vConsole = new VConsole();
        //eruda.init();
      }

      var debug = window._CCSettings.debug;
      var splash = document.getElementById('splash');
      splash.style.display = 'block';

      function loadScript(moduleName, cb) {
        function scriptLoaded() {
          document.body.removeChild(domScript);
          domScript.removeEventListener('load', scriptLoaded, false);
          cb && cb();
        };
        var domScript = document.createElement('script');
        domScript.async = true;
        domScript.src = moduleName;
        domScript.addEventListener('load', scriptLoaded, false);
        document.body.appendChild(domScript);
      }

      loadScript(debug ? 'https://hdimg.kerlala.com/cocos/test/toulan/cocos2d-js.js' : 'https://hdimg.kerlala.com/cocos/test/toulan/cocos2d-js-min.js', function () {
        if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
          loadScript(debug ? 'https://hdimg.kerlala.com/cocos/test/toulan/physics.js' : 'https://hdimg.kerlala.com/cocos/test/toulan/physics-min.js', window.boot);
        }
        else {
          window.boot();
        }
      });
    })();
  </script>
</body>

</html>
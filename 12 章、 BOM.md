# 第12章、 BOM

> 核心： 
>
>  	1. **BOM的核心——window对象**	
> 		2. **控制窗口及弹窗**
> 		3. **通过location对象获取页面信息**
> 		4. **使用navigator 对象了解浏览器**
> 		5. **通过history对象操作浏览器历史**

## 1、window对象

>BOM 的核心是 window 对象，表示浏览器的实例。window 对象在浏览器中有两重身份，一个是 ECMAScript 中的 Global(全局)  对象，另一个就是浏览器窗口的 JavaScript 接口。
>
> **网页中定义的所有 对象、变量和函数都以 window 作为其 Global(全局) 对象，都可以访问其上定义的 parseInt()等全局方法。**
>

### 1.1、Global作用域

> var声明变量
>
> > 因为 window 对象被复用为 ECMAScript 的 Global 对象，所以通过 var 声明的所有全局变量和函 
> >
> > 数都会变成 window 对象的属性和方法。
>
> let 和 const 
>
> > let 或 const 替代 var，则不会把变量添加给全局对象 ;

### 1.2、窗口关系

> window:  全局对象
>
> window.top: top 对象始终指向最上层（最外层）窗口，即浏览器窗口本身 
>
> window.parent:  而 parent 对象则始终指向当前窗口的父窗口。如果当前窗口是最上层窗口，则 parent 等于 top（都等于 window)。
>
> window.self : 它是终极 window 属性，始终会指向 window a�J

### 1.3、窗口位置与像素比

> **1、窗口位置**、
>
> > window.screenLeft: 表示窗口相对于屏幕左侧的位置
> >
> > window.screenTop:  表示窗口相对于屏幕顶部的位置
> >
> > window.moveTo() 
> >
> > 	> 接收要移动到的新位置的绝对坐标 x 和 y  window.moveTo(0, 0) 
> >
> > window.moveBy()
> >
> > > 则接收相对当前位置在两个方向上移动的像素数 

> 2、像素比（移动端： H5）
>
> 名词：
>
> ​	物理像素：屏幕实际的分辨率  
>
> ​	CSS像素：浏览器报告的虚拟分辨率
>
> window.devicePixelRatio 获取物理像素和CSS像素之间的转化比率，可根据来它来布局移动端

### 1.4、窗口大小

> innerWidth 与 innerHeight 
>
> > 返回浏 览器窗口(包括最外层的边框URL上面的)自身的大小（不管是在最外层 window 上使用，还是在窗格<frame>中使用）
>
> outerWidth 和 outerHeight:
>
> > 返回浏览器窗口中页面视口(能看到的内容)的大小（不包含浏览器边框和工具栏）。
>
> resizeTo()和resizeBy() 
>
> > 改变窗口的大小
> >
> > resizeTo()： 接收新的宽度和高度值
> >
> >  resizeBy() ： 接收宽度和高度各要缩放多少 

### 1.5、视口位置

> 度量文档相对于视口滚动距离的属性有两对 
>
> > window.pageXoffset/window.scrollX   获取可视窗口距离左边的距离
> >
> > window.pageYoffset/window.scrollY   获取可视窗口距离顶部的距离
>
> 滚动页面的方法： scroll()、scrollTo()和 scrollBy() 
>
> > // 相对于当前视口向下滚动 100 像素 
> >
> > window.scrollBy(0, 100); 
> >
> > // 滚动到页面左上角 
> >
> > window.scrollTo(0, 0); 
> >
> > 也接收ScrollToOptions 字典；behavior 属性告诉浏览器是否平滑滚动
> >
> > // 正常滚动  
> >
> > window.scrollTo({  
> >
> >  left: 100,  
> >
> >  top: 100,  
> >
> >  behavior: 'auto'  
> >
> > });  
> >
> > // 平滑滚动 
> >
> > window.scrollTo({  
> >
> >  left: 100,  
> >
> >  top: 100,  
> >
> >  behavior: 'smooth'  
> >
> > }); 

### 1.6、导航与打开新窗口

> window.open
>
> 1、**参数**
>
> > 参数1: 加载的URL
> >
> > 参数2：目标窗口
> >
> > 参数3：特性字符串
> >
> > 参数4：表示新窗口在浏览器历史记录中是否替代当前加载页 面的布尔值（是否打开新页面）
>
> 示例
>
> > 复习a标签的属性target
> >
> > _blank
> >
> > ​	浏览器总在一个新打开、未命名的窗口中载入目标文档。
> >
> > _self
> >
> > 这个目标的值对所有没有指定目标的 <a> 标签是默认目标，它使得目标文档载入并显示在相同的框架或者窗口中作为源文档。这个目标是多余且不必要的，除非和文档标题 <base> 标签中的 target 属性一起使用。
> >
> > _parent
> >
> > 这个目标使得文档载入父窗口或者包含来超链接引用的框架的框架集。如果这个引用是在窗口或者在顶级框架中，那么它与目标 _self 等效。
> >
> > _top
> >
> > 这个目标使得文档载入包含这个超链接的窗口，用 _top 目标将会清除所有被包含的框架并将文档载入整个浏览器窗口。
>
> ````href
> // 与<a href="http://www.wrox.com" target="topFrame"/>相同
> window.open("http://www.wrox.com/", "topFrame");
> // 上面代码结果就如同用户点击一个a标签的href属性http://www.wrox.com/
> ````
>
> 2、弹出窗口（设置第三个值）
>
> 如果 window.open()的第二个参数不是已有窗口，则会打开一个新窗口或标签页。第三个参数， 
>
> 即特性字符串，用于指定新窗口的配置，如果没有传第三个参数，则新窗口（或标签页）会带有所有默 
>
> 认的浏览器特性（工具栏、地址栏、状态栏等都是默认配置）。如果打开的不是新窗口，则忽略第三个 
>
> 参数。
>
> > 特性字符串是一个逗号分隔的设置字符串，用于指定新窗口包含的特性。下表列出了一些选项 (一定打开新窗口)
>
> | 设置       | 值          | 说明                                                         |
> | ---------- | ----------- | ------------------------------------------------------------ |
> | fullscreen | "yes"或"no" | 表示新窗口是否最大化。仅限 IE 支持                           |
> | height     | 数值        | 新窗口高度。这个值不能小于 100                               |
> | left       | 数值        | 新窗口的 x 轴坐标。这个值不能是负值                          |
> | location   | "yes"或"no" | 表示是否显示地址栏。不同浏览器的默认值也不一样。在设置为"no"时，地址栏 可能隐藏或禁用（取决于浏览器） |
> | Menubar    | "yes"或"no" | 表示是否显示菜单栏。默认为"no"                               |
> | resizable  | "yes"或"no" | 表示是否可以拖动改变新窗口大小。默认为"no"                   |
> | scrollbars | "yes"或"no" | 表示是否可以在内容过长时滚动。默认为"no"                     |
> | status     | "yes"或"no" | 表示是否显示状态栏。不同浏览器的默认值也不一样               |
> | toolbar    | yes"或"no"  | 表示是否显示工具栏。默认为"no"                               |
> | top        | 数值        | 新窗口的 y 轴坐标。这个值不能是负值                          |
> | width      | 数值        | 新窗口的宽度。这个值不能小于 100                             |
>
> **这些设置需要以逗号分隔的名值对形式出现，其中名值对以等号连接。（特性字符串中不能包含空**格。）
>
> ````js
> let wroxWin = window.open("http://www.wrox.com/", 
>  "wroxWindow", 
>  "height=400,width=400,top=10,left=10,resizable=yes"); 
> // 缩放
> wroxWin.resizeTo(500, 500); 
> // 移动
> wroxWin.moveTo(100, 100); 
> // 还可以使用 close()方法像这样关闭新打开的窗口：
> wroxWin.close();
> // 检查窗口是否关闭
> wroxWin.closed
> 
> // 新创建窗口的 window 对象有一个属性 opener，指向打开它的窗口,这个属性只在弹出窗口的最
> //上层 window 对象（top）有定义，是指向调用 window.open()打开它的窗口或窗格的指针。
> let wroxWin = window.open("http://www.wrox.com/", 
>  "wroxWindow", 
>  "height=400,width=400,top=10,left=10,resizable=yes"); 
> alert(wroxWin.opener === window); // true
> ````
>
> 在某些浏览器中，每个标签页会运行在独立的进程中。如果一个标签页打开了另一个，而 window 
>
> 对象需要跟另一个标签页通信，那么标签便不能运行在独立的进程中。在这些浏览器中，可以将新打开 
>
> 的标签页的 opener 属性设置为 null，表示新打开的标签页可以运行在独立的进程中。
>
> ````js
> // 设置独立进程
> let wroxWin = window.open("http://www.wrox.com/", 
>  "wroxWindow", 
>  "height=400,width=400,top=10,left=10,resizable=yes"); 
> wroxWin.opener = null;
> //把 opener 设置为 null 表示新打开的标签页不需要与打开它的标签页通信，因此可以在独立进程
> //中运行。这个连接一旦切断，就无法恢复了。
> ````
>
> 3、弹框屏蔽程序
>
> > 所有现代浏览器都内置了屏蔽弹窗的程序，因此大多数意料之外的弹窗都会被屏蔽。在浏览器屏蔽 
> >
> > 弹窗时，可能会发生一些事。如果浏览器内置的弹窗屏蔽程序阻止了弹窗，那么 window.open()很可 
> >
> > 能会返回 null。此时，只要检查这个方法的返回值就可以知道弹窗是否被屏蔽了
> >
> > ```js
> > let wroxWin = window.open("http://www.wrox.com", "_blank"); 
> > if (wroxWin == null){ 
> >  alert("The popup was blocked!"); 
> > }
> > ```
> >
> > 在浏览器扩展或其他程序屏蔽弹窗时，window.open()通常会抛出错误。因此要准确检测弹窗是 
> >
> > 否被屏蔽，除了检测 window.open()的返回值，还要把它用 try/catch 包装起来，
> >
> > ````js
> > let blocked = false;
> > try { 
> >  let wroxWin = window.open("http://www.wrox.com", "_blank"); 
> >  if (wroxWin == null){
> >   blocked = true; 
> > } catch (ex){ 
> >  blocked = true; 
> > } 
> > if (blocked){ 
> >  alert("The popup was blocked!"); 
> > } 
> > // 无论弹窗是用什么方法屏蔽的，以上代码都可以准确判断调用 window.open()的弹窗是否被屏蔽了。
> > ````
> >

### 1.7、定时器

> setTImeout  超时任务
>
> 参数： 
>
> ​	执行超时任务的回到函数
>
> ​	超时的时间
>
> 返回值：超时排期的数值ID（唯一值）
>
> 取消超时任务： clearTimeout(超时排期的数值ID)
>
> ````js
> function foo {
>     const overTimeId = setTimeout(() => {
>         console.log('执行了超时任务')
>     }, 1000)
> }
> foo()
> clearTimeout(overTimeId)  // 注意当超时任务执行后 在清除超时任务无效
> // 回调函数中的 this 值在非严格模式下始终指向 window，而在严格模式下是 undefined。
> ````
>
> setInterval 超时任务
>
> 参数： 
>
> ​	执行超时任务的回到函数
>
> ​	超时的时间
>
> 返回值：超时排期的数值ID（唯一值）
>
> 取消超时任务： clearInterval(超时排期的数值ID)	
>
> ```js
> function foo {
>     const overTimeId = setInerval(() => {
>         console.log('执行了超时任务')
>     }, 1000)
> }
> foo()
> clearInterval(overTimeId)  
> ```
>
> > setInterval 缺陷
> >
> > 	> 1. 前一任务结束到当前任务开始的时间间隔与设置的delay值不符。
> > 	> 2. 可能出现某些任务被跳过的情况
> >
> > 可用setTimeout代替setInterval
> >
> > ​	setinterval是在任务队列中查看是否还有setInterval定时器，有则不向任务队列添加任务反之添加。
> >
> > ​	setTimout是不管任务队列是否有setTImeout任务都添加到时间就执行
> >
> > 示例：
> >
> > ````js
> > let num = 0; 
> > let max = 10; 
> > let incrementNumber = function() { 
> >  num++; 
> >  // 如果还没有达到最大值，再设置一个超时任务
> >  if (num < max) { 
> >  setTimeout(incrementNumber, 500); 
> >  } else { 
> >  alert("Done"); 
> >  } 
> > } 
> > setTimeout(incrementNumber, 500);
> > ````

## 2、location对象

>它既是 window 的属性，也是 document 的属性。也就是说， window.location 和 document.location 指向同一个对象
>
>示例： http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q=javascript#contents
>
>| 属 性             | 值                                                        | 说 明                                                        |      |      |
>| ----------------- | --------------------------------------------------------- | ------------------------------------------------------------ | ---- | ---- |
>| location.hash     | "#contents"                                               | URL 散列值（井号后跟零或多个字符），如果没有则 为空字符串    |      |      |
>| location.host     | "www.wrox.com:80"                                         | 服务器名及端口号                                             |      |      |
>| location.hostname | "http://www.wrox.com:80/WileyCDA/ ?q=javascript#contents" | 当前加载页面的完整 URL。location 的 toString() 方法返回这个值 |      |      |
>| location.pathname | "/WileyCDA/"                                              | URL 中的路径和（或）文件名                                   |      |      |
>| location.port     | "80"                                                      | 请求的端口。如果 URL中没有端口，则返回空字符串               |      |      |
>| location.protocol | "http:"                                                   | 页面使用的协议。通常是"http:"或"https:" span>an>             |      |      |
>| location.search   | "?q=javascript"                                           | URL 的查询字符串。这个字符串以问号开头 �                     |      |      |
>| location.username | "foouser"                                                 | 域名前指定的用户名                                           |      |      |
>| location.password | "barpassword"                                             | 域名前指定的密码                                             |      |      |
>| location.origin   | "http://www.wrox.com"  �                                  | URL 的源地址。只读                                           |      |      |

### 1.1、查询字符串

>  如何查询参数部分
>
>  `````js
>  //  解析url search部分
>  let getQueryStringArgs = function() { 
>  // 取得没有开头问号的查询字符串
>  let qs = (location.search.length > 0 ? location.search.substring(1) : ""), 
>  // 保存数据的对象
>  args = {}; 
>  // 把每个参数添加到 args 对象
>  for (let item of qs.split("&").map(kv => kv.split("="))) { 
>  	let name = decodeURIComponent(item[0]), 
>  	value = decodeURIComponent(item[1]); 
>  		if (name.length) { 
>  		args[name] = value; 
>  		} 
>  	}
>  return args; 
>  }
>  // 假设查询字符串为?q=javascript&num=10 
>  let args = getQueryStringArgs(); 
>  alert(args["q"]); // "javascript" 
>  alert(args["num"]); // "10"
>  `````
>
>  查询参数APi
>
>  URLSearchParams 提供了一组标准 API 方法，通过它们可以检查和修改查询字符串。给 URLSearchParams 构造函数传入一个查询字符串，就可以创建一个实例。这个实例上暴露了 get()、set()和 delete()等方法，可以对查询字符串执行相应操作。下面来看一个例子：
>
>  ````js
>  let qs = "?q=javascript&num=10"; 
>  let searchParams = new URLSearchParams(qs); 
>  alert(searchParams.toString()); // " q=javascript&num=10" 
>  searchParams.has("num"); // true 
>  searchParams.get("num"); // 10 
>  searchParams.set("page", "3"); 
>  alert(searchParams.toString()); // " q=javascript&num=10&page=3" 
>  searchParams.delete("q"); 
>  alert(searchParams.toString()); // " num=10&page=3" 
>  大多数支持 URLSearchParams 的浏览器也支持将 URLSearchParams 的实例用作可迭代对象：
>  let qs = "?q=javascript&num=10"; 
>  let searchParams = new URLSearchParams(qs); 
>  for (let param of searchParams) { 
>  console.log(param); 
>  } 
>  // ["q", "javascript"] 
>  // ["num", "10"]
>  ````
>

### 1.2、操作地址

#### 1.assign

> 立即启动导航到新 URL 的操作，同时在浏览器历史记录中增加一条记录。 
>
> 注意：
>
> ​	**如果给 location.href 或 window.location 设置一个 URL，也会以同一个 URL 值调用 assign()方法**
>
> 一般使用location.href属性来加载新URL
>
> ````js
> location.assign("http://www.wrox.com");
> window.location = "http://www.wrox.com"; 
> location.href = "http://www.wrox.com";
> // 方法接收一个URL参数 新加载后不会增加历史记录
> setTimeout(() => location.replace("http://www.wrox.com/"), 1000);
> ````

#### 2、修改location属性

> 修改 location 对象的属性也会修改当前加载的页面。 其中，hash、search、hostname、pathname 
>
> 和 port 属性被设置为新值之后都会修改当前 URL。
>
> ````js
> // 假设当前 URL 为 http://www.wrox.com/WileyCDA/ 
> // 把 URL 修改为 http://www.wrox.com/WileyCDA/#section1 
> location.hash = "#section1"; 
> // 把 URL 修改为 http://www.wrox.com/WileyCDA/?q=javascript 
> location.search = "?q=javascript"; 
> // 把 URL 修改为 http://www.somewhere.com/WileyCDA/ 
> location.hostname = "www.somewhere.com"; 
> // 把 URL 修改为 http://www.somewhere.com/mydir/ 
> location.pathname = "mydir"; 
> // 把 URL 修改为 http://www.somewhere.com:8080/WileyCDA/ 
> location.port = 8080;
> //  把 URL 修改为 http://www.somewhere.com:8080/WileyCDA/ 
> 
> 
> // 注意：除了 hash 之外，只要修改 location 的一个属性，就会导致页面重新加载新 URL。
> ````

#### 3、reload 页面重新加载

> 重新加载当前显示的页面, 注意是解决浏览器缓存
>
> `````
> location.reload(); // 重新加载，可能是从缓存加载
> location.reload(true); // 重新加载，从服务器加载
> `````
>

## 3、nacigator对象

> navigator是有Netscape Navigator 2 最早引入浏览器的，现在已经成为客户端标识浏览器的标准。只要浏览器启用JavaScript, navigator对象就一定存在。**但是与其他BOM对象一样，每个浏览器都支持自己的属性。**
>
> 注意： 下面表格的 （*数字）代表注解编号

|           属性/方法           |                             说明                             |
| :---------------------------: | :----------------------------------------------------------: |
|       activeVrDisplays        |                                                              |
|          appcodeName          |        及时在非mozilla(火狐)浏览器中也会返回“Mozilla”        |
|            appName            |                          浏览器全名                          |
|          appVersion           |           浏览器版本。通常与实际的浏览器版本不一致           |
|            battery            |     返回暴露Battery Status API(* ①) 的BatteryManage对象      |
|            buildid            |                       浏览器的构建编号                       |
|          connection           | 返回暴露 返回暴露 Network Information API (*②)的 NetworkInformation 对象 e1; |
|         cookieEnabled         |               返回布尔值，表示是否启用了cookie               |
|          credentials          | 返回暴露Credentials Management API(*③)的NetworkINformation对象 |
|         deviceMemory          |              返回单位为GB的设备内存容量（电脑）              |
|          doNotTrack           |        返回用户的“不跟踪”（do-nottrack）设置（废弃）         |
|          geolocation          |         返回暴露GeolocationAPI(*④)的Geolocation对象          |
|        getVRDisplays()        |          返回数组，包含可用的每个VRDisplay实例 (VR)          |
|        getUserMedia()         |                返回与可用媒体设备硬件关联的流                |
|      hardwareConcurrency      |                   返回设备的处理器核心数量                   |
|          javaEnabled          |            返回布尔值，表示浏览器是否启用了 Java             |
|           language            |                    返回浏览器的主语言 ���                    |
|           languages           |                返回浏览器偏好的语言数组 s Bar                |
|             locks             |          返回暴露 Web Locks API 的 LockManager 对象          |
|       mediaCapabilities       |  返回暴露 Media Capabilities API 的 MediaCapabilities 对象   |
|         mediaDevices          |                      返回可用的媒体设备                      |
|        maxTouchPoints         |                返回设备触摸屏支持的最大触点数                |
|           mimeTypes           |         返回浏览器中注册的MIME类型数组（请求头类型）         |
|            onLine             |                返回布尔值，表示浏览器是否联网                |
|             oscpu             |              返回浏览器运行设备的操作系统和CPU               |
|          permissions          |    返回暴露PermissionsAPI的 Permissions 对象（用户权限）     |
|           platform            |                   返回浏览器运行的系统平台                   |
|            plugins            |  返回浏览器安装的插件数组。在ie中这个数组包含页面中所有元素  |
|            product            |                返回产品名称（通常是"Gecko"）                 |
|          productSub           |          返回产品的额外信息（通常是 Gecko 的版本）           |
|   registerProtocolHandler()   |             将一个网站注册为特定协议的处理程序 …             |
| requestMediaKeySystemAccess() |        返回一个期约，解决为 MediaKeySystemAccess 对象        |
|         sendBeacon()          |                  异步传输一些小数据到服务器                  |
|         serviceWorker         |  返回用来与 ServiceWorker 实例交互的 ServiceWorkerContainer  |
|           share()             |                  返回当前平台的原生共享机制                  |
|           storage             |         返回暴露 Storage API 的 StorageManager 对象          |
|           userAgent           |                  返回浏览器的用户代理字符串                  |
|            vendor             |                     返回浏览器的厂商名称                     |
|           vendorSub           |                   返回浏览器厂商的更多信息                   |
|           vibrate()           |                         触发设备振动                         |
|           webdriver           |              返回浏览器当前是否被自动化程序控制              |

> **navigator 对象的属性通常用于确定浏览器的类型。** 

> ①**Battery Status [API:](https://so.csdn.net/so/search?q=API&spm=1001.2101.3001.7020)**更多时候被称之为 Battery API, 提供了有关系统充电级别的信息并提供了通过电池等级或者充电状态的改变提醒用户的事件。 这个可以在设备电量低的时候调整应用的资源使用状态，或者在电池用尽前保存应用中的修改以防数据丢失 
>
> ②Credentials Management API（网络状况 API）：网络状态 API 可以获取到系统的网络连接信息，比如说连接方式是 WiFi 还是蜂窝。应用程序可以根据此信息为用户展现不同清晰度的内容。(实验性API)
>
> ③Credentials Management API: Credential Management API 允许网站存储和检索用户，联合账户和公钥证书。这些功能允许用户在不输入密码的情况下登录，查看他们曾经登录到一个站点的联合帐户，并且在会话过期且没有显式的登录流程的情况下恢复会话。 (第三方登录，比如： qq、微信等方式登录不需要用户输入登录只需要用户给与权限)
>
> ④GeolocationAPI**(地理位置 API)** 允许用户向 Web 应用程序提供他们的位置。出于隐私考虑，报告地理位置前会先请求用户许可。 
>
> ⑤Media Capabilities API ：它提供了媒体类型是否支持，在编码或解码此媒体时是否流畅和能效等信息。 

### 1、检测插件

> 检测浏览器是否安装了某个插件是开发中常见的需求。除 IE10 及更低版本外的浏览器，都可以通 
>
> 过 plugins 数组来确定。这个数组中的每一项都包含如下属性。 
>
>  name：插件名称。 
>
>  description：插件介绍。 
>
>  filename：插件的文件名。 
>
>  length：由当前插件处理的 MIME 类型数量

> 通常，name 属性包含识别插件所需的必要信息，尽管不是特别准确。检测插件就是遍历浏览器中 
>
> 可用的插件，并逐个比较插件的名称，如下所示：
>
> ````js
> // 插件检测，IE10 及更低版本无效 
> let hasPlugin = function(name) { 
>  name = name.toLowerCase();
>   if (plugin.name.toLowerCase().indexOf(name) > -1){ 
>  return true; 
>  } 
>  } 
>  return false; 
> } 
> // 检测 Flash 
> alert(hasPlugin("Flash")); 
> // 检测 QuickTime 
> alert(hasPlugin("QuickTime"));
> ````
>
> plugins 数组中的每个插件对象还有一个 MimeType 对象，可以通过中括号访问。 
>
> 每个 MimeType 对象有 4 个属性：description 描述 MIME 类型，enabledPlugin 是 
>
> 指向插件对象的指针，suffixes 是该 MIME 类型对应扩展名的逗号分隔的字符串，type 
>
> 是完整的 MIME 类型字符串。

## 4、screen对象

|    属 性    |                    说 明                     |
| :---------: | :------------------------------------------: |
| availHeight |     屏幕像素高度减去系统组件高度（只读）     |
|  availLeft  | 没有被系统组件占用的屏幕的最左侧像素（只读） |
|  availTop   | 没有被系统组件占用的屏幕的最顶端像素（只读） |
| availWidth  |     屏幕像素宽度减去系统组件宽度（只读）     |
| colorDepth  |  表示屏幕颜色的位数；多数系统是 32（只读）   |
|   height    |                 屏幕像素高度                 |
|    left     |            当前屏幕左边的像素距离            |
| pixelDepth  |              屏幕的位深（只读）              |
|     top     |            当前屏幕顶端的像素距离            |
|    width    |                 屏幕像素宽度                 |
| orientation |   返回 Screen Orientation API 中屏幕的朝向   |

## 5、history对象

> history 对象表示当前窗口首次使用以来用户的导航历史记录 (不会暴露URL)

### 1、导航

> go方法
>
> 	>代表浏览器的前进或则后退（类似点击浏览器的“前进”按钮 ），参数是**正整数**则前进，参数是**负整数**则后退。
> 	>
> 	>````js
> 	>// 后退一页
> 	>history.go(-1); 
> 	>// 前进一页
> 	>history.go(1); 
> 	>// 前进两页
> 	>history.go(2);
> 	>````
> 	>
> 	>注意： 旧版本的一些浏览器是可以传入字符串的
> 	>
> 	>浏览器会导航到历 史中包含该字符串的第一个位置。最接近的位置可能涉及后退，也可能涉及前进。如果历史记录中没有 匹配的项，则这个方法什么也不做，如下所示：
>
> back方法
>
> > 后退一页 ,没有参数
>
> forward方法
>
> > 前进一页
>
> history属性length
>
> >表示历史记录中有多个条目 .
> >
> >这个属性反映了历史记录的数 量，包括可以前进和后退的页面。对于窗口或标签页中加载的第一个页面，history.length 等于 1。 通过以下方法测试这个值，可以确定用户浏览器的起点是不是你的页面

### 2、历史状态管理 

> history.pushState 
>
> >  方法向当前浏览器会话的历史堆栈中添加一个状态（state）。 
> >
> > 参数
> >
> > ​	state：可以序列化的对象 （大小为2M）
> >
> > ​	title : null （暂未实现）
> >
> > ​	url?:  新历史记录条目的 URL 由此参数指定 
> >
> > 返回值undefined
> >
> > 调用history.pushState 时WindowEventHandlers.onpopstate会触发
>
> replaceState() 
>
> >更新状态不会创建新历史记录，只会覆盖当前状态： 
>
> 

# 
























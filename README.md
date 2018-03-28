

————————达到

1.能够独立根据设计稿进行整套项目的需求、剖析及其开发 
2.对项目开发流程需要有一个基本的了解 
3.可以灵活运用切图、重构、前端的知识对项目进行灵活控制 
4.提高自己的项目意识和团队意识，对大型项目的开发积累经验

————————需求分析

1.项目主题
2.设计稿图层分析，多页视觉放到一个网页文档，采取视觉差特效完成分页展示
3.音乐不跟随翻页，位置固定，播放旋转，可暂停
4.需求的沟通与确认

————————开发技能分析

1.移动端项目，直接采用 h5作为项目的结构层
2.分析网页呈现形式，直接采用CSS3完成网页的表现层
3.特效分析，采用CSS3完成主要特效，采用js控制交互
4.背景英语直接采取js控制 audio的api进行控制
5.直接采用原生态的js控制css实现翻页效果，放弃前端框架和类库

————————性能优化分析

1.项目为移动端项目，尽可能简化结构层标签 
2.尽可能少用图片，直接使用css3控制标签完成图片效果
3.减小文件大小，压缩图片到无损最小值 
4.减少服务器请求次数，使用原生Javascript代替Zepto等前端框架

该项目的开发:

切图 ---> 重构 ---> 前端 ---> 优化

1.背景图片采用JPG格式，其它采用png24 
2.小型项目，直接采用手写h5+css3完成 
3.采用javascript控制h5API完成前端特效 
4.测试并优化整体网站性能，采用WampServer为本地服务器测试环境

代码编写
1.结构层 

   分析每个页面的结构，写出html结构 全程html

2.表现层

   设置响应式布局 全程css
   第一页: 设置光碟的位置、灯笼的位置、小慕图标的位置 全程css
   第二页：设置中间的三层图片 全程css
   第三页：设置5张图片 全程css

 3.前端特效

   第一页：
       唱片的转动效果
       灯笼的闪烁效果
   第二页：
       中间三个圈，分别设置旋转，但是要注意，转的圈数、方向、开始的时间都不同
   第三页：
       把福字设置旋转效果

4.交互

    控制音乐的中止，碟片的转动

    翻页，监听事件，翻到第二页，第二页淡出，
          设计时器，等到5.5s后就翻到第三页，第三页淡进 

5.视口控制

    添加viewport 属性

    数字 设置非电话模式

    控制浏览器以什么标准渲染

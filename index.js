

// 控制音乐的播放 与 唱片的旋转
window.onload = function () {
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');

    var music = document.getElementById('music');
    var audio = document.getElementsByTagName('audio')[0];
   
   //音乐播放完毕，唱片停止旋转
   audio.addEventListener("ended",function (event) {
    music.setAttribute("class","");
  },false) ;
     

   music.onclick = function () {
       if(audio.paused){
           audio.play();
           // 这种写法，在点击停止的时候回回到原位，体验不好
        //    this.setAttribute('class','play');
           // 这种写法的兼容性不好
           this.style.animationPlayState="running";
        }
        else{
            audio.pause();
            // this.setAttribute('class','');
            this.style.animationPlayState="paused";
       }
     };


     page1.addEventListener("touchstart",function (event) {
         page1.style.display = "none";
         page2.style.display = "block";
         page3.style.display = "block";
         page3.style.top = "100%"; // 设置第三页在距离页面头部，100%，最后出现的效果是，从下面拖出来一张照片

        //  5.5s 之后再翻页
         setTimeout(function () {
             page2.setAttribute("class","page fadeOut");
             page3.setAttribute("class","page fadeIn");
           },5500);
  
    },false);
};

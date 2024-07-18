AFRAME.registerComponent('btn-click-listenr',{
  init:function(){
    console.log('クリックされてなくても実行');
    this.el.addEventListener('click', function () {
      console.log("クリックされたら実行");
      this.setAttribute('material', 'color', 'red');
    });
  }
});
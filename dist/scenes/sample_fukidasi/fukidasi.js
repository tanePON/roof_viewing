AFRAME.registerComponent('button', {
  init: function () {
    //divタグを追加
    var buttonContainerEl = this.buttonContainerEl = document.createElement('div');
    //buttonタグを追加
    var btnEl_1 = document.createElement('button');
    // var btnEl_2 = document.createElement('button');

    var style = document.createElement('style');
    var css = '.a-button {background: #0db; color: #fff; margin: 10px; padding: 10px;}' +
      '.a-button-container {background: yellow; position: fixed; display: flex; align-items: flex-end; justify-content: center; bottom: 5vh; left: 50%; transform: translate(-50%, -50%);}'

    style.appendChild(document.createTextNode(css));
    document.getElementsByTagName('head')[0].appendChild(style);

    buttonContainerEl.classList.add('a-button-container');

    //buttonタグにa-buttonクラスを追加
    btnEl_1.classList.add('a-button');
    // btnEl_2.classList.add('a-button');

    btnEl_1.addEventListener('click', this.onClick_btnEl_1.bind(this));
    // btnEl_2.addEventListener('click', this.onClick_btnEl_2.bind(this));

    //divタグにbuttonタグを入れ子にする
    buttonContainerEl.appendChild(btnEl_1);
    // buttonContainerEl.appendChild(btnEl_2);

    //ボタンを表示させる
     this.el.sceneEl.appendChild(buttonContainerEl);
    // document.body.appendChild(buttonContainerEl);
    //buttontタグのマークアップを設定
    btnEl_1.innerHTML = 'buttonEl_1';
    // btnEl_2.innerHTML = 'buttonEl_2';
  },

  onClick_btnEl_1: function () {
    console.log("1_クリックイベントここ");
  },

  // onClick_btnEl_2: function () {
  //   console.log("2_クリックイベントここ");
  // }
});
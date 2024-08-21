/* global AFRAME */
AFRAME.registerComponent('button', {
    init: function () {
        var buttonContainerEl = this.buttonContainerEl = document.createElement('div');
        var buttonEl = document.createElement('button');
        var style = document.createElement('style');
        var css = '.a-button-container {box-sizing: border-box; display: inline-block; height: 34px; padding: 0;;' +
            'bottom: 20px; width: 150px; left: calc(50% - 75px); position: absolute; color: white;' +
            'font-size: 12px; line-height: 12px; border: none;' +
            'border-radius: 5px}';

        style.appendChild(document.createTextNode(css));
        document.getElementsByTagName('head')[0].appendChild(style);

        buttonContainerEl.classList.add('a-button-container');
        buttonContainerEl.appendChild(buttonEl);
        this.el.sceneEl.appendChild(buttonContainerEl);
        buttonEl.innerHTML = '小ホールEx';

        buttonEl.addEventListener('click', this.onClick.bind(this));
    },
    onClick: function () {
        console.log("小ホールExを表示");
        window.location.href = "../shall_Gmap_ex";
    }
});
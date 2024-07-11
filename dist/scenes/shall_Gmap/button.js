AFRAME.registerComponent('button', {
    init: function () {
        console.log('haraponはらぽん');
    },
    onClick: function () {
        console.log("クリックイベントここ");
    }
});
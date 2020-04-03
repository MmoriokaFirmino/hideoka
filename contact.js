window.addEventListener('DOMContentLoaded',
 function(){
    
    //テキストエリアのDOMを取得
    const node = document.querySelector('.count-text');
    
    node.addEventListener('keyup', function(){
        
    //テキストの中身を取得し、その文字数（length)を数える
    var count = this.value.length;
        
    //カウンターを表示する箇所のDOM(HTML)を取得する
    const counterNode = document.querySelector('.show-count-text');
        
    //innerTextを使うと取得したDOMの中身のテキストを書き換えられる
    counterNode.innerText = count;
    }, false);
},false
);

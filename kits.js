;(function (){
    let kits = {}
    kits.getTime = function (){
    let time = new Date();
    let y = time.getFullYear();
    let M = time.getMonth() + 1;
    let d = time.getDate();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
     M = M > 10?M:'0'+M;
     d = d > 10?d:'0'+d;
     h = h > 10?h:'0'+h;
     m = m > 10?m:'0'+m;
     s = s > 10?s:'0'+s;
    return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s; 
    }
})();

;(function(){
    function jQuery(Selector){
      return new Init(Selector);
    }
    function Init(Selector){
        let dom = document.querySelectorAll(Selector);
        for(let i = 0; i <= dom.length; i++){
            //把dom伪数组，复制为jq的伪数组；
            this[i] = dom[i];
        }
        this.length = dom.length;
    }
    window.$ = jQuery;
})();



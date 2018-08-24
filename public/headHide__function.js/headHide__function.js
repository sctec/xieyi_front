var tt_scroll=(function(){

    var posToTop,
        scrollToTop,
        bfScrollToTop,
        divBar,
        divBarContent,
        fixedBar,
        bfHeight;

    /*初始化函数*/
    function init(id){

        getPosTop(id);
        bindScroll();

    }

    /*绑定滚动函数*/
    function bindScroll(){

        window.onscroll=function(e){
            var e=e||window.event;
            scrollEvent(e);

        }

    }

    /*滚动事件*/
    function scrollEvent(e){

        if(Math.abs(scrollToTop-bfScrollToTop)<=2){

            if(scrollToTop>bfScrollToTop){

                bfScrollToTop=scrollToTop-1;
            }
            else{
                bfScrollToTop=scrollToTop+1;
            }

        }
        else{
            bfScrollToTop=scrollToTop||0;
        }

        scrollToTop=document.documentElement.scrollTop||document.body.scrollTop;

        if(ifHideInTop()){

//			divBarContent.style.height=0+'px';
//			divBarContent.style.overflow='hidden';

//			if(scrollDirectionCheck()){
//
            fixedBar.style.height=bfHeight+'px';
            fixedBar.style.overflow='visible';

//			}
//			else{
//
//				fixedBar.style.height=0+'px';
//				fixedBar.style.overflow='hidden';
//
//			}

        }
        else{

            fixedBar.style.height=0+'px';
            fixedBar.style.overflow='hidden';
//			divBarContent.style.height=bfHeight+'px';
//			divBarContent.style.overflow='visible';

        }

    }

    /*碰撞检测*/
    function ifHideInTop(){

        if(scrollToTop>=(posToTop+bfHeight)){
            return true;
        }
        else{
            return false;
        }

    }

    /*滚动方向检测*/
    function scrollDirectionCheck(){

        if(scrollToTop>bfScrollToTop){
            return false;
        }
        else{
            return true;
        }

    }

    window.onload=function(){


        scrollEvent();

    }

    /*克隆一个Bar*/
    function cloneBar(obj){

        divBar=obj;
//		divBarContent=getElement('content');
        fixedBar=divBar.cloneNode(true);
        fixedBar.className+=' mainNav_fixed';
        var winBody=document.body||document.documentElement;
        fixedBar.style.height=0;
        winBody.appendChild(fixedBar);

    }

    /*获取到上边距的距离*/
    function getPosTop(id){

        var attrElement=getElement(id);
        posToTop=attrElement.offsetTop;
        scrollToTop=document.documentElement.scrollTop||document.body.scrollTop;
        bfScrollToTop=scrollToTop||0;
        bfHeight=parseInt(getStyle(attrElement,'height'));
        cloneBar(attrElement);

    }

    /*通过ID或className获取节点*/
    function getElement(id){

        var attrElement=document.getElementById(id);
        if(!attrElement){
            if(document.getElementsByClassName){
                attrElement=document.getElementsByClassName(id)[0];
            }
            else{
                var all=document.getElementsByTagName('*');
                for(var i=0;i<all.length;i++){
                    if(all[i].className==id){
                        attrElement=all[i];
                        break;
                    }
                }
            }
        }
        return attrElement;

    }

    /*获取外链样式*/
    function getStyle(obj,attr){

        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }
        else{
            return getComputedStyle(obj,false)[attr];
        }

    }

    return init;

})();

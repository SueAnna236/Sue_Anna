/**
 * Created by web on 2018/12/13.
 */
function cat_carousel(){
  var show=document.querySelector("#cat_recommend>img.showOn");
  show.className="";
  if(show.nextElementSibling!==null){
    show.nextElementSibling.className="showOn";
  }else{
    show.parentNode.children[0].className="showOn";
  }
}
var n=setInterval(cat_carousel,3000);
var div=document.getElementsByName("cat_recommend");
div.onmouseover=function(){
  n=setInterval(cat_carousel,3000);
}
div.onmouseout=function(){
  n=setInterval(cat_carousel,3000);
}

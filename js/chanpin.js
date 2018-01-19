$(function(){
	    let lis=$('.sha>li');
       
    let mask=$('.mask');
 console.log(mask)
    let imga=$('.mask>img')
    let close=$('div.close')
    let left=$('.mask>.btnL')
    let right=$('.mask>.btnR')
   let lv;
    lis.on('click',function(){
       lv=$(this).index();
       mask.addClass('active');
       let src=$('img',this).attr('src');
       imga.attr('src',src);
    }) 
    left.click(function(){
       if(lv<=0){
           lv=lis.length;
    }
        let src=$('img',lis[--lv]).attr('src');
        imga.attr('src',src);
      })
            
    right.click(function(){
       ++lv     
       if(lv>lis.length-1){
           lv=0;
       }
       let src=$('img',lis[lv]).attr('src');
         console.log(src)   
       imga.attr('src',src);
   })
        close.click(function(){
              mask.removeClass('active');
        })
})
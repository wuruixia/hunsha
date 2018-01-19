$(function(){
	//  banner轮播
	// ///////////////////////////////////////////////////
      let bn=$('.banner-tu')
      let  blis=$('.banner-tu>li');
      let llis=$('.lunbo>li');
      let bw=blis.width();
      let n=0; 
      let t=setInterval(move,3000);

      function move(){
        n++;
        if(n==blis.length){
          n=0;
        }
        llis.removeClass('active');
        llis.eq(n).addClass('active');
        blis.removeClass('active');
        blis.eq(n).addClass('active');
      }
     
        llis.on('click',function(){
          ind=$(this).index()
              llis.removeClass('active')
              $(this).addClass('active')
              blis.eq(ind).removeClass('active');
             
             blis.removeClass('active');
             blis.eq(ind).addClass('active');
         })


        ////////////////////////////////////////////////
        ///图片展示
        ////////////////////////////////////////////////
          let lis=$('.chan-tu>li');
       
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

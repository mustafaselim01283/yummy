

export class Nav{
    constructor(){
        

        $('.switch i').eq(1).click(()=>{
           this.open()
        })
        $('.switch i').eq(0).click(()=>{
            this.close()
         })
     this.section=$('nav li')
     this.section.eq(0).click(()=>{

            $("#search").removeClass('d-none')
            $("#search").siblings('section').addClass('d-none')
        })
        this.section.click(()=>{
            this.close()
            
        })
     
    }


 open(){
    
    $('nav').animate({left:'0'})
    $('nav ul li').show(1000)
    $('.switch i').toggleClass('d-none')
 }
 close(){
    let navwidth=$('.inner-nav').innerWidth()
    $('nav ul li').hide(200)
    $('nav').animate({left:-navwidth},400);
    $('.switch i').toggleClass('d-none')
 }

   
}
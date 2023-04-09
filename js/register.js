
export class Register{
    constructor(){
        $('nav li').eq(4).click(async()=>{
            $(".contact").removeClass('d-none')
            $(".contact").siblings('section').addClass('d-none')
        })

      this.username=$('.contact input').eq(0);
      this.email=$('.contact input').eq(1)
      this.phone=$('.contact input').eq(2)
      this.age=$('.contact input').eq(3)
      this.pass=$('.contact input').eq(4)
      this.repass=$('.contact input').eq(5)

     this.username.keyup(()=>{
        this.validname()
     })
     this.email.keyup(()=>{
        this.validemail()
     })
     this.phone.keyup(()=>{
        this.validphone()
     })
     this.age.keyup(()=>{
        this.validage()
     })
     this.pass.keyup(()=>{
        this.validpass()
     })
     this.repass.keyup(()=>{
        this.validrepass()
     },()=>{
        if(this.validname()&&this.validemail()&&this.validphone()
        &&this.validage()&&this.validpass()&&this.validrepass()){
           $(".contact button").removeAttr('disabled')
           console.log('true');
        }else{
           console.log('false');
        }
     })

    $("contact button").click(()=>{
        $('.contact').addClass('d-none')
       $('.home').removeClass('d-none')
       
       
    })


    }
    validname(){
        let nameregex=/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
        if(nameregex.test(this.username.val())){
           this.username.addClass('is-valid').removeClass('is-invalid')
           this.username.siblings('div').addClass('d-none')
          
           return true

        }else{
            this.username.removeClass('is-valid').addClass('is-invalid')
           this.username.siblings('div').removeClass('d-none')
           
           return false
        }
    }

    validemail(){
        let emailregex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        if(emailregex.test(this.email.val())){
            this.email.addClass('is-valid').removeClass('is-invalid')
            this.email.siblings('div').addClass('d-none')
            return true
        }else{
            this.email.addClass('is-invalid').removeClass('is-valid')
           this.email.siblings('div').removeClass('d-none')
           return false
        }

    }
    validphone(){
        let phoneregex=/^01[0125][0-9]{8}$/
        if(phoneregex.test(this.phone.val())){
            this.phone.addClass('is-valid').removeClass('is-invalid')
            this.phone.siblings('div').addClass('d-none')
            return true
        }else{
            this.phone.removeClass('is-valid').addClass('is-invalid')
           this.phone.siblings('div').removeClass('d-none')
           return false
        }

    }
    validage(){
        let ageregex=/^[1-9][0-9]$/
        if(ageregex.test(this.age.val())){
            this.age.addClass('is-valid').removeClass('is-invalid')
            this.age.siblings('div').addClass('d-none')
            return true
        }else{
            this.age.removeClass('is-valid').addClass('is-invalid')
           this.age.siblings('div').removeClass('d-none')
           return false
        }

    }
    validpass(){
        let passregex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if(passregex.test(this.pass.val())){
            this.pass.addClass('is-valid').removeClass('is-invalid')
            this.pass.siblings('div').addClass('d-none')
            return true
        }else{
            this.pass.removeClass('is-valid').addClass('is-invalid')
           this.pass.siblings('div').removeClass('d-none')
           return false
        }

    }
    validrepass(){
        
        if(this.repass.val()==this.pass.val()){
            this.repass.addClass('is-valid').removeClass('is-invalid')
            this.repass.siblings('div').addClass('d-none')
            return true
        }else{
            this.repass.removeClass('is-valid').addClass('is-invalid')
           this.repass.siblings('div').removeClass('d-none')
           return false
        }

    }

}
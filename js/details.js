
export class Details{
    constructor(){

       
        $('.name-layer').click((e)=>{

            
            let mealid=$(e.target).attr('data-id')
            if(mealid==null){
                mealid=$(e.target).parent().attr('data-id')
            }
            
        this.getdata(mealid)
        $("#details").siblings('section').addClass('d-none')
        $("#details").removeClass('d-none')
           
        })
        $(".det-close").click(function(){
            $('#details').addClass('d-none')
            $("#details").siblings('section').addClass('d-none')
            $('.detal').empty()
            $(".home").removeClass('d-none')
            
        })

     
        
       
    }

  async  getdata(id){

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let respons= (await api.json()).meals[0]
    console.log(respons);
    this.creatElement(respons)

    
    }

    creatElement(data){
        
       let  item=`
        
       <div class="row text-white py-3">
       <div class="col-md-6 col-lg-4">
           <figure class="img-fluid overflow-hidden rounded-4">
               <img src="${data.strMealThumb}" alt="food" class="w-100">

           </figure>
       </div>
       <div class="col-md-6 col-lg-4  detils-det">
           <h4>Name :<span> ${data.strMeal}</span></h4>
           <h4>Area :<span> ${data.strArea}</span></h4>
           <h4>Category :<span> ${data.strCategory}</span></h4>
          <div class=" ">
           <h2 class="tags mb-4">Tags :</h2>
           
           <a href="${data.strSource}" class="btn btn-success d-inline-block mb-3">Source</a>
           <a href="${data.strYoutube}" class="btn btn-danger d-inline-block mb-3">Youtube</a>
       </div>
       </div>
       <div class="recip-det col-md-12 col-lg-4">
           <h2 class="recipes">Recipes :</h2>
       
       </div>
       
   </div>
    <div class="instractor text-white ">
           <h3>Instructions :</h3>
           <p>${data.strInstructions}</p>
    </div>
      
        `      
        
     
        $(".detal").html(item)
        this.recips(data)  

        // if(data.strTags){
        //     $('.tags').after(`<a href="" class="btn btn-info d-inline-block mb-3">${data.strTags}</a>`)
        // }
    }

    recips(data){
        
        let recipData=Object.entries(data)
        let valus=[]
        let valus2=[]
        
        for(let recip of recipData){
            if(recip[1]!=null){
            if(recip[0].includes('strIngredient') && recip[1].length>1){
                let [key,valu]=recip
                valus.push(valu)
                
            }
        }
        }
        for(let recip2 of recipData){
            if(recip2[1]!=null){
            if(recip2[0].includes('strMeasure')&& recip2[1].length>1){
                let [key,valu]=recip2
                valus2.push(valu)
            }
        }
        }
        let box=``
        for(let i=0;i<valus.length;i++){
            if(valus2[i]==undefined){
                valus2[i]=''
            }
            box+=`
            <span>${valus2[i]+' '+ valus[i]}</span>
            `

        }
        $('.recipes').after(box)
        

    }
    

   
}
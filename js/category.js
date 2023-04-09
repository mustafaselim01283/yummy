import { Details } from "./details.js";
export class Category{
    constructor(){

        $('nav li').eq(1).click(async()=>{
            $("#category").removeClass('d-none')
            $("#category").siblings('section').addClass('d-none')

      await this.getCategoryData()
     
      $('.name-layer-cat').click((e)=>{
    
          let name=$(e.target).parent('.name-layer-cat').attr('data-name')
          if(name==undefined){
             name=$(e.target).attr('data-name')
           }
       this.getcurrntCategory(name)
            $(".cat-meals").removeClass('d-none')
            $(".cat-meals").siblings('section').addClass('d-none')

      })
        })

    
       
        



    }

async getCategoryData(){

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let respons=(await api.json()).categories
    console.log(respons);
    this.creatElement(respons)
    
    }

    creatElement(data){
        let box=``

        for(let item of data){

            let para= item.strCategoryDescription.split(' ')
            let detels=para.splice(0,20).join(' ') 

            box+=`
            <div class="home-meal-cat col-6 col-md-4 col-lg-3 " >
            <figure class="img-fluid mb-0  position-relative overflow-hidden rounded-4">
                <img src="${item.strCategoryThumb}" alt="meal" class="w-100">
                <div class="name-layer-cat position-absolute  start-0 end-0 bg-white bg-opacity-75 p-3 text-center" data-name="${item.strCategory}">
                <h3 class=" mx-auto">${item.strCategory}</h3>
                <p>${detels} </p>
    
            </div>
            </figure>
    
    
        </div>
            `
            
            
        }
        $("#category .row").html(box)
    

    }

  async  getcurrntCategory(curr){
        let api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${curr}`) 

        let respons=(await api.json()).meals
        console.log(respons);
        this.creatCatMeals(respons)
        let details=new Details()

    }

    creatCatMeals(respons){
        let box=''

        for(let respon of respons){
            console.log();
            box+=`
            <div class="home-meal col-6 col-md-4 col-lg-3" >
            <figure class="img-fluid mb-0  position-relative overflow-hidden rounded-4">
                <img src="${respon.strMealThumb}" alt="meal" class="w-100">
                <div class="name-layer position-absolute  start-0 end-0 bg-white bg-opacity-50 p-3 d-flex align-items-center" data-id="${respon.idMeal}">
                <h3 class="">${respon.strMeal}</h3>

            </div>
            </figure>
    

        </div>
            `


        }
        $('.cat-meals .row').html(box);
        
        
       
    }

    }

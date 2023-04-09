import { Details } from "./details.js";
export class Area{
    constructor(){

        $('nav li').eq(2).click(async()=>{
          await  this.getAreadata()
            $(".area").removeClass('d-none')
            $(".area").siblings('section').addClass('d-none')
            $('.cur-area').click((e)=>{
                let areaName=$(e.target).text()
                if(areaName.length<1){
                    areaName=$(e.target).siblings('h2').text()
                    
                }
                console.log(areaName);
                this.getAreaMeals(areaName)
                $(".area-meals").removeClass('d-none')
                $(".area-meals").siblings('section').addClass('d-none')
  

            })
        })


    }

   async getAreadata(){
    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let respons=(await api.json()).meals
    console.log(respons);
    this.creat(respons)
   }

   creat(data){
    let box=``
    for(let item of data){
        box+=`
        <div class="cur-area col-6 col-md-4 col-lg-3">
                    <div class="text-center text-white">
                        <i class="fa-solid fa-house-laptop fa-4x "></i>
                        <h2 class="">${item.strArea}</h2>
                    </div>
                </div>

        `
    }
    $('.area .row').html(box)
   }

  async getAreaMeals(area){
       
    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    let respons=(await api.json()).meals
    console.log(respons);
    this.creatMeals(respons)
    let details=new Details()
   }

   creatMeals(data){
    let box=``
    for(let item of data){
        box+=`
        <div class="home-meal col-6 col-md-4 col-lg-3" >
        <figure class="img-fluid mb-0  position-relative overflow-hidden rounded-4">
            <img src="${item.strMealThumb}" alt="meal" class="w-100">
            <div class="name-layer position-absolute  start-0 end-0 bg-white bg-opacity-50 p-3 d-flex align-items-center" data-id="${item.idMeal}">
            <h3 class="">${item.strMeal}</h3>

        </div>
        </figure>


    </div>
        `
    }
    $('.area-meals .row').html(box)
   }
}
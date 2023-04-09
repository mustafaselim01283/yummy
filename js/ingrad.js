import { Details } from "./details.js";
export class Ingradinat{
    constructor(){

        $('nav li').eq(3).click(async()=>{
            await  this.getingradint()
              $(".ingradians").removeClass('d-none')
              $(".ingradians").siblings('section').addClass('d-none')
              $('.cur-ingrad').click((e)=>{
                  let areaName=$(e.target).text()
                  if(areaName.length<1 || areaName.length>10){
                      areaName=$(e.target).siblings('h2').text()
                      
                  }
                  console.log(areaName);
                  this.getcurntMaelIngradiant(areaName)
                  $(".ing-meals").removeClass('d-none')
                  $(".ing-meals").siblings('section').addClass('d-none')
    
  
              })
          })
    


    }

    async getingradint(){
        let api=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        let respons=(await api.json()).meals
        console.log(respons);
        this.creatingrad(respons)
    }

    creatingrad(data){
     let   box=``

     for(let i=0;i<25;i++){
        let para= data[i].strDescription.split(' ')
            let detels=para.splice(0,20).join(' ') 

        box+=`
        <div class="cur-ingrad col-6 col-md-4 col-lg-3">
        <div class="text-center text-white">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h2 class="">${data[i].strIngredient}</h2>
            <p>${detels}<p/>
        </div>
    </div>
        `
     }
     $('.ingradians .row').html(box)
    }

  async  getcurntMaelIngradiant(curr){
        
    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${curr}`)
    let respons=(await api.json()).meals
    console.log(respons);
    this.IngradiantMeals(respons)
    let details=new Details()


    }

    IngradiantMeals(data){
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
        $('.ing-meals .row').html(box)

    }
}
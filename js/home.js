import { Details } from "./details.js";

export class Home{
    constructor(){
      
        this.getdata()
       
    }

   async getdata(){

    let api=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    let respons=(await api.json()).meals
    console.log(respons);

    this.creat(respons)
    $('.spiner').fadeOut(1000)
    let details=new Details()

   
    
    

    }


    creat(respons){
        let box=''
        for(let i=0;i<20;i++){
            console.log();
            box+=`
            <div class="home-meal col-6 col-md-4 col-lg-3" >
            <figure class="img-fluid mb-0  position-relative overflow-hidden rounded-4">
                <img src="${respons[i].strMealThumb}" alt="meal" class="w-100">
                <div class="name-layer position-absolute  start-0 end-0 bg-white bg-opacity-50 p-3 d-flex align-items-center" data-id="${respons[i].idMeal}">
                <h3 class="">${respons[i].strMeal}</h3>

            </div>
            </figure>
    

        </div>
            `


        }
        $('.home .row').html(box);
        
        
       
    }
   
}
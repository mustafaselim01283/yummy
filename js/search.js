import { Details } from "./details.js";
export class Search{
    constructor(){
     
     $("#by-name").keyup(()=>{

      let valu=document.querySelector('#by-name').value
      
      this.getdataSearch(valu)
     })

     $("#by-liter").keyup(()=>{

             let valu=document.querySelector('#by-liter').value
        
             this.getdataByliter(valu)
         }
       
       )

      
    }

  async getdataSearch(meal){

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    let respons=(await api.json()).meals
    console.log(respons);
    this.showMeals(respons)
    let details=new Details()

  }

  showMeals(data){
    let box=''
    for(let meal of data){
        box+=`
        <div class="home-meal col-6 col-md-4 col-lg-3" >
        <figure class="img-fluid mb-0  position-relative overflow-hidden rounded-4">
            <img src="${meal.strMealThumb}" alt="meal" class="w-100">
            <div class="name-layer position-absolute start-0 end-0 bg-white bg-opacity-50 p-3 d-flex align-items-center" data-id="${meal.idMeal}">
            <h3 class="">${meal.strMeal}</h3>

        </div>
        </figure>


    </div>
        `
        
        
    }
    $('#meals').html(box)

  }

  async getdataByliter(litter){
    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${litter}`)
  let respons=(await api.json()).meals
  console.log(respons);
  this.showMeals(respons)
  let details=new Details()
   }
}
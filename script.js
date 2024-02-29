const loadPhone = async (searchItemValue) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchItemValue}`);
    const data =await res.json();
    const phones = data.data;
   
    displayPhone(phones)
}

const displayPhone = phones=>{
    const phoneContainer =document.getElementById('phone-container');
    phoneContainer.innerHTML=''
let showAllCont = document.getElementById('show-all-cont');
let showAllBtn =document.getElementById("show-all-btn" );

    if(phones.length > 12){
      
        showAllBtn.classList.remove('hidden')
    }else{
        showAllBtn.classList.add('hidden')
    }
    phones = phones.slice(0,12);
    // console.log(phones.length)
phones.forEach(phone => {
   
    
const phoneCard = document.createElement('div');

phoneCard.classList = `card w-96 bg-base-100 shadow-xl `;

phoneCard.innerHTML = `
<figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
`
phoneContainer.appendChild(phoneCard)

});
funcSpinner(false)
}


let handleSearch = function(){
   let  searchItemValue = document.getElementById('search-fild').value;
   funcSpinner(true)
   loadPhone(searchItemValue)
   
   

}
const funcSpinner = (isLoading) =>{
    const spinner = document.getElementById('spiiner-cont');
   if(isLoading){
    spinner.classList.remove('hidden')
   }else{
    spinner.classList.add('hidden')

   }
}
// console.log("hey body")


let restcountries= async ()=>{
    let response= await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    console.log(data);
    data.forEach(ele => {
        // console.log(ele.name.common)
        // let card=document.createElement("div");
        document.body.innerHTML += `
        <div class="card card-header card-body  t-img">
        <h5 class="card-title">${ele.name.common}</h5>
  <div class="t-img"><img src="${ele.flags.png}" class="card-img-top"></div>
  <div class="card-body">
    <p class="card-text"><div>Capital: ${ele.capital}</div>
    <div>Region: ${ele.region}</div>
    <div>Country Code: ${ele.cca3}</div></p>
    <a href="#" class="btn btn-primary">Click for weather</a>
  </div>
</div>`
        
        
    });
}
restcountries()
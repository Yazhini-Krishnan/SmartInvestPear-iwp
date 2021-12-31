console.log("this is my index js file");
// cf51f1bfc0724bbbbaa137599532fc51

let country='in';
let apiKey='cf51f1bfc0724bbbbaa137599532fc51';
let category='business';
let newsAccordion=document.getElementById('newsAccordion');
let newsAccordion2=document.getElementById('newsAccordion2');
let newsAccordion3=document.getElementById('newsAccordion3');
let newsAccordion4=document.getElementById('newsAccordion4');
let newsAccordion5=document.getElementById('newsAccordion5');

const xhr= new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`, true);

xhr.onload = function(){
    if(this.status === 200){
        let json =JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        // console.log(json);
        console.log(articles[0].description)
let newsHtml="";

        // articles.forEach(function(element){
      //  console.log(articles);
      for(let i =0 ;i<23;i++){
            let news = `
<div style="display:flex;   ">
            <div class="card bg-warning" style=" position:relative;  height:480px; border:none; width: 19rem; margin-top:10px;  margin-left:40px;  ">
            <img src=${articles[i].urlToImage} class="card-img-top" alt="...">
            <div class="card-body" >
              <h5 style="font-size:15pt; font-weight:bold;" class="card-title"> ${articles[i].title}</h5>
              <p class="card-text" style="font-size:10pt;">${articles[i].description} </p>
             
            </div>
            <a class="btn btn-dark"  style="  width:100%;   font-size:12pt; text-decoration: none;" href=${articles[i].url} target="_blank" >Read More</a>
          </div>
          <div>`
                        newsHtml +=news;

                        switch(i) {
                            case 3:
                                newsAccordion.innerHTML = newsHtml;
                                newsHtml="";
                              break;
                            case 7:
                                newsAccordion2.innerHTML = newsHtml;
                                newsHtml="";
                              break;
                            case 11:
                                newsAccordion3.innerHTML = newsHtml;
                                newsHtml="";
                              break;
                            
                            case 15:
                                newsAccordion4.innerHTML = newsHtml;
                                newsHtml="";
                              break;
                            case 19:
                                newsAccordion5.innerHTML = newsHtml;
                                newsHtml="";
                              break;
                            
                          }
        
        }
        

    
}

    else{
        console.log("some error occured");
    }
}

xhr.send();

let news = `

<p>
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
  Toggle width collapse
</button>
</p>
<div style="min-height: 120px;">
<div class="collapse collapse-horizontal" id="collapseWidthExample">
  <div class="card card-body" style="width: 300px;">
    This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
  </div>
</div>
</div>`
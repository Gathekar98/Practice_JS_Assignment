const apikey ="54faf57057ea464c84b2ff11e09fc5b7";
const blogcontainer = document.getElementById('blog-container');
const searchField = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-button');

async function fetchRandomNews(){
    try{
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apikey}`;
    const response = await fetch(apiUrl); 
    const data = await response.json();
    return data.articles;
    }
    catch(error){
 console.log("error fetching raandom news",error);
 return[];
    }
}

searchBtn.addEventListener("click",async()=>{
    const query = searchField.value.trim();
    if(query!== ""){
        try{
            const articles = await fetchNewsQuery(query);
            displayBlogs(articles);

        }
        catch(error){
            console.log("error fetching news by query", error)
        }
    }
})

async function fetchNewsQuery(query){
    try{
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apikey}`;
        const response = await fetch(apiUrl); 
        const data = await response.json();
        return data.articles;
        }
        catch(error){
     console.log("error fetching raandom news",error);
     return[];
        }
}

function displayBlogs(articles){
blogcontainer.innerHTML="";
articles.forEach((articles) => {
    const blogcard = document.createElement('div');
    blogcard.classList.add('blog-card');
    const img = document.createElement('img');
    img.src = articles.urlToImage;
    img.alt = articles.title;
    const title = document.createElement('h2');
    const truncatedTitle = articles.title.length>30?articles.title.slice(0,30) +"....." : articles.title;
    title.textContent = truncatedTitle;
    
    const description = document.createElement('p');
    description.textContent = articles.description;

    // const description = document.createElement('p');
    // const truncatedDes = articles.description.length>30?articles.title.slice(0,20) +"....." : articles.description;
    // description.textContent = truncatedDes;
    blogcard.addEventListener("click", ()=>{
        window.open(articles.url,"_blank");
    })
    blogcard.appendChild(img);
    blogcard.appendChild(title);
    blogcard.appendChild(description);
    blogcontainer.appendChild(blogcard);
//     blogcontainer.innerHTML=`<div class="blog-card">
//     <img src="${articles.urlToImage}" alt="${articles.title}">
//     <h2>${articles.title}</h2>
//     <p>${articles.decription}</p>
// </div>`
});
}

(async ()=>{
    try{
const articles = await fetchRandomNews();
displayBlogs(articles);
    }
    catch(error)
    {
console.log('error fetching random news',error);
    }
})();
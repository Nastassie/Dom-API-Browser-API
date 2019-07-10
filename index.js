const url = 'https://api.myjson.com/bins/152f9j';
const container = document.getElementById('cont');

function removeArticle(elem){
    elem.parentElement.setAttribute("class", "removedarticle");
    var elements = document.getElementsByClassName("hiddenarticle");
    if (elements.length)
        elements[0].setAttribute("class", "article");
}
//const itemdate = document.getElementById('pdate');
fetch(url)
    .then(res => res.json())
    .then(data => {
        const rawData = data.data;
        return rawData.map(post => {
          //all needed data is listed below as an entity 
          let createdAt = post.createdAt;
                description = post.description;
                img = post.image;
                tags = post.tags;
                title = post.title;
                //create element
                button_r = document.createElement('button')
                button_r.setAttribute("class", "delete");
                button_r.setAttribute("onClick", "removeArticle(this)");
                article = document.createElement('div');
                postdiv = document.createElement('div');
                posttitle = document.createElement('h1');
                posttags = document.createElement('p');
                postimg = document.createElement('img');
                postdate = document.createElement("p");
                //post.setAttribute('class', 'post_class')
                postdiv.innerHTML = description;
                posttitle.innerHTML = title;
                posttags.innerHTML = tags.join(", ");
                //print(tags.split(","));
                postdiv.setAttribute("class", "description");
                postimg.setAttribute("src", img);
                postimg.setAttribute("height", "150px");
                postimg.setAttribute("width", "150px");
                postdate.setAttribute("class", "pdate");
                posttags.setAttribute("class", "tags");
                dt = new Date(createdAt);
                postdate.innerHTML = dt.toLocaleString();
                article.setAttribute("data-Date", createdAt)
                //article.setAttribute("class", "article");
                
                //append element
                article.appendChild(button_r);
                article.appendChild(posttitle);
                article.appendChild(postimg);
                article.appendChild(postdiv);
                article.appendChild(postdate);
                article.appendChild(posttags);
                //article.style.visibility = "hidden";
                //container.appendChild(article);
                return article;
        });
    })
    .then(elArr => {
            for (i = 0; i < elArr.length; ++i)
            {
                article = elArr[i];
                article.setAttribute("data-index", i.toString());  
                if (i < 10)
                {
                    article.setAttribute("class", "article");
                }
                else
                {
                    article.setAttribute("class", "hiddenarticle");
                }
                container.appendChild(article);
            }
        }
    )
    //.then(arr => (arr))
    .catch((error) => {
        console.log(JSON.stringify(error));
    });




function by_default(){
var p = document.getElementById('cont');
Array.from(p.children)
  .map(function (x) { return p.removeChild(x); })
  .sort(function (x, y) {
      d1 = parseInt(x.getAttribute("data-index"));
      d2 = parseInt(y.getAttribute("data-index"));
       return d1 - d2;
  })
  .forEach(function (x) { p.appendChild(x); });
}

function sort_by_date_asc(){
var p = document.getElementById('cont');
Array.from(p.children)
  .map(function (x) { return p.removeChild(x); })
  .sort(function (x, y) {
      d1 = x.getAttribute("data-Date");
      d2 = y.getAttribute("data-Date");
       return d1.localeCompare(d2) ;
  })
  .forEach(function (x) { p.appendChild(x); });

}

function sort_by_date_desc(){
var p = document.getElementById('cont');
Array.from(p.children)
  .map(function (x) { return p.removeChild(x); })
  .sort(function (x, y) {
      d1 = x.getAttribute("data-Date");
      d2 = y.getAttribute("data-Date");
       return d2.localeCompare(d1) ;
  })
  .forEach(function (x) { p.appendChild(x); });

}

function restoreVis(){
    var p = document.getElementById('cont');
    var c = Array.from(p.children);
    var a = 0;
    for (var i=0; i<c.length; ++i)
    {
        a += c[i].className == "article"
    }
    var aa = 0;
    for (var i=0; i<c.length; ++i)
    {
        if (c[i].className == "removedarticle")
            continue;
        if (aa < a)
        {
            c[i].className = "article";
            ++aa;
        }
        else
        {
            c[i].className = "hiddenarticle";
        }
    }
}

window.onscroll = (function() {
   if(window.scrollY + window.innerHeight >= document.body.clientHeight) {
       var list = document.getElementsByClassName("hiddenarticle");
       if (!list)
            return;
       list = Array.from(list).slice(0, 10);
       list.forEach(function(element) {
           element.setAttribute("class", "article");
       });
   }
});




document.getElementById("reset").onclick = function (){
       window.scrollTo(0, 0);
       list = Array.from(document.getElementsByClassName("article"));
       for (i = 10; i < list.length; ++i)
       {
        list[i].setAttribute("class", "hiddenarticle");
       }
   
   }

 
document.getElementById("Oldest").onclick = function() {sort_by_date_desc();restoreVis();}
document.getElementById("Current").onclick = function() {sort_by_date_asc();restoreVis();}
document.getElementById("by_default").onclick = function() { by_default();restoreVis();}

const url = 'https://api.myjson.com/bins/152f9j';
const container = document.getElementById('cont');
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
                article = document.createElement('div');
                postdiv = document.createElement('div');
                posttitle = document.createElement('h1');
                posttags = document.createElement('p');
                postimg = document.createElement('img');
                postdate = document.createElement("p");
                //post.setAttribute('class', 'post_class')
                postdiv.innerHTML = description;
                posttitle.innerHTML = title;
                posttags.innerHTML = tags;
                //posttags.split("");
                postdiv.setAttribute("class", "description");
                postimg.setAttribute("src", img);
                postimg.setAttribute("height", "150px");
                postimg.setAttribute("width", "150px");
                postdate.setAttribute("class", "pdate");
                posttags.setAttribute("class", "tags");
                postdate.innerHTML = createdAt;
                article.setAttribute("class", "article");
                
                //append element
                article.appendChild(posttitle);
                article.appendChild(postimg);
                article.appendChild(postdiv);
                article.appendChild(postdate);
                article.appendChild(posttags);
                container.appendChild(article);

        });
    })
    //.then(arr => (arr))
    .catch((error) => {
        console.log(JSON.stringify(error));
    });

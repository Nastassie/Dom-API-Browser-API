const url = 'https://api.myjson.com/bins/152f9j';
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
            //append element
        });
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
    });

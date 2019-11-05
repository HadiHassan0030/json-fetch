let url = 'https://picsum.photos/v2/list?limit=10'

fetch(url)
    .then(res => { return res.json() })
    .then(data => {

        data.forEach((d) => {
            let height = d.height;
            let width = d.width;
            let imgUrl = d.download_url;
            imgUrl = imgUrl.replace(width, 400);
            imgUrl = imgUrl.replace(height, 300);



            let h1 = document.createElement('h1');
            h1.textContent = d.author;
            document.body.appendChild(h1);





            let img = document.createElement('img');
            img.src = imgUrl;
            img.alt = d.author;
            document.body.appendChild(img)


        })
    })
    .catch((err) => {
        console.log(err);
    });

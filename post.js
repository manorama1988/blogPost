const fetchData = async () => {
    const response = await axios.get('https://peerup-vb-srv.herokuapp.com/Articles ');
    // console.log(response.data);// show api structure with content
    for(let newData of response.data){ // showing seprate data with all content 
        console.log(newData);
        // console.log(newData._id);// show id 
        // <h1>${newData._id}</h1>
        const div = document.createElement('div');
        div.innerHTML = `

        <div class="card-post">
        <div class="card-post-detail">
            <div class="card-post-image">
            <img src="${newData.image.name}" />
            </div>
            <div class="card-post-content">
                <div class="card-post-text">
                    <h2 class="card-post-title">${newData.title}</h2>
                    <p class="card-post-date">${newData.published_at}</p>
                </div>
                <div class="card-post-description">
                    <p class="description">${newData.description}</p>
                </div>
                <div class="card-post-category">
                    <button class="category">${newData.category.name}</button>
                </div>
            </div>
        </div>
    </div>


        `;
            document.querySelector('.autocomplete').appendChild(div); 
    }
   
};

fetchData();

const root = document.querySelector('.autocomplete');


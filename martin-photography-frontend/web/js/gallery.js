/**
 * Creates html source representing the gallery grid. 
 * @param {function} callback void
 */
function create_gallery(callback) {
    get_product_list((result) => {
        //grid variables
        let row_size = 3;
        let row = 0;
        let col = 0;

        //grid html
        let html = `<div class="row">`;

        for(let i = 0, j = 0; i < result.products.length; i++, j++) {
            if(j == row_size && i != 0)  {
                //last column, close row
                html += "</div>"

                //last entry, close grid
                if(i != result.products.length - 1) html += '<div class="row">';
                j = 0;
            }
            
            //gather product data
            let product = result.products[i];
            let title = product.title;
            let description = product.description;
            let image0 = product.images.length > 0 ? product.images[0].url : "";

            //add row to grid
            html += `
            <div class="four columns">
                <h4>`+title+`</h4>
                <p>`+description+`</p>
                <img src=`+image0+` style="width:256px;height:256px;"></img>
            </div>`;
        }

        //send html to lambda callback
        callback(html);
    });
}

//wait for DOM to load
document.onreadystatechange = (state) => {
    if(document.readyState == "complete") {
        create_gallery(html => {
            //retreive gallery container & append grid html
            let gallery = document.getElementById('content');
            gallery.innerHTML += html;
        });
    }
};
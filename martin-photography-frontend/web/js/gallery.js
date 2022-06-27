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
                <img class="gallery-entry" src=`+image0+` style="width:256px;height:256px;"></img>
            </div>`;
        }

        //send html to lambda callback
        callback(html);
    });
}

var showing_config = false;

//wait for DOM to load
$(document).ready(() => {
    create_gallery(html => {
        //retreive gallery container & append grid html
        let gallery = document.getElementById('content');
        gallery.innerHTML += html;

        //attach show/hide classes to gallery-config
        $("#controlbutton").on('click', () => {
            if(!showing_config) {
                $("#gallery-config-dd").addClass("show-gallery-config");
                showing_config = true;
            } else {
                $("#gallery-config-dd").removeClass("show-gallery-config");
                showing_config = false;
            }
        });

        let btn_array = $(".frame-color").get();
        btn_array.forEach(btn => {
            console.log(btn.backgroundColor);
        });
    });
});

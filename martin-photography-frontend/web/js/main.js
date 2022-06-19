function get_product_list(callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://localhost:9000/store/products?fields=id%2Ctitle%2Cdescription", true);
    xmlHttp.onreadystatechange = () => {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(JSON.parse(xmlHttp.responseText));
        }
    }
    xmlHttp.send();
}
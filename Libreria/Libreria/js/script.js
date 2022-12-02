const $portfolio = document.querySelector(".sec-portofolio-js");
const $modalImgPorfolio = document.querySelector(".img-modal-js");

$portfolio.addEventListener('click', (e) => {
    console.log(e.target.classlist);
    if(e.target.classlist.contains("img-btn-modal-js")){
        //SRC
        let urlImg = e.target.atributtes[0].nodeValue
        //add modal
        $modalImgPorfolio.src = urlImg;
    }
})
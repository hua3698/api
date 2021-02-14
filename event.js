$(document).ready(function(){
    let taipei = new Array();


    $.getJSON("api.php").done((e) => {
        data = e.XML_Head.Infos.Info
        // console.log(data)
        for (const item of data) {
            if (item.Region == "臺北市") {
                taipei.push(item)
            }
        }
        // console.log(taipei)
        for(let i=0;i<3;i++){
            $(".card").find(".card-img-top").eq(i).attr("src",taipei[i].Picture1)
            $(".card").find(".card-title").eq(i).text(taipei[i].Name)
            let des=taipei[i].Description.substring(0,50)
            $(".card").find(".card-text").eq(i).text(`${des}...`)
            $(".card").find(".linkb").eq(i).attr("href",taipei[i].Website)
        }
        $('.row').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    })
})
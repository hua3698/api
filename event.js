$(document).ready(function(){
    let north = new Array();
    let center = new Array();
    let south = new Array();
    let east = new Array();
    let other = new Array();

    $.getJSON("api.php").done((e) => {
        data = e.XML_Head.Infos.Info
        carousel()
        card(data)
        
        $('.row').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,    
        });
    })
    
    function carousel(){
        $(".carousel-item").on("mouseover",function(){
            $(".carousel-caption").animate({bottom:"-100px"},800)
        })
        $(".carousel-item").on("mouseout",function(){
            $(".carousel-caption").animate({bottom:"-10px"},500)
        })

    }
    function card(data){
        for(let i=0;i<data.length;i++){
            switch(data[i].Region){
                case '臺北市':
                case '新北市':
                case '桃園市':
                case '新竹市':
                north.push(data[i]);
                break;
                case '苗栗縣':
                case '臺中市':
                case '彰化縣':
                case '南投縣':
                case '雲林縣':
                center.push(data[i]);
                    break;
                case '嘉義縣':
                case '臺南市':
                case '高雄市':
                south.push(data[i]);
                    break;
                case '宜蘭縣':
                case '花蓮縣':
                case '臺東縣':
                east.push(data[i]);
                    break;
                default:
                    other.push(data[i]);
                    break;
            }
        }
        insert(north,0)
        insert(center,1)
        insert(south,2)
        insert(east,3)
    }

    function insert(location,no){
        for(let i=0;i<10;i++){
            let title=location[i].Name.substring(0,15)
            let des=location[i].Description.substring(0,50)
            let subtitle=location[i].Start.substring(0,10)+"~"+location[i].End.substring(0,10)
            $(".district").eq(no).find(".row").append(`
                <div class="col-4">
                    <div class="card" style="width:100%;">
                        <div class="cardImg">
                            <img src="${location[i].Picture1}" class="card-img-top">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <h6 class="card-subtitle mb-3 text-muted">${subtitle}</h6>
                            <p class="card-text">${des}...</p>
                            <span class="text-muted pr-3">點我看更多</span>
                            <a href="${location[i].Website}" target="_blank" class="card-link my-3">點我去官網</a>
                        </div>
                    </div>
                </div>
            `)
        }
    }
})
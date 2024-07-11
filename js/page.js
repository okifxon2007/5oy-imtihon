
function pagecard(url){
    console.log(url);
    if (url.message == 'Mahsulot topilmadi') {
        return ` <h2 style='text-align:center'></h2>`
    }
    return `
    
    <div class="page-main">
        <div class="page-one">
            <h2>Корзина</h2>
            <hr>
            <div class="page-df">
                <div class="pageimg">
                    <img src="${url.image}" alt="">
                </div>
                <div class="page-paragraf">
                   <h2>${url.name}</h2>
                   <p>+ Подарок: “Приложение к замкам Golden Service”</p>
                </div>
                <div class="udalit-page">
                   
                </div>
            </div>
           <div class="pass-df">
            <div class="pass-page">
                <h3>Итого: ${url.newPrice}₽</h3>
                <button>Оформить заказ</button>
            </div>
            <div class="qayta">
                <button class="pokupku">Продолжить покупки</button>
            </div>
           </div>
        </div>
     </div>
    `
}



let light = document.querySelector('.light')

document.addEventListener('DOMContentLoaded', function(){
    let url = window.location.href;
    let idd = url.split('id=')[1];
    fetch(`https://cars-pagination.onrender.com/products/${idd}`)
    .then(res => res.json())
    .then(data =>{
        light.style.display = ''
        let lokaldata = localStorage.getItem('malumot');
        
        if (lokaldata) {
            lokaldata = JSON.parse(lokaldata);
        } else {
            lokaldata = [];
        }
        lokaldata.push(data);

        localStorage.setItem('malumot', JSON.stringify(lokaldata));
        
        light.innerHTML = '';
        lokaldata.forEach(item => {
        light.innerHTML += pagecard(item);
    });

        
        
        let pokupku = document.querySelector('.pokupku')
    if (pokupku) {
        pokupku.addEventListener('click', function() {
            window.location.assign('/index.html')
        })
    }
    let udalit = document.querySelector('.udalit');
    udalit && udalit.addEventListener('click', function(){
        localStorage.clear()
        light.style.display = 'none'
        window.location.assign('/index.html')
    })
})
    
    
})
function cretonecard(value) {
    return `
    <div class="cardmain" data-id=${value.id}>
            <div class="card-main-img">
                <img src="${value.image}" alt="">
            </div>
            <div class="card-mein-paragraph">
                <h1 class="hh1">${value.name}</h1>
                <p class="tsena">цена</p>
                <h1>${value.newPrice}₽<span>${value.oldPrice}₽</span></h1>
                <button class="button">КОРЗИНКА</button>
            </div>
        </div>
    `;
}

let grow = document.getElementById('grow');

document.addEventListener('DOMContentLoaded', function () {
    let url = window.location.href;
    let id = url.split('id=')[1];
    if (!id) {
        window.location.assign('http://127.0.0.1:5500/pages/index.html');
        return;
    }
    fetch(`https://cars-pagination.onrender.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            if (data.id) {
                let card = cretonecard(data);
                grow.innerHTML = card;
            }

            let card = document.querySelector('.cardmain');
            let button = document.querySelector('.button');
            
            function getIdFromLocalStorage() {
                let idList = [];
                if (localStorage.getItem("idList")) {
                    idList = JSON.parse(localStorage.getItem("idList"));
                }
                return idList;
            }

            if (button) {
                button.addEventListener('click', function (e) {
                    e.preventDefault();
                    const cardId = card.getAttribute('data-id');
                    let idList = getIdFromLocalStorage();
                    
                    if (idList.includes(cardId)) {
                        alert('Bu mahsulot allaqachon qo\'shilgan');
                    } else {
                        idList.push(cardId);
                        localStorage.setItem('idList', JSON.stringify(idList));
                        window.location.assign(`/pages/page.html?id=${cardId}`);
                    }
                });
            }
        })

        

        .catch(error => {
            console.log(error);
        });
});

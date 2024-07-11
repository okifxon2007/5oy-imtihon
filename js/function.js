async function getdata(url) {
    try {
        const resp = await fetch(url)
        const res = await resp.json()
        return res
    } catch (error) {
        console.log(error);
    }
}

async function getdita(url) {
    try {
        const resp = await fetch(url)
        const res = await resp.json()
        return res
    } catch (error) {
        console.log(error);
    }
}

function createcard(value) {
    return `
    <div class="card" id="card" data-id="${value.id}">
                    <div class="sale">
                        <div class="sale-block">
                            <button class="btn1"><i class="fa-solid fa-x"></i> Нет в наличии</button>
                        <button class="btn2"><i class="fa-solid fa-gift"></i> Подарок</button>
                        </div>
                        <button class="salebtn">sale</button>
                    </div>
                    <img src="${value.image}" alt="">
                        <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <p>${value.comments}отзывов</p>
                        </div>
                        <h3>${value.name}</h3>
                        <h2>${value.newPrice}₽<span>${value.oldPrice}₽</span></h2>
                        <span class="opt">${value.category}</span>
                </div>
    `;
}

function cratecard(value) {
    return `
    <div class="card" id="card" data-id="${value.id}">
                    <div class="sale">
                        <div class="sale-block">
                            <button class="btn1"><i class="fa-solid fa-x"></i> Нет в наличии</button>
                        <button class="btn2"><i class="fa-solid fa-gift"></i> Подарок</button>
                        </div>
                        <button class="salebtn">sale</button>
                    </div>
                    <img src="${value.image}" alt="">
                        <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <p>${value.comments}отзывов</p>
                        </div>
                        <h3>${value.name}</h3>
                        <h2>${value.newPrice}₽<span>${value.oldPrice}₽</span></h2>
                        <span class="opt">${value.category}</span>
                </div>
    `;
}

function cretecard(value) {
    return `
    <div class="card" id="card" data-id="${value.id}">
                    <div class="sale">
                        <div class="sale-block">
                            <button class="btn1"><i class="fa-solid fa-x"></i> Нет в наличии</button>
                        <button class="btn2"><i class="fa-solid fa-gift"></i> Подарок</button>
                        </div>
                        <button class="salebtn">sale</button>
                    </div>
                    <img src="${value.image}" alt="">
                        <div class="star">
                            
                            <p>${value.comments}отзывов</p>
                        </div>
                        <h3>${value.name}</h3>
                        <h2>${value.newPrice}₽<span>${value.oldPrice}₽</span> </h2>
                        <span class="opt">${value.category}</span>
                    
                </div>
    `;
}





export { createcard, getdata, cretecard, cratecard };


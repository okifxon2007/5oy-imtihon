import { createcard, getdata, cretecard, cratecard } from "./function.js";
let wrapper = document.getElementById('wrapper');
let loader = document.querySelector('.loader')






document.addEventListener('DOMContentLoaded', function() {
   
    getdata('https://cars-pagination.onrender.com/products/')
        .then(data => {

            if (data.length > 0) {
                loader.style.display = 'none';
                data.forEach((product,index) => {
                    if (index != 0 && index < 13 ) {
                        let card = createcard(product);
                        wrapper.innerHTML += card;
                    }
                });


                let card = document.querySelectorAll('.card')
                card.length > 0 && card.forEach(cards => {
                    cards.addEventListener('click', function(){
                        const cardid = this.getAttribute('data-id')
                        if (cardid) {
                            window.location.assign(`http://127.0.0.1:5500/pages/card.html?id=${cardid}`)
                        }
                    })
                    let shopnd = document.getElementById('shoping')
                    shopnd.style.cursor = 'pointer'
                    if (shopnd) {
                        shopnd.addEventListener('click', function(){
                            window.location.assign('http://127.0.0.1:5500/pages/page.html')
                        })
                    }
                });
            }
            

            let category = document.getElementById('categoryFilter');
            category.addEventListener('change', function(e) {
                let category1=e.target.value
                fetch(`https://cars-pagination.onrender.com/products`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    let data1 = data.filter(value=>{
                        return value.category == category1
                    })

                    console.log(data1);
                    wrapper.innerHTML = ''
                    data1.forEach(item=>{
                        let card=cratecard(item)
                        wrapper.innerHTML += card
                    })

                    
                    let card = document.querySelectorAll('.card')
                    card.length > 0 && card.forEach(cards => {
                        cards.addEventListener('click', function(){
                            const cardid = this.getAttribute('data-id')
                            if (cardid) {
                                window.location.assign(`http://127.0.0.1:5500/pages/card.html?id=${cardid}`)
                            }
                        })
                    });
                    
                

                })
            });
    
  
   
    




       
});


            
            
            
            
            let senaone = document.getElementById('sena1');
            senaone.addEventListener('click', function(e){
                e.preventDefault();
                
                
               
                getdata('https://cars-pagination.onrender.com/products/filter?minPrice=5000&maxPrice=79000')
                    .then(newData => {
                       
                        if (newData.length > 0) {
                            loader.style.display = 'none';
                            wrapper.innerHTML = ''; 
                            newData.forEach(product => {
                                let card = createcard(product);
                                wrapper.innerHTML += card;
                            });
                        } 
                        
                        let card = document.querySelectorAll('.card')
                        card.length > 0 && card.forEach(cards => {
                            cards.addEventListener('click', function(){
                                const cardid = this.getAttribute('data-id')
                                if (cardid) {
                                    window.location.assign(`http://127.0.0.1:5500/pages/card.html?id=${cardid}`)
                                }
                            })
                        });
                    

                    
                    })


                    
                    
                 
                    .catch(error => {
                        console.error(error);
                    });
            });
        }) 

        
       
        

      



        












let wring = document.getElementById('wring');

document.addEventListener('DOMContentLoaded', function() {
    getdata('https://cars-pagination.onrender.com/products')
        .then(data => {

         
            if (data.length > 0) {
                
                let slise  = data.slice(0, 4);
                slise.forEach(product => {
                    let card = cretecard(product);
                    wring.innerHTML += card;
                });
                let card = document.querySelectorAll('.card')
                card.length > 0 && card.forEach(cards => {
                    cards.addEventListener('click', function(){
                        const cardid = this.getAttribute('data-id')
                        if (cardid) {
                            window.location.assign(`http://127.0.0.1:5500/pages/card.html?id=${cardid}`)
                        }
                    })
                });
            
            }
            
        })
        
        .catch(error => {
            console.error(error);
        });
});


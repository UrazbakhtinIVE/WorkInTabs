document.addEventListener('DOMContentLoaded',()=>{
    const tabBtn = document.querySelectorAll('.tabs__nav-btn');
    const tabItems = document.querySelectorAll('.tab__item');


    tabBtn.forEach((item)=>{
       item.addEventListener('click',()=>{
            let currentBtn = item;
            let tabID = currentBtn.getAttribute('data-tab');
           let currentTab = document.querySelector(tabID);
            
            tabBtn.forEach((item)=>{
                item.classList.remove('active');
            });

            tabItems.forEach((item)=>{
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');

       });
       
    });
    

});

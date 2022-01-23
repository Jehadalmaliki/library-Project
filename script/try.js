const get_one = (element) => document.querySelector(element);
const product_list = get_one('#product')
const damoData = [
    {
        id: 0,
        name: 'لانك الله',
        title: 'كتاب الكتروني',
        price: "3.22",
        img: "img/b3.jpg",
    },
    {
        id: 0,
        title: 'كتاب الكتروني',
        name: ' لماولا ',
        price: "19.22",
        img: "img/b3.jpg",
    },
    {
        id: 0,
        title: 'كتاب الكتروني',
        name: ' نون النسوه',
        price: "19.22",
        img: "img/b4.jpg",
    },
    {
        id: 0,
        title: 'كتاب الكتروني',
        name: 'الحياة والحب  ',
        price: "19.22",
        img: "img/b3.jpg",
    },
    {
        id: 0,
        title: 'كتاب الكتروني',
        name: 'كن انت  ',
        price: "19.22",
        img: "img/b2.jpg",
    },
    {
        id: 0,
        title: 'كتاب الكتروني',
        name: 'علم النفس  ',
        price: "19.22",
        img:"img/b3.jpg",
    },
]
window.onload = () => {
    _fetchData(damoData)
}
const _fetchData = (arr) => {
    arr.forEach(element => {
        let li_element = document.createElement('div');
        li_element.innerHTML = `
        
        <img src=${element.img}>
          <div class="content">
              <h3> <img src="img/svg/svgexport-57.svg">  ${element.title}</h3>
              <p class ="book">   ${element.name} </p>
              <div class="price">  ${element.price} <span>ريال سعودي</span> </div>
             <div class="btn"><a href="cart.html" class="btn"><img src="img/svg/svgexport-56.svg"><img src="img/svg/svgexport-21.svg"><img src="img/svg/svgexport-55.svg"></a></div> 
             <p>ينتهي العرض</p><span id="demo"> </span>
          </div>
      `;
        li_element.classList.add('box')
        product_list.append(li_element);
    })
    console.log('i am the loop element', arr);
}
// get_one('#search_btn').addEventListener('click', (e) => {
// })
// document.addEventListener('keydown')
get_one('#search_input').addEventListener('keydown', async (e) => {
    product_list.innerHTML = '';
    console.log(e.target.value);
    let filter = damoData.filter(element => {
        if (element.name.includes(e.target.value))
            return element
    })
    console.log('[filter ] , ', filter);
    await _fetchData(filter);
    if (e.target.value.length === '') {
        _fetchData(damoData)
    }
})







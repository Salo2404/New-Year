let poems = [
    {
        poemText:
            `<p>
            Новый год — новая страница жизни. <br>
            Так пусть на ней не будет пустого места, <br>
            пусть она заполнится множеством красок, <br>
            ярких событий и приключений. <br>
            Пусть в новом году вам сопутствует удача, успех и достаток.<br>
             Наслаждайтесь каждым мгновением вашей жизни, будьте с любимыми, <br>
             окружайте себя и своих близких теплом и заботой, <br>
             согревайте их своей любовью, а они в ответ согреют вас. <br>
             Будьте счастливы, с Новым годом!<br>
                        
        </p>`

    },
    {
        poemText:
            `<p>
            С Новым годом! С новым счастьем! Широких возможностей, <br>
            фантастического везения, потрясающих сюрпризов, <br>
            волнительных эмоций, завораживающих моментов. <br>
            Пусть Новый год принесет вдохновение, процветание, долголетие, бодрость, жизнелюбие и стабильность. <br> 
            Подарков, сюрпризов, фейерверков, улыбок и успеха. <br>
            Поздравляю!


                    
        </p>
        <p>
            Здоровье будет пусть, любовь,<br>
            Всё остальное — достижимо.<br>
            А то, что портит людям кровь,<br>
            Пусть навсегда проходит мимо!<br>
        </p>`,
        bg: `url('img/christmas-decorations-on-blue-surface.jpg')`
    },
    {
        poemText:
            `<p>
            Пришла пора, когда всем можно <p>
            О новых планах помечтать, <p>
            Задумать что-то осторожно <p>
            Да всё под елкой загадать. <p>
            Рад я поздравить с Новым годом! <p>
            А поздним этим вечерком <p>
            Вас Дед Мороз пусть мимоходом <p>
            Одарит счастьем и теплом. <p>
            К вам прибежит оленей стадо <p>
            ... они подарки принесут. <p>
            Реки добра вам и услады, <p>
            У вас царит пускай уют. <p>
        </p>`,
        bg: `url('img/top-view-festive-christmas-ornaments.jpg')`
    }
]

let wrapper = document.querySelector('.wrapper');
let btn = document.getElementById('btn');
let poem = document.querySelector('.poem');

btn.addEventListener('click', function () {

    let randomIndex = Math.floor(Math.random() * poems.length);
    poem.innerHTML = '';
    poem.innerHTML = poems[randomIndex].poemText;
})
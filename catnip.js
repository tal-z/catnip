var catLinks = [
    'https://upload.wikimedia.org/wikipedia/commons/5/5e/Sleeping_cat_on_her_back.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6d/Persian_cat_in_the_car.png',
    'https://upload.wikimedia.org/wikipedia/commons/3/3e/Cat_28.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/27/Cat_eyes_2007-1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mitzibotz_the_cat_%282%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b6/Felis_catus-cat_on_snow.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Female_domestic_cat_black_and_white_05.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Mating_Cats_%28Domestic_cats%29_in_Kannur.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/19/Cat_yawn_with_exposed_teeth_and_claws.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e9/Cat_in_tree02.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/29/Cats_wearing_Christmas_decoration%3B_December_2019_%2805%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/3d/A_beautiful_cat.1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/88/Cat%27s_belly_in_sunlight.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/29/Big_Fat_Red_Cat.jpg'
]

var imgs = document.getElementsByTagName("img");

for (var i = 0; i < imgs.length; i++) {
    let catLink = catLinks[Math.floor(Math.random() * catLinks.length)];
    imgs[i].src = catLink;
}
var catLinks = [
  "https://upload.wikimedia.org/wikipedia/commons/5/5e/Sleeping_cat_on_her_back.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6d/Persian_cat_in_the_car.png",
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Cat_28.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/2/27/Cat_eyes_2007-1.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Mitzibotz_the_cat_%282%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b6/Felis_catus-cat_on_snow.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Female_domestic_cat_black_and_white_05.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/62/Mating_Cats_%28Domestic_cats%29_in_Kannur.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/19/Cat_yawn_with_exposed_teeth_and_claws.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e9/Cat_in_tree02.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/2/29/Cats_wearing_Christmas_decoration%3B_December_2019_%2805%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3d/A_beautiful_cat.1.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/8/88/Cat%27s_belly_in_sunlight.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/2/29/Big_Fat_Red_Cat.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bc/Maine_Coon_Meowing.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/17/Litter_of_kittens.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9f/Cat_17.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bd/Cat_Sitting_On_Himself.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/35/Cat_Mitzi_3.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d1/Cat_and_Kitten.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5a/Cat_on_balcony.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Cat_25.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/46/Tabby-cat_brown_our_new_pet_30062015_5046.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c7/Larry_the_cat_standing_on_grass_and_licking_his_nose_in_Auderghem%2C_Belgium_%28DSCF2372%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e9/Stray_cat_at_Kyoto_Imperial_Palace%2C_Kyoto_Prefecture%3B_June_2010_%2814%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Blue-eyed_cat_in_Juan_Jos%C3%A9_R%C3%ADos%2C_Sinaloa%2C_Mexico.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/65/A_tower_cat_in_a_cat_tower_%285494228431%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/2/27/Cat_eyes_2007-1.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/8/83/Cat_-_2020-01-02_-_Cat_and_its_toys_-_3537.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/ff/Cat_in_home.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Super_mofumofu_cat_%288113011025%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5f/%D0%9A%D0%BE%D1%82%D0%B5%D0%B9%D0%BA%D0%B0.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e1/PER_Fluffy_Fancy_Antony_%285468904014%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/46/Closed_Eyes_Cat_0681-1.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7b/Ragdoll_Cat_Eyes_ACAS-RG-5.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/b/ba/A_Heterochromia_iridum_Eyes_Cat.jpg"
];

var imgs = document.getElementsByTagName("img");

for (var i = 0; i < imgs.length; i++) {
  let catLink = catLinks[Math.floor(Math.random() * catLinks.length)];
  imgs[i].src = catLink;
}

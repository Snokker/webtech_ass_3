//Function to fill a text file with insert queries. 
window.onload()
{
    var manufacturers = ['Femke', 'Margriet', 'FemkeEnMargriet', 'MargrietEnFemke', 'Margke', 'Femgriet', 'Greta', 'Gerda', 'China', 'John Snow'];
    var categories = ['Hobby', 'Hackerman', 'Non-Alcoholic', 'Juice', 'Yoga-pants', 'Avocado', 'Home-sweet-home products', 'Good shit', 'Medium shit', 'Only for the rich'];
    var title = ['Scissors', 'Box', 'Plastic Box', 'Hot Glue Pistol', 'Hot Glue',
        'Mirror', 'Rock', 'Prestigious Rock', 'Rock for the poor', 'Boombox',
        'Used car', 'Good music mp3', 'Toothbrush', 'Paint', 'Chocolate',
        'Seven Cats', 'A dead rat', 'Led Lights', 'Definitely not drugs', 'Google?',
        'Tote Bag', 'Awkward turtle', 'Shooting star', 'Kazoo', 'Saxophone',
        'Clown suit', 'Yoga Mat', 'Piggy Bank(money not included)', 'Emo lipstick', 'Tomato'];

}

function fillDB()
{

    text = '';
    for (var i = 0; i < title.length;) {
        text += 'INSERT INTO PRODUCT VALUES('
            + title[chooseRandomIndex(1, title.length)] + ','
            + manufacturers[chooseRandomIndex(1, manufacturers.length)] + ','
            + categories[chooseRandomIndex(1, categories.length)] + ','
            + chooseRandom(2, 2000) + "';";
    }
}

function chooseRandom(min, max)
{
    return Math.random() * (max - min + 1) + min;
}

function chooseRandomIndex()
{
    return Math.floor(Math.random() * items.length);
}
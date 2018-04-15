//Function to fill a text file with insert queries. 

    var manufacturers = ['Femke', 'Margriet', 'FemkeEnMargriet', 'MargrietEnFemke', 'Margke', 'Femgriet', 'Greta', 'Gerda', 'China', 'John Snow'];
    var categories = ['Hobby', 'Hackerman', 'Non-Alcoholic', 'Juice', 'Yoga-pants', 'Avocado', 'Home-sweet-home products', 'Good shit', 'Medium shit', 'Only for the rich'];
    var title = ['Scissors', 'Box', 'Plastic Box', 'Hot Glue Pistol', 'Hot Glue',
        'Mirror', 'Rock', 'Prestigious Rock', 'Rock for the poor', 'Boombox',
        'Used car', 'Good music mp3', 'Toothbrush', 'Paint', 'Chocolate',
        'Seven Cats', 'A dead rat', 'Led Lights', 'Definitely not drugs', 'Google?',
        'Tote Bag', 'Awkward turtle', 'Shooting star', 'Kazoo', 'Saxophone',
        'Clown suit', 'Yoga Mat', 'Piggy Bank(money not included)', 'Emo lipstick', 'Tomato'];
    fillDB();


function fillDB()
{

    text = '';
    for (var i = 0; i < title.length;i++) {
        text += 'INSERT INTO PRODUCT VALUES('
            + title[chooseRandomIndex(1, title.length)] + ','
            + manufacturers[chooseRandomIndex(1, manufacturers.length)] + ','
            + categories[chooseRandomIndex(1, categories.length)] + ','
            + chooseRandom(2, 2000) + "';" + "\n";
    }
    console.log(text);
}

function chooseRandom(min, max)
{
    return Math.random() * (max - min + 1) + min;
}

function chooseRandomIndex(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function WriteToFile() {
    var txt = new ActiveXObject("Scripting.FileSystemObject");
    var s = txt.CreateTextFile("11.txt", true);
    s.WriteLine(text);
    s.Close();
}
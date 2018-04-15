window.onload = function () {
    //Array of xmlfiles, if time left, put them in seperate files!
    var xmlFiles =
        ["<rss version='2.0'><channel><baseLink>Where to get all this amazing stuff?</baseLink><content>It's difficult sometimes to get good stuff, but of course we know everything about that. We're pros after all! Take a good look at our amaaaaazing webshop, we garantee at least something you need can be found there! </content><contentLink>Index.html</contentLink></channel></rss>",
            "<rss version='2.0'><channel><baseLink>I don't know how to start? </baseLink><content>Take a look at our first tutorial, that'll get you started! </content><contentLink>Index.html</contentLink></channel></rss>",
            "<rss version='2.0'><channel><baseLink>I have too much money and I don't know how to spend it???</baseLink><content>Shhhhhh, we'll take care of you, just click on the link</content><contentLink>Index.html</contentLink></channel></rss>",
            "<rss version='2.0'><channel><baseLink>I want to be a beautiful unique snowflake, but how?!</baseLink><content> We know how it feels (to be beautiful unique snowflakes, that is), that's why we made a tutorial about it! </content><contentLink>Index.html</contentLink></channel></rss>"
        ];
    xmlFiles.forEach(function (element) {
        xmlToBase(element);
    });

    //Take every object with BaseLink class and add toggle function to children
    $('.BaseLink').children().hide();
    $('.BaseLink').click(function () {
        $(this).children().toggle(400, "swing", function () { }, function () { });
    });
}

//Function to parse small xml files into elements with the right classes. 
function xmlToBase(xml)
{
    //Parsing xml document containing elements https://api.jquery.com/jQuery.parseXML/
    var domSection = document.getElementById("knowledgeSection");
    xmlDoc = $.parseXML(xml),
    $xml = $(xmlDoc),
    $title = $xml.find('baseLink');
    $content = $xml.find('content');
    $contentLink = $xml.find('contentLink');

    //Title
    var baseLink = document.createElement("h2");
    baseLink.appendChild(document.createTextNode($title.text()));
    baseLink.setAttribute("class", "BaseLink");
    //Content
    var baseContent = document.createElement("p");
    baseContent.appendChild(document.createTextNode($content.text()));
    baseContent.setAttribute("class", "BaseContent");
    baseLink.appendChild(baseContent);
    //Link
    var contentLink = document.createElement("a");
    contentLink.appendChild(document.createElement("LINK"));
    contentLink.href = $contentLink.text();
    contentLink.textContent = "\n" + "Go to original page";
    contentLink.setAttribute("class", "ContentLink");
    baseContent.appendChild(contentLink);

    //append everything to the section in html
    domSection.appendChild(baseLink);
}

class BaseLink {
    constructor(name, link, content) {
        this.name = name;
        this.link = link;
        this.content = content;
    }

}

class BaseContent extends BaseLink {
    constructor(name, parent) {
        super(name);
        this.parent = parent;
    }
}

class ContentLink extends BaseContent {
    constructor(name, parent, image)
    {
        super(name);
        this.parent = parent;
        this.image = image;
    }
}

if (typeof jQuery != 'undefined') {
    alert('HAA');
};

class Page {
    constructor(name, link)
    {
        this.name = name;
        this.talk = function () {
            this.addEventListener("click", showChildren, false);
        }
    }

}
class DIY extends Page {
    constructor(name, parent) {
        super(name);
        this.parent = parent;
    }
}

class DIYImage extends DIY {
    constructor(name, parent, image)
    {
        super(name);
        this.parent = parent;
        this.image = image;
    }
}

function getNav(e)
{
    var x = e.clientX;
    var y = e.clientY;
    var p1 = document.getElementById("p1");
    p1.innerHTML = "X-coord: " + x + " Y-coord: " + y;
    e.target.innerHTML = "Target element: " + e.target.id;
    var pages = [];
    var pageObjects = [];
    pages = document.getElementsByClassName("navLink");
    for (var i = 0; i < pages.length; i++) {
        var pageName = pages[i].getInnerHTML;
        var pageLink = pages[i].getAttribute("href");
        pageObjects[i] = new Page(pageName, pageLink);
    }
    document.addEventListener("load", showLinks(pages), false);
}

function showLinks(links)
{
    document.getElementById("main").innerHTML = "test";
    //Does not work yet, unfortunately :(
    for (var i = 0; i < links.length; i++)
    {
        document.getElementById("main").innerHTML += links[i].name + '/n';
        document.getElementById("main").getAttribute("href") = links[i].link;
    }
    
}

function showCoords(e) {
    var x = e.clientX;
    var y = e.clientY;
    var p1 = document.getElementById("p1");
    p1.innerHTML = "X-coord: " + x + " Y-coord: " + y;
    e.target.innerHTML = "Target element: " + e.target.id;

}
function registerEvents() {
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    p2.addEventListener("click", showCoords, false);
    p3.addEventListener("click", getNav, false);

}
window.addEventListener("load", registerEvents, false);


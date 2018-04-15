//https://www.flotcharts.org/flot/examples/series-pie/index.html
//http://www.pikemere.co.uk/blog/flot-how-to-create-pie-charts/

//javascript for plot page

var data = [
    { label: "randomly", data: 5.5, color: "#ffccff" },
    { label: "with a DIY boat (coming soon)", data: 19.01, color: "#cc99ff" },
    { label: "with THE INTERNET", data: 9.3, color: "#99ccff" },
    { label: "We find you", data: 50.99, color: "#ccccff" },
    { label: "wormhole", data: 11.5, color: "#ccffff" },
    { label: "Other", data: 3.7, color: "#ccffcc" }
];

$(document).ready(function () {
    $.plot($("#piechart"), data, {
        series: {
            pie: {
                show: true
            }
        },
        legend: {
            labelBoxBorderColor: "none"
        },
        grid: {
            hoverable: true,
            clickable: true
        }
    });

    $("#piechart").bind("plotclick", function (event, pos, obj) {
        $('#values').text(data[obj.seriesIndex].data);
    });

});

//<!--<script type= "text/javascript" >
//    https://www.youtube.com/watch?v=1OJGX1VGCVQ
//var data, data1, options, chart;
//data1 = [[1, 4], [2, 5], [3, 6], [4, 9], [5, 7], [6, 6], [7, 2], [8, 1], [9, 3]];
//data = [data1];
//options = {};
//$(document).ready(function () {
//    chart1 = $.plot($("#Placeholder"), data, options);
//})

//</script > -->
'use strict';

let index = {i1: 0, i2: 0, i3: 0, i4: 0, i5: 0, i6: 0};

function generateDefaultTime() {
    let parent = $('#my-clock');

    let h1 = $('<img/>', {
        src: imagesData[0],
        id: "h-1",
        alt: "H"
    });
    let h2 = $('<img/>', {
        src: imagesData[0],
        id: "h-2",
        alt: "H"
    });

    let doubleDotHM = $('<img/>', {
        src: img_details[1],
        id: "HM",
        alt: ":"
    }).addClass('points');

    let m1 = $('<img/>', {
        src: imagesData[0],
        id: "m-1",
        alt: "M"
    });
    let m2 = $('<img/>', {
        src: imagesData[0],
        id: "m-2",
        alt: "M"
    });

    let doubleDotMS = $('<img/>', {
        src: img_details[1],
        id: "MS",
        alt: ":"
    }).addClass('points');

    let s1 = $('<img/>', {
        src: imagesData[0],
        id: "s-1",
        alt: "S"

    });
    let s2 = $('<img/>', {
        src: imagesData[0],
        id: "s-2",
        alt: "S"
    });

    $(parent).append(h1, h2, doubleDotHM, m1, m2, doubleDotMS, s1, s2);

}
function showTime() {
    let timeNow = new Date();

    let sec1 = timeNow.getSeconds();
    let sec2 = sec1%10;
    sec1/=10;
    sec1=parseInt(sec1);

    let min1 = timeNow.getMinutes();
    let min2 = min1%10;
    min1/=10;
    min1=parseInt(min1);

    let hour1 = timeNow.getHours();
    let hour2 = hour1%10;
    hour1/=10;
    hour1=parseInt(hour1);

    index['i1'] = sec2;
    index['i2'] = sec1;
    index['i3'] = min2;
    index['i4'] = min1;
    index['i5'] = hour2;
    index['i6'] = hour1;


    $('#s-1').attr('src', imagesData[index['i2']]);
    $('#s-2').attr('src', imagesData[index['i1']]);
    $('#m-1').attr('src', imagesData[index['i4']]);
    $('#m-2').attr('src', imagesData[index['i3']]);
    $('#h-1').attr('src', imagesData[index['i6']]);
    $('#h-2').attr('src', imagesData[index['i5']]);
}

$(document).ready(function () {
    let startTime;
    let records = [];
    let averageTime;
    averageTime = ("--:--:--")
    $('.start').click(function () {
        $(this).addClass('none');
        $('.stop').removeClass('none')
        startTime = $.now();
    })
    $('.stop').click(function () {
        $(this).addClass('none');
        $('.start').removeClass('none')


        let endTime = $.now();
        let diff = endTime - startTime; // 이번에 걸린 시간(밀리초)

        let min = String(Math.floor(diff / 60000)).padStart(2, '0');
        let sec = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
        let ms = String(Math.floor((diff % 1000) / 10)).padStart(2, '0');

        $('.record').append('<p>' + min + ":" + sec + ":" + ms + '</p>');

        records.push(diff);

        let total = 0;
        for (let i = 0; i < records.length; i++) {
            total += records[i];
        }

        let avgDiff = total / records.length;

        let avgMin = String(Math.floor(avgDiff / 60000)).padStart(2, '0');
        let avgSec = String(Math.floor((avgDiff % 60000) / 1000)).padStart(2, '0');
        let avgMs = String(Math.floor((avgDiff % 1000) / 10)).padStart(2, '0');

        averageTime = ("平均 " +avgMin + ":" + avgSec + ":" + avgMs)
        $('.average p').text(averageTime);
    })
})
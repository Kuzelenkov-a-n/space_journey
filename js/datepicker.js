let date = new Date();
date.setDate(date.getDate() + 1);

let booked = [
    [1,1], [7,1],
    [23,2], [23,2], [23,2], [23,2],
    [20,3], [25,3], [26,3], [30,3],
    [1,4], [2,4], [10,4], [15,4],
    [5,5], [6,5], [7,5], [20,5],
    [2,6], [3,6], [4,6], [30,6],
    [1,7], [7,7], [8,7], [12,7],
    [9,8], [13,8], [14,8], [25,8],
    [6,9], [7,9], [10,9], [19,9],
    [2,10], [5,10], [20,10], [21,10],
    [4,11], [5,11], [9,11], [28,11],
    [1,12], [2,12], [3,12], [4,12],
];

$(function () {
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $(".datepicker").datepicker({
        beforeShowDay: function(date){
            for (let i = 0; i < booked.length; i++) {
                if (booked[i][0] === date.getDate() && booked[i][1] - 1 === date.getMonth()) {
                    return [false];
                }
            }
            return [true];
        },
        minDate: date,
    });
})

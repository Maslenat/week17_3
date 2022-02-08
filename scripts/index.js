function formatDate(date) {
    let k = new Date() - date;
    if (k < 1000) {
        return "Прямо сейчас";
    }
    let s = Math.floor(k / 1000);
    if (s < 60) {
        return `${s} секунд назад`
    }
    let m = Math.floor(k / 60000);
    if (m < 60) {
        return `${m} минут назад`
    } else {
        let d;
        let data = date.getDate();
        if (data < 10) data = '0' + data;
        let month = date.getMonth() + 1;
        if (month < 10) month = '0' + month;
        let year = date.getFullYear();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let min = date.getMinutes();
        if (min < 10) min = '0' + min;

        d = `${data}.${month}.${year}, ${hours}:${min} `;




        return d;
    }



}







alert(formatDate(new Date(new Date - 1)));

alert(formatDate(new Date(new Date - 30 * 1000)));

alert(formatDate(new Date(new Date - 5 * 60 * 1000)));

alert(formatDate(new Date(new Date - 86400 * 1 * 1000)));
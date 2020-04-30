export function addDays(date, days) {
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    return copy
}

export function monthToString(month){
    switch(month){
        case 0: return 'January';   case 1: return 'February';  case 2: return 'March';     case 3: return 'April';
        case 4: return 'May';       case 5: return 'June';      case 6: return 'July';      case 7: return 'August';   
        case 8: return 'September'; case 9: return 'October';   case 10: return 'November'; case 11: return 'December';
        default: return '';
    }
}

export function dateToString(date){
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.getMonth();
    const year = date.getFullYear();
    return monthToString(month) + ' ' + day + ', ' + year;
}

export function dateTrim(timestamp){
    return timestamp.substring(0,10);
}

export function dateToPostgresString(date){
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
}
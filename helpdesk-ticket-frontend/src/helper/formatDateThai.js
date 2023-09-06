import { format } from 'date-fns-tz'
import { th } from 'date-fns/locale'


const formatDateThai = (date) => {

    const isoDateString = date;
    const thaiDate =  format(new Date(isoDateString), 'dd-MM-yyyy HH:mm:ss', {
        timeZone: 'Asia/Bangkok',
        locale: th,
    });

    return thaiDate
}

export default formatDateThai
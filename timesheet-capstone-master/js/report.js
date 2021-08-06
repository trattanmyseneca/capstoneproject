const moment = require("moment");

const isEmpty = (value) => {
    if (value === '')
        return true;
    else
        return false;
}
const validateUser = (userName_Session, userName_Page) => {
    if (!isEmpty(userName_Page.trim())) {
        if (userName_Session === userName_Page) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
const validateDate = (date) => {
    if (!isEmpty(date.trim())) {
        if (moment(date, "DD-MMM-YYYY").isValid()) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
    //return true;
}
const validateDateRange = (startDate, endDate) => {
    var sDate = moment(startDate, 'DD-MMM-YYYY');
    var eDate = moment(endDate, 'DD-MMM-YYYY');
    var days = eDate.diff(sDate, 'days');
    if (days > 0) {
        return true;
    }
    else {
        return false;
    }
}



module.exports = { validateUser, validateDate, validateDateRange }

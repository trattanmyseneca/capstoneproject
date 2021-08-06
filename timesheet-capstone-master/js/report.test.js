const reportFunctions=require('./report');
const validateUser = reportFunctions.validateUser;
const validateDate = reportFunctions.validateDate;
const validateDateRange = reportFunctions.validateDateRange;
test('validateUser()', () => {
    var userName_Session = "abc";
    var userName_Page = "abc";
 let   result = validateUser(userName_Session,userName_Page);
    expect(result).toBe(true);
});


test('validateDate()', () => {
    let result = validateDate('28-Feb-2021');
    expect(result).toBe(true);
});

test('validateDateRange()', () => {
    let result = validateDateRange('28-Feb-2021','1-Mar-2021');
    expect(result).toBe(true);
});

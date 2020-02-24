module.exports = function repeater(str, options) {

    str = new String(str).toString();

    if(options == null || options == undefined) return str;

    let {
        repeatTimes,
        separator,
        addition,
        additionRepeatTimes,
        additionSeparator
    } = options;

    separator = options.separator || '+';
    repeatTimes = options.repeatTimes || 1;
    additionRepeatTimes = options.additionRepeatTimes || 1;

    for(let key in options) {
        console.log(key + ' ' + options[key]);
    }

    let len= additionSeparator ? additionSeparator.split('').length : 0;

    if(addition === undefined) {
        return (str + separator).repeat(repeatTimes - 1) + str;
    } else {
        let len = additionSeparator ? additionSeparator.length : '';
        let strRepeat = str + (new String(addition).toString() + (additionSeparator ? additionSeparator : '')).repeat(additionRepeatTimes);
        return (strRepeat.substring(0, strRepeat.length - len) + separator).repeat(repeatTimes - 1) + strRepeat.substring(0, strRepeat.length - len);
    }

};
  
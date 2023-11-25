
export function isInputEmpty(value: string) {
    if (value == '') {
        return ({ msg: '', success: false })
    }
    else {
        return ({ msg: '', success: true })
    }
}

export function validateMobileNumber(number: string) {
    var mob = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (number === "") {
        return ({ msg: 'Please enter mobile number', success: false })
    } else if (mob.test(number) == false || number as any < 6000000000) {
        return ({ msg: 'Invalid mobile number', success: false })
    }
    return ({ msg: '', success: true })
}
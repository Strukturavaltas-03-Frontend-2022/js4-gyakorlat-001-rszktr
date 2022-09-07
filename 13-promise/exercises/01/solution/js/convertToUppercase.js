const convertToUppercase = (array) => {
    return new Promise((resolve, reject) => {
        if (array.every(item => typeof item == 'string')) {
            resolve(array.map(item2 => item2.toLocaleUpperCase()))
        } else {
            reject(new Error('Error: Not all items in the array are strings!'))
        }
    })
}

export default convertToUppercase;

const sortStrings = (array) => {
    return new Promise((resolve, reject) => {
        try {
            array.every(item => typeof item === 'string')
        }
        catch (error) {
            reject(new Error('Error: Something went wrong with sorting words!'))
        }
        if (array.every(item => typeof item === 'string')) {
            try {
                array.sort();
            } catch (error) {
                reject(new Error('Error: Something went wrong with sorting words!'));
            }
        } else {
            reject(new Error('Error: Not all items in the array are strings!'))
        };
        resolve(array.sort())
    })
}


export default sortStrings;

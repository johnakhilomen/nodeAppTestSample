module.exports.Sum = (a, b) =>
{
    if(!a && !b)
    {
        throw new Error("Function called without parameters");
    }
    return a + b;
}

module.exports.SumWithPromise = (a,b) => {
    return new Promise((resolve, reject) => {
        if(!a && !b)
        {
            const err = "Function called without parameters";
            reject(err);
        } 
        const sum = a + b;
        resolve(sum);
    })
}

module.exports.SumWithCallback = (a, b, callback=()=>{}) => {
    return new Promise((resolve, reject) => {
        if(!a && !b)
        {
            const err = "Function called without parameters";
            reject(err);
            return callback(err);
        } 
        const sum = a + b;
        resolve(sum);
        return callback(sum);
    })
}


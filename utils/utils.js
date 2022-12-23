module.exports.checkName = (exoplanetName) => {
    if (exoplanetName === undefined || exoplanetName === '') {
        return false
    }
    const regex = /^[A-Z]+$/
    const matchFound = exoplanetName.match(regex)
    
    return matchFound === null || matchFound.length === 0 ? false : true;
}

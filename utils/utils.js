module.exports.checkName = (exoplanetName) => {
    if (exoplanetName === undefined || exoplanetName === '') {
        return false
    }
    const regex = /^[A-Z]+$/
    const matchFound = exoplanetName.match(regex)

    if (matchFound === null || matchFound.length === 0) {
        return false
    } else {
        return true
    }
}

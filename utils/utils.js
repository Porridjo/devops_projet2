module.exports.checkName = (name) => {
    const regex = /^[A-Za-z\.-]*$/
    const result = regex.test(name)
    return result
}

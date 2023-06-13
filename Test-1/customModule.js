exports.myDateTime = function() {
    const date = new Date();

    return `Current Date - ${date.getDate()} \n Current time - ${date.getHours()}:${date.getMinutes()}`;

};
// export default myDateTime()
// console.log(myDateTime())

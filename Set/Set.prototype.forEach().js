function logSetElements(value1, value2, set) {
    console.log("s[" + value1 + "] = " + value2);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

// logs:
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"


new Set(["foo", "bar", undefined]).forEach((e1,e2,set) =>{
    console.log(e1,e2)
});
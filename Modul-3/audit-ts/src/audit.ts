function getLength(value : string | number): number{
    if (typeof value === "string"){
        return value.length;
    }
    return 0;
}

console.log(getLength("Nao"));
console.log(getLength(20));
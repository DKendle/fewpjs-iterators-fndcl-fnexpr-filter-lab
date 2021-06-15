function findMatching(drivers, string){
    drivers.filter(name => {
        return name.toLowerCase === string.toLowerCase})
}
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames() {
    function actuallyPrintingNames() {
        for (var index = 0; index < printNames.lenght; index++) {
            var name = names[index];
            console.log(name + " I was found at index " + index);
        }
        console.log("Name and index after loop is " + name + ": "+ index);
    }
    actuallyPrintingNames();
}
printNames(beatles);
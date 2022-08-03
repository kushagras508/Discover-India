//initialization
function makeNode(ch) {
    this.ch = ch;
    this.isTerminal = false;
    this.map = {};
    this.words = [];
}

// recursive function to add new node
function add(str, i, root) {
    //base case
    if (i === str.length) {
        root.isTerminal = true;
        return;
    }
    //calculation task
    if (!root.map[str[i]])
        root.map[str[i]] = new makeNode(str[i]);

    root.words.push(str);
    //recursive call
    add(str, i + 1, root.map[str[i]]);
}
// recursive function to search from existing list
function search(str, i, root) {
    //base case
    if (i === str.length)
        return root.words;
    //calucation task
    if (!root.map[str[i]])
        return []; // if map doest contain value return empty list

    //recursive cal
    return search(str, i + 1, root.map[str[i]]);

}

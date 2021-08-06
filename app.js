console.log(sum(2, 4));



function sum(x, y) {
    //check data types first and throw error
    try {
        if (typeof (x) != "number" || typeof (y) != "number") {
            throw "Input is wrong type";
        } else {
            return x + y;
        }
    } catch (err) {
        console.log(err);
    }
}

try {
    console.log(sum(1, 2));
} catch (err) {
    console.log(err);
}
var user = { username: "sam", password: "123abc" };
login("sam", "123abc");

function login(username, password) {
    try {
        if (username == user.username && password == user.password) {
            throw "Login successful";
        } else {
            throw "Wrong information";
        }
    } catch (err) {
        console.log(err);
    }
}
try {
    login("sam", "123abc");
    login("am", "12abc");
} catch {
    console.log(err);
}
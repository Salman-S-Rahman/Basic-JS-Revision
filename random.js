var result = Math.floor(Math.random() * 10 + 1);
console.log("random value = " + result);

// ================ 1 to 10 random value generator ==================

function valueGenerator(n) {
    for (var i = 0; i < 10; i++) {
        var result = Math.floor(Math.random() * n + 1);
        console.log("printed 10 times 1 to 10 random value = " + result);
    }

}
valueGenerator(10)

//========= 1 to 10 random value generator by Function & loop ============

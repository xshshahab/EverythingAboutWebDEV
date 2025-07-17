// Example 1: TDZ with let
try {
    console.log(a); // Throws ReferenceError due to TDZ
    let a = 10;
} catch (err) {
    console.error("Example 1 Error:", err.message);
}

// Example 2: TDZ with const
try {
    console.log(b); // Throws ReferenceError due to TDZ
    const b = 20;
} catch (err) {
    console.error("Example 2 Error:", err.message);
}

// Example 3: TDZ inside a block
{
    try {
        console.log(c); // Throws ReferenceError
        let c = 30;
    } catch (err) {
        console.error("Example 3 Error:", err.message);
    }
}

// Example 4: Comparison with var (no TDZ)
try {
    console.log(d); // Outputs: undefined (no error)
    var d = 40;
    console.log("Example 4:", d); // Outputs: 40
} catch (err) {
    console.error("Example 4 Error:", err.message);
}


/**
 Example 1 Error: Cannot access 'a' before initialization
 Example 2 Error: Cannot access 'b' before initialization
 Example 3 Error: Cannot access 'c' before initialization
 Example 4: undefined
 Example 4: 40

 */
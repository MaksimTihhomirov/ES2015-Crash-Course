function sum(...numbers) {
    return numbers.reduce(
        (prev, current) => prev + current
    
    );
}

sum(1,2,3); // 6
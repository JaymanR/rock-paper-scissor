
function getComputerChoice() {
    const random = Math.floor(Math.random()*3) + 1;
    console.log(random);

    switch(random) {
        case 1:
            return `Rock`;
        case 2:
            return `Paper`;
        case 3:
            return `Scissor`;
    }
    
}
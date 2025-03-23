


function generateRandomHex() {
    
    const randomNum = Math.floor(Math.random() * 256);
    const hexValue = randomNum.toString(16).padStart(2, '0');
    
    if (hex(hexValue)) {
        console.log(`Generated Hexadecimal Value: #${hexValue}`);
        return `#${hexValue}`;
    } else {
        console.log('Invalid Hex Value Generated');
        return null;
    }
}

function hex(value) {
    const hexRegex = /^[0-9a-fA-F]{2}$/;
    return hexRegex.test(value);
}


generateRandomHex();
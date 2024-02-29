// Initialize memory variable
let memory = 0;
// Initialize conversion mode variable
let isConversionMode = false;

// Function to append values to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to perform basic arithmetic calculations
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Function to handle arithmetic operations
function operation(operator) {
    document.getElementById('display').value += operator;
}

// Function to calculate square root
function calculateSquareRoot() {
    const currentValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(currentValue) && currentValue >= 0) {
        document.getElementById('display').value = Math.sqrt(currentValue);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

// Function to calculate percentage
function calculatePercentage() {
    const currentValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(currentValue)) {
        document.getElementById('display').value = currentValue / 100;
    } else {
        document.getElementById('display').value = 'Error';
    }
}

// Function to add to memory
function addToMemory() {
    const currentValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(currentValue)) {
        memory += currentValue;
        clearDisplay();
    }
}

// Function to subtract from memory
function subtractFromMemory() {
    const currentValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(currentValue)) {
        memory -= currentValue;
        clearDisplay();
    }
}

// Function to recall memory
function recallMemory() {
    document.getElementById('display').value = memory;
}

// Function to clear memory
function clearMemory() {
    memory = 0;
}

// Function to toggle between arithmetic and conversion modes
function toggleMode() {
    isConversionMode = !isConversionMode;
    clearDisplay();

    if (isConversionMode) {
        // Switched to conversion mode, set placeholder for length conversion
        document.getElementById('display').placeholder = 'Enter Length (meters)';
    } else {
        // Switched back to arithmetic mode, set placeholder to default
        document.getElementById('display').placeholder = '0';
    }
}



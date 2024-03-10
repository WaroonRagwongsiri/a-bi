const inputForm = document.getElementById("inputForm");
const complexInput = document.getElementById("complex");
const polarFormParagraph = document.getElementById("polar");

inputForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const userInput = complexInput.value;
    const parts = userInput.split("+");
    const realPart = parseFloat(parts[0]);
    const imaginaryPart = parseFloat(parts[1].slice(0, -1));

    const r = Math.sqrt((realPart*realPart) + (imaginaryPart*imaginaryPart));
    const theta = Math.atan(imaginaryPart/realPart);

    polarFormParagraph.textContent = `Polar form: ${r}(cos${theta} + isin${theta})`;
    
});

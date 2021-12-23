const textareaElement = document.querySelector("textarea");
const upperCaseButton = document.querySelector("#upper-case");
const lowerCaseButton = document.querySelector("#lower-case");
const properCaseButton = document.querySelector("#proper-case");
const sentenceCaseButton = document.querySelector("#sentence-case");
const downloadButton = document.querySelector("#save-text-file");

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

upperCaseButton.addEventListener("click", () => {
    textareaElement.value = textareaElement.value.toUpperCase();
});

lowerCaseButton.addEventListener("click", () => {
    textareaElement.value = textareaElement.value.toLowerCase();
});

properCaseButton.addEventListener("click", () => {
    let text = textareaElement.value.trim();
    let textArr = text.split(" ");
    let newArr = [];
    textArr.forEach(element => {
        element = element[0].toUpperCase() + element.slice(1);
        newArr.push(element);
    });
    textareaElement.value = newArr.join(" ");
});

sentenceCaseButton.addEventListener("click", () => {
    let text = textareaElement.value.trim().toLowerCase();
    let textArr = text.split(". ");
    let newArr = [];
    textArr.forEach(element => {
        element = element[0].toUpperCase() + element.slice(1);
        newArr.push(element);
    });
    textareaElement.value = newArr.join(". ");
});

downloadButton.addEventListener("click", () => {
    const text = textareaElement.value;

    download("text.txt", text);
});
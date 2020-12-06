const num1 = document.getElementById('num1')! as HTMLInputElement;
const num2 = document.getElementById('num2')! as HTMLInputElement;
const addBtn = document.getElementById('add-btn')! as HTMLInputElement;
const result = document.getElementById('result')! as HTMLInputElement;

addBtn.addEventListener('click', () => {
    result.textContent = `Sum: ${parseInt(num1.value) + parseInt(num2.value)}`;
});

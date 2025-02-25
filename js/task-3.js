const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const handleInput = e => {
  let inputNormalize = e.target.value.trim();
  //   if (inputNormalize === '') {
  //     span.textContent = 'Anonymous';
  //   } else {
  //     span.textContent = e.target.value;
  //   }
  inputNormalize === ''
    ? (span.textContent = 'Anonymous')
    : (span.textContent = e.target.value);
};

input.addEventListener('input', handleInput);

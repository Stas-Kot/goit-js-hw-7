const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  console.log(e.currentTarget.elements);
  const email = e.target.elements.email.value;
  const pass = e.target.elements.password.value;

  if (email === '' || pass === '') {
    return alert('All form fields must be filled in');
  }
  const user = {
    email: email.trim(),
    password: pass.trim(),
  };
  console.log(user);
  form.reset();
}

// Simple registration form validation
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const fullName = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;

  if (password.length < 6) {
    alert('Password must be at least 6 characters long!');
    return;
  }

  if (password !== confirm) {
    alert('Passwords do not match!');
    return;
  }

  // Fake save data locally (demo purpose)
  localStorage.setItem('user', JSON.stringify({ fullName, email, phone }));
  alert('🎉 Registration successful!');
  document.getElementById('registerForm').reset();
});

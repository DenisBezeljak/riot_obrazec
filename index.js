const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('.form');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        forms.forEach(f => f.classList.remove('active'));
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });

    function isValidEmail(email) {
      return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
    }

    document.getElementById('login').addEventListener('submit', e => {
      e.preventDefault();
      const user = document.getElementById('login-username').value.trim();
      const pass = document.getElementById('login-password').value.trim();
      if (!user || !pass) {
        Swal.fire('Error', 'Please enter both username and password.', 'error');
        return;
      }
      Swal.fire('Success', `Welcome back, ${user}!`, 'success');
      e.target.reset();
    });

    document.getElementById('register').addEventListener('submit', e => {
      e.preventDefault();
      const user = document.getElementById('register-username').value.trim();
      const email = document.getElementById('register-email').value.trim();
      const pass = document.getElementById('register-password').value.trim();
      const confirm = document.getElementById('register-confirm').value.trim();
      const region = document.getElementById('register-region').value;
      const terms = document.getElementById('terms').checked;

      if (!user || !email || !pass || !confirm || !region) {
        Swal.fire('Error', 'Please fill out all fields.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        Swal.fire('Error', 'Please enter a valid email.', 'error');
        return;
      }

      if (pass !== confirm) {
        Swal.fire('Error', 'Passwords do not match.', 'error');
        return;
      }

      if (!terms) {
        Swal.fire('Error', 'You must agree to the Terms of Service.', 'error');
        return;
      }

      Swal.fire('Success', `Account created for ${user}!`, 'success');
      e.target.reset();
      document.querySelector('.tab[data-tab="login"]').click();
    });
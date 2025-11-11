    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('.form');
    const tabIndicator = document.querySelector('.tab-indicator');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Move the tab indicator
        const tabWidth = 100 / tabs.length;
        const activeIndex = Array.from(tabs).indexOf(tab);
        tabIndicator.style.left = `${activeIndex * tabWidth}%`;
        
        forms.forEach(f => f.classList.remove('active'));
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });

    // Populate days and years for birth date
    const daySelect = document.getElementById('register-birth-day');
    const yearSelect = document.getElementById('register-birth-year');
    
    // Populate days (1-31)
    for (let i = 1; i <= 31; i++) {
      const option = document.createElement('option');
      option.value = i < 10 ? `0${i}` : `${i}`;
      option.textContent = i;
      daySelect.appendChild(option);
    }
    
    // Populate years (current year - 100 to current year - 13)
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 100; i <= currentYear - 13; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      yearSelect.appendChild(option);
    }

    
    // Login form submission
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


    // Register form submission
    document.getElementById('register').addEventListener('submit', e => {
      e.preventDefault();
      const user = document.getElementById('register-username').value.trim();
      const email = document.getElementById('register-email').value.trim();
      const pass = document.getElementById('register-password').value.trim();
      const confirm = document.getElementById('register-confirm').value.trim();
      const month = document.getElementById('register-birth-month').value;
      const day = document.getElementById('register-birth-day').value;
      const year = document.getElementById('register-birth-year').value;
      const region = document.getElementById('register-region').value;
      const terms = document.getElementById('terms').checked;


      if (!user || !email || !pass || !confirm || !month || !day || !year || !region) {
        Swal.fire('Error', 'Please fill out all fields.', 'error');
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

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
        Swal.fire({
          title: 'Error',
          text: 'Please enter both username and password.',
          icon: 'error',
          background: '#010a13',
          color: '#f0e6d2',
          confirmButtonColor: '#c89b3c'
        });
        return;
      }
      Swal.fire({
        title: 'Success',
        text: `Welcome back, ${user}!`,
        icon: 'success',
        background: '#010a13',
        color: '#f0e6d2',
        confirmButtonColor: '#c89b3c'
      });
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
        Swal.fire({
          title: 'Error',
          text: 'Please fill out all fields.',
          icon: 'error',
          background: '#010a13',
          color: '#f0e6d2',
          confirmButtonColor: '#c89b3c'
        });
        return;
      }

      if (pass !== confirm) {
        Swal.fire({
          title: 'Error',
          text: 'Passwords do not match.',
          icon: 'error',
          background: '#010a13',
          color: '#f0e6d2',
          confirmButtonColor: '#c89b3c'
        });
        return;
      }

      if (!terms) {
        Swal.fire({
          title: 'Error',
          text: 'You must agree to the Terms of Service.',
          icon: 'error',
          background: '#010a13',
          color: '#f0e6d2',
          confirmButtonColor: '#c89b3c'
        });
        return;
      }

      Swal.fire({
        title: 'Success',
        text: `Account created for ${user}!`,
        icon: 'success',
        background: '#010a13',
        color: '#f0e6d2',
        confirmButtonColor: '#c89b3c'
      });
      e.target.reset();
      document.querySelector('.tab[data-tab="login"]').click();
    });

    // Credits
    document.getElementById('show-credits').addEventListener('click', (e) => {
      e.preventDefault();

      Swal.fire({
        title: 'Credits',
        html: `
          <p style="font-size: 16px;">
            Website redesign and implementation by<br>
            <strong>Denis Bezeljak – Class 4.Rb</strong>
          </p>
        `,
        icon: 'info',
        confirmButtonText: 'OK',
        background: '#010a13',
        color: '#c89b3c',
        confirmButtonColor: '#c89b3c'
      });
    });

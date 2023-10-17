document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form_signup');
  const emailField = form.querySelector('input[name="email"]');
  const passwordField = form.querySelector('input[name="password"]');
  const errorMessage = document.querySelector('.error');
  const validationItems = document.querySelectorAll('.validation_form');
  const passwordInput = document.getElementById('password_input');
  const showPasswordButton = document.getElementById('showPassword');
  const divLogin = document.getElementById('login');
  const dangKy = document.getElementById('dangky');
  const dangNhap = document.getElementById('dangnhap');

  let passwordValid = false;

  passwordField.addEventListener('input', function () {
    let password = this.value;

    validationItems.forEach((item) => {
      let condition = item.getAttribute('data-condition');
      let conditionRegex = getConditionRegex(condition);

      if (conditionRegex.test(password)) {
        item.classList.add('fulfilled');
      } else {
        item.classList.remove('fulfilled');
      }
    });
    if (
      getConditionRegex('One lowercase character').test(password) &&
      getConditionRegex('One special character').test(password) &&
      getConditionRegex('One uppercase character').test(password) &&
      getConditionRegex('8 characters minimum').test(password) &&
      getConditionRegex('One number').test(password)
    ) {
      passwordValid = true;
    }
  });

  // user list

  const usersList = JSON.parse(localStorage.getItem('users')) || [
    {
      makhach: 1,
      hoten: 'lahuuminh',
      usname: 'lahuuminh',
      password: 'Lahuuminh1.',
      diachi: 'tran quoc thao',
      email: 'lahuuminh678@gmail.com',
      dienthoai: '0997330699',
      gioitinh: 'nam',
      trangthaikhach: '',
    },
  ];

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent default form submission
    let valid = true;
    let emailErrMessage = '';
    let emailEmpty = '';
    if (emailField.value == '') {
      valid = false;
      emailEmpty = 'Email cannot be empty';
      errorMessage.innerHTML = emailEmpty;
      emailField.classList.add('input_error');
    } else if (!isEmail(emailField.value)) {
      valid = false;
      emailErrMessage = 'Looks like you forgot something';
      errorMessage.innerHTML = emailErrMessage;
      emailField.classList.add('input_error');
    } else {
      errorMessage.innerHTML = ''; // Clear error message if email is valid
      emailField.classList.remove('input_error'); // remove the class when there is no error
    }

    if (!passwordValid) {
      valid = false;
      passwordField.classList.add('input_error');
    } else {
      passwordField.classList.remove('input_error');
    }

    if (valid) {
      // form.submit(); // send form when there is no error
      if (divLogin) {
        let user = usersList.find((x) => x.email == emailField.value);

        if (user) {
          if (user.password == passwordField.value) {
            localStorage.setItem('currentuser', JSON.stringify(user));
            errorMessage.innerHTML = '';
            alert('Đăng nhập thành công');
            window.location.href = '../index.html';
          } else {
            errorMessage.innerHTML = 'Email hoặc mật khẩu không hợp lệ';
            return;
          }
        } else {
          errorMessage.innerHTML = 'Email hoặc mật khẩu không hợp lệ';
          return;
        }
      } else {
        let user = usersList.find((x) => x.email == emailField.value);
        if (user) {
          errorMessage.innerHTML = 'Email đã tồn tại';
          return;
        }
        usersList.push({
          makhach: usersList.length + 1,
          email: emailField.value,
          password: passwordField.value,
        });
        errorMessage.innerHTML = '';
        localStorage.setItem('users', JSON.stringify(usersList));
        alert('Tạo người dùng thành công');

        window.location.href = 'login.html';
      }
    }
  });

  showPasswordButton.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      showPasswordButton.textContent = 'Ẩn';
    } else {
      passwordInput.type = 'password';
      showPasswordButton.textContent = 'Xem';
    }
  });
  if (dangKy) {
    dangKy.addEventListener('click', function () {
      window.location.href = 'signup.html';
    });
  }
  if (dangNhap) {
    dangNhap.addEventListener('click', function () {
      window.location.href = 'login.html';
    });
  }

  function getConditionRegex(condition) {
    if (condition === 'One lowercase character') {
      return /[a-z]/;
    } else if (condition === 'One special character') {
      return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    } else if (condition === 'One uppercase character') {
      return /[A-Z]/;
    } else if (condition === '8 characters minimum') {
      return /.{8,}/;
    } else if (condition === 'One number') {
      return /[0-9]/;
    }
  }

  function isEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }






  
});

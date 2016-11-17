function validate() {

    $("#submit").on('click', function () {
        ValidateInput();
    });

    $("#company").on('click', function () {
        showCompanyForm();
    });

    $("#registerForm").submit(function (e) {
            e.preventDefault(e);
            e.stopPropagation(e);
    });


    function ValidateInput () {

        $("#username").css('border-color', '');
        $("#email").css('border-color', '');
        $("#password").css('border-color', '');
        $("#confirm-password").css('border-color', '');

        let validateUsername = /^[A-Za-z0-9]{3,20}$/g;
        let validatePassword = /^\w{5,15}$/g;

        let username = $("#username").val();
        let password = $("#password").val();
        let confirmPassword = $("#confirm-password").val();
        let email = $("#email").val();

        let valid =  true;
        if(!validateUsername.test(username)) {
            valid = false;
            $("#username").css('border-color', 'red');
        }
        else $("#username").css('border-color', 'none');

        if(!validatePassword.test(password)) {
            valid = false;
            $("#password").css('border-color', 'red');
        }
        else $("#password").css('border-color', 'none');

        if(validateEmail(email)) $("#email").css('border-color', 'none');
        else {
            valid = false;
            $("#email").css('border-color', 'red');
        }

        if((password == confirmPassword)) {
            if(!validatePassword.test(confirmPassword)) {
                $("#confirm-password").css('border-color', 'red')
            } else $("#confirm-password").css('border-color', 'none');
        }
        else {
            valid = false;
            $("#password").css('border-color', 'red');
            $("#confirm-password").css('border-color', 'red');
        }

        let checked = $('#company').attr('data-selected');

        if(checked) {
            if (isValidateCompanyForm() && valid) {
                $("#valid").css('display', 'block');
            } else {
                $("#valid").css('display', 'none');
            }
        } else {
            if(valid) {
                $("#valid").css('display', 'block');
            } else {
                $("#valid").css('display', 'none');
            }
        }


        function isValidateCompanyForm() {
            let number = $("#companyNumber").val();
            if(number >= 1000 && number <= 9999) {
                $("#companyNumber").css('border-color', '');
                return true;
            }
            $("#companyNumber").css('border-color', 'red');
            return false;
        }

        function validateEmail(validate) {
            let indexOfSymbol = validate.indexOf("@");
            validate = validate.slice(indexOfSymbol);
            if(indexOfSymbol > -1) {
                let indexOfDot = validate.indexOf(".");
                if(indexOfDot > 0) return true;
            }
           return false;
        }
    }
    
    function showCompanyForm() {
        let checked = $('#company').attr('data-selected');
        if(checked) {
            $('#company').removeAttr('data-selected');
            $("#companyInfo").css('display', 'none');
        } else {
            $('#company').attr('data-selected', 'true');
            $("#companyInfo").css('display', 'block');

        }

    }
}

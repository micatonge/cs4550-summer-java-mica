(function () {
    var userService = new UserService();
    var rowTemplate;
    var tbody;
    var createUserBtn;
    
    function main() {
        rowTemplate = jQuery('.wbdv-template');
        createUserBtn = jQuery('.wbdv-create');
        tbody = jQuery('tbody');
        createUserBtn.click(createUser);
        
        userService
            .findAllUsers()
            .then(renderUsers)
    }
    
    function createUser() {
        alert("creating");
        var usernameFld = $('#usernameFld');
        var passwordFld = $('#passwordFld');
        var firstNameFld = $('#firstNameFld');
        var lastNameFld = $('#lastNameFld');
        var roleFld = $('#roleFld');

        var username = usernameFld.val();
        var password = passwordFld.val();
        var firstName = firstNameFld.val();
        var lastName = lastNameFld.val();
        var role = roleFld.val();

        var user = {
            username: username,
            password: password,
            firstName: '',
            lastName: '',
            role: ''
        }

        userService
            .createUser(user)
            .then(renderUsers)
    }

    function renderUsers(users) {
        console.log('rendering users');
        console.log(users)
        tbody.empty()
        for(var u in users) {
            const user = users[u]
            const rowClone = rowTemplate.clone();
            rowClone.removeClass('wbdv-hidden');
            rowClone.find('.wbdv-username').html(user.username);
            rowClone.find('.wbdv-firstname').html(user.firstName);
            rowClone.find('.wbdv-lastname').html(user.lastName);
            rowClone.find('.wbdv-role').html(user.role);
            tbody.append(rowClone);
        }
    }

    jQuery(main);
})()
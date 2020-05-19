(function () {
    var service = new UserService();
    var rowTemplate;
    var tbody;
    var createUserBtn;
    var updateUserBtn;
    var deleteUserBtn;
    var selectedUser;
    
    function main() {
        rowTemplate = jQuery('.wbdv-template');
        createUserBtn = jQuery('.wbdv-create');
        deleteUserBtn = jQuery('.wbdv-remove');
        updateUserBtn = jQuery('.wbdv-update');
        tbody = jQuery('tbody');
        createUserBtn.click(createUser);
        deleteUserBtn.click(deleteUser);
        updateUserBtn.click(updateUser);


        findAllUsers()
        
        service
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

        const newUser = {
            username: username,
            password: password,
            firstName: '',
            lastName: '',
            role: ''
        }

        service.createUser(newUser)
        .then(function(actualUser){ 
            users.push(newUser);
            findAllUsers();
        })
    }

    function findAllUsers(){
        service.findAllUsers()
        .then(function (allUsers){
            users = allUsers;
            renderUsers();
        })
    }

    function deleteUser(){
        alert("delete user");
        const target = event.currentTarget;
        const $button = $(target);
        const userId = $button.attr('id');
        service.deleteUser(userId)
        .then(function(){
            users = users.filter(function(user){
                return user._id = userId
            })
            renderUsers()
        })
    }

    function selectUser(event){
        alert("edit user");
        const target = event.currentTarget;
        const $button = $(target);
        const userId = $button.attr('id');
        service.findUsersById(userId)
        .then(function(user){
            console.log(user);
        })
    }

    function renderUser(user){
        selectUser = user;
        $usernameFld.val(user.username)
        $firstnameFld.val(user.first)
        $lastnameFld.val(user.last)
    }

    function updateUser() {
        const updateUser = {
            _id: selectedUser._xid,
            username: $usernameFld.val(),
            first: $firstnameFld.val(),
            last: $lastnameFld.val()
        }
        service.updateUser(selectedUser._id, updatedUser)
        .then(function(status){
            users = users.map(function(user){
                if(user._id === selectedUser._id){
                return updatedUser;
                }
                else{
                    return user;
                }
            })
        })

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
            rowClone.find('.wbdv-delete').attr('id', user._id).click(deleteUser) 
            rowClone.find('.wbdv-edit').attr('id', user._id).click(selectUser)
            tbody.append(rowClone);
        }
    }

    jQuery(main);

})()
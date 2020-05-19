function UserService() {

    this.findAllUsers = findAllUsers;
    this.createUser = createUser;
    this.findUsersById = findUsersById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/micatonge/users'
    var self = this;

    
    // POST - Create
    function createUser(user) {
        console.log('creating user')
        console.log(user)
        return fetch(self.url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response){
            return response.json()
        })
    }
    
    // GET - Read
    function findAllUsers() {
        console.log('finding all users')
        return fetch(self.url)
            .then(function(response){
                return response.json()
        })
    }
    // DELETE
    function deleteUser(userId){
        return fetch(self.url + '/' + userId, {
            method: 'DELETE',
        }).then(function(response){
            return response.json()
        })
    }

   // GET - Read
   function findUsersById(userId) {
    console.log('finding user by id')
    return fetch(self.url + '/' + userId)
        .then(function(response){
            return response.json()
    })
}

 // POST - Create
 function updateUser(user) {
    console.log('updating user')
    console.log(user)
    return fetch(self.url + '/' + userId, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(function(response){
        return response.json()
    })
}
}
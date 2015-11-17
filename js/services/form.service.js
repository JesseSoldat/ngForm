let FormService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/form';

  //Add a user
  let User = function(obj) {
    this.name = obj.name;
    this.email = obj.email;
    this.website = obj.website;
    this.message = obj.message;
  };

  this.addUser = function(obj) {
    let u = new User(obj);
    return $http.post(url, u, PARSE.CONFIG);
  };

  

};

FormService.$inject = ['$http', 'PARSE'];

export default FormService;
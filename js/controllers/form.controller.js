let FormController = function(PARSE, FormService) {
  
  let vm = this;

  vm.addUser = (obj) => {
    FormService.addUser(obj).then( (res) => {
      console.log(res);
    });
  };

};

FormController.$inject = ['PARSE', 'FormService'];

export default FormController;
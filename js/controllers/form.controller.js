let FormController = function(PARSE, FormService, $rootScope, $scope) {
  
  let vm = this;

  vm.title = 'Contact Us';

  vm.addUser = (obj) => {
    FormService.addUser(obj).then( (res) => {
      
    });
  };



//-----------------------------------------------
  //Validate name field
  let validateName = function(newVal) {
    console.log(newVal);
    if(newVal.length > 0) {
      vm.errMsg1 = 'Thanks';
    } else {
      vm.errMsg2 = 'Please enter your full name!';
    }
    
  };
    //Watch name field
  $scope.$watch('user.name', function(newVal, preVal) {
    if(!newVal) return;
   validateName(newVal);
   
  });
//-----------------------------------------------
//Validate email field
  let validateEmail = function(newVal) {
    let email = newVal.includes('@');
    // console.log(newVal);
    if(email === true) {
      vm.errMsg3 = 'Thanks';
    } else {
      vm.errMsg4 = 'Please enter a valid email!';
    }
    
  };
    //Watch email field
  $scope.$watch('user.email', function(newVal, preVal) {
    if(!newVal) return;
   validateEmail(newVal);
 
  });
//-----------------------------------------------
  //Validate website field
  let validateWeb = function(newVal) {
    // console.log(newVal);
    let http = newVal.includes('http://');
    let https = newVal.includes('https://');
    if(http === true || https === true) {
      vm.errMsg5 = 'Thanks';
    } else {
      vm.errMsg6 = 'Please enter a valid website!';
    }
    
  };
    //Watch name field
  $scope.$watch('user.website', function(newVal, preVal) {
    if(!newVal) return;
   validateWeb(newVal);
   
  });
//-----------------------------------------------

  //Validate message field
  let validateMessage = function(newVal) {
    // console.log(newVal);

    if(newVal.length > 0) {
      vm.errMsg7 = 'Thanks';
    } else {
      vm.errMsg8 = 'Please enter a message!';
    }
    
  };
    //Watch message field
  $scope.$watch('user.message', function(newVal, preVal) {
    if(!newVal) return;
   validateMessage(newVal);
   
  });
//-----------------------------------------------




};

FormController.$inject = ['PARSE', 'FormService', '$rootScope', '$scope'];

export default FormController;
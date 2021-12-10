const formValidator = (form, fieldsConfig, onValidateSuccess, onValidationError) => {

    const validateField = (fieldElement, fieldConfig) => {
      const value = fieldElement.value;
      const rules = fieldConfig.rules;
      const formGroup = ""
      const errorElement =  ""
  
      const fieldValidationResult = {name: fieldConfig.name, value: value, errors: []};
      rules.forEach(rule => {
        if (rule.required && !value) {
          fieldValidationResult.errors.push(rule.message);
        }
      });
  
      if (fieldValidationResult.errors.length > 0) {
        errorElement.innerText = fieldValidationResult.errors.join('\n');
      } else {
        errorElement.innerText = '';
      }
  
      return fieldValidationResult;
    }
  
    const validateOnChange = () => {
      fieldsConfig.forEach((fieldConfig) => {
        const fieldElement = form.querySelector(`[name="${fieldConfig.name}"]`);
        fieldElement.addEventListener('input', e => {
          validateField(e.target, fieldConfig);
        });
      })
    }
  
    const validateOnSubmit = () => {
      const validatedFields = [];
      fieldsConfig.forEach((fieldConfig) => {
        const fieldElement = form.querySelector(`[name="${fieldConfig.name}"]`);
        validatedFields.push(validateField(fieldElement, fieldConfig));
      });
  
      return validatedFields;
    }
  
    const listenFormSubmit = () => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const errors = [];
        const values = {};
        const validationResult = validateOnSubmit();
        validationResult.forEach(result => {
          values[result.name] = result.value;
          errors.push(...result.errors);
        });
        if (errors.length === 0) {
          onValidateSuccess(values);
          openModal();
        } else {
          onValidationError(errors);
          openModal(errors,'red');
        }
      });
    }
    listenFormSubmit();
    validateOnChange();
  }
  
  const fieldsConfig = [
    {
      name: 'name',
      rules: [
        {required: true, message: 'First name is required.'},
      ]
    },
    {
      name: 'email',
      rules: [
        {required: true, message: 'Email is required.'},
      ]
    },
    {
      name: 'website',
      rules: [
        {required: true, message: 'Website name is required.'},
      ]
    },
    {
      name: 'message',
      rules: [
        {required:true, message: `Message is required`},
      ]
    },
  ];
  
  const form = document.querySelector(`#form`);
  const modal = document.getElementById("myModal");
  const closebtn = document.getElementsByClassName("close")[0];
  const modalContent = document.getElementsByClassName("modal-text")[0];


  closebtn.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }
  function openModal(text,color = "green") {
    if(text) modalContent.innerText = text + "\n";
    modalContent.style.color = color;
    modal.style.display = "block";
  }


  const onFormSubmitSuccess = (fields) => {
      sendData(fields)
    console.log(fields)
  }
  const onFormSubmitError = (fields) => {
    console.log('Error', fields);
  }
  
  const formManager = formValidator(form, fieldsConfig, onFormSubmitSuccess, onFormSubmitError);


  async function sendData(fields){
    try {
      const response = await fetch('http://api.kesho.me/v1/user-test/contact', {
        method: 'post',
        body: JSON.stringify(fields),
        headers: {'Content-Type': 'application/json'}
      });
      await response.json();
    }catch (e){
      console.log('Error - ', e);
    }
  }
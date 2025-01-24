document.getElementById('accountSubmitForm').addEventListener('submit', function(event) {
    const form = event.target;
    let isValid = true;

    form.querySelectorAll('[required]').forEach(function(field) {
      if (!field.value) {
        isValid = false;
        alert(`The field ${field.name} is required!`);
      }
    });
  
    if (!isValid) {
      event.preventDefault();
    } else {
      alert('Your Account has been succesfully submitted!');
    }
});  
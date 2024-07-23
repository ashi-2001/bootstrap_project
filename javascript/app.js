function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
    
    
    firstName=data.get("firstname");
    lastName=data.get("lastname");
    dob=data.get("dob");
    city=data.get("city")[0];
    let payment = 400000 ;
    const key=firstName+lastName+city+dob;
    const result={
      key:key,
    }
    const myJSON = JSON.stringify(result);
    console.log(myJSON)

    const mail = `hi ${firstName},\n\n
     Hello , now after 49 years  you will become dead or if you live then live like a dead 
      so do payment before you die ${payment} , sorry i forget to mention lastname ie ${lastName}
                  ` ;
    const mailer = document.getElementById('mail') ; 
    mailer.innerHTML=mail ;
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
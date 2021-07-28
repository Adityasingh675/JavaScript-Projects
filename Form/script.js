function showMessage(){
    // var message = document.getElementById("text_fields").value;
    // display_message.innerHTML= message;
    // if(document.getElementById("text_fields") == null) {
    //     if(document.getElementById("first_name").value) {
    //         if (document.getElementById("first_name").value == null) {
    //             return null;
    //         } 
    //         document.getElementById('data_retrieval').innerHTML = 
    //         'First Name  :'+ document.getElementById("first_name").value;
    //     }
        
    //     if(document.getElementById("last_name").value) {
    //         if (document.getElementById("last_name").value == null) {
    //             return null;
    //         } 
    //         document.getElementById('data').innerHTML = 
    //         'Last Name  :' + document.getElementById("last_name").value;
    //     }
        
    //     if(document.getElementById("contact").value) {
    //         if (document.getElementById("contact").value == null) {
    //             return null;
    //         } 
    //         document.getElementById('data2').innerHTML = 
    //         'Contact  :' + document.getElementById("contact").value;
    //     }
    
    //     if(document.getElementById("dob").value) {
    //         if (document.getElementById("dob").value == null) {
    //             return null;
    //         } 
    //         document.getElementById('data3').innerHTML = 
    //         'Date of Birth  :' + document.getElementById("dob").value;
    //     }
        
    //     if(document.getElementById("email").value) {
    //         if (document.getElementById("email").value == null) {
    //             return null;
    //         } 
    //         document.getElementById('data4').innerHTML = 
    //         'Email Id  :' + document.getElementById("email").value;
    //     }
    
    //     if(document.getElementById("address").value) {
    //         if (document.getElementById("address").value == null) {
    //             return null;
    //         } 
    //         document.getElementById('data8').innerHTML = 
    //         'Address  :' + document.getElementById("address").value;
    //     }
        
    //     if(document.getElementById("country").value) {
    //         if (document.getElementById("country").value == null) {
    //             return null;
    //         } 
    //         document.getElementById('data5').innerHTML = 
    //         'Country  :' + document.getElementById("country").value;
    //     }
    
    //     if(document.getElementById("check1").checked) {
    //         if (document.getElementById("check1").value == null) {
    //             return null;
    //         } 
    //         document.getElementById('data6').innerHTML = 
    //         'Job  :' + document.getElementById("check1").checked;
    //     }
    
    //     if(document.getElementById("check2").checked) {
    //         if (document.getElementById("check2").value == null) {
    //             return null;
    //         } 
    //         document.getElementById('data7').innerHTML = 
    //         'Funding  :' + document.getElementById("check2").checked;
    //     }
    
    //     if(document.getElementById("remarks").value) {
    //         if (document.getElementById("remarks").value == null) {
    //             return null;
    //         } 
    //         document.getElementById('data9').innerHTML = 
    //         'Remarks :'+ document.getElementById("remarks").value;
    //     }
    
    //     // document.getElementById('a').value = ""; 
    
    //     // document.getElementById("forms").reset(); 
    
    //     // if(document.getElementById("forms").value != null) {
    //     //     document.getElementById('ent_details').innerHTML = 
    //     //     'Entered Details: '
    //     // }
    
    //     if(document.getElementById("forms").value != null) {
    //         document.getElementById('ent_details').innerHTML = 
    //         'Entered Details: '
    //     }
        
    
    //     var first_name = document.forms["forms"]["first_name"].value;
    //     if (first_name == "") {
    //       alert("first name must not be empty");
    //       return false;
    //     }
    
    //     var last_name = document.forms["forms"]["last_name"].value;
    //     if (last_name == "") {
    //         alert("last name must not be empty")
    //     }
    
    //     var contact = document.forms["forms"]["contact"].value.length;
    //     if (contact < 10 || contact > 10) {
    //       alert("contact number must be of 10 digits");
    //       return false;
    //     }
    
    //     var dob = document.forms["forms"]["dob"].value;
    //     if (dob == "") {
    //       alert("Date of Birth must be valid");
    //       return false;
    //     }
    
    
    //     if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Myform.email.value)) {
    //         // return (true)
    //         alert("You have entered an invalid email address!")
    //     }
    
    
    
    //     // var email = document.forms["forms"]["email"].value;
    //     // if (email == "") {
    //     //     alert("Enter a valid email");
    //     //     return false;
    //     // }
    
    //     var address = document.forms["forms"]["address"].value;
    //     if (address == "") {
    //       alert("address must not be empty");
    //       return false;
    //     }
    // }



    // Test //

    // if (document.getElementById("forms").value == null) {

        if(document.getElementById("first_name").value) {
            if (document.getElementById("first_name").value == null) {
                return null;
            } 
            document.getElementById('data_retrieval').innerHTML = 
            'First Name  :'+ document.getElementById("first_name").value;
        }

        if(document.getElementById("last_name").value) {
            if (document.getElementById("last_name").value == null) {
                return null;
            } 
            document.getElementById('data').innerHTML = 
            'Last Name  :' + document.getElementById("last_name").value;
        }

        if(document.getElementById("contact").value) {
            if (document.getElementById("contact").value == null) {
                return null;
            } 
            document.getElementById('data2').innerHTML = 
            'Contact  :' + document.getElementById("contact").value;
        }

        if(document.getElementById("dob").value) {
            if (document.getElementById("dob").value == null) {
                return null;
            } 
            document.getElementById('data3').innerHTML = 
            'Date of Birth  :' + document.getElementById("dob").value;
        }

        if(document.getElementById("email").value) {
            if (document.getElementById("email").value == null) {
                return null;
            } 
            document.getElementById('data4').innerHTML = 
            'Email Id  :' + document.getElementById("email").value;
        }

        if(document.getElementById("address").value) {
            if (document.getElementById("address").value == null) {
                return null;
            } 
            document.getElementById('data8').innerHTML = 
            'Address  :' + document.getElementById("address").value;
        }

        if(document.getElementById("country").value) {
            if (document.getElementById("country").value == null) {
                return null;
            } 
            document.getElementById('data5').innerHTML = 
            'Country  :' + document.getElementById("country").value;
        }

        // if(document.getElementById("check1").checked) {
        //     if (document.getElementById("check1").value == null) {
        //         return null;
        //     } 
        //     document.getElementById('data6').innerHTML = 
        //     'Job  :' + document.getElementById("check1").checked;
        // }

        // if(document.getElementById("check2").checked) {
        //     if (document.getElementById("check2").value == null) {
        //         return null;
        //     } 
        //     document.getElementById('data7').innerHTML = 
        //     'Funding  :' + document.getElementById("check2").checked;
        // }





        // Uncomment this for added feature

        // if(document.getElementById("check1").checked == false && document.getElementById("check2").checked == false) {
        //     alert('Please choose any one of the checkboxes');
        //     return false;
        // }

        // Uncomment this for added feature





        // if(Myform.check1.checked == false && Myform.check2.checked == false) {
        //         alert('Please choose any one of the checkboxes');
        //         return false;
        // }
        

        if(document.getElementById("remarks").value) {
            if (document.getElementById("remarks").value == null) {
                return null;
            } 
            document.getElementById('data9').innerHTML = 
            'Remarks :'+ document.getElementById("remarks").value;
        }

        // document.getElementById('a').value = ""; 

        // document.getElementById("forms").reset(); 

        // if(document.getElementById("forms").value != null) {
        //     document.getElementById('ent_details').innerHTML = 
        //     'Entered Details: '
        // }

        if(document.getElementById("forms").value != null) {
            document.getElementById('ent_details').innerHTML = 
            'Entered Details: '
        }


        var first_name = document.forms["forms"]["first_name"].value;
        if (first_name == "") {
            // alert("first name must not be empty");
            document.getElementById("first_name").style.borderColor="red";
            document.getElementById("fn_error").innerHTML="Please enter first name.";
        } else if (first_name) {
            document.getElementById("fn_error").style.display="none";
            document.getElementById("first_name").style.borderColor="white";
        }

        var last_name = document.forms["forms"]["last_name"].value;
        if (last_name == "") {
            // alert("last name must not be empty");
            document.getElementById("last_name").style.borderColor="red";
            document.getElementById("ln_error").innerHTML="Please enter last name.";
        } else if (last_name) {
            document.getElementById("ln_error").style.display="none";
            document.getElementById("last_name").style.borderColor="white";
        }

        var contact = document.forms["forms"]["contact"].value.length;
        if (contact < 10 || contact > 10) {
            // alert("contact number must be of 10 digits");
            document.getElementById("contact").style.borderColor="red";
            document.getElementById("contact_error").innerHTML="Phone number must be of 10 digits.";
        } else if (contact) {
            document.getElementById("contact_error").style.display="none";
            document.getElementById("contact").style.borderColor="white";
        }

        var dob = document.forms["forms"]["dob"].value;
        if (dob == "") {
            // alert("Date of Birth must be valid");
            document.getElementById("dob").style.borderColor="red";
            document.getElementById("dob_error").innerHTML="Please enter valid dob.";
        } else if (dob) {
            document.getElementById("dob_error").style.display="none";
            document.getElementById("dob").style.borderColor="white";
        }


        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Myform.email.value)) {
            // return (true)
            // alert("You have entered an invalid email address!");
            document.getElementById("email").style.borderColor="red";
            document.getElementById("email_error").innerHTML="Please enter valid email.";
        } else if (email) {
            document.getElementById("email_error").style.display="none";
            document.getElementById("email").style.borderColor="white";
        }



        // var email = document.forms["forms"]["email"].value;
        // if (email == "") {
        //     alert("Enter a valid email");
        //     return false;
        // }

        var address = document.forms["forms"]["address"].value;
        if (address == "") {
            // alert("address must not be empty");
            document.getElementById("address").style.borderColor="red";
            document.getElementById("address_error").innerHTML="Please enter address.";
        } else if (address) {
            document.getElementById("address_error").style.display="none";
            document.getElementById("address").style.borderColor="white";
        }

        var result = document.getElementById("country").value;
        if (result == "") {
            // alert("Please Select Country");
            document.getElementById("country").style.borderColor="red";
            document.getElementById("country_error").innerHTML="Please select a country.";

            return false;
            
        } else if (country) {
            document.getElementById("country_error").style.display="none";
            document.getElementById("country").style.borderColor="white";
        }
        
        // else {
        // alert("Dropdownlist Selected Value is: " + result);
        // }


    // }
    // if (!document.forms["forms"]["check1"].value.checked & !document.forms["forms"]['check2'].value.checked) {
    //     alert("choose anyone from both");
    //     return false;
    // } 

    // var country = document.forms["forms"]["country"].value;
    // if (country == "Choose Country") {
    //     alert("must choose a country");
    //     return false;
    // }


}
function form1(contactInfo) {
    // name
    const err = {};
    if (contactInfo.name === '') {
        err.name = 'please enter the username';
    }
    else if(contactInfo.name.charAt(0)!=='@' || /[A-Z]/.test (contactInfo.name) )
     err.name ='use @ ';



    if (contactInfo.messagepara === '') {
        err.messagepara = 'please enter subject';
    }
    
    if (contactInfo.tag1 === '') {
        err.tag1 = 'please enter the tagone';
    }
    else if(contactInfo.tag1.charAt(0) !== '#'){
        err.tag1 = "Tag must be start with #";}

    if (contactInfo.tag1 === '') {
            err.tag1 = 'please enter the tagtwo';
    }
    else if(contactInfo.tag2.charAt(0) !== '#'){
    err.tag2 = "Tag must be start with #";}


    if (contactInfo.message === '') {
        err.message = 'please enter Heading';
    }
    return err;
}
export default form1;
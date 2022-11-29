function runValidate(form)
{
    validateName(form);
    validateAge(form);
}

function validateName(form)
{
    var name = form.elements["yourName"];

    if (name.validity.valueMissing)
    {
        name.setCustomValidity("Please enter your name here");
        return false;
    }
    else
    {
        name.setCustomValidity("");
        return true;
    }
}

function validateAge(form)
{
    var age = form.elements["age"];

    if (age.validity.valueMissing)
    {
        age.setCustomValidity("Please enter your age");
        return false;
    }
    else if(age.validity.rangeUnderflow || age.validity.rangeOverflow)
    {
        age.setCustomValidity("Your age should be between 13 and 80");
        return false;
    }
    else
    {
        age.setCustomValidity("");
        return true;
    }
}
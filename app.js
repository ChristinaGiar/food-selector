const form = document.querySelector('#searchForm');
const meet = document.querySelector('#meet');
const noMeet = document.querySelector('#nomeet');
const grantparents = document.querySelector('#grantparents');
const joanna = document.querySelector('#joanna');

const ul = document.querySelector("#selectedFood ol");
const foods = ['ρεβύθια', 'φασολάδα', 'φασόλια γίγαντες', 'φακές', 'γυφτοφάσουλα', 'κουκία', 'φακοσαλάτα', 'σαλάτα με γυφτοφάσουλα', 'φακόρυζο', 'ρεβυθόρυζο', 'λαχανόρυζο', 'σπανακόρυζο', 'πρασόρυζο', 'γεμιστά', 'μπάμιες', 'αρακάς', 'φασολάκια', 'μελιτζάνες με κρέας', 'κρέας με σπανάκι', 'φρικασέ (κρέας με μαρούλι)', 'γιουβέτσι (κρέας με κριθαράκι)', 'γιουβαρλάκια', 'λάχανο με κρέας', 'τηγανία κρέας', 'τηγανιά κοτόπουλο', 'μπριζόλες στον φούρνο', 'σπετσοφάι', 'κοτόπουλο με ρύζι', 'κοτόπουλο με σως γιαουρτιού', 'κοτόπουλο με πατάτες στο φούρνο', 'κοτόσουπα', 'κρεατόσουπα (κρέας)', 'κοτόπουλο ΑΒ', 'σνίτσελ κοτόπουλο', 'πατάτες με κρεμμύδια', 'σελινάτο (πατάτες με σέλινο)', 'πατάτες με κιμά', 'κεφτεδάκια με πατάτες', 'κεφτεδάκια κοκκινιστό', 'κρέας κοκκινιστό με ρύζι', 'παστίτσιο της τεμπέλας', 'μακαρόνια με κιμά', 'μακαρόνια', 'μακαρόνια αραμπιάτα', 'μακαρόνια καρμπονάρα', 'κανελόνια με κιμά', 'στραπατσάδα', 'αυγά με πατάτες', 'αυγά με κολοκυθάκια', 'αυγά με μανιτάρια', 'σφουγκάτο (αυγά με μάλαθρο)', 'τουρλού', 'μελιτζάνες με patates και σάλτσα', 'πιπεριές με μελιτζάνες και σάλτσα', 'ντολμαδάκια', 'λαχανοντολμάδες', 'κριθαράκι με μανιτάρια και κασέρι']
const specials = ['κότσι', 'μουσακάς', 'παστίτσιο',]
let newFoodList = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // clear the existing values
    // ul.innerText = '';
    newFoodList = [];

    for (let food of foods) {
        //if meet is selected
        if (containsMeet(food) && ((meet.checked || !(noMeet.checked)))) {
            console.log(food)
            newFoodList.push(food)
        }
        //if meet isn't selected
        else if (!containsMeet(food) && ((!meet.checked) || (noMeet.checked))) {
            console.log(food)
            newFoodList.push(food)
        }
        //  EDV CHECK GIA SEAFOOD & SK & SOUPSS---------------
        if (grantparents.checked) {
            newFoodList = grantparentsDontEat(newFoodList)
        }
        if (joanna.checked) {
            newFoodList = joannaDoesntEat(newFoodList)

        }
    }

    console.log(newFoodList)
    // show the new list
    for (let newFood of newFoodList) {
        let li = document.createElement('li')
        li.append(newFood)
        ul.append(li)
    }

    if (newFoodList.length === 0) {
        console.log("DDDDDDDDDDDDDdd")

        console.log(newFoodList.length)
        // ul.innerText = '';
        alert("Δεν βρέθηκε φαγητό. Προσπαθήστε ξανά.")

    }
})

function containsMeet(food) {
    return (food.indexOf('κρέα') !== -1) || (food.indexOf('κοτό') !== -1) || (food.indexOf('κιμά') !== -1) || (food.indexOf('κεφτεδάκια') !== -1);
}


function grantparentsDontEat(newFood) {
    newFood = newFood.filter(function (item) {
        if (item.indexOf('πατάτες') == -1 && item.indexOf('αρακάς') == -1)
            return item
    })
    return newFood
    console.log(`EEEEEEEE  ${newFood}   EEEEEEE`)
}


function joannaDoesntEat(newFood) {
    newFood = newFood.filter(function (item) {
        if (item.indexOf('μπάμιες') == -1 && item.indexOf('φασολάδα') == -1 && !((item.indexOf('κρέα') !== -1) || (item.indexOf('κοτό') !== -1) || (item.indexOf('κιμά') !== -1) || (item.indexOf('κεφτεδάκια') !== -1)))
            return item
    })
    return newFood
}


form.addEventListener('reset', (e) => {
    // clear the existing values
    ul.innerText = '';
})
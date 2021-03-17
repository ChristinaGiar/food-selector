const form = document.querySelector('#searchForm');
const checkBoxes = document.getElementsByName("checkbox");
const meet = document.querySelector('#meet');
const noMeet = document.querySelector('#nomeet');
// const grantparents = document.querySelector('#grantparents');
// const joanna = document.querySelector('#joanna');
const soup = document.querySelector('#soup');
const meetSpecial = document.querySelector('#meetSpecial');
const seafood = document.querySelector('#seafood');

const popupOpen = document.querySelector('.open-popup');
const closeBtn = document.querySelector('.close');

const οl = document.querySelector(".selectedFood ol");
const foods = ['ρεβύθια', 'φασολάδα', 'φασόλια γίγαντες', 'φακές', 'γυφτοφάσουλα', 'κουκία', 'φακοσαλάτα', 'σαλάτα με γυφτοφάσουλα', 'φακόρυζο', 'ρεβυθόρυζο', 'λαχανόρυζο', 'σπανακόρυζο', 'πρασόρυζο', 'γεμιστά', 'μπάμιες', 'αρακάς', 'φασολάκια', 'μελιτζάνες με κρέας', 'κρέας με σπανάκι', 'φρικασέ (κρέας με μαρούλι)', 'γιουβέτσι (κρέας με κριθαράκι)', 'γιουβαρλάκια', 'λάχανο με κρέας', 'τηγανία κρέας', 'τηγανιά κοτόπουλο', 'κοτόπουλο με χυλοπίτες', 'κοτόπουλο με σως γιαουρτιού', 'συκωτάκια (κρέας)', 'μπριζόλες στον φούρνο', 'σπετσοφάι', 'κοτόπουλο με ρύζι', 'κοτόπουλο με σως γιαουρτιού', 'κοτόπουλο με πατάτες στο φούρνο', 'κοτόσουπα', 'κρεατόσουπα (κρέας)', 'κοτόπουλο ΑΒ', 'σνίτσελ κοτόπουλο', 'πατάτες με κρεμμύδια', 'σελινάτο (πατάτες με σέλινο)', 'πατάτες με κιμά', 'κεφτεδάκια με πατάτες', 'κεφτεδάκια κοκκινιστό', 'κρέας κοκκινιστό με ρύζι', 'παστίτσιο της τεμπέλας', 'μακαρόνια με κιμά', 'μακαρόνια', 'μακαρόνια αραμπιάτα', 'μακαρόνια καρμπονάρα', 'κανελόνια με κιμά', 'στραπατσάδα', 'αυγά με πατάτες', 'αυγά με κολοκυθάκια', 'αυγά με μανιτάρια', 'σφουγκάτο (αυγά με μάλαθρο)', 'τουρλού', 'μελιτζάνες με patates και σάλτσα', 'πιπεριές με μελιτζάνες και σάλτσα', 'ντολμαδάκια', 'λαχανοντολμάδες', 'κριθαράκι με μανιτάρια και κασέρι']
const meetSpecials = ['κότσι', 'μουσακάς', 'παστίτσιο', 'μπριζόλες', 'φιλέτο κοτόπουλο', 'ψαρονέφρι', 'λουκάνικα', 'σουβλάκια', 'αρνί με πατάτες', 'χιουνκιάρ', 'τηγανιά με μανιτάρια']
const seafoods = ['καλαμαράκια με ρύζι', 'γαρίδες τηγανιτές - σαγανάκι', 'μύδια σαγανάκι - μπλουμ', 'μυδοπίλαφο', 'σολομός', 'ξυφίας', 'καλαμαράκια τηγανιτά/στα κάρβουνα', 'λαβράκι', 'τσιπούρα', 'κολιός', 'κουτσουμούρα']
const soups = ['κοτόπουπα', 'κρεατόσουπα (κρέας)', 'μπροκολόσουπα', 'μανιταρόσουπα', 'ντοματόσουπα']
let newFoodList = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();

    // click the <a> tag
    popupOpen.click();
    console.log("presseddd");
    // clear the existing values
    οl.innerText = '';
    newFoodList = [];


    //if meet is selected
    if (meet.checked) {//|| !(noMeet.checked)
        if ((soup.checked)) {
            for (let aSoup of soups) {
                if (containsMeet(aSoup)) {
                    console.log(aSoup)
                    newFoodList.push(aSoup)
                }
            }

        } else {
            for (let food of foods) {
                if (containsMeet(food)) {
                    console.log(food)
                    newFoodList.push(food)
                }
            }
        }

    } else if ((noMeet.checked)) {     //if meet isn't selected 
        if ((soup.checked)) {
            for (let aSoup of soups) {
                if (!containsMeet(aSoup)) {
                    console.log(aSoup)
                    newFoodList.push(aSoup)
                }
            }

        } else {
            for (let food of foods) {
                if (!containsMeet(food)) {
                    console.log(food)
                    newFoodList.push(food)
                }
            }
        }
    }
    else if ((soup.checked)) { //(!meet.checked) || 
        for (let aSoup of soups) {
            console.log(aSoup)
            newFoodList.push(aSoup)
        }
    }

    if (meetSpecial.checked) {
        // newFoodList = [];
        for (let aSpecial of meetSpecials) {
            newFoodList.push(aSpecial)
        }
        // if (seafood.checked) {
        //     for (let aSeafood of seafoods) {
        //         newFoodList.push(aSeafood)
        //     }
        // }
    }
    if (seafood.checked) {
        for (let aSeafood of seafoods) {
            newFoodList.push(aSeafood)
        }
    }


    console.log(newFoodList)
    // show the new list
    insertListInHTML(newFoodList);


    if (newFoodList.length === 0) {
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
}


function joannaDoesntEat(newFood) {
    newFood = newFood.filter(function (item) {
        if (item.indexOf('μπάμιες') == -1 && item.indexOf('φασολάδα') == -1 && !((item.indexOf('κρέα') !== -1) || (item.indexOf('κοτό') !== -1) || (item.indexOf('κιμά') !== -1) || (item.indexOf('κεφτεδάκια') !== -1)))
            return item
    })
    return newFood
}

function insertListInHTML(newArray) {
    for (let newFood of newArray) {
        let li = document.createElement('li')
        li.append(newFood)
        οl.append(li)
    }
}

form.addEventListener('reset', (e) => {
    // clear the existing values
    οl.innerText = '';
})


closeBtn.addEventListener('click', () => {
    // clear the existing values & checkboxes
    οl.innerText = '';
    for (let chbox of checkBoxes) {
        chbox.checked = false;

    }
})
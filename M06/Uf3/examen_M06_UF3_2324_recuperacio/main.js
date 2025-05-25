

document.addEventListener('DOMContentLoaded', () => {

    //#region Exercici 1
    const form = document.getElementById('sanitari');
    const name = document.getElementById('sname');
    const lname = document.getElementById('slastname');
    const tsi = document.getElementById('tsi');

    const specialChars = ['!','"','·','$','%','&','/','(',')','=','?','¿','*','_','-'];

    form.addEventListener('keyup', checkNameSurname);
    name.addEventListener('keyup', checkNameSurname);
    lname.addEventListener('keyup', checkNameSurname);

    function checkNameSurname(e) {
        let txt = e.target.value;
        let valid = true

        for (let specialChar of specialChars) {
            if (txt.includes(specialChar)) {
                valid = false
            }
        }

        for (const char of txt) {
            if (!isNaN(char)) {
                valid = false
            }
        }

        if (valid) {
            e.target.className = 'ex1-valid'
        } else {
            e.target.className = 'ex1-error'
        }
    }
    //#endregion
    

    //#region Exercici 2
    const list1 = document.getElementById('list1');
    const list2 = document.getElementById('list2');

    let originElem;

    list1.addEventListener('dragover', dragOverEl);
    list1.addEventListener('dragstart', dragStartEl);
    list1.addEventListener('dragend', dragEndEl);
    list1.addEventListener('dragenter', dragEnterEl);
    list1.addEventListener('dragleave', dragLeaveEl);
    
    list2.addEventListener('dragover', dragOverEl);
    list2.addEventListener('dragstart', dragStartEl);
    list2.addEventListener('dragend', dragEndEl);
    list2.addEventListener('dragenter', dragEnterEl);
    list2.addEventListener('dragleave', dragLeaveEl);
    
    list1.addEventListener('drop', dropEl);
    list2.addEventListener('drop', dropEl);
    
    function dragOverEl(e) {
        e.preventDefault();
    }

    function dragStartEl(e) {
        originElem = e.target;
        originElem.classList.add('over');
    }

    function dragEndEl(e) {
        e.target.classList.remove('over');
    }
    
    function dragEnterEl(e) {
        e.preventDefault();
    }

    function dragLeaveEl(e) {
        e.target.classList.add('over');
    }

    function dropEl(e) {
        console.log(e.currentTarget)

        e.target.appendChild(originElem);
        // e.target.classList.remove('over');
    }
    //#endregion


    //#region Exercici 3
    
    //#endregion


    //#region Exercici 4
    // const calculator = document.getElementById('calculator');
    const calculator = document.getElementById('calculator');

    console.log(calculator)

    calculator.addEventListener('keyup', makeOperation);
    
    function makeOperation(e) {
        let values = e.targetvalue;
        let nums1 = [];
        let nums2 = [];
        console.log(nums1)

        for (const value of values) {
            if (!isNaN(value) && nums1 == '') {
                console.log('hola')
            }
        }
        
    }
    //#endregion

})




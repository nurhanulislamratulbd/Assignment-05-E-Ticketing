const buttons = document.querySelectorAll('.ticketBtn');
let count = 0;
let totalSeat = 40;
let validationArray = [];
for (const btn of buttons) {
    btn.addEventListener('click', function(){
        const btnText = btn.innerText;
        count ++;
        const displayCount = document.getElementById('seatCount');
        displayCount.innerText = count;
        totalSeat --;
        const totalDisplaySeat = document.getElementById('totalSeat');
        totalDisplaySeat.innerText = totalSeat;
        btn.style.backgroundColor = '#1DD100';

        const totalTicketArea = document.getElementById('totalTicketArea');
        const p1 = document.createElement('p')
        p1.innerText = btn.innerText
        const p2 = document.createElement('p')
        p2.innerText = 'Economoy'
        const p3 = document.createElement('p')
        p3.innerText = 550;
        totalTicketArea.appendChild(p1)
        totalTicketArea.appendChild(p2)
        totalTicketArea.appendChild(p3)
        let totalTicketPrice = 0;
        const totalAmountShow = document.getElementById('totalAmount');
        let totalAmount = parseFloat(document.getElementById('totalAmount').innerText);
        totalTicketPrice += parseFloat(550);
        const totalDisplayAmount = totalAmount + totalTicketPrice;
        let totalPrice = totalAmountShow.innerText = totalDisplayAmount;
        let grandTotalAmount = parseFloat(document.getElementById('grandTotalAmount').innerText);
        const grandTotalPrice = document.getElementById('grandTotalAmount');
        let totalgrandPrice = grandTotalPrice.innerText = totalDisplayAmount;
        
        validationArray.push(4);
        const puschaseBtn = document.getElementById('nextBtn')
        const couponApplyBtn = document.getElementById('couponApplyBtn')
       
        
        btn.setAttribute("disabled", true);
        if ( count >= 4){
            buttons.forEach(button => {
                button.setAttribute("disabled", true);
                
            });
        }
        if ( count < 4){
            couponApplyBtn.setAttribute("disabled", true);
        }
        else{
            couponApplyBtn.removeAttribute("disabled", true)
        }
        if(phoneNumbers.length < 1){
            puschaseBtn.setAttribute("disabled", true);
        }
         puschaseBtn.removeAttribute("disabled", true);

        
        
        
          
    })

}

const phoneNumber = document.getElementById('phoneNumbe');
const phoneNumbers = phoneNumber.value;
const puschaseBtn = document.getElementById('nextBtn')
const couponApplyBtn = document.getElementById('couponApplyBtn')
if (validationArray.length < 1){
puschaseBtn.setAttribute("disabled", true);
couponApplyBtn.setAttribute("disabled", true);
}
if(phoneNumbers.length < 1){
    puschaseBtn.setAttribute("disabled", true);
}


couponApplyBtn.addEventListener('click', function(){
    const couponField = document.getElementById('couponApplyField').value;
    const couponFieldValue = couponField.split(" ").join("").toUpperCase()
    
    if(couponFieldValue === 'NEW15'){
        const totalAmount = parseFloat(document.getElementById('totalAmount').innerText);
        const newDiscount = totalAmount * 0.15;
        const discountPrice = document.getElementById('discountPrice');
        const p1 = document.createElement('p')
        p1.innerText = 'Discount'
        const p2 = document.createElement('p')
        p2.innerText = 'BDT' + newDiscount
        discountPrice.appendChild(p1)
        discountPrice.appendChild(p2)
        const grandTotalAmount = document.getElementById('grandTotalAmount');
        const newGrandTotalPrice = parseFloat(grandTotalAmount.innerText)
        const grandTotalWithDiscount = newGrandTotalPrice - newDiscount;
        grandTotalAmount.innerText = grandTotalWithDiscount;
        const couponInputArea = document.getElementById('couponInputArea')
        couponInputArea.classList.add('hidden')
        

    }
    else if ( couponField === 'Couple 20'){
        const totalAmount = parseFloat(document.getElementById('totalAmount').innerText);
        const newDiscount = totalAmount * 0.20;
        const discountPrice = document.getElementById('discountPrice');
        const p1 = document.createElement('p')
        p1.innerText = 'Discount'
        const p2 = document.createElement('p')
        p2.innerText = 'BDT' + newDiscount
        discountPrice.appendChild(p1)
        discountPrice.appendChild(p2)
        const grandTotalAmount = document.getElementById('grandTotalAmount');
        const newGrandTotalPrice = parseFloat(grandTotalAmount.innerText)
        const grandTotalWithDiscount = newGrandTotalPrice - newDiscount;
        grandTotalAmount.innerText = grandTotalWithDiscount;
        const couponInputArea = document.getElementById('couponInputArea')
        couponInputArea.classList.add('hidden')
    }
        
    else{
        alert('invalid coupon code')
        couponField.value = " ";
    }
})

    
    



function showTeacher(subject) {
    const teacher = {
        'QUANT AND APTITUDE': '<b>Ayush Gupta</b> - ayush.gupta@gla.ac.in <br><br>Room:AB! 011, Contact: 8171248044',
        'GROUP DISCUSSION': '<b>Dr. Anjali Mehra</b><br><br>Room: AB1 403, Contact: 76589865211',
        'DATA STRUCTURES AND ALGORITHM': '<b>Sohil Khan</b> - sohil00017@gmail.com<br><br>Room: AB1 325, Contact: 7900352613',
        'FULL_STACK': '<b>Shubham Chaudhary</b> - shubhamsc704707@gmail.com<br><br>Room:AB1 325, Contact: 8376850331',
        'COMPETITIVE_PROGRAMMING': '<b>suresh pratap singh</b> - sureshpratapsingh@gla.ac.in <br><br>Room: AB1 101, Contact: 9567235412',
        'VERBAL APTITUDE': '<b>Quazi Ziauddin</b> - QuaziZiauddin@gla.ac.in <br><br>Room:AB! 011, Contact: 8457691234' ,
        'Logical Reasoning': '<b>Ayush Gupta</b> - ayush.gupta@gla.ac.in <br><br>Room:AB! 011, Contact: 8171248044',
        'Data Mining':'<b>Brajesh Shukla</b> - brajesh.shukla@gla.ac.in <br><br>Room:AB! 011, Contact: 8290994353' ,
        'NLP':'<b>Ankur Mishra</b> - ankur.mishra@gla.ac.in <br><br>Room:AB1 325, Contact:9256497472' 
    };

    
    document.getElementById('details').innerHTML = teacher[subject];
    document.getElementById('teacher').style.display = 'flex';
}

function closeModal() {
    document.getElementById('teacher').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('teacher');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
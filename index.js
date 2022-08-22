function writeCards(names, event) {


    const messages = [];
   
     for (let i = 0; i < names.length; i++) {
   
       const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
   
       
       messages.push(message);
     }
   
     return messages;
   
   }
   
   console.log(writeCards(['Guadalupe', 'Ollie', 'Aki'], 'wedding'));

   function countDown(i){

    let answer = '';
    while(i>=0){;
        answer = answer + i;
       console.log(i--);
    }
    return answer;
   }
   countDown(10);

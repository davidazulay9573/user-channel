function user(UserName){
    
   this.UserName=UserName,
     
     this.FollowingYou = [],
     this.AddFY = function(newuser,newuser1){
        this.FollowingYou.push(newuser,newuser1);
     },
   
     this.FollowingThem = [],
     this.AddFT = function(newuser,newuser1){
        this.FollowingThem.push(newuser,newuser1);
     },
     
     this.Messages = function(element1){
          this.FollowingYou.forEach((PR)=>{
            PR.MessagesTO(element1);
          })
     },
    this.MessagesTO=function (element2){
         
         console.log(`${UserName}    ${element2}`);
     }
 }

let user1 = new user('moshe');
let user2 = new user('david');
let user3 = new user('yosi');
let user4 = new user('eli');

user1.AddFY(user2,user4);
user1.AddFT(user3,user1);
user1.Messages('message from moshe');

user2.AddFY(user1,user3);
user2.AddFT(user3,user4);
user2.Messages('message from david');

user3.AddFY(user2,user4);
user3.AddFT(user1,user2);
user3.Messages('message from yosi');

user4.AddFY(user1,user3);
user4.AddFT(user2,user3);
user4.Messages('message from eli'); 

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
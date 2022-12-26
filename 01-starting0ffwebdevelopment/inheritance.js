class User{
    static count =0;
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password =password
    }

    static countUser(){
        console.log(User.count);
    }

    register(){
        User.count++;
        console.log(this.username+" is now registered ");
    }
}

let rahul = new User("rahul",  "rahpujari525@gmail.com" , "12345");
let raja = new User("raja",  "rahpujari525@gmail.com" , "12345");

rahul.register();
raja.register();

User.countUser();

class Member extends User{
    constructor(username , email , password , memberPackage){
        super(username , email , password );
        this.package = memberPackage;
    }

    getPackage(){
        console.log(this.username);
    }

    renewMembership(){
        if(this.package == "Standard"){
            
            let today = new Date()
        let Month ;
        if(today.getMonth()==11){
             Month = 1;
        }
        else {
             Month = today.getMonth()+2;
        }

        console.log(`Validate till : ${today.getDate() } ${Month} ${today.getFullYear()}`);

        }else if(this.package == "Annual"){

        let today = new Date()
        let Year ;

        Year = today.getFullYear()+1;

       

        console.log(`Validate till : ${today.getDate() } ${today.getMonth()+1} ${Year}`);

        }else{
            console.log("Package not found");
        }
    }

    MembershipActiveTillDateMonthly(){
        let today = new Date()
        let Month ;
        if(today.getMonth()==11){
             Month = 1;
        }
        else {
             Month = today.getMonth()+2;
        }

        console.log(`Validate till : ${today.getDate() } ${Month} ${today.getFullYear()}`);
    }
}

let person1 = new Member("Shivansh" , "shivansh@gmail.com" , "12345" , "Monthly");
person1.getPackage();
person1.MembershipActiveTillDateMonthly();

let person2 = new Member("Shivansh" , "shivansh@gmail.com" , "12345" , "Standard");
let person3 = new Member("Shivansh" , "shivansh@gmail.com" , "12345" , "Annual");

person2.renewMembership();
person3.renewMembership();
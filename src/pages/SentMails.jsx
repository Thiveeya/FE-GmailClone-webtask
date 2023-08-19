import axios from 'axios';

const SendMails = () => {

    return (
        <>Div</>
    )
}

const result = await axios.post("https://gmail-clonebe.onrender.com",{}, {params : {email : "rbsthivi1234@yopmail.com",password: "D7DC7D624C47EC067D214CC3310AB72907E6", email : "rbsthivi@gmail.com"}});
console.log(result);

export default SendMails;
const express=require('express');
const cors=require('cors')
const app=express();
app.use(cors());
app.use(express.json());
const dbAddUser=require('./dbAddUser');

app.get("/AddUser",async(req,res)=>{

try{
    const input=req.query;
    await dbAddUser.AddUser(input);
    res.json({message:"success"})
}catch(err){
    res.json({message:"failure"})
}


});

app.post("/AddUser",async(req,res)=>{
    try{
        const input=req.body;
        await dbAddUser.AddUser(input);
        res.json({message:"success post"})
    }catch(err){
        res.json({message:"failure post"})
    }
});

app.post("/AuthenticateUser",async(req,res)=>{
    try{
        const input=req.body;
        await dbAddUser.AuthenticateUser(input);
        res.json({opr:true})
    }catch(err){
        res.json({opr:false})
    }
});

// app.post("/AuthenticateUser", async (req, res) => {
//     try {
//         const input = req.body;
//         await dbAddUser.AuthenticateUser(input);
//         res.json({ opr: true });
//     } catch (err) {
//         console.log(err.message);
//         res.json({ opr: false });
//     }
// });


app.post("/resetpassword", async (req, res) => {
    try {
        const input = req.body;
        await dbAddUser.UpdatePassword(input);

        res.json({ message: "success post" });
    } catch (err) {
        res.json({ message: "failure post" });

    }
});


app.listen(3000);
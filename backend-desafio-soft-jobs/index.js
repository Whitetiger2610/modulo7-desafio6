const jwt = require("jsonwebtoken")
const express = require('express')
const app = express()
const cors = require('cors')
const { verificarCredenciales, registrarUsuario, getUsuario } = require("./consultas")


app.listen(3000, console.log("Servidor Encendido"))
app.use(cors())
app.use(express.json())

app.post("/login", async (req,res)=>{
    try {
        const {email,password} = req.body
        await verificarCredenciales(email, password)
        const token = jwt.sign({email}, "az_AZ", {expiresIn:"30 days"})
        res.json({token})
        console.log(token)
    } catch (error){
        console.log(error)
        res.status(error.code || 500).send(error)
    }})

app.post("/usuarios", async (req, res) =>{
    try {
        const usuario = req.body
        await registrarUsuario (usuario)
        res.send ("Usuario creado con éxito")
        } catch (error){
        res.status(500).send(error)
        }
})

app.get("/usuarios", async (req, res) => {
    try {
        const Authorization = req.header("Authorization")
        if (!Authorization || !Authorization.startsWith("Bearer ")) {
            return res.status(400).send("Token no proporcionado o mal formado")
        }
        const token = Authorization.split("Bearer ")[1]
        jwt.verify(token,"az_AZ")
        const {email} = jwt.decode(token)
        
        if (!email) {
            throw { code: 400, message: "Token inválido o faltan datos en el payload" };
          }
        const usuario = await getUsuario(email)
        if (!usuario) {
            throw { code: 404, message: "Usuario no encontrado" };
        }
        console.log("Usuario encontrado:", usuario);
        res.json([usuario])
    } catch (error) {
        console.error("Error en /usuarios:", error);
        res.status(error.code || 500).send(error.message || error);   
    }
})


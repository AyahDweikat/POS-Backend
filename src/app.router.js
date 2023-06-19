
import AuthRouter from '../src/Modules/Auth/auth.router.js'
import UserRouter from '../src/Modules/User/user.router.js'

import UnitsRouter from '../src/Modules/Unit/unit.router.js'

const initApp = (app,express)=>{
    app.use(express.json())
    app.get('/',(req, res)=>{
        return res.status(200).json({message:"success connecting!"})
    })

    app.use('/auth', AuthRouter)
    app.use('/user', UserRouter)
    app.use('/unit', UnitsRouter)



    
    app.use('*', (req, res)=>{
        res.json({message:"page not found"})
    })
}
export default initApp;
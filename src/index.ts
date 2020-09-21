import server from './main/app'
import {config} from 'dotenv'
config()
import 'reflect-metadata'
import './database/'

const port = process.env.SERVER_PORT || 3001
server.listen(port, async ()=>{
            console.log(`Ready to fly on port: ${port}`)
})
const express = require('express');
const cors = require('cors');

const { dbConection } = require('../config/dbconfig');

// Routes
const { postsRoutes } = require('../routes')


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            posts: '/api/posts'
        }

        // Conection to DB
        this.conectionDB();

        //Middlewares
        this.middlewares();

        // Routas de mi aplicación
        this.routes();

    }

    async conectionDB(){
        await dbConection();
    }

    middlewares(){
        // Cors
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
        // Directorio Público
        this.app.use(express.static('src/public'));
        // FileUpload - Carga de Archivos
        // this.app.use(fileUpload({
        //     useTempFiles: true,
        //     tempFileDir: '/tmp/',
        //     createParentPath: true
        // }));
    }
    routes(){
        this.app.use(this.paths.posts, postsRoutes);
    }
    
    listen(){
        this.app.listen( this.port , () =>{
            console.log(`the app is runnig at port: ${this.port} `)
        })
    }
    
}


module.exports = Server;
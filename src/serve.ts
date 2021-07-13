import express from 'express';
import dotenv, { config } from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index'


dotenv.config();

const serve =  express();

serve.set('view engine', 'mustache');
serve.set('views',  path.join(__dirname, 'views'));
serve.engine('mustache', mustache());

serve.use(express.static(path.join(__dirname, '../public')));

serve.use(mainRoutes);

serve.use((req, res)=>{
    res.send('pagina não encontrada');
});

serve.listen(process.env.PORT);
const mongoose = require('mongoose');
const express =  require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => { 
    console.log("listening on port "+port+"...");
});

mongoose.connect('mongodb://localhost/interactiveVideoDB', {useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

    const itemSchema = new mongoose.Schema({

        currentComponent: { type: String, required: true },
        currentProps: {
            text: { type: String},
            style: { type: String},
            theme: { type: String},
            arrow: { type: String},
            start: { type: Number},
            end: { type: Number},
            // skippable: { type: Boolean},
            moveTo: {type: Number},
            url: { type: String},
            select_title: { type: String},
            items: {type: Array},
        },
    });

    
    const Item = mongoose.model('videoItem', itemSchema);
    
    app.post('/api/insert-object', async (req, res)=> {
        
        res.send(req.body);
        
        const item = new Item({
            currentComponent: req.body.currentComponent,
            currentProps: {
                text: req.body.currentProps.text,
                style: req.body.currentProps.style,
                start: req.body.currentProps.start, 
                end: req.body.currentProps.end,
                theme: req.body.currentProps.theme,
                arrow: req.body.currentProps.arrow,
                // skippable: req.body.currentProps.skippable,
                moveTo: req.body.currentProps.moveTo,
                url: req.body.currentProps.url,
                select_title: req.body.currentProps.select_title,
                // items: req.body.currentProps.items,
                items: req.body.currentProps.items,
            },
        });
        const result = await item.save();
        console.log(result);
    });


    app.get('/api/objects', async (req, res)=> {

        const elets =  await Item.find();
        res.send(elets);
        console.log(elets);
    });
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mern_sample',{
    useNesUrlParser: true,
    useUnifiedTopology: true
})

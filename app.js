// importing express
import express from 'express';

// creating an instance of express
const app = express();

const PORT = 3005;

// enabling static file sharing
app.use(express.static('public'));

// middleware
app.use(express.urlencoded({ extended: true }));

// defining a route for the home page
app.get('/', (req, res) => {
   res.sendFile(`${import.meta.dirname}/views/home.html`); 
});

//submit vacation inquiry and redirect to the confirmation page
app.post('/submit-inquiry', (req, res) => {
    const details ={
        destination: req.body.city,
        departureDate: req.body['departure-date'],
        travelers: req.body.travelers
    };
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
    
});

//Starting the server and listen on the designated port 
app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
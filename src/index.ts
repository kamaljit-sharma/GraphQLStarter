import app from './App';

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`listening on ${PORT}`);
});
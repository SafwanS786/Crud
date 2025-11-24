let http = require('http');

const ser = http.createServer(function (req, res) {
    res.write('Safwan shaikh\n');
    res.write('Hello Bhai\n');
    res.end();
});

const PORT = 3000;
ser.listen(PORT, () => {
    // console.log(`Server Running on ${PORT}`)
    console.log(`Server Running on ${PORT}`);
});
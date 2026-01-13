
//npm create vite@latest my-calculator-app -- --template react
const http= require('http');
const fs= require('fs');

const server= http.createServer((req, res)=>{

    // Set response headers
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Server', 'Node.js');

    // write the file 
    if( req.url=='/write'){
        fs.writeFileSync('server.txt', 'file created via Http');
        res.end('file written');
    }

    //read the file
    else if(req.url=='/read'){
        const data =fs.readFileSync('server.txt','utf-8');
        res.end(data);

    }
    // delete the file
    else if(req.url=='/delete'){
    fs.unlinkSync('server.txt');
    res.end('File Deleted');
    }

    // Piping example
    else if(req.url=='/pipe'){
        // Check if file exists before piping
        if(fs.existsSync('server.txt')){
            const readStream = fs.createReadStream('server.txt', 'utf-8');
            readStream.pipe(res);
        } else {
            res.end('File does not exist. Create it first by visiting /write');
        }
    }

    // Shutdown server
    else if(req.url=='/shutdown'){
        res.end('Server is shutting down...');
        server.close(()=>{
            console.log('Server has been shut down');
        });
    }

    else{
        res.end('Welcome to the Node.js Server');

    }

});


// want to listen to port
server.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});



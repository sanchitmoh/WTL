const fs= require('fs');

// 1. Create folder
fs.mkdir('myFolder',(err)=>{
    if (err && err.code !== 'EEXIST') throw err;
    console.log("1. Folder created successfully");
    
    // 2. Write file inside folder
    fs.writeFile('myFolder/demo.txt','Hello This is file handling in Node.js', (err)=>{
        if (err) throw err;
        console.log("2. Data written successfully");
        
        // 3. Read file
        fs.readFile('myFolder/demo.txt','utf-8',(err,data)=>{
            if (err) throw err;
            console.log("3. File content:",data);
            
            // 4. Append the file
            fs.appendFile('myFolder/demo.txt','\nAppending new data ',(err)=>{
                if (err) throw err;
                console.log("4. File appended");
                
                // 5. Rename folder
                fs.rename('myFolder','renamedFolder',(err)=>{
                    if (err) throw err;
                    console.log("5. Folder renamed successfully");
                    
                    // 6. Rename file (now in renamed folder)
                    fs.rename('renamedFolder/demo.txt','renamedFolder/newDemo.txt',(err)=>{
                        if (err) throw err;
                        console.log("6. File renamed successfully");
                        
                        // 7. Delete file
                        fs.unlink('renamedFolder/newDemo.txt',(err)=>{
                            if (err) throw err;
                            console.log("7. File deleted");
                        });
                    });
                });
            });
        });
    });
});

function a() {
    return new Promise(function(resolve,reject){
        const gh=false;
        if(gh)
          resolve();
          else
          reject();
    });
}

a().then(function(){
    console.log("suceess");
}).catch(function(){
    console.log("bad");
});
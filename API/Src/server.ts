import app from './app'

function main(){
    try{
        app.listen(5000, () => {
            console.log("The API has started");
        })
    }catch(err){
        console.error("Starting server error: ", err);
    }
}


main()
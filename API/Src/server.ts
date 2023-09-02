import App from './App'

function main(){
    try{
        App.listen(5000, () => {
            console.log("The API has started");
        })
    }catch(err){
        console.error("Starting server error: ", err);
    }
}


main()
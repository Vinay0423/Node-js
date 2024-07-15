// console.log("These will fetch the data ");

let data;

async function fetchingData(){
    try {
    let res=  await fetch('http://127.0.0.1:5000')
   data = await res.json()
console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchingData()











let data;
async function fetchingData(){
    try {
        const res= await fetch('http://localhost:5000/')
         data= await res.json()
        console.log(data);
    } catch (error) {
        console.log('data not loaded');
    }
    const first=document.getElementById('first')
    const second=document.getElementById('second')
    const skill01=document.getElementById('skills01')
    const skill02=document.getElementById('skills02')
    first.innerText=data[0].name;
    second.innerText=data[0].skills;
    skill01.innerText=data[1].name;
    skill02.innerText=data[1].skills;
}

fetchingData()




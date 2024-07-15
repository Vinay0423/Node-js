

function comparsion(arr1,arr2){

    if(arr1.length === arr2.length){
      
        for(let i=0;i<arr1.length;i++){
            if(arr1[i]===arr2[i]){
                console.log('Compared successfully');
            } else{
                console.log('Not compared');
            }
        } 
        
    }else{
        console.log('array length is nnot matching');
    }

}

const value1 = new Uint32Array([1234567890, 987654321]); //two 32 bits combined to get 64 bit
const value2 = new Uint32Array([1234567890, 987654321]);
const value3 = new Uint32Array([1234567890, 967654321]);

comparsion(value1,value2)
comparsion(value1,value3)
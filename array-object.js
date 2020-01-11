var array = [-1,5,"cat",false,10, 2,true,"dog"];
//function that takes an parameter and return and object
//convert array into object with the properties group by its type
function ArrayObject(input) {
//create and empty array
    var array2={
    string:[],
    number:[],
    boolean:[],
};
    //loop through each element of the array
    var i;
    for(i =0; i<input.length;i++)
    {
        // document.write(typeof (array[i]));//this prints the type of elements
       var type= array2[typeof(input[i])];
       var value=input[i];
        type.push(value);
    }
    //convert javascript object into string using json.stringify
     return JSON.stringify(array2,null,5);
}
//calling the function
document.write(ArrayObject(array));
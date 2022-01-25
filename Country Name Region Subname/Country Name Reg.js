const request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");
request.send();

request.onload=function()
{ 
    if (request.status==200)
    {
        let countries=JSON.parse(request.responseText)
        countries.map((n)=>
        {
            console.log(n.name.official);
        });
        countries.map((reg)=>
        {
            console.log(reg.region);
        });
        countries.map((sub)=>
        {
            console.log(sub.subregion);
        });
        countries.map((pop)=>
        {
            console.log(pop.population);
        });
        }else {
        request.onerror=function()
        {
            console.log("error");
        };
    };
}; 

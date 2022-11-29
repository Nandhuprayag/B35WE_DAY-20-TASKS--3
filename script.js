console.log('Hi')
 const API="https://www.fishwatch.gov/api/species";



let originalData=[];

let getAllContent=() =>
{
    fetch(`${API}`)
    .then(response => response.json())
    .then(data => 
    {
        document.querySelector('.fisher-display').innerHTML=populateData(data)
       console.log(data)
    })
    
}
getAllContent()

//Calling the PopulateData and pass the received Data

const populateData =(data) =>
{
    let viewContent='';
    for(let i=0;i<data.length;i++)
    {
        viewContent +=`<ul class="list-group border border-4 border-info shadow rounded m-2">
    <li class="list-group-item"><span><strong>Availability :</strong>${data[i].Availability}</span></li>
    <li class="list-group-item"><span><strong>Biology  :</strong>${data[i].Biology}</span></li>
    <li class="list-group-item"><span><strong>Bycatch  :</strong>${data[i].Bycatch}</span></li>
    <li class="list-group-item"><span><strong>Color  :</strong>${data[i].Color}</span></li>
    <li class="list-group-item"><span><strong>Location  :</strong>${data[i].Location}</span></li>
    <li class="list-group-item"><span><strong>Harvest  :</strong>${data[i].Harvest}</span></li>
    <li class="list-group-item"><span><strong>Taste  :</strong>${data[i].Taste}</span></li>
    </ul>`

    }
  return viewContent
}
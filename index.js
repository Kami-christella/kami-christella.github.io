class Transport{
    constructor(firstName,secondName,tel,Agency,carPark){
        this.firstName=firstName
        this.secondName=secondName
        this.tel=tel
        this.Agency=Agency
        this.carPark=carPark
    }
}

const tenDigits=document.getElementById('tel').value
if(tenDigits>10){
    document.getElementById('worn').innerHTML='please write 10 numbers'
}

document.querySelector('#info').addEventListener('submit',function(e){
    e.preventDefault()
  
    const fName=e.target.firstN.value
    const sName=e.target.secondN.value
    const tel=e.target.tel.value
    parseInt(tel)
    const agency=e.target.check.value
    const Gare=e.target.book.value

   let data=new Transport(fName,sName,tel,agency,Gare)
    console.log(data);
    console.log(typeof data)
    e.target.firstN.value=''
    e.target.secondN.value=''
    e.target.tel.value=''
    e.target.check.value=''


const stringData=JSON.stringify(data)
const datJSON=localStorage.setItem('Transport',stringData)   

localStorage.getItem('person')

    document.getElementById('info').innerHTML=` your name is ${fName} ${sName}, your tel number is ${tel}
        you booked ${agency} in ${Gare}`
    

// const p=document.createElement('p')
// p.textContent=` you name is ${fName} ${sName}, your tel number is ${tel}
// you booked ${agency} in ${Gare} `
// document.querySelector('#para').appendChild(p)
})

//Things to correct or add
   //1.Find Library for id
   //2.How to store multiple data on localStorage
   //3.How to update things on LocalStorage
   //4.To make checkBox Required
   //5.To set telephone number to 10 units

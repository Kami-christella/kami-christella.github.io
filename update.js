class Transport{
    constructor(firstName,secondName,tel,Agency,carPark){
        this.firstName=firstName
        this.secondName=secondName
        this.tel=tel
        this.Agency=Agency
        this.carPark=carPark
    }
}

document.querySelector('#info').addEventListener('submit',function(e){
    e.preventDefault()
    const fName=e.target.firstN.value
    const sName=e.target.secondN.value
    const tel=e.target.tel.value
    const agency=e.target.check.value
    const Gare=e.target.book.value

   let data=new Transport(fName,sName,tel,agency,Gare)
    console.log(data)
    e.target.firstN.value=''
    e.target.secondN.value=''
    e.target.tel.value=''
    e.target.check.value=''
    
    
})
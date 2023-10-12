const datalist = document.querySelector("#datalist");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const inputdialog = document.querySelector("#inputdialog");

fetch("https://botpnjback.onrender.com/api/v1/QAs")
.then(response=>response.json())
.then(({data})=>{
    data.forEach(dialog => {
        datalist.innerHTML += `<option value="${dialog.value}">`
    })

    inputdialog.addEventListener("change", e=>{
        data.forEach(dialog =>{
            if(e.target.value === dialog.value){
                question.innerHTML = dialog.question
                answer.innerHTML = dialog.answer
            }
        })
    })
})
.catch(error=>console.log(error))

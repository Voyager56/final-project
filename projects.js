;const projects = document.querySelector('.projects')
const categories = document.querySelector(`.categories`)


const projectArray = Array.from(projects.children)
const categoriesArray = Array.from(categories.children)
categoriesArray.shift()
console.log(categoriesArray)

categoriesArray.forEach((categorie,index) => {
    categorie.addEventListener(`click`, () => {
        const project = document.querySelector(`[data-id = '${index}']`)
        console.log(project)
        project.style.backgroundColor = "black"
    })

})
// projectArray.forEach((project,index) => {
//     if(index % 2 == 0 ){
//         project.style.backgroundColor = "#555555"
//     }else{
//         project.style.backgroundColor = "#848484"
//     }
//     project.addEventListener(`click`, (e) => {
//         if(index % 2 == 0 ){
//             project.style.backgroundColor = (project.style.backgroundColor = "#555555")? "black":"#555555";
//         }else{
//             project.style.backgroundColor = (project.style.backgroundColor = "#848484")? "black":"#848484";
//         }
//     })
// })

function resetColors(project){
        if(index % 2 == 0 ){
        project.style.backgroundColor = "#555555"
        }else{
        project.style.backgroundColor = "#848484"
        }
}
const projects = document.querySelector('.projects')
const categories = document.querySelector(`.categories`)
const all = document.querySelector(`#all`)

const projectArray = Array.from(projects.children)
const categoriesArray = Array.from(categories.children)
categoriesArray.shift()
console.log(all)

all.addEventListener(`click`, (e) => {
    resetColors(projectArray)
    const invisible = Array.from(document.querySelectorAll(`.invisible`))
    invisible.forEach(element => {
        element.style.display = "initial"
    })
    all.style.color = "var(--main)"
})

categoriesArray.forEach((categorie,index) => {
    categorie.addEventListener(`click`, () => {
        resetColors(projectArray)
        const project = document.querySelector(`[data-category = '${index}']`)
        project.style.backgroundColor = "black"
        const invisible = project.getElementsByClassName(`invisible`)[0]
        invisible.style.display = "initial"
        categorie.style.color = "var(--main)"
    })

})
projectArray.forEach((project,index) => {
    if(index % 2 == 0 ){
        project.style.backgroundColor = "#555555"
    }else{
        project.style.backgroundColor = "#848484"
    }
    project.addEventListener(`click`, (e) => {
        resetColors(projectArray)
        project.style.backgroundColor = "black"
        const invisible = project.getElementsByClassName(`invisible`)[0]
        invisible.style.display = "initial"
        categoriesArray[index].style.color = "var(--main)"
    })
})

function resetColors(projects){
    projects.forEach((project,index)=> {
        if(index % 2 == 0 ){
            project.style.backgroundColor = "#555555"
        }else{
            project.style.backgroundColor = "#848484"
        }
        const invisible = Array.from(document.querySelectorAll(`.invisible`))
        invisible.forEach(element => {
            element.style.display = "none"
            })
    })
        categoriesArray.forEach(categorie => {
            categorie.style.color = "white"
        });
        all.style.color = "white"
}
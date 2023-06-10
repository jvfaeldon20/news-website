// import jsonData from "./api.json" assert {type: 'json'};

let jsonData = [
    {
        "is_read": true,
        "title": "Front-End vs Back-End Developer: What's the Difference?",
        "image_path": "./assets/img/Image-8.png",
        "publish_date": "January 3, 2023",
        "is_favorite": false,
        "likes": "4.8"
    },
    {
        "is_read": false,
        "title": "What is a Full Stack Developer?",
        "image_path": "./assets/img/Image-7.png",
        "publish_date": "January 12, 2023",
        "is_favorite": false,
        "likes": "3.2"
    },
    {
        "is_read": true,
        "title": "What are Soft Skills and How Do They Benefit Your Career?",
        "image_path": "./assets/img/Image-6.png",
        "publish_date": "January 22, 2023",
        "is_favorite": true,
        "likes": "2.6"
    },
    {
        "is_read": true,
        "title": "IT Jobs: In-Demand, Available to Everyone, Ripe With Opportunity",
        "image_path": "./assets/img/Image-5.png",
        "publish_date": "January 29, 2023",
        "is_favorite": true,
        "likes": "7.6"
    },
    {
        "is_read": false,
        "title": "7 Learning Tips for Data Science Self-Study",
        "image_path": "./assets/img/Image-4.png",
        "publish_date": "February 1, 2023",
        "is_favorite": false,
        "likes": "1.5"
    },
    {
        "is_read": false,
        "title": "Hard Skills vs. Soft Skills: Do you Really Need Both? Why?",
        "image_path": "./assets/img/Image-3.png",
        "publish_date": "February 10, 2023",
        "is_favorite": false,
        "likes": "4.9"
    },
    {
        "is_read": false,
        "title": "What is JavaScript?",
        "image_path": "./assets/img/Image-2.png",
        "publish_date": "February 16, 2023",
        "is_favorite": false,
        "likes": "3.1"
    },
    {
        "is_read": false,
        "title": "Who is a Business Analyst: Roles, Skills, Salaries, Job Prospects",
        "image_path": "./assets/img/Image-1.png",
        "publish_date": "February 22, 2023",
        "is_favorite": false,
        "likes": "2.4"
    },
    {
        "is_read": true,
        "title": "How Much Do Data Analysts Make? 2023 Salary Guide",
        "image_path": "./assets/img/Image.png",
        "publish_date": "February 24, 2023",
        "is_favorite": true,
        "likes": "2.6"
    }
]

function getData(jsonData){
    for(let i=0; i < jsonData.length; i++){
        // DOM elements
        const item              = document.getElementById('items');
        const card              = document.createElement('div');
        const cardImage         = document.createElement('img');
        const cardOverlay       = document.createElement('div')
        const cardItem          = document.createElement('div')
        const cardReadMark      = document.createElement('span')
        const cardHeader        = document.createElement('div')
        const cardFooter        = document.createElement('div')
        const cardSpacer        = document.createElement('hr')
    
        // Like
        let isFavorite          = jsonData[i].is_favorite
        let likeStatus          = !isFavorite ? "" : "active"
        let likeIcon            = !isFavorite ? "fa-regular" : "fa-solid"
        let btnFavorite         = `<a onclick="toggleLike(${i})" id="btn-like_${i}" class="${likeStatus}"><i class="fa-heart ${likeIcon}" id="like-icon_${i}"></i> ${jsonData[i].likes}k</a>`        
    
        // Read Mark
        let isRead              = jsonData[i].is_read
        let readStatus          = !isRead ? "inactive" : "read"
        let readIcon            = !isRead ? "fa-regular" : "fa-solid"
        let btnReadMark         = `<i class="${readIcon} fa-circle-check ${readStatus}" id="read-icon_${i}"></i>`
    
        // DOM element classes 
        card.className          = `card card-${i}`
        cardImage.className     = "img-size" 
        cardItem.className      = "card-item"
        cardReadMark.className  = `read-mark read-${i}`
        cardHeader.className    = 'card-header'
        cardFooter.className    = "card-footer"
        cardOverlay.className   = "overlay"

        // DOM Events
        cardReadMark.setAttribute("onclick", `toggleRead(${i})`)
        cardOverlay.setAttribute("onclick", `toggleRemoveCard(${i})`)
    
        // DOM attributes
        cardImage.src           = `${jsonData[i].image_path}`;
        cardReadMark.innerHTML  = btnReadMark
        cardHeader.innerText    = `${jsonData[i].title}` 
        cardFooter.innerHTML    = `<ul><li class="publish-date">${jsonData[i].publish_date}</li><li>${btnFavorite}</li></ul>`
        cardOverlay.innerHTML   = `<a><i class="fa-regular fa-circle-xmark"></i></a>`
    
        // DOM eleement append
        cardItem.appendChild(cardReadMark)
        cardItem.appendChild(cardHeader)
        cardItem.appendChild(cardSpacer)
        cardItem.appendChild(cardFooter)
        card.appendChild(cardImage)
        card.appendChild(cardOverlay)
        card.appendChild(cardItem)
        item.append(card)
    }
} getData(jsonData)


function toggleDrawerMenu(){
    let navLink = document.querySelector(".nav-link");
    navLink.style.display = !navLink.style.display ? "block":""
}


function toggleLike(index){
    // updating the data by index
   jsonData[index].is_favorite = !jsonData[index].is_favorite

    // updating the ui
   let btnLike = document.getElementById(`btn-like_${index}`)
   let likeIcon = document.getElementById(`like-icon_${index}`)

    btnLike.classList.toggle('active')
    if(jsonData[index].is_favorite){
        likeIcon.classList.remove('fa-regular')
        likeIcon.classList.add('fa-solid')
    }else{
        likeIcon.classList.remove('fa-solid')
        likeIcon.classList.add('fa-regular')
    }
}

function toggleRemoveCard(index){
    // updating the list
    let newJsonData = jsonData.filter((key, i) => i !== index)
    
    // removing target card by index
    let card = document.querySelector(`.card-${index}`)
    card.style.display = "none"
}

function toggleRead(index){
   // updating the data by index
   jsonData[index].is_read = !jsonData[index].is_read

    // updating the ui
   let btnRead = document.querySelector(`.read-${index}`)
   let readIcon = document.getElementById(`read-icon_${index}`)


   readIcon.classList.remove('fa-regular')
   readIcon.classList.add('fa-solid')
   readIcon.style.color = '#192140'
}




// <div class="card">
//     <img src="./assets/img/Image-8.png" alt="" class="img-size">
//     <div class="card-item">
//         <span class="read-mark"><i class="fa-regular fa-circle"></i></span>
//         <div class="card-header">Front-End vs Back-End Developer: What's the Difference?</div><hr>
//         <div class="card-footer">
//             <ul>
//                 <li class="publish-date">January 3, 2023</li>
//                 <li><a href="#"><i class="fa-regular fa-heart"></i> 7.6k</li></a>
//             </ul>
//         </div>
//     </div>
// </div>

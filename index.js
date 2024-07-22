// sidebar

const menuItems = document.querySelectorAll(".menu-item")

const  messagesNotification = document.querySelector('#message-notification');
const  messages = document.querySelector('.messages')

const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search')

const theme = document.querySelector('#theme');
const themeMode = document.querySelector('.customize-theme')

// remove active class

const removeActiveclass = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

//notifications
menuItems.forEach(items => {
    items.addEventListener('click', () => {
        removeActiveclass();
        items.classList.add('active');
        if (items.id != 'notifications') {
            document.querySelector('.notification-popup').
                style.display = 'none';
        } else {
            document.querySelector('.notification-popup').
                style.display = 'grid';
            document.querySelector('#notifications .notification-count').
                style.display = 'none'
        }
    })
})

const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    console.log(val)
    message.forEach(chat =>{
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}

//search bar
messageSearch.addEventListener('keyup', searchMessage);

//messages
messagesNotification.addEventListener('click', () => {
        messages.style.boxShadow = '0 0 1rem var(--color-primary)';
        messagesNotification.querySelector('.notification-count').
        style.display = 'none'
        setTimeout(()=>{
            messages.style.boxShadow = 'none';
        }, 2000)
})


//Theme


const openThemeModel = () =>{
    themeMode.style.display = 'grid';
}

const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeMode.style.display = 'none';
    }
}

//close modal
themeMode.addEventListener('click', closeThemeModal)

//open mode
theme.addEventListener('click', openThemeModel)


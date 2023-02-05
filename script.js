const allBtn =  document.querySelectorAll('.btn');

for(let i of allBtn){
    i.addEventListener('click', () => {
        if(i.classList.toggle('unfollow')){
            i.innerText = 'Unfollow';
        }
        else{
            i.innerText = 'Follow';
        }
    })
}


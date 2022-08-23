document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }

});
document.getElementById('center-3rd').addEventListener('click', function(){
    const third = document.getElementById('3rd-friend');
    third.style.textAlign = 'center';
});
document.getElementById('add-frnd').addEventListener('click', function(){
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>Something new add</p>
    `;
    friendContainer.appendChild(friend);
});
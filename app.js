const navigation = document.querySelector( "ul" );
const icon = document.querySelector( "ion-icon" );



const tooglebtn = (e)=>{
    e.name === "menu" ? (e.name = "close", navigation.classList.add( "z-[100]" ) ) :( e.name = "menu", navigation.classList.remove( "z-[100]" ));
    
}

icon.addEventListener( "click", () => {
    navigation.classList.toggle( "top-24" );
    ;
})

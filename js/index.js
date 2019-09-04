// Your code goes here
//changes color of the Heading
const funBusHeading = document.querySelector('.logo-heading');
funBusHeading.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

  //console.logs phrase at every key press
  const forBody = document.querySelector('body');
  forBody.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    console.log(`Here we go again!!!`)
  });

  // changes opacity when double clicked
const mapImage = document.querySelector('.img-content');
mapImage.addEventListener('dblclick', function (e) {
    e.target.style.opacity = 0.5;
});

// changes opacity when clicked
const adventureAwaits = document.querySelector('.content-destination img');
adventureAwaits.addEventListener('click', function (e) {
    e.target.style.opacity = 0.7;
});

// changes color when mouse moves over
destinationTitle = document.querySelectorAll('.destination h4')
destinationTitle.forEach(attr => {
    attr.addEventListener('mousemove', function(event){
        event.target.style.color = 'purple';
    })
})

// changes background color when clicked
const signUpButton = document.querySelectorAll('.btn');
signUpButton[0].addEventListener("click", (e) => {
    e.target.style.background = 'purple';
  })

  // changes background color when mouse enters
signUpButton[2].addEventListener("mouseenter", (e) => {
    e.target.style.background = 'blue';
})

// changes opacity when resized
window.addEventListener('resize', () => {
  if (!document.body.style.opacity) {
    document.body.style.opacity = 1;
  }
  document.body.style.opacity = Number(document.body.style.opacity) * 0.9;
});


// Stop the navigation from items from refreshing the page
const navItems = document.querySelector('.nav');

// logs out 'clicked on navlink'
navItems.addEventListener('click', (e) => {
    console.log(e);
    e.preventDefault();
    console.log("clicked on navlink");
});

// prevent the event propagation
forBody.addEventListener("click", event => {
    console.log(`I clicked the body`)

    signUpButton[1].addEventListener('click', (e) => {
        console.log("middle signup button clicked");
        e.stopPropagation();
      })
});


  
/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


// JavaScript to create an infinite typing loop for the "down" span
const downSpan = document.querySelector('.down');
const text = downSpan.textContent;
downSpan.textContent = ''; // Clear the text

function type() {
  let index = 0;
  function nextCharacter() {
    if (index < text.length) {
      downSpan.textContent += text.charAt(index);
      index++;
      setTimeout(nextCharacter, 100); // Delay between characters (adjust as needed)
    } else {
      // After typing the entire text, clear the text and start over
      setTimeout(() => {
        downSpan.textContent = '';
        setTimeout(type, 1000); // Delay before starting over (adjust as needed)
      }, 1000); // Delay after typing the entire text (adjust as needed)
    }
  }

  // Start the typing effect
  nextCharacter();
}

// Start the initial typing effect
type();










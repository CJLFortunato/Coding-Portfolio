/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const toggleInput = document.getElementById("drop-btn");
let isDropdownOpened = false;
toggleInput.onclick = dropdownFunc;


function dropdownFunc() {
    document.getElementById("myDropdown").style.display = 'block';
    isDropdownOpened = true;
    console.log(toggleInput);
  }
  
  // Close the dropdown menu if the user clicks outside of it
  // window.onclick = function(event) {
  //   if (!event.target.matches('.portrait')) {
  //     // document.getElementById("myDropdown").style.display = 'none';
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     console.log(dropdowns);
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.style.display = 'block') {
  //         openDropdown.style.display = 'none';
  //       }
  //     }
  //   }
  // }
function closeDropdown() {
  if (isDropdownOpened === true) {
    document.getElementById("myDropdown").style.display = 'none';
  }
}

document.getElementById("close-btn").onclick = closeDropdown;
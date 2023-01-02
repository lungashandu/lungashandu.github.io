var modal = document.getElementById("myModal");
var btn = document.getElementById("BTNmore");
var span = document.getElementsByClassName("close")[0];
//Displaying the modal whenever the instructions button is clicked
btn.onclick = function(){
    modal.style.display = "block";
}
//Closing the the modal whenever the close button on the modal is clicked
span.onclick = function() {
    modal.style.display = "none";
}
//Close the modal when user clicks outside of the modal
window.onclick = function(event){
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}
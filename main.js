var images = ["istockphoto-469506620-612x612.jpg","51337458-thubs-up-baby.webp", "A_Happy_Working_Mom_Cartoon.svg.png" , "360_F_138711505_K9YfscnlghBdBE1MvQbgUGixdRNKEg2p.jpg"];
var names = ["Family Book","Vivaan Chowdhary", "Kabir Chowdhary", "Jessica Chowdhary", "Rahul Chowdhary"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

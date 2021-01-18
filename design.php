<!DOCTYPE html>
<html lang="en">
   <!-- Basic -->
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <!-- Mobile Metas -->
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <!-- Site Metas -->
   <title>DESIGN | William Wallace</title>
   
   <?php include('includes/header.php') ?>
    
     <!-- about section -->
     <section>
      <div class="container">
         <div class="row">
         <div class="col-lg-12 text_align_center">
            <div class="col-lg-12 text_align_center" id="gallery" data-toggle="modal" data-target="#exampleModal">
               <div class="full large2">
                  <p class="large2center">Design</h3>
                  <p class="large"> Here are some of my renders, using Blender.
                     <br><br>

                     <div class="column2"><img src="renders/chair-loop.gif"            width="500px"  onclick="openModal();currentSlide(1)"  class="hover-shadow"></div>
                     <div class="column2"><img src="renders/doughnut_forward_trim.gif" width="500px"  onclick="openModal();currentSlide(3)"  class="hover-shadow"></div>
                     <div class="column3"><img src="renders/scene.png"                 width="1050px" onclick="openModal();currentSlide(2)"  class="hover-shadow"></div>
                     <div class="column3"><img src="renders/CoffeCup5.png"             width="1050px" onclick="openModal();currentSlide(4)"  class="hover-shadow"></div>
                     <div class="column3"><img src="renders/doughnut.png"              width="1050px" onclick="openModal();currentSlide(5)"  class="hover-shadow"></div>
                  <!--<input type="image" src="renders/PenRendeWithPaperWideAngle.PNG" class="img-responsive"  width="1000px"onclick="location.href='blog.php';" />  -->
               </div>

               <!-- The Modal/Lightbox -->
               <div id="myModal" class="modal">
                          <span class="close cursor" onclick="closeModal()">&times;</span>
                          <div class="modal-content">

                            <div class="mySlides"><img src="renders/chair-loop.gif"            style="width:70%"></div>
                            <div class="mySlides"><img src="renders/doughnut_forward_trim.gif" style="width:70%"></div>                            
                            <div class="mySlides"><img src="renders/scene.png"                 style="width:100%"></div>                            
                            <div class="mySlides"><img src="renders/CoffeCup5.png"             style="width:100%"></div>                            
                            <div class="mySlides"><img src="renders/doughnut.png"              style="width:100%"></div>                            
                            

                            <!-- Next/previous controls -->
                            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                            <a class="next" onclick="plusSlides(1)">&#10095;</a>

                            <!-- Caption text -->
                            <div class="caption-container">
                              <p id="caption"></p>
                            </div>
                            <!-- Thumbnail image controls -->
                            
                            <script src="js/lightbox.js"></script>
                            
                           <div>  

            </div>
         </div>
         </div>
      </div>
   </section>
   <!--end section -->
     

      
   <?php include('includes/footer.php') ?>

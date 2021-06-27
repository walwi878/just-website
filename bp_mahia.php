<!DOCTYPE html>
<html lang="en">
   <!-- Basic -->
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <!-- Mobile Metas -->
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <!-- Site Metas -->
   <title>Mahia | William Wallace</title>
   
   
   <?php include('includes/header.php') ?>
      
    
     <!-- about section -->
     <section>
      <div class="container">
         <div class="row">
            <div class="col-lg-12 text_align_center">
               <div class="full large2">
                  <p class="large2">Mahia Peninsula          
                  </p>
                  <p class="p3 ">20/05/2021    |    <a class="barcode" href="https://www.google.com/maps/place/Mahia+Peninsula/@-39.1648788,177.7709866,11z/data=!3m1!4b1!4m5!3m4!1s0x6d66488be1f5b49d:0xa06b246538797be0!8m2!3d-39.1558664!4d177.8746146">View in Google Maps</a></p>
                  <br>
                  <p class="p4">
                  A short detour during a recent road trip to Wairoa uncovered the picturesque town of Mahia on the east coast of New Zealand.  
                  </p>
                  </div>
                  <p class="p4">
                  <div class="centre"><img src="images/blog_images/mahia-1.jpg" width="800px" onclick="openModal();currentSlide(1)"  class="hover-shadow"></div>
                  <br>
                  <div class="centre"><img src="images/blog_images/mahia-2.jpg" width="800px" onclick="openModal();currentSlide(2)"  class="hover-shadow"></div>
                  <br>
                  <div class="centre"><img src="images/blog_images/mahia-3.jpg" width="800px" onclick="openModal();currentSlide(3)"  class="hover-shadow"></div>
                  <br>
                  <div class="centre"><img src="images/blog_images/mahia-4.jpg" width="800px" onclick="openModal();currentSlide(4)"  class="hover-shadow"></div>
                  <br>
                  <div class="centre"><img src="images/blog_images/mahia-5.jpg" width="800px" onclick="openModal();currentSlide(5)"  class="hover-shadow"></div>
                  <br>
                  <br>
                  <p class="p3"> On the way home, we had time for a brief stop at Lake Tutira, in the hills north of Napier.
                  <br><br><br>
                  <div class="centre"><img src="images/blog_images/mahia-6.jpg" width="800px" onclick="openModal();currentSlide(6)"  class="hover-shadow"></div>
                  <br>
                  <div class="centre"><img src="images/blog_images/mahia-7.jpg" width="800px" onclick="openModal();currentSlide(7)"  class="hover-shadow"></div>
                  <br>  
                </p>
               </div>
               <!-- The Modal/Lightbox -->
               <div id="myModal" class="modal">
                          <span class="close cursor" onclick="closeModal()">&times;</span>
                          <div class="modal-content">

                            <div class="mySlides"><img src="images/blog_images/mahia-1.jpg" width="1200px"></div>
                            <div class="mySlides"><img src="images/blog_images/mahia-2.jpg" width="1200px"></div>                            
                            <div class="mySlides"><img src="images/blog_images/mahia-3.jpg" width="1200px"></div>                            
                            <div class="mySlides"><img src="images/blog_images/mahia-4.jpg" width="1200px"></div>  
                            <div class="mySlides"><img src="images/blog_images/mahia-5.jpg" width="1200px"></div>    
                            <div class="mySlides"><img src="images/blog_images/mahia-6.jpg" width="1200px"></div>    
                            <div class="mySlides"><img src="images/blog_images/mahia-7.jpg" width="1200px"></div>         
                            <!-- Next/previous controls -->
                            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                            <a class="next" onclick="plusSlides(1)">&#10095;</a>

                            <!-- Caption text -->
                            <div class="caption-container">
                              <p id="caption"></p>
                            </div>
                            <!-- thumb2nail image controls -->
                            
                            <script src="js/lightbox.js"></script>
                            
                           <div>         
            </div>
         </div>
      </div>
   </section>
      <!-- end about section -->

      <?php include('includes/footer.php') ?>
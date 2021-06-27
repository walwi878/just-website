<!DOCTYPE html>
<html lang="en">
   <!-- Basic -->
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <!-- Mobile Metas -->
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <!-- Site Metas -->
   <title>Automated Alarm Clock| William Wallace</title>
   
   
   <?php include('includes/header.php') ?>
      
    
     <!-- about section -->
     <section>
      <div class="container">
         <div class="row">
            <div class="col-lg-12 text_align_center">
               <div class="full large2">
                  
                  <p class="large2">A better alarm clock, powered by LED strips and sleep science</p>
</div>
<div class="full">
                  <p class="p3 ">03/01/2021</u>
                  <br> <br> 
                  <p class="p4">
                  I’m currently reading Why We Sleep by<a class="barcode" href="https://www.amazon.com/Why-We-Sleep-Unlocking-Dreams/dp/1501144316"> Matthew Walker</a>. There’s an interesting section where he discusses the potential of technology and sleep science to improve our lives in the future. I was surprised that many of the suggestions seem achievable today for anyone with the right home automation devices. Here’s an excerpt:
                    <br>
                    <p class="p4 center col" width="600px"><i><strong>Come the morning, we can… saturate our indoor environments with powerful blue light <br>that shuts off any lingering melatonin. This will help us wake up faster, more alert, and <br> with a brighter mood, morning after morning.</strong></i></p>
<br>
<p class="p4">Sounds desirable, right? I’ve been using my bedroom LED strips as an wake-up alarm light for years now. After reading the paragraph above, I was inspired to make a couple of improvements to the system.
<br>
<p class="p3 ">Blue light alarm</p>
<p class="p4">This is the easy bit! Previously my wake up light had a few phases. The idea was to simulate a sunrise - the lights would shift from off to orange to white. I simplified it such that now they just turn on to melatonin-busting blue. Here’s an example of my new wake-up script in Home Assistant. It’s not rocket science and simply wraps a light.turn_on service call.
<br>

<div class="centre"><img src="images/blog_images/alarm-code.png" width="600px"></div>

    <div class="full">
    <br>
    <p class="p3 ">Calendar-based scheduling</p>
<p class="p4">I used to hardcode the time for triggering my light alarm. A simple automation would trigger the script at 7:15am on weekdays and 7:45am on weekends. That worked find 95% of the time, but didn’t properly account for mornings where I needed to wake up earlier or wasn’t at home.
<br>
<p class="p3 ">Setting up the integration</p>
<p class="p4">I decided to leverage the Google Calendar integration in Home Assistant. The aim is to have the wake-up light activate when the first event of the day starts. The full setup is easy enough to follow (see the Home Assistant docs) and boils down to a couple of lines in the configuration file:

                
<div class="centre"><img src="images/blog_images/alarm-code-2.png" width="600px"></div>
<br>
  <p class="p3 ">Event strategy</p>

<p class="p4">By default, the Google Calendar entity is a sensor that is either “on” (event in progress) or “off” (event not in progress). The docs have some interesting options for tracking events such as sensor offsets and filter keywords, but I kept mine basic because I want my calendar to remain human-readable and simple.
<br>
<p class="p4">Next, I created a repeating daily event for a morning routine. This establishes a “default” wake-up time. The best part is that now I can change up my scheduling when I have something early - or delete the alarm altogether if I don’t want the lights to turn on. Here’s what my calendar mornings look like:
<br>
<div class="centre"><img src="images/blog_images/cal.png" width="800px"></div>

<br>
<p class="p3 ">Triggering the alarm</p3>
<p class="p4">So far, the wake-up script is set up and so is the Google Calendar integration. Time to stitch them together with some automation goodness! As always, my go-to- for automation is Node-RED. I’m using the time range switch and Home Assistant websocket integrations.
<br>
<p class="p4">Here is a simple subflow which does the trick. The wake up light will be triggered by the first calendar event which begins between 4am and 10am. Awesome!
<br>
<div class="centre"><img src="images/blog_images/node-red-alarm.png" width="800px"></div>

<br>
<p class="p3 ">Bonus round: Using Google Assistant to change the alarm time</p3>
<p class="p4">Now that the system is hooked into the Google ecosystem, it’s really easy to add a calendar event using Google Assistant which will trigger the lights early using. It’s a one-liner:
<br>
<p class="p4 center"><i><strong>Hey Google, add a calendar event: “Wake up early for my flight” tomorrow at 5:30am.</strong></i>
<br>
<p class="p4">That’s almost as easy as setting a traditional alarm with Google Assistant! As for moving or deleting existing events, I haven’t worked that one out yet.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
      <!-- end about section -->

      <?php include('includes/footer.php') ?>
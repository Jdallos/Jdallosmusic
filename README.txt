# J DALLOS MUSIC WEBSITE
#### Description:
This is a website for the music of J Dallos (me!). It was intended to be a place to listen to the music, see album artwork and find out more about J Dallos. 
Design was a very important aspect of this website, giving some sense of the music style of the artist. It was important to create a space that was peaceful and relaxing to browse. The site was intended to have some sense of fluidity and mystery for the user experience while also having a clear user interface.

This project contains the following html pages: index.html, about.html, discography.html, live.html and gallery.html. Each of these contains the html content of the site. 
musicSiteStyles.css contains the CSS for the entire website. 
musicSiteJS.js contains the JavaScript which carries out functions on the various pages.

Several features are felt to be note-worthy:
-The typical nav bar was replaced with a single button which would slide in a full screen nav. To compensate for this loss of an identifying feature across pages, a quote from J Dallos’ lyrics is randomly generated from an array of quotes each time a webpage is loaded. These quotes are designed in such a way to play a crucial part of the page structure and identity.
-index.html contains an interactive design with images that reveal themselves to be navigational links while also moving upon hover. This was created using flexbox to give a fine grain control for the unique design.
-The index.html listen button, when clicked, opens a Spotify web player, playing from a randomly generated J Dallos track from an array.
-Similarly, live.html contains a randomly generated live music video.
-The site utilizes JavaScript to open and close content on click, this is used on discography.html and about.html. This is a design choice to both keep the site appearing sleek and simple even when there is lots of content while it also adds to a sense of exploration while navigating the site.
-Bootstrap CSS framework is used in several places, notably on the gallery page to produce a carousel.
-The site is fully responsive with particular care taken to ensure responsivity at numerous break points. Care was taken to ensure the index.html design images are never out of proportion.
-A colour pallet was created to give the site a minimalistic feel while retaining interest. This simple colour scheme is balanced by the vibrant colours on each page from the quotes, leading to an eye catching yet not overwhelming design.



Complications and areas for improvement
- I ran into some issues with ensuring JavaScript functions only ran on the appropriate pages. This would cause certain functions to generate an error if elements were not found on the current page, resulting in any functions declared later in the document not running.
This issue was resolved with a simple if clause for each html page which confirmed the page using the window.location.pathname property. Page specific functions were nested within the appropriate clause. This resulted in the page functioning as intended, however it also led to further issues when the site was hosted as the pathname changed. This was again resolved easily enough.
I suspect with more time this functionality could be improved, and I intend to investigate it further and update it in due time.


Conclusion
The website is seen as a success as the artist is happy with the page. Further, the design features appear to be successful in conveying their intended message as reported by several website users who the website was shared with. Now go listen to the music!

      
      var ii = 1;

      window.onload =function() {setScale(),showLayout(),displaySlide(ii)};
      window.onresize =function() {setScale(),showLayout()};

      var head = document.getElementsByTagName("HEADER")[0];
      var navo = document.getElementsByTagName("NAV")[0];
      var art = document.getElementsByTagName("ARTICLE")[0];
      var navi = document.getElementsByTagName("NAV")[1];
         

      var theDate = new Date(document.lastModified); 
      theDate.setTime((theDate.getTime()+(60*60)) ) 

      with (theDate) { 
        newString=("Latest update: " +theDate.toLocaleString('default', { month: 'long' })+' '+getFullYear()) 
      }  
      document.getElementById("insert").innerHTML = newString;

      var today = new Date();
      var dd = String(('0' +today.getDate()).slice(-2));
      var mm = String(('0' +(today.getMonth()+1)).slice(-2))
      var yyyy = today.getFullYear();
      with (today) { 
        today1=(dd + '/' + mm + '/' + yyyy); 
        year1=('&#169  2021 - '+yyyy+' Liubov Sirkina');
      }  
      document.getElementById("date").innerHTML = today1;
      document.getElementById("copyright").innerHTML = year1;
      

      var tbutton = document.getElementById("back-top");
      window.onscroll = function() {showScroll()};
      function showScroll() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
          tbutton.style.display = "block";
        } else {
          tbutton.style.display = "none";
        }
      }
      function toTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }


        stylex = window.getComputedStyle(head);
        wx = stylex.getPropertyValue('width');
        styley = window.getComputedStyle(navo);
        wy = styley.getPropertyValue('width');
        stylez = window.getComputedStyle(art);
        wz= stylez.getPropertyValue('width');
        hdt = stylez.getPropertyValue('height');

        if (wy != wz) {     
          var sval = -1; 
        } else {
          var sval = 1;
        }
      function setScale() { 
        if (sval > 0) {     
          navo.style.height = "auto";
          navi.style.height = "auto";
          art.style.width = "97%";
          navo.style.width = "97%";
          navi.style.width = "97%"; 
          head.style.width = "97%";
          var bar = document.getElementById("horizbar"); 
          bar.style.display = "inline";                
        } else {
          art.style.width = "69%";
          navo.style.width = "190px"; 
          stylex = window.getComputedStyle(head);
          wx = stylex.getPropertyValue('width');              
          styley = window.getComputedStyle(navo);
          wy = styley.getPropertyValue('width');
          stylez = window.getComputedStyle(art);
          wz= stylez.getPropertyValue('width');       
          mwdt=(parseInt(wx,10)-parseInt(wy,10)-parseInt(wz,10)).toString() + "px";
          navi.style.width = mwdt;   
          wz= stylez.getPropertyValue('width');
          hdt = stylez.getPropertyValue('height');
          if (parseInt(hdt)<800) {
            hdt="800px"
            art.style.height = hdt;
          } else {
            hdt=hdt
          }
          navo.style.height = hdt;
          navi.style.height = hdt;                
        }
      }

    
      var button = document.getElementById("bswitch");
      function switchLayout() {
          setScale();
          globalThis.sval=parseInt(sval)*parseInt(-1);     
          out=sval.toString()
          document.getElementById("sval").innerHTML = out;        
      }

      function showLayout() {
        if (screen.width > 700) {
          button.style.display = "block";         
        } 
        else {
          button.style.display = "none";   
               
        }
                    
      }     
      
      var outtxt = jumbleTxt("fvexvanyf@pneqvss.np.hx");
      document.getElementById("emailastext").innerHTML = outtxt;
      var text = document.getElementById("etwo"); 
      text.href = jumbleTxt("znvygb:fvexvanyf@pneqvss.np.hx"); 
      var txt = document.getElementById("ethree"); 
      txt.href = jumbleTxt("znvygb:fvexvanyf@pneqvss.np.hx"); 

      function jumbleTxt(i) {
        return i.replace(/[a-z]/g, function(x){
          return String.fromCharCode(("a" <= x <= "z" ? 97 : 122) >= (x = x.charCodeAt() + 13) ? x : x - 26);
        })
      };
   


      function GoToSlide(n) {
        (n > 1 ? displaySlide(ii = n): displaySlide(ii += n))
      }   

      function displaySlide(n) {
        var i=1;
        var slides = document.getElementsByClassName("slides");
        var select = document.getElementsByClassName("select-pic");
        (n < 1 ? ii = slides.length : (n > slides.length ? ii = 1 : ii=ii));
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
            select[i].className = select[i].className.replace(" active", "");
        }
        slides[ii-1].style.display = "block"; 
        select[ii-1].className += " active";
      }  
      

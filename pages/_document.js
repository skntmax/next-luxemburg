import { Html, Head, Main, NextScript } from "next/document";
import Footer from 'components/Footer'
import Script from "next/script";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://fonts.cdnfonts.com/css/blackadder-itc" rel="stylesheet"/>
                
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
    integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
    crossorigin="anonymous" referrerpolicy="no-referrer" defer  />

  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
    integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
    crossorigin="anonymous" referrerpolicy="no-referrer"  defer />
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
    crossorigin="anonymous" referrerpolicy="no-referrer"  defer />

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous" defer ></script>

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/loadingio/ldLoader@v1.0.0/dist/ldld.min.js"/>


  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"  />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        {/* <Script
          dangerouslySetInnerHTML={{
            __html: `
      var scriptUrls = [
        'https://d2apjlzdwu53ds.cloudfront.net/js/vendor/jquery-3.3.1.js',
        'https://d2apjlzdwu53ds.cloudfront.net/js/vendor/jquery-library.js',
        'https://d2apjlzdwu53ds.cloudfront.net/js/vendor/bootstrap.min.js',
        'https://d2apjlzdwu53ds.cloudfront.net/js/jquery.basictable.min.js',
        'https://d2apjlzdwu53ds.cloudfront.net/js/jquery.sortable.js',
        'https://d2apjlzdwu53ds.cloudfront.net/js/jquery.collapse.js',
        'https://d2apjlzdwu53ds.cloudfront.net/js/owl.carousel.min.js',
        'https://d2apjlzdwu53ds.cloudfront.net/js/circle-progress.js',
        'https://d2apjlzdwu53ds.cloudfront.net/js/scrollbar.min.js',
        'https://d2apjlzdwu53ds.cloudfront.net/js/chosen.jquery.js',
        'https://d2apjlzdwu53ds.cloudfront.net/js/prettyPhoto.js',
        'https://d2apjlzdwu53ds.cloudfront.net/js/chartist.js',
        'https://checkout.razorpay.com/v1/checkout.js',
        'https://d2apjlzdwu53ds.cloudfront.net/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js',
        'https://d2apjlzdwu53ds.cloudfront.net/js/main.js'
      ];
      
      function loadScripts(urls, async = false, defer = false) {
        if (urls.length === 0) return;
      
        var script = document.createElement('script');
        script.src = urls[0];
        script.async = async;
        script.defer = defer;

        script.onload = function () {
          loadScripts(urls.slice(1), async, defer);
          
        };
        function getTemplateUrl(encoded_string,template_name){ return ('https://rozgar.com/'+template_name+'?mobile=true&data='+encoded_string) }
              window.functionResumeUrl = getTemplateUrl;
              var channel = new MessageChannel();
              window.RESUME_URL = channel;
              window.RESUME_URL.getTemplateUrl = functionResumeUrl;

            
        document.head.appendChild(script);
      }
      
      loadScripts(scriptUrls, true, false);
      `,
          }}
          defer
          strategy="lazyOnload"
        ></Script> */}

      </Head>

      <body>
      <a
        href="https://wa.me/2348100000000"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
       <img 
       style={{width:'70%',padding:'3px 5px'}}
       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFXUlEQVR4nO2aWWxVZRDHTymipQ3YgogmrrhViPEBt2iUB1JxKSBRE4wkaiAuBCSovLX4oBCXxITYaEx8EXd9kBolooIaNxRFNKC0aIwoQWlcoFKQys9M+z9kenvuOefee441hn/SpPlmvvnmW+c/c24QHMb/FEADMBN4CHgN+Ab4FdivP/v/a8lMZwZQH/wXABwFzAHWAH9TOnqBN4AbgSOHYgI1wF3ADufUPmAt0KKdabQVB47QX73aTNYKrFOfED8Bi21x/q1JXAV86xz4FJgLjC7D1tHAPGCDs7cNuCLvY/S4G/AzoClD+9OAjc5+W+a7A4yX44Y/gQVAdaaD9I9TDdwJ7HW7fWxWxk/RdqNXZ1ImhuPHPAfYqjE7zYdKDR7jDH4CjM3M2+Sx64H3NbbdyfGV3InwOH0I1GbubbIPtcDH7piVfmfcxbbj1JCLp+n8GONORVs5T2x4sXO/EynvzF75NK2UYBfGiQUxehbc3tRkDd8Dl2U5AQ9gkbv8yUcMuNvFicgnFjgd2BVBOSw61wQ5ABgOfKFxFqW54CHtaIp569dL59UwoutVM9ySx0QMFvE1xo+x3Ezkre+FiNGZLh1jtyNdu5FHw4YgJwBV7iW9IU7RWKxhboxOu3RujtjNXyS7IOM5HAJwq8ZYHcTkE71ipEUJILBThk6OkC2XbGWQb6DcDxyI9FP02rA2wdBf0ht0qYETtRh77HJmPIdDAN6RD9OjhA9L2DJIOFCvS3pnRMiaJPstD1IZArhX4zwYJbQU1DBjkHCgniVPhjkF7We6SS4OcgRwTfhqRgk7JGxMMGIU3vBeke1+Jc/dMAATw5czKIRbzTGDhAP1RgPd0p3q2sMs744gZwBjNdauKKG9BIYRKQzdL92OkC4A16ltN3BqTnPogwVDjbUvKATQU+w1itAd6ZKtR1z7C2r7ChgVDNFEdkh4fEpj5+spPghcr7ZRwBbZ+SghHp2n2lZd1kdrs4QTSzBo+TWi2Beq7STgO7VvjUoDVHWxBUCFOwukx2V12UPqMSutQfV7TP1+NlbsAuNGN8nWMMMEpridtKwvhB3ttjT5uXt+26OENphheRn0erWj8We5vOYJt/JdWvmQ/i+T3mTgJVep7AWWVBIQr0xDUWJy67edw1Oc7BLgAwbC6P+wiETtacm7E8Z7V3rNxZzpFhkbV8Zk7CVbpQHs6CzxgRG4WHWA+zz9L7AxTv1/jxmnwZHG6JcReF6G5pc6EfUfZtvtjpOVcyaX0H+W+q2J0blNOq8HKZImSymryphLaOdyYLtsHRRtmVp4nAr6nOZqBffEJFafS2d20opuKef1KlKgXiZKj0tRHwAuVZmnThOwy/uHW8TahOrO9sTPEC7d3VTJRAqqlS2OlMbhxWLnXq/jJuktTDPwCVLeE3cUypzURcAK4EuVkXarjPSs7VIQ39e+nYRBNvmjEHBT0WAzRADOdVww3aeMSl+urEH/0bSinGFF2k7VLi+ZkLuXyf7UuRra+tTfGY34qVNn7l4m+9LgGMG2kj74AEvV8dFcvUx3JzrlS0dU6SnJgH0HMVydm5fx4w/X69TjjlNpdKmgQFcsIE2w2i7wlKL1zEoYQEHEtmAXxom+i13Wt3fL8mTgrYKquyVBKx3lKISltbeXSTQbxJ1C2hEepfK/FgNP9pnpp+PPKLcohNV2X1ZJaJ6jM2g314mWXAucbVmfasIjREkmiRguFRUPCx5ooRZW/AsI4IcIx3eKNsxXelkVwc2aVXQIS0Sl4IAKg7Mz+wkH/Tthu/Ccjkpjif1rdM5bdX82q6DRo5Xv0g62i+o351lpOYxgiPEPcC8pklWydlUAAAAASUVORK5CYII="/>
      </a>
{/* 
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KLM22JNN"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
          defer
        ></noscript> */}
        

      
        <Main />
        <Footer />
        <NextScript />
         
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
    integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer" defer ></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
    integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" defer ></script>

<script src="https://cdn.jsdelivr.net/gh/loadingio/ldLoader@v1.0.0/dist/ldld.min.css"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" integrity="sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="js/wow.min.js"></script>
              <script>
              new WOW().init();
              </script>
   {/* <script>
    $(".awards.owl-carousel").owlCarousel({
      // stagePadding: 50,
      // center: true,
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 4500,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  </script> */}

      </body>
       


    </Html>
  );
}

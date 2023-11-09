import { Html, Head, Main, NextScript } from "next/document";
import Footer from 'components/Footer'
import Script from "next/script";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
       
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

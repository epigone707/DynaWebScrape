/*
 DO NOT EDIT! Code changes should be done via repository
*/
window.W3s = {
   'catalog.type': '',
   'page.id': '',
   'user.is_anonymous': true,
   'module.cookie_manager.attached': false
};

W3s.getStrCleanedUp = function (str) {
   return str.replace(/^\s+|\s+$/g, '').trim();
};

W3s.getUrlQueryPrs = function () {
   var url_query_str = location.search.substring(1);

   console.log('W3s.getUrlQueryPrs -> url_query_str: ', url_query_str);

   if (!url_query_str) {
      return {};
   }

   url_query_prs = JSON.parse('{"' + url_query_str.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) });

   console.log('W3s.getUrlQueryPrs -> url_query_prs: ', url_query_prs);

   return url_query_prs;
};

W3s.detectCatalogMeta = function () {
   if (window.location.pathname.indexOf('/browse/certifications') === 0) {
      this['catalog.type'] = 'exam';
   } else {
      this['catalog.type'] = 'course';
   }
};

W3s.detectPageMeta = function () {
   var $elm;

   // < enrollment
   if (
      typeof ENV.isEnrollmentForm !== 'undefined'
      && ENV.isEnrollmentForm === true // is enrollment page
      && typeof ENV.rootAccount !== 'undefined'
   ) {
      this['page.id'] = 'enrollment';

      return 0;
   }
   // > enrollment

   // < home
   $elm = $('#home-page');

   if ($elm.length) {
      this['page.id'] = 'home';

      return 0;
   }
   // > home

   // < product
   $elm = $('#product-page');

   if ($elm.length) {
      this['page.id'] = 'product';

      return 0;
   }
   // > product

   // < product purchased
   $elm = $('#registration');

   console.log('W3s.detectPageMeta -> window.location.href: ', window.location.href);

   if (
      $elm.length
      && window.location.href.indexOf('/enrollment/finalize?order_id=') != -1
      && window.location.href.indexOf('&status=success&') != -1
   ) {
      this['page.id'] = 'product_purchased';

      return 0;
   }
   // > product purchased

   return 0;
};

W3s.detectUserMeta = function () {
   if (
      typeof ENV.user !== 'undefined'
      && typeof ENV.user.id !== 'undefined'
   ) {
      this['user.is_anonymous'] = false;
   }
};

W3s.getProductMeta = function () {
   console.log('W3s.getProductMeta -> ENV.product: ', ENV.product);

   if (
      typeof ENV.product !== 'undefined'
      && typeof ENV.product.id !== 'undefined'
   ) {
      return {
         'product.id': ENV.product.id,
         'product.canvas_id': ENV.product.canvas_id,
         'product.title': ENV.product.title,
         'product.type': typeof ENV.product.type !== 'undefined' ? ENV.product.type.toLowerCase() : 'course',
         'product.currency': ENV.product.currency,
         'product.enrollment_fee': ENV.product.enrollment_fee
      };
   }

   if (this['page.id'] == 'product') {
      var $elm_product_wrp = $('#product-page'),
         $elm_enroll_btn = $elm_product_wrp.find('.hero-action').find('.btn')

      return {
         'product.id': $elm_product_wrp.attr('data-course-id'),
         'product.canvas_id': $elm_product_wrp.attr('data-canvas-course-id'),
         'product.title': this.getStrCleanedUp($elm_product_wrp.find('.hero-head').text()),
         'product.type': this['catalog.type'],
         'product.enrollment_fee_text': $elm_enroll_btn.text().replace(' Enroll', '')
      };
   } else if (this['page.id'] == 'product_purchased') {
      var url_query_prs = this.getUrlQueryPrs();

      return {
         // 'product.id': ENV.product.id,
         'product.title': this.getStrCleanedUp($('.RegistrationHeader__Title').find('span.text').text().replace('Enroll in', '')),
         'product.type': this['catalog.type'],
         'product.currency': url_query_prs['purchase[currency]'],
         'product.enrollment_fee': url_query_prs['purchase[total]']
      };
   }

   return {};
}

W3s.getProductPurchaseMeta = function () {
   if (this['page.id'] == 'product_purchased') {
      var url_query_prs = this.getUrlQueryPrs();

      return {
         'purchase.order_id': url_query_prs['order_id'],
         'purchase.reference_id': url_query_prs['purchase[reference_id]'],
         'purchase.status': url_query_prs['status']
      };
   }

   return {};
};

W3s.applyHeaderRefinements = function () {
   $('.header-branding').parent().addClass('header-branding-wrp');

   $('#user-nav').parent().addClass('header-user-nav-wrp');

   $('#user-nav').prepend("<span class='back-to-main-site-link-wrp'><a  href='https://www.w3schools.com' title='Back to w3schools.com' target='_blank' style='padding-right:0px; color:#04AA6D;'>  Back to w3schools.com </a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;</span>    ");
};

W3s.elmIsInViewport = function (elm) {
   if (typeof jQuery === 'function' && elm instanceof jQuery) {
      elm = elm[0];
   }

   var rect = elm.getBoundingClientRect();

   return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
   );
}

W3s.initializeHomePageLogic = function () {
   // remove search filters btn
   $("#search-refine-button--refine").addClass('hidden');

   // < add sales btn
   var $elm_sales_btn = $('<a id="w3s_sales_btn" class="btn btn-info btn-lg btn-action-light" href="https://support.w3schools.com/hc/en-gb/articles/4411122929553" target="_blank">Add multiple users</a>');

   $('#search-form').find('.container').append($elm_sales_btn);
   // > add sales btn

   // < expand all courses
   // var expanding_courses_attempts_limit = 10,
   //    expanding_courses_attempts_count = 0,
   //    expanding_courses_interval_handler = null;

   // expanding_courses_interval_handler = setInterval(function () {
   //    var $elms_load_more_btn = $('button.Products__LoadMore');

   //    if ($elms_load_more_btn.length) {
   //       $elms_load_more_btn.click();
   //    }

   //    // console.log('$elms_load_more_btn: ', $elms_load_more_btn);

   //    expanding_courses_attempts_count++;

   //    if (expanding_courses_attempts_count >= expanding_courses_attempts_limit) {
   //       clearInterval(expanding_courses_interval_handler);
   //    }
   // }, 500);

   $(window).on('scroll', function () {
      var $elms_load_more_btn = $('button.Products__LoadMore');

      if ($elms_load_more_btn.length && W3s.elmIsInViewport($elms_load_more_btn)) {
         $elms_load_more_btn.click();
      }
   });
   // > expand all courses
};

W3s.initializeEnrollmentPageLogicV2 = function () {
   if (this['user.is_anonymous']) {
      this.attachCookieManager();
   }

   var elm_enrollment_page = document.getElementsByClassName('registration-page')[0];

   elm_enrollment_page.className += ' w3s-overrides';

   if (this['user.is_anonymous']) {
      elm_enrollment_page.className += ' w3s-anonymous-user';
   }

   // div#registration -> form
   var elm_enrollment_form = document.getElementById('registration').childNodes[0];

   if (this['user.is_anonymous']) {
      var elm_node_enrollment_form_iwrp = document.createElement('DIV');
      elm_node_enrollment_form_iwrp.id = 'w3s-enrollment-form-iwrp';

      elm_enrollment_form.appendChild(elm_node_enrollment_form_iwrp);

      var elm_enrollment_form_iwrp = document.getElementById('w3s-enrollment-form-iwrp');

      var getAltUserSessionAuthButtons = function (log_in_url) {
         return '<div class="w3s-btn-owrp pb_0"><div class="w3s-btn-iwrp"><a id="w3s-registration-log-in-btn" href="' + log_in_url + '" class="btn-info btn-lg w3s-log-in-btn">Continue</a></div></div>';
      };

      elm_enrollment_form_iwrp.innerHTML = '<div class="w3s-ef-info-text">Total: ' + (ENV.product.currency === 'USD' ? '$' : '€') + parseInt(ENV.product.enrollment_fee) + '</div><div class="w3s-auth-info-text">Click "Continue" to sign up or log in before you purchase this course.</div>' +
         getAltUserSessionAuthButtons(ENV.rootAccount.loginUrl);

      document.addEventListener('click', function (event) {
         if (!event.target.matches('.w3s-log-in-btn')) {
            return 0;
         }

         Cookies.set('load_signup_once', 1, {
            domain: window.location.hostname.substring(window.location.hostname.indexOf('.')), // in production it will return ".w3schools.com"
            path: '/',
            expires: (1 / 1440) * 5, // 5 mins (expects value in days so we serve a float)
            secure: true
         });

         fbq('trackCustom', 'Authenticate', W3s.getProductMeta());
      }, false);
   } else {
      // div#registration -> form
      var elm_node_enrollment_form_info_text = document.createElement('DIV');
      elm_node_enrollment_form_info_text.className = 'w3s-ef-info-text';
      elm_node_enrollment_form_info_text.innerText = 'Total: ' + (ENV.product.currency === 'USD' ? '$' : '€') + parseInt(ENV.product.enrollment_fee);

      document.getElementsByClassName('RegistrationHeader__DateInfo')[0].appendChild(elm_node_enrollment_form_info_text);

      var elm_ef_submit_btn = document.querySelector('#registration button[type="submit"]');

      elm_ef_submit_btn.innerHTML = 'Proceed to payment';
      elm_ef_submit_btn.className += ' w3s-ef-submit-btn';

      elm_ef_submit_btn.parentNode.className += ' w3s-ef-submit-btn-wrp';

      document.addEventListener('click', function (event) {
         if (!event.target.matches('.w3s-ef-submit-btn')) {
            return 0;
         }

         fbq('trackCustom', 'Proceed to payment', W3s.getProductMeta());
      }, false);
   }
};

W3s.initializeProductPageLogic = function () {
   if (this['user.is_anonymous']) {
      // var login_url = $('#user-nav > a')[0].attr('href');
      var login_url = '/login';

      $('#enroll-hero > .btn').attr('href', login_url);
      $('#enroll-footer > .btn').attr('href', login_url);
   }

   $('#enroll-hero > .btn, #enroll-footer > .btn').click(function () {
      console.log('trackCustom -> Add to cart -> product_meta: ', W3s.getProductMeta());
      fbq('trackCustom', 'Add to cart', W3s.getProductMeta());
   });
};

W3s.applyFooterRefinements = function () {
   var $elm_footer_text_wrp = $('#app-footer').find('.small'),
      current_year_full = new Date().getFullYear();

   if ($elm_footer_text_wrp.length) {
      $elm_footer_text_wrp.html('W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our <a href="https://www.w3schools.com/about/about_copyright.asp" target="_blank">terms of use</a>, <a href="https://www.w3schools.com/about/about_privacy.asp" target="_blank">cookie and privacy policy</a>.<br><br>© ' + current_year_full + ' W3Schools Courses All Rights Reserved.');
   }
};

W3s.attachCookieManager = function () {
   if (this['module.cookie_manager.attached']) {
      return 0;
   }

   this['module.cookie_manager.attached'] = true;

   var cm_script = document.createElement('script');

   cm_script.src = 'https://file.w3schools.com/third-party/cookie-manager/js-cookie.min.js';

   document.head.appendChild(cm_script);

   return 0;
};

W3s.attachGoogleTag = function () {
   var gtag_script = document.createElement('script');

   gtag_script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-3855518-1';

   document.head.appendChild(gtag_script);

   window.dataLayer = window.dataLayer || [];

   var gtq = function () {
      window.dataLayer.push(arguments);
   }

   gtq('js', new Date());
   gtq('config', 'UA-3855518-1');
};

W3s.attachFacebookPixel = function () {
   var fbp_script = document.createElement('script'),
      fbp_img = document.createElement('noscript');

   fbp_script.innerHTML = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '500742577590477');fbq('track', 'PageView');";
   fbp_img.innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=500742577590477&ev=PageView&noscript=1"/>';

   document.head.appendChild(fbp_script);
   document.head.appendChild(fbp_img);
};

W3s.attachZendesk = function () {
   window.zESettings = {
      webWidget: {
         contactForm: {
            attachments: true
         },
         color: {
            launcherText: '#FFFFFF'
         }
      }
   };

   var zd_core_script = document.createElement('script');

   zd_core_script.id = 'ze-snippet';
   zd_core_script.src = 'https://static.zdassets.com/ekr/snippet.js?key=41c2038e-584a-4eb0-b6fe-696d291af18b';

   document.head.appendChild(zd_core_script);
};

W3s.initializeProductPageLogicAfterTrackersAttachment = function () {
   // fb pixel event
   fbq('trackCustom', 'View product', this.getProductMeta());
};

W3s.initializeProductPurchasedPageLogicAfterTrackersAttachment = function () {
   var product_purchase_meta = this.getProductPurchaseMeta(),
      transaction_title = product_purchase_meta['purchase.status'] == 'success' ? 'Transaction successful' : 'Transaction failed';
   // fb pixel event
   fbq('trackCustom', transaction_title, $.extend({}, this.getProductMeta(), product_purchase_meta));
};

W3s.initialize = function () {
   this.detectCatalogMeta();

   this.detectPageMeta();

   this.detectUserMeta();

   this.applyHeaderRefinements();

   switch (this['page.id']) {
      case 'home':
         this.initializeHomePageLogic();
         break;
      case 'product':
         this.initializeProductPageLogic();
         break;
      case 'enrollment':
         // this.initializeEnrollmentPageLogicV1();
         this.initializeEnrollmentPageLogicV2();
         break;
   }

   this.applyFooterRefinements();

   this.attachGoogleTag();

   this.attachFacebookPixel();

   this.attachZendesk();

   // the first page switch is present to apply as quick as possible the visual overrides
   // the one below needs to be fired after trackers attachment
   switch (this['page.id']) {
      case 'product':
         this.initializeProductPageLogicAfterTrackersAttachment();
         break;
      case 'product_purchased':
         this.initializeProductPurchasedPageLogicAfterTrackersAttachment();
         break;
   }

   console.log('W3S CustomScript -> ENV: ', ENV);
};

W3s.initialize();

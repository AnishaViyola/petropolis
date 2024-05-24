import React, { useEffect } from 'react';

const HubSpotForm = () => {
  useEffect(() => {
    
    const existingScript = document.querySelector(`script[src="//js.hsforms.net/forms/embed/v2.js"]`);

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;

      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: 'na1',
            portalId: '46242923',
            formId: '7df9df35-ac63-4eef-8396-b4fe358ca8ab',
            target: '#hubspotForm'
          });
        }
      };

      document.body.appendChild(script);
    } else {
      // Script already exists, just create the form
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '46242923',
          formId: '7df9df35-ac63-4eef-8396-b4fe358ca8ab',
          target: '#hubspotForm'
        });
      }
    }

    // Cleanup function
    return () => {
      const formContainer = document.querySelector('#hubspotForm');
      if (formContainer) {
        formContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div id="hubspotForm">
    </div>
  );
};

export default HubSpotForm;

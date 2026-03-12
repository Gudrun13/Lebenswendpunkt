import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";

export function ZohoNewsletterForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // We do NOT prevent default here if valid, so the browser natively submits the form.
    // Native submit is required for target="_blank" to work reliably without popup blockers.
    const formData = new FormData(e.currentTarget);
    const email = formData.get('CONTACT_EMAIL');
    
    if (!email) {
      e.preventDefault();
      setError(true);
      return;
    }
    
    setError(false);
    
    // Zoho anti-spam mechanism: remove this field before submit
    const spmInput = e.currentTarget.querySelector('#zc_spmSubmit');
    if (spmInput) {
      spmInput.remove();
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <p className="font-medium text-primary">Melde Dich zum Newsletter an und erhalte als Geschenk 20 stärkende Impulse für Deinen Alltag.</p>
      </div>
      
      {error && (
        <div className="text-red-500 mb-4 text-sm font-medium text-center bg-red-50 py-2 rounded-md">Bitte fülle alle markierten Felder aus.</div>
      )}
      
      <form 
        ref={formRef}
        method="POST" 
        action="https://cjedl-zcmp.maillist-manage.eu/weboptin.zc" 
        target="_blank" 
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <input 
            type="text" 
            placeholder="Vorname" 
            name="LASTNAME" 
            className="flex h-12 w-full rounded-md border border-primary/20 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div>
          <input 
            type="email" 
            placeholder="Email *" 
            name="CONTACT_EMAIL" 
            id="CONTACT_EMAIL"
            required
            className="flex h-12 w-full rounded-md border border-primary/20 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="pt-2">
          <Button type="submit" className="w-full h-12 font-bold font-serif text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
            Hier anmelden
          </Button>
        </div>
        
        {/* Hidden inputs from Zoho */}
        <input type="hidden" name="submitType" value="optinCustomView" />
        <input type="hidden" name="emailReportId" value="" />
        <input type="hidden" name="formType" value="QuickForm" />
        <input type="hidden" name="zx" value="14adf9491c" />
        <input type="hidden" name="zcvers" value="2.0" />
        <input type="hidden" name="oldListIds" value="" />
        <input type="hidden" name="mode" value="OptinCreateView" />
        <input type="hidden" name="zcld" value="13d0a8a417fc9b98" />
        <input type="hidden" name="zctd" value="13d0a8a417fb0541" />
        <input type="hidden" name="document_domain" value="" />
        <input type="hidden" name="zc_Url" value="cjedl-zcmp.maillist-manage.eu" />
        <input type="hidden" name="new_optin_response_in" value="2" />
        <input type="hidden" name="duplicate_optin_response_in" value="0" />
        <input type="hidden" name="zc_trackCode" value="ZCFORMVIEW" />
        <input type="hidden" name="zc_formIx" value="3z7c092b7b2f18045d196384699bb5c72446373c804dd129ef7b76a59514c00c27" />
        <input type="hidden" name="viewFrom" value="URL_ACTION" />
        <input type="hidden" name="scriptless" value="yes" />
        <input type="hidden" id="zc_spmSubmit" name="zc_spmSubmit" value="ZCSPMSUBMIT" />
      </form>
    </div>
  );
}
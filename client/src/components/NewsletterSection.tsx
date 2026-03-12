import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Mock submission
    }
  };

  return (
    <section className="py-20 px-4 bg-amber-50 text-foreground relative overflow-hidden" id="newsletter">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-[60px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Mail className="h-8 w-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Bleib mit mir in Verbindung
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Melde Dich gerne hier für den Newsletter an.<br />
            Du wirst etwa einmal im Monat einen Newsletter erhalten.<br />
            Ich freue mich!
          </p>

          {!isSubmitted ? (
            <div className="max-w-xl mx-auto text-left bg-white p-6 rounded-xl shadow-sm border border-primary/10">
              <div dangerouslySetInnerHTML={{__html: `
                <!--Zoho Campaigns Web-Optin Form Starts Here-->
                <div id="customForm">
                  <div class="quick_form_15_css" name="SIGNUP_BODY">
                    <div>
                      <div id="SIGNUP_HEADING">
                        <br>Melde Dich zum Newsletter an und erhalte als Geschenk 20 stärkende Impulse für Deinen Alltag.</div>
                      <div style="position:relative;">
                        <div id="Zc_SignupSuccess" style="display:none;position:absolute;margin-left:4%;width:90%;background-color: white; padding: 3px; border: 3px solid rgb(194, 225, 154);  margin-top: 10px;margin-bottom:10px;word-break:break-all ">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tbody>
                              <tr>
                                <td width="10%">
                                  <img class="successicon" src="https://cjedl-zcmp.maillist-manage.eu/images/challangeiconenable.jpg" align="absmiddle">
                                </td>
                                <td>
                                  <span id="signupSuccessMsg" style="color: rgb(73, 140, 132); font-family: sans-serif; font-size: 14px;word-break:break-word">&nbsp;&nbsp;Thank you for Signing Up</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <form method="POST" id="zcampaignOptinForm" action="https://cjedl-zcmp.maillist-manage.eu/weboptin.zc" target="_zcSignup" onsubmit="zcScptlessSubmit(this)">
                        <div id="errorMsgDiv">Please correct the marked field(s) below.</div>
                        <div class="mb-4">
                          <input type="text" placeholder="Vorname" changeitem="SIGNUP_FORM_FIELD" name="LASTNAME" id="EMBED_FORM_NAME_LABEL" class="flex h-12 w-full rounded-md border border-primary/20 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        </div>
                        <div class="mb-4">
                          <input type="text" placeholder="Email" changeitem="SIGNUP_FORM_FIELD" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" class="flex h-12 w-full rounded-md border border-primary/20 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        </div>
                        <div>
                          <input type="submit" name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" value="hier anmelden" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 font-serif px-8 w-full cursor-pointer">
                        </div>
                        <input type="hidden" id="fieldBorder" value="">
                        <input type="hidden" id="submitType" name="submitType" value="optinCustomView">
                        <input type="hidden" id="emailReportId" name="emailReportId" value="">
                        <input type="hidden" id="formType" name="formType" value="QuickForm">
                        <input type="hidden" name="zx" id="cmpZuid" value="14adf9491c">
                        <input type="hidden" name="zcvers" value="2.0">
                        <input type="hidden" name="oldListIds" id="allCheckedListIds" value="">
                        <input type="hidden" id="mode" name="mode" value="OptinCreateView">
                        <input type="hidden" id="zcld" name="zcld" value="13d0a8a417fc9b98">
                        <input type="hidden" id="zctd" name="zctd" value="13d0a8a417fb0541">
                        <input type="hidden" id="document_domain" value="">
                        <input type="hidden" id="zc_Url" value="cjedl-zcmp.maillist-manage.eu">
                        <input type="hidden" id="new_optin_response_in" value="2">
                        <input type="hidden" id="duplicate_optin_response_in" value="0">
                        <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW">
                        <input type="hidden" id="zc_formIx" name="zc_formIx" value="3z7c092b7b2f18045d196384699bb5c72446373c804dd129ef7b76a59514c00c27">
                        <input type="hidden" id="viewFrom" value="URL_ACTION">
                        <input type="hidden" id="scriptless" name="scriptless" value="yes">
                        <input type="hidden" id="zc_spmSubmit" name="zc_spmSubmit" value="ZCSPMSUBMIT">
                      </form>
                    </div>
                  </div>
                </div>
                <div id="zcOptinOverLay" oncontextmenu="return false" style="display:none;text-align: center; background-color: rgb(0, 0, 0); opacity: 0.5; z-index: 100; position: fixed; width: 100%; top: 0px; left: 0px; height: 988px;"></div>
                <div id="zcOptinSuccessPopup" style="display:none;z-index: 9999;width: 800px; height: 40%;top: 84px;position: fixed; left: 26%;background-color: #FFFFFF;border-color: #E6E6E6; border-style: solid; border-width: 1px;  box-shadow: 0 1px 10px #424242;padding: 35px;">
                  <span style="position: absolute;top: -16px;right:-14px;z-index:99999;cursor: pointer;" id="closeSuccess">
                    <img src="https://cjedl-zcmp.maillist-manage.eu/images/videoclose.png">
                  </span>
                  <div id="zcOptinSuccessPanel"></div>
                </div>
                <script>
                  function zcScptlessSubmit(parentNode){
                    if(parentNode.querySelector("#zc_spmSubmit")){parentNode.querySelector("#zc_spmSubmit").remove();}parentNode.submit();
                  }
                </script>
                <!--Zoho Campaigns Web-Optin Form Ends Here-->
              `}} />
            </div>
          ) : (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="bg-white border border-primary/10 rounded-lg p-6 max-w-md mx-auto flex items-center gap-4 text-left shadow-sm"
             >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Vielen Dank!</h4>
                  <p className="text-foreground/80 text-sm">Sie haben sich erfolgreich für den Newsletter angemeldet.</p>
                </div>
             </motion.div>
          )}
          
          <p className="mt-6 text-sm text-muted-foreground">
            Ich respektiere Ihre Privatsphäre. Abmeldung jederzeit möglich.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

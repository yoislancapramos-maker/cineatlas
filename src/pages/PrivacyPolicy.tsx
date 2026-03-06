import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicy() {
    const { lang } = useLanguage();
  return (
    <div className="min-h-screen bg-background text-foreground">

      <Navbar />

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl">

          <h1 className="font-display text-3xl md:text-5xl font-bold text-gold-gradient gold-text-glow mb-10 text-center">
            {lang === "es" ? "Política de Privacidad y Datos" : "Privacy & Data Policy"}
          </h1>


          <div className="font-body text-muted-foreground space-y-6 leading-relaxed">

            <p>
{lang === "es"
? "CineAtlas respeta la privacidad de los visitantes y socios de la industria. Este sitio web recopila únicamente la información enviada voluntariamente a través del formulario de consultas de licencias."
: "CineAtlas respects the privacy of visitors and industry partners. This website collects only the information voluntarily submitted through the licensing inquiry form."}
</p>

            <p>
{lang === "es"
? "La información enviada puede incluir el nombre de la empresa, correo electrónico de contacto y detalles del catálogo proporcionados por distribuidores, agentes de ventas o titulares de derechos interesados en oportunidades de licenciamiento AVOD."
: "Submitted information may include company name, contact email, and catalog details provided by distributors, sales agents, or rights holders interested in AVOD licensing opportunities."}
</p>

            <p>
{lang === "es"
? "Esta información se utiliza únicamente para la comunicación relacionada con posibles conversaciones de licenciamiento y la evaluación de catálogos de películas enviados."
: "This information is used solely for communication regarding potential licensing discussions and evaluation of film catalog submissions."}
</p>

            <p>
{lang === "es"
? "CineAtlas no vende, distribuye ni comparte la información de contacto enviada con terceros."
: "CineAtlas does not sell, distribute, or share submitted contact information with third parties."}
</p>

            <p>
{lang === "es"
? "Si tienes alguna consulta relacionada con la privacidad puedes contactarnos en:"
: "If you have any privacy-related questions you may contact us at:"}
<br />
<span className="text-primary">
  cineatlas.contacto@gmail.com
</span>
</p>
            <a
  href="/"
  className="block text-center text-sm text-primary hover:underline mt-10"
>
  {lang === "es" ? "← Volver a CineAtlas" : "← Back to CineAtlas"}
</a>
<p className="text-center text-xs text-muted-foreground/60 mt-6">
  {lang === "es"
    ? "Última actualización: Marzo 2026"
    : "Last updated: March 2026"}
</p>

          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContatoPage() {
  return (
    <div>
      {/* HERO SECTION */}
      <SectionWrapper className="pt-12 sm:pt-16 pb-12 sm:pb-16 text-center" bg="default">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#6F7A69]">
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
            FALE CONOSCO
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#495045]">
            Estamos Aqui para Você
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#787F74] font-light max-w-xl mx-auto leading-relaxed">
            Entre em contato para agendar sua consulta ou tirar dúvidas. Sua mensagem será tratada com total sigilo.
          </p>
        </div>
      </SectionWrapper>

      {/* SEÇÃO PRINCIPAL DE CONTATO */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* COLUNA ESQUERDA: INFORMAÇÕES DE CONTATO */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#495045]">
                Informações de Contato
              </h2>
              <p className="text-xs sm:text-sm text-[#787F74] font-light mt-1.5">
                Prefere falar diretamente? Utilize nossos canais oficiais abaixo.
              </p>
            </div>

            <div className="space-y-4">
              {/* Telefone/WhatsApp */}
              <div className="bg-[#FAF9F1] border border-[#EAE8DD] rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6F7A69]/10 text-[#6F7A69] flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-sm font-semibold text-[#495045]">Telefone / WhatsApp</h4>
                  <div className="text-xs sm:text-sm text-[#787F74] space-y-0.5">
                    <div>
                      <a
                        href="https://wa.me/5551985426371?text=Ol%C3%A1%21%20Gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20atendimentos%20da%20Clover%20Psicologia."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#6F7A69] transition-colors"
                      >
                        (51) 98542-6371
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://wa.me/5551997426371?text=Ol%C3%A1%21%20Gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20atendimentos%20da%20Clover%20Psicologia."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#6F7A69] transition-colors"
                      >
                        (51) 99742-6371
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* E-mail */}
              <div className="bg-[#FAF9F1] border border-[#EAE8DD] rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6F7A69]/10 text-[#6F7A69] flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div className="space-y-1 text-xs sm:text-sm text-[#787F74]">
                  <h4 className="font-sans text-sm font-semibold text-[#495045] mb-0.5">E-mail</h4>
                  <a
                    href="mailto:cloverpsicologia@gmail.com"
                    className="hover:text-[#6F7A69] transition-colors"
                  >
                    cloverpsicologia@gmail.com
                  </a>
                </div>
              </div>

              {/* Endereço */}
              <div className="bg-[#FAF9F1] border border-[#EAE8DD] rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6F7A69]/10 text-[#6F7A69] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-sm font-semibold text-[#495045]">Endereço</h4>
                  <p className="text-xs sm:text-sm text-[#787F74] leading-relaxed">
                    Rua Domingos Martins, 121 - sala 808 Centro - Canoas/RS
                  </p>
                </div>
              </div>

              {/* Horário de Atendimento */}
              <div className="bg-[#FAF9F1] border border-[#EAE8DD] rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6F7A69]/10 text-[#6F7A69] flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-sm font-semibold text-[#495045]">Horário de Atendimento</h4>
                  <div className="text-xs sm:text-sm text-[#787F74] space-y-0.5">
                    <div>Segunda a Sexta: 08:00 - 20:00</div>
                    <div>Sábado: 08:00 - 12:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: ENVIE UMA MENSAGEM */}
          <div className="lg:col-span-7">
            <Card className="bg-white border border-[#EAE8DD] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#495045]">
                  Envie uma Mensagem
                </h3>
                <p className="text-xs sm:text-sm text-[#787F74] font-light mt-1">
                  Preencha o formulário abaixo e entraremos em contato em breve.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#495045]">Nome Completo</label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full bg-[#FAF9F1] border border-[#EAE8DD] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#495045] placeholder-[#787F74]/60 focus:outline-none focus:border-[#6F7A69] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#495045]">Telefone</label>
                    <input
                      type="text"
                      placeholder="(DD) 99999-9999"
                      className="w-full bg-[#FAF9F1] border border-[#EAE8DD] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#495045] placeholder-[#787F74]/60 focus:outline-none focus:border-[#6F7A69] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#495045]">E-mail</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full bg-[#FAF9F1] border border-[#EAE8DD] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#495045] placeholder-[#787F74]/60 focus:outline-none focus:border-[#6F7A69] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#495045]">Mensagem</label>
                  <textarea
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    className="w-full bg-[#FAF9F1] border border-[#EAE8DD] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#495045] placeholder-[#787F74]/60 focus:outline-none focus:border-[#6F7A69] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#6F7A69] hover:bg-[#5E6859] text-white font-medium text-xs sm:text-sm rounded-xl transition-colors shadow-xs hover:shadow-md cursor-pointer text-center"
                >
                  Enviar Mensagem
                </button>
              </form>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* SEÇÃO DO MAPA */}
      <div className="w-full h-[350px] sm:h-[450px] bg-neutral-100 border-t border-[#EAE8DD] relative">
        <iframe
          src="https://maps.google.com/maps?q=Rua%20Domingos%20Martins,%20121,%20Centro,%20Canoas%20-%20RS&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 grayscale opacity-90"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

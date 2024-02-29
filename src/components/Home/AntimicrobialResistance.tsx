import React from "react";
import Section from "../General/Section";
import Link from "next/link";
import Image from "next/image";
import {
  section_btn,
  section_spacing,
  section_subtitle,
  section_text,
  section_title,
  section_image,
} from "@/styles/tailwind_classes";

const AntimicrobialResistance = () => {
  return (
    <Section id="antimicrobial-resistance">
      <div className={`grid sm:grid-cols-2 grid-cols-1 ${section_spacing}`}>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-start">
            <h2 className={`uppercase ${section_subtitle}`}>O que é</h2>
            <h2 className={`uppercase ${section_title}`}>
              Resistência Antimicrobiana
            </h2>
            <p className={section_text}>
              A resistência antimicrobiana (RAM) representa uma ameaça global à
              eficácia dos tratamentos para infecções causadas por
              microrganismos como vírus, bactérias, fungos e parasitas. Essa
              resistência surge quando esses microrganismos sofrem mutações ou
              recebem novos genes que os tornam resistentes à esses
              medicamentos. Patógenos bacterianos prevalentes em hospitais
              apresentam taxas alarmantes de resistência, prolongando as
              infecções e aumentando o risco de propagação. Esse cenário exige
              ação conjunta de todos os setores da sociedade e do governo, pois
              a RAM não reconhece fronteiras e afeta não apenas a saúde humana,
              mas também a saúde animal, a produtividade agrícola e a segurança
              alimentar.
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-10">
            <Link
              href="https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance"
              passHref={true}
              target="_blank"
            >
              <button className={section_btn}>OMS</button>
            </Link>
            <Link
              href="https://www.gov.br/anvisa/pt-br/assuntos/servicosdesaude/prevencao-e-controle-de-infeccao-e-resistencia-microbiana/pnpciras-e-pan-servicos-de-saude/pan-servicos-de-saude-2023-2027-final-15-12-2023.pdf"
              passHref={true}
              target="_blank"
            >
              <button className={section_btn}>Plano Nacional</button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={"/Home/bacteria_group.png"}
            alt="bad bacteria"
            width={5000}
            height={5000}
            className={section_image}
          />
        </div>
      </div>
    </Section>
  );
};

export default AntimicrobialResistance;
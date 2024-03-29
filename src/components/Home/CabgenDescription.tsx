import React from "react";
import Section from "../General/Section";
import Link from "next/link";
import OptimizedImage from "../General/OptimizedImage";
import {
  section_btn,
  section_image,
  section_spacing,
  section_subtitle,
  section_text,
  section_title,
} from "@/styles/tailwind_classes";

const CabgenDescription = () => {
  return (
    <Section id="cagben-description" gray>
      <div className={`grid sm:grid-cols-2 grid-cols-1 ${section_spacing}`}>
        <div className="flex justify-center items-center sm:order-first order-last">
          <OptimizedImage
            src={"/Home/bacteria_pool.png"}
            alt="bacteria pool"
            className={section_image}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-start">
            <h2>
              <span className={section_title}>CABGen:</span>
              <br />
              <span className={section_subtitle}>
                Explore, Descubra, Compreenda!
              </span>
            </h2>
            <p className={section_text}>
              Plataforma digital que integra ferramentas para análise de dados
              de sequenciamento genômico de bactérias, capaz de organizar,
              armazenar e disponibilizar os resultados obtidos através de formas
              eficientes de visualização.
            </p>
          </div>
          <Link
            href="https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2022.893474/full"
            passHref={true}
            target="_blank"
          >
            <button className={section_btn}>Artigo</button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default CabgenDescription;

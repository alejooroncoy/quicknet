"use client";

import MissionValues from "@/assets/mission_values.jpg";
import integrants from "@/data/integrants";
import Image from "next/image";
import Contact from "../Contact";
import { cn } from "@/lib/utils";

export function AboutUs() {
  return (
    <main className="flex-1 pt-16">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Sobre Nosotros
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Quiénes Somos
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                QuakeNet es una startup innovadora que se dedica a empoderar a
                las empresas para que se preparen y mitiguen los riesgos
                sísmicos. Nuestro equipo de expertos en tecnología, ciencia de
                datos y gestión de riesgos trabaja incansablemente para
                desarrollar soluciones que ayuden a nuestros clientes a proteger
                sus operaciones y a sus empleados ante los desastres naturales.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Misión y Visión
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Nuestra Misión y Visión
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Misión</h3>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Nuestra misión es proporcionar a las empresas en Perú una
                    solución tecnológica avanzada que les permita prever y
                    mitigar los riesgos asociados a sismos y terremotos. A
                    través del uso de inteligencia artificial, machine learning
                    y big data, buscamos proteger sus activos y personal,
                    ayudándolas a tomar decisiones informadas para minimizar el
                    impacto de los desastres naturales en sus operaciones.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Visión</h3>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Nuestra visión es convertirnos en la solución líder en
                    seguridad sísmica para empresas en Perú, reconocidos por
                    nuestra capacidad para integrar tecnologías innovadoras y
                    por nuestro compromiso con la mejora de la resiliencia
                    empresarial frente a desastres naturales, contribuyendo a un
                    entorno corporativo más seguro y preparado.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Image
                src={MissionValues}
                width="550"
                height="310"
                alt="Misión y Visión"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Nuestro Equipo
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Conoce a Nuestros Integrantes
              </h2>
              <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                Nuestro equipo de expertos en tecnología, ciencia de datos y
                gestión de riesgos trabaja incansablemente para desarrollar
                soluciones que ayuden a nuestros clientes a proteger sus
                operaciones y a sus empleados ante los desastres naturales.
              </p>
              <div className="px-4 md:px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {integrants.map((integrant, index) => (
                  <article
                    key={index}
                    className="flex flex-col items-center justify-center space-y-2"
                  >
                    <Image
                      src={integrant.avatar}
                      alt={integrant.name}
                      className={cn("rounded-full size-28 object-cover", integrant.className)}
                    />
                    <div className="text-center">
                      <p className="font-medium text-base">{integrant.name}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}

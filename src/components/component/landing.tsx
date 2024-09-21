"use client";

import Link from "next/link";
import HeroImg from "@/assets/hero_img.jpg";
import SolutionIntegrations from "@/assets/solution_integrations.webp";
import SaleImg from "@/assets/sale_img.jpg";
import Image from "next/image";
import { ArrowRightIcon, CompassIcon, EarthIcon, TrendingUpIcon } from "lucide-react";
import Contact from "../Contact";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export function Landing() {
  const SeismicRiskMapPeruComponent = useMemo(() => dynamic(
    () => import('../seismic-risk-map-peru'),
    { 
      loading: () => <p>El mapa está cargando...</p>,
      ssr: false
    }
  ), [])
  
  return (
    <main className="flex-1 pt-16">
      <section className="w-full pt-6 md:pt-12 lg:pt-16 pb-12 md:pb-24 lg:pb-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Empoderando a las empresas para prepararse ante lo inesperado
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  QuakeNet utiliza IA, aprendizaje automático y big data para
                  ayudar a las empresas a evaluar y mitigar los riesgos
                  sísmicos, permitiéndoles tomar decisiones informadas y
                  proteger sus operaciones.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#contacto-empresa"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Solicitar acceso
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <Image
                src={HeroImg}
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Visualización de Riesgo Sísmico
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Visualiza los Riesgos Sísmicos de tu Negocio
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                El mapa interactivo de QuakeNet te permite evaluar los niveles
                de riesgo sísmico para cualquier ubicación, capacitándote para
                tomar decisiones informadas sobre las operaciones y planes de
                expansión de tu negocio.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-5xl pt-12">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <SeismicRiskMapPeruComponent />
              <div className="absolute bottom-6 left-6 bg-background/80 px-4 py-2 rounded-md text-sm z-20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span>Alto Riesgo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span>Riesgo Moderado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span>Bajo Riesgo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="soluciones" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Nuestras Soluciones
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Soluciones Integrales para la Resiliencia Sísmica
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                QuakeNet ofrece una suite de herramientas y servicios impulsados
                por IA para ayudar a las empresas a evaluar, mitigar y responder
                a los riesgos sísmicos, asegurando la seguridad de sus
                operaciones y empleados.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <EarthIcon className="h-6 w-6" />
                      <h3 className="text-xl font-bold">
                        Evaluación de Riesgos
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Analiza los niveles de riesgo sísmico para las ubicaciones
                      de tu negocio utilizando IA avanzada y big data.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <CompassIcon className="h-6 w-6" />
                      <h3 className="text-xl font-bold">
                        Planificación de Evacuación
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Desarrolla planes de evacuación integrales para garantizar
                      la seguridad de tus empleados y activos.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <TrendingUpIcon className="h-6 w-6" />
                      <h3 className="text-xl font-bold">Análisis Predictivo</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Aprovecha el aprendizaje automático para pronosticar la
                      actividad sísmica y optimizar tus estrategias de respuesta
                      ante desastres.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src={SolutionIntegrations}
                width={450}
                alt="Earthquake Icon"
                className="text-primary rounded object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-16 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Conviértete en Parte de Nuestra Historia de Éxito
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Como una startup innovadora, buscamos empresas visionarias que se
              unan a nosotros en nuestra misión de construir un mundo más
              resiliente ante los desastres naturales. ¿Estás listo para ser
              parte de la solución?
            </p>
            <div className="flex gap-4 lg:justify-start">
              <Link
                href="#contacto-empresa"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Contactar Empresa
              </Link>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src={SaleImg}
              width="550"
              height="310"
              alt="Soluciones"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}

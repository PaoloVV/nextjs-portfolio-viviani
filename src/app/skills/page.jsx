import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { skills } from "../_lib/skillsCard";
import Image from "next/image";

export default function SkillsPage() {
  return (
    <div className="flex flex-col items-center">
      {/* TITLE */}
      <h3
        className="text-4xl font-bold text-white mb-5 md:mb-10"
        style={{
          "text-shadow": "0 0 10px #FFFFFF",
        }}
      >
        Skills
      </h3>
      {/* SKILLS CAROUSEL */}
      <div className="w-full p-2 md:p-10 rounded-2xl bg-gradient-to-b from-white to-midnightLight flex flex-col items-center gap-20">
        <h4 className="text-2xl font font-semibold text-midnight">
          Tecnologie studiate
        </h4>
        <Carousel className="w-full max-w-xs md:max-w-lg lg:max-w-4xl">
          <CarouselContent className="-ml-1">
            {skills.map((skill) => (
              <CarouselItem
                key={skill.id}
                className="pl-1 basis-full md:basis-1/3 lg:basis-1/3 flex justify-center"
              >
                <div className="p-1 min-w-40 min-h-40 md:min-h-40 lg:min-w-52 lg:min-h-52 xl:min-w-60 xl:min-h-60">
                  <Card>
                    <CardContent
                      className={`flex aspect-square items-center justify-center p-1 md:p-6 relative`}
                    >
                      <Image src={skill.image} alt="" fill />
                    </CardContent>
                    <span className="text-2xl font-semibold">
                      {skill.title}
                    </span>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* CERTIFICATI */}
        <h4 className="text-2xl font-semibold text-midnight">
          Certificati del corso
        </h4>
        <div className="flex justify-center flex-wrap gap-5">
          <div className="w-1/4">
            <Image
              classname="rounded-lg"
              src="/HTML_e_CSS_Certificato-OTTIM.png"
              alt=""
              width={300}
              height={500}
              layout="responsive"
            />
          </div>
          <div className="w-1/4">
            <Image
              classname="rounded-lg"
              src="/JavaScript_Basics_Certificato_OTTIM.png"
              alt=""
              width={300}
              height={500}
              layout="responsive"
            />
          </div>
          <div className="w-1/4">
            <Image
              classname="rounded-lg"
              src="/JavaScript_Advanced_Certificato_OTTIM.png"
              alt=""
              width={300}
              height={500}
              layout="responsive"
            />
          </div>
          <div className="w-1/4">
            <Image
              classname="rounded-lg"
              src="/React_Certificato_OTTIM.png"
              alt=""
              width={300}
              height={500}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

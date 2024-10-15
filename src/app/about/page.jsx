import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <h3
        className="text-4xl font-bold text-white mb-20"
        style={{
          textShadow: "0 0 10px #FFFFFF",
        }}
      >
        About Me
      </h3>
      <div className="flex flex-col items-center gap-10">
        <div className="w-4/5 text-black bg-white bg-opacity-70 p-5 md:p-10 rounded-lg shadow-neonWhite20 md:shadow-neonWhite20">
          Nel settembre 2022, dopo anni di lavoro in altri campi, ho deciso di
          dare una svolta radicale alla mia vita e alla mia carriera. Mi sono
          quindi iscritto al Master di start2Impact-University per lo Sviluppo
          Front-End. La programmazione mi ha affascinato da subito e quindi
          coniugando studio e lavoro nell'ultimo anno ho appreso varie nozioni
          di sviluppo web. Ciò che però mi dà la soddisfazione più grande è
          poter mostrare gli argomenti studiati attraverso diversi progetti
          pratici realizzati in questi mesi
        </div>
        <div className="w-4/5 lg:w-3/5 xl:w-2/5">
          <Image
            src="/attestato-master.png"
            alt=""
            width={500}
            height={350}
            layout="responsive"
            className="rounded-lg shadow-neonWhite20"
          />
        </div>
      </div>
    </div>
  );
}

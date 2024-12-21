"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    text: "Anos de experiência",
  },
  {
    num: 1,
    text: "Artigo publicado",
  },
  {
    num: 20,
    text: "Projetos finalizados",
  },
  {
    num: 20,
    text: "Tecnologias conhecidas",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid gap-6 max-w-[80vw] mx-auto xl:max-w-none sm:grid-cols-2 xl:grid-cols-4 pt-4 xl:pt-0">
          {stats.map((item, index) => {
            return (
              <div
                className={`flex-1 flex gap-4 items-center justify-center xl:justify-start`}
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                {index == 2 || index == 3 ?
                <h2 className="h2 items-start -ml-3">+</h2> :
                ''
                }
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

/* eslint-disable react/no-unescaped-entities */

const About = () => {
  return (
    <div>
      <div className="py-8" id="about" />
      <div className="flex flex-col gap-4 items-center lg:max-w-[80%] text-xl mx-auto py-12">
        <h2 className="shadow text-center uppercase text-3xl sm:text-5xl text-white drop-shadow-2xl">
          A propos
        </h2>
        <h3
          className="text-center"
          style={{
            color: "#C9C9C9",
          }}
        >
          <b className="font-bold">Luminall</b> est un studio dévoué à vos
          idées, notre but ? Transformez votre vision en réalité !
        </h3>
        <p
          className="text-center"
          style={{
            color: "#C9C9C9",
          }}
        >
          Pour cela, nous utilisons les meilleurs outils pour vous offrir des{" "}
          <b className="font-bold">solutions sur mesure</b>.
        </p>
        <p
          className="text-center"
          style={{
            color: "#C9C9C9",
          }}
        >
          Nous nous concentrons sur une communication{" "}
          <b className="font-bold">transparente et efficace</b> avec nos
          clients. Nous croyons que la clé du succès réside dans une{" "}
          <b className="font-bold">
            collaboration étroite et une compréhension approfondie de vos
            besoins
          </b>
          .
        </p>
        <p
          className="text-center"
          style={{
            color: "#C9C9C9",
          }}
        >
          Notre équipe est composée d'experts{" "}
          <b className="font-bold">passionnés</b>, prêts à repousser les limites
          pour chaque projet.
        </p>
      </div>
    </div>
  );
};

export default About;

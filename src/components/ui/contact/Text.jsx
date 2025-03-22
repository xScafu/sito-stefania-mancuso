export default function Text() {
  return (
    <>
      <div className="flex flex-col mx-auto justify-center gap-5 font-serif text-2xl max-w-96 text-bistre dark:text-wine">
        <div className="bg-bistre dark:bg-darkPurple px-12 py-6 max-w-72 xl:max-w-96 about">
          <h1 className="text-center text-4xl xl:text-5xl text-apricot dark:text-wine">
            Contact me
          </h1>
        </div>
        <p>
          Se sei interessato/a ad una <i>collaborazione</i> o hai bisogno di una
          voce che canti al tuo <i>evento speciale</i>, non esitare a
          contattarmi! Puoi farlo tramite i miei <b>canali social</b> oppure
          tramite questo <b>form</b>, inviandomi un'email con tutti i dettagli.
          A presto!
        </p>
      </div>
    </>
  );
}

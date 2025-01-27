import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Presentation() {
  gsap.registerPlugin(useGSAP());
  gsap.registerPlugin(ScrollTrigger);

  const presentationContainer = useRef();

  useGSAP(
    () => {
      let tl = gsap.timeline();

      tl.to(".about", { duration: 0.5, delay: 2, translateX: 0 });
      gsap.to(".text", {
        scrollTrigger: ".text",
        delay: 1,
        duration: 0.5,
        opacity: 1,
      });
    },
    { scope: presentationContainer }
  );

  return (
    <div ref={presentationContainer}>
      <img
        className="h-[28rem] md:h-[40rem] w-full object-[70%_100%] object-cover border-y-2 border-bistre"
        src="./img/photo-2.jpg"
        alt=""
      />
      <div className="mt-5 bg-bistre dark:bg-darkPurple px-12 py-6 max-w-72 -translate-x-96 about">
        <h1 className="text-center text-4xl text-apricot dark:text-wine">
          About me
        </h1>
      </div>
      <p className="mt-16 font-serif text-xl p-5 text-bistre dark:text-wine text opacity-0">
        <div className="mb-10">
          <b>Stefania Mancuso</b>, classe 96 è una cantautrice Rivolese della
          provincia di Torino.
        </div>
        <div className="mb-10">
          <i>Vincitrice</i> del Premio <b>“Mino Reitano”</b> 2015 e{" "}
          <b>“Miglior Voce”</b> 2017 inizia all’eta di 11 anni la sua crescita
          vocale entrando come solista nel coro dei canti gregoriani{" "}
          <i>vincendo</i> il concorso regionale presso il{" "}
          <i>Conservatorio Verdi di Torino</i>. <br /> Appassionata di musica
          moderna partecipa a vari festival canori come{" "}
          <i>Festival di Saint Vincent</i> e altri importanti concorsi nazionali
          posizionandosi come finalista. <br /> Nel 2016 partecipa alle blind di{" "}
          <b>"The Voice of Italy”</b> su <i>Rai2</i>.
        </div>
        <div className="mb-10">
          <i>Studia</i> <b>tecnica vocale</b> e <b>pianoforte</b> all’età di 16
          anni per diversi anni, approfondendo lo studio con{" "}
          <i>l’interpretazione del linguaggio musicale</i> presso una scuola
          milanese. <br />
          Nel suo percorso musicale ha frequentato diversi stage con{" "}
          <b>Bungaro</b> e si è esibita nelle piazze più importanti del salotto
          torinese in varie manifestazioni. <br /> <i>Vince</i> una borsa di
          studio di un anno per frequentare la <b>“Coro Orchestra Vianney”</b>{" "}
          di Torino affrontando repertori polifonici esibendosi come solista con
          <i>successo e apprezzamento del pubblico</i>.
        </div>
        <div className="mb-10">
          Nasce il suo <i>primo gruppo musicale</i> i <i>“Last Minute”</i> cover
          band pop/rock degli anni 90/00 e seguirono altri gruppi che portarono
          a diverse
          <i>esperienze di live</i> a contatto con il pubblico come gli{" "}
          <i>“A14”</i> di Guardialfiera e i <i>“BPM Project Trio”</i>. <br />
          Nel 2017 entra a far parte della Compilation{" "}
          <b>“Album di Artisti Vari”</b> grazie al concorso canoro{" "}
          <b>“Canto Italiano”</b> portando l’inedito <i>“Ho Paura”</i> e la
          cover <i>“Donna”</i> di Mia Martini su <i>Radio Latte&Miele</i>.
          Protagonista nei musical nei teatri torinesi si esibisce sul palco del{" "}
          <b>Teatro Nuovo di Milano</b> insieme ai{" "}
          <i>big della musica italiana</i> come <b>Ivana Spagna</b>,{" "}
          <b>Toto Cutugno</b>, <b>Marco Masini</b>, <b>Enrico Ruggieri</b>,{" "}
          <b>Ron</b>, <b>Dolcenera</b>, <b>Simona Molinari</b> e gli{" "}
          <b>Stadio</b> all’evento <i>“Buon Compleanno Mimì”</i> omaggiando la
          grande <b>Mia Martini</b>. <br />
        </div>
        <div className="mb-10">
          Si è dedicata spesso ad <i>associazioni di volontariato</i> recandosi,
          per diversi anni, nei reparti ospedalieri pediatrici come{" "}
          <i>
            l’Ospedale Regina Margherita
            <i></i> e <i>Casa Ugi</i> portando un sorriso ai bimbi meno
          </i>
          fortunati, facendo vari musical nelle vesti di <i>Mary Poppins</i>{" "}
          cantando le canzoni più famose della <i>Disney</i>. Apre la{" "}
          <b>“Partita del Cuore”</b> presso lo <b>Juventus Stadium</b> nel 2019.
        </div>
        <div className="mb-10">
          Entra a far parte del gruppo musicale{" "}
          <i>“Cinemaniax - The Movie Music Live Show”.</i> <br />
          Nel 2022 è stata scelta nel programma di{" "}
          <b>Carlo Conti “Tocca a Te”</b> su <i>Rai Play</i>. <br />
          Dopo aver condiviso e duettato in diversi inediti, il{" "}
          <i>17 Febbraio 2023</i> è uscito il suo <b>primo inedito</b>{" "}
          <i>scritto da lei</i> dal titolo <b>“MA CHE NE SAI DI ME”</b>{" "}
          <i>disponibile su tutte le piattaforme digitali.</i> <br />É stata in
          gara nel contest canoro <b>“Canta che ti Passa 2023/2024”</b> al
          programma
          <i>“Uno Mattina in Famiglia”</i> su <i>Rai Uno</i> per diversi mesi.
          Nel 2024 ha partecipato al programma televisivo <b>“VideoBox”</b> di{" "}
          <i>Fiorello</i> su <i>Rai Due</i> e successivamente è stata{" "}
          <i>ospite</i> su <i>Rai Radio Due</i>
          al programma <b>“Sogni di Gloria"</b> <i>per una sua intervista</i>.
        </div>
      </p>
    </div>
  );
}

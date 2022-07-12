import Head from "next/head";
import { Container, Typography } from "@mui/material";

const AboutMePage = () => {
  const age = new Date().getFullYear() - 1991;

  return (
    <div>
      <Head>
        <title>Aníbal Jorquera</title>
      </Head>
      <Container>
        <Typography
          variant="h3"
          component="h1"
          marginBottom={4}
          fontWeight={100}
          marginTop={10}
        >
          Sobre mi (Detrás del Developer)
        </Typography>
        <Typography>
          Me llamo Aníbal Jorquera, tengo {age} años, vivo en la Florida RM, con
          mi esposa y mis 2 perritas. Aunque la mayor parte de mi vida la viví
          en un pueblito llamado Pumanque
          <i>(Ya sé, nadie lo ha escuchado, pero tiene su gracia)</i>.
        </Typography>
        <Typography>
          No soy gran deportista pero me encantaba jugar ping pong,
          lamentablemente no tengo espacio suficiente en mi departamento para
          poner una mesa. Mis tiempos libres, los uso para ver series y
          películas, actualmente estoy viendo "the office", la han visto esta
          buena, o eso digo ella{" "}
          <i>(chiste interno de the office no me funen)</i>. Además, juego uno
          que otro videojuego cuando alcanza el tiempo, no soy gamer, pero
          disfruto intentando pasar cada uno de los retos.
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          marginBottom={4}
          fontWeight={100}
          marginTop={10}
        >
          ¿Qué es lo que más disfrutas de tu trabajo?
        </Typography>

        <Typography>
          Disfruto poder aprender, es maravilloso poder sorprenderse día a día
          con lo que se puede lograr programando. Sé que puedo aprender de otros
          y enseñar lo que he aprendido. Me gusta lo que hago y estoy feliz de
          poder trabajar en lo que me gusta.
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          marginBottom={4}
          fontWeight={100}
          marginTop={10}
        >
          ¿Qué es lo que te motiva a participar en esta postulación?
        </Typography>

        <Typography>
          Entrar a penta financiero puede ser un plus en mi carrera profesional,
          ya que, espero toparme con excelentes profesionales he ir potenciando
          mis skills, y así, participar de grandes desafíos y proyectos
          entretenidos.
        </Typography>
      </Container>
    </div>
  );
};

export default AboutMePage;

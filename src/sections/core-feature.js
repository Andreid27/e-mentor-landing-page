/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import CoreFeatureThumb from 'assets/coreFeature.png';
import Briefcase from 'assets/core-feature/briefcase.svg';
import Secure from 'assets/core-feature/secure.svg';

const data = {
  subTitle: 'Te ajutăm să-ți atingi obiectivele',
  title: 'Monitorizară-ți progresul cu ușurință pentru a-ți atinge obiectivele',
  features: [
    {
      id: 1,
      imgSrc: Briefcase,
      altText: 'Montorizarea progresului personal',
      title: 'Montorizarea progresului personal',
      text:
        'E-mentor este soluția perfectă pentru monitorizarea progresului tău. Aici vei vedea progresul tău în timp real și vei ști exact unde te afli în raport cu obiectivele tale. Testele și grilele sunt construite astfel încât îți arată în mod real atât nivelul de dificultate, dar și locul în care te situezi după fiecare test. În funcție de rezultatele tale, vei primi feedback:',
    },
    {
      id: 2,
      imgSrc: Secure,
      altText: 'Monitorizarea progresului de către profesor',
      title: 'Monitorizarea progresului de către profesor',
      text:
        'Profesorul beneficiează de date în timp real despre fiecare student în parte. Astfel, el poate să vadă unde ai nevoie de ajutor și îți poate oferi suportul necesar pentru a-ți atinge obiectivele. În plus, profesorul poate oferi în permanență feedback în legătura cu rezultatele de la testele tale și cu timpul de studiu pe care l-ai acordat fiecărei lecții în parte.',
    },
  ],
};

export default function CoreFeature() {
  return (
    <section sx={styles.coreFeature}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={CoreFeatureThumb} alt="E-mentor mobile dual" title="E-mentor te ajută să intri la medicină mobil" />
        </Box>
        <Box sx={styles.contentBox}>
          <Box sx={styles.headingTop}>
            <TextFeature subTitle={data.subTitle} title={data.title} />
          </Box>

          <Grid gap="15px 0" columns={1} sx={styles.grid}>
            {data.features.map((item) => (
              <Box sx={styles.card} key={item.id}>
                <Image src={item.imgSrc} alt={item.altText} sx={styles.img} title={item.altText}/>

                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                  {item.title == 'Montorizarea progresului personal'  ? 
                 (        
                  <div>
                  <div style={styles.error}>Mai invață și repetă testul, nu poți trece mai departe</div>
                  <div style={styles.warning}>Este bine, dar trebuie să mai recapitulezi lecția înainte de a merge mai departe</div>
                  <div style={styles.success}>Excelent, ești pregătit</div>
              </div>)
                  : null}
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: ['auto', null, null, '50%'],
      bottom: ['100px', 0, null, 'auto'],
      left: 0,
      background: 'linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)',
      height: [350, 550, '60%'],
      width: '50%',
      zIndex: -1,
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      transform: ['translateY(0)', null, null, 'translateY(-50%)'],
    },
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', null, null, 'row'],
  },
  thumbnail: {
    pl: [0, 5, 0, null, 7, 95],
    pr: [0, 5, null, null, null, 75, 95],
    order: [2, null, null, 0],
  },
  contentBox: {
    width: ['100%', 450, 550, 350, 500, 570],
    pr: [0, null, 'auto', null, null, 80],
    pl: 'auto',
    flexShrink: 0,
  },
  headingTop: {
    pl: [0, null, null, null, '35px', null, '55px', 6],
    mb: [3, null, null, null, 1],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    p: ['0 0px 35px', null, null, null, '0 20px 40px', null, '0 40px 40px', 0],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    p: [
      '0 17px 20px',
      null,
      null,
      '0 0 20px',
      '20px 15px 17px',
      null,
      null,
      '25px 30px 23px',
    ],
    backgroundColor: 'white',
    borderRadius: '10px',
    transition: 'all 0.3s',
    width: ['100%', '85%', null, '100%'],
    mx: 'auto',
    '&:hover': {
      boxShadow: [
        '0px 0px 0px rgba(0, 0, 0, 0)',
        null,
        null,
        null,
        '0px 8px 24px rgba(69, 88, 157, 0.07)',
      ],
    },
  },

  img: {
    width: ['50px', null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
  error: {
    backgroundColor: '#ea5455',
    color: 'white',
    padding: '10px',
    margin: '10px 0',
},
warning: {
    backgroundColor: '#ff9e43',
    color: 'white',
    padding: '10px',
    margin: '10px 0',
},
success: {
    backgroundColor: '#28c770',
    color: 'white',
    padding: '10px',
    margin: '10px 0',
},
};

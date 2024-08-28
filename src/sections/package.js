/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';
import Avatar1 from 'assets/profesor.png';

const packages = [
  // {
  //   name: 'Free Plan',
  //   description: 'For Small teams or office',
  //   buttonText: 'Signup Now',
  //   points: [
  //     {
  //       icon: <IoIosCheckmarkCircle />,
  //       text: 'Ultimate access to all course, exercises and assessments',
  //       isAvailable: true,
  //     },
  //     {
  //       icon: <IoIosCheckmarkCircle />,
  //       text:
  //         'Free access for all kind of exercise corrections with downloads.',
  //       isAvailable: true,
  //     },
  //     {
  //       icon: <IoIosCheckmarkCircle />,
  //       text: 'Total assessment corrections with free download access system',
  //       isAvailable: true,
  //     },
  //     {
  //       icon: <IoIosCloseCircle />,
  //       text: 'Unlimited download of courses on the mobile app contents',
  //       isAvailable: false,
  //     },
  //     {
  //       icon: <IoIosCloseCircle />,
  //       text: 'Download and print courses and exercises in PDF',
  //       isAvailable: false,
  //     },
  //   ],
  // },
  {
    header: 'Profesor',
    name: 'Drd. dr. Dincă Angie-Maria',
    description: 'Corint, Barron\'s',
    avatar: Avatar1,
    buttonText: 'Contactează-mă',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'DOCTORAND în cadrul UMF Carol Davila și ofer meditații la BIOLOGIE',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'MEDIC REZIDENT în specialitatea ONCOLOGIE MEDICALĂ',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Mă recomandă răbdarea și dragostea pe care o am pentru copii, dar totodată și pasiunea cu care explic noțiunile greu de înțeles sau corelațiile pe care le fac pentru  mai ușor de înțeles.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Anul acesta elevii mei AU PROMOVAT EXAMENUL DE ADMITERE la UMFCD, având punctaj la biologie >55/60 pct',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Dispun de materiale ajutătoare de pe care copiii pot învăța mai ușor dispun de materiale ajutătoare de pe care copiii pot învăța mai ușor.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Am intrat din prima încercare la Medicină Generală, UMF Carol Davila în anul 2016, deși nu am făcut meditații nici la biologie, nici la chimie + am luat nota 10 la BACALAUREAT la biologie',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Telefon: ',
        isAvailable: true,
      },
    ],
  },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Despre noi"
          slogan="Profesor"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};

/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: '⁠Cu cât timp înainte ar trebui să încep pregătirea?',
    contents: (
      <div>
        Recomandat ar fi din clasa a 11-a, semestrul 2; iar ideal - din semestrul 1. 
      </div>
    ),
  },
  {
    title: 'Cât timp este nevoie să aloc învățatului?',
    contents: (
      <div>
       Muult! Zilnic. Și în mod constant. Pentru a intra la medicină este nevoie de un efort permanent și de muncă depusă cu seriozitate, așa că fii pregătit pentru asta!

      </div>
    ),
  },
  {
    title: `De ce materiale suplimentare am nevoie pentru a fi bine pregătit la examenul de admitere?`,
    contents: (
      <div>
        Ai nevoie să înțelegi - nu doar să cunoști - noțiunile din Corint. 
        Pentru asta va fi nevoie pe alocuri de: atlase de anatomie, desene suplimentare și... explicațiile cuiva care a studiat anatomia în detaliu în facultate. 🙂 
      </div>
    ),
  },
  {
    title: `Cum pot avea garanția că voi fi admis?`,
    contents: (
      <div>
        Atâta timp cât testele tale au numai etichetă verde, 
        poți fi convins că șansele tale de reușită sunt MAXIME!  
        Totuși, pentru că stresul acelui moment te poate copleși oricât de bine te-ai fi pregătit în timpul anului, 
        este necesar să lucrezi și la acest capitol și să înveți cum să-ți gestionezi emoțiile! 
        Poți lucra la asta pe parcursul anului, atunci când faci teste și grile sub presiunea timpului.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Întrebări frecvente"
          slogan="Găsește răspunsurul întrebărilor tale"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}

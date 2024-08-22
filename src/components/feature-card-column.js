/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Flex } from 'theme-ui';
import { useEffect } from 'react';
import FlipNumbers from "react-flip-numbers";
import { InView } from "react-intersection-observer";

  export default function FeatureCardColumn({
    src,
    altText = 'default alt text',
    title,
    text,
  }) {
    const [animate, setAnimate] = React.useState(false);
    return (
    <InView as="div" onChange={(inView, entry) => {setAnimate(inView)}}>
      <Box sx={styles.card}>
        <Image src={src} alt={altText} sx={styles.img} />
  
        <Box sx={styles.wrapper}>
          <Heading sx={styles.wrapper.title}>{title}</Heading>
            <Flex 
              alignItems="center"  // Centers items vertically
              justifyContent="center" // Centers items horizontally
              sx={{ gap: '10px', marginTop:'-15px' }} // Optional: Adds some space between the items
            >
              <FlipNumbers
                play={animate}
                color="#28c76f"
                background="#fff"
                duration={1}
                width={20}
                height={50}
                numberStyle={{ 
                  fontSize: "1.5em", 
                  fontFamily: "'DM Sans', 'sans-serif'", 
                  fontWeight: 1000 
                }}
                numbers={`${text}`}
              />
              <Heading sx={{marginTop: '5px', marginLeft:'-3px', fontWeight:1000, color:'#28c76f', fontSize:'1.5em'}}>+</Heading>
            </Flex>

        </Box>
      </Box>
    </InView>
    );
  }

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    textAlign: 'center',
    flexDirection: 'column',
  },
  img: {
    mx: 'auto',
    mb: [3, null, 4, null, null, 5],
    width: ['80px', '90px', null, null, null, '100px', 'auto'],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    title: {
      fontSize: [3, null, null, null, null, 4],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, null, 3],
    },
    

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
    },
  },
};

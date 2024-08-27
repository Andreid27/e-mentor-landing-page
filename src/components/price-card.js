import { Box, Card, Text, Flex, Heading, Button, Image } from 'theme-ui';
import React from 'react';
import List from './list';

export default function PriceCard({
  data: {
    header,
    name,
    description,
    avatar,
    buttonText = 'Start Free Trial',
    points,
  },
}) {
  return (
    <Card className={header ? 'active' : null} sx={styles.pricingBox}>
      {header && <Text sx={styles.header}>{header}</Text>}
      <Box>
        <Flex sx={styles.pricingHeader}>
          <Box>
            <Heading className="package__name" sx={styles.heading}>
              {name}
            </Heading>
            <Text
              as="p"
              sx={{
                opacity: header ? 1 : 0.7,
                color: header ? 'text' : 'white',
                fontSize: [1, 2],
                lineHeight: 1.3,
              }}
            >
              {description}
            </Text>
          </Box>
          {header && (
            // <Text className="package__price" sx={styles.price}>
            //   <span>Starting from</span>
            //   <div className="price">
            //     {priceWithUnit}
            //     <sub>mo</sub>
            //   </div>
            // </Text>
            <div className="image">
              <Image src={avatar} alt="Profesor Image" title="Drd. dr. Dincă Angie-Maria"/>
            </div>
          )}
        </Flex>
        <List items={points} childStyle={styles.listItem} />
        <Box
          sx={{
            textAlign: 'center',
            mt: ['40px', null, null, null, null, '70px'],
          }}
        >
          <Button
            variant={header ? 'primary' : 'whiteButton'}
            aria-label={buttonText}
            title="Număr de telefon"
            onClick={() => {
               window.location.href='tel:+40 720 464 201';
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

const styles = {
  pricingBox: {
    flex: [
      '0 1 100%',
      null,
      null,
      '0 1 70%',  // Increased width from 50% to 60%
      '0 1 65%',  // Increased width from 45% to 55%
      '0 1 60%',  // Increased width from 40% to 50%
      '0 1 58.5%',  // Increased width from 38.5% to 48.5%
    ],
    background: '#2F5392',
    borderRadius: 10,
    ml: [0, null, null, 5],
    position: 'relative',
    mt: ['40px', null, null, 0],
    p: [
      '50px 15px 50px',
      null,
      '62px 25px 50px 25px',
      null,
      '62px 70px 50px 40px',
    ],
    '@media screen and (min-width: 420px) and (max-width: 767px)': {
      maxWidth: '380px',
    },
    '&:first-of-type': {
      ml: 0,
      mt: 0,
    },
    '&.active': {
      backgroundColor: 'white',
      '.package__name': {
        color: 'heading_secondary',
      },
      '.package__price > span': {
        color: 'text',
      },
      '.open': {
        color: 'text',
      },
      '.closed': {
        color: 'text',
        opacity: 0.6,
      },
      '.image': {
        flexShrink: 0,
        mr: [0, null, null, 0],
        display: 'flex',
        img: {
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  header: {
    height: ['28px', null, null, null, '32px'],
    backgroundColor: '#EF9E48',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    position: 'absolute',
    top: [3, null, 4],
    letterSpacing: '-.14px',
    px: '10px',
  },

  heading: {
    fontWeight: 'bold',
    fontSize: [4, null, null, null, 5],
    lineHeight: '23px',
    color: '#ffffff',
    marginTop: [3, null, '36px'],
    marginBottom: [1, null, '12px'],
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: ['35px', null, null, null, null, '50px'],
  },
  price: {
    fontWeight: 'bold',
    fontSize: [4, null, 5, null, '26px'],
    lineHeight: 1,
    display: 'flex',
    letterSpacing: '-0.5px',
    color: '#0F2137',
    marginBottom: 0,
    flexWrap: 'wrap',
    flexDirection: 'column',
    textAlign: 'right',
    mt: ['-3px', null, '2px'],
    '> span': {
      fontWeight: 'body',
      fontSize: [1, 2],
      lineHeight: 1.25,
      display: 'block',
      marginBottom: '10px',
      color: 'white',
    },
    '> .price': {
      marginBottom: 0,
      color: 'secondary',
      '> sub': {
        position: 'relative',
        bottom: '6px',
      },
    },
  },
  listItem: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: [1, null, null, null, 2],
    lineHeight: [1.7, null, 1.65],
    marginBottom: [3, '22px'],
    alignItems: 'flex-start',
    color: 'white',
    pr: [2, null, null, null, 0, 6],
    '&.closed': {
      opacity: 0.55,
      button: {
        color: '#788FB5',
      },
    },
  },
};

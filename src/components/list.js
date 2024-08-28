import React from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { Flex, Box, IconButton,Button } from 'theme-ui';

export default function List({ items = [], parentStyle, childStyle }) {
  return (
    <Box
      as="ul"
      sx={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        ...parentStyle,
      }}
    >
      {items.map(({ icon, text, isAvailable }, i) => (
        <Flex
          className={isAvailable ? 'open' : 'closed'}
          as="li"
          sx={{ ...childStyle }}
          key={i}
        >
          <IconButton sx={styles.listIcon} aria-label="list icon">
            {icon}
          </IconButton>
          {text}
          {text === 'Telefon: ' ?           <Button
            variant={'whiteButton'}
            aria-label={"Telefon: +40 720 464 201"}
            title="Număr de telefon"
            onClick={() => {
               window.location.href='tel:+40 720 464 201';
            }}
            sx={{ marginTop: '-10px' }}
          >
            +40 720 464 201
          </Button> : null}
        </Flex>
      ))}
        <Flex
          as="li"
          sx={{ ...childStyle }}
          key={10}
        >

        </Flex>
    </Box>
  );
}
const styles = {
  listIcon: {
    width: [25, '35px'],
    height: 'auto',
    color: 'secondary',
    padding: 0,
    fontSize: [2, 5],
    marginLeft: '-1px',
    flexShrink: 0,
    justifyContent: 'flex-start',
    marginTop: [1, '2px'],
  },
};

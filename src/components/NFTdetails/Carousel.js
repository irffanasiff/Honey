import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import NFTcard from './NFTcard';

const Carousel = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: '100px',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    useCSS: true,
    //variableWidth: true,
  };

  return (
    <Container maxW='100vw' display={'flex'} flexDirection={'column'} px='0'>
      <link
        rel='stylesheet'
        type='text/css'
        charset='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      <Slider {...settings}>
        <NFTcard
          last={false}
          url='https://arweave.net/9PVPYCV5cGReauH1oiUS3vaOt8tKaXEHiFGfo6jRIM0'
          collection='DegenApe'
          id='7915'
          value='168'
        />
        <NFTcard
          last={false}
          url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsdbdKwut4v9vdNsN7hUyqm6Iz8jveUO6xQ&usqp=CAU'
          collection='DeGods'
          id='super'
          value='1380'
        />
        <NFTcard
          last={false}
          url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYucSnFkOhl_-b2Sg9kqIrSFZujzCqmdwGIrdXHnWqfRAvnrpXRY2OOgDMtLSaOnq29U&usqp=CAU'
          collection='Phunk'
          id='ashm'
          value='1380'
        />
        <NFTcard
          last={false}
          url='https://pbs.twimg.com/media/FI1uXXcUcAAcUi1.jpg'
          collection='Azuki'
          id='manchanda'
          value='10.03'
        />
      </Slider>
    </Container>
  );
};

export default Carousel;

import { Center, Container, Text, Wrap } from '@chakra-ui/react';
import React from 'react';

const Featured = () => {
  return (
    <Container maxW='100vw'>
      <Text mx='auto'>AS FEATURED IN</Text>
      <Center>
        <Wrap>
          <Center w='15rem'>
            <svg
              viewBox='0 0 193 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M67.7728 21.2281C66.2366 21.2281 64.8824 20.8946 63.71 20.2276C62.5377 19.5606 61.6079 18.6308 60.9207 17.4383C60.2537 16.2457 59.9202 14.8814 59.9202 13.3452C59.9202 11.8091 60.2537 10.4447 60.9207 9.25215C61.6079 8.0596 62.5377 7.12982 63.71 6.46281C64.8824 5.79579 66.2366 5.46228 67.7728 5.46228C69.693 5.46228 71.31 5.9676 72.6238 6.97823C73.9376 7.96865 74.7765 9.34311 75.1403 11.1016H71.0472C70.8451 10.374 70.4408 9.808 69.8345 9.40374C69.2483 8.97928 68.551 8.76705 67.7425 8.76705C66.6712 8.76705 65.7616 9.1713 65.0138 9.97981C64.2659 10.7883 63.892 11.9101 63.892 13.3452C63.892 14.7803 64.2659 15.9021 65.0138 16.7106C65.7616 17.5191 66.6712 17.9234 67.7425 17.9234C68.551 17.9234 69.2483 17.7212 69.8345 17.317C70.4408 16.9127 70.8451 16.3367 71.0472 15.5888H75.1403C74.7765 17.2867 73.9376 18.651 72.6238 19.6819C71.31 20.7127 69.693 21.2281 67.7728 21.2281Z'
                fill='#0B0B2C'
              />
              <path
                d='M85.1943 21.2281C83.739 21.2281 82.4252 20.8946 81.2529 20.2276C80.1008 19.5606 79.1811 18.6409 78.4938 17.4686C77.8268 16.276 77.4933 14.9016 77.4933 13.3452C77.4933 11.7888 77.8369 10.4245 78.5242 9.25215C79.2114 8.0596 80.1311 7.12982 81.2832 6.46281C82.4555 5.79579 83.7693 5.46228 85.2247 5.46228C86.6598 5.46228 87.9534 5.79579 89.1055 6.46281C90.2778 7.12982 91.1975 8.0596 91.8645 9.25215C92.5517 10.4245 92.8954 11.7888 92.8954 13.3452C92.8954 14.9016 92.5517 16.276 91.8645 17.4686C91.1975 18.6409 90.2778 19.5606 89.1055 20.2276C87.9332 20.8946 86.6294 21.2281 85.1943 21.2281ZM85.1943 17.8627C86.205 17.8627 87.0842 17.4888 87.8321 16.7409C88.58 15.9729 88.9539 14.8409 88.9539 13.3452C88.9539 11.8495 88.58 10.7277 87.8321 9.97981C87.0842 9.21172 86.2151 8.82769 85.2247 8.82769C84.1938 8.82769 83.3045 9.21172 82.5566 9.97981C81.8289 10.7277 81.4651 11.8495 81.4651 13.3452C81.4651 14.8409 81.8289 15.9729 82.5566 16.7409C83.3045 17.4888 84.1837 17.8627 85.1943 17.8627Z'
                fill='#0B0B2C'
              />
              <path
                d='M95.7588 20.8643V5.82611H99.1849L99.5184 7.85748C100.003 7.12982 100.64 6.55376 101.428 6.1293C102.237 5.68462 103.167 5.46228 104.218 5.46228C106.542 5.46228 108.19 6.36174 109.16 8.16067C109.706 7.33195 110.433 6.67504 111.343 6.18993C112.273 5.70483 113.283 5.46228 114.375 5.46228C116.335 5.46228 117.841 6.04845 118.892 7.22078C119.943 8.39311 120.469 10.1112 120.469 12.375V20.8643H116.588V12.7388C116.588 11.4452 116.335 10.4548 115.83 9.76757C115.345 9.08034 114.587 8.73673 113.556 8.73673C112.505 8.73673 111.656 9.12077 111.009 9.88885C110.383 10.6569 110.069 11.7282 110.069 13.1027V20.8643H106.189V12.7388C106.189 11.4452 105.936 10.4548 105.431 9.76757C104.925 9.08034 104.147 8.73673 103.096 8.73673C102.065 8.73673 101.226 9.12077 100.58 9.88885C99.953 10.6569 99.6397 11.7282 99.6397 13.1027V20.8643H95.7588Z'
                fill='#0B0B2C'
              />
              <path
                d='M123.547 27.5345V5.82611H127.003L127.428 7.97875C127.913 7.31174 128.55 6.72557 129.338 6.22025C130.146 5.71494 131.187 5.46228 132.461 5.46228C133.876 5.46228 135.139 5.80589 136.251 6.49312C137.362 7.18035 138.241 8.12024 138.888 9.31279C139.535 10.5053 139.858 11.8596 139.858 13.3755C139.858 14.8915 139.535 16.2457 138.888 17.4383C138.241 18.6106 137.362 19.5404 136.251 20.2276C135.139 20.8946 133.876 21.2281 132.461 21.2281C131.329 21.2281 130.338 21.0159 129.489 20.5914C128.64 20.167 127.953 19.5707 127.428 18.8026V27.5345H123.547ZM131.642 17.8324C132.875 17.8324 133.896 17.4181 134.704 16.5893C135.513 15.7606 135.917 14.6894 135.917 13.3755C135.917 12.0617 135.513 10.9803 134.704 10.1314C133.896 9.28247 132.875 8.858 131.642 8.858C130.389 8.858 129.358 9.28247 128.55 10.1314C127.761 10.9601 127.367 12.0314 127.367 13.3452C127.367 14.659 127.761 15.7404 128.55 16.5893C129.358 17.4181 130.389 17.8324 131.642 17.8324Z'
                fill='#0B0B2C'
              />
              <path
                d='M147.903 21.2281C146.61 21.2281 145.549 21.026 144.72 20.6218C143.891 20.1973 143.275 19.6414 142.87 18.9542C142.466 18.267 142.264 17.509 142.264 16.6803C142.264 15.2856 142.81 14.1537 143.901 13.2846C144.993 12.4154 146.63 11.9809 148.813 11.9809H152.633V11.617C152.633 10.5862 152.34 9.82821 151.754 9.34311C151.168 8.858 150.44 8.61545 149.571 8.61545C148.783 8.61545 148.095 8.80747 147.509 9.19151C146.923 9.55534 146.559 10.1011 146.418 10.8287H142.628C142.729 9.73725 143.093 8.78726 143.719 7.97875C144.366 7.17025 145.195 6.55376 146.206 6.1293C147.216 5.68462 148.348 5.46228 149.601 5.46228C151.744 5.46228 153.432 5.99791 154.665 7.06918C155.898 8.14045 156.514 9.6564 156.514 11.617V20.8643H153.209L152.845 18.4388C152.401 19.2473 151.774 19.9143 150.966 20.4398C150.177 20.9654 149.157 21.2281 147.903 21.2281ZM148.783 18.1962C149.894 18.1962 150.753 17.8324 151.36 17.1048C151.986 16.3771 152.381 15.4776 152.542 14.4064H149.237C148.207 14.4064 147.469 14.5984 147.024 14.9824C146.58 15.3463 146.357 15.801 146.357 16.3468C146.357 16.933 146.58 17.3877 147.024 17.7111C147.469 18.0345 148.055 18.1962 148.783 18.1962Z'
                fill='#0B0B2C'
              />
              <path
                d='M159.611 20.8643V5.82611H163.037L163.34 8.3729C163.805 7.48354 164.472 6.7761 165.341 6.25057C166.231 5.72504 167.272 5.46228 168.464 5.46228C170.324 5.46228 171.769 6.04845 172.8 7.22078C173.831 8.39311 174.346 10.1112 174.346 12.375V20.8643H170.465V12.7388C170.465 11.4452 170.202 10.4548 169.677 9.76757C169.151 9.08034 168.333 8.73673 167.221 8.73673C166.13 8.73673 165.23 9.12077 164.523 9.88885C163.835 10.6569 163.492 11.7282 163.492 13.1027V20.8643H159.611Z'
                fill='#0B0B2C'
              />
              <path
                d='M178.827 27.5345L182.314 19.8638H181.404L175.553 5.82611H179.767L183.981 16.4074L188.378 5.82611H192.501L182.95 27.5345H178.827Z'
                fill='#0B0B2C'
              />
              <path
                d='M15.6026 25.0062C14.6355 25.9732 13.0673 25.9718 12.1019 25.0032L2.24283 15.1102C1.27981 14.1439 1.28115 12.5802 2.24582 11.6155L12.1049 1.75644C13.0696 0.791768 14.6332 0.790427 15.5996 1.75345L25.4925 11.6125C26.4612 12.5779 26.4626 14.1462 25.4955 15.1132L15.6026 25.0062Z'
                fill='#E7B400'
              />
              <path
                d='M28.9963 25.0016C28.031 25.9703 26.4627 25.9716 25.4957 25.0046L15.6027 15.1116C14.6357 14.1446 14.637 12.5763 15.6057 11.611L25.4987 1.75186C26.465 0.788839 28.0287 0.79018 28.9933 1.75486L38.8524 11.614C39.8171 12.5786 39.8185 14.1423 38.8554 15.1086L28.9963 25.0016Z'
                fill='#0B0B2C'
              />
              <path
                d='M38.9247 25.0035C37.9585 25.9711 36.3904 25.9711 35.4243 25.0035L25.5465 15.1102C24.5813 14.1435 24.5827 12.5774 25.5495 11.6123L35.4273 1.75297C36.3927 0.789294 37.9562 0.789296 38.9217 1.75297L48.7994 11.6123C49.7662 12.5774 49.7676 14.1435 48.8024 15.1102L38.9247 25.0035Z'
                fill='#E7B400'
              />
            </svg>
          </Center>
          <Center w='15rem'>
            <svg
              viewBox='0 0 640 206'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M488.5 1.9C484.5 4.3 482.4 6.8 480.5 11.3C478.4 16.4 478.3 88.4 480.4 94.3C482.2 99.1 484.5 101.7 489.2 104.1C492.7 105.9 496.1 106 559.6 106C625.5 106 626.4 106 630.7 103.9C633.1 102.7 636.2 100.2 637.5 98.2L640 94.5V52.9V11.3L637.7 7.9C636.5 6.1 633.9 3.5 632.1 2.3L628.7 -1.57952e-06H560.1C495.1 -1.57952e-06 491.3 0.0999984 488.5 1.9ZM629.1 11.8L632.1 15.1L631.8 53.6L631.5 92.2L628.7 94.6L625.9 97H559.9H493.8L490.9 94.1L488 91.2V53.6C488 26.1 488.3 15.4 489.2 13.4C491.7 8 491.1 8 561.3 8.3L626.2 8.5L629.1 11.8Z'
                fill='black'
              />
              <path
                d='M595.8 30.9999C585.7 32.8999 579.8 40.9999 579.8 52.9999C579.8 62.8999 583.6 69.2999 591.7 73.3999C596.5 75.7999 605.6 75.4999 610.5 72.6999C614.9 70.1999 619 63.9999 619 59.6999C619 57.0999 618.8 56.9999 614.1 56.9999C609.6 56.9999 609.1 57.1999 608.2 59.8999C606.7 64.0999 602.8 66.3999 598.5 65.5999C586.5 63.2999 588.2 39.8999 600.4 39.9999C603.9 40.0999 606.1 41.4999 607.9 44.6999C608.9 46.5999 609.9 46.9999 614 46.9999C619.4 46.9999 619.9 46.3999 617.9 41.2999C614.9 33.3999 605.7 29.0999 595.8 30.9999Z'
                fill='black'
              />
              <path
                d='M500 52.5V74H505.5H511V61.8V49.5L518.6 61.8L526.2 74H531.6H537V52.5V31H532H527V44.2V57.5L518.9 44.2L510.7 31H505.4H500V52.5Z'
                fill='black'
              />
              <path
                d='M539 32.2C539 32.9 542.2 38.7 546 45.1L553 56.8V65.4V74H559H565V65.4V56.9L572.5 44.6C576.6 37.8 580 32 580 31.6C580 31.3 577.3 31 574.1 31H568.1L563.9 38.5C561.6 42.6 559.3 45.7 559 45.5C558.6 45.2 556.4 41.9 554.1 38L549.9 31H544.5C540.8 31 539 31.4 539 32.2Z'
                fill='black'
              />
              <path
                d='M18.5 30.6C11.4 32.4 6.4 34.6 3.4 37.2L0 40.2V116.7C0 192.8 0 193.2 2.1 197C5.5 203 10.8 205.3 22 205.8C27.2 206.1 35.2 205.7 39.8 205L48.2 203.8L47.8 151.6L47.5 99.4L52.1 110.5C57.2 122.8 61.3 131.4 78.8 167C85.4 180.5 92.2 193.4 93.8 195.6C95.8 198.3 98.9 200.8 102.7 202.6C108.4 205.4 108.8 205.5 125.5 205.5C142.4 205.5 142.5 205.5 148.5 202.5L154.5 199.5V121C154.5 43.7 154.5 42.4 152.4 39C151.3 37.1 148.4 34.4 145.9 33C141.8 30.7 140.5 30.5 128.5 30.5C121.4 30.5 113.3 30.9 110.6 31.3L105.8 32.2L106.3 82.8C106.6 110.7 107.1 134.6 107.5 136C107.8 137.4 106 133.5 103.5 127.5C101 121.4 90.8 100.1 80.9 80C61 39.7 59 36.7 49 32.8C44.8 31.2 40.8 30.6 32 30.4C25.7 30.2 19.6 30.3 18.5 30.6Z'
                fill='black'
              />
              <path
                d='M331.1 31.9999C326.7 32.9999 323 35.8999 320.5 40.0999C317.5 45.1999 317.7 60.4999 320.9 67.7999C322.4 71.1999 324 73.1999 325.4 73.5999C326.5 73.8999 336.2 73.9999 346.8 73.7999L366 73.4999V132.6V191.7L368.3 196.1C372 203 377.7 205.4 391.5 205.8C397.8 206 405.5 205.5 409.5 204.8L416.5 203.5L416.8 138.5L417 73.4999L431.1 73.7999C439 73.9999 447.6 73.5999 450.6 72.9999C457.6 71.4999 462.6 67.3999 464.1 61.6999C465.8 55.1999 464.8 42.3999 462.1 36.1999L459.8 30.9999L397.1 31.0999C362.7 31.1999 333 31.5999 331.1 31.9999Z'
                fill='black'
              />
              <path
                d='M197.9 32.7C196.4 32.9 192.8 34.5 189.9 36.3C185.6 38.9 184 40.7 181.5 45.4L178.5 51.4L178.2 117.8C178 159.6 178.3 186.2 178.9 189.7C181 200.8 187.3 205.1 202.7 205.8C207.7 206 215.7 205.7 220.4 205L229 203.8V173.9V144.1L256.9 143.8C283.3 143.5 285 143.4 287.6 141.4C292 138.2 293.9 134.9 295 129.1C296.2 122.6 294.9 113.7 291.8 107.2L289.8 103H259.4H229V88.2V73.5L257.2 73.8C287.9 74.1 294.2 73.4 299 69.3C305.3 64.1 306.6 50 302 37.7L299.9 32L250.2 32.1C222.9 32.2 199.3 32.5 197.9 32.7Z'
                fill='black'
              />
            </svg>
          </Center>
        </Wrap>
      </Center>
    </Container>
  );
};

export default Featured;
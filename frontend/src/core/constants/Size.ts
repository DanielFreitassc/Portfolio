const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    desktopS:'1360px',
    laptopL: '1440px',
    desktop: '1921px'
  }


export const device = {
  mobileS: `(max-width: ${size.mobileM})`,         // Até 375px
  mobileM: `(min-width: ${size.mobileM}) and (max-width: ${size.mobileL})`,  // Entre 375px e 425px
  mobileL: `(min-width: ${size.mobileL}) and (max-width: ${size.tablet})`,   // Entre 425px e 768px
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,     // Entre 768px e 1024px
  laptop: `(min-width: ${size.laptop}) and (max-width: ${size.desktopS})`,    // Entre 1024px e 1440px
  desktopS: `(min-width: ${size.desktopS}) and (max-width: ${size.laptopL})`, // Entre 1366px e 1440px
  laptopL: `(min-width: ${size.laptopL}) and (max-width: ${size.desktop})`,  // Entre 1440px e 2560px
  desktop: `(min-width: ${size.desktop})`                                    // A partir de 2560px
};

import { 
    AboutDaniel, 
    AboutSubTitle, 
    BoxImage, 
    ContainerHome, 
    ContainerImageMan, 
    ContentAboutAndImage,
    ContentContainerImageAndCurrently, 
    ContentCurrently, 
    ContentTitle, 
    CurrentlyJob, 
    ImageDots, 
    ImageLogo, 
    ImageMan, 
    JoinTitle, 
    StylePurpleInTitle, 
    TextCurrently
} from "./style"

import Man from "../../assets/Man.png"
import Dots from "../../assets/Dots.png"
import Logo from "../../assets/Logo.png"
import Box from "../../assets/Rectangle.png"
export const Home = () => {
    return(
        <ContainerHome>
                <ContentAboutAndImage>
                    <AboutDaniel>
                        <JoinTitle>
                            <ContentTitle>
                                Daniel é um <StylePurpleInTitle>Dev Backend</StylePurpleInTitle> com Experiência em <StylePurpleInTitle>Infraestrutura</StylePurpleInTitle></ContentTitle>
                        </JoinTitle>

                        <AboutSubTitle>
                            Dedicado, focado em construir APIs de backend escaláveis 
                            e soluções eficientes.
                        </AboutSubTitle>
                    </AboutDaniel>

                    <ContentContainerImageAndCurrently>
                        <ContainerImageMan>
                            <ImageDots src={Dots} alt="Foto pontos brancos" />
                            <ImageMan src={Man} alt="Foto de um homem de capuz e moletom" />
                            <ImageLogo src={Logo} alt="Foto uma logo" />
                        </ContainerImageMan>
                        <ContentCurrently>
                            <BoxImage src={Box} alt="Caixa decorativa rosa" />
                            <TextCurrently>Atuamente trabalhando em</TextCurrently><CurrentlyJob>LABTEC</CurrentlyJob>
                        </ContentCurrently>
                    </ContentContainerImageAndCurrently>
                </ContentAboutAndImage>
        </ContainerHome>
    )
}
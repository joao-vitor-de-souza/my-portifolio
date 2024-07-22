import { Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/Messi.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { Padding } from "@mui/icons-material";

const Hero = () => {
    
    const StyledHero = styled ("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.contrastText,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]:{ // Papel de Parede na Versão de celular
            backgroundColor: "red",
            PaddingTop: "100px"
        },

        [theme.breakpoints.up('md')]:{ // Papel de Parede na Versão de PC
            backgroundColor: "blue",
            PaddingTop: "0px"
            
 
        }
    }))

    const StyledImg = styled ("img")(()=> ({
        width: "75%",
        borderRadius: "50%",
        border: '1px solid${theme.palette.primary.contrastTest',
    }))


    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}> 
                    <Grid item xs={12} md={5}>
                        <StyledImg src={Avatar} />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}> Lionel Messi </Typography>
                        <Typography color="primary.contrastText" variant='h2' textAlign="center" > Simplesmente o G.O.A.T </Typography>

                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                    <DownloadIcon/>
                                        <Typography>
                                            Download CV
                                        </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">                        
                            <StyledButton>
                                    <EmailIcon/>
                                        <Typography>
                                             Contact Me
                                        </Typography>
                            </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  
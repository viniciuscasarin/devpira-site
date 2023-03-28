import { Box } from "@mui/material"
import { Typography } from "../Typography"

const JobsIntro: React.FC = () => {
    const defaultWidth = '1345px'
    const defaultHeight = '560px'
    return (
        <Box sx={{ background: "linear-gradient(45deg, #E63462, #1E90FF)", display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Box sx={{ width: defaultWidth, display: 'flex', height: defaultHeight, alignItems: 'center' }}>

                <Box sx={{ marginLeft: '100px', width: '800px' }}>
                    <Box sx={{ marginBottom: '40px' }}>
                        <Typography variant="h3" color="contrast">Vagas de</Typography>
                        <Typography variant="h3" color="contrast">emprego</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" color="contrast">Aqui você encontra as vagas de empregos que a comunidade oferece e compartilha gratuitamente.</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', width: '740px' }}>
                    <Box sx={{ background: 'url("/images/JobsHeader/Fly.svg")', width: '400px', height: '400px' }}></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default JobsIntro
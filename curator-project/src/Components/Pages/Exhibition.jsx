import { textInvi } from "../Navigation/consts/sidebarItems";
import ImageGallery from "../common/ImageGallery";
import Typography from '@mui/material/Typography';

const Exhibition = () => {
    return (<><ImageGallery sx={{marginBottom: '10000px'}}/>
<Typography color="white">
    {textInvi}
</Typography>
    </>
    );
};

export default Exhibition;
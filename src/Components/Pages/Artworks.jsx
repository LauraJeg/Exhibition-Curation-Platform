import CommonArtCard from "../common/CommonArtCard"
import { textInvi } from "../Navigation/consts/sidebarItems";
import Typography from '@mui/material/Typography';
const terms = {query:"Laura",image_exists:true, page: 1,page_size:15, toggleCleveland: true, toggleVA: true, type: 'Sculpture'}


const Artworks = ({selectedCategories, selectedMuseums}) => {
console.log(selectedCategories, selectedMuseums, 'in the artworks')
    return (<>
    <CommonArtCard terms = {terms} selectedCategories={selectedCategories} selectedMuseums={selectedMuseums}/>
    <Typography color="white">
    {textInvi}
</Typography>
    </>
    );
};

export default Artworks;
import CommonArtCard from "../common/CommonArtCard"
const terms = {query:"Laura",image_exists:true, page: 1,page_size:15, toggleCleveland: false, toggleVA: true}

const Artworks = () => {

    return (<><CommonArtCard terms = {terms}/>
    </>
    );
};

export default Artworks;
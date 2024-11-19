export const parsingClevData = (art) => {
    const onDisplay = art.exhibitions.current.length !== 0? 'This piece is displayed in the Cleveland Museum now':'This piece is in storage'
    const creator = art.creators.length === 0? 'Unknown': art.creators[0].description
    return {
        isClev : true,
        onDisplay : onDisplay,
        type: art.type,
        title: art.title,
        creator : creator,
        creationDate : art.creation_date,
        description: art.description,
        image : art.images.web.url,
        key: art.accession_number,
        avatar: "/home/mashca/northcoders/projects/Exhibition-Curation-Platform/curator-project/assets/ClevSymbol.jpeg",
    }
}

export const parsingVAData = (art)=> {
    const onDisplay = art.onDisplay? 'This piece is displayed in the V & A now':'This piece is in storage'
    const creator = art._primaryMaker.name === undefined? 'Unknown': art._primaryMaker.name
    const dated = art._primaryDate.length === 0? 'Unknown': art._primaryDate

    return{
        isClev : false,
        onDisplay: onDisplay,
        type: art.objectType,
        title: art._primaryTitle,
        creator: creator,
        image: `https://framemark.vam.ac.uk/collections/${art._primaryImageId}/full/600,400/0/default.jpg`,
        description: 'No description was provided for this piece.',
        key: art.systemNumber,
        creationDate: dated,
        avatar: "'../../../assets/V&Asymbol.jpg"
    }
}
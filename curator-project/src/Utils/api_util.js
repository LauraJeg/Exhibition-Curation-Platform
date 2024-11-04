export const parsingClevData = (art) => {
    const onDisplay = art.exhibitions.current.length !== 0? 'This piece is displayed in the Cleveland Museum now':'This piece is in storage'
    const creator = art.creators.length === 0? 'Unknown': art.creators[0]
    return {
        isClev : true,
        onDisplay : onDisplay,
        type: art.type,
        title: art.title,
        creator : creator,
        creationDate : art.creation_date,
        description: art.description,
        image : art.images.web.url,
        key: art.accession_number
    }
}
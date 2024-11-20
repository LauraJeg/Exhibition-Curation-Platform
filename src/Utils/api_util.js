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
        sortableDate: art.sortable_date
    }
}

export const parsingVAData = (art)=> {
    const onDisplay = art.onDisplay? 'This piece is displayed in the V & A now':'This piece is in storage'
    const creator = art._primaryMaker.name === undefined? 'Unknown': art._primaryMaker.name
    const dated = art._primaryDate.length === 0? 'Unknown': art._primaryDate

    //putting the date into a format that I can sort it into

    const numbers = [];

    const foundNumbers = art._primaryDate.match(/-?\d+/g);
    
    if (foundNumbers) {
        numbers.push(...foundNumbers.map(Number)); 
    }

    const foundBC = art._primaryDate.match(/\bbc\b/gi);
    let sortedDate = numbers.length > 0 ? numbers[0] : null;
    if (foundBC && sortedDate !== null) {
        sortedDate = -sortedDate;
    }
    

    return {
        isClev : false,
        onDisplay: onDisplay,
        type: art.objectType,
        title: art._primaryTitle,
        creator: creator,
        image: `https://framemark.vam.ac.uk/collections/${art._primaryImageId}/full/600,400/0/default.jpg`,
        description: 'No description was provided for this piece.',
        key: art.systemNumber,
        creationDate: dated,
        avatar: "'../../../assets/V&Asymbol.jpg",
        sortableDate: sortedDate
    }
}

export const sortByArtist = (data, sortOrder) => {

    const sortedData = data.sort((a, b) => {
        const artistA = a.creator.toLowerCase();
        const artistB = b.creator.toLowerCase();

    if (artistA < artistB) {
        return sortOrder === 'asc' ? -1 : 1;
    }
    if (artistA > artistB) {
        return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
});
return sortedData;
}

export const sortByDate = (data, sortOrder) => {
    console.log(data, sortOrder)
    const sortedData = data.sort((a, b) => {
        const dateA = a.sortableDate;
        const dateB = b.sortableDate; 

       // handle 'Unknown' dates
       if (dateA === 'Unknown') {
        return 1; 
    }
    if (dateB === 'Unknown') {
        return -1;
    }

    if (sortOrder === 'asc') {
        return dateA - dateB; 
    } else if (sortOrder === 'desc') {
        return dateB - dateA;
    }
});

    return sortedData;
}


const Exhibition = () => {

        const storedData = localStorage.getItem("artworks");
        console.log(storedData)
        const parsedData = storedData ? JSON.parse(storedData) : [];
      console.log(parsedData)
    return (<></>
    );
};

export default Exhibition;
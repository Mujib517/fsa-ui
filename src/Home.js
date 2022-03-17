import React, { useContext } from "react"

const DataContext = React.createContext('data');

const Level3 = () => {
    const cnt = useContext(DataContext);
    return <>
        <h1>Level 3, count is {cnt}</h1>
    </>
}

const Level2 = () => {
    const cnt = useContext(DataContext);
    return <>
        <h1>Level 2, {cnt}</h1>
        <Level3 />
    </>
}
const Level1 = () => <>
    <h1>Level 1</h1>
    <Level2 />
</>


const Root = () => {
    return <DataContext.Provider value={10000000}>
        <Level1 />
    </DataContext.Provider>
}

const Home = () => <>
    <h1>Home Page</h1>
    <Root />
</>

export default Home;

import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Cards from '../Cards/Cards';

const Main = () => {
    const [cards, setCards] = useState([])
    const [showAll, setShowAll] = useState(false);
    const [singleData, setSingleData] = useState({})
    const [id, setId] = useState('');
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/ai/tools`)
            .then(res => res.json())
            .then(cards => setCards(cards.data.tools))
            .catch(err => console.log(err));
    }, [])
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
        .then(res => res.json())
        .then(data => setSingleData(data.data))
        .catch(err => console.log(err))
    }, [id])
    const sortByDate = () => {
        const sortedData = cards.sort((a,b) => new Date(a.published_in) - new Date(b.published_in));
        setCards([...sortedData]);
        document.getElementById('sort-by-date').classList.add('hidden')
    }
    const handleShowAll = () =>{
        setShowAll(true)
    }
    const handleModal = (id) =>{
        setId(id);
    }
    console.log(singleData);
    return (
        <main>
            <Button clickFunction={sortByDate} id={'sort-by-date'}>Sort By Date</Button>
            <Cards cards={cards} showAll={showAll} handleModal={handleModal}/>
           {
            !showAll &&  <Button clickFunction={handleShowAll}>See More</Button>
           }
        </main>
    );
};

export default Main;
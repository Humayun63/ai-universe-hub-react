import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Cards from '../Cards/Cards';
import Modal from '../Modal/Modal';

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
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
            .then(res => res.json())
            .then(data => setSingleData(data.data))
            .catch(err => console.log(err))
    }, [id])
    const sortByDate = () => {
        const sortedData = cards.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
        setCards([...sortedData]);
        document.getElementById('sort-by-date').classList.add('hidden')
    }
    const handleShowAll = () => {
        setShowAll(true)
    }
    const handleModal = (id) => {
        setId(id);
    }
    return (
        <>
            {
                !cards.length && (
                    <div className="flex items-center justify-center w-full h-72">
                        <div
                            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Loading...</span
                            >
                        </div>
                    </div>
                )
            }
            {
                cards.length && (
                    <main>
                        <Modal singleData={singleData} />
                        <Button clickFunction={sortByDate} id={'sort-by-date'}>Sort By Date</Button>

                        <Cards cards={cards} showAll={showAll} handleModal={handleModal} />
                        {
                            !showAll && <Button clickFunction={handleShowAll}>See More</Button>
                        }
                    </main>
                )
            }
        </>

    );
};

export default Main;
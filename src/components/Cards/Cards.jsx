import React from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Cards = ({cards, showAll, handleModal}) => {
    return (
        <section className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 my-8'>
            {
                cards.slice(0, showAll ? 12 : 6).map(card => <SingleCard card={card} key={card.id} handleModal={handleModal} />)
            }
        </section>
    );
};

export default Cards;
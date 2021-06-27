import React from 'react';
import Card from './Card';

function CardList({ robots }) {
    // if (true) {
    //     throw new Error('Error')
    // }

    const cardsArray = robots.map((user, i) => {
        return (
            <Card 
                key={ i }
                id={ robots[i].id } 
                name={ robots[i].name } 
                username={ robots[i].username } 
                email={ robots[i].email }
            />
        );
    })
    return (
        <div>
            {cardsArray}
      </div>
    );
}

export default CardList;
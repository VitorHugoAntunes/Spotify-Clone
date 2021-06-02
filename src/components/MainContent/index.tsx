import React from 'react';

import CategorieCard from '../CategorieCard';
import {
    FeedMainContent,
    Cards,
} from './styles';

function MainContent() {
    return (
        <FeedMainContent>
                    <div>
                        <h2>Tocado recentemente</h2>
                        <span>VER TUDO</span>
                    </div>

                    <Cards>
                        <CategorieCard/>
                        <CategorieCard/>
                        <CategorieCard/>
                        <CategorieCard/>
                        <CategorieCard/>
                        <CategorieCard/>
                    </Cards>
                </FeedMainContent>
    )
}

export default MainContent;
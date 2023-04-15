import React from 'react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import ExpandedListUI from './ExpandedListUI';

describe('ExpandedListUI TESTS', () => {
    test('ellipsed ExpandedListUI should not be changed', () => {
        render(
            <ExpandedListUI toggleButtonTexts={['Развернуть', 'Свернуть']}>
                <p>Вы любите смотреть фильмы онлайн и проводите много времени, прочесывая сайты в поисках чего-нибудь интересного? Стоит задержаться на ivi – фильмов, которые собраны у нас, вам хватит надолго. Коллекция постоянно пополняется как новыми фильмами, так и признанными шедеврами прошлых лет! Независимо от того, кто вы – любитель энергичных боевиков или поклонница молодежных сериалов, изобилие нашего каталога заставит вас забыть обо всех других способах проведения досуга, и вы будете пересматривать любимые фильмы онлайн снова и снова!</p>
                <p>Выбор фильмов очень широк и многообразен, так что каждый найдет для себя что-то интересное, каким бы ни были его вкусы. Предпочитаете картины исключительно зарубежного производства? У нас их предостаточно: это и золотая классика Голливуда, и душевные французские комедии, и темпераментные итальянские драмы, и шумные индийские музыкальные фильмы. А может, вы патриот и любите российские фильмы? Что ж, и таких фильмов у нас немало. Что вам больше по вкусу – добрая старая классика или новинки кинопроката? Неважно, каким будет ваш ответ – у нас есть все, как картины эпохи зарождения кинематографа, так 2016 года и фильмы 2015.</p>
            </ExpandedListUI>
        )
        const expandedList = screen.getByRole('expanded-wrapper');

        expect(expandedList).toMatchSnapshot()
    })

    test('ExpandedList should not be collapsed', () => {
        const spanTexts = ['Читать далее', 'Свернуть'];
        render(
            <ExpandedListUI 
                toggleButtonTexts={spanTexts}
                clipSize={3}
                clipFormat='horizontal'>
                <p>Вы любите смотреть фильмы онлайн и проводите много времени, прочесывая сайты в поисках чего-нибудь интересного? Стоит задержаться на ivi – фильмов, которые собраны у нас, вам хватит надолго. Коллекция постоянно пополняется как новыми фильмами, так и признанными шедеврами прошлых лет! Независимо от того, кто вы – любитель энергичных боевиков или поклонница молодежных сериалов, изобилие нашего каталога заставит вас забыть обо всех других способах проведения досуга, и вы будете пересматривать любимые фильмы онлайн снова и снова!</p>
                <p>Выбор фильмов очень широк и многообразен, так что каждый найдет для себя что-то интересное, каким бы ни были его вкусы. Предпочитаете картины исключительно зарубежного производства? У нас их предостаточно: это и золотая классика Голливуда, и душевные французские комедии, и темпераментные итальянские драмы, и шумные индийские музыкальные фильмы. А может, вы патриот и любите российские фильмы? Что ж, и таких фильмов у нас немало. Что вам больше по вкусу – добрая старая классика или новинки кинопроката? Неважно, каким будет ваш ответ – у нас есть все, как картины эпохи зарождения кинематографа, так 2016 года и фильмы 2015.</p>
            </ExpandedListUI>
        )
        const expandedList = screen.getByTestId('clipped-text');
        const expandButton = screen.getByText(spanTexts[0]);
        userEvent.click(expandButton);
        
        expect(expandedList).not.toHaveClass('is-truncated');
    })
})
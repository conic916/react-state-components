'use strict'
// counter = licznik , getinitialstat - metoda na zwiekszanie i zmniejszanie licznika
var Counter = React.createClass({
    getInitialState: function () {
        return {
            //poczatkowy stan danego komponentu
            counter: 0
        };
    },
    // inkrementacja = zwiekszanie/zmniejszanie wartosci dla stanu ktorego wartosc bedzie sie zmieniac
    // funkcja ta odpowiada za zmiane stanu, i za pomoca metody setState
    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1

        });
    },

    componentWillMount() {
        console.log('ta metoda wywolujemy Reactelement przed renderowaniem');
    },

    componentDidMount() {
        console.log('Po renderowaniu wywoluje sie metoda componentDidMount');
    },

    componentWillReceiveProps(nextProps) {
        console.log('Ta metoda wywoluje sie przez nowe propsy ( nowe wlasciwosci ) ');
        // console.log( nextProps );
    },

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Metoda wywolywana przed renderowaniem, aktualizuje nowy stan');
        // console.log( nextProps );
        // console.log( nextState );
        return true;
    },

    componentWillUpdate(nextProps, nextState) {
        console.log('Sprawdzanie zmian przed renderowaniem, true / fals ');
        // console.log( nextProps );
        // console.log( nextState );
    },

    componentDidUpdate(prevProps, prevState) {
        console.log('Jesli poprzednia metoda jest ok to wywoluje sie natychmiast ta metoda');
        // console.log( prevProps );
        // console.log( prevState ); 
    },

    componentWillUnmount() {
        console.log('w tej metodzie wykonujemy zdarzenie');
    },

    // renderowanie :
    render: function () {
        return React.createElement('div', {},
            // inkrementacja = za pomoca wlasciwosci onClick ustawiamy, jaka funkcja ma sie wykonac po wystapieniu zdarzenia klikniecia.
            //  React.createElement('button', {
            //counter: 0 zwraca obiekt o ktorego odwolujemy sie przez parametr this.
            React.createElement('button', {
                onClick: this.increment
            }, '+'),
            React.createElement('span', {}, 'Licznik ' + ': ' + this.state.counter),
            React.createElement('button', {
                onClick: this.decrement
            }, '-'),
        );
    }
});



var counter = React.createElement(Counter);
ReactDOM.render(counter, document.getElementById('app'));
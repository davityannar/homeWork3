import React, {Component} from 'react';
import Card from './mainComponents/Card/Card';
import Header from './mainComponents/Header/Header';
import Footer from './mainComponents/Footer/Footer';
import SortingSection from './mainComponents/SortingSection/SortingSection';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


export class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <div>
                    <Header />
                    <SortingSection />
                    <Card />
                    <Footer />
                </div>
            </ErrorBoundary>
            
        )
    }
}

export default App;
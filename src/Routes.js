import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Intro from './components/Intro';
import { useState } from './components/hooks/useState';
import { useInput } from './components/hooks/useInput';
import { useTabs } from './components/hooks/useTabs';
import { useEffect } from './components/hooks/useEffect';
import { useTitle } from './components/hooks/useTitle';
 
const Routes = () => {
    return (
        <Router>
            <Navigation />
            <div className="content">
                <Route exact path="/" component={Intro} />
                <Route path="/useState" component={useState} />
                <Route path="/useInput" component={useInput} />
                <Route path="/useTabs" component={useTabs} />
                <Route path="/useEffect" component={useEffect} />
                <Route path="/useTitle" component={useTitle} />
            </div>
        </Router>
    )
}

export default Routes;
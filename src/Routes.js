import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Intro from './components/Intro';
import { useState } from './components/hooks/useState';
import { useInput } from './components/hooks/useInput';
import { useTabs } from './components/hooks/useTabs';
import { useEffect } from './components/hooks/useEffect';
import { useTitle } from './components/hooks/useTitle';
import { useClick } from './components/hooks/useClick';
import { useConfirm } from './components/hooks/useConfirm';
import { usePreventLeave } from './components/hooks/usePreventLeave';
import { useBeforeLeave } from './components/hooks/useBeforeLeave';
import { useFadeIn } from './components/hooks/useFadeIn';
import { useNetwork } from './components/hooks/useNetwork';
import { useScroll } from './components/hooks/useScroll';
import { useFullScreen } from './components/hooks/useFullScreen';
import { useNotification } from './components/hooks/useNotification';
import { useAxios } from './components/hooks/useAxios';

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
                <Route path="/useClick" component={useClick} />
                <Route path="/useConfirm" component={useConfirm} />
                <Route path="/usePreventLeave" component={usePreventLeave} />
                <Route path="/useBeforeLeave" component={useBeforeLeave} />
                <Route path="/useFadeIn" component={useFadeIn} />
                <Route path="/useNetwork" component={useNetwork} />
                <Route path="/useScroll" component={useScroll} />
                <Route path="/useFullScreen" component={useFullScreen} />
                <Route path="/useNotification" component={useNotification} />
                <Route path="/useAxios" component={useAxios} />
            </div>
        </Router>
    )
}

export default Routes;

import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { PageHeader } from '../PageHeader/PageHeader.jsx';
import './Layout.scss';
import {PageFooter} from "../PageFooter/PageFooter";

export function Layout() {
    return (
        <div className="Layout">
            <PageHeader />
            <main className="Layout__main">
                <Outlet />
            </main>
            <PageFooter />
        </div>
    );
}
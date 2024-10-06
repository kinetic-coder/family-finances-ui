import React from 'react';
import { PiggyBank, TrendingUp, Shield, ChevronRight, Menu } from 'lucide-react';
import './Header.css';

function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex justify-between items-center py-4">
                    <div className="banner">
                        <PiggyBank className="icons" />
                        <span className="title">Family Finances</span>
                        <button className="burger-menu">
                            <Menu size={24} />
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
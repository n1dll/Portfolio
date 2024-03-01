import React from 'react'
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const MenuButton = ({ open, toggleMenu }) => {
  return (
    <div className="mobile-menu block md:hidden p-2">
      {!open ? (
        <Button variant="outline" size="icon" className="rounded-full" onClick={toggleMenu}>
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        </Button>
      ) : (
        <Button variant="outline" size="icon" className="rounded-full" onClick={toggleMenu}>
          <X className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        </Button>
      )}
    </div>
  )
}

export default MenuButton
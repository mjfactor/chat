import { cn } from '@/lib/utils'
import React from 'react'
import { IconLogo } from '../ui/icons'
import HistoryContainer from './history-container'

export const Header: React.FC = async () => {
  return (
    <header className="fixed w-full p-2 flex justify-between items-center z-10 backdrop-blur lg:backdrop-blur-none bg-background/80 lg:bg-transparent">
      <div>
      </div>
      <div className="flex gap-0.5">
        <HistoryContainer />
      </div>
    </header>
  )
}

export default Header

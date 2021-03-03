import {useMemo, useState} from 'react'

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handlemobileMenuOpenn = useMemo((mobileMenuOpen) => setMobileMenuOpen(!mobileMenuOpen), [])
  function handlemobileMenuOpen() {
    setMobileMenuOpen(!mobileMenuOpen)
    console.log('Click')
  }

  return (
    <>
    <div data-todo-x-data="{ open: false }" className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>
    
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/">
                      <span className="sr-only">Workflow</span>
                      <img className="w-auto h-10 sm:h-16" src="/images/logo.svg" />
                    </a>
                    <div className="flex items-center -mr-2 md:hidden">
                      <button data-todo-at-click="open = true" type="button" className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" data-todo-x-description="Heroicon name: outline/menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  
                    <a href="/" className="font-medium text-gray-500 hover:text-gray-900">Serviços</a>
                  
                    <a href="/" className="font-medium text-gray-500 hover:text-gray-900">Equipamentos</a>
                  
                    <a href="/" className="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>
                  
                    <a href="/" className="font-medium text-gray-500 hover:text-gray-900">Sobre</a>
                  

                </div>
              </nav>
            </div>
    
            <div data-todo-x-show="open" data-todo-x-description="Mobile menu, show/hide based on menu open state." data-todo-x-transition-enter="duration-150 ease-out" data-todo-x-transition-enter-start="opacity-0 scale-95" data-todo-x-transition-enter-end="opacity-100 scale-100" data-todo-x-transition-leave="duration-100 ease-in" data-todo-x-transition-leave-start="opacity-100 scale-100" data-todo-x-transition-leave-end="opacity-0 scale-95" className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
              <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img className="w-auto h-8" src="/images/logo.svg" alt="" />
                  </div>
                  <div className="-mr-2">
                    <button data-todo-at-click="open = false" type="button" className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <svg className="w-6 h-6" data-todo-x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
                    </button>
                  </div>
                </div>
                <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                  <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                    
                      <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50" role="menuitem">Serviços</a>
                    
                      <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50" role="menuitem">Equipamentos</a>
                    
                      <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50" role="menuitem">Marketplace</a>
                    
                      <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50" role="menuitem">Sobre</a>
                    
                  </div>
                  <div role="none">
                    <a href="/" className="block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
    
            <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Produzimos</span>
                  {/* space */}
                  <span className="block text-indigo-600 xl:inline"> o som mais incrível </span>
                  <span className="block xl:inline">que você já ouviu</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Captmos o seu som com o melhor equipamento possível, processamos utilizando os softwares mais modernos do mercado, assim entregamos a melhor combinação de sons possível.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="/" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="/" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="" />
        </div>
      </div>
    </>
  )
}
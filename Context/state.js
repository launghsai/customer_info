import React from 'react'
import { ProviderComposer } from './providerComposer'
import {MainProvider} from './index'


const ContextProvider = ({ children }) => {
  return (
    <ProviderComposer
      contexts={[
        <MainProvider />
      ]}>
      {children}
    </ProviderComposer>
  )
}

export default ContextProvider

import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default AuthLayout


{/*No sidebar because all pages included in auth do not include a sidebar*/}
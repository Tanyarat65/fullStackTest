import React, { useState } from 'react'
import './styles.css'
import  baseLogo  from './imgs/base-logo.png'
import { Menu, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <AppMenu />
            <div style={{color: '#E91E76', fontSize:'34px'}}>
                <MenuOutlined 
                    className='menuHamburger'
                    onClick={()=>{
                        setOpenMenu(!openMenu)
                    }} 
                />
            </div>
            <Drawer 
                placement='left'
                open={openMenu} 
                onClose={()=>{
                    setOpenMenu(!openMenu)
                }}
                closeable={false} 
                bodyStyle={{backgroundColor:'azure'}}
            >
                <AppMenu isInline/>
            </Drawer>
        </>
    )
}

function AppMenu({isInline=false}) {
    const navigate = useNavigate()
    
    return (
        <div className={isInline?'containerHamburgerMenu':'container'}>
            <img src={baseLogo} alt='nipa logo' />
            <Menu
                className={isInline?'menuInHamburger':'menu'}
                mode={isInline?'inline':'horizontal'}
                items={[
                    {
                        label: 'Home',
                        key: 'home',
                        onClick: ()=>{
                            navigate('/home')
                        }
                    },
                    {
                        label: 'Create Ticket',
                        key: 'createTicket',
                        onClick: ()=>{
                            navigate('/createTicket')
                        }
                    }
                ]}
            >
            </Menu>
        </div>
    )
}
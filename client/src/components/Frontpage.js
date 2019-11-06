import React from 'react'
import styles from './Frontpage.module.css';
import { Link } from "react-router-dom";
import ModalExample from './ModalExample';



export default function Frontpage() 
{

    return (
        <div>
            <div className={styles.header}>
                <h1 style={{flexGrow: 8}}>Heading</h1>
                

                    <div className={styles.button}><Link to ="/login"><button>Sign in</button></Link></div>
                    <div className={styles.button}><Link to ="/register"><button>Sign up</button></Link></div>

                
            </div>
            


            <div className={styles.notice}>
                <h3>HOX! Lorem ipsum</h3>
            </div>

            <div className={ styles.flexContainer }>
                <div className={ styles.flexContainer_div }>
                    <ul>
                    <li>Activity X</li>
                    <li>Location Y</li>
                    <li>0/14 Filled</li>
                    </ul>
                        
                    <ModalExample/>

                </div>

            </div>
        </div>
        
    );
}

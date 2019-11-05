import React from 'react'
import styles from './Frontpage.module.css';
import { Link } from "react-router-dom";



export default function Frontpage() {
    
    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    return (
        <div>
            <div className={styles.header}>
                <h1 style={{flexGrow: 8}}>Heading</h1>
                

                    <div className={styles.button}><Link><button>Sign in</button></Link></div>
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

                    <div className={styles.button}><button id="myBtn">Join</button></div>

                    <div id="myModal" class="modal">

                        <div class="modalContent">
                            <span class="close">&times;</span>
                            <p>Some text in the Modal..</p>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

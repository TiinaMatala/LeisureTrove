import React from 'react'
import styles from './Frontpage.modules.css';

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


export default function Frontpage() {
    return (
        <div>
            <div className="header">
                <h1>Heading</h1>
            </div>
            
            <div className="button"><button>Sign in</button></div>
            <div className="button"><button>Sign up</button></div>

            <div className="notice">
                <h3>HOX!</h3>
                <p>Lorem ipsum</p>
            </div>

            <div className={styles.flex-container}>
                <div className={styles.flex-container > div}>
                    <ul>
                    <li>Activity X</li>
                    <li>Location Y</li>
                    <li>0/14 Filled</li>
                    </ul>

                    <div className="button"><button id="myBtn">Join</button></div>

                    <div id="myModal" className={styles.modal}>
                        <div className={styles.modal-content}>
                            <span className={styles.close}>&times;</span>
                            <p>Some text in the Modal..</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

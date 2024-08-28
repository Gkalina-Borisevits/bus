import React from 'react';
import styles from "./styles/AboutApp.module.css";
import kinder from "./assets/Kinder.jpeg";

const AboutApp = () => {
  return (
    <div className={styles.aboutContainer}>
        <img src={kinder} alt="kinder"/>
      <div className={styles.aboutContent}>
  
    <p>Die Idee einer App zur Bestellung eines Busses bietet einen Vorteil. Bei der Implementierung des Serverteils wird ein QR-Code generiert, der direkt auf die Bestellseite des Busses verweist. Der QR-Code kann an beliebigen, geeigneten Orten verbreitet werden. Der Vorteil liegt auch in der benutzerfreundlichen Oberfläche zur Auswahl der Route.</p>
    <p>Dem Kunden wird die Möglichkeit geboten, aus den vorhandenen Stationen zu wählen. Dem Administrator wird die Möglichkeit gegeben, Busrouten hinzuzufügen oder zu ändern. Es besteht die Möglichkeit, die Anwendung auf die Hauptseite der Website zu integrieren oder auf einer separaten Domain zu speichern.</p>
  </div>
    </div>
  )
}

export default AboutApp

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {

  const [quetzales, setQuetzales] = useState<number>(0);
  const [resultado, setResultado] = useState<number | null>(null);

  const convertir = () => {
    const usd = quetzales / 8;
    setResultado(Number(usd.toFixed(2)));
  };

  return (
    <IonPage>

      
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle style={{ textAlign: "center" }}>
            DivisApp 24000470
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      
      <IonContent className="ion-padding page-background">

        <IonCard style={{
          borderRadius: "18px",
          background: "#273042ff"
        }}>
          <IonCardHeader>
            <IonCardTitle style={{
              textAlign: "center",
              fontSize: "22px",
              fontWeight: "bold",
            }}>
              Conversor de Quetzales a Dólares
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>

            
            <IonItem className='card-background'>
              <IonLabel position="floating"
              style={{textAlign: "center",}}
              >Cantidad en Quetzales</IonLabel>
              <br />
              <IonInput
              style={{textAlign: "center",}}
                type="number"
                onIonChange={(e) => setQuetzales(Number(e.detail.value))}
              ></IonInput>
            </IonItem>

            
            <IonButton
              expand="block"
              color="primary"
              className="ion-margin-top"
              onClick={convertir}
            >
              Convertir
            </IonButton>

            
            {resultado !== null && (
              <IonCard
                style={{
                  marginTop: "20px",
                  background: "rgb(32, 39, 53)",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}
              >
                <IonCardContent
                  style={{
                    fontSize: "20px",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#4f772d"
                  }}
                >
                  Q{quetzales} = ${resultado} USD
                </IonCardContent>
              </IonCard>
            )}

          </IonCardContent>
        </IonCard>

      </IonContent>

    </IonPage>
  );
};

export default Home;

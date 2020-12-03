import { observer } from "mobx-react-lite"
import React, { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { rootStoreContext } from "../../Stores/rootStore";
import handleDecrypt from "../../Utils/handleEncrypted";

const DecryptForm = () => 
{
    // hent metode for opplastning av data fra rootStore;
    const rootStore = useContext(rootStoreContext);
    const { loadSessionStorageData } = rootStore.dataStore;

    // hooks
    const [encrypted, setEncrypted] = useState("");
    const [password, setPassord] = useState("");
    const [invalidMsg, setInvalidMgs] = useState(" ")

    // lokal validering av felt
    const noInput = "Ett eller flere av feltene er tomme, det er rimelig meningsløst....";
    const decryptFail = "Passord eller kryptert tekst er ikke gyldig!";



    // bypasser hele form action og submitting, kjører denne metoden ved dekryptering
    function runDecrypt()
    {
        // tom invalid felt
        setInvalidMgs(" ")

        // sjekk at felt ikke er tomme
        if (encrypted === "" || password === "")
        {
            setInvalidMgs(noInput);
            return
        }

        // prøv dekryptering
        let decrypted  = handleDecrypt(encrypted, password);

        if (decrypted) 
        {
            loadSessionStorageData();
        }
        else
        {
            setInvalidMgs(decryptFail);
        }
    }




    return (
        <Form >
            <Form.Group >
                <Form.Label>Kryptert tekst</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={10} 
                    placeholder="Lim inn kryptert tekst her"
                    value={encrypted} 
                    onChange={(e) => {setEncrypted(e.target.value)}} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Passord</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="passord"
                    value={password}
                    onChange={(e) => {setPassord(e.target.value)}}
                    autoComplete="no" />
            </Form.Group>
            <Form.Group>
                <Form.Text> {invalidMsg} </Form.Text>
            </Form.Group>
            <Button variant="outline-warning" onClick={runDecrypt}>Dekrypter</Button>
        </Form>
    )
}

export default observer(DecryptForm)
import { observer } from 'mobx-react-lite';
import React, { Fragment, useContext, useEffect } from 'react';
import LoadScreen from './LoadScreen/LoadScreen';
import { rootStoreContext } from '../Stores/rootStore';
import Homepage from './Homepage/Homepage';
import DecryptModal from './DecryptModal/DecryptModal';
// import { encryptedMessage } from '../_Dev_Folder/exportData';
import NotResponsive from './NotResponsive';

/** Hovedkomponent for applikasjon */
const App = () => {

  // laster inn rootStore som React Context
  const rootStore = useContext(rootStoreContext);
  // boolsk verdi for gyldig opplastning av data
  const {dataIsValid, loadSessionStorageData } = rootStore.dataStore;

  // --DEV => exporter data;
  // let myData = encryptedMessage();
  // console.log(myData);


  useEffect(() => {
    let key = sessionStorage.getItem("KEY");
    let txt = sessionStorage.getItem("DATA");

    if (key && txt)
    {
      loadSessionStorageData();
    } 

  },[loadSessionStorageData])

  // last inn loadscreen dersom data ikke er gyldig
  if (!dataIsValid) {
    return (
      <Fragment>
        <NotResponsive />
        <LoadScreen />
        <DecryptModal />
      </Fragment>
    )
  }

  // laster inn hovedsiden dersom data er gyldig
  return (
    <Fragment>
      <NotResponsive />
      <Homepage />
    </Fragment>
  )
}

// eksporter komponent som observer
export default observer(App);

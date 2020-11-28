import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import LoadScreen from './LoadScreen/LoadScreen';
import { rootStoreContext } from '../Stores/rootStore';
import Homepage from './Homepage/Homepage';

/** Hovedkomponent for applikasjon */
const App = () => {

  // laster inn rootStore som React Context
  const rootStore = useContext(rootStoreContext);
  // boolsk verdi for gyldig opplastning av data
  const {dataIsValid} = rootStore.dataStore;

  // last inn loadscreen dersom data ikke er gyldig
  if (!dataIsValid) {
    return (
      <LoadScreen />
    )
  }

  // laster inn hovedsiden dersom data er gyldig
  return (
    <Homepage />
  )
}

// eksporter komponent som observer
export default observer(App);

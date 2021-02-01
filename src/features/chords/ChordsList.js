import React from 'react'
import { useSelector } from 'react-redux'

import FretboardDisplay from '../Fretboard/FretboardDisplay'
import { selectChordIds } from './chordsSlice'

export const ChordsList = () => {
  const chordIds = useSelector(selectChordIds)

  const content = chordIds.map(chordId => (
    <FretboardDisplay
      width="100"
      height="200"
      numStrings="6"
      numFrets="6"
      chordId={chordId}
    />
  ))

  return(
    <div className="split right">
      <h2>Chord List:</h2>
      <div className="chord-list">
        {content}
      </div>
    </div>
  )
}
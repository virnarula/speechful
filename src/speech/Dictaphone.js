import React, {useState, setState, useEffect} from 'react'
import SpeechRecognition, { useSpeechRecognition,  } from 'react-speech-recognition'

const Dictaphone = ({transcriptChangeHandler, commands, finalTranscriptChangeHandler}) => {
    const [transcribing, setTranscribing] = useState(true)
    const [clearTranscriptOnListen, setClearTranscriptOnListen] = useState(false)
  
    const {
        transcript,
        interimTranscript,
        finalTranscript,
        resetTranscript,
        listening,
      } = useSpeechRecognition({ transcribing, clearTranscriptOnListen, commands })

  useEffect(() => {
    transcriptChangeHandler(transcript);
    if (finalTranscriptChangeHandler !== undefined) {
      finalTranscriptChangeHandler(finalTranscript);
    }
  });

  const [status, setStatus] = useState("");

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    setStatus("Not supported");
    return (
        <p>Failed support</p>
    );
  }

  SpeechRecognition.startListening({ continuous: true });

  return (<p></p>);
}

const startListening = () => {
  SpeechRecognition.startListening({ continuous: true })
}
export default Dictaphone

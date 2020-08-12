import React, {useState, setState, useEffect} from 'react'
import SpeechRecognition, { useSpeechRecognition,  } from 'react-speech-recognition'

const Dictaphone = ({transcriptChangeHandler, commands}) => {
    const [transcribing, setTranscribing] = useState(true)
    const [clearTranscriptOnListen, setClearTranscriptOnListen] = useState(true)
  
    const {
        transcript,
        interimTranscript,
        finalTranscript,
        resetTranscript,
        listening,
      } = useSpeechRecognition({ transcribing, clearTranscriptOnListen, commands })

  useEffect(() => {
    if (interimTranscript !== '') {
        console.log('Got interim result:', interimTranscript)
      }
    transcriptChangeHandler(transcript);
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

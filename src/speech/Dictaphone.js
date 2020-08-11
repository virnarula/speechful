import React, {useState, setState} from 'react'
import SpeechRecognition, { useSpeechRecognition,  } from 'react-speech-recognition'

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()
  const [status, setStatus] = useState("Working");

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    setStatus("Not supported");
    return (
        <p>Failed support</p>
    );
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening({ continuous: true })}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <p>{status}</p>
    </div>
  )
}
export default Dictaphone
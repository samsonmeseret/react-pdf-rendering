import { useEffect, useState } from 'react'
import PDFViewer from './component/PdfRenderer'
import './App.css'

function App() {
  const [pdfPath, setPdfPath] = useState("")
  useEffect(()=>{
    fetch("/html_tutorial.pdf").then((data)=>{
      setPdfPath(data.url)
    })
  },[])

  return (
    <>
      <PDFViewer pdfUrl={pdfPath}/>
    </>
  )
}

export default App

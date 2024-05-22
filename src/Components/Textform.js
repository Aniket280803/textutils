import React, {useState}from 'react'

export default function Textform(props) {
    const copyTextToClipboard = () => {
let Text=document.getElementById("my-box");
Text.select();
navigator.clipboard.writeText(Text.value);
    }
    function camelCase(str) {
        // Using replace method with regEx
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
    function TitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
      }
    const handleUpClick=()=>{
        let newText=Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleSpace=()=>{
        let newText=Text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success")
    }
    const handleLcClick=()=>{
        let newText=Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    const handleCPClick=()=>{
        let newText=camelCase(Text);
        setText(newText)
        props.showAlert("Converted to CamelCase","success")
    }
    const handleTCClick=()=>{
        let newText=TitleCase(Text);
        setText(newText)
        props.showAlert("Converted to TitleCase","success")
    }
    const handleCopyClick=()=>{
        copyTextToClipboard(Text);
        props.showAlert("Text Copied","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

   const [Text,setText] = useState("")
  return (
        <>
      <div className='container'>
         <h1 style={{color:props.mode ==='light'? 'black':'white'}}>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={Text} onChange={handleOnChange}id="my-box" rows="8" style={{backgroundColor:props.mode ==='light'? 'white':'black',color:props.mode ==='light'? 'black':'white'}} placeholder='Enter your Text Here'></textarea>
</div>
 <button className="btn btn-primary my-3" onClick={handleUpClick}>{props.buttonType}</button>
 <button className="btn btn-primary my-3 mx-2" onClick={handleLcClick}>{props.buttonUse}</button>
 <button className="btn btn-primary my-3 mx-2" onClick={handleCPClick}>{props.buttonDemand}</button>
 <button className="btn btn-primary my-3 mx-2" onClick={handleTCClick}>Title Case</button>
 <button className="btn btn-primary my-3 mx-2" onClick={handleCopyClick}>CopyToClipboard</button>
 <button className="btn btn-primary my-3 mx-2" onClick={handleSpace}>Remove Extra Space</button>
 <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>clear</button>
    </div>
    <div className="container my-3" style={{color:props.mode ==='light'? 'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{Text.split(" ").length-1} words and {Text.length} characters</p>
        <p>{0.09*(Text.split(" ").length-1)} Time in  minutes to read the Text.</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Enter something in the text-box above to preview it."}</p>

    </div>
        </>
  )
}
